// Percentage input component
import React, { Fragment } from "react";

export const PercentageInput = ({ value, onChange }) => {
  const onChangeHandler = event => {
    let value = Number(event.target.value);

    if (!value) {
      return;
    }

    if (value > 100) {
      value = value / 10;
    }

    onChange(value);
  };

  return (
    <Fragment>
      <input
        id="current-weight"
        type="text"
        onChange={onChangeHandler}
        value={value}
      />%
    </Fragment>
  );
};
