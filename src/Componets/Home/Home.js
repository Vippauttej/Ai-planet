import "./Home.css";
import { useState } from "react";
import logo from "../images/logo.png";
import pic2 from "../images/bulb.png";
import { Link } from "react-router-dom";
import Nav from "./../Nav";
import card from "../card.json";

function Home() {
  var [search, setSearch] = useState("");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-1 col-xl-1"></div>
        <div className="col-12 col-sm-12 col-md-3 col-xl-3">
          <img src={logo} alt="img prblm" />
        </div>
      </div>
      <div className="row bg-dark mt-3">
        <div className="col-12 col-sm-12 col-md-1"></div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="p-5">
            <p className="fs-1 text-light">Hackathon submissions</p>
            <p className="fs-6 text-light">
              {" "}
              An virtual e-learning platform that provides students entire
              virtual learning experience. We offer industry relevant advanced
              engineering courses for technical and non-technical students by
              collaborating with industry experts.it allows students to Learn
              Here and Use Anywhere. Sreeram Technologies act as a bridge
              between classroom and workplace with our flagship Learning
              Programs. We help students achieve more holistic education and
              prepare them for better career opportunities
            </p>
            <Link to="/Form">
              <input
                className="btn btn-success mt-3"
                type="button"
                placeholder="Upload submission"
                value="upload submission"
              />
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-2 p-3">
          <img className="img-fluid text-center" src={pic2} alt="img-prblm" />
        </div>
      </div>
      {/* main row completed */}
      <Nav />

      <div className="container-fluid">
        <div className="row text-center">
          <div className=" col-md-4"></div>
          <div className="col-md-4 p-3">
            <form className="d-flex">
              <input
                className="form-control border border-dark "
                type="text"
                placeholeder="searchHere"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="container">
          <div className="row">
            {card
              .filter((record) =>
                record.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((record) => {
                return (
                  <>
                    <div className=" col-12 col-md-4 p-3">
                      <div className="card  border border-dark">
                        <img
                          src={record.pic}
                          className="card-img-top"
                          alt="..."
                          style={{ height: "300px" }}
                        />
                        <div className="card-body" style={{ height: "300px" }}>
                          <h5 className="card-title">{record.name}</h5>
                          <p className="card-text">{record.description}</p>
                          <h3 className="fw-bold">{record.price}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
