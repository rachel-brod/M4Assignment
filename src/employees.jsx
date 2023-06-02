import React from "react"
import ReactDOM from "react-dom"
import EmployeeList from "./employeeList.jsx"

//render employeeList component onto screen (element w content id)
ReactDOM.render(
    <React.StrictMode>
    <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
    )
