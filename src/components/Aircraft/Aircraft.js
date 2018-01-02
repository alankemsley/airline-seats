import React, { Component } from 'react';
import './aircraft.css';
import Cabin from '../Cabin/Cabin';
import data from '../../data/seats.json';

// Aircraft component
class Aircraft extends Component {
  constructor(props) {
    super(props);
    this.selectSeat = this.selectSeat.bind(this);
    this.state = {
      selectedSeat: null,
      loading: true
    };
  }

  // Obtain and sort seating data from seats.json
  componentDidMount() {
      let seats = data;
      seats = seats.sort((a, b) => a.row - b.row);
      seats = this.cabinSort(seats);
      this.setState({ seats, loading: false });
  }

  // Sort seats by cabin class
  cabinSort(seats) {
    return seats.reduce((memo, x) => {
      const arr = memo;
      if (!arr[x.class]) {
        arr[x.class] = [];
      }
      arr[x.class].push(x);
      return arr;
    }, {});
  }

  selectSeat(seat) {
    if (!seat.occupied) {
      const selectedSeat = seat.row + seat.seat;
      if (selectedSeat === this.state.selectedSeat) {
        this.setState({ selectedSeat: null });
      } else {
        this.setState({ selectedSeat });
      }
    }
  }

  render() {
    const { seats, selectedSeat, loading } = this.state;

    if (loading) {
      return <div className="aircraft">
        <h1 className="App-title">Loading. Please wait...</h1>
      </div>;
    }

    return (
      <div className="aircraft">
        {/* First Class */}
        <Cabin
          seats={seats.First}
          selectSeat={this.selectSeat}
          selectedSeat={selectedSeat}
          classType="First"
        />
        {/* Business Class */}
        <Cabin
          seats={seats.Business}
          selectSeat={this.selectSeat}
          selectedSeat={selectedSeat}
          classType="Business"
        />
        {/* Economy Class */}
        <Cabin
          seats={seats.Economy}
          selectSeat={this.selectSeat}
          selectedSeat={selectedSeat}
          classType="Economy"
        />
      </div>
    );
  }
}

export default Aircraft;