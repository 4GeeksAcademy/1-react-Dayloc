import React from "react";



const Card= (props) =>{
    return (<div className="card mt-4 mb-4" style={{ width: '12rem'}}>
    <img src="https://cdn.pixabay.com/photo/2017/03/26/05/31/landscape-2174876_960_720.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">{props.apellido}</p>
      <a href="#" className="btn btn-primary">{props.cta}</a>
    </div>
  </div>)
}
export default Card;