import React from "react";

const Tooltip = ({ stateName, totalExpenses, cards }) => {
  return (
    <div>
      <div style={{ fontSize: 16 }}>
        {stateName}: ${totalExpenses}
      </div>
      {cards.map(({ bankName, id, expenses }) => (
        <div>
          {bankName}-{id.slice(-2)}: ${expenses}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
