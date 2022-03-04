import React from "react";
import { Link, useNavigate } from "react-router-dom";
//CSS
import "./Header.css";
//Material UI Icons and Buttons
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { Icon, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function Header({ backButton }) {
  const navHistory = useNavigate();
  return (
    <div className="header">
      {/* If backButton is passed as prop, link to homepage */}
      {backButton ? (
        <Link to="/">
          <IconButton
            onClick={() => {
              navHistory.replace(backButton); //this doesnt work.
              //look up useNav. docs
            }}
          >
            <ArrowLeftIcon
              fontSize="large"
              className="arrow-back-btn"
            ></ArrowLeftIcon>
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="profile-icon" />
        </IconButton>
      )}
      {/* Logo / Text */}
      <h2 className="header__logo-text">FMB</h2>
      {/* Chat button with link */}
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="chat-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;