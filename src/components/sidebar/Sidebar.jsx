import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i className="bx bx-home"></i>,
    to: "/allservices",
    section: "allservices",
  },
  {
    display: "Manage",
    icon: <i className="bx bx-star"></i>,
    to: "/manageservice",
    section: "manageservice",
  },
  // {
  //   display: "Calendar",
  //   icon: <i className="bx bx-calendar"></i>,
  //   to: "/calendar",
  //   section: "calendar",
  // },
  {
    display: "User",
    icon: <i className="bx bx-user"></i>,
    to: "/user",
    section: "user",
  },
  {
    display: "New Policy",
    icon: <i className="bx bx-receipt"></i>,
    to: "/service",
    section: "service",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Resource Locker</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              (activeIndex == -1 ? -2 : activeIndex) * stepHeight + 0
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
