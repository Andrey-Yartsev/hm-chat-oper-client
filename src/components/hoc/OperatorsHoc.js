import React from 'react';
import fetchOperators from '../../actions/operators';

export default OperatorsView =>
  class extends React.Component {

    state = {
      operators: []
    };

    fetchOperators() {
      fetchOperators((operators) => {
        this.setState({operators});
      }, (error) => {
        alert(error);
      })(this.context.store.getState());
    }

    componentDidMount() {
      this.fetchOperators();
    }

    render() {
      return <OperatorsView state={this.state} />
    }

  }