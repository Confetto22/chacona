import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

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
    refLink: "/",
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
  return (
    <nav className="navbar absolute w-full top-0 bg-[var(--theme-blue)] px-4 pl-0 text-white flex items-center justify-between">
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
      <RiMenu3Fill className="md:hidden text-[1.3rem]" />
    </nav>
  );
};

export default Navbar;
