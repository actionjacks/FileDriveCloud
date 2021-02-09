import React from "react";
import "../../styles/NewFile.css";
import AddIcon from "@material-ui/icons/Add";

function NewFile() {
  return (
    <div className="newFile">
      <div className="newFile__container">
        <AddIcon />
        <p>new</p>
      </div>
    </div>
  );
}

export default NewFile;
