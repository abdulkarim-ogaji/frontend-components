import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import ScrollToTop from "../../utils/ScrollToTop";
import AvatarButton from "../AvatarButton";
import Button from "../Button";
import ExpandableSearchBar from "../ExpandableSearchBar";
import {
  Logo,
  HomeIcon,
  LibraryIcon,
  NotificationIcon,
  HistoryIcon,
  SettingsIcon,
  HideNavigationIcon,
} from "../Icons";

const routes = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Library", path: "/library", icon: <LibraryIcon /> },
  { name: "Notifications", path: "/chat", icon: <NotificationIcon /> },
  { name: "History", path: "/history", icon: <HistoryIcon /> },
  { name: "Settings", path: "/settings/account", icon: <SettingsIcon /> },
];

export default function Layout() {
  const { state } = useGlobalContext();
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white layout">
      <ScrollToTop />
      <aside className={`layout__sidebar ${open ? "open" : ""}`}>
        <div className="flex justify-between items-center">
          {open ? (
            <Link to="/" className="py-2">
              <span>
                <Logo />
              </span>
            </Link>
          ) : (
            <h1 className="text-4xl layout__sidebar__hideOnHover">
              <HideNavigationIcon />
            </h1>
          )}

          <button
            className="layout__sidebar__showOnHover"
            aria-label="Hide navigation"
            onClick={(e) => setOpen((prev) => !prev)}
          >
            <HideNavigationIcon />
          </button>
        </div>
        <div className="mt-40 font-semibold">
          {routes.map((route, idx) => (
            <NavLink
              key={idx}
              className={`${
                open ? "hover:bg-gray-200 px-3" : ""
              }  hover:text-[var(--primary-color)] duration-200 pill py-2 w-full flex justify-start items-center gap-2 menu-link mb-1`}
              to={route.path}
            >
              {route.icon} {open ? route.name : ""}
            </NavLink>
          ))}
        </div>
      </aside>
      <main className="flex-grow layout__main__container">
        {state.bannerOpen ? <div className="bg-[#FFE9C1] p-5"></div> : null}

        <div className="flex gap-3 items-center pr-3">
          <div className="layout__main flex-grow flex items-center gap-3">
            <ExpandableSearchBar />
            <Link to="/" className="text-[var(--dark-theme-color)]">
              24/25 videos
            </Link>
            <Button loading={false}>Upgrade</Button>
          </div>
          <AvatarButton />
        </div>
        <div className="layout__main">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
