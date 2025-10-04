// src/components/LabelToolbar.tsx
import React from "react";

interface Props {
  onAddLabel: () => void;
  onDeleteLabel: () => void;
  onSaveLabels: () => void;
  onClearLabels: () => void;
}

const LabelToolbar: React.FC<Props> = ({ onAddLabel, onDeleteLabel, onSaveLabels, onClearLabels }) => (
  <div style={{ marginBottom: "10px" }}>
    <button onClick={onAddLabel}>Add Label</button>
    <button onClick={onDeleteLabel}>Delete Label</button>
    <button onClick={onSaveLabels}>Save Labels</button>
    <button onClick={onClearLabels}>Clear Labels</button>
  </div>
);

export default LabelToolbar;
