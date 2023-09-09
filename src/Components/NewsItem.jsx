import React from "react";

const NewsItem = (props) => {


 
    let { description , imgUrl , newsUrl , date , author , source , } = props;
    return (
      <>
      <div className="my-3 ">
   
      <div className="card m-auto" style={{width: '90%' ,  height: '69vh'}}>
    <div className="container" style={{display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '0',
    top: '10px'}}>
    <span className=" translate-middle badge rounded-pill bg-danger">
    {source?source : "Source Unknown"}
  </span>
    </div>
          <img style={{height: '30vh'}} src={imgUrl?imgUrl: "https://images.wsj.net/im-785590/social" } className="card-img-top" alt="..." />
          <div className="card-body" style={{backgroundColor: props.mode === "dark" ? "#212A3E" : "white",
              color: props.mode === "dark" ? "white" : "black",}}>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <p className="card-text mb-5"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary mb-2" style={{position: 'absolute' , bottom: '0px'}}>
              More Details
            </a>
          </div>
        </div>
      </div>
     
      </>
    );
  
}

export default NewsItem;
