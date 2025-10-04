import React from "react";

interface Label {
  id: number;
  name: string;
  x?: number; // optional x-coordinate
  y?: number; // optional y-coordinate
}

interface LabelListProps {
  labels: Label[];
  onDeleteLabel: (id: number) => void;
}

const LabelList: React.FC<LabelListProps> = ({ labels, onDeleteLabel }) => {
  if (labels.length === 0) return <p>No labels added yet.</p>;

  return (
    <div style={{ marginTop: "10px" }}>
      <h3 style={{ marginBottom: "5px" }}>Labels</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {labels.map((label) => (
          <li
            key={label.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 8px",
              marginBottom: "4px",
              backgroundColor: "#f3f4f6",
              borderRadius: "4px",
            }}
          >
            <span>
              {label.name} {label.x !== undefined && label.y !== undefined && `(${label.x}, ${label.y})`}
            </span>
            <button
              onClick={() => onDeleteLabel(label.id)}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "2px 6px",
                cursor: "pointer",
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelList;
