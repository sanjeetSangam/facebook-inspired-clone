import "./navbar.css";

import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdGroup } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { useStateValue } from "../../context/StateProvider";

import { BsSearch } from "react-icons/bs";

import logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";

export const Navbar = () => {
  const [{ user }, dispatch] = useStateValue();

  // console.log(user.photoURL);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />

        <form action="">
          <BsSearch />
          <input type="text" placeholder="Search Facebook" />
        </form>
      </div>

      <div className="menus">
        <a href="#" className="home__logo" id="home">
          <AiFillHome />
        </a>

        <a href="#">
          <MdOutlineOndemandVideo />
        </a>

        <a href="#">
          <FaMapMarkedAlt />
        </a>

        <a href="#">
          <MdGroup />
        </a>

        <a href="#">
          <SiYoutubegaming />
        </a>
      </div>
      <div className="profile">
        <div
          className="profile_section"
          onClick={() => {
            alert("You have Successfully LOGOUT!");
            window.location.reload();
          }}
        >
          <Avatar
            src={user.photoURL}
            className="profile__nav"
            sx={{ width: 30, height: 30 }}
          />
          <a href="#">{user.displayName.split(" ")[0]}</a>
        </div>

        <div className="profile_icons">
          <CgMenuGridR />
        </div>

        <div className="profile_icons">
          <BsMessenger />
        </div>

        <div className="profile_icons">
          <IoMdNotifications />
        </div>

        <div className="profile_icons">
          <IoMdArrowDropdown />
        </div>
      </div>
    </nav>
  );
};
