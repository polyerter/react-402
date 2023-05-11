import React from "react";

interface EmployeesProps {
    employees: [
        {
            salary: string,
            from_date: string
        }
    ]
}

class Employees extends React.Component<EmployeesProps> {
    render() {
        const {employees} = this.props;

        const employees_rows = employees.map((employee, index) => {
            return <tr key={index}><td>{index + 1}</td><td>{employee.salary}</td><td>{employee.from_date}</td></tr>
        });

        return <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Salary</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {employees_rows}
            </tbody>
        </table>; 
    }
}

export default Employees;