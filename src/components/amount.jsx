import React from "react";

const AmountUnknown = () => <h1 className="text-center">...</h1>;

export const Amount = ({
  percentage,
  charWeight,
  weightLimit,
  shotWeight,
  decreaseWeight
}) => {
  if (!percentage) {
    return <AmountUnknown />;
  }

  if (!charWeight) {
    return <AmountUnknown />;
  }

  const currentWeight = (Number(percentage) * charWeight) / 100;
  const maxWeight =
    Math.floor((weightLimit * charWeight) / 100) + (decreaseWeight ? 9000 : 0);
  const shotsAmount = Math.floor((maxWeight - currentWeight) / shotWeight);

  return <h1 className="text-center">{shotsAmount}</h1>;
};
