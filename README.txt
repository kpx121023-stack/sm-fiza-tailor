SM Fiza Tailor website — beginner setup

FILES
- index.html: website content
- style.css: black-and-gold design and mobile layout
- script.js: mobile menu and WhatsApp order form

HOW TO OPEN
1. Extract this ZIP.
2. Open the extracted folder in VS Code (File > Open Folder).
3. Open index.html.
4. If you have the VS Code Live Server extension, right-click index.html > Open with Live Server.
   Otherwise, double-click index.html to open it in a browser.

IMPORTANT: ADD YOUR WHATSAPP NUMBER
1. Open script.js.
2. At the top, find: const WHATSAPP_NUMBER = "91XXXXXXXXXX";
3. Replace it with the shop's WhatsApp number including India's country code 91, digits only.
   Example format: "919876543210" (this is only an example, not the shop's number).
4. Save the file and test the form.

FREE HOSTING WITH GITHUB PAGES
1. Create/sign in to a GitHub account.
2. Create a new public repository, e.g. sm-fiza-tailor.
3. Upload index.html, style.css and script.js to the repository root (not inside another folder).
4. Open repository Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select branch main and folder /(root), then Save.
7. Wait for the published site link to appear in Settings > Pages.

NOTES
- The website does not display prices because no prices were provided.
- The hero image loads from Unsplash and needs an internet connection.
- The WhatsApp number must be replaced before the order button can work.
- The website does not collect or store customer details; it prepares a message for WhatsApp.
