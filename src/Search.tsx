
import * as React from 'react';
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";
import SearchFooter from "./SearchFooter";

const data_url = "https://pricesearcher-frontend-test.herokuapp.com/products?";
const page_limit = 20;

interface Props {}

interface State {
  full_text_search?: string;
  page: number;
}

// Top level app component
export default class Search extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      full_text_search: null,
      page: 0,
    };
    this.getPage = this.getPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setFullTextSearch = this.setFullTextSearch.bind(this);
  }


  public getPage() {
    return this.state.page;
  }


  private getURL() {
    let url: string = data_url + `_page=${this.state.page}&limit=${page_limit}`;
    if (this.state.full_text_search) {
      url += `&q=${this.state.full_text_search}`;
    }
    return url;
  }


  public nextPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }


  public prevPage() {
    this.setState({
      page: this.state.page - 1,
    });
  }

  public render() {
    const data_url = this.getURL();
    return (
      <div>
        <SearchHeader setFullTextSearch={this.setFullTextSearch} />
        <SearchList data_url={data_url} />
        <SearchFooter getPage={this.getPage} nextPage={this.nextPage} prevPage={this.prevPage} />
      </div>
    );
  }


  public setFullTextSearch(full_text_search: string) {
    this.setState({
      full_text_search,
    });
  }

}