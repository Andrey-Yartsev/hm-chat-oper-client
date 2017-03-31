import React from 'react';
import initLines from '../../actions/lines/init';
import pickLine from '../../actions/lines/pick';
import dropLine from '../../actions/lines/drop';
import invite from '../../actions/lines/invite';
import fetchOperators from '../../actions/operators';

export default (LinesView, OperatorsPopupView, WrapperView) =>
  class extends React.Component {

    state = {
      operators: [],
    };

    componentWillMount() {
      this.initLines();
      this.fetchOperators();
    }

    initLines() {
      initLines(
        this.context.store.getState().auth.token,
        this.context.store.dispatch
      );
    }

    renderOperatorsPopup() {
      if (!this.state.lineId) return '';
      return <OperatorsPopupView
        operators={this.state.operators}
        invite={this.invite.bind(this)}
      />
    }

    render() {
      return <WrapperView className="cols lines list">
        {this.renderOperatorsPopup()}
        <LinesView
          title="Схваченые линии"
          isNew={false}
          lines={this.props.lines.lines}
          state={this.state}
          drop={this.drop.bind(this)}
          onOperatorsPopupOpening={this.onOperatorsPopupOpening.bind(this)}
        />
        <LinesView
          title="Не схваченые линии"
          isNew={true}
          lines={this.props.lines.newLines}
          state={this.state}
          pick={this.pick.bind(this)}
        />
      </WrapperView>;
    }

    pick(id) {
      pickLine(() => {
        this.initLines();
      })(this.context.store.getState(), id);
    }

    drop(id) {
      dropLine(() => {
        this.initLines();
      }, (error) => {
        alert(error);
      })(this.context.store.getState(), id);
    }

    fetchOperators() {
      fetchOperators((operators) => {
        this.setState({operators});
      }, (error) => {
        alert(error);
      })(this.context.store.getState());
    }

    invite(id) {
      invite(
        this.context.store.getState(),
        this.context.store.dispatch,
        this.state.lineId,
        id
      );
    }

    onOperatorsPopupOpening(lineId) {
      this.setState({
        lineId: lineId
      });
    }

  }