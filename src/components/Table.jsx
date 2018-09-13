import React, {Component} from 'react';

class Table extends Component {
  state = {};

  render() {
    return (
      <table>
        <tr>
          <td>First name</td>
          <td>Last name</td>
          <td>DD/MM/YYYY</td>
        </tr>
      </table>
    );
  }
}

export default Table;
