# United Movers

Marketing website for United Movers, a South Florida moving company based in Sunny Isles Beach.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build and serve the production version:

```bash
npm run build
npm run start
```

## Where things live

- `src/lib/site.ts` — business name, phone, address, hours, license. **Change contact info here** and it updates everywhere.
- `src/lib/services.ts` — the six services and their detail-page copy.
- `src/lib/reviews.ts` — customer reviews and the rating summary.
- `src/app/` — one folder per page (home, services, service-areas, about, reviews, contact, privacy-policy, terms).
- `src/components/` — Header, Footer, QuoteForm, CTA band, icons, etc.

## Pages

Home · Services (with 6 detail pages) · Service Areas · About · Reviews · Contact · Privacy Policy · Terms & Conditions · custom 404.

## The quote form

The contact form posts to `src/app/api/quote/route.ts`. Right now it validates the
submission and logs it server-side so nothing is lost. To receive leads by email or
in a CRM, drop your integration (Resend, SendGrid, a webhook, etc.) where the
`TODO` comment is in that file.

## SMS / A2P 10DLC (TCR) compliance

The Privacy Policy and Terms include the language carriers look for when registering
an SMS campaign:

- Explicit opt-in checkbox on the contact form (unchecked by default, not required to submit).
- Program description, message frequency, "message and data rates may apply".
- STOP to opt out and HELP for help.
- A clear statement that mobile opt-in data and consent are never shared or sold to third parties or affiliates for marketing.

Update the business/legal details in `src/lib/site.ts` before going live, and have
your own counsel review the legal pages for your exact SMS program.

## Notes

- Photography loads from Unsplash. Swap the image URLs in `src/lib/services.ts` and
  the page files for your own photos when you have them (put files in `/public` and
  reference `/your-photo.jpg`).
- Set the real domain in `src/lib/site.ts` (`domain`) so metadata, sitemap, and
  robots point to the right place.
