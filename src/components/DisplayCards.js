import React, { useRef } from "react";
import Card from "./Card";

const DisplayCards = ({ list, cssClass }) => {
  const countRef = useRef(0);
  console.log(countRef.current);

  const display =
    list &&
    list.map((p) => {
      return <Card key={countRef.current++} n={p} cssClass="deletedCard" />;
    });
  return <div className={cssClass}>This products was deleted :{display}</div>;
};
export default DisplayCards;
