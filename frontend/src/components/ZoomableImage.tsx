// src/components/ZoomableImage.tsx
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  src: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src }) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img src={src} alt="NASA" style={{ width: "100%" }} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;
