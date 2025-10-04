// src/components/LabelList.tsx
import React from "react";

interface Label {
  id: number;
  name: string;
}

interface Props {
  labels: Label[];
  onSetLabel: (name?: string | null) => void;
  onDeleteLabel: (id: number) => void;
}

const LabelList: React.FC<Props> = ({ labels, onSetLabel, onDeleteLabel }) => (
  <ul>
    {labels.map((label) => (
      <li key={label.id}>
        <input type="text"/>
        <button className="location" onClick={(e) => onSetLabel(e.currentTarget.previousElementSibling?.ariaValueText)}>Set Location</button>
        <button className="deleteSingle" onClick={() => onDeleteLabel(label.id)}>X</button>
      </li>
    ))}
  </ul>
);

export default LabelList;
