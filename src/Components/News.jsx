import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  // constructor(props) {
  //   super(props);
  //   console.log("Hello from class based state");
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0
  //   };
  //   document.title = `${(props.category.charAt(0)).toUpperCase()}${(props.category.slice(1))} - Hot News`
  // }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3c209b1ffdae4d6ca04a692bc32fce64&page=${page}&pageSize=${props.pageSize}&language=en`;
    let data = await fetch(url);
    props.setProgress(20);
    // this.setState({loading: true});
    setLoading(true);
    let parsedData = await data.json();
    // props.setProgress(70)
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    // in class Component
    // this.setState({ articles: parsedData.articles ,
    //   totalResults: parsedData.totalResults ,
    //   loading: false});
  };

  // async updateNews () {
  //   props.setProgress(10)
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${this.state.page}&pageSize=${props.pageSize}&language=en`;
  // let data = await fetch(url);
  // props.setProgress(10)
  // this.setState({loading: true});
  // let parsedData = await data.json();
  // // props.setProgress(70)
  // console.log(parsedData);
  // this.setState({ articles: parsedData.articles ,
  //   totalResults: parsedData.totalResults ,
  //   loading: false});
  //   props.setProgress(100)

  // }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  // const handlePrevClick = async () => {

  // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
  //   this.state.page - 1
  // }&pageSize=${props.pageSize}&language=en`;
  // this.setState({loading: true})
  // let data = await fetch(url);
  // let parsedData = await data.json();

  // this.setState({
  //   page: this.state.page - 1,
  //   articles: parsedData.articles,
  //   loading: false
  // });
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // };

  // const handleNextClick = async () => {
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${props.pageSize}&language=en`;
  //   //   this.setState({loading: true})
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   console.log(parsedData);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false
  //   //   });
  //   // }

  //   setPage(page+1)
  //   // this.setState({page: this.state.page + 1});
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // this.setState({page: page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=3c209b1ffdae4d6ca04a692bc32fce64&page=${page + 1}&pageSize=${
      props.pageSize
    }&language=en`;
    setPage(page + 1);
    let data = await fetch(url);
    setLoading(true);
    // this.setState({loading: true});
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h2
        className="text-center "
        style={{
          color: props.mode === "dark" ? "white" : "black",
          marginTop: "87px",
          marginBottom: "10px",
        }}
      >
        NewsMonkey - Top {props.category.charAt(0).toUpperCase()}
        {props.category.slice(1)} Headlines
      </h2>

      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row" style={{ width: "100%" }}>
            {/* {!this.state.loading && this.state.articles.map((element) => {  */}

            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 60) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : " "
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={
                      element.publishedAt ? element.publishedAt : "Unknown Date"
                    }
                    source={element.source.name}
                    mode={props.mode}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>

      {loading && <Spinner />}

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
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: 6,
  category: "business",
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
