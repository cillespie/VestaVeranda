

const fs = require('fs');
const html = fs.readFileSync('home.html', 'utf8');

// Primitive parsing: Split by "card" or similar headers
// We look for <h3 ...>Name</h3> ... src="path"
const chunks = html.split('<div class="card');
chunks.shift(); // remove header

chunks.forEach(chunk => {
    const nameMatch = chunk.match(/<h3[^>]*>([^<]+)<\/h3>/);
    const imgMatch = chunk.match(/src=\\"([^"]+)\\"|src="([^"]+)"/);

    if (nameMatch && imgMatch) {
        const src = imgMatch[1] || imgMatch[2];
        let cleanSrc = src;
        if (src.includes('_next/image')) {
            try {
                const urlParams = new URLSearchParams(src.split('?')[1]);
                cleanSrc = urlParams.get('url');
            } catch (e) { }
        }

        console.log(`Product: "${nameMatch[1]}" | Image: ${cleanSrc}`);
    }
});

