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

import { BsSearch } from "react-icons/bs";

import logo from "../../assets/logo.png";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let user = useSelector((store) => store.user.user);

  let navigate = useNavigate();

  const signOut = () => {
    Cookies.remove("fbuser");
    alert("You have logout successfully! See you :)");
    navigate("/");
    window.location.reload();
  };

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
        <div className="profile_section" onClick={signOut}>
          <Avatar
            src={user.profileUrl}
            className="profile__nav"
            sx={{ width: 30, height: 30 }}
          />
          <a href="#">Logout</a>
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
