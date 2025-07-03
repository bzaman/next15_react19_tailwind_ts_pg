# Next.js 15, React 19, Tailwind CSS, TypeScript, and PostgreSQL Boilerplate

This is a boilerplate project for building modern web applications with a powerful and type-safe stack. It includes everything you need to get started, from a full-featured front-end framework to a robust ORM and database setup.

## ✨ Features

*   **Next.js 15:** The latest version of the popular React framework, with support for server components, static site generation, and more.
*   **React 19:** The newest version of the React library, with performance improvements and new features.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Prisma ORM:** A next-generation ORM for Node.js and TypeScript.
*   **PostgreSQL:** A powerful, open-source object-relational database system.
*   **Zod:** A TypeScript-first schema declaration and validation library.
*   **ShadCN UI:** A collection of re-usable components built with Radix UI and Tailwind CSS.
*   **ESLint and Prettier:** For code linting and formatting.

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or later)
*   [pnpm](https://pnpm.io/installation) (or npm/yarn)
*   [Docker](https://www.docker.com/get-started) (for running a local PostgreSQL instance)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-project-name.git
    cd your-project-name
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

Replace the values with your actual database connection string.

### Database Setup

1.  **Start a PostgreSQL container:**

    ```bash
    docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
    ```

2.  **Run Prisma migrations:**

    ```bash
    pnpm prisma migrate dev
    ```

This will create the necessary tables in your database.

## 🏃‍♀️ Running the Development Server

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Building for Production

To build the application for production, run the following command:

```bash
pnpm build
```

This will create an optimized production build in the `.next` directory.

## 린트 Linting and Formatting

This project uses ESLint and Prettier for code linting and formatting. To run the linter, use the following command:

```bash
pnpm lint
```

To format the code, run:

```bash
pnpm format
```

## 部署 Deployment

You can deploy this application to any platform that supports Node.js, such as Vercel, Netlify, or your own server.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.