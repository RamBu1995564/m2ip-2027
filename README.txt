M2IP 2027 — COMPLETE MULTIPAGE WEBSITE

START
Extract the ZIP first. Open index.html. Keep all files and the assets folder together.
Every main menu item opens a separate HTML page. Only the Home overview is on index.html.
No installation or build process is required.

EDITING
- Change page content in its corresponding HTML file. The same content serves phones, tablets and desktops.
- Shared colours, layouts and responsive rules: assets/styles.css.
- Shared menu, footer, application link and application opening/closing logic: assets/site.js.
- Paste the Google Form URL into APPLICATION_URL in assets/site.js.
- The application button opens automatically on 1 December 2026 and closes after 30 December 2026, using IST and the visitor's clock. Also configure the Google Form itself to stop accepting responses at the deadline.
- Current fee-payment deadline: 15 March 2027, matching the latest supplied brochure.
- Speakers and mentors remain unconfirmed placeholders.
- Included brochure: the supplied M2IP 2027.pdf, renamed assets/M2IP-2027-brochure.pdf. Its contents have not been changed.

PAGES
index.html — Home
about.html — About
syllabus.html — Syllabus
programme.html — Programme
speakers.html — Speakers and mentors
committees.html — Committees
applications.html — Eligibility, selection and dates
support.html — Fees, refunds, travel and accommodation
outcomes.html — Research outcomes and awards
faq.html — FAQs
contact.html — Contact and map link

UPLOAD
Upload every HTML file AND the assets folder to the root of your event's GitHub repository. Do not upload the ZIP alone. Preserve the existing QMI event repository.
Use the existing Render Static Site configuration: publish directory . and a no-op build command such as echo "Static HTML site".
Check the brochure, menu and Google Form link after deployment.

TESTING
HTML links, asset paths and JavaScript syntax are checked. Browser rendering is not verified in this environment because browser launch is restricted.
