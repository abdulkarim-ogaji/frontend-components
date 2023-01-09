import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import { GlobalContextProvider } from "./context/globalContext";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Account from "./pages/Settings/Account";
import AccountAction from "./pages/Settings/Account/actions";
import AccountLoader from "./pages/Settings/Account/loader";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<h1>Abdulkarim's error Element</h1>}
    >
      <Route index element={<HomePage />} />
      <Route path="settings" element={<Settings />}>
        <Route
          path="account"
          element={<Account />}
          action={AccountAction}
          loader={AccountLoader}
        />
      </Route>
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
    <GlobalContextProvider>
      <RouterProvider
        router={router}
        fallbackElement={<h1>Abdulkarim's Fallback element</h1>}
      />
    </GlobalContextProvider>
  );
}
