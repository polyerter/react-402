import React from 'react';

class Menu extends React.Component {
    render() {
        return <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
          <a className={"navbar-brand"} href="#">Панель навигации</a>
          <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse"} id="navbarNav">
            <ul className={"navbar-nav"}>
              <li className={"nav-item"}>
                <a className={"nav-link active"} aria-current="page" href="#">Главная</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#">Рекомендуемые</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#">Цена</a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link disabled"}>Отключенная</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>;
    }
}

export default Menu;