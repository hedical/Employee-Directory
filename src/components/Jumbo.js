import React from 'react'

const Jumbo = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h5 className="display-6">Search for an employee</h5>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbo
