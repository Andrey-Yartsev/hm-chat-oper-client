import React from 'react';
import getLines from '../../actions/lines/get';
import pickLine from '../../actions/lines/pick';
import dropLine from '../../actions/lines/drop';

export default LinesView =>
  class extends React.Component {
    state = {
      newLines: [],
      lines: []
    };

    getLines() {
      getLines((newLines) => {
        this.setState({newLines});
      }, (error) => {
        alert(error);
      })(this.context.store.getState(), true);
      // ...
      getLines((lines) => {
        this.setState({lines});
      }, (error) => {
        alert(error);
      })(this.context.store.getState());
    }

    componentDidMount() {
      this.getLines();
    }

    render() {
      return <div>
        <div className="col">
          <h2>Схваченые линии</h2>
          <LinesView
            isNew={false}
            lines={this.state.lines}
            state={this.state}
            drop={this.drop.bind(this)}
          />
        </div>
        <div className="col">
          <h2>Не схваченые линии</h2>
          <LinesView
            isNew={true}
            lines={this.state.newLines}
            state={this.state}
            pick={this.pick.bind(this)}
          />
        </div>
      </div>
    }

    pick(id) {
      pickLine(() => {
        this.getLines();
      }, (error) => {
        alert(error);
      })(this.context.store.getState(), id);
    }

    drop(id) {
      dropLine(() => {
        this.getLines();
      }, (error) => {
        alert(error);
      })(this.context.store.getState(), id);
    }

  }