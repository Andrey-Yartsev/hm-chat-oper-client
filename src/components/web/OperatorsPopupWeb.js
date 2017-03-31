import React from 'react';

import '../../static/css/popup.css';

class OperatorsPopupWeb extends React.Component {

  invite(id) {
    this.props.invite(id);
  }

  render() {
    const rows = [];
    for (let operator of this.props.operators) {
      rows.push(
        <li key={operator._id}>
          <div className="name">{operator.profile.name}</div>
          <div className="buttons">
            <span href="#" className="button"
               onClick={this.invite.bind(this, operator._id)}
            >Пригласить</span>
          </div>
        </li>
      );
    }
    return <div id="operatorsPopup" className="overlay">
      <div className="popup">
        <h2>Выберите оператора</h2>
        <a className="close" href="#">&times;</a>
        <div className="wrapper">
          <div className="content list">
            <ul>
              {rows}
            </ul>
          </div>
        </div>
      </div>
    </div>
  }

}

export default OperatorsPopupWeb;