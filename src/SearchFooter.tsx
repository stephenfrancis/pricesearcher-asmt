
import * as React from 'react';
import Button from '@material-ui/core/Button';


interface Props {
  getPage: () => number;
  nextPage: () => void;
  prevPage: () => void;
}

interface State {}

// Top level app component
export default class SearchFooter extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {};
  }


  public render() {
    return (
      <div>
        <p>Page: {this.props.getPage()}</p>
        <Button variant="contained" color="primary" onClick={this.props.prevPage}>
          Previous Page
        </Button>
        <Button variant="contained" color="primary" onClick={this.props.nextPage}>
          Next Page
        </Button>
      </div>
    );
  }


}
