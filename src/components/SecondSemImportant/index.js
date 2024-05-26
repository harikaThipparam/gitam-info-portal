import "./index.css";

const standardStructure = {
  Operating_Systems: "Operating_Systems",
  Database_Management_Systems: "Database_Management_Systems",
  Design_and_Analysis_of_Algorithms: "Design_and_Analysis_of_Algorithms",
  Data_Engineering_with_Python: "Data_Engineering_with_Python",
  Machine_Learning: "Machine_Learning",
  Operation_Research: "Operation_Research",
};

const QuestionsData = [
  {
    id: 1,
    subject: "Operating_Systems",
    questions: [
      "What are the different types of operating systems?",
      "Explain the concept of process scheduling.",
      "Discuss memory management techniques in operating systems.",
    ],
  },
  {
    id: 2,
    subject: "Database_Management_Systems",
    questions: [
      "What is normalization in database design?",
      "Discuss the ACID properties of transactions.",
      "Explain the role of indexes in database performance.",
    ],
  },
  {
    id: 3,
    subject: "Design_and_Analysis_of_Algorithms",
    questions: [
      "What is the time complexity of merge sort algorithm?",
      "Discuss dynamic programming approach.",
      "Explain the concept of greedy algorithms.",
    ],
  },
  {
    id: 4,
    subject: "Data_Engineering_with_Python",
    questions: [
      "What are the common libraries used in Python for data engineering?",
      "Explain the process of ETL (Extract, Transform, Load).",
      "Discuss the advantages of using pandas library in data engineering tasks.",
    ],
  },
  {
    id: 5,
    subject: "Machine_Learning",
    questions: [
      "What is supervised learning?",
      "Explain the difference between classification and regression algorithms.",
      "Discuss overfitting and underfitting in machine learning models.",
    ],
  },
  {
    id: 6,
    subject: "Operation_Research",
    questions: [
      "Discuss the role of linear programming in operations research.",
      "What are the different methods for solving linear programming problems?",
      "Explain the concept of sensitivity analysis in operations research.",
    ],
  },
];

const SecondSemImportant = () => {
  return (
    <div className="internal-exam-container">
      <p className="hey-guys">
        Semister section{" "}
        <span className="click-the-card">
          Click the card &#128071; for more
        </span>
      </p>
      <button
        type="button"
        role="alert"
        className="alert alert-primary w-100"
        data-bs-toggle="modal"
        data-bs-target="#firstInternalAssignment"
      >
        2nd Sem Impotant Questions
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          New<span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <div
        className="modal fade"
        id="firstInternalAssignment"
        tabIndex="-1"
        aria-labelledby="firstexampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="firstexampleModalLabel">
                &#8544;&#8544; Sem - Impotant Questions
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
                    id="pills-os-tab-importantQ"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-os-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    OS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ds-tab-assignment"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dms-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    DMS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-java-tab-assignment"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-daa-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-java"
                    aria-selected="false"
                  >
                    DAA
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ca-tab-assignment"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dep-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-ca"
                    aria-selected="false"
                  >
                    DEP
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-ps-tab-assignment"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ml-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-ps"
                    aria-selected="false"
                  >
                    ML
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-mea-tab-assignment"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-or-importantQ"
                    type="button"
                    role="tab"
                    aria-controls="pills-mea"
                    aria-selected="false"
                  >
                    OR
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-os-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-os-tab-importantQ"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Operating Systems</h1>
                  <hr />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-dms-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-ds-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Database Management System</h1>
                  <hr />
                  {QuestionsData.map((eachOne) => {
                    if (
                      eachOne.subject === standardStructure.Operating_Systems
                    ) {
                      <h1>LLL</h1>;
                    }
                  })}
                  <ul className="assignments-ul-container">
                    {/* <li className="alert alert-primary">
                      <a
                        href="https://drive.google.com/file/d/1vDLqf8sYPnshFGvLNCP0A86IG5dNNHea/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to download C 2nd Internal Assignment PDF{" "}
                      <p className="alert alert-danger m-0 mt-2 p-1">
                        <b>Note:-</b> Write this Assignment with very carefull
                        because madam was currecting very strictly.
                      </p>
                      <span className="badge bg-success">New</span>
                    </li> */}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-daa-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-java-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">
                    Design and Analysis of Algorithms
                  </h1>
                  <hr />
                  <ul className="assignments-ul-container">
                    {/* <li className="alert alert-primary">
                      <a
                        href="https://drive.google.com/file/d/1NV5TPx-6VRClzSMVwyMbWZpPQlOaZFE1/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to download Java Complete Assignment PDF{" "}
                      <span className="badge bg-success">New</span>
                    </li> */}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-dep-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-ca-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Data Engineering with Python</h1>
                  <hr />
                  <ul className="assignments-ul-container">
                    {/* <li className="alert alert-primary">
                      <a
                        href="https://drive.google.com/file/d/1KukI84GrBKuLpYpEylTPHLunrZ2GI4Bh/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to download Computer Archetecture 1st To 3rd Units
                      Assignment PDF{" "}
                      <span className="badge bg-success">New</span>
                    </li> */}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ml-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-ps-tab-assignment"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Machine Learning</h1>
                  <hr />
                  <ul className="assignments-ul-container">
                    {/* <li className="alert alert-primary">
                      <a
                        href="https://drive.google.com/file/d/1RkK9zcXa-YbyJ9gkMRiFzB0mf__xYI_5/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to download Probability & Statistics Complete Assignment
                      PDF <span className="badge bg-success">New</span>
                    </li> */}
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-or-importantQ"
                  role="tabpanel"
                  aria-labelledby="pills-mea-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Operation Research</h1>
                  <hr />
                  <ul className="assignments-ul-container">
                    {/* <li className="alert alert-primary">
                      <a
                        href="https://drive.google.com/file/d/1ef7XJp1gphikDRHf820FDHpg2cmlVzPD/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to download Economics 5th Unit Assignment PDF{" "}
                      <span className="badge bg-danger error-note">
                        Sorry we did small mistake. This is Updated one please
                        re-check once
                      </span>
                      <p className="imp-note">
                        Sorry we did small mistake. This is Updated one please
                        re-check once
                      </p>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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

export default SecondSemImportant;
