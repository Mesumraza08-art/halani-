# Halani Immigration redesign (client demo)

- index.html: the complete site (HTML, CSS and JavaScript in one file)
- img/: photography, founder photo and Instagram reel covers
- app.source.js: readable copy of the JavaScript inlined in index.html
- sitemap.xml, robots.txt: launch files, URLs match the current site

Preview: run `python3 -m http.server` in this folder and open http://localhost:8000
Deploy (Hostinger): upload index.html, img/, .htaccess, robots.txt and sitemap.xml to public_html
(File Manager, FTP, or hPanel > Git pointing at this repo, branch main, empty install path). No build step.
.htaccess forces HTTPS, redirects clean URLs (/services) to hash routes (/#services), and adds caching/gzip.

Before production: clean URLs per page, connect forms to the intake system, copy the full Privacy Policy and Terms, verify time-sensitive IRCC rules.
