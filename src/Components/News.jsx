import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello from class based state");
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=1&pageSize=12&language=en";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults});
  }

  handlePrevClick = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
      this.state.page - 1
    }&pageSize=12&language=en`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/12)){

    }else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49ac0a3340bb4cb8a9f5436521708cec&page=${
      this.state.page + 1
    }&pageSize=12&language=en`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });}
  };

  render() {
    console.log("render");
    return (
      <>
        <h2 className="text-center my-3">NewsMonkey - Top Headlines</h2>
        <div className="container">
          <div className="row">
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
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-around my-4">
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
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
