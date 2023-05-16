import React from "react";


interface SalariesProps {
    salaries: [
        {
            salary: string,
            from_date: string
        }
    ]
}

class SalaryRow extends React.Component {
    render() {
        return '';
        // return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
    }
}

class Salaries extends React.Component<SalariesProps> {
    render() {
        const {salaries} = this.props;

        const salaries_rows = salaries.map((salary, index) => {
            return <SalaryRow/>
        });

        const filter_form = <form action="#">
            <input type="text" onKeyDown={(e) => {
                let el = (e.target as HTMLElement).val;
                console.log(el)
            }} />
            </form>

        return <>
            {filter_form}
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Salary</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {salaries_rows}
                </tbody>
            </table>
        </>; 
    }
}

export default Salaries;