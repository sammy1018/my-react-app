import React from 'react';
export default class Item extends React.Component{

    render(){
        return (
            <tr
                style={{'cursor': 'pointer'}}
            >
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className="itemBtn">Del</a>
                    <a className="itemBtn">Details</a>
                </td>
            </tr>
        );
    }
}