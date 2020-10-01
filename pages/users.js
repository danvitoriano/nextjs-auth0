import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

export default () => {
  const { user, loading } = useFetchUser();
  const [usuario, setUsuario] = useState(null);

  async function fetchUserData() {
    const response = await fetch("https://reqres.in/api/users");
    setUsuario(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  });

  return (
    <Layout user={user} loading={loading}>
      <h1>Users</h1>
      <p>
        This is the users page, we are just fetching some random data using State Hooks and Effects Hooks. Try open one of users below to see more details;
      </p>
      {!usuario ? (
        "loading"
      ) : (
          <ul style={{ listStyleType: "none" }}>
            {usuario.data
              .filter((element) => element.id !== 2)
              .splice(1, 3)
              .map((item, key) => {
                return (
                  <li key={key}>
                    <details>
                      <summary>{`${item.first_name} ${item.last_name}`}</summary>
                      <p><strong>{item.email}</strong></p>
                      <img src={item.avatar} alt={item.id} />

                    </details>
                  </li>
                );
              })}
          </ul>
        )}
    </Layout>
  );
};
