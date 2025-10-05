// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewerPage from "./pages/ViewerPage";

const App: React.FC = () => {
  return (
    <div id="main">

      <div id="mainColumn">
        <h1 className="title">NASA Dataset Viewer</h1>

        <svg width="90%" height="10px">
          <rect width="100%" height="100%" fill="#e9eaf5ff"></rect>
        </svg>

        <ZoomableImage clickHandler={outerDivClicked} src="/src/assets/test_image.jpg" />

        <svg width="93%" height="200px">
          <rect width="100%" height="100%" fill="#0c0c0cff"> idk put something here </rect>
        </svg>
      </div>

      <div id="mainColumn2">
        <div className="LabelButtons">  
          <LabelToolbar
            onAddLabel={addLabel}
            onDeleteLabel={deleteLabel}
            onSaveLabels={saveLabels}
            onClearLabels={clearLabels}
          />

          <LabelList labels={labels} onSetLabel={markLabel} onDeleteLabel={(id) => deleteSpecificLabel(id)} />
          </div>
      </div>


    </div>
  );
};

export default App;
