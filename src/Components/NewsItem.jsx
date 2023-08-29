import React, { Component } from "react";

export class NewsItem extends Component {
 
  
  render() {
    let {title, description , imgUrl , newsUrl} = this.props;
    return (
      <>
      <div className="my-3 ">
      <div className="card m-auto" style={{width: '18rem' ,  height: '60vh'}}>
          <img style={{height: '30vh'}} src={imgUrl?imgUrl: "https://images.wsj.net/im-785590/social" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text mb-5">
             {description}...
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary" style={{position: 'absolute' , bottom: '10px'}}>
              More Details
            </a>
          </div>
        </div>
      </div>
     
      </>
    );
  }
}

export default NewsItem;
