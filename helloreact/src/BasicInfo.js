import React, { Component } from 'react';
class BasicInfo extends Component {
  render() {
    return (
      <div>
        <ul>
      {this.props.person.map(info => (
        <li>Name: {info.Name} DOB: {info.DOB} Number: {info.Number}</li>
      ))}
    </ul>
  </div>
    )
  }
  }
export default BasicInfo;