import React from "react";

const Card = (props) => {
  return (
    <div className="col-md-10 m-4 p-2">
    <div className="card border border-dark border-1 ">

    <a rel="noreferrer" target="_blank">
        <img src={props.Image ? props.Image : "https://source.unsplash.com/random"} className="card-img-top" alt={props.title} width={250} height={150} />
      </a>
     <div className="Card-body">
      <h5 className="mt-2 text-lg fw-bold fs-5">{props.title} </h5>
      
     <span class="badge bg-danger text-white text-dark-150 text-end">{props.source}</span>
      <p className="card-text fs-8">{props.description ? props.description.slice(0, 145) + "..." : ""}</p>    
      <p className="card-text text-end fw-bold text-danger"> ~ {props.author ? props.author : "Anonymous"}</p>
      <p className="card-text text-end fw-bold text-dark"> {props.publishedAt ? Date(props.publishedAt).slice(0, 10) + "," + Date(props.publishedAt).slice(11, 16) : "NULL"}</p>
      
      <div className="flex justify-between">
        
        <button className="btn btn-dark rounded me-5">
          <a rel="noreferrer" href={props.url} target="_blank" className="btn btn-dark">Read more</a>
        </button>
        
        <button className=" btn btn-dark rounded"
          onClick={props.onClick}
        >
          {props.buttonName}
        </button>
      </div>
      </div>
    </div>
    </div>

  );
};

export default Card;