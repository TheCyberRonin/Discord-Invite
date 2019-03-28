import React from 'react';
import ReactDOM from 'react-dom';
import Invite from './components/Invite';

module.exports = {
  invite: {
    render: (config) => {
      if(!config.lang) {
        config.lang = 'en';
      }
      return ReactDOM.render(<Invite code={config.code} lang={config.lang}/>, document.getElementById(config.id));
    }
  }
}