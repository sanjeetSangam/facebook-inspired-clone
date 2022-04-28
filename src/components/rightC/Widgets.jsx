import "./Widgets.css";

import { MdVideoCall } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import { useStateValue } from "../../context/StateProvider";

import { Avatar } from "@mui/material";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

export const Widgets = () => {
  let user = useSelector((store) => store.user.user);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));

  return (
    <div className="widgets">
      <div className="chats">
        <p>Contacts</p>

        <div className="chat__icons">
          <a href="#">
            <MdVideoCall />
          </a>
          <a href="#">
            {" "}
            <BiSearch />
          </a>
          <a href="#">
            <BsThreeDots />
          </a>
        </div>
      </div>

      <div className="chat__list">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={user.profileUrl} className="profile__nav" />
        </StyledBadge>
        <p>{user.name}</p>
      </div>
    </div>
  );
};
