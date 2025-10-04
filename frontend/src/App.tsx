// src/App.tsx
import "./App.css";
import React, { useState } from "react";
import ZoomableImage from "./components/ZoomableImage";
import LabelToolbar from "./components/LabelToolbar";
import LabelList from "./components/LabelList";
import testIMG from "../img/test_image.jpg";

interface Label {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [labels, setLabels] = useState<Label[]>([]);

  const addLabel = () => {
    const newLabel: Label = { id: labels.length + 1, name: `Label ${labels.length + 1}` };
    setLabels([...labels, newLabel])
  };

  const deleteLabel = () => {
    if(labels.length) {
      labels.pop()
      setLabels([...labels])
    }
  };

  const deleteSpecificLabel = (id: number) => {
    const ind = labels.findIndex((x) => x.id == id)
    labels.splice(ind, 1)
    setLabels([...labels])
  };

  const saveLabels = () => {
    console.log("Labels saved:", labels);
  };

  return (
    <div id="body-1">
      <h1 className="title">NASA Image Labeler</h1>

      <div className="LabelButtons">
        <LabelToolbar
          onAddLabel={addLabel}
          onDeleteLabel={deleteLabel}
          onSaveLabels={saveLabels}
          onClearLabels={() => setLabels([])}
        />
      </div>

      <div className="Map">
        <ZoomableImage src="/img/test_image.jpg" />
      </div>

      <div className="LabelsDisplay">
        <LabelList labels={labels} onDeleteLabel={(id) => deleteSpecificLabel(id)} />
      </div>
    </div>
  );
};

export default App;
