import React from "react";



const Card= () =>{
    return (<div className="card mt-4 mb-4" style={{ width: '18rem'}}>
    <img src="https://cdn.pixabay.com/photo/2017/03/26/05/31/landscape-2174876_960_720.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
}
export default Card;