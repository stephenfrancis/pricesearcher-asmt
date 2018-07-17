
import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Dialog,
  GridListTile, GridListTileBar, Typography } from '@material-ui/core';
// import { Area, } from 'react-simple-charts';

export interface Props {
  data: any;
}

export interface State {
  modal_open: boolean;
}

// Top level app component
export default class Product extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      modal_open: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


  private closeModal() {
    this.setState({
      modal_open: false,
    });
  }


  private openModal() {
    this.setState({
      modal_open: true,
    });
  }


  public render() {
    return (
      <div>
        <GridListTile
          onClick={this.openModal}
          style={{
            margin: 5,
          }}
        >
          <img
            src={this.props.data.image_url}
            alt={this.props.data.product_name}
            style={{
              maxWidth: 300,
              maxHeight: 300,
            }}
          />
          <GridListTileBar
            title={this.props.data.product_name}
            subtitle={<span>£ {this.props.data.price}</span>}
            // actionIcon={
            //   <IconButton className={classes.icon}>
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </GridListTile>
        <Dialog open={this.state.modal_open} onClose={this.closeModal}>
          <Card raised={true}>
            <CardHeader
              title={this.props.data.product_name}
              subheader={<span>£ {this.props.data.price}</span>} />
            {/* <Area data={this.props.data.price_history} /> */}
            <CardMedia image={this.props.data.image_url} style={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }} />
            <CardContent>
              <Typography>
                {this.props.data.description}
              </Typography>
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  }

}
