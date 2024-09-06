## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. You can download them from [Node.js official website](https://nodejs.org/).

## Getting Started

Follow these steps to get your development environment set up:

### 1. Clone the Repository

```bash
git clone https://github.com/Ann-Maksay/chatty-frontend.git
cd chatty-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update .env

Don't forget to add the necessary data to your .env file. for example, use .env.example

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the application running.

## Project Structure

```plaintext
my-vite-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── main.css
│   │   └── img/
│   ├── components/
│   │   └── components.ts
│   │   └── %component_name%/
│   ├── constants/
│   │   └── constants.ts
│   │   └── %constant_name%/
│   ├── enums/
│   │   └── enums.ts
│   │   └── %enum_name%/
│   ├── helpers/
│   │   └── helpers.ts
│   │   └── %helper_name%/
│   ├── pages/
│   │   └── %page_name%/
│   ├── store/
│   │   └── store.ts
│   │   └── %store_name%/
│   ├── types/
│   │   └── types.ts
│   │   └── %type_name%/
│   ├── %additional categories as required%/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## For developers

Make sure that you have the ESLint extension installed and all necessary settings are active.
Example config file:

```bash

  "eslint.enable": true,
  "eslint.run": "onType",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },

```

If there are no hints during development, use the `npm run lint` before commit.
