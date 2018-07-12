
import * as React from 'react';
import Button from '@material-ui/core/Button';


interface Props {
  data: any;
}

interface State {}

// Top level app component
export default class Product extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {};
  }


  public render() {
    return (
      <div>
        <p>Id: {this.props.data.product_id}</p>
        <p>Name: {this.props.data.product_name}</p>
        <p>Description: {this.props.data.description}</p>
      </div>
    );
  }

}
