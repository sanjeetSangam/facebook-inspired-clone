import { auth, provider } from "../firebases/firebase";
import "./login.css";

import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

export const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
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
