import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#ECDFD7] min-h-screen container mx-auto">
      <header className="flex justify-between items-stretch pt-16 text-sm tracking-wider">
        <div className="flex items-center gap-16">
          <img src="/brew-culture.png" alt="" />
          <nav className="items-center animated-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/akc">AKC</NavLink>
            <div className="slide"></div>
          </nav>
        </div>
        <form className="flex gap-4 items-center">
          <div className="border rounded-3xl p-3 pr-6 bg-white flex gap-2 items-center">
            <img src="/search-icon.png" alt="" />
            <input
              placeholder="Search for drinks"
              className="border-none focus:outline-none bg-transparent"
            />
            <button type="submit">Search</button>
          </div>
          <button type="button">
            <img src="/notification.png" alt="" />
          </button>
        </form>
      </header>
      <Outlet />
      <footer>This is the footer</footer>
    </div>
  );
};
export default Layout;
