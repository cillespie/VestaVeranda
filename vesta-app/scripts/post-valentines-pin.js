const https = require('https');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// Read .env.local
const envPath = path.join(__dirname, '../.env.local');
let token = '';
let boardId = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const tokenMatch = envContent.match(/PINTEREST_ACCESS_TOKEN=(.+)/);
    const boardMatch = envContent.match(/PINTEREST_BOARD_ID_ARTICLES=(.+)/);

    if (tokenMatch) {
        token = tokenMatch[1].trim();
    }
    if (board Match) {
        boardId = boardMatch[1].trim();
    }
} catch (e) {
    console.error('Could not read .env.local');
    process.exit(1);
}

if (!token) {
    console.error('❌ PINTEREST_ACCESS_TOKEN not found in .env.local');
    process.exit(1);
}

// Valentine's Day Pin Details
const pinData = {
    board_id: boardId || '', // Will list boards if empty
    title: 'Romantic Backyard Date Night Ideas for Valentine\'s Day',
    description: 'Transform your backyard into the perfect Valentine\'s Day date spot. Fire pit, romantic lighting, and cozy vibes—way better than crowded restaurants. Get the essentials for an unforgettable night under the stars. #ValentinesDay #PatioIdeas #DateNight',
    link: 'https://VestaVerandaLiving.store',
    alt_text: 'Romantic couple enjoying Valentine\'s Day on outdoor patio with fire pit and pink red heart string lights',
    // Image URL - You'll need to upload the image to a public URL first
    image_url: '' // ADD YOUR IMAGE URL HERE
};

async function listBoards() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.pinterest.com',
            path: '/v5/boards',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(data));
                }
            });
        });

        req.on('error', reject);
        req.end();
    });
}

async function createPin() {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            board_id: pinData.board_id,
            title: pinData.title.slice(0, 100),
            description: pinData.description.slice(0, 500),
            link: pinData.link,
            alt_text: pinData.alt_text,
            media_source: {
                source_type: 'image_url',
                url: pinData.image_url
            }
        });

        const options = {
            hostname: 'api.pinterest.com',
            path: '/v5/pins',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode === 201) {
                    const response = JSON.parse(data);
                    resolve(response);
                } else {
                    reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                }
            });
        });

        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

async function main() {
    console.log('🌹 Valentine\'s Day Pinterest Pin Poster\n');

    // If no board ID, list boards first
    if (!pinData.board_id) {
        console.log('📋 No board ID found. Listing your boards...\n');
        try {
            const boards = await listBoards();
            if (boards.items && boards.items.length > 0) {
                console.log('Available Boards:');
                boards.items.forEach(board => {
                    console.log(`  - ${board.name} (ID: ${board.id})`);
                });
                console.log('\n👉 Add PINTEREST_BOARD_ID_ARTICLES=[board_id] to your .env.local');
                console.log('   and run this script again.\n');
            } else {
                console.log('No boards found. Create a board on Pinterest first.\n');
            }
        } catch (error) {
            console.error('❌ Error fetching boards:', error.message);
        }
        return;
    }

    // Check for image URL
    if (!pinData.image_url) {
        console.log('❌ No image URL provided!\n');
        console.log('Pinterest requires a publicly accessible image URL.');
        console.log('\nOptions:');
        console.log('  1. Upload the image to your hosting/CDN');
        console.log('  2. Use a temporary image host (imgur, etc.)');
        console.log('  3. Add image to your public/ folder and deploy first\n');
        console.log('Then update pinData.image_url in this script.\n');
        return;
    }

    // Create the pin
    console.log('📌 Creating Pinterest pin...\n');
    console.log(`Title: ${pinData.title}`);
    console.log(`Board ID: ${pinData.board_id}`);
    console.log(`Link: ${pinData.link}\n`);

    try {
        const result = await createPin();
        console.log('✅ Pin created successfully!');
        console.log(`🔗 View pin: https://www.pinterest.com/pin/${result.id}`);
        console.log(`📊 Pin ID: ${result.id}\n`);
    } catch (error) {
        console.error('❌ Error creating pin:', error.message);
    }
}

main();
