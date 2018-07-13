
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
        {this.renderPrevButton(page === 1)}
        {this.renderNextButton()}
      </div>
    );
  }


  private renderNextButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={this.props.nextPage}
        style={{ margin: 5, }}
      >
        Next
      </Button>
    );
  }


  private renderPrevButton(disabled) {
    return (
      <Button
        variant="contained"
        color="primary"
        disabled={disabled}
        onClick={this.props.prevPage}
        style={{ margin: 5, }}
      >
        Previous
      </Button>
    );
  }

}
