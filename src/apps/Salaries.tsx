import React from "react";


class Salaries extends React.Component {
    render() {
        const salaries = '';

        return <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Salary</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {salaries}
            </tbody>
        </table>; 
    }
}

export default Salaries;