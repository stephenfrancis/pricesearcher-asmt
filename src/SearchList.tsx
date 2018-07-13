
import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import Product from "./Product";


interface Props {
  data: Array<any>;
}

interface State {
}

// Top level app component
export default class SearchList extends React.Component<Props, State> {

  public render() {
    return (
      <div>
        <GridList cellHeight={180}>
          {this.props.data.map((item) => {
            return <Product key={item.product_id} data={item} />;
          })}
        </GridList>
      </div>
    );
  }

}
