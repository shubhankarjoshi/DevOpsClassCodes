# Aastha Eye Care — Website

A static 5-page website for **Aastha Eye Care**, an eye clinic on Savedi Road,
Ahmednagar, Maharashtra, run by Dr. Ganesh Sarda and Dr. Chaitrali
Somani-Sarda. Pure HTML/CSS/JS — no build step required.

Content, photos, the logo and the colour palette are sourced from the
clinic's own brochure (`images/` holds the logo, doctor photos and clinic/
equipment photos extracted from it).

## Pages

- `index.html` — Home, with hero, highlights, services/conditions preview, and a **Google review strip**
- `about.html` — About Us (story, mission/vision, both doctors' full profiles, clinic photos)
- `services.html` — Clinical services, surgical procedures, diagnostic facilities, equipment gallery
- `conditions.html` — Conditions Treated
- `contact.html` — Contact Us (info, appointment form, map, FAQs)

## Viewing locally

Just open `index.html` in a browser, or serve the folder:

```
cd aastha-eye-care
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What's real vs. still placeholder

Real (from the brochure): clinic name, logo, address, phone numbers, email,
hours, both doctors' full qualifications, the services/facilities lists, and
the clinic/doctor/equipment photos.

Still placeholder — replace before going live:

- **Google Reviews** — the review strip on `index.html` uses sample reviews
  for layout purposes. Replace them with real reviews, or embed a live
  widget tied to your Google Business Profile / Place ID so genuine,
  up-to-date reviews display automatically.
- **Google Map embed** — `contact.html` embeds a map via a text search query;
  swap in your exact Place ID/coordinates once available for precision.
- **Appointment form** — submits to WhatsApp (opens `wa.me` with the filled
  details pre-written as a message to the clinic's number, set in
  `js/script.js` as `WHATSAPP_NUMBER`). Update that number if it ever
  changes. No backend or email service is needed for this to work.
- **Optometry & clinical staff** — the third team card on `about.html` is
  still a generic placeholder (no names/photos were supplied for support
  staff).
