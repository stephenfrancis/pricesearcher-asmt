
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
    const page: number = this.props.getPage();
    return (
      <div>
        <p>Page: {page}</p>
        {page > 1 && this.renderPrevButton()}
        {this.renderNextButton()}
      </div>
    );
  }


  private renderNextButton() {
    return (
      <Button variant="contained" color="primary" onClick={this.props.nextPage}>
        Next Page
      </Button>
    );
  }


  private renderPrevButton() {
    return (
      <Button variant="contained" color="primary" onClick={this.props.prevPage}>
        Previous Page
      </Button>
    );
  }

}
