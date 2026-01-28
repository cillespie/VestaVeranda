const https = require('https');
const fs = require('fs');
const path = require('path');

// Read .env.local
const envPath = path.join(__dirname, '../.env.local');
let token = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/PINTEREST_SANDBOX_TOKEN=(.+)/);
    if (match) {
        token = match[1].trim();
    }
} catch (e) {
    console.error('Could not read .env.local');
    process.exit(1);
}

if (!token) {
    console.error('❌ PINTEREST_SANDBOX_TOKEN not found in .env.local');
    console.log('👉 Please generate a Sandbox token from the Pinterest Developer Portal -> Your App -> Test/Sandbox');
    console.log('   and add it to .env.local as PINTEREST_SANDBOX_TOKEN=pina_...');
    process.exit(1);
}

const API_HOST = 'api-sandbox.pinterest.com';

const zlib = require('zlib');

// Helper function for API requests
function apiRequest(method, path, body = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: API_HOST,
            path: path,
            method: method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip'
            }
        };

        if (body) {
            options.headers['Content-Length'] = Buffer.byteLength(body);
        }

        const req = https.request(options, (res) => {
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));

            res.on('end', () => {
                const buffer = Buffer.concat(chunks);
                const encoding = res.headers['content-encoding'];

                if (encoding === 'gzip') {
                    zlib.gunzip(buffer, (err, decoded) => {
                        if (err) return reject(err);
                        handleResponse(res.statusCode, decoded.toString(), resolve, reject);
                    });
                } else {
                    handleResponse(res.statusCode, buffer.toString(), resolve, reject);
                }
            });
        });

        req.on('error', reject);
        if (body) req.write(body);
        req.end();
    });
}

function handleResponse(statusCode, data, resolve, reject) {
    if (statusCode >= 200 && statusCode < 300) {
        try {
            resolve(JSON.parse(data));
        } catch (e) {
            resolve(data);
        }
    } else {
        reject({ statusCode, body: data });
    }
}

async function run() {
    console.log('🤖 Pinterest Sandbox Pin Creator');
    console.log('--------------------------------');

    try {
        // 1. List Boards to find a place to pin
        console.log('1️⃣  Checking for existing boards...');
        const boardsData = await apiRequest('GET', '/v5/boards');

        let boardId = '';
        if (boardsData.items && boardsData.items.length > 0) {
            boardId = boardsData.items[0].id;
            console.log(`   ✅ Found board: "${boardsData.items[0].name}" (ID: ${boardId})`);
        } else {
            console.log('   ⚠️ No boards found. Creating "Demo Board"...');
            const newBoard = await apiRequest('POST', '/v5/boards', JSON.stringify({
                name: 'Demo Board',
                description: 'Board for testing API integration',
                privacy: 'PUBLIC'
            }));
            boardId = newBoard.id;
            console.log(`   ✅ Created board: "Demo Board" (ID: ${boardId})`);
        }

        // 2. Create the Pin
        console.log('\n2️⃣  Creating Pin in Sandbox...');
        const pinPayload = JSON.stringify({
            board_id: boardId,
            title: 'Fire Pit Guide (Sandbox Demo)',
            description: 'This is a test pin created via the Vesta Veranda API integration in the Sandbox environment.',
            link: 'https://vesta-veranda-living.web.app/guides/fire-pit-composite-deck',
            media_source: {
                source_type: 'image_url',
                url: 'https://vesta-veranda-living.web.app/images/fire-pit-deck-hero.png'
            },
            alt_text: 'Fire pit demo image'
        });

        const pinResponse = await apiRequest('POST', '/v5/pins', pinPayload);

        console.log('\n✨ SUCCESS! Pin Created Successfully in Sandbox ✨');
        console.log('-----------------------------------------------');
        if (pinResponse.id) {
            console.log(`📍 Pin ID: ${pinResponse.id}`);
            console.log(`🔗 API Ref: https://api-sandbox.pinterest.com/v5/pins/${pinResponse.id}`);
        } else {
            console.log('⚠️ Pin created but ID not found in response:');
            console.log(JSON.stringify(pinResponse, null, 2));
        }
        console.log('-----------------------------------------------');

    } catch (error) {
        console.error('\n❌ Error:', error.message || error);
        if (error.body) {
            console.error('   API Response:', error.body);
        }
    }
}

run();
