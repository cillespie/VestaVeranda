# Security Headers Documentation

## Implemented Headers

### 1. **X-Frame-Options: DENY**
- **Purpose:** Prevents clickjacking attacks
- **Effect:** Website cannot be embedded in `<iframe>`, `<frame>`, or `<object>` tags
- **Impact:** Protects users from malicious sites trying to overlay your content

### 2. **X-Content-Type-Options: nosniff**
- **Purpose:** Prevents MIME type sniffing
- **Effect:** Browsers must respect the `Content-Type` header
- **Impact:** Prevents browsers from executing malicious files disguised as images/CSS

### 3. **Referrer-Policy: strict-origin-when-cross-origin**
- **Purpose:** Controls how much referrer information is shared
- **Effect:** 
  - Same origin: full URL
  - Cross-origin HTTPS: origin only
  - Cross-origin HTTP: no referrer
- **Impact:** Protects user privacy while maintaining analytics

### 4. **Strict-Transport-Security (HSTS)**
- **Purpose:** Forces HTTPS connections
- **Value:** `max-age=63072000; includeSubDomains; preload`
- **Effect:** 2 years of forced HTTPS, including subdomains
- **Impact:** Prevents man-in-the-middle attacks, SSL stripping

### 5. **X-XSS-Protection: 1; mode=block**
- **Purpose:** Legacy XSS protection for older browsers
- **Effect:** Blocks page if XSS attack detected
- **Impact:** Defense-in-depth for IE and old Edge

### 6. **Permissions-Policy**
- **Purpose:** Restricts dangerous browser features
- **Disabled:** Camera, microphone, geolocation, FLoC tracking
- **Impact:** Reduces attack surface, improves privacy

### 7. **Content-Security-Policy (CSP)**
Most important header! Here's what's allowed:

#### Scripts
- ✅ Same origin
- ✅ Inline scripts (required for Next.js)
- ✅ eval (required for Next.js dev mode)
- ✅ Google Analytics, Google Tag Manager
- ❌ Any other third-party scripts

#### Styles
- ✅ Same origin
- ✅ Inline styles (required for CSS-in-JS)
- ✅ Google Fonts
- ❌ Other external stylesheets

#### Images
- ✅ Same origin
- ✅ Data URIs
- ✅ HTTPS and HTTP (for affiliate images from Amazon, etc.)
- ✅ All external images

#### Fonts
- ✅ Same origin
- ✅ Data URIs
- ✅ Google Fonts CDN

#### Frames
- ✅ Same origin
- ✅ YouTube embeds
- ❌ Other external frames

#### API Calls (connect-src)
- ✅ Same origin
- ✅ Google Analytics
- ✅ Firebase Storage
- ✅ Firestore
- ❌ Other external APIs

#### Other Restrictions
- ❌ Adobe Flash, Java applets (object-src: none)
- ❌ Base tag injection attacks
- ❌ Form submission to external sites
- ❌ Being embedded in iframes

---

## Testing

### 1. **Build and Run Locally**
```bash
npm run build
npm start
```

### 2. **Check Headers in Browser**
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Click any request
5. Check "Response Headers" section

### 3. **Test with SecurityHeaders.com**
Once deployed:
1. Visit [securityheaders.com](https://securityheaders.com)
2. Enter your URL: `https://vestaverandaliving.store`
3. Should get an **A** or **A+** rating

### 4. **Monitor CSP Violations**
If you see console errors about CSP blocking something:
1. Check browser console for CSP violation warnings
2. Update `next.config.ts` to allow the specific resource
3. Use `report-uri` directive to log violations (optional)

---

## Common Issues & Fixes

### Issue: "Refused to load script because it violates CSP"
**Fix:** Add the domain to `script-src` in CSP

### Issue: Google Fonts not loading
**Already fixed:** We allow `fonts.googleapis.com` and `fonts.gstatic.com`

### Issue: Affiliate images not loading
**Already fixed:** We allow all HTTPS images with `img-src ... https:`

### Issue: Social media embeds broken
**Fix:** Add domain to `frame-src`:
```typescript
"frame-src 'self' https://www.youtube.com https://www.facebook.com https://platform.twitter.com",
```

---

## Future Enhancements

### Add CSP Reporting
Monitor violations in production:
```typescript
"report-uri https://your-domain.report-uri.com/r/d/csp/enforce",
```

### Subresource Integrity (SRI)
For critical external scripts, add integrity hashes:
```html
<script src="..." integrity="sha384-..." crossorigin="anonymous"></script>
```

### Environment-Specific CSP
Different rules for dev vs production:
```typescript
const isDev = process.env.NODE_ENV === 'development';
const scriptSrc = isDev 
  ? "'self' 'unsafe-inline' 'unsafe-eval'" 
  : "'self' 'unsafe-inline' https://analytics.google.com";
```

---

## Security Checklist

- [x] X-Frame-Options set to DENY
- [x] X-Content-Type-Options set to nosniff
- [x] Referrer-Policy configured
- [x] HSTS enabled with 2-year max-age
- [x] Permissions-Policy restricts dangerous features
- [x] Content-Security-Policy configured
- [x] CSP allows Google Analytics
- [x] CSP allows Firebase
- [x] CSP allows Google Fonts
- [x] CSP allows affiliate images
- [ ] Test on securityheaders.com (after deployment)
- [ ] Add cookie consent banner (if using analytics)
- [ ] Monitor CSP violations in production

---

## Next Steps

1. **Deploy to production**
2. **Test on securityheaders.com**
3. **Monitor browser console for CSP violations**
4. **Adjust CSP as needed based on real usage**
5. **Consider adding CSP reporting endpoint**
