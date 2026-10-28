# AgriRent — Agricultural Equipment Rental Platform

AgriRent is a React-based frontend prototype designed to help farmers explore agricultural equipment, compare sample rental prices, filter listings by category and town, estimate rental costs, and contact dealers.

## Features

- Browse agricultural equipment listings
- Search by equipment name, dealer, category, or town
- Filter by equipment category and location
- Sort listings by rental price
- Estimate rental cost based on the number of days
- Prepare a demo rental request and call a listed dealer
- Responsive layout for desktop and mobile screens

## Technology stack

- React
- Vite
- Tailwind CSS
- Lucide React icons
- JavaScript

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Download or clone this repository.
3. Open the project folder in VS Code or a terminal.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Important project limitations

This is a **frontend demonstration prototype**. Equipment listings, dealer names, rates, towns, and phone numbers are sample data. The request form only displays a demo confirmation; it does not send, store, or process a real booking. There is no backend, database, authentication, payment processing, SMS, or WhatsApp integration.

Before using this for real rentals, replace the demo data and add a backend, secure data storage, dealer verification, and a real booking workflow.

## Project structure

```text
AgriRent/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## License

No license has been added. If you want others to reuse or modify the project, choose and add an appropriate open-source license.
