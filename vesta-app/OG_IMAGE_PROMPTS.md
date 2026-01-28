# OG Image Prompts for Vesta Veranda Living

These prompts can be used to generate 1200×630px Open Graph images for social sharing.

---

## 1. Fire Pit on Composite Deck
```
Branded social media image for "Fire Pit on Composite Deck Safety Guide". Modern patio scene at dusk with a stylish propane fire table on a beautiful Trex composite deck. Warm flames visible. Overlay includes modern sans-serif text "Can You Put a Fire Pit on a Composite Deck?" with "Vesta Veranda Living" logo in corner. 1200x630 pixels, professional marketing photography style with warm tones.
```

---

## 2. Robot Mower for Hills
```
Branded social media image for "Best Robot Mower for Hilly Yards". Aerial view of a green hillside lawn with a sleek robot mower climbing a slope. Tech-modern aesthetic with blue/cyan accents. Overlay text "Best Robot Mower for Hills 2026" in bold modern font. "Vesta Veranda Living" logo in corner. 1200x630 pixels, outdoor tech product photography.
```

---

## 3. Ooni vs Gozney Pizza Ovens
```
Branded social media image comparing pizza ovens. Split-screen composition: left side shows an Ooni portable pizza oven, right side shows a Gozney Roccbox. Fresh wood-fired pizza visible. Warm orange/amber tones. Bold text overlay "Ooni vs Gozney: Which Pizza Oven Wins?" with "Vesta Veranda Living" logo. 1200x630 pixels, food lifestyle photography.
```

---

## 4. Backyard Lighting Without Electricity
```
Branded social media image for solar lighting guide. Enchanting backyard at twilight with solar string lights glowing overhead and solar pathway stakes illuminating a garden path. Magical evening ambiance. Text overlay "Backyard Lighting Without Electricity" in elegant font. "Vesta Veranda Living" logo. 1200x630 pixels, atmospheric lifestyle photography.
```

---

## 5. Lawn Games for Weddings
```
Branded social media image for outdoor wedding games. Elegant outdoor wedding venue lawn with giant Jenga, cornhole boards, and croquet setup visible. White/blush/sage color palette. Romantic golden hour lighting. Text overlay "Best Lawn Games for Weddings" in elegant serif font. "Vesta Veranda Living" logo. 1200x630 pixels, wedding lifestyle photography.
```

---

## 6. Patio Furniture Guide
```
Branded social media image for patio furniture buying guide. Beautiful styled patio with sectional sofa, dining set, and accent chairs. Neutral cream/gray/terracotta palette. Morning light. Text overlay "Patio Furniture Buying Guide 2026" in modern font. "Vesta Veranda Living" logo in corner. 1200x630 pixels, interior/exterior design photography.
```

---

## 7. Gazebo vs Pergola
```
Branded social media image comparing shade structures. Split composition: left shows a fully covered gazebo with curtains, right shows an open pergola with climbing vines. Both styled beautifully with furniture. Text overlay "Gazebo vs Pergola: Which Is Right for You?" in clean sans-serif. "Vesta Veranda Living" logo. 1200x630 pixels, landscape architecture photography.
```

---

## 8. Homepage / Default OG Image
```
Branded hero Open Graph image for Vesta Veranda Living. Stunning backyard oasis scene with fire pit glowing, comfortable outdoor furniture, string lights overhead, and lush landscaping. Warm sunset tones. Large "Vesta Veranda Living" wordmark centered. Tagline "Curated Outdoor Living Essentials" below. 1200x630 pixels, aspirational lifestyle photography.
```

---

## Usage Notes

1. **Size:** All images should be 1200×630 pixels
2. **Format:** PNG or JPG
3. **Text:** Keep overlay text minimal and high-contrast
4. **Logo:** Place consistently in bottom-right corner
5. **File names:** Save as `/public/images/og/[page-slug].png`

After generating, update each page's metadata:
```tsx
export const metadata: Metadata = {
    title: '...',
    description: '...',
    openGraph: {
        images: [{ url: '/images/og/fire-pit-composite-deck.png', width: 1200, height: 630 }],
    },
};
```
