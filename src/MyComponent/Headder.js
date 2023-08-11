import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

export default function Headder({ clearTodo }) {
  const [seachTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${seachTerm}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md container-flui custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyTo Do's List
          </Link>

          <div className="container navbar" id="navbarSupportedContent">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => handleSearch(e)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={seachTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            CLEAR TODO
          </button>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-warning">
                  <h5 class="modal-title " id="staticBackdropLabel">
                    CAUTION...!
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  It will clear the entair todo list data will be forever lost
                  if you want to continue press Understood
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                    onClick={() => clearTodo(false)}
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => clearTodo(true)}
                    data-bs-dismiss="modal"
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Headder.defaultProps = {
  title: "your title here",
  searchbar: true,
};

Headder.prototypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool,
};
