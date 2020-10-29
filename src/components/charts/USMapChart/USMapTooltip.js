import React from "react";

const Tooltip = ({ stateName, totalExpenses, creditCards }) => {
  return (
    <div>
      <div style={{ fontSize: 16 }}>
        {stateName}: ${totalExpenses}
      </div>
      {creditCards.map(({ bankName, id, expenses }) => (
        <div key={id}>
          {bankName}-{id.slice(-2)}: ${expenses}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
