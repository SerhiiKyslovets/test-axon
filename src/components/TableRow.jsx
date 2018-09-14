import React, {Component} from 'react';

class TableRow extends Component {
  state = {};

  render() {
    return (
      <tr>
        <td>Serhii</td>
        <td>Kyslovets</td>
        <td>04/10/1993</td>
        <td>Kyiv</td>
        <td>
          <button type='button'>Edit</button>
          <button type='button'>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
