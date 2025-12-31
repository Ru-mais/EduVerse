import React, { useRef, useState, useEffect } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import {
  Home,
  BookMarked,
  BookOpen,
  Users,
  Contact,
  X,
  Menu,
  Icon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Contact", icon: Contact, href: "/contact" },
];

const Navbar = () => {
  // for clerk
  const { openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  // for mobile toggle and scroll
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuRef = useRef(null);
  const isLoggedIn = isSignedIn && Boolean(localStorage.getItem("token"));

  //fetch token
  useEffect(() => {
    const loadToken = async () => {
      if (isSignedIn) {
        const token = await getToken();
        localStorage.setItem("token", token);
        console.log("clerk login  token ", token);
      }
    };
    loadToken();
  }, [isSignedIn, getToken]);

  //remove token when signout
  useEffect(() => {
    if (!isSignedIn) {
      localStorage.removeItem("token");
      console.log("clerk  token removed ");
    }
  }, [isSignedIn]);

  const desktopLinkClasses = (isActive) => `
    ${navbarStyles.desktopNavItem} ${
    isActive ? navbarStyles.desktopNavItemActive : ""
  }`;

  const mobileLinkClass = (isActive) =>
    `${navbarStyles.mobileMenuItem} ${
      isActive
        ? navbarStyles.mobileMenuItemActive
        : navbarStyles.mobileMenuItemHover
    }`;

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`${navbarStyles.navbar} ${
        showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden
      } ${
        isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault
      }`}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}>
          {/*logo*/}
          <div className="flex items-center gap-3 select-none">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <div
              className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-700 to-cyan-600 
                font-serif leading-[.95] mt-1"
            >
              EduVerse
            </div>
          </div>

          {/*Desktop Navigation*/}
          <div className={navbarStyles.desktopNav}>
            <div className={navbarStyles.desktopNavContainer}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) => desktopLinkClasses(isActive)}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={18} className={navbarStyles.desktopNavIcon} />
                      <span className={navbarStyles.desktopNavText}>
                        {item.name}
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/*Right side*/}
          <div className={navbarStyles.authContainer}>
            {!isSignedIn ? (
              <button
                type="button"
                onClick={() => openSignUp()}
                className={
                  navbarStyles.createAccountButton ?? navbarStyles.loginButton
                }
              >
                <span>Login</span>
              </button>
            ) : (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            {/*togglee*/}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={navbarStyles.mobileMenuButton}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/*Mobile Nav*/}
        <div
          ref={menuRef}
          className={`${navbarStyles.mobileMenu} ${
            isOpen ? navbarStyles.mobileMenuOpen : navbarStyles.mobileMenuClosed
          }`}
        >
          <div className={navbarStyles.mobileMenuContainer}>
            <div className={navbarStyles.mobileMenuItems}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) => mobileLinkClass(isActive)}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={navbarStyles.mobileMenuIconContainer}>
                      <Icon size={18} className={navbarStyles.mobileMenuIcon} />
                    </div>
                    <span className={navbarStyles.mobileMenuText}>
                      {item.name}
                    </span>
                  </NavLink>
                );
              })}
              {!isSignedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    openSignUp();
                    setIsOpen(false);
                  }}
                  className={
                    navbarStyles.mobileCreateAccountButton ??
                    navbarStyles.mobileLoginButton
                  }
                >
                  <span>Create Account</span>
                </button>
              ) : (
                <div className="px-4 py-2 ">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={navbarStyles.backgroundPattern}>
        <div className={navbarStyles.pattern}></div>
      </div>
    </nav>
  );
};

export default Navbar;
