import React from 'react';
import { useSelector } from 'react-redux';
import Feed from './components/Feed.js';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Sidebar from './components/Sidebar.js';
import { selectUser } from './features/userSlice.js';


function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      
      {!user ? <Login /> :(
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
