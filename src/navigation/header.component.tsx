import { Link, Outlet } from "react-router-dom";

import logo from "../assets/logo.jpg";
import { navbarData } from "../data/nav-data";

import Menu from "./menu.component";
import Footer from "./footer.component";

const handleMenuClose = () => {
  const menuBars = document.getElementById("menu-bars");
  menuBars.classList.toggle("change");

  const ele = document.getElementById("mobileMenu");
  ele?.classList.toggle("hidden");
};

const Header = () => {
  return (
    <>
      <div className="flex w-[100%] overflow-hidden">
        <div className="flex w-full">
          <div className="container1 flex-wrap w-full flex 1 1 100%">
            <div className="w-[100%] flex justify-around pt-4">
              <Link to="/">
                <img
                  src={logo}
                  alt="Sri Lanka Society of Queensland Inc logo"
                />
              </Link>
            </div>

            <div className="flex w-full md:hidden justify-end mt-1 mr-0 z1-50">
              <div
                class="menu-bars"
                id="menu-bars"
                onClick={() => handleMenuClose()}
              >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
              {/* <label
                className="flex1 justify-end md:hidden mt-1 mr-0 z-50 hidden"
                onClick={() => handleMenuClose()}
              >
                <FontAwesomeIcon icon={faAddressBook} className="text-2xl" />
              </label> */}
            </div>

            <div className="flex w-full justify-center md:hidden">
              <div className="flex justify-center w-8/12 m-auto border-b-1 border-gray-800 mt-5"></div>
            </div>

            {/*  main menu for tablets, laptop and larger screen devices  */}
            {/* mobile width <= 767px
            tablet width >= 768px
            laptop width >= 1024px          
        */}
            <div className="flex-1 w-[100%] mt-5">
              <div className="flex flex-1 items-center justify-between">
                <nav
                  id="main-menu"
                  className="hidden md:flex lg:flex 3xl:flex flex-1 items-center justify-around border-[1px] w-full text-sm mx-[10%] rounded-[14px] bg-[#000] text-[#a855f7] font-semibold font-roboto"
                >
                  <ul className="flex flex-1 text-center justify-between">
                    {navbarData.map((menu) => {
                      return (
                        <Menu
                          label={menu.label}
                          submenu={menu.subMenus}
                          routerLink={menu.routerLink}
                          icon={menu.icon}
                          handleClick={() => handleMenuClose()}
                        />
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <nav
        id="mobileMenu"
        className="hidden md:hidden lg:hidden w-[80%] text-2xl z-50 absolute justify-between rounded-[14px] left-16 top-40 shadow-2xl font-roboto"
      >
        <ul>
          {navbarData.map((menu) => {
            return (
              <div className="cursor-pointer text-xs bg-black text-[#a855f7] text-center justify-around hover:text-[#fff]">
                <Menu
                  label={menu.label}
                  submenu={menu.subMenus}
                  routerLink={menu.routerLink}
                  icon={menu.icon}
                  handleClick={() => handleMenuClose()}
                />
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
