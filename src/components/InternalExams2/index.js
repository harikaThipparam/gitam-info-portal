import "./index.css";

const InternalExams2 = () => {
  const MathesInternal = [
    {
      id: "c248d7b8-22e7-4f7b-bba1-6f11f5405f12",
      question: "Explain Various identities of Boolean Algebra",
      page: 112,
    },
    {
      id: "4eb9bc9e-2dd6-4e65-bb7b-2b9b45de8043",
      question: "Describe the Representation of Boolean function",
      page: 113,
    },
    {
      id: "5d65ef92-542e-4cf5-a750-7d9b2d1e53ff",
      question: "What is conjunctive Normal form? Explain with example.",
      page: 116,
    },
    {
      id: "77f9ab18-4512-4c94-9537-9d5765fc2b7d",
      question: "What is disjunctive Normal form? Explain with Example.",
      page: 119,
    },
    {
      id: "d05b43a7-7576-4bb8-9676-850986837670",
      question: "Every field is an integral domain theorem",
      page: 105,
    },
    {
      id: "5892a8b2-8d70-4e2c-93aa-9b0e12187298",
      question: "A finite integral domain is a field",
      page: 106,
    },
  ];

  const JavaInternal = [
    {
      unit: "Unit-3",
      question_number: 1,
      question:
        "What are the methods in Java Calendar class? Explain about Timer class method in Java programming.",
      answer_type: "Long answer",
    },
    {
      unit: "Unit-4",
      question_number: 2,
      question:
        "Explain AWT labels with examples. Explain AWT Scrollbar class with an example.",
      answer_type: "Long answer",
    },
    {
      unit: "Unit-5",
      question_number: 3,
      question:
        "Explain about serialization and deserialization in Java. Write about the various I/O classes.",
      answer_type: "Long answer",
    },
    {
      unit: "Unit-3",
      question_number: 1,
      question: "Explain about Map interface in Java with examples.",
      answer_type: "Short answer",
    },
    {
      unit: "Unit-4",
      question_number: 2,
      question: "Discuss the methods used in AWT Event class.",
      answer_type: "Short answer",
    },
    {
      unit: "Unit-5",
      question_number: 3,
      question:
        "What is Object class in Java? State the various methods of Object class.",
      answer_type: "Short answer",
    },
  ];

  return (
    <div className="internal-exam-container">
      <p className="hey-guys">
        2nd Internal Exams Section{" "}
        <span className="click-the-card">
          Click the card &#128071; for more
        </span>
      </p>
      <button
        type="button"
        role="alert"
        className="alert alert-primary w-100"
        data-bs-toggle="modal"
        data-bs-target="#secondInternal"
      >
        MCA 1st Year I Semister (II-Internal) Quations
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          New<span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <div
        className="modal fade"
        id="secondInternal"
        tabIndex="-1"
        aria-labelledby="firstexampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="firstexampleModalLabel">
                &#8544;&#8544; - Internal Quations
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul
                className="nav nav-pills alert alert-success p-0 mr-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-dm-tab-second"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dm-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    DM
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ds-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ds-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    DS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-java-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-java-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-java"
                    aria-selected="false"
                  >
                    JAVA
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ca-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ca-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-ca"
                    aria-selected="false"
                  >
                    CA
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ps-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ps-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-ps"
                    aria-selected="false"
                  >
                    PS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-mea-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-mea-second"
                    type="button"
                    role="tab"
                    aria-controls="pills-mea"
                    aria-selected="false"
                  >
                    ME
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-dm-second"
                  role="tabpanel"
                  aria-labelledby="pills-dm-tab-second"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Discrite Mathemetics</h1>
                  <hr />
                  {/* <h1>Uploading soon.....</h1> */}
                  <ol>
                    {MathesInternal.map(
                      (eachOne) => (
                        <li className="ol-item-sem" key={eachOne.id}>
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(
                              eachOne.question
                            )}`}
                            target="_blank"
                            className="question-tag"
                            rel="noreferrer"
                          >
                            {eachOne.question}, <br />
                            <b>{`  Rahul Page No ${eachOne.page}`}</b>
                          </a>
                        </li>
                      )
                      // console.log(eachOne.id)
                    )}
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ds-second"
                  role="tabpanel"
                  aria-labelledby="pills-ds-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Data Structures using C</h1>
                  <hr />

                  <h1>Uploading soon.....</h1>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-java-second"
                  role="tabpanel"
                  aria-labelledby="pills-java-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">JAVA</h1>
                  <hr />
                  {/* <h1>Uploading soon.....</h1> */}
                  <ol>
                    {JavaInternal.map(
                      (eachOne) => (
                        <li className="ol-item-sem" key={eachOne.id}>
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(
                              eachOne.question
                            )}`}
                            target="_blank"
                            className="question-tag"
                            rel="noreferrer"
                          >
                            {eachOne.question},
                          </a>{" "}
                          <br /> <b className="m-0">{eachOne.answer_type}</b>
                        </li>
                      )
                      // console.log(eachOne.id)
                    )}
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ca-second"
                  role="tabpanel"
                  aria-labelledby="pills-ca-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Computer Architecture</h1>
                  <hr />
                  <h1>Uploading soon.....</h1>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ps-second"
                  role="tabpanel"
                  aria-labelledby="pills-ps-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Probability & Statistics</h1>
                  <hr />
                  <h1>Uploading soon.....</h1>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-mea-second"
                  role="tabpanel"
                  aria-labelledby="pills-mea-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">
                    Managerial Economics and Accountancy
                  </h1>
                  <hr />
                  <h1>Uploading soon.....</h1>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <p className="m-0 end-para">
                If there is any mistakes please let me{" "}
                <a href="whatsapp://send?phone=+918367330618" className="">
                  Know
                </a>
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalExams2;
