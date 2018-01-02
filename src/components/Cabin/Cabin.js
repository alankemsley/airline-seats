import React, { Component } from 'react';
import './cabin.css';
import Seat from '../Seat/Seat';

// Cabin component
class Cabin extends Component {
  constructor(props) {
    super(props);
    const seats = Object.values(this.rowSort(props.seats));
    const aisles = this.findAisles(seats);
    this.state = { seats, aisles };
  }

  // Get aisles
  findAisles(seats) {
    const aisles = [];
    const row = seats[0].sort((a, b) => a.seat > b.seat);
    for (let i = 0; i < row.length; i++) {
      aisles.push(row[i].seat);
    }
    return aisles;
  }

  // Sort seats by row
  rowSort(seats) {
    return seats.reduce((memo, x) => {
      const arr = memo;
      if (!arr[x.row]) {
        arr[x.row] = [];
      }
      arr[x.row].push(x);
      return arr;
    }, {});
  }

  // Identify whether seat is aisle seat
  aisleSeat(seat, nextSeat) {
    if (nextSeat && nextSeat.seat !== String.fromCharCode(seat.seat.charCodeAt(0) + 1)) {
      return true;
    }
    return false;
  }

  render() {
    const { seats, aisles } = this.state;
    const { selectSeat, selectedSeat } = this.props;
    const sortSeats = (a, b) => a.seat > b.seat;

    return (
      <div className="cabin">
        <table className="cabin-table">
          <thead>
            <tr>
              <th className="table-header" />
              {aisles.map(aisle => (
                <th className="table-header" key={aisle}>{aisle}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seats.map(row => (
              <tr className="row" key={row[0].row}>
                <th className="table-header">{row[0].row}</th>
                {row.sort(sortSeats).map((seat, i, row) => (
                  <Seat
                    key={seat.seat}
                    data={seat}
                    selectSeat={selectSeat}
                    selectedSeat={selectedSeat}
                    aisleSeat={this.aisleSeat(seat, row[i + 1])}
                  />
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cabin;