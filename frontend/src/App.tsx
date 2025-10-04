// src/App.tsx
import React, { useState } from "react";
import ZoomableImage from "./components/ZoomableImage";
import LabelToolbar from "./components/LabelToolbar";
import LabelList from "./components/LabelList";

interface Label {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [labels, setLabels] = useState<Label[]>([]);

  const addLabel = () => {
    const newLabel: Label = { id: labels.length + 1, name: `Label ${labels.length + 1}` };
    setLabels([...labels, newLabel]);
  };

  const deleteLabel = (id?: number) => {
    if (id) setLabels(labels.filter((l) => l.id !== id));
  };

  const saveLabels = () => {
    console.log("Labels saved:", labels);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>NASA Image Labeler</h1>
      <LabelToolbar
        onAddLabel={addLabel}
        onDeleteLabel={() => deleteLabel()}
        onSaveLabels={saveLabels}
        onClearLabels={() => setLabels([])}
      />
      <ZoomableImage src="/img/test_img.jpg" />
      <LabelList labels={labels} onDeleteLabel={(id) => deleteLabel(id)} />
    </div>
  );
};

export default App;
