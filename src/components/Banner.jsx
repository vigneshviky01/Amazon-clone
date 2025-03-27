import React from "react";
import "../styles/banner.css";

const CarouselArrow = ({ direction }) => (
  <button
    className={`carousel-control-${direction}`}
    type="button"
    data-bs-target="#bannerCarousel"
    data-bs-slide={direction}
  >
    <span
      className={`carousel-control-${direction}-icon`}
      aria-hidden="true"
      style={{ filter: "invert(100%)", transform: "scale(1.3)", fontWeight: "bolder" }}
    ></span>
  </button>
);

const Banner = ({ images }) => {
  return (
    <div id="bannerCarousel" className="carousel slide carousel-fade banner-container" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={image.src} className="d-block w-100 banner-image" alt={image.alt} />
            <div className="carousel-caption d-none d-md-flex flex-column gap-2">
              <h5 className="fw-bold">{image.name}</h5>
              <p className="text-wrap">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CarouselArrow direction="prev" />
      <CarouselArrow direction="next" />
    </div>
  );
};

export default Banner;
