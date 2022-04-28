import { auth, provider } from "../firebases/firebase";
import "./login.css";

import Cookies from "js-cookie";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { fbData } from "../../redux/actions";

export const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let cokk = Cookies.get("fbuser");

    if (cokk) {
      dispatch(fbData(JSON.parse(cokk)));
      navigate("/");
      return;
    }
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let userData = {
          name: result.user.displayName,
          email: result.user.email,
          profileUrl: result.user.photoURL,
        };

        Cookies.set("fbuser", JSON.stringify(userData), { expires: 2 });

        dispatch(fbData(userData));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login__main">
      <div className="login">
        <div className="login__logo">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />

          <button type="submit" onClick={signIn}>
            LOGIN with Google
          </button>
        </div>
      </div>

      <div className="cover"></div>
    </div>
  );
};
