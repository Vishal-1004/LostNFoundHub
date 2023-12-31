// Card.js
import React from 'react';


function truncateDescription(description, wordLimit) {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  }

function Card(props) {
  // Generate a unique ID based on the index of the card
  const modalId = `exampleModalCenter${props.index}`;
   const truncatedDesc= truncateDescription(props.description, 15);

 


  return (
    <div className="col-12 col-md-6 col-lg-4 container row g-3 text-center mx-auto ps-5">
      <div className="card align-items-center" style={{ width: "320px", padding: "0px" }}>
        <img src={props.img} alt="Logo" className='card-img-top' style={{ width: "250px", height: "250px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className='card-title'>{props.title}</h5>
          <p className="card-text" style={{ fontSize: "15px" }}>
            {truncatedDesc}
          </p>
          <button
            type='button'
            className='btn btn-dark text-center w-50 ms-4'
            data-bs-toggle='modal'
            data-bs-target={`#${modalId}`}
          >
            View Details{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={`${modalId}Title`}>
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}Title`}>{props.title}</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                  <img src={props.img} alt="Earbuds" className="img-fluid" style={{ width: "200px" }} />
                </div>
                <div className="col-6">
                  <h5>Description</h5>
                  <p className='text-muted'>
                    {props.description}
                  </p>
                  <h6 className='text-dark '>Posted By: <span className="ps-2">{props.name}</span></h6>
                  <h6 className='text-dark '>Date Lost: <span className="ps-2">{props.date}</span></h6>
                  <h6 className='text-dark '>Email ID: <span className='ps-3'>{props.email}</span></h6>
                  <h6 className='text-dark '>Register: <span className='ps-3'>{props.register}</span></h6>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button className="btn btn-primary" type='button' data-bs-toggle="tooltip" title='Notify the author' data-bs-placement='bottom' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg> Notify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
