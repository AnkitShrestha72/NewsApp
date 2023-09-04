import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    pageSize: 6,
    category: 'business'
  }

  static propTypes = {
    category: PropTypes.string,
    pageSize : PropTypes.number,
    
  }

 

  constructor(props) {
    super(props);
    console.log("Hello from class based state");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${(this.props.category.charAt(0)).toUpperCase()}${(this.props.category.slice(1))} - Hot News`
  }

  async updateNews () {
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${this.state.page}&pageSize=${this.props.pageSize}&language=en`;
  let data = await fetch(url);
  this.setState({loading: true});
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles ,
    totalResults: parsedData.totalResults ,
    loading: false});

  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=1&pageSize=${this.props.pageSize}&language=en`;
    // let data = await fetch(url);
    // this.setState({loading: true});
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles ,
    //   totalResults: parsedData.totalResults ,
    //   loading: false});
    this.updateNews();
  }

  handlePrevClick = async () => {
   
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}&language=en`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}&language=en`;
    //   this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
  
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }

    this.setState({page: this.state.page + 1});
    this.updateNews();

  };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${this.state.page}&pageSize=${this.props.pageSize}&language=en`;
  let data = await fetch(url);
  this.setState({loading: true});
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: this.state.articles.concat(parsedData.articles) ,
    totalResults: parsedData.totalResults ,
    loading: false});

  }


  render() {
    console.log("render");
    return (
      <>
        <h2 className="text-center my-3">NewsMonkey - Top {(this.props.category.charAt(0)).toUpperCase()}{(this.props.category.slice(1))} Headlines</h2>
       
        <div className="container" >
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row" style={{width: '100%'}}>
            {/* {!this.state.loading && this.state.articles.map((element) => {  */}
           
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 89)
                        : " "
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author? element.author : "Unknown"}
                    date={element.publishedAt? element.publishedAt : "Unknown Date"}
                    source= {element.source.name}
                  />
                </div>
              );
            })}
            </div>
                </InfiniteScroll>
          </div>
         
          

          {this.state.loading && <Spinner/>}

          {/* <div className="container d-flex justify-content-around my-4">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Prev
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}

      

      </>
    );
  }
}

export default News;
