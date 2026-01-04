
# Harsh Singh - Data Analyst Portfolio

This is a Next.js portfolio website for Harsh Singh, a Data Analyst and aspiring Data Scientist. The website is designed to showcase his skills, projects, and experience to potential employers.

Built with [Firebase Studio](https://firebase.google.com/studio).

## Features

- **Modern & Responsive Design**: Clean, minimalist UI that looks great on all devices.
- **Skills Showcase**: A dedicated section to highlight technical skills.
- **Project Portfolio**: Detailed view of projects with problem statements, tools used, and outcomes.
- **Experience Timeline**: A chronological display of work experience, education, and certifications.
- **AI Resume Optimizer**: A GenAI-powered tool to provide suggestions for improving a resume for data science roles.
- **Contact Section**: Easy access to contact information and professional profiles.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **AI**: [Google Gemini via Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/2236804Harsh/CECCSEC.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server:
    ```sh
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) to view it in the browser.

## AI Integration

This project uses Genkit to integrate AI features. The resume optimizer is powered by a Genkit flow that communicates with the Google Gemini model. To run the AI features, you will need to set up your environment variables.

1. Create a `.env` file in the root of your project.
2. Add your Google AI API key:
   ```
   GOOGLE_API_KEY="YOUR_API_KEY"
   ```
3. Start the Genkit developer UI (in a separate terminal):
   ```
   npm run genkit:watch
   ```
   This will allow you to inspect and debug the AI flows at `http://localhost:4000`.
=======
# harsh_portfolio
https://harshportfoliofinal.vercel.app/
