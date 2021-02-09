import React from "react";
import "../../styles/FilesView.css";

const FilesView = () => {
  return (
    <div className="fileView">
      <div className="fileView__row"></div>
      <div className="fileView__titles">
        <div className="fileView__titles--left">
          <p>Name</p>
        </div>
        <div className="fileView__titles--right">
          <p>Last modified</p>
          <p>Files size</p>
        </div>
      </div>
    </div>
  );
};

export default FilesView;
