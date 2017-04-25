import React from 'react';

import '../../static/css/popup.css';
import '../../static/css/invites.css';

class OperatorsPopupWeb extends React.Component {

  pick(id) {
    this.props.pick(id);
    window.location = '#';
  }

  render() {
    const rows = [];
    for (let invite of this.props.invites) {
      rows.push(<li key={invite._id}>
        <span className="button"
           onClick={this.pick.bind(this, invite._id)}
        >Взять {invite.description}</span>
      </li>);
    }
    return <div id="invitesPopup" className="overlay">
      <div className="popup">
        <h2>Войти в чат</h2>
        <a className="close" href="#">&times;</a>
        <div className="wrapper">
          <div className="content list">
            <ul>{rows}</ul>
          </div>
        </div>
      </div>
    </div>
  }

}

export default OperatorsPopupWeb;