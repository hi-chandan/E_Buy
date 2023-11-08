import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Cart/Cart.css";
function Contect() {
  const [value, setvalue] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  function inputevent(e) {
    const { name, value } = e.target;
    setvalue((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  }

  function showevent(event) {
    alert(
      `the name is ${value.firstname} last name is ${value.lastname} email is ${value.email}`
    );
  }

  return (
    <div className="main bg-body-secondary ">
      <div className="container ">
        <div className="row forminput ">
          <div className="col-md-6 col-10 mx-auto my-5 ">
            <div className="mb-3 w">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name :
              </label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                onChange={inputevent}
                name="firstname"
                placeholder="Firstname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                LastName :
              </label>
              <input
                type=""
                className="form-control"
                id="exampleFormControlInput1"
                onChange={inputevent}
                name="lastname"
                placeholder="Lastname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={inputevent}
                name="email"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                LastName :
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                className="btn btn-outline-primary w-25  text-bg-primary"
                type="submit"
                onClick={showevent}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
