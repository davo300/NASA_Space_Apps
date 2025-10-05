// src/components/ZoomableImage.tsx
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  clickHandler: (x: number, y: number) => void;
  src: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ clickHandler, src }) => {
  return (
    <div id="outerdiv" className="Map" onClick={(e) => clickHandler(e.clientX, e.clientY)}>
      
      <button id="zoomButtons" className="ZoomInButton"></button>
      <button id="zoomButtons" className="ZoomOutButton"></button>

      <input type="checkbox" name="dummy" id="crosshair" />
      <TransformWrapper>
        <TransformComponent wrapperStyle={{height:"100%"}}>
          <svg id="shapes" width="100%" height="100%"></svg>
          <img src={src} alt="NASA" style={{ width: '100%', height: '100%'}} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
