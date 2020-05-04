import React from 'react';
import UserList from './components/Userlist';
import UserContextComponent from './contexts/UserContext'


function App() {
  return (
    <div className="App">
      {/* 
        The UserContextComponent is the component holding the state in the context.
        The components it wraps all have access to that context.
       */}
      <UserContextComponent>
        <UserList />
      </UserContextComponent>
    </div>
  );
}

export default App;
