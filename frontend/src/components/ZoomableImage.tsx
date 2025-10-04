// src/components/ZoomableImage.tsx
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  src: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src }) => {
  return (
    <div style={{ border: "1px solid #ccc", width: "800px", marginTop: "20px" }}>
      <TransformWrapper>
        <TransformComponent>
          <img src={src} alt="NASA" style={{ width: "100%" }} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
