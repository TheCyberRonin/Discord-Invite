import React from 'react';
import ReactDOM from 'react-dom';
import Invite from './components/Invite';

module.exports = {
  invite: {
    render: (config) => {
      return ReactDOM.render(<Invite code={config.code}/>, document.getElementById(config.id));
    }
  }
}