import React from 'react'

export default function Spinner() {
  return (
    <div>
        <div className="container text-center">
        <div className="spinner-grow text-primary mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark mx-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
    </div>
  )
}
