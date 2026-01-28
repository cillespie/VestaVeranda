# CRITICAL IMAGE UNIQUENESS RULE

## ⚠️ ABSOLUTE REQUIREMENT

**NO IMAGE MAY BE REUSED ACROSS DIFFERENT PAGES. PERIOD.**

## The Rule

Every page on the website MUST have completely unique images that are ONLY used on that specific page.

### What This Means

- If an image appears on `/guides/valentines-day-outdoor-date`, it CANNOT appear ANYWHERE else
- If an image appears on `/guides/patio-furniture-guide`, it CANNOT appear ANYWHERE else
- Each guide page needs its own unique set of product images
- Each comparison page needs its own unique product images
- The homepage needs its own unique images

### Why This Matters

1. **SEO**: Search engines penalize duplicate images across pages
2. **User Experience**: Visitors seeing the same images think content is recycled
3. **Credibility**: Unique images per page signal fresh, thoughtful content
4. **Conversion**: Context-specific images perform better than generic stock photos

## Implementation Guidelines

### When Creating a New Page

1. **Generate ALL new images** specific to that page's context
2. **Document the images** in a page-specific image manifest
3. **Never pull from existing page images**
4. **Use descriptive, page-specific filenames**

### Image Naming Convention

```
[page-slug]-[product-type]-[variant].png
```

Examples:
- `valentines-firepit-romantic.png` (Valentine's page ONLY)
- `patio-furniture-wicker-closeup.png` (Patio Furniture page ONLY)
- `christmas-outdoor-string-lights.png` (Christmas page ONLY)

### Product Images

Even when featuring the SAME product on different pages:

- Generate a NEW image with different context/angle/setting
- Valentine's page showing Solo Stove = romantic couple setting
- Patio Furniture page showing Solo Stove = outdoor living room context
- Same product, COMPLETELY different images

## Checking for Violations

Before publishing any page, verify:

```bash
# Search for image reuse
grep -r "image-name.png" src/app/
```

If the same image appears in more than one file → **VIOLATION**

## Handling Hero Images

Hero images are especially critical:

- Must be unique to the page
- Must reflect the page's specific theme/topic
- Cannot be generic "outdoor patio" shots
- Should include contextual elements (Valentine's roses, Christmas decorations, etc.)

## When Updating Pages

If you need to update images on an existing page:

1. Generate NEW replacement images
2. Update the page to use new images
3. Delete old images from `/public/images/` if no longer used
4. Document the change

## Product Card Images

When using `ProductCard` components:

- If showing products from the shared catalog, use custom `lifestyleImage` per page
- Override the default product image with page-specific context
- Never rely on generic product images for content pages

## Exceptions

**There are NO exceptions to this rule.**

- Not for convenience
- Not for time savings
- Not for "similar content"

Every page = unique images. Always.

## Enforcement

This rule should be treated as a:
- **Code review requirement**
- **Build-time check** (if possible)
- **Manual verification step** before deployment

## Quick Reference

✅ **CORRECT:**
- `/guides/valentines-day` uses `valentines-firepit-romantic.png`
- `/guides/winter-patio` uses `winter-firepit-snow.png`
- Same fire pit product, different images

❌ **WRONG:**
- `/guides/valentines-day` uses `firepit-lifestyle.png`
- `/guides/winter-patio` uses `firepit-lifestyle.png`
- Same image repeated = VIOLATION

---

**Remember**: EVERY page needs UNIQUE images. No shortcuts. No exceptions. No excuses.
