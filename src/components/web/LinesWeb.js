import React from 'react';
import LineRow from './LineRowWeb';

class LinesWeb extends React.Component {

  pick(id) {
    this.props.pick(id);
  }

  drop(id) {
    this.props.drop(id);
  }

  invite(id) {
    this.props.invite(id);
  }

  onOperatorsPopupOpening(id) {
    this.props.onOperatorsPopupOpening(id);
  }

  render() {
    const rows = [];
    for (let line of this.props.lines) {
      rows.push(<LineRow
        isNew={this.props.isNew}
        pick={this.pick.bind(this)}
        drop={this.drop.bind(this)}
        onOperatorsPopupOpening={this.onOperatorsPopupOpening.bind(this)}
        key={line._id}
        {...line}
      />);
    }
    return <div className="col">
      <h2>{this.props.title}</h2>
      <ul>{rows}</ul>
    </div>;
  }

}

export default LinesWeb;