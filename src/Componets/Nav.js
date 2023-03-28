import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <nav class="navbar navbar-expand-lg navbar-light ">
          {/* <div class="container-fluid"> */}
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  All Submissons
                </a>
              </li>
              <Link to="/Submission">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Favourite Submissions
                  </a>
                </li>
              </Link>
              {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
              {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> 
        </li>  */}
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </div>
    </div>
  );
}
export default Nav;
