# Pinterest App Demo Video Instructions

To verify your app, Pinterest needs to see a video of the authentication flow and the app functionality (creating a pin). Since your "Standard Access" isn't approved yet, we will use the **Sandbox Environment** to prove the code works.

## Step 0: Get the Sandbox Token (Do this first!)

1.  Log in to the [Pinterest Developer Portal](https://developers.pinterest.com/apps/).
2.  Click on your App (**Vesta Veranda**).
3.  Click on the **"Test"** or **"Sandbox"** tab in the left sidebar.
4.  Scroll down to **"API Sandbox"**.
5.  Click **"Generate Sandbox Token"**.
6.  Copy the token (starts with `pina_` or similar).
7.  Open your project `.env.local` file and add this line:
    ```env
    PINTEREST_SANDBOX_TOKEN=your-token-here
    ```

---

## 🎥 Recording the Video

**Recommended Recording Software:** loom, OBS, or QuickTime.

### Scene 1: Authentication
*Goal: Show that you can authenticate using OAuth.*

1.  Start recording your screen.
2.  Open your terminal in VS Code.
3.  Run the Auth Token script:
    ```bash
    node scripts/get-pinterest-token.js
    ```
4.  **Action:** Click the URL it generates to open the browser.
5.  **Action:** In the browser, click **"Give Access"** (or log in).
6.  **Action:** Show the "Authorization Successful" page.
7.  **Voiceover (Optional):** "Here we demonstrate the OAuth 2.0 flow. The user authorizes the app, and we receive an access token."
    *(Note: It's okay if this produces a Production token that is limited; you are demonstrating the flow.)*

### Scene 2: Functionality (Creating a Pin)
*Goal: Show the app actually creating content.*

1.  Mute/Stop the previous script if running.
2.  In the terminal, run the Sandbox creation script:
    ```bash
    node scripts/create-pin-sandbox.js
    ```
3.  **Action:** Let the script run. It will:
    *   Connect to the Sandbox API.
    *   Find or Create a Board.
    *   Post the Pin.
4.  **Action:** Highlight the **"SUCCESS! Pin Created Successfully"** message and the **Pin ID** in the terminal.
5.  **Voiceover (Optional):** "We use the API to programmatically list boards and create a new pin. As you can see, the pin was successfully created in the Sandbox environment with ID [read ID]."

### Scene 3: Conclusion
1.  Stop verification.
2.  Upload this video to the Pinterest App Review form.

---

## Troubleshooting
*   **Token Error:** If Scene 2 fails, double-check you saved `PINTEREST_SANDBOX_TOKEN` in `.env.local` and that it came specifically from the "Sandbox" section of the developer portal.
