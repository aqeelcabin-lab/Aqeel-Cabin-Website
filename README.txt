AQEEL CABIN & JUNGLE RIVER DOME — WEBSITE V2

UPLOAD TO THE ROOT OF YOUR GITHUB REPOSITORY:
- index.html
- style.css
- script.js
- config.js
- getting-here.html
- assets folder

IMPORTANT: KEEP ALL MEDIA IN ONE ASSETS FOLDER
No subfolders are required.

1. LIVE CALENDAR + FAQ
Open config.js and replace:
PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
with your current Google Apps Script URL ending in /exec.

2. HERO VIDEO
Add:
assets/hero-video.mp4
assets/hero-poster.jpg
The poster should be a real vertical frame taken from that same video.

3. COMPLETE GALLERY
Put originals in assets, for example:
cabin-01.jpg
dome-01.jpg
river-01.jpg
waterfall-01.jpg
property-video-01.mp4
property-video-01-poster.jpg

Then edit the GALLERY list in config.js. Filenames are case-sensitive.

4. IMAGE QUALITY
Upload original phone files, not screenshots.
Recommended:
- Gallery JPG/WebP: 1600–2200 px long edge
- Hero poster: 1080×1920 for vertical video
- JPG quality: about 82–88%
- Use descriptive lowercase filenames without spaces

5. LIVE REVIEWS
The review user interface is complete, but Google, Airbnb and Booking.com require a secure server endpoint.
Do not put secret API keys in config.js.
Add endpoint URLs under REVIEWS_ENDPOINTS in config.js.

Google review submission link is already included:
https://g.page/r/CUvX_9_BzxY7EBI/review

6. RESTAURANTS AND GROCERIES
Edit the NEARBY list in config.js to replace Google Maps search links with the exact share links from your original website whenever available.

7. BUS DIRECTIONS
Bus information is placed in getting-here.html and is not shown on the main page.

8. WHATSAPP
The booking form automatically sends:
- Cabin or Dome
- Arrival date
- Nights
- Guests
- Calendar status

9. BACKUP
Before replacing the existing GitHub files, download a ZIP backup of the current repository.
