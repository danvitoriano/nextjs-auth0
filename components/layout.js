import React from "react";
import { useContext, useState } from "react";
import Head from "next/head";
import Header from "./header";

const themes = {
  dark: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  light: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function Layout({ user, loading = false, children }) {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={theme}>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <button
          onClick={() => {
            theme === themes.dark
              ? setTheme(themes.light)
              : setTheme(themes.dark);
          }}
        >
          {theme === themes.light ? "light" : "dark"}
        </button>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          background: ${theme.background};
          color: ${theme.foreground};
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export default Layout;
