import React from 'react'

const Jumbo = (props) => {



    return (
        <div className="jumbotron jumbotron-fluid m-0">
            <div className="container">
                <h5 className="text">Search for an employee</h5>
                <form>
                    <div className="input-group">
                        <input
                            onChange={props.employeeSearch}
                            type="text"
                            className="form-control"
                            placeholder="Employee's Name" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Jumbo
