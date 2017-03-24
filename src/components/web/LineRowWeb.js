import React from 'react';

class LineRowWeb extends React.Component {

  pick(id, proxy, event) {
    event.stopPropagation();
    this.props.pick(id);
  }

  drop(id, proxy, event) {
    event.stopPropagation();
    this.props.drop(id);
  }

  render() {
    return <li>
      ID: {this.props._id}
      {
        this.props.isNew ?
          <p><a href="#" onClick={this.pick.bind(this, this.props._id)}>Взять</a></p> :
          <p><a href="#" onClick={this.drop.bind(this, this.props._id)}>Отдать</a></p>
      }
      {this.props.description ? <p><i>{this.props.description}</i></p> : ''}
    </li>
  }
}

export default LineRowWeb;