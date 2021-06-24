import React from 'react';
import { minutesToDuration } from "../utils/duration";

function BreakControl({ breakDuration, breakMinus, breakPlus, session }) {
//start controls of the break duration below
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2"> // needs to display the focus session
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={breakMinus}
              disabled={breakDuration === 1 || !!session} //cannot go below 1
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={breakPlus}
              disabled={breakDuration === 15 || !!session} // cannot increase above 15
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakControl;