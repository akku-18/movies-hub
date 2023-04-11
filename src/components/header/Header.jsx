import React from "react";
import "../header/header.css";
import { useAuth0 } from "@auth0/auth0-react";
import sad from "./sad.png";
import happy from "./smile.png";

export default function Header() {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();

  return (
    <div className="header">
      <div className="left">
        {isAuthenticated ? (
          <div className="auth-user">
            <img className="left-emofi" src={happy} alt="" />
            <span className="name">Welcome <br /> <span id="username">{user.name}</span> </span>
          </div>
        ) : (
          <div>
            <img className="left-emofi" src={sad} alt="" />
          </div>
        )}
      </div>
      <div className="main-title" onClick={() => window.scroll(0, 0)}>
        Movies Hub
      </div>

      {isAuthenticated ? (
        <button
          className="genric-btn" id="logout-btn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          style={{ background: "red" }}
        >
          Log Out
        </button>
      ) : (
        <button
          className="genric-btn" id="login-btn"
          onClick={() => loginWithRedirect()}
          style={{ background: "green" }}
        >
          Log In
        </button>
      )}
    </div>
  );
}
