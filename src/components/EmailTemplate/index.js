import { useReducer } from "react";
import css from "./index.css";
import { useFavourite } from "../../context/favourite-context";

const EmailTemplate = ({ emailData }) => {
  const { state, dispatch: favouriteDispatch } = useFavourite();
  console.log({ state });
  return (
    <div className="emailCard">
      <div className="userIconContainer">
        <div className="userIcon">
          <p>F</p>
        </div>
      </div>
      <div className="emailData">
        <div className="subJectDateAndButton">
          <div className="subjectAndDate">
            <div className="subject">
              <div className="fromText">Lorem Ipsum</div>
            </div>
            <div className="dateAndTime">
              <div>Sun Oct 22 2023 17:47:21</div>
            </div>
          </div>
          <div className="favouriteButton">
            <button
              onClick={() =>
                favouriteDispatch({
                  type: "ADDTOFAVOURITE",
                  payload: emailData.id,
                })
              }
            >
              Mark as favourite
            </button>
          </div>
        </div>
        <div
          className="mailSummary"
          dangerouslySetInnerHTML={{ __html: emailData.body }}
        />
      </div>
    </div>
  );
};

export default EmailTemplate;
