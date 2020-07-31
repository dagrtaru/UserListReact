import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Activity from './Activity'

export class UserItem extends Component {

    getStyle = () => {
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    
    
    render() {
        return (
            <div style = {this.getStyle()}>
                <p>{this.props.user.id} {this.props.user.real_name} <br/> <button id="modalBtn" className="button" >Details</button>
</p>
                <div id="simpleModal" className="modal">
                    <div className = "modal-content">
                        <div className="modal-header">
                            <span className="closeBtn">&times;</span>
                            <h2>User Details</h2>
                        </div>
                        <div className="modal-body">
                            <p>User Id: {this.props.user.id}</p>
                            <p>User Name: {this.props.user.real_name}</p>
                            <p>Timezone: {this.props.user.tz}</p>
                            {   
                                this.props.user.activity_periods.map((activity_period) => (
                                    <Activity key = {Math.random()} activity={activity_period}/>
                                ))
                            }
                        </div>
                        <div className="modal-footer">
                            <h4>&copy; 2020 FullThrottleLabs pvt. ltd.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//PropTypes
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
