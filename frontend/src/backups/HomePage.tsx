// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:8080/imgnames"); // backend URL
        const data: string[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  const handleClick = (imgName: string) => {
    navigate(`/viewer/${imgName}`);
  };

  if (!images.length) return <p>Loading images...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>NASA Image Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {images.map((img) => (
          <div key={img} onClick={() => handleClick(img)} style={{ cursor: "pointer" }}>
            <img
              src={`http://localhost:8080/img/${img}`}
              alt={img}
              onClick={() => navigate(`/view/${img}`)}
              style={{ width: "200px", cursor: "pointer", borderRadius: "10px" }}
            />
            <p>{img}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
