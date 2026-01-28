# Firestore Implementation Guide

## Next Steps

### 1. Enable Firestore in Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Firestore Database" in left sidebar
4. Click "Create Database"
5. Choose production mode
6. Select your region (closest to users)

###2. Deploy Security Rules
```bash
cd vesta-app
firebase deploy --only firestore:rules
```

### 3. Install Dependencies (if needed)
```bash
npm install tsx --save-dev
```

### 4. Run Migration Script
```bash
 npx tsx scripts/migrate-to-firestore.ts
```

This will upload all 90+ products from `products-local.ts` to Firestore.

### 5. Enable Fire store in .env.local
Add to your `.env.local`:
```
NEXT_PUBLIC_USE_FIRESTORE=false
```

Start with `false` to test the fallback works, then change to `true` to use Firestore.

### 6. Test the Application
```bash
npm run dev
```

Navigate to homepage and verify products load correctly.

### 7. Switch to Firestore
Once verified, update `.env.local`:
```
NEXT_PUBLIC_USE_FIRESTORE=true
```

Restart dev server and test again.

---

## Rollback Plan

If anything goes wrong:
1. Set `NEXT_PUBLIC_USE_FIRESTORE=false` in `.env.local`
2. The site will immediately fall back to using `products-local.ts`
3. No data loss, instant recovery

---

## What We've Implemented

✅ **Firestore Integration** (`firebase.ts`)  
✅ **Firestore Service Layer** (`firestore-service.ts`)  
✅ **Product Wrapper with Fallback** (`products-wrapper.ts`)  
✅ **Clean Exports** (`products.ts`)  
✅ **Migration Script** (`scripts/migrate-to-firestore.ts`)  
✅ **Security Rules** (`firestore.rules`)  
✅ **Local Backup** (`products-local.ts`)

---

## Next Level: Admin Panel (Future)

After Firestore is working, you can build an admin panel:
- Simple form to add/edit products
- Protected with Firebase Auth
- No more manual code updates!
