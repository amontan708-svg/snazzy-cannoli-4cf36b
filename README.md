# MinePrut.fun — Streetwear Moldova

**MinePrut** is a streetwear brand and e-commerce platform from Moldova. The name combines "Mine" (personal vision, ownership of a dream) and "Prut" (the river symbolizing roots and connection). The site serves as both a functional online store and a demonstration that fashion in the 21st century is inseparable from technology and mathematics.

## Features

- **Product Catalog** — 6 streetwear products with MDL (Moldovan Leu) pricing
- **Product Detail Pages** — size selector, full descriptions, related products
- **About Page** — brand story, values, team
- **Size Chart** — complete measurement tables for tops and bottoms, with statistical distribution of stock
- **The Math Behind** — technical documentation: Golden Ratio in design, pricing formula, statistical size distribution, programming logic
- **Registration Form** — Netlify Forms-powered community sign-up
- **AI Shopping Assistant** — multi-provider AI chat (requires API key)
- **Stripe Checkout** — secure payment processing (requires `STRIPE_SECRET_KEY`)
- **Dark theme** with gold (`#c9a84c`) accent color

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Payments | Stripe Checkout |
| Deployment | Netlify |
| Language | TypeScript 5.7 (strict) |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. For Netlify-specific features (forms, edge functions), use the Netlify CLI:

```bash
npx netlify dev
# → http://localhost:8888
```

## Environment Variables

```
STRIPE_SECRET_KEY=sk_...     # Required for checkout
SITE_URL=https://mineprut.fun # Used for Stripe redirect URLs
```

For the AI assistant, set one of:
- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
- `OLLAMA_BASE_URL`

## Replacing Placeholder Images

Product images currently use `/public/placeholder.png`. Replace by adding real product photos to `/public/` and updating the `image` field in `src/data/products.ts`.
