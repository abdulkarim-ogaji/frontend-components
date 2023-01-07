import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<h1>Abdulkarim's error Element</h1>}
    >
      <Route index element={<HomePage />} />
      <Route
        path="dest"
        loader={({ request }) => {
          const url = new URL(request.url);
          return fetch(
            "https://jsonplaceholder.typicode.com/todos" +
              "?page=1&limit=" +
              url.searchParams.get("limit"),
            {
              signal: request.signal,
            }
          );
        }}
      />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<h1>Abdulkarim's Fallback element</h1>}
    />
  );
}
