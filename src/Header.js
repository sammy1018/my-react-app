
import React from 'react';
import './style.css'
export default class Header extends React.Component{

    render(){
        return (
            <div>
                <table className="optHeader">
                    <tbody>
                    <tr>
                        <td className="headerTd"><input type='text' placeholder='Search...' /></td>
                        <td className="headerTd">
                            <label for='idSelect'>Select From</label>
                            <select id='idSelect'>
                                <option value='0'>All</option>
                                <option value='1'>Professor</option>
                                <option value='2'>Lecture</option>
                                <option value='3'>Student</option>
                                <option value='4'>Internship</option>
                            </select>
                        </td>
                        <td>
                            <label for='orderSelect'>Sorted By</label>
                            <select id='orderSelect'>
                                <option value='0'>Identity</option>
                                <option value='1'>Age Upward</option>
                                <option value='2'>Age Downward</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}