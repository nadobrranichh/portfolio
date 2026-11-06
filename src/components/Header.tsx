import { Link } from "react-router";
import useBreakpoints from "../hooks/useBreakpoints";
import { useState } from "react";
import { containerStyle } from "../constants";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMd } = useBreakpoints();
  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  const links = [
    { label: "About", url: "/#about" },
    { label: "Education", url: "/#education" },
    { label: "Projects", url: "/#projects" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/#contact" },
  ];

  return (
    <header className="my-5 lg:mb-8 px-4 flex justify-between lg:justify-center sticky top-5 flex-wrap gap-5 z-100">
      {isMd && (
        <div className={containerStyle}>
          {links.map(({ label, url }) => (
            <Link key={label} to={url}>
              {label}
            </Link>
          ))}
        </div>
      )}
      <div className="flex gap-5">
        <button className={containerStyle}>ll</button>
        <button className={containerStyle}>mm</button>
      </div>
      {!isMd && (
        <button className={containerStyle} onClick={toggleSidebar}>
          hamburger
        </button>
      )}

      {isSidebarOpen && !isMd && (
        <div className={`${containerStyle} flex-col ml-auto`}>
          {links.map(({ label, url }) => (
            <Link
              className="block text-center"
              onClick={toggleSidebar}
              key={label}
              to={url}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
