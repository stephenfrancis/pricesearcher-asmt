
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Search from "./Search";


interface Props {}

interface State {}

// Top level app component
class App extends React.Component<Props, State> {

  constructor(props) {
    super(props);
  }


  public render() {
    return (
      <Search />
    );
  }

}

ReactDOM.render(<App />, document.querySelector('#app-dynamic'));
