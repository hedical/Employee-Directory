import React from 'react'

const Jumbo = (props) => {



    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h5 className="display-6">Search for an employee</h5>
            </div>
            <form>
                <div className="input-group mb-3">
                    <input
                        onChange={props.employeeSearch}
                        type="text"
                        className="form-control m-2"
                        placeholder="Employee's Name" />
                </div>
            </form>

        </div>
    )
}

export default Jumbo
