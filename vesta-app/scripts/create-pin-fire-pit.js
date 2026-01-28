const https = require('https');
const fs = require('fs');
const path = require('path');

// Read .env.local
const envPath = path.join(__dirname, '../.env.local');
let token = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/PINTEREST_ACCESS_TOKEN=(.+)/);
    if (match) {
        token = match[1].trim();
    }
} catch (e) {
    console.error('Could not read .env.local');
    process.exit(1);
}

const BOARD_ID = '1103522783635005374';

// Simplest possible payload
const pinData = {
    board_id: BOARD_ID,
    title: 'Fire Pit Guide',
    media_source: {
        source_type: 'image_url',
        url: 'https://vesta-veranda-living.web.app/images/fire-pit-deck-hero.png'
    }
};

console.log('Creating Pin with SIMPLIFIED data:', JSON.stringify(pinData, null, 2));

const postData = JSON.stringify(pinData);

const options = {
    hostname: 'api.pinterest.com',
    path: '/v5/pins',
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        if (res.statusCode >= 200 && res.statusCode < 300) {
            const response = JSON.parse(data);
            console.log('\nSUCCESS! Pin Created!');
            console.log('Pin ID:', response.id);
            console.log('View Pin:', `https://www.pinterest.com/pin/${response.id}`);
        } else {
            console.error('\nError creating pin:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
