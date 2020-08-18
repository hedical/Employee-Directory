import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Jumbo from './components/Jumbo'
import TableBody from './components/TableBody';

import axios from 'axios'


let emp3 = [];

const employeeArray2 = () => {
  axios.get(
    "https://randomuser.me/api/?results=10&nat=us"
  ).then((res) => {
    let randomUser = res.data.results
    randomUser.forEach((user) => {
      emp3.push({
        name: user.name.first + " " + user.name.last,
        age: user.dob.age,
        email: user.email,
        picture: user.picture.thumbnail
      })
    })
    return emp3
  })
}
employeeArray2()


// Local Array for testing and debug
// const employeeArray = [{ name: "Stephan Cury", age: 28, role: "Manager" }, { name: "Cara Colo", age: 28, email: "Manager" }, { name: "Stephanie Monaco", age: 28, role: "Community Manager" }, { name: "Eric Mozzolato", age: 20, role: "Engineer" }]

function App() {


  // Definition of state for Employees
  // eslint-disable-next-line
  const [employee, setEmployee] = useState(emp3)

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
  var matchingEmployees = employee.filter(function (emp) {
    if (search.name === "") {
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
      <table className="table mx-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Picture</th>
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
