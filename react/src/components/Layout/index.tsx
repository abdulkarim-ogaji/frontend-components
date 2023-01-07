import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import ExpandableSearchBar from "../ExpandableSearchBar";
import HideNavigationIcon from "../Icons/HideNavigationIcon";
import Logo from "../Icons/Logo";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white layout">
      <aside className={`layout__sidebar ${open ? "open" : ""}`}>
        <div className="flex justify-between items-center">
          {open ? (
            <Link to="/" className="py-2">
              <span>
                <Logo />
              </span>
            </Link>
          ) : (
            <h1 className="text-4xl layout__sidebar__hideOnHover">H</h1>
          )}

          <button
            className="layout__sidebar__showOnHover"
            aria-label="Hide navigation"
            onClick={(e) => setOpen((prev) => !prev)}
          >
            <HideNavigationIcon />
          </button>
        </div>
      </aside>
      <main className="flex-grow layout__main__container">
        <div className="bg-[#FFE9C1] p-5"></div>
        <div className="layout__main">
          <div className="flex gap-3 items-center">
            <ExpandableSearchBar />
            <Link to="/" className="text-[var(--dark-theme-color)]">
              24/25 videos
            </Link>
            <Button>Upgrade</Button>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
