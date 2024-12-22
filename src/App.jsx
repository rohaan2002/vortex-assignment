import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import axios from "axios";
import { User } from "./enums/userEnums";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = User.COUNT_PER_PAGE;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage; // it took me some time to formulate this logic in an optimal way - Rohan
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="app">

      <div className=" flex justify-start">
        <img
          src="vortex.jpg"
          alt="vortex-logo"
          className="h-12 w-12 rounded-full"
          />
        <p className="m-2 justify-start">
          Made for Vortex - by{" "}
          <a href="https://github.com/rohaan2002/" rel="noreferrer">
            Rohan
          </a>
        </p>
      </div>
      <h1 className="title">Users List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="user-grid">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
