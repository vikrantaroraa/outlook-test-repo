import css from "./index.css";

const EmailCard = ({
  date,
  from,
  short_description,
  subject,
  ClickHandler,
}) => {
  return (
    <div className="emailCard" onClick={ClickHandler}>
      <div className="userIconContainer">
        <div className="userIcon">
          <p>{from.name[0]}</p>
        </div>
      </div>
      <div className="emailData">
        <div className="from">
          <div className="fromHeading">From:</div>
          <div className="fromName">
            <div>{from.name}</div>
            <div>[{from.email}]</div>
          </div>
        </div>
        <div className="subject">
          <div className="subjectHeading">Subject:</div>
          <div className="fromText">{subject}</div>
        </div>
        <div className="mailSummary">{short_description}</div>
        <div className="dateAndTime">
          <div>{Date(date).slice(0, 24)}</div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
