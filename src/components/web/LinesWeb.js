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
        isCurrent={this.props.currentLine === line._id}
        isNew={this.props.isNew}
        pick={this.pick.bind(this)}
        key={line._id}
        {...line}
      />);
    }
    return <div className="linesGroup">
      <h2>{this.props.title}</h2>
      <ul>{rows}</ul>
    </div>;
  }

}

export default LinesWeb;