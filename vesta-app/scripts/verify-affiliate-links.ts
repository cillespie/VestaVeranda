/**
 * Verify all hardcoded affiliate links in pages match ProductCatalog.md
 */

import fs from 'fs';
import path from 'path';

// Parse ProductCatalog.md to extract affiliate links
function parseProductCatalog(): Map<string, string> {
    const catalogPath = path.join(__dirname, '../../ProductCatalog.md');
    const content = fs.readFileSync(catalogPath, 'utf-8');

    const affiliateLinks = new Map<string, string>();
    const lines = content.split('\n');

    for (const line of lines) {
        const match = line.match(/\|\s*\*\*([^*]+)\*\*\s*\|[^|]+\|[^|]+\|\s*(https:\/\/[^\s|]+)/);
        if (match) {
            const productName = match[1].trim();
            const link = match[2].trim();
            affiliateLinks.set(link, productName);
        }
    }

    return affiliateLinks;
}

// Find all hardcoded affiliate links in .tsx files
function findHardcodedLinks(directory: string): Map<string, string[]> {
    const linkLocations = new Map<string, string[]>();

    function scanDirectory(dir: string) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                scanDirectory(filePath);
            } else if (file.endsWith('.tsx')) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const relativePath = path.relative(path.join(__dirname, '../src'), filePath);

                // Find all amzn.to links
                const linkMatches = content.matchAll(/https:\/\/(?:amzn\.to|www\.amazon\.com\/dp)\/[^\s"']+/g);

                for (const match of linkMatches) {
                    const link = match[0];
                    if (!linkLocations.has(link)) {
                        linkLocations.set(link, []);
                    }
                    linkLocations.get(link)!.push(relativePath);
                }
            }
        }
    }

    scanDirectory(directory);
    return linkLocations;
}

function verifyLinks() {
    console.log('🔍 Verifying affiliate links across all pages...\n');

    // Parse catalog
    const catalogLinks = parseProductCatalog();
    console.log(`📚 Found ${catalogLinks.size} products in ProductCatalog.md\n`);

    // Find hardcoded links
    const srcDir = path.join(__dirname, '../src');
    const hardcodedLinks = findHardcodedLinks(srcDir);

    console.log(`🔗 Found ${hardcodedLinks.size} unique affiliate links in code\n`);
    console.log('='.repeat(80));
    console.log('Verification Results:');
    console.log('='.repeat(80) + '\n');

    let validCount = 0;
    let invalidCount = 0;
    const invalidLinks: Array<{ link: string, files: string[] }> = [];

    for (const [link, files] of hardcodedLinks.entries()) {
        // Normalize link for comparison
        const normalizedLink = link.replace(/\/$/, ''); // Remove trailing slash

        // Check if this link exists in catalog
        const isValidLink = Array.from(catalogLinks.keys()).some(catalogLink =>
            catalogLink.replace(/\/$/, '') === normalizedLink
        );

        if (isValidLink) {
            const productName = catalogLinks.get(link) || catalogLinks.get(link + '/') || 'Unknown';
            console.log(`✅ ${link}`);
            console.log(`   Product: ${productName}`);
            console.log(`   Used in ${files.length} file(s):`);
            files.forEach(f => console.log(`     - ${f}`));
            console.log('');
            validCount++;
        } else {
            console.log(`❌ ${link}`);
            console.log(`   ⚠️  NOT FOUND in ProductCatalog.md`);
            console.log(`   Used in ${files.length} file(s):`);
            files.forEach(f => console.log(`     - ${f}`));
            console.log('');
            invalidCount++;
            invalidLinks.push({ link, files });
        }
    }

    console.log('='.repeat(80));
    console.log('📊 Summary:');
    console.log('='.repeat(80));
    console.log(`✅ Valid links: ${validCount}`);
    console.log(`❌ Invalid links: ${invalidCount}`);

    if (invalidLinks.length > 0) {
        console.log('\n⚠️  INVALID LINKS FOUND:');
        console.log('These links are hardcoded in your pages but not in ProductCatalog.md:');
        invalidLinks.forEach(({ link, files }) => {
            console.log(`\n  ${link}`);
            files.forEach(f => console.log(`    - ${f}`));
        });
        console.log('\n💡 Action needed: Add these products to ProductCatalog.md or update the links.');
    } else {
        console.log('\n🎉 All affiliate links match ProductCatalog.md!');
    }
}

verifyLinks();
