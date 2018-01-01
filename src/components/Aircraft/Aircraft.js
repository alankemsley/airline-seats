import react, { Component } from 'react';
import './aircraft.css';
// import Cabin from '../Cabin/Cabin';
import data from '../../data/seats.json';

class Aircraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircraft: {},
      selected: false,
    };
  }

  componentWillMount() {
    this.sortByRow(data);
  }

  
	sortByRow = (data) => {
		let aircraft = {};
		data.map(function(seat) {
			if(aircraft[seat.row]) {
				aircraft[seat.row].push(seat)
			} else {
				aircraft[seat.row] = [seat];
			}
		})
		this.sortBySeat (aircraft);
  }
  
  sortBySeat = (aircraft) =>{
		for (var row in aircraft) {
			aircraft[row].sort(function(a, b) {
				if (a.seat < b.seat) {
					return -1;
				} else if (a.seat > b.seat) {
					return 1;
				} else {
					return 0;
				}
			})
		
			this.locateAisle(aircraft[row]);
		}
		this.setState({aircraft: aircraft});
	}

  locateAisle = (row) => {
		for (let i = row.length - 1; i > 1 ; i--) {
			if ((row[i].seat.charCodeAt() - row[i - 1].seat.charCodeAt()) > 1) {
				row.splice (i, 0, {name: "Aisle", seat: row[i].seat.row});
			}
		}
	}

	renderRows = (row) => {
		return (<Row selectedSeat={this.state.selected} selectSeat={this.selectSeat} row={row} rowNumber={row[0].row} rowCabin={row[0].cabin}></Row>)
	}

	selectSeat = (seat) => {
		if (!seat.occupied) {
			this.setState({selected: seat});
		}
	}


}

export default Aircraft;