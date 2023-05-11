import React from "react";

interface EmployeesProps {
    employees: [
        {
            emp_no: string,
            first_name: string,
            last_name: string
        }
    ]
}

class Employees extends React.Component<EmployeesProps> {
    render() {
        const {employees} = this.props;

        const employees_rows = employees.map((employee, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{employee.emp_no}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
            </tr>
        });

        return <table>
            <thead>
            <tr>
                <th>#</th>
                <th>emp_no</th>
                <th>first_name</th>
                <th>last_name</th>
            </tr>
            </thead>
            <tbody>
                {employees_rows}
            </tbody>
        </table>; 
    }
}

export default Employees;