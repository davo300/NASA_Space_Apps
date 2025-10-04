// src/components/ZoomableImage.tsx
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface Props { src: string }

const ZoomableImage: React.FC<Props> = ({ src }) => (
  <TransformWrapper>
    <TransformComponent>
      <img src={src} alt="NASA" style={{ width: "100%", height: "auto" }} />
    </TransformComponent>
  </TransformWrapper>
);

export default ZoomableImage;
