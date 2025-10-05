// src/components/LabelList.tsx
import React from "react";

interface Label {
  id: number;
  name: string;
}

interface Props {
  labels: Label[];
  onSetLabel: (id: number, name?: string | null) => void;
  onDeleteLabel: (id: number) => void;
}

const LabelList: React.FC<Props> = ({ labels, onSetLabel, onDeleteLabel }) => (
  <ul className="LabelList">
    {labels.map((label) => (
      <li id="labeledItem" key={label.id}>
        <input type="text"/>
        <button className="location" onClick={(e) => onSetLabel(label.id, (e.currentTarget.previousElementSibling as HTMLInputElement).value)}>Set Location</button>
        <button className="deleteSingle" onClick={() => onDeleteLabel(label.id)}>X</button>
      </li>
    ))}
  </ul>
);

export default LabelList;
