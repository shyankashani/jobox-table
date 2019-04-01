import React from "react";
import { render } from "react-dom";
import update from "immutability-helper";

import JoboxTable from "../../src";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows
    };
  }

  updateRow(key, values) {
    this.setState(prevState =>
      update(prevState, {
        rows: { $splice: [[key, 1, values]] }
      })
    );
  }

  addRow(values) {
    this.setState(prevState =>
      update(prevState, {
        rows: { $push: [values] }
      })
    );
  }

  render() {
    return (
      <div className="p-5">
        <h1 className="pb-5">jobox-table</h1>

        <JoboxTable
          rows={this.state.rows}
          onUpdateRow={this.updateRow.bind(this)}
          onAddRow={this.addRow.bind(this)}
          requiredFields={["numberOfSightings"]}
        />
      </div>
    );
  }
}

const rows = [
  {
    animalName: "Coatimundi",
    numberOfSightings: 26,
    originCountry: "Tonga"
  },
  {
    animalName: "Deer",
    numberOfSightings: 48,
    originCountry: "Burundi"
  },
  { animalName: "Frog",
    numberOfSightings: 47,
    originCountry: "China"
  },
  { animalName: "Groudhog",
    numberOfSightings: 47,
    originCountry: "Denmark"
  },
  { animalName: "Rabbit",
    numberOfSightings: 18,
    originCountry: "Sweden"
  }
];


// Uncomment below and comment above to see table adjust
// const rows = [
//   {
//     plantName: "Acadia",
//     isEndangered: false
//   },
//   {
//     plantName: "Berry",
//     isEndangered: false
//   },
//   {
//     plantName: "Pea",
//     isEndangered: false
//   },
//   {
//     plantName: "Garcinia",
//     isEndangered: false
//   },
//   {
//     plantName: "Grain",
//     isEndangered: false
//   }
// ];



render(<Demo />, document.querySelector("#demo"));
