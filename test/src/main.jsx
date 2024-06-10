import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./components/Home"
import UserComponent from "./components/User"
import AdminComponent from "./components/Admin"
import { useState , useEffect} from 'react';
import Owner from './components/Owner';

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'ลุงแดง', position: 'Security guard' },
      { id: 2, name: 'ป้าเขียว', position: 'Janitor' },
    ];
    setUsers(mockUsers);
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <React.StrictMode>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Home users={users} addUser={addUser} />,
              },
              {
                path: "/user",
                element: <UserComponent users={users} />,
              },
              {
                path: "/admin",
                element: <AdminComponent users={users} addUser={addUser} deleteUser={deleteUser} />,
              },
            ],
          },

          {
            path:"/owner",
            element:<Layout />,
            children:[
              {
                path:"",
                element:<Owner />
              }
            ]
          }
        ])}
      />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);