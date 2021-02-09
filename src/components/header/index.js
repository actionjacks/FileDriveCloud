import React from "react";
import "../../styles/Header.css";
import CatLogo from "../../media/logo_.png";
//icons
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const index = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={CatLogo} alt="logo" />
        <span>Cloud Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <ArrowDropDownCircleIcon />
          <input placeholder="search in drive" type="text" />
          <YoutubeSearchedForIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt="User Photo" />
      </div>
    </div>
  );
};

export default index;
