This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Fonts

- Global default: Inter is loaded via `next/font` and applied with `className="font-sans"` on `<body>`.
- Rethink Sans: Opt-in anywhere with the utility class `font-rethink`.
- Spot Mono Medium: Opt-in anywhere with the utility class `font-spot`.

To use Spot Mono Medium as a webfont, add the files under `public/fonts/spot-mono/`:

- `public/fonts/spot-mono/SpotMono-Medium.woff2` (preferred)
- `public/fonts/spot-mono/SpotMono-Medium.woff` (optional fallback)

Then, in your components:

```tsx
<code className="font-spot">monospaced sample</code>
```

If the files are not present, the `font-spot` utility will gracefully fall back to the system `monospace` font.
