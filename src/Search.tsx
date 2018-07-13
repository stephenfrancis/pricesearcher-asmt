
import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';
import GridList from '@material-ui/core/GridList';
import SearchHeader from "./SearchHeader";
import Product from "./Product";

const data_url = "https://pricesearcher-frontend-test.herokuapp.com/products?";
const page_limit = 20;

interface Props {}

interface State {
  full_text_search?: string;
  pages_loaded: number;
}

// Top level app component
export default class Search extends React.Component<Props, State> {
  private data: Array<any>;
  private max_page: number;

  constructor(props) {
    super(props);
    this.state = {
      pages_loaded: 0,
      full_text_search: null,
    };
    this.data = [];
    this.max_page = 2;
    this.morePages = this.morePages.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setFullTextSearch = this.setFullTextSearch.bind(this);
  }


  private getURL(page: number) {
    let url: string = data_url + `_page=${page}&_limit=${page_limit}`;
    if (this.state.full_text_search) {
      url += `&q=${this.state.full_text_search}`;
    }
    return url;
  }


  private loadPage(page: number) {
    if (this.data[page]) {
      console.error(`already loading page ${page}`);
      return;
    }
    const data_url = this.getURL(page);
    console.log(`SearchLoad.load: ${data_url}`);
    this.data[page] = [];
    fetch(data_url, {
      method: "GET",
      headers: {
        "X-API-KEY": "46c0a1e171c76bb37784d60aad4df750",
      },
    }).then((response) => {
      const total_header: string = response.headers["X-Total-Count"];
      console.log(`SearchLoad.load: got response, total possible items: ${total_header}`);
      if (total_header !== undefined) {
        this.setDataSize(parseInt(total_header, 10));
      }
      return response.json();
    }).then((data: Array<any>) => {
      console.log(`SearchLoad.load: adding data to state`);
      if (data.length === 0) {
        this.max_page = this.data.length;
      } else {
        this.data[page] = data;
        this.setState({
          pages_loaded: this.data.length,
        });
      }
    });
  }


  public morePages() {
    return (this.data.length < this.max_page);
  }


  public nextPage() {
    // if (!this.morePages()) {
    //   console.log(`attempting nextPage() when page is ${this.state.data.length} and max page is ${this.max_page}`);
    //   return;
    // }
    this.loadPage(this.data.length + 1);
  }


  public render() {
    const content: Array<any> = [];
    this.data.forEach((page: Array<any>, index) => {
      page.forEach((item) => {
        content.push(<Product key={item.product_id} data={item} />);
      });
    });
    return (
      <div>
        <SearchHeader setFullTextSearch={this.setFullTextSearch} />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.nextPage}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          <GridList cellHeight={180}>
            {content}
          </GridList>
        </InfiniteScroll>
      </div>
    );
  }


  public setDataSize(data_size: number) {
    this.max_page = Math.ceil(data_size / page_limit);
  }


  public setFullTextSearch(full_text_search: string) {
    this.data = [];
    this.max_page = 2;
    this.setState({
      pages_loaded: 0,
      full_text_search,
    });
    // this.loadPage(1);
  }

}
