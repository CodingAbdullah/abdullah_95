import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css';

const Header = () => {

    return (
      <nav id="heading" class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">AbdulM95</Link>
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link link" aria-current="page" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link" aria-current="page" to="/skills">Skills</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link" aria-current="page" to="/resume">Resume</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link" aria-current="page" to="/leisure">Leisure</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link link" aria-current="page" href="/leisure">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;