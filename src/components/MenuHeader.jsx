import React from "react";

function MenuHeader(){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Tecnica Basica</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/about">Acerca de Mi</a>
                  </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/archive">Archivos del blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portafolio del autor</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://github.com/eligiobz/"><i class="fab fa-github"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about"><i class="fab fa-facebook"></i></a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://eligiobz.github.io/portfolio/"><i class="fab fa-linkedin"></i></a>
                </li>
                </ul>
          </div>
        </div>
      </nav>
  );
}

export default MenuHeader;
