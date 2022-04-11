import React from 'react'

export default function Newsitem(props) {
  return (
    <div>
        <div className="container">
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%"}}>
    {props.source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <img src={!props.imageurl?"https://st.depositphotos.com/1011646/1255/i/950/depositphotos_12553000-stock-photo-breaking-news-screen.jpg":props.imageurl} style={{height:'180px'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.description}...</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>
        </div>
    </div>
  )
}
