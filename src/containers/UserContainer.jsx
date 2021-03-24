import React from "react";
import { useParams } from "react-router-dom";

const UserContainer = () => {
  const { username } = useParams();

  return (
    <main className="container mx-auto full-width">
      <h1>Profile: {username}</h1>
    </main>
  );
};

export default UserContainer;
