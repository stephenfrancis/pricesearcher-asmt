
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
        <Card>
          <CardMedia
            image={this.props.data.image_url}
            title={this.props.data.product_name}
            style={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.data.product_name}
            </Typography>
            <Typography component="p">
              {this.props.data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

}
