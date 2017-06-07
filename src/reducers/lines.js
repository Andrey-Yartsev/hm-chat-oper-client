const getLine = (lines, id) => {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i]._id === id) return lines[i];
  }
  return false;
};



export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'INIT_LINES':
      return Object.assign({}, state, {
        lines: [],
        newLines: []
      });
    case 'SET_LINES':
      return Object.assign({}, state, {
        lines: action.lines
      });
    case 'SET_NEW_LINES':
      return Object.assign({}, state, {
        newLines: action.lines
      });
    // case 'ADD_LINE_NEW_MESSAGES_COUNT':
    //   newState = Object.assign({}, state);
    //   //let line = getLine(newState.lines, action.lineId);
    //   let line = getLine(newState.newLines.concat(newState.lines), action.lineId);
    //   if (!line) throw new Error('line not found');
    //   if (!line['count']) {
    //     line.count = 1;
    //   } else {
    //     line.count++;
    //   }
    //   return newState;
    default:
      return state;
  }
};