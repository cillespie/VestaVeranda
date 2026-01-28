/* eslint-disable */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Try to read .env.local
const envPath = path.join(__dirname, '../.env.local');
let envContent = '';
try {
    envContent = fs.readFileSync(envPath, 'utf8');
} catch {
    console.log('Could not read .env.local');
}

const parseEnv = (content) => {
    const config = {};
    content.split('\n').forEach(line => {
        const [key, ...values] = line.split('=');
        if (key && values.length > 0) {
            config[key.trim()] = values.join('=').trim();
        }
    });
    return config;
};

const config = parseEnv(envContent);

// Get credentials (handle typos/variations)
const APP_ID = config.PINTEREST_APP_ID || config.PINTEREST_CLIENT_ID;
const APP_SECRET = config.PINTEREST_APP_SECRET || config.PINTREST_APP_SECRET; // Handle typo in existing env
const REDIRECT_URI = 'http://localhost:3000/';

if (!APP_ID) {
    console.error('\x1b[31mError: PINTEREST_APP_ID not found in .env.local\x1b[0m');
    console.log('Please add PINTEREST_APP_ID=your_app_id to your .env.local file');
    console.log('Or verify you have saved it.');
    process.exit(1);
}

if (!APP_SECRET) {
    console.error('\x1b[31mError: PINTEREST_APP_SECRET not found in .env.local\x1b[0m');
    process.exit(1);
}

const SCOPES = 'boards:read,boards:write,pins:read,pins:write';

function openBrowser(url) {
    const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
    exec(`${start} "${url}"`);
}

const server = http.createServer(async (req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        const code = reqUrl.query.code;

        if (code) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Authorization Successful!</h1><p>You can close this window and check your terminal.</p>');

            console.log('\nAuthorization code received:', code);
            console.log('Exchanging for access token...');

            await exchangeToken(code);

            server.close();
            process.exit(0);
        } else {
            res.writeHead(400);
            res.end('No code found.');
        }
    }
});

async function exchangeToken(code) {
    const authString = Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64');

    try {
        const response = await fetch('https://api.pinterest.com/v5/oauth/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI,
            }),
        });

        const data = await response.json();

        if (data.access_token) {
            console.log('\n\x1b[32mSUCCESS! Access Token Received:\x1b[0m');
            console.log('\n----------------------------------------');
            console.log(`PINTEREST_ACCESS_TOKEN=${data.access_token}`);
            console.log('----------------------------------------\n');
            console.log('Update your .env.local file with this token.');

            // Optionally update the file automatically? 
            // Better to let user do it or ask.
        } else {
            console.error('\nError exchanging token:', data);
        }
    } catch (error) {
        console.error('\nNetwork error:', error);
    }
}

server.listen(3000, () => {
    console.log(`\nServer listening on ${REDIRECT_URI}`);
    console.log('Generating authorization URL...');

    const authUrl = `https://www.pinterest.com/oauth/?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${SCOPES}`;

    console.log('\nPlease visit this URL to authorize:');
    console.log(`\x1b[36m${authUrl}\x1b[0m`);
    console.log('\nOpening browser...');
    openBrowser(authUrl);
});

// Handle port in use
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error('\n\x1b[31mPort 3000 is already in use!\x1b[0m');
        console.error('Please stop your Next.js server (Ctrl+C) and try again.');
        process.exit(1);
    }
});
