// src/components/LabelToolbar.tsx
import React from "react";

interface Props {
  onAddLabel: () => void;
  onDeleteLabel: () => void;
  onSaveLabels: () => void;
  onClearLabels: () => void;
}

const LabelToolbar: React.FC<Props> = ({ onAddLabel, onDeleteLabel, onSaveLabels, onClearLabels }) => (
  <div style={{}}>
    <button className="toolbutt" onClick={onAddLabel}>Add Label</button>
    <button className="toolbutt" onClick={onDeleteLabel}>Delete Label</button>
    <button className="toolbutt" onClick={onSaveLabels}>Save Labels</button>
    <button className="toolbutt" onClick={onClearLabels}>Clear Labels</button>
  </div>
);

export default LabelToolbar;
