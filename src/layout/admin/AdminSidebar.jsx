import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaCog, FaUser, FaChevronDown } from 'react-icons/fa';
import LogoutBtn from '../../components/LogoutBtn'

const AdminSidebar = () => {

  const [showServiceSubMenu, setShowServiceSubMenu] = useState(false);
  const [showAccountSubMenu, setShowAccountSubMenu] = useState(false);

  const toggleServiceSubMenu = () => {
    setShowServiceSubMenu(!showServiceSubMenu);
    setShowAccountSubMenu(false);
  };

  const toggleAccountSubMenu = () => {
    setShowAccountSubMenu(!showAccountSubMenu);
    setShowServiceSubMenu(false);
  };

  const mynav = [
    {
      "title": "Home",
      "to": "/admin",
      "icon": <FaHome />
    },
    {
      "title": "Service",
      "to": "/admin",
      "icon": <FaTasks />,
      "submenu": [
        {
          "title": "Show Service",
          "to": "/admin/service"
        },
        {
          "title": "Create Service",
          "to": "/admin/service"
        }
      ]
    },
    {
      "title": "Settings",
      "to": "/admin",
      "icon": <FaCog />
    },
    {
      "title": "Account",
      "to": "/admin",
      "icon": <FaUser />,
      "submenu": [
        {
          "title": "My Account",
          "to": "/admin",
        },
        {
          "title": <LogoutBtn />,
          "to": "",
        }
      ]
    },
  ];

  return (
    <aside className='adminSideBarContainer'>
      <header className="adminSideBarLogo">
        <Link to={'/'}>
          <h2> My Admin</h2>
        </Link>
      </header>
      <nav className='adminSideBarNav'>
        <ul>
          {mynav.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  <span className="menuTitle" onClick={(e) => {
                    e.preventDefault();
                    if (item.title === "Service") toggleServiceSubMenu();
                    else if (item.title === "Account") toggleAccountSubMenu();
                  }}>
                    <span className="menuIcon">{item.icon}</span>
                    {item.title}
                    {item.submenu && <FaChevronDown className='subMenuIcon' />}
                  </span>
                </div>
              ) : (
                <Link to={item.to}>
                  <span className="menuIcon">{item.icon}</span>
                  {item.title}
                </Link>
              )}
              {item.submenu && ((item.title === "Service" && showServiceSubMenu) ||
                (item.title === "Account" && showAccountSubMenu)) && (
                  <ul>
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex}>
                        <Link to={subitem.to}>{subitem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
