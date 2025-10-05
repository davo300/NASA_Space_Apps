import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ZoomableImage from "../components/ZoomableImage";
import LabelToolbar from "../components/LabelToolbar";
import LabelList from "../components/LabelList";

const SVGNS = "http://www.w3.org/2000/svg";
let NEXT_LABEL_ID = 97;
const labelMap = new Map<number, SVGElement>();

interface Label {
  id: number;
  name: string;
}

const ViewerPage: React.FC = () => {
  const { imgName } = useParams<{ imgName: string }>();
  const [labels, setLabels] = useState<Label[]>([]);
  const [currentLabelId, setCurrentLabelId] = useState<number>(0);
  const [currentLabelName, setLabelName] = useState<string>("");

  // Use a ref instead of querying the DOM directly
  const crosshairRef = useRef<HTMLInputElement>(null);

  const addLabel = () => {
    const newLabel: Label = { id: NEXT_LABEL_ID++, name: `Label ${labels.length + 1}` };
    setLabels([...labels, newLabel]);

    const shapes = document.getElementById("shapes");
    if (shapes) {
      const text = document.createElementNS(SVGNS, "text");
      text.setAttribute("x", "0");
      text.setAttribute("y", "0");
      shapes.append(text);
      labelMap.set(newLabel.id, text);
    }
  };

  const trueDeleteLabel = (lb?: Label) => {
    if (lb) {
      const textElem = labelMap.get(lb.id);
      const shapes = document.getElementById("shapes");
      if (textElem && shapes) shapes.removeChild(textElem);
      labelMap.delete(lb.id);
      setLabels([...labels]);
    }
  };

  const deleteLabel = () => {
    const l = labels.pop();
    trueDeleteLabel(l);
  };

  const deleteSpecificLabel = (id: number) => {
    const ind = labels.findIndex((x) => x.id === id);
    trueDeleteLabel(labels[ind]);
    labels.splice(ind, 1);
    setLabels([...labels]);
  };

  const saveLabels = () => {
    console.log("Labels saved:", labels);
  };

  const markLabel = (id: number, name?: string | null) => {
    if (crosshairRef.current) crosshairRef.current.checked = true;
    if (name) setLabelName(name);
    setCurrentLabelId(id);
  };

  const clearLabels = () => {
    const shapes = document.getElementById("shapes");
    if (shapes) while (shapes.lastChild) shapes.removeChild(shapes.lastChild);
    setLabels([]);
    labelMap.clear();
  };

  const outerDivClicked = (mouseX: number, mouseY: number) => {
    const outerdiv = document.getElementById("outerdiv");
    if (outerdiv) {
      const rect = outerdiv.getBoundingClientRect();
      mouseX -= rect.x;
      mouseY -= rect.y;

      const shapes = document.getElementById("shapes");
      if (crosshairRef.current && shapes) {
        if (crosshairRef.current.checked) {
          const text = labelMap.get(currentLabelId);
          if (text) {
            text.setAttribute("x", mouseX.toString());
            text.setAttribute("y", mouseY.toString());
            while (text.lastChild) text.removeChild(text.lastChild);
            text.append(currentLabelName);
          }
          crosshairRef.current.checked = false;
        }
      }
    }
  };

  if (!imgName) return <div>No image selected</div>;

  /*return (
    <div id="body-1">
      <h1 className="title">NASA Image Labeler</h1>

      <div className="LabelButtons">
        <LabelToolbar
          onAddLabel={addLabel}
          onDeleteLabel={deleteLabel}
          onSaveLabels={saveLabels}
          onClearLabels={clearLabels}
        />
      </div>

      <div className="Map">
        <ZoomableImage clickHandler={outerDivClicked} src={`http://localhost:8080/img/${imgName}`}/>
        <input ref={crosshairRef} type="checkbox" id="crosshair" />
      </div>

      <div className="LabelsDisplay">
        <LabelList labels={labels} onSetLabel={markLabel} onDeleteLabel={deleteSpecificLabel} />
      </div>
    </div>
  );*/
  return (
    <div id="body-1">

      <div id="mainColumn">
        <h1 className="title">NASA Dataset Viewer</h1>

        <svg width="90%" height="10px">
          <rect width="100%" height="100%" fill="#e9eaf5ff"></rect>
        </svg>

        <ZoomableImage clickHandler={outerDivClicked} src={`http://localhost:8080/img/${imgName}`}/>
        <input ref={crosshairRef} type="checkbox" id="crosshair" />

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

export default ViewerPage;
