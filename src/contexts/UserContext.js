import React, { createContext } from 'react';

// We create a context here to be later imported by the component which requires it
export const UserContext = createContext();

class UserContextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserOnline: false
        }
    }

    // This is a method responsible for updating the context state,
    // this will then be passed down to the component
    handleUserStatus = () => {
        this.setState({ isUserOnline: !this.state.isUserOnline })
    }

    render() {
        return (
            // This is responsible for providing the state to any components nested inside of the provider
            // The value passes the state down and any methods, the syntax is always the same as shown
            <UserContext.Provider value={{ ...this.state, handleUserStatus: this.handleUserStatus }}>
                {/* 
                    this.props.children will allow for the state to be accessed by and components nested
                    within the UserContextComponent
                 */}
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContextComponent;