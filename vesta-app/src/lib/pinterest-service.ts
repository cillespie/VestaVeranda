// Pinterest API v5 Service
// Handles creating Pins on Pinterest boards

const PINTEREST_API_BASE = 'https://api.pinterest.com/v5';

interface CreatePinOptions {
    boardId: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    altText?: string;
}

interface PinterestResponse {
    success: boolean;
    pinId?: string;
    error?: string;
    skipped?: boolean;
    reason?: string;
}

export async function createPin({
    boardId,
    title,
    description,
    link,
    imageUrl,
    altText
}: CreatePinOptions): Promise<PinterestResponse> {
    const accessToken = process.env.PINTEREST_ACCESS_TOKEN;

    if (!accessToken) {
        console.warn('Pinterest access token not found. Skipping pin creation.');
        return { success: false, skipped: true, reason: 'No access token' };
    }

    if (!boardId) {
        console.warn('Pinterest board ID not provided. Skipping pin creation.');
        return { success: false, skipped: true, reason: 'No board ID' };
    }

    // Pinterest requires publicly accessible image URLs
    if (!imageUrl || !imageUrl.startsWith('http')) {
        console.warn(`Invalid image URL: ${imageUrl}. Pinterest requires a public URL.`);
        return { success: false, skipped: true, reason: 'Invalid image URL - must be a public https URL' };
    }

    try {
        const response = await fetch(`${PINTEREST_API_BASE}/pins`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                board_id: boardId,
                title: title.slice(0, 100), // Pinterest title limit
                description: description.slice(0, 500), // Pinterest description limit
                link: link,
                alt_text: altText || title,
                media_source: {
                    source_type: 'image_url',
                    url: imageUrl,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Pinterest API error:', errorData);
            return {
                success: false,
                error: errorData.message || `HTTP ${response.status}`
            };
        }

        const data = await response.json();
        console.log('Pin created successfully:', data.id);
        return { success: true, pinId: data.id };

    } catch (error) {
        console.error('Error creating Pinterest pin:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
