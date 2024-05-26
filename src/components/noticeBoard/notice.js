import { Component, useState } from "react";
import "./notice.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import DataTable from "../examfee/exam";

const NoticeBoard = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="notice-big-container mb-2">
      <h1 className="notice-heading mb-1 mt-1">Notice Board</h1>
      <div className="notice-board-">
        <hr className="m-0 mb-2 mt-2 hr-line" />
        <p className="date-para">Updated Date:- 06-05-2024</p>
        <p className="notice-content">
          <b>Hi Friend's</b> <br />
          Please update me if any information you receive from faculty or
          frineds /{"  "}
          <Button color="danger" onClick={toggle}>
        Inform HERE
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tell me your notice....</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </p>
        <p className="principal-para">
          <b>- Developer</b>
        </p>
      
        <hr className="m-0 mb-2 mt-2 hr-line" />

        <p className="date-para mb-2">Updated Date:- 22-02-2024</p>
        <h1 className="practical-heading">Practical Time Table</h1>
        <table className="mb-2 mt-1">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>25-05-2024</td>
              <td>Hackathon for students graduating in 2025</td>
            </tr>
            <tr>
              <td>2</td>
              <td>01-06-2024</td>
              <td>Hackathon for students graduating in 2025</td>
            </tr>
            <tr>
              <td>3</td>
              <td>08-06-2024</td>
              <td>Hackathon for students graduating in 2025</td>
            </tr>
          </tbody>
        </table>
        <div className="">
          {/* <hr className="m-0 mb-2 mt-2 hr-line" /> */}
          <p className="date-para">Updated Date:- 26-05-2024</p>
          <p className="notice-content">
            <b>HACKATHON 2025 BATCH</b> <br />
            Added Important Quations section please find it below.. only
            questions are added so if you need the answer of it please click the
            question it automatically redirect to google search bar with the
            question. The answer was not added me that is Google answer😅😅
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
