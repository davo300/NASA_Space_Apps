// src/App.tsx
import "./App.css";
import React, { useState } from "react";
import ZoomableImage from "./components/ZoomableImage";
import LabelToolbar from "./components/LabelToolbar";
import LabelList from "./components/LabelList";
import testIMG from "../img/test_image.jpg";

const SVGNS = 'http://www.w3.org/2000/svg'
let NEXT_LABEL_ID = 97
const labelMap = new Map<number, SVGElement>()

interface Label {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [labels, setLabels] = useState<Label[]>([]);
  const [currentLabelId, setCurrentLabelId] = useState<number>(0)
  const [currentLabelName, setLabelName] = useState<string>('')
  const crosshair = document.getElementById('crosshair') as HTMLInputElement

  const addLabel = () => {

    const newLabel: Label = { id: NEXT_LABEL_ID++, name: `Label ${labels.length + 1}` };
    console.log(labelMap)
    setLabels([...labels, newLabel])

    const shapes = document.getElementById('shapes')
    if (shapes) {

      const text = document.createElementNS(SVGNS, 'text');
      text.setAttribute('x', '0')
      text.setAttribute('y', '0')
      shapes.append(text)
      labelMap.set(newLabel.id, text)

    }

  };

  const trueDeleteLabel = (lb?: Label) => {
    if(lb) {

      const textElem = labelMap.get(lb.id)
      const shapes = document.getElementById('shapes')

      if(textElem && shapes)
        shapes.removeChild(textElem)
      labelMap.delete(lb.id);
      setLabels([...labels])

    }
  }

  const deleteLabel = () => {
    const l = labels.pop()
    trueDeleteLabel(l)
  };

  const deleteSpecificLabel = (id: number) => {
    const ind = labels.findIndex((x) => x.id == id)
    trueDeleteLabel(labels[ind])
    labels.splice(ind, 1)
    setLabels([...labels])
  };

  const saveLabels = () => {
    console.log("Labels saved:", labels);
  };

  const markLabel = (id: number, name?:string | null) => {

    if(crosshair)
      crosshair.checked = true;
    if(name)
      setLabelName(name)
    setCurrentLabelId(id)

  }

  const clearLabels = () => {

    const shapes = document.getElementById('shapes')
    if(shapes)
      for(; shapes.lastChild; shapes.removeChild(shapes.lastChild));
    setLabels([])
    labelMap.clear()

  }

  const outerDivClicked = (mouseX: number, mouseY: number) => {

    const outerdiv = document.getElementById('outerdiv')
    if(outerdiv) {

      const rect = outerdiv.getBoundingClientRect()
      mouseX -= rect.x;
      mouseY -= rect.y;

      const shapes = document.getElementById('shapes')
      if (crosshair && shapes) {

        if (crosshair.checked) {

          const text = labelMap.get(currentLabelId)
          console.log(currentLabelId, text, currentLabelName)
          if (text) {

            text.setAttribute('x', mouseX.toString())
            text.setAttribute('y', mouseY.toString())
            for(; text.lastChild; text.removeChild(text.lastChild));
            text.append(currentLabelName)

          }
          crosshair.checked = false

        }

      }

    }

  }

  return (
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
  );
};

export default App;
