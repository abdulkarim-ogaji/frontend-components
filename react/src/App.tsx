import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import { GlobalContextProvider } from "./context/globalContext";
import ChatPage from "./pages/ChatPage";
import ChatMessages from "./pages/ChatPage/ChatMessages";
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
        path="chat"
        element={<ChatPage />}
        errorElement={<h1>Chat Error</h1>}
      >
        <Route
          index
          element={<ChatMessages />}
          errorElement={<h1>Chat messages Error</h1>}
        />
        <Route
          path=":id"
          element={<ChatMessages />}
          errorElement={<h1>Chat messages Error</h1>}
        />
      </Route>
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
