import { navbarData } from "../data/nav-data";
import Menu from "./menu.component";

const Footer = () => {
  const formatDate = () => new Date().toLocaleDateString();

  const handleClickMenu = () => {};

  return (
    <>
      <div className="text-center mt-5">
        <div className="sm:flex-col my-2 sm:text-[14px] md:text-[1em] lg:text-[1.2em]">
          <div>&copy; {formatDate()} Sri Lanka Society of Queensland Inc.</div>
          <div>All rights reserved.</div>
          <div className="mt-2">
            Developed by Thusith Kathaluwage using react (v19)/typescript.♥️
          </div>
        </div>

        <div>
          <div className="flex justify-center w-8/12 m-auto border-b-1 border-gray-800 mt-5"></div>
        </div>

        {/* footer  */}
        <div className="w-[80%] m-auto hidden md:flex">
          <div className="sm:flex flex-wrap flex-1 items-center content-center w-full md:text-[1em] lg:[1.2em]">
            <ul
              id="footer-menu"
              className="sm:flex flex-1 items-center justify-between text-base md:text-[1em] lg:[1.5em] font-roboto"
            >
              {navbarData.map((menu) => {
                return (
                  <Menu
                    label={menu.label}
                    submenu={menu.subMenus}
                    routerLink={menu.routerLink}
                    icon={menu.icon}
                    handleClick={() => handleClickMenu()}
                    key={menu.label}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        {/* mobile footer */}

        <div className="w-[80%] m-auto flex flex-col  md:hidden text-xs font-roboto">
          <div className="flex-wrap flex-1 items-center content-center w-full p-2">
            <ul className="flex justify-between p-3" id="footer-menu">
              <div className="flex flex-col gap-5">
                <div>
                  <Menu
                    label="About Us"
                    submenu={null}
                    routerLink="about-us"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="aboutus"
                  />
                  <Menu
                    label="Contact Us"
                    submenu={null}
                    routerLink="contact-us"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="contactus"
                  />
                </div>
                <div>
                  <Menu
                    label="Committee Members"
                    submenu={null}
                    routerLink="committee"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="committee-members"
                  />
                  <Menu
                    label="Photo Gallery"
                    submenu={null}
                    routerLink="photo-gallery"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="phot-gallery"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <Menu
                    label=" Publications"
                    submenu={null}
                    routerLink="publications"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="publications"
                  />
                  <Menu
                    label="Up Coming Events"
                    submenu={null}
                    routerLink="upcoming-events"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="upcoming-events"
                  />
                </div>
                <div>
                  <Menu
                    label="Past Events"
                    submenu={null}
                    routerLink="past-events"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="past-events"
                  />
                  <Menu
                    label="Notice Board"
                    submenu={null}
                    routerLink="notice-board"
                    icon={""}
                    handleClick={() => handleClickMenu()}
                    key="notice-board"
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
