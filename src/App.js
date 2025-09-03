import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos de la API");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Encabezado con logo */}
      <header className="app-header">
        <img
          src="https://s3.hermeco.com/Content/Images/offcorss.png"
          alt="OFFCORSS Logo"
          className="logo"
        />
        
      </header>

      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <Loading />}

      {error && (
        <div className="status error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>
            <strong>Error:</strong> {error}
          </span>
        </div>
      )}

      <div className="cards-container">
        {!loading && !error && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          !loading && !error && (
            <p className="status">No se encontraron usuarios</p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
