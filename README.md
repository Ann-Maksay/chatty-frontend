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

### 3. Start the Development Server

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
│		├── assets/
│		│		└── main.css (global styling)
│		│		└── img/
│   ├── store/
│   │   └── store.ts
│   │   └── %store_name%/
│   ├── components/
│   │   └── %component_name%/
│   ├── constans/
│   ├── helpers/
│   ├── pages/
│   │   └── %page_name%/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.  
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run serve`

Serves the production build from the `dist` folder.
