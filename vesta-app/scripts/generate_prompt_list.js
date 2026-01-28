
const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('audit_report.json', 'utf8'));

const prompts = [];

function generatePrompt(product) {
    const name = product.name;
    const cat = product.category;
    let base = `Lifestyle photo of ${name}`;
    let setting = "in a beautiful outdoor setting";
    let vibe = "high resolution, professional product photography";

    if (cat === "Winter Maintenance") {
        setting = "being used to clear snow from a driveway or walkway. Winter scene, snow covered landscape, cold but sunny day";
        vibe = "action shot, practical, efficient";
    } else if (cat === "Shade Structures & Gazebos") {
        setting = "set up in a lush backyard garden with patio furniture underneath. Sunny afternoon, vibrant green lawn, blue sky";
        vibe = "inviting, shady, relaxing";
    } else if (cat === "Saunas & Spas") {
        setting = "installed in a modern indoor or outdoor home spa area. Soft steam, relaxation space, wooden textures";
        vibe = "luxury, wellness, peaceful";
    } else if (cat === "Outdoor Audio") {
        setting = "placed on a patio table or near a pool with people enjoying music in the background. Summer party vibes";
        vibe = "energetic, fun, clear audio visual";
    } else if (cat === "Fire Pits, Heaters & Grills") {
        setting = "on a patio at dusk, with a warm fire glowing or heat radiating. Cozy seating area nearby";
        vibe = "warm, inviting, evening ambiance";
    } else if (cat === "Lawn, Garden & Irrigation") {
        setting = "in a well-maintained garden or lawn. Green grass, blooming flowers, summer day";
        vibe = "nurturing, growth, smart technology";
    } else if (cat === "Storage & Organization") {
        setting = "neatly placed on a deck or patio, storing cushions or garden tools. Organized, clean outdoor space";
        vibe = "tidy, practical, spacious";
    } else if (cat === "Furniture - Dining Sets" || cat === "Furniture - Lounge & Seating") {
        setting = "arranged on a stylish patio or deck. Comfortable cushions, table set for a meal or drinks";
        vibe = "stylish, comfortable, modern outdoor living";
    } else if (cat === "Lighting") {
        setting = "illuminating a garden path or patio at night. Warm glowing lights, magical atmosphere";
        vibe = "cozy, decorative, evening sparkle";
    }

    return `${base} ${setting}. ${vibe}.`;
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

// Process Duplicate Groups
audit.duplicates.forEach(group => {
    group.products.forEach(p => {
        prompts.push({
            name: p.name,
            category: p.category,
            filename: slugify(p.name) + '.png',
            prompt: generatePrompt(p)
        });
    });
});

// Process Missing
audit.missing.forEach(p => {
    prompts.push({
        name: p.name,
        category: p.category,
        filename: slugify(p.name) + '.png',
        prompt: generatePrompt(p)
    });
});

fs.writeFileSync('scripts/image_prompts.json', JSON.stringify(prompts, null, 2));
console.log(`Generated ${prompts.length} prompts.`);
