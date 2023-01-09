import { NavLink, Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <div className="min-h-screen pt-6 -ml-7">
      <div className="">
        <p className="font-semibold text-gray-700">Abdulkarim Ogaji</p>
        <h1 className="text-3xl font-semibold mb-8">Personal Settings</h1>
        <nav className="flex gap-4">
          <NavLink
            to="account"
            className={`text-gray-700 hover:text-gray-900 font-semibold pb-3 settings-menu__link`}
          >
            My account
          </NavLink>
          <NavLink
            to="a"
            className={`text-gray-700 hover:text-gray-900 font-semibold pb-3 settings-menu__link`}
          >
            Push notifications
          </NavLink>
          <NavLink
            to="b"
            className={`text-gray-700 hover:text-gray-900 font-semibold pb-3 settings-menu__link`}
          >
            Integrations
          </NavLink>
          <NavLink
            to="c"
            className={`text-gray-700 hover:text-gray-900 font-semibold pb-3 settings-menu__link`}
          >
            Quick record
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
