import "./results.css";

const Results = () => {
  return (
    <div className="results-main-container">
      <p className="wating-tag">
        <i>Hie Friends Get your results here before official release.....🎉</i>{" "}
        <br />
        <i>This will be Unlock soon.... Stay Tune🙂😉</i>
      </p>

      <table className="table-container">
        <tbody>
          <tr>
            <td>
              <p className="header-text">
                MCA (CBCS) 2-YEARS 1st Sem MAR-2024 RESULTS
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <i>Results not prepared yet..</i>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-container">
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="input-text">
                          Enter Hall Ticket No :{" "}
                          <input
                            type="text"
                            name="htno"
                            size="15"
                            maxLength="12"
                            defaultValue=""
                          />
                          <button type="button" className=" go-button">
                            Submit
                          </button>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="input-warning">
                          Please Enter 12 Digit Hall Ticket Number Ex:
                          130323672208, 130923672086.
                        </span>
                      </td>
                    </tr>
                    <p className="mt-2">
                      <i>
                        Copyright Notice : Content displayed via iframes belongs
                        to their respective owners.
                      </i>
                    </p>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
