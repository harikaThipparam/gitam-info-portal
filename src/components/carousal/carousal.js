import campus2 from './campus2.jpg';
import admissions from './admissions.jpg';
import gitam from './gitam.jpg'

const Carousal = () => {
  return (
    <div id="carouselExample" className="carousel slide poster-newyear">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={admissions} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={gitam} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={admissions} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={campus2} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
