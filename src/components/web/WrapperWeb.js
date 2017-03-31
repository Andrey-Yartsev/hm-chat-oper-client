import React from 'react';
import '../../static/css/lines.css';

class WrapperWeb extends React.Component {

  render() {
    return <div className={this.props.className}>
      {this.props.children}
    </div>
  }

}

export default WrapperWeb;