import React, { Component } from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'

class Users extends Component {
    render() {
        console.log(this.props.users);
        return this.props.users.map((user) => (
            <UserItem key = {user.id} user = {user}/>
        ));
    }
}

//PropTypes
Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
