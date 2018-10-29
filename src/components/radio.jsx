import React, { Fragment } from "react";

let i = 1;
export const Radio = ({ items, value, onChange }) => {
  return items.map(item => (
    <Fragment key={item.value}>
      <label>
        <input
          type="radio"
          name={`radio-${i++}`}
          value={item.value}
          checked={item.value === value}
          onChange={event => onChange(event.target.value)}
        />
        {item.title}
      </label>
      <br />
    </Fragment>
  ));
};
