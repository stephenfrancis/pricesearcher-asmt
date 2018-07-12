
import * as React from 'react';
import TextField from '@material-ui/core/TextField';


interface Props {
  setFullTextSearch: (full_text_search: string) => void;
}

interface State {
}

// Top level app component
export default class SearchHeader extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }


  private onChange(event) {
    this.props.setFullTextSearch(event.target.value || null);
  }


  public render() {
    return (
      <div>
        <TextField
          placeholder="Search for..."
          onChange={this.onChange}
          type="text"
        />
      </div>
    );
  }

}
