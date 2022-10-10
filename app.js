'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Click'
    );
  }
}

const appContainer = document.querySelector('#app_container');
ReactDOM.createRoot(appContainer).render(e(App));