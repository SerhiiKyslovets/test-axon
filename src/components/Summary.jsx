import React, {Component} from 'react';
import moment from 'moment';

class Summary extends Component {
  constructor(props) {
      super(props);

      this.state = {
        sumOfAges: Number,
        LongestString: String
      }

      this.getAmount = this.getAmount.bind(this);
      this.getSum = this.getSum.bind(this);
      this.getLongest = this.getLongest.bind(this);
  }

  getAmount() {
    const allUsers = this.props.users;
    const fromKyiv = allUsers.filter((user) => {
      return ((user.location === 'Kiev') || (user.location === 'kiev'));
    });

    return fromKyiv.length;
  }

  getSum() {
    const allUsers = this.props.users;
    const ages = [];

    allUsers.forEach((user) => {
        let age = moment().diff(user.dob, 'year');
        ages.push(age);
    });

    ages.sort(function(a,b) {
        if (a < b) { return 1; }
        else if (a === b) { return 0; }
        else { return -1; }
    });

    return ages[0] + ages[1] + ages[2];
  }

  getLongest() {
    const allUsers = this.props.users;
    const fullNames = [];
    var maxI = 0;
    var maxLength = 0;

    allUsers.forEach((user, i) => {
      let fullNameLength = (user.first_name + user.last_name).length;
      fullNames.push({fullNameLength, i});
    });

    fullNames.forEach((item, i) => {
      if (item.fullNameLength >= maxLength) {
        maxLength = item.fullNameLength;
        maxI = i;
      }
    })

    console.log(allUsers[maxI]);
  }

  render() {
    return (
      <dl>
        <dt>Count of users from Kiev or kiev</dt>
          <dd>{this.getAmount()}</dd>
        <dt>Sum of ages of three oldest users from table</dt>
          <dd>{this.getSum()}</dd>
        <dt>Longest string of first name + last name pair</dt>
          <dd>{this.getLongest()}</dd>
      </dl>
    );
  }
}

export default Summary;
