import React from "react";
import "../../styles/FileCard.css";
import logo from "../../media/logo.png";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const FileCard = ({ name }) => {
  return (
    <div className="fileCard">
      <div className="fileCard--top">
        <InsertDriveFileIcon style={{ fontSize: 130 }} />
        <img
          className="fileCard__img"
          src={logo}
          style={{ height: "60px" }}
          alt=""
        />
      </div>

      <div className="fileCard--bottom">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default FileCard;
