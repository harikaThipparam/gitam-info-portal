import Sem1Image from "./imagesAlert/fierstSem.png";
import Sem2Image from "./imagesAlert/secondSem.png";
import fourthsem from "./fourthsem.jpg";
import sixthzsem from "./sixthzsem.jpg"

import "./index.css";

const AlertSection = () => {
  return (
    <div className="alerts-main-container alert-card-container">
      <div className="alert alert-primary" role="alert">
        <b>Exciting news!</b> We've just unboxed a game-changer for all
        irregular students out there. 🚀 Introducing{" "}
        <a href="https://mnp.ccbp.tech/" target="_blank" rel="noreferrer">
          GITAMConnectHub
        </a>
        , your one-stop digital haven for all things exams, internal exams, and
        assignments! <br /> <br />
        Navigate effortlessly through the twists and turns of your academic
        journey with our treasure trove of crucial information. Exams on the
        horizon? Check. Internal exam questions? Got 'em. Assignments causing a
        headache? We've got the remedy!
        <br /> <br />
        This isn't just a website; it's your academic sidekick, created by a
        fellow student who knows the struggle. Dive in, explore, and conquer
        your academic challenges with the power of information at your
        fingertips. Your success story starts here!
        <br /> <br />
        Ready to elevate your academic game? Visit{" "}
        <a href="https://mnp.ccbp.tech/" target="_blank" rel="noreferrer">
          GITAMConnectHub
        </a>{" "}
        now and embark on a journey of seamless learning! 🌐✨
      </div>
      <div className="alert alert-danger fade show" role="alert">
        <strong>Note!</strong> I'm trying to provide results within our website
        please stay tune to get results before official release and without
        server issues..
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          New <span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <div className="alert alert-warning  fade show" role="alert">
        <p className="p-0 m-0">
          <strong>Note!</strong> If i missed anything important Information
          regarding Exams or Assignments please let me{" "}
          <a
            href="https://kalyangottimukkalabio.vercel.app"
            target="_blank"
            className="d-none"
            rel="noreferrer"
          >
            know.
          </a>
          <a href="whatsapp://send?phone=+918367330618">Know</a> i will update
          as soon as possible minutes.
        </p>
      </div>
      <div className="alert alert-warning  fade show" role="alert">
        <strong>Syllabus!</strong> Please{" "}
        <button
          className="btn"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          Click
        </button>{" "}
        here to know 1st Semister Syllabus
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Semister 4
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={fourthsem} className="w-100" alt="semister1" />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open sixth Semister
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Semister 6
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={sixthzsem} className="w-100" alt="semister2" />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to fourth Semister
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="alert alert-success alert-dismissible fade show alert-card-container"
        role="alert"
      >
        <strong>Last Updated!</strong> On <b>25-05-2024</b>
      </div>
    </div>
  ); 
};

export default AlertSection;
