import React, { useContext } from 'react';
// We import the UserContext as we want to use that context
import { UserContext } from '../contexts/UserContext'


function User() {
    // 1. We destructure all of the props passed from the context as shown
    // 2. within useContext() we specify that we want to use UserContext
    // this lets context know which context we want to use.
    const { isUserOnline, handleUserStatus } = useContext(UserContext);
    return (
        <div>
            <h1>{isUserOnline ? 'User is logged in' : 'User is logged out'}</h1>
            {/* This method is called on the User but is executed on the UserContext.js */}
            <button onClick={handleUserStatus}>Update User</button>
        </div>
    )
}

export default User;
