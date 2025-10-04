// src/App.tsx
import "./App.css";
import React, { useState } from "react";
import ZoomableImage from "./components/ZoomableImage";
import LabelToolbar from "./components/LabelToolbar";
import LabelList from "./components/LabelList";
import testIMG from "../img/test_image.jpg";

const SVGNS = 'http://www.w3.org/2000/svg'

interface Label {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [labels, setLabels] = useState<Label[]>([]);
  const crosshair = document.getElementById('crosshair') as HTMLInputElement

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

  const markLabel = (name?: string | null) => {
    if(crosshair)
      crosshair.checked = true;
  }

  const outerDivClicked = (mouseX: number, mouseY: number) => {

    const outerdiv = document.getElementById('outerdiv')
    if(outerdiv) {

      const rect = outerdiv.getBoundingClientRect()
      mouseX -= rect.x;
      mouseY -= rect.y;

      const shapes = document.getElementById('shapes')
      if (shapes) {

        const text = document.createElementNS(SVGNS, 'text');
        text.setAttribute('x', mouseX.toString())
        text.setAttribute('y', mouseY.toString())
        text.append('gay')
        shapes.append(text)

      }

    }
    console.log(mouseX, mouseY)

  }

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
        <ZoomableImage clickHandler={outerDivClicked} src="/src/assets/test_image.jpg" />
      </div>

      <div className="LabelsDisplay">
        <LabelList labels={labels} onSetLabel={markLabel} onDeleteLabel={(id) => deleteSpecificLabel(id)} />
      </div>
    </div>
  );
};

export default App;
