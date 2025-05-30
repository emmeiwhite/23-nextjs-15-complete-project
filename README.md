# NextJS

NextJS is a React and NodeJS full stack framework

## React Server Components Architecture

RSC architecture is the new approach to creating React Components by dividing them into two distinct types:

- Server Components : By Default NextJS treats all components as Server Components
- Client Components : We need to use 'use client' directive to make define a client component

There are no hooks in Server Components and no interactively is allowed.
Client Components can be seen as normal React Components with interactivity, hooks etc

## Routing

Next.JS has file-based routing system

- whatever is kept within the `app folder` is treated as a route.
- better to keep components folder outside of the `app folder`

## 🌟 loading.tsx — Built-in Loading UI for Server Components

### 🔹 What’s happening?

When a Server Component is fetching data (e.g., from a database or API) and the page takes time to render:

If you have a loading.tsx file in the same folder as your page.tsx, Next.js will automatically show that component while the page is loading.

### ✅ Folder Structure Example:

`app/
  dashboard/
    page.tsx          ⬅️ Your Server Component with data fetching
    loading.tsx       ⬅️ Automatically shown while page.tsx is loading`

- You don’t need to write any logic to show/hide it — Next.js does that for you automatically when the server component is streaming.

### 🧠 Why is this so powerful?

#### ⚡ It gives instant feedback to the user.

#### 🧼 Keeps your code clean — no need to manage isLoading manually in the component.

#### 🌍 Can be customized per route or per layout segment.

## Bonus Tip 🧠

You can even use:

- error.tsx for error handling

- not-found.tsx for 404 pages

All follow the same magic pattern based on file naming.
