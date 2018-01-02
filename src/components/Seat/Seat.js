import React from 'react';
import './seat.css';

const Seat = ({ data, selectedSeat, selectSeat, aisleSeat }) => {
  let isSelected = false;
  if (selectedSeat === (data.row + data.seat)) {
    isSelected = true;
  }

  return (
    <td className={`aisle-${aisleSeat}`}>
      <div className={`seat occupied-${data.occupied} selected-${isSelected}`} onClick={() => selectSeat(data)} />
    </td>
  );
};

export default Seat;