# Aastha Eye Care — Website

A static 5-page website for **Aastha Eye Care**, an eye clinic in Ahilyanagar
(Ahmednagar), Maharashtra. Pure HTML/CSS/JS — no build step required.

## Pages

- `index.html` — Home, with hero, highlights, services/conditions preview, and a **Google review strip**
- `about.html` — About Us (story, mission/vision, team, timeline)
- `services.html` — Services offered
- `conditions.html` — Conditions Treated
- `contact.html` — Contact Us (info, appointment form, map, FAQs)

## Viewing locally

Just open `index.html` in a browser, or serve the folder:

```
cd aastha-eye-care
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before going live — replace these placeholders

- **Phone / email / address** — currently placeholder values in the top bar,
  footer and contact page of every HTML file (search for `+91 98765 43210`,
  `info@aasthaeyecare.in`, and the Savedi Road address).
- **Doctor / staff names & photos** — `about.html` uses generic role titles
  (e.g. "Lead Ophthalmologist"); replace with real names, qualifications and
  photos.
- **Google Reviews** — the review strip on `index.html` uses sample reviews
  for layout purposes. Replace them with real reviews, or embed a live
  widget tied to your Google Business Profile / Place ID so genuine,
  up-to-date reviews display automatically.
- **Google Map embed** — `contact.html` embeds a map via a text search query;
  swap in your exact Place ID/coordinates once available for precision.
- **Contact form backend** — the appointment form on `contact.html` is
  front-end only (`js/script.js` just shows a confirmation message). Wire it
  to a real backend or a form service (e.g. Formspree) to receive submissions
  by email.
- **Photos** — add real clinic/equipment/team photos under `images/` and
  reference them in place of the SVG placeholder graphics.
