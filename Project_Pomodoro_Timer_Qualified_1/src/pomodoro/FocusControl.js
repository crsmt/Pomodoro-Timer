import React from 'react';
import { minutesToDuration } from '../utils/duration';

function FocusControl({ focusDuration, focusMinus, focusPlus, session }) {
//set up the default focus
  return (
    <div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={focusMinus}
          disabled={focusDuration === 5 || !!session} // cannot decrease below 5
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={focusPlus}
          disabled={focusDuration === 60 || !!session} // cannot increase above 60
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  </div>
  );
}

export default FocusControl;