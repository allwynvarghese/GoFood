import React from 'react';

export default function Card() {
  return (
    <div className="card mt-3" style={{"width": "18rem", "maxHeight" : "360px"}}>
                <img className="card-img-top" src="/pp.jpg" alt="Body card"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="half">Full</option>
                            </select>
                            <div className='d-inline h-180 fs-5'>Total price: </div>
                        </div>
                    </div>
            </div>
  )
}
