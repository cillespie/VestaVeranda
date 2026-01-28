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

if (!token) {
    console.error('PINTEREST_ACCESS_TOKEN not found in .env. local');
    process.exit(1);
}

console.log('Attempting to fetch boards from PINTEREST SANDBOX API...');

const options = {
    hostname: 'api-sandbox.pinterest.com',
    path: '/v5/boards',
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`Status Code: ${res.statusCode}`);
        if (res.statusCode === 200) {
            const response = JSON.parse(data);
            console.log('\nAvailable SANDBOX Boards:');
            console.log('-----------------');
            if (response.items && response.items.length > 0) {
                response.items.forEach(board => {
                    console.log(`Name: ${board.name}`);
                    console.log(`ID: ${board.id}`);
                    console.log('-----------------');
                });
            } else {
                console.log('No boards found in Sandbox. (You might need to create one via API if UI is separate)');
            }
        } else {
            console.error('Error fetching Sandbox boards:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
