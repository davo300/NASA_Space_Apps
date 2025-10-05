import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewerPage from "./pages/ViewerPage";

const App: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewer/:imgName" element={<ViewerPage />} />
      </Routes>
    </Router>
=======
    <div id="main">

      <div id="mainColumn">
        <h1 className="title">NASA Dataset Viewer</h1>

        <svg width="90%" height="1%">
          <rect width="100%" height="100%" fill="#e9eaf5ff"></rect>
        </svg>

        <ZoomableImage clickHandler={outerDivClicked} src="/src/assets/test_image.jpg" />

        <div className="InfoBox">
          <p>Coords, The database of the image, some other info</p>
        </div>
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
>>>>>>> Stashed changes
  );
};

export default App;
