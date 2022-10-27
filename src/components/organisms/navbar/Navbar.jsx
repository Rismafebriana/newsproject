import React from "react";
import Search from "../../atoms/search/Search";
import  "bootstrap/dist/js/bootstrap.js";
    
function Navbar () {
  return (

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-bold mx-5" href="/">News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0 justify-content-between px-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Indonesia</a>
        </li>
       <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/programming">Programming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/covid">Covid-19</a>
        </li>
       <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/saved">Saved</a>
        </li>
      </ul>

      <Search/>
    
    </div>
  </div>
</nav>
    
  );
};

export default Navbar;
