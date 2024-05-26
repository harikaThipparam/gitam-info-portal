import "./index.css";

const InternalExams = () => {
  return (
    <div className="internal-exam-container">
      <p className="hey-guys">
        Internal Exams Section{" "}
        <span className="click-the-card">
          Click the card &#128071; for more
        </span>
      </p>
      <button
        type="button"
        role="alert"
        className="alert alert-primary w-100"
        data-bs-toggle="modal"
        data-bs-target="#firstInternal"
      >
        MCA 1st Year I Semister (I-Internal) Quations
        {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          New<span className="visually-hidden">unread messages</span>
        </span> */}
      </button>
      <div
        className="modal fade"
        id="firstInternal"
        tabIndex="-1"
        aria-labelledby="firstexampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="firstexampleModalLabel">
                &#8544; - Internal Quations
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
                    id="pills-dm-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-dm"
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
                    data-bs-target="#pills-ds"
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
                    data-bs-target="#pills-java"
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
                    data-bs-target="#pills-ca"
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
                    data-bs-target="#pills-ps"
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
                    data-bs-target="#pills-mea"
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
                  id="pills-dm"
                  role="tabpanel"
                  aria-labelledby="pills-dm-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Discrite Mathemetics</h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=Define partial ordering relation and partial order set?"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        Define partial ordering relation and partial order set?
                      </a>
                    </li>
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=Define Equivalence Relation ?"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        Define Equivalence Relation ?
                      </a>
                    </li>
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=Explain Bijective Function?"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        Explain Bijective Function?
                      </a>
                    </li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=State and prove power set theorem ?"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        State and prove power set theorem ?
                      </a>
                    </li>
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=Explain about operations on a sets ?"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        Explain about operations on a sets ?
                      </a>
                    </li>
                    <li className="ol-item">
                      <a
                        href="https://www.google.com/search?q=P.T 1&sup2; + 2&sup2; + ........ + n&sup2; = (n(n + 1)(2n + 1))/6"
                        target="_blank"
                        className="quation-tag"
                        rel="noreferrer"
                      >
                        P.T 1&sup2; + 2&sup2; + ........ + n&sup2; = (n(n +
                        1)(2n + 1))/6
                      </a>
                    </li>
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ds"
                  role="tabpanel"
                  aria-labelledby="pills-ds-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Data Structures using C</h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">Define local variables ?</li>
                    <li className="ol-item">Define Global Variables ?</li>
                    <li className="ol-item">One dimensional Array ?</li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">Structure of a C Program ?</li>
                    <li className="ol-item">Explain the looping statements?</li>
                    <li className="ol-item">
                      Explain the different types of operators ?
                    </li>
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-java"
                  role="tabpanel"
                  aria-labelledby="pills-java-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">JAVA</h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">
                      Explain main() method in Java. What is Java's magic byte
                      code? Explain in detail
                    </li>
                    <li className="ol-item">
                      Compare inheritance with polymorphism?
                    </li>
                    <li className="ol-item">
                      What are the different components of JDK? Explain?
                    </li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">
                      Explain different types of control statements used in Java
                      Explain with examples
                    </li>
                    <li className="ol-item">
                      Define method overriding? Write any program to implement
                      concept of multiple inheritance in java ?
                    </li>
                    <li className="ol-item">
                      Describe all the primitive data types supported by Java
                      with appropriate examples. Also specify their storage
                      capacity / range?
                    </li>
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ca"
                  role="tabpanel"
                  aria-labelledby="pills-ca-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Computer Architecture</h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">
                      Which method is used for negative number representation in
                      digital world?
                    </li>
                    <li className="ol-item">
                      What is binary number system? How to convert binary to
                      decimal number with example?
                    </li>
                    <li className="ol-item">Describe the register transfer?</li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">
                      Explain the Grey code with example ?
                    </li>
                    <li className="ol-item">
                      Briefly explain floating-point representation with
                      example?
                    </li>
                    <li className="ol-item">
                      Differentiate between interrupt driven I/O with programmed
                      I/O?
                    </li>
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ps"
                  role="tabpanel"
                  aria-labelledby="pills-ps-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">Probability & Statistics</h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">Define vector space ?</li>
                    <li className="ol-item">Random variable?</li>
                    <li className="ol-item">Linear Transformation?</li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">
                      What is meant by probability and explain various
                      approaches of probability?
                    </li>
                    <li className="ol-item">
                      Define probability and explain the probability
                      distribution technique ?
                    </li>
                    <li className="ol-item">
                      What is meant co-ordinate system and Explain its in brief?
                    </li>
                  </ol>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-mea"
                  role="tabpanel"
                  aria-labelledby="pills-mea-tab"
                  tabIndex="0"
                >
                  <h1 className="sub-name">
                    Managerial Economics and Accountancy
                  </h1>
                  <hr />
                  <p className="short-name">Short Quations</p>
                  <ol className="ol-list m-0 mb-1">
                    <li className="ol-item">What is Profits?</li>
                    <li className="ol-item">What is Risk and uncertainty?</li>
                    <li className="ol-item">Define Time perspective ?</li>
                  </ol>
                  <p className="short-name mt-0">Long Quations</p>
                  <ol className="ol-list">
                    <li className="ol-item">
                      What is Managerial Economics? Explain how it is usefulness
                      to engineers?
                    </li>
                    <li className="ol-item">
                      Explain concept of Law of Demand?
                    </li>
                  </ol>
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

export default InternalExams;
