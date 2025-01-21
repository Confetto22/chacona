import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
// import MenuWindow from "./MenuWindow";
import { useState } from "react";

const navLinks = [
  {
    ref: "Home",
    refLink: "/",
    category: "navPage",
  },
  {
    ref: "Overview",
    refLink: "/",
    category: "navPage",
  },
  {
    ref: "Services",
    refLink: "/services",
    category: "navPage",
  },
  {
    ref: "Rooms",
    refLink: "/",
    category: "navPage",
  },
  {
    ref: <FaFacebookF />,
    refLink: "/",
    category: "navSocials",
  },
  {
    ref: <FaTwitter />,
    refLink: "/",
    category: "navSocials",
  },
  {
    ref: <FaLinkedinIn />,
    refLink: "/",
    category: "navSocials",
  },
  {
    ref: <FaYoutube />,
    refLink: "/",
    category: "navSocials",
  },
];

const navSocials = navLinks.filter((social) => social.category == "navSocials");
const navPage = navLinks.filter((social) => social.category == "navPage");

const Navbar = () => {
  const [openMenu, SetOpenMenu] = useState(false);
  openMenu ? console.log("opened") : console.log("not yet");
  return (
    <>
      {/* <div
        className={`menuwindow w-full h-[50vh] md:hidden bg-[#12667f] absolute ${
          openMenu ? "bg-[black]" : "bg-[red]"
        }`}
      >
        <menu>
          {navSocials.map((singleSocial) => (
            <Link
              to={singleSocial.refLink}
              key={singleSocial.ref}
              className="md:text-[1.2rem]"
            >
              {" "}
              {singleSocial.ref}{" "}
            </Link>
          ))}
        </menu>
      </div> */}
      <aside
        className={`menu flex flex-col items-start  gap-3 justify-start md:hidden  z-[10] w-full min-h-[40vh] bg-[#0e2e54] duration-700 ease-in-out pb-8  ${
          openMenu ? "visible fixed top-0" : "absolute top-[-50%]"
        }`}
      >
        <ul className="menuwindow_list mt-[100px]  flex flex-col ite  gap-0  w-full">
          {navPage.map((singlePage) => {
            return (
              <Link
                key={singlePage.ref}
                to={singlePage.refLink}
                onClick={() => SetOpenMenu(false)}
                className="menuListItem flex flex-row items-center justify-center gap-[3px] text-stone-300 hover:text-[#0e2e54] hover:bg-stone-100 w-full py-2 duration-200 ease-in-out"
              >
                {singlePage.ref}
              </Link>
            );
          })}
        </ul>
      </aside>
      <nav className="navbar absolute w-full top-0 bg-[var(--theme-blue)] px-4 pl-0 text-white flex items-center justify-between z-[100]">
        <menu className="flex items-center md:gap-7 gap-4 navbar_left">
          <Link
            to={"#"}
            className="logo_name font-semibold border-b-[.3rem] border-b-[var(--theme-red)] pl-4 py-4 md:text-[1.2rem] text-[.9rem] "
          >
            <span className="uppercase logo">Chacona</span> Properties
          </Link>
          <div className="navbar_socials  items-center gap-2 hidden md:flex">
            {navSocials.map((singleSocial) => (
              <Link
                to={singleSocial.refLink}
                key={singleSocial.ref}
                className="md:text-[1.2rem]"
              >
                {" "}
                {singleSocial.ref}{" "}
              </Link>
            ))}
            {/* <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube /> */}
          </div>
        </menu>
        <menu className="menu_links md:flex items-center gap-4 hidden ">
          {navPage.map((link) => (
            <Link to={link.refLink} className="" key={link.ref}>
              {link.ref}
            </Link>
          ))}
        </menu>
        <RiMenu3Fill
          className="md:hidden text-[1.3rem] cursor-pointer hover:opacity-70"
          onClick={() => SetOpenMenu(!openMenu)}
        />
      </nav>
      {/* <MenuWindow /> */}
    </>
  );
};

export default Navbar;
