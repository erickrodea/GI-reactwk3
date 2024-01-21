import React from "react";

export default function navbar() {
  return (
    <div>
      <nav class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="Hard">Hard</a>
          </li>
          <li class="main-nav__item">
            <a href="/">Easy Page</a>
          </li>
          <li class="main-nav__item">
            <a href="harder">details Page</a>
          </li>
          <li class="main-nav__item">
            <a href="Medium">medium Page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
