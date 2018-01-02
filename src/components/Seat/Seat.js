import React from 'react';
import './seat.css';

// Seat component
const Seat = ({ data, selectedSeat, selectSeat, aisleSeat }) => {
  let selected = false;
  if (selectedSeat === (data.row + data.seat)) {
    selected = true;
  }
  return (
    <td className={`aisle-${aisleSeat}`}>
      <div className={`seat occupied-${data.occupied} selected-${selected}`} onClick={() => selectSeat(data)} />
    </td>
  );
};

export default Seat;