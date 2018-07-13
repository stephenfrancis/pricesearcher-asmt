
import * as React from 'react';
import SearchHeader from "./SearchHeader";
import SearchLoad from "./SearchLoad";
import SearchFooter from "./SearchFooter";

const data_url = "https://pricesearcher-frontend-test.herokuapp.com/products?";
const page_limit = 3;

interface Props {}

interface State {
  full_text_search?: string;
  page: number;
}

// Top level app component
export default class Search extends React.Component<Props, State> {
  private max_page: number;

  constructor(props) {
    super(props);
    this.state = {
      full_text_search: null,
      page: 1,
    };
    this.max_page = 2;
    this.getPage = this.getPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setDataSize = this.setDataSize.bind(this);
    this.setFullTextSearch = this.setFullTextSearch.bind(this);
  }


  public getPage() {
    return this.state.page;
  }


  private getURL() {
    let url: string = data_url + `_page=${this.state.page}&_limit=${page_limit}`;
    if (this.state.full_text_search) {
      url += `&q=${this.state.full_text_search}`;
    }
    return url;
  }


  public nextPage() {
    if (this.state.page >= this.max_page) {
      console.log(`attempting nextPage() when page is ${this.state.page} and max page is ${this.max_page}`);
      return;
    }
    this.setState({
      page: this.state.page + 1,
    });
  }


  public prevPage() {
    if (this.state.page <= 1) {
      console.log(`attempting prevPage() when page is ${this.state.page}`);
      return;
    }
    this.setState({
      page: this.state.page - 1,
    });
  }

  public render() {
    const data_url = this.getURL();
    return (
      <div>
        <SearchHeader setFullTextSearch={this.setFullTextSearch} />
        <SearchLoad data_url={data_url} setDataSize={this.setDataSize} />
        <SearchFooter getPage={this.getPage} nextPage={this.nextPage} prevPage={this.prevPage} />
      </div>
    );
  }


  public setDataSize(data_size: number) {
    this.max_page = Math.ceil(data_size / page_limit);
    if (this.state.page > this.max_page) {
      this.setState({
        page: this.max_page,
      });
    }
  }


  public setFullTextSearch(full_text_search: string) {
    this.setState({
      full_text_search,
      page: 1, // always reset pagination!
    });
  }

}