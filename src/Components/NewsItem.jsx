import React, { Component } from "react";

export class NewsItem extends Component {
 
  
  render() {
    let {title, description , imgUrl , newsUrl , date , author , source} = this.props;
    return (
      <>
      <div className="my-3 ">
   
      <div className="card m-auto" style={{width: '18rem' ,  height: '68vh'}}>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left: '80%' , zIndex: '1'}}>
    {source?source : "Source Unknown"}
  </span>
          <img style={{height: '30vh'}} src={imgUrl?imgUrl: "https://images.wsj.net/im-785590/social" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <p className="card-text mb-5"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary mb-2" style={{position: 'absolute' , bottom: '10px'}}>
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
