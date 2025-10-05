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
<<<<<<< Updated upstream
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
          contentStyle={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={src}
              alt="NASA"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",  // <-- preserves aspect ratio, entire image visible
                display: "block",
              }}
            />
            <svg
              id="shapes"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            ></svg>
          </div>
=======
        <TransformComponent wrapperStyle={{height:"100%"}}>
          <svg id="shapes" width="100%" height="100%"></svg>
          <img src={src} alt="NASA" style={{ width: '100%', height: '100%'}} />
>>>>>>> Stashed changes
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
