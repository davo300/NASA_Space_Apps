import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewerPage from "./pages/ViewerPage";

const App: React.FC = () => {
  return (
    <div id="main">

      <nav id = "navBar"><h1 className="title">NASA Dataset Viewer</h1></nav>

      <div id="mainColumn">
        <ZoomableImage clickHandler={outerDivClicked} src="/src/assets/test_image.jpg"/>

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
