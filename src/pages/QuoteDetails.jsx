import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuoteFound from "../components/quotes/NoQuotesFound";
const DUMMY_QUOTE = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "Mubarak", text: "React is a js library" },
  { id: "q3", author: "naji", text: "Reading docs is more fun" },
];

const QuoteDetails = () => {
  const match=useRouteMatch()
  const params = useParams();
  console.log(match)
  const quote = DUMMY_QUOTE.find((quote) => quote.id === params.id);
  if (!quote) {
    return <NoQuoteFound />;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
