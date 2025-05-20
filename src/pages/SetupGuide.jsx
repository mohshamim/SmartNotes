import { Link } from "react-router-dom";

function SetupGuide() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        SmartNotes Setup Guide
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How I Set Up the SmartNotes Project
        </h2>
        <p className="text-gray-600 mb-4">
          This page outlines the steps and commands used to set up the
          SmartNotes web application, a single-page app built with React, Vite,
          and Tailwind CSS.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Prerequisites
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Node.js (v16.0.0 or higher) and npm installed.</li>
          <li>A code editor like Visual Studio Code.</li>
          <li>Internet connection for downloading packages.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Setup Steps
        </h3>
        <ol className="list-decimal list-inside text-gray-600 space-y-4">
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              npm create vite@latest smart-notes-app -- --template react
            </code>
            <p>
              <strong>What it does</strong>: Creates a new React project named{" "}
              <code>smart-notes-app</code> using Vite, a fast build tool. The{" "}
              <code>--template react</code> flag specifies the React template.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">cd smart-notes-app</code>
            <p>
              <strong>What it does</strong>: Navigates into the{" "}
              <code>smart-notes-app</code> project directory to run subsequent
              commands.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">npm install</code>
            <p>
              <strong>What it does</strong>: Installs all project dependencies
              listed in <code>package.json</code>, such as React and Vite.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              npm install -D tailwindcss@4.1.7 @tailwindcss/postcss postcss
              autoprefixer
            </code>
            <p>
              <strong>What it does</strong>: Installs Tailwind CSS, its PostCSS
              plugin, PostCSS, and Autoprefixer for styling the app.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              New-Item tailwind.config.js
            </code>
            <p>
              <strong>What it does</strong>: Creates a Tailwind CSS
              configuration file to specify content paths and customizations.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              New-Item postcss.config.cjs
            </code>
            <p>
              <strong>What it does</strong>: Creates a PostCSS configuration
              file for Tailwind CSS and Autoprefixer, using the `.cjs` extension
              for CommonJS compatibility.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              Rename-Item postcss.config.js postcss.config.cjs
            </code>
            <p>
              <strong>What it does</strong>: Renames the PostCSS config file to
              use the `.cjs` extension to resolve ES module compatibility
              issues.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">
              npm install react-router-dom
            </code>
            <p>
              <strong>What it does</strong>: Installs React Router for
              client-side navigation between pages.
            </p>
          </li>
          <li>
            <strong>Command</strong>:{" "}
            <code className="bg-gray-100 p-1 rounded">npm run dev</code>
            <p>
              <strong>What it does</strong>: Starts the Vite development server,
              making the app accessible at <code>http://localhost:5173</code>.
            </p>
          </li>
        </ol>
        <p className="text-gray-600 mt-4">
          After running these commands, the SmartNotes app is set up with React,
          Vite, Tailwind CSS, and React Router, ready for further development.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default SetupGuide;
