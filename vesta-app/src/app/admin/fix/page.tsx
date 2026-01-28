'use client';

import { useState } from 'react';
import { collection, query, where, getDocs, updateDoc, doc, getFirestore } from 'firebase/firestore';
import { app } from '@/lib/firebase'; // Ensure this exports the initialized app

export default function FixImagesPage() {
    const [status, setStatus] = useState<string[]>([]);
    const db = getFirestore(app);

    const fixMap: Record<string, string> = {
        "Giant 3-in-1 Checkers": "/images/products/giant_checkers_rug.png",
        "Spikeball Standard Set": "/images/products/spikeball_standard_set.png",
        "Kan Jam Travel": "/images/products/kan_jam_travel.png",
        "GoSports Ladder Toss": "/images/products/gosports_ladder_toss.png",
        "GoSports Giant Toppling Tower": "/images/products/gosports-giant-toppling-tower.png"
    };

    const runFix = async () => {
        setStatus(prev => [...prev, "Starting fix..."]);
        const productsRef = collection(db, 'products');

        for (const [name, imagePath] of Object.entries(fixMap)) {
            try {
                const q = query(productsRef, where('name', '==', name));
                const snapshot = await getDocs(q);

                if (snapshot.empty) {
                    setStatus(prev => [...prev, `❌ Product not found: ${name}`]);
                    continue;
                }

                const updates = snapshot.docs.map(async (docSnap) => {
                    await updateDoc(doc(db, 'products', docSnap.id), {
                        lifestyleImage: imagePath
                    });
                    return docSnap.id;
                });

                await Promise.all(updates);
                setStatus(prev => [...prev, `✅ Updated ${snapshot.size} docs for: ${name} -> ${imagePath}`]);

            } catch (e: any) {
                setStatus(prev => [...prev, `🔥 Error updating ${name}: ${e.message}`]);
            }
        }
        setStatus(prev => [...prev, "Done."]);
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Admin: Fix Product Images</h1>
            <p className="mb-4">This tool updates specific products in Firestore to use newly generated unique images.</p>

            <button
                onClick={runFix}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Run Fix Script
            </button>

            <div className="mt-8 bg-gray-100 p-4 rounded min-h-[200px] font-mono text-sm">
                {status.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
        </div>
    );
}
