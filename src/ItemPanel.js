import React from 'react';
import StaffItem from './Item.js';
export default class StaffItemPanel extends React.Component{

    render(){
        let items = [];

        if(this.props.items.length == 0) {
            items.push(<tr><th colSpan="5" className="tempEmpty">No Persons</th></tr>);
        }else {
            this.props.items.forEach(item => {
                items.push(<StaffItem key={item.key} item={item}/>);
            });
        }

        return (
            <table className='itemPanel'>
                <thead>
                <th className='itemTd'>Name</th>
                <th className='itemTd'>Age</th>
                <th className='itemTd'>Identity</th>
                <th className='itemTd'>Gender</th>
                <th className='itemTd'>Operation</th>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}