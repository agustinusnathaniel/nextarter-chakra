# nextarter-chakra

<img src="https://og.sznm.dev/api/generate?heading=nextarter-chakra&text=Next.js+template+with+Chakra-UI+and+TypeScript+setup.&template=color&center=true&height=330" />

<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fagustinusnathaniel%2Fnextarter-chakra" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a> <a href="https://app.netlify.com/start/deploy?repository=https://github.com/agustinusnathaniel/nextarter-chakra" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a> <a href="https://railway.app/new/template/aqmmai?referralCode=9lKVVo" target="_blank"><img src="https://railway.app/button.svg" alt="Deploy on Railway" height="32px" /></a>

<a href="https://stackblitz.com/github/agustinusnathaniel/nextarter-chakra" target="_blank"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz" /></a>

  <p>This is a <a href="https://nextjs.org/" target="_blank">Next.js</a> project bootstrapped with <code>create-next-app</code>, added with <a href="https://chakra-ui.com" target="_blank"><b>Chakra UI</b></a> and <a href="https://www.typescriptlang.org" target="_blank"><b>TypeScript</b></a> setup. <br/> Start developing right away!</p>

</div>

This is a **Next.js + Chakra UI + TypeScript** starter template packed with modern tooling setup.

## 🚀 Features

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **UI Library**: [Chakra UI v3](https://chakra-ui.com/)
-   **Styling Engine**: Emotion (via Chakra UI) + [next-themes](https://github.com/pacocoursey/next-themes)
-   **Language**: [TypeScript 5](https://www.typescriptlang.org/)
-   **Linting & Formatting**: [Biome](https://biomejs.dev/)
-   **E2E Testing**: [Playwright](https://playwright.dev/)
-   **Build System**: [Turborepo](https://turbo.build/repo)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🏗 System Architecture

This project uses a **Split-Layer** architecture to separate Next.js routing concerns from React UI logic.

```mermaid
graph TD
    subgraph "Routing Layer (src/app)"
        L[layout.tsx] --> Providers
        P[page.ts] --> Logic
    end

    subgraph "Logic Layer (src/lib)"
        Providers --> Layout[Layout Component]
        Layout --> Header
        Layout --> Footer
        Logic --> HomePage[Page Component]
    end

    subgraph "UI Layer (src/components)"
        HomePage --> Components
        Header --> Components
        Footer --> Components
    end
```

## 📂 Repository Structure

The code is organized to keep business logic and routing separate:

```bash
src/
├── app/            # Next.js App Router (Entry points)
│   ├── layout.tsx  # Global RootLayout & Providers
│   └── page.ts     # Re-exports Home from lib/pages
├── components/     # Shared UI components
│   └── ui/         # Primitives (Buttons, Inputs, etc.)
└── lib/            # Application Business Logic
    ├── layout/     # Shell components (Header, Footer)
    ├── pages/      # Page implementations (Home, etc.)
    └── styles/     # Theme configuration
```

## 🛠 Getting Started

### 1. Install Dependencies

This project uses [pnpm](https://pnpm.io/).

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production

```bash
pnpm build
```

### 4. Run Tests

```bash
pnpm test:e2e
```

## 🧹 Code Quality

We use **Biome** for fast formatter and linter.

```bash
# Check code issues
pnpm biome:check

# Fix issues automatically
pnpm biome:fix
```

## Deployment

[![Deploy on Hostinger](https://assets.hostinger.com/vps/deploy.svg)](https://www.hostinger.com/web-apps-hosting)
