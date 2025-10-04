import React from "react";

interface LabelToolbarProps {
  onAddLabel: () => void;
  onDeleteLabel: () => void;
  onSaveLabels: () => void;
  onClearLabels?: () => void;
}

const LabelToolbar: React.FC<LabelToolbarProps> = ({
  onAddLabel,
  onDeleteLabel,
  onSaveLabels,
  onClearLabels,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
        padding: "10px",
        backgroundColor: "#1f2937", // dark gray
        color: "white",
        borderRadius: "8px",
      }}
    >
      <button onClick={onAddLabel} style={buttonStyle}>
        ➕ Add Label
      </button>
      <button onClick={onDeleteLabel} style={buttonStyle}>
        🗑️ Delete Label
      </button>
      <button onClick={onSaveLabels} style={buttonStyle}>
        💾 Save Labels
      </button>
      {onClearLabels && (
        <button onClick={onClearLabels} style={buttonStyle}>
          🧹 Clear All
        </button>
      )}
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#2563eb", // blue
  color: "white",
  fontWeight: "bold",
};

export default LabelToolbar;
