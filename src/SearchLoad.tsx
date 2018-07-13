
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchList from "./SearchList";


interface Props {
  data_url: string;
  setDataSize: (data_size: number) => void;
}

interface State {
  data: Array<any>;
  loaded_url?: string;
}

// Top level app component
export default class SearchLoad extends React.Component<Props, State> {

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
    console.log(`SearchLoad.load: ${this.props.data_url}`);
    fetch(this.props.data_url, {
      method: "GET",
      headers: {
        "X-API-KEY": "46c0a1e171c76bb37784d60aad4df750",
      },
    }).then((response) => {
      const total: number = parseInt(response.headers["X-Total-Count"], 10);
      console.log(`SearchLoad.load: got response, total possible items: ${total}`);
      this.props.setDataSize(total);
      return response.json();
    }).then((data: Array<any>) => {
      console.log(`SearchLoad.load: settting state ${this.props.data_url}`);
      this.setState({
        data,
        loaded_url: this.props.data_url,
      })
    });
  }


  public render() {
    const need_to_load = (this.state.loaded_url !== this.props.data_url);
    if (need_to_load) {
      this.load();
    }
    return (
      <div style={{ position: "relative", }}>
        {this.state.data && (<SearchList data={this.state.data} />)}
        {need_to_load && (<CircularProgress style={{ position: "absolute", }} />)}
      </div>
    );
  }


}
