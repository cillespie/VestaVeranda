
const fs = require('fs');
const html = fs.readFileSync('home.html', 'utf8');

const chunks = html.split('<div class="card');
chunks.shift();

const imgMap = {};

chunks.forEach(chunk => {
    const nameMatch = chunk.match(/<h3[^>]*>([^<]+)<\/h3>/);
    const imgMatch = chunk.match(/src=\\"([^"]+)\\"|src="([^"]+)"/);

    if (nameMatch && imgMatch) {
        const src = imgMatch[1] || imgMatch[2];
        let cleanSrc = src;
        if (src.includes('_next/image')) {
            try {
                const urlParams = new URLSearchParams(src.split('?')[1]);
                const url = urlParams.get('url');
                if (url) cleanSrc = url;
            } catch (e) { }
        }

        if (!imgMap[cleanSrc]) {
            imgMap[cleanSrc] = [];
        }
        imgMap[cleanSrc].push(nameMatch[1]);
    }
});

console.log("--- DUPLICATE IMAGES DETECTED ---");
Object.keys(imgMap).forEach(src => {
    if (imgMap[src].length > 1) {
        console.log(`\nImage: ${src}`);
        imgMap[src].forEach(name => console.log(`  - ${name}`));
    }
});

console.log("\n--- SINGLE USAGE (BUT MAYBE PLACEHOLDER?) ---");
Object.keys(imgMap).forEach(src => {
    if (imgMap[src].length === 1) {
        // Flag potential placeholders or generic names
        if (src.includes('hero') || src.includes('placeholder')) {
            console.log(`[SUSPICIOUS] ${src} -> ${imgMap[src][0]}`);
        }
    }
});
