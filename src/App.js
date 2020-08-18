import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Jumbo from './components/Jumbo'
import TableBody from './components/TableBody';
import axios from 'axios'
import FilterButtons from './components/FilterButtons';


// Local Array for testing and debug
// const employeeTestArray = [{ name: "Stephan Cury", age: 28, role: "Manager" }, { name: "Cara Colo", age: 28, email: "Manager" }, { name: "Stephanie Monaco", age: 28, role: "Community Manager" }, { name: "Eric Mozzolato", age: 20, role: "Engineer" }]

function App() {

  // Setting the empty array of employees
  let initialEmployeeArray = [];

  useEffect(() => {
    getEmployees();
  }, [])

  // Function to fill up the initialEmployeeArray with API request

  const getEmployees = () => {

    axios.get("https://randomuser.me/api/?results=10&nat=us")
      .then((res) => {
        let randomUser = res.data.results
        randomUser.forEach((user) => {

          initialEmployeeArray.push({
            name: user.name.first + " " + user.name.last,
            age: user.dob.age,
            email: user.email,
            picture: user.picture.thumbnail
          })
        })
        setEmployee([...initialEmployeeArray])
      })
      .catch((err) => console.log(err))
  }

  // Definition of state for Employees
  const [employee, setEmployee] = useState(initialEmployeeArray)

  // Definition of state for Input search
  const [search, setSearch] = useState({
    name: "",
  });

  // Function to update input state (based on user input)
  const employeeSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };


  // Rule to filter and update employee list
  // eslint-disable-next-line
  const matchingEmployees = employee.filter(function (emp) {
    if (search.name.length < 0) {
      return employee
    } else if (emp.name.includes(search.name)) {
      return emp
    }
  });



  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
      <Jumbo employeeSearch={employeeSearch} />
      <div className="jumbotron jumbotron-fluid m-0">
        <div className="container">
          <h5 className="text">Preset filters</h5>

          <FilterButtons text="Age Down" click={() => {
            employee.sort((a, b) => (a.age > b.age) ? 1 : -1)
            setEmployee([...employee])
          }} />
          <FilterButtons text="Age Up" click={() => {
            employee.sort((a, b) => (b.age > a.age) ? 1 : -1)
            setEmployee([...employee])
          }} />
          <FilterButtons text="New employees" click={() => {
            getEmployees()
            setEmployee([...initialEmployeeArray])
          }} />
        </div>
      </div>

      <table className="table mx-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody >

          {matchingEmployees.map((employee, id) => (
            <TableBody key={id}>
              {employee}
            </TableBody>
          ))}

        </tbody>
      </table>
    </div>
  );
}


export default App;