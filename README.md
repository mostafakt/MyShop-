# E‑Commerce App — Next.js Developer Test

**Author:** Mostafa Kattan — Frontend Engineer

**Project:** Customer‑Facing E‑Commerce Website (Next.js 14+, TypeScript)

---

## Overview

This repository is an implementation of the Next.js Developer Test. It contains a product catalog and product detail pages with authentication, SEO optimization, and hybrid rendering (SSR + CSR). The app demonstrates best practices for building scalable, performant Next.js applications using TypeScript, Tailwind CSS, Zod validation, and JWT authentication stored in HTTP‑only cookies.

The implementation focuses on:

* Clear TypeScript typing for API responses and components
* Secure JWT authentication (HTTP‑only cookies)
* Zod for form validation
* Dynamic metadata for SEO
* Hybrid rendering strategy (SSR for SEO, CSR for interactivity)
* Clean file structure and reusable components

---

## Table of contents

- [E‑Commerce App — Next.js Developer Test](#ecommerce-app--nextjs-developer-test)
  - [Overview](#overview)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Tech stack](#tech-stack)
  - [Project structure (high level)](#project-structure-high-level)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Run (development)](#run-development)
    - [Build \& start (production)](#build--start-production)
  - [Env example](#env-example)
  - [Scripts](#scripts)
  - [API \& mocking](#api--mocking)
  - [Authentication details](#authentication-details)
  - [Rendering strategies — Why \& where](#rendering-strategies--why--where)
  - [Form validation](#form-validation)
  - [Styling \& performance](#styling--performance)
  - [Deployment](#deployment)
  - [Development notes \& best practices](#development-notes--best-practices)
  - [Troubleshooting](#troubleshooting)
  - [What I would improve with more time](#what-i-would-improve-with-more-time)
  - [Contact](#contact)

---

## Features

* Homepage with featured products (SSR)
* Product listing & responsive grid (Tailwind)
* Product detail page (SSR for SEO + CSR interactions such as Add to Cart)
* Login & protected profile page (JWT in HTTP‑only cookie)
* Zod validation on login form
* Mock API endpoints for products and auth (dev)
* Reusable UI primitives (Button, Card, Input, FormField)
* Loading & skeleton states for improved UX
* Optimized images using Next.js `Image` component

---

## Tech stack

* Next.js 14 (app router)
* React 18 + TypeScript
* Tailwind CSS
* Zod (validation)
* React Hook Form + @hookform/resolvers
* Redux Toolkit (basic slices for auth & cart)
* TanStack Query for client caching (react-query)
* MSW for mock API in development
* jose for JWT handling

---

## Project structure (high level)

```
src/
├─ app/                # Next app router pages & protected area
│  ├─ (protected)/     # profile, cart (server-protected routes)
│  ├─ api/             # API route handlers (mock & server APIs)
│  ├─ products/        # listing + [id] detail routes
│  ├─ login/           # login page
│  ├─ layout.tsx
│  └─ page.tsx         # homepage
├─ components/         # UI components & small composites
├─ lib/                # helpers: api-client, jwt, server-auth
├─ services/           # client services (auth-client, products)
├─ store/              # redux & hooks
├─ data/               # local product seeds used by mock API
└─ public/images/      # static images for homepage & products
```

See the repository root for the full tree (already included in the task description).

---

## Setup

### Prerequisites

* Node.js 18+ (recommended)
* npm (or yarn)

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
# opens at http://localhost:3000
```

### Build & start (production)

```bash
npm run build
npm run start
```

---

## Env example

Create a `.env` file from `.env.example` (do **not** commit secrets).

`.env.example`:

```bash
# next app
NEXT_PUBLIC_APP_NAME=ECommerceApp
# Mocking / security
JWT_SECRET=replace_with_secure_secret
JWT_EXPIRES_IN=3600s
# Use this to toggle MSW in dev if needed
NEXT_PUBLIC_USE_MSW=true
```

> The app uses HTTP‑only cookies for JWT storage. Do **not** put the cookie value in `NEXT_PUBLIC_*` variables.

---

## Scripts

* `npm run dev` — Start development server
* `npm run build` — Build for production
* `npm run start` — Start production server
* `npm run lint` — Run ESLint

---

## API & mocking

Development uses **msw** (Mock Service Worker) to serve these endpoints locally. The server routes are modeled under `src/app/api` as Next.js route handlers to mimic production behavior.

Implemented API endpoints (mocked / route handlers):

* `GET /api/products` — returns product list
* `GET /api/products/:id` — returns single product
* `POST /api/auth/login` — verifies credentials & sets JWT cookie
* `POST /api/auth/logout` — clears JWT cookie
* `GET /api/auth/me` — returns current user if cookie is valid

> In real production you would replace the mock handlers with real backend endpoints or proxy them. MSW allows testing the UI and auth flow without a live API.

---

## Authentication details

* Login is implemented with a `/login` page using React Hook Form + Zod validators.
* On successful login, the server route (`/api/auth/login`) sets an HTTP‑only cookie containing a signed JWT. The JWT is **not** accessible from client JavaScript.
* `server-auth.ts` contains helper functions used on the server (SSR) to read and verify the cookie and return the authenticated user (used by protected pages like `/profile`).
* Protected routes (profile) perform SSR authentication: during the server render the cookie is read and validated and the page either returns the content or redirects to `/login`.

Security notes:

* Cookies are flagged `HttpOnly` and `SameSite` as appropriate for the environment.
* Use a strong `JWT_SECRET` in production and rotate it per your org policy.

---

## Rendering strategies — Why & where

This project demonstrates hybrid rendering using Next.js App router:

* **Homepage (`/`) — SSR**

  * Purpose: SEO & fast first meaningful paint with server-rendered featured products.
  * Implementation: `getServerSideProps` equivalent via server components in `/app/page.tsx` which fetch the products server-side.

* **Products list (`/products`) — SSR**

  * Purpose: SEO for category and search pages.
  * Implementation: Server component that fetches the product list.

* **Product detail (`/products/[id]`) — SSR + CSR**

  * Purpose: SEO (SSR for crawlers) and client-side interactivity (Add to Cart, image gallery, reviews client components).
  * Implementation: The page is server-rendered with product data to generate dynamic metadata (title & description) for each product. Client components inside the page handle cart interactions using CSR.

* **Profile (`/profile`) — SSR (protected)**

  * Purpose: Serve personalized content only to authenticated users; prevent exposing user-only content to crawlers.
  * Implementation: Server-side cookie verification reads JWT and either renders user data or redirects to `/login`.

This approach gives you the best of both worlds: SEO and initial content via SSR, plus dynamic client-side behavior where needed.

---

## Form validation

* Login form uses **Zod** schemas and `@hookform/resolvers/zod` to validate inputs.
* Validation runs client-side for fast UX and server-side (on the route) to defend against malformed requests in environments that bypass the client.

---

## Styling & performance

* Tailwind CSS for utility-first styling; responsive by design
* Next.js `Image` component used to serve optimized images and responsive sizes
* Loading skeletons and explicit loading states used for client-interactive sections
* Components are small, composable, and statically typed for maintainability

---

## Deployment

Recommended deploy target: **Vercel** (first-class support for Next.js). General steps:

1. Push repo to GitHub.
2. Import project into Vercel and set the environment variables shown in `.env.example` (set `JWT_SECRET` in the Vercel dashboard).
3. For production, disable MSW or configure it to not run in production builds.

---

## Development notes & best practices

* TypeScript strictness: types for `Product`, `User`, and API responses live in `src/types`.
* Keep server-only utilities (JWT verification, cookie parsing) inside `lib/` and never expose secrets to the client.
* Use React Query (TanStack Query) for client caches and optimistic updates (cart interactions).
* Use modular components (components/ui) and small focused hooks for reuse.
* Accessibility: semantic HTML, proper labels for forms, keyboard-focusable controls.
* Performance: minimize client bundle size by keeping heavy logic on the server and using client components only where interactivity is required.

---

## Troubleshooting

* If you see auth issues locally, ensure `NEXT_PUBLIC_USE_MSW=true` (dev) and that MSW worker is running.
* If images don't show, confirm paths in `public/images/*` and that `next.config.js` does not restrict the domains you rely on.
* For cookie‑related redirects make sure you run the app on the same domain/port used for the cookie in development.

---

## What I would improve with more time

* End‑to‑end tests for auth & cart flows (Cypress / Playwright)
* Integration with a real backend and persistent cart
* Internationalization & richer SEO (structured data for products)
* Unit tests for critical hooks and reducers

---

## Contact

If you'd like any clarification, additions (demo screenshots, more detailed architecture diagrams, or a shorter one‑page README for hiring), tell me what to focus on and I will update the README accordingly.

---

*Good luck evaluating — Mostafa Kattan*
