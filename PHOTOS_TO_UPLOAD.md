# Photos to Upload Manually

The redesign gives every page its own visual set, so a photo is used on exactly
one page. The files listed below are the **only** images still running on
placeholder art — overwrite them with real photos, keeping the exact filename
and folder.

## 1. Team photos

| # | File (overwrite this file) | Used on | Recommended size |
|---|---------------------------|---------|------------------|
| 1 | `public/assets/img/team/1.jpg` | Home — instructors · Event details — who you will meet | 800 × 1000 px (portrait) |
| 2 | `public/assets/img/team/2.jpg` | Home — instructors · Event details — who you will meet | 800 × 1000 px (portrait) |
| 3 | `public/assets/img/team/3.jpg` | Home — instructors | 800 × 1000 px (portrait) |
| 4 | `public/assets/img/team/4.jpg` | Home — instructors | 800 × 1000 px (portrait) |

These four files are currently **duotone placeholders** (paper card + school
emblem). Replace them with real portraits and the duotone treatment is applied
automatically by CSS.

### Titles shown under each portrait

Each card now shows the instructor's **name** as the headline, with the role
under it and the discipline below that:

| Card | Name (placeholder) | Role shown on the site |
|------|--------------------|------------------------|
| 1 | Ramesh Iyer | Chief Instructor |
| 2 | Suresh Nair | Head Coach |
| 3 | Anil Kumar | Fitness Instructor |
| 4 | Deepa Rao | Little Warriors Lead |

The names above are **placeholders**. Replace them with the real teaching
staff in `src/sections/data.ts` (`homeInstructors`) — each entry needs `name`,
`title` and `role`. The same array powers the Home instructor strip and the
"Who you will meet" block on the event page.

## 2. Programme photos

| # | File (overwrite this file) | Used on | Recommended size |
|---|---------------------------|---------|------------------|
| 5 | `public/assets/img/programs/1-dojo.jpg` | Home — the dojo | 1400 × 960 px |
| 6 | `public/assets/img/programs/2-kata.jpg` | About — kata | 1400 × 960 px |
| 7 | `public/assets/img/programs/3-bushido.jpg` | Programme details page | 1400 × 960 px |
| 8 | `public/assets/img/programs/4-kumite.jpg` | Events page | 1400 × 960 px |

## 3. Blog, event and testimonial photos

| # | File (overwrite this file) | Used on | Recommended size |
|---|---------------------------|---------|------------------|
| 9 | `public/assets/img/blog/1.jpg` … `6.jpg` | Blog grid (one per post) | 1200 × 750 px |
| 10 | `public/assets/img/blog/blog-details.jpg` | Blog article header | 1600 × 900 px |
| 11 | `public/assets/img/blog/avator/1.jpg` … `6.jpg` | Article author avatars | 300 × 300 px |
| 12 | `public/assets/img/events/1.jpg` | Home — next up | 1100 × 620 px |
| 13 | `public/assets/img/events/2.jpg` … `6.jpg` | Events page — chambers | 1100 × 620 px |
| 14 | `public/assets/img/events/event-details.jpg` | Event article header | 1600 × 900 px |
| 15 | `public/assets/img/testimonials/1.jpg`, `2.jpg` | Home — voices | 420 × 420 px |
| 16 | `public/assets/img/testimonials/3.jpg` … `5.jpg` | About — voices | 420 × 420 px |

## 4. Page banners

Every page has its own banner in `public/assets/img/banner/`, built from free
Pexels photos (cover-cropped, darkened and red-tinted so the white titles stay
readable):

| File | Used on |
|------|---------|
| `home-hero-1.jpg` | Home hero |
| `about.jpg` | About |
| `programs.jpg` | Programmes |
| `events.jpg` | Events |
| `blog.jpg` | Blog |
| `gallery.jpg` | Gallery |
| `contact.jpg` | Contact |
| `404.jpg` | 404 page |
| `event-details.jpg` | Event details |
| `blog-details.jpg` | Blog details |
| `program-details.jpg` | Programme details |

To use a different photo, overwrite the file keeping the same name, or edit the
`background` prop of `<Masthead />` / the `image` field in `src/sections/data.ts`.

## 5. More gallery photos (optional)

The 10 photos in `public/assets/img/gallery/` come from the public Facebook
posts of https://www.facebook.com/OGKTRAININGSCHOOL. Roughly **29 more album
photos are locked behind a Facebook login** and could not be collected
automatically.

To add any photo:

1. Save it as `.jpg` into `public/assets/img/gallery/` with a short
   lowercase-hyphen name (e.g. `belt-promotion-2025.jpg`).
2. Add one line to the `galleryItems` list in `src/sections/data.ts`:

```js
{ img: "assets/img/gallery/belt-promotion-2025.jpg", caption: "Belt promotion day" },
```

## Notes
- Prefer **JPG** (quality ~85–90) — keep files under ~300 KB for fast pages.
- Do not rename existing gallery files (`training-class.jpg`, `dojo-awards.jpg`,
  `championship-*.jpg`, `trophy-portrait-*.jpg`) — they are referenced in code.
- After uploading, run `npm run build` and check `/`, `/about`, `/programs`,
  `/events`, `/blog`, `/gallery`.

## Other placeholders on the site (not photos)

| Placeholder | Where | Note |
|-------------|-------|------|
| `support@example.com`, `info@example.com` | Contact, footer, mobile menu, legal pages | Replace with the school's real addresses |
| Monthly fees ₹1,200 / ₹1,600 / ₹2,000 | `src/sections/data.ts` (`programEnrol`) | Indicative sample rates — set the real prices |
| Event dates (Aug–Dec 2026) | `src/sections/data.ts` (`eventLedger`) | Sample schedule — update when the calendar is fixed |
| Team card names | `src/sections/data.ts` (`homeInstructors`) | Placeholder names for the real instructors (see section 1) |
| YouTube / Instagram / Facebook links | Footer, blog, contact | Point them at the school's real profiles |

## Verification

```bash
npm run build   # production build
npm run smoke   # server-renders all 14 routes and reports any runtime error
```
