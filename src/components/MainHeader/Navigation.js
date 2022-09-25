import React from "react";
import AuthContext from "../../store/auth-contex";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Пользователи</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Админ</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Выйти</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}

    </AuthContext.Consumer>
  );
};

export default Navigation;
