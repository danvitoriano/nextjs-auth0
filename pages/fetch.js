import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

export default () => {
  const { user, loading } = useFetchUser({ required: true });
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
      <h1>Fetch</h1>
      <p>
        This is the about page, navigating between this page and <i>Home</i> is
        always pretty fast. However, when you navigate to the <i>Profile</i>{" "}
        page it takes more time because it uses SSR to fetch the user first;
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
                    <strong>{item.email}</strong>
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
