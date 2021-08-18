import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed.js';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Sidebar from './components/Sidebar.js';
import Widgets from './components/Widgets.js';
import { login, logout, selectUser } from './features/userSlice.js';
import { auth } from './firebase.js';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        // User is not logged
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      
      {!user ? <Login /> :(
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
