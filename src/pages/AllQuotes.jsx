import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTE = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "Mubarak", text: "React is a js library" },
  { id: "q3", author: "naji", text: "Reading docs is more fun" },
];
const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTE} />
    </>
  );
};

export default AllQuotes;
