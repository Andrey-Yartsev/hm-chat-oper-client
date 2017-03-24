import React from 'react';
import LineRow from './LineRowWeb';

class LinesWeb extends React.Component {

  pick(id) {
    this.props.pick(id);
  }

  drop(id) {
    this.props.drop(id);
  }

  render() {
    const rows = [];
    for (let line of this.props.lines) {
      rows.push(<LineRow
        isNew={this.props.isNew}
        pick={this.pick.bind(this)}
        drop={this.drop.bind(this)}
        key={line._id}
        {...line}
      />);
    }
    return <ul>{rows}</ul>;
  }

}

export default LinesWeb;