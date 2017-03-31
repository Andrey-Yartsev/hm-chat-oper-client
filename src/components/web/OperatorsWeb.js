import React from 'react';

class OperatorsWeb extends React.Component {

  render() {
    const rows = [];
    for (let operator of this.props.state.operators) {
      rows.push(<li key={operator._id}>
        {operator.profile.name}
        <a href="#" className="button">Пригласить</a>
      </li>);
    }
    return <div>
      <h1>Операторы</h1>
      <ul>{rows}</ul>
    </div>
  }

}

export default OperatorsWeb;