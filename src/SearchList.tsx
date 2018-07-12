
import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import Product from "./Product";


interface Props {
  data_url: string;
}

interface State {
  data: Array<any>;
  loaded_url?: string;
}

// Top level app component
export default class SearchList extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }


  // public shouldComponentUpdate(nextProps, nextState) {
  //   return (nextProps.data_url !== this.props.data_url);
  // }


  private load() {
    console.log(`SearchList.load: ${this.props.data_url}`);
    fetch(this.props.data_url, {
      method: "GET",
      headers: {
        "X-API-KEY": "46c0a1e171c76bb37784d60aad4df750",
      },
    }).then((response) => {
      return response.json();
    }).then((data: Array<any>) => {
      this.setState({
        data,
        loaded_url: this.props.data_url,
      })
    });
  }


  public render() {
    if (this.state.loaded_url !== this.props.data_url) {
      this.load();
    }
    if (!this.state.data) {
      return <div>Loading data...</div>;
    }
    return (
      <div>
        <GridList>
          {this.state.data.map((item) => {
            return <Product key={item.product_id} data={item} />;
          })}
        </GridList>
      </div>
    );
  }


}
