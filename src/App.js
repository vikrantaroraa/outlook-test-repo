import logo from "./logo.svg";
import "./App.css";
import EmailCard from "./components/EmailCard";
import { useEffect } from "react";
import { useState } from "react";
import EmailTemplate from "./components/EmailTemplate";
import { useFavourite } from "./context/favourite-context";

function App() {
  const [emails, setEmails] = useState([]);
  const [showTemplate, setShowTemplate] = useState(false);
  const [emailData, setEmailData] = useState({});
  const [showFavouriteMails, setShowFavouriteMails] = useState(false);

  const { state, dispatch: favouriteDispatch } = useFavourite();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://flipkart-email-mock.now.sh/");
      const result = await res.json();
      setEmails(result.list);
      console.log(result.list);
    })();
  }, []);

  const ClickHandler = async (id) => {
    const res = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
    const emailData = await res.json();
    setEmailData(emailData);
    console.log(emailData);
    setShowTemplate(true);
  };

  const favouriteMails = emails.filter((email) => email.id in state.favourite);
  console.log({ favouriteMails });

  return (
    <div className="App">
      <div className="emailCardsContainer">
        <button onClick={() => setShowFavouriteMails(true)}>
          Show Favourite Mails
        </button>

        <button onClick={() => setShowFavouriteMails(false)}>
          Hide Favourite Mails
        </button>

        {showFavouriteMails && state.favourite !== 0 ? (
          <div style={{ background: "red" }}>
            {favouriteMails.map(
              ({ date, from, id, short_description, subject }) => (
                <EmailCard
                  key={id}
                  date={date}
                  from={from}
                  short_description={short_description}
                  subject={subject}
                  ClickHandler={() => ClickHandler(id)}
                />
              )
            )}
          </div>
        ) : (
          <p>No Favourite Mails</p>
        )}
        {emails.length !== 0 &&
          emails.map(({ date, from, id, short_description, subject }) => (
            <EmailCard
              key={id}
              date={date}
              from={from}
              short_description={short_description}
              subject={subject}
              ClickHandler={() => ClickHandler(id)}
            />
          ))}
      </div>

      {showTemplate && (
        <div className="emailTemplateContainer">
          <EmailTemplate emailData={emailData} />
        </div>
      )}
    </div>
  );
}

export default App;
