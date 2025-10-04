// src/components/LabelList.tsx
import React from "react";

interface Label {
  id: number;
  name: string;
}

interface Props {
  labels: Label[];
  onDeleteLabel: (id: number) => void;
}

const LabelList: React.FC<Props> = ({ labels, onDeleteLabel }) => (
  <ul>
    {labels.map((label) => (
      <li key={label.id}>
        {label.name} <button className="deleteSingle" onClick={() => onDeleteLabel(label.id)}>X</button>
      </li>
    ))}
  </ul>
);

export default LabelList;
