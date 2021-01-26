import React from "react";

function FormComponent(props) {
  return (
    <main>
      <h1>Employee Information</h1>
      <form className="inputForm">
        <input
          className="text"
          onChange={props.handleChange}
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="age"
          placeholder="Age"
          value={props.age}
        />
        <br />
        <br />
        <label>
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <br />
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <label className="destination-header">Select your place of posting</label>
        <br />
        <select
          className="destination-input"
          onChange={props.handleChange}
          name="destination"
          value={props.destination}
        >
          <option value="">-- Please Choose your posting location --</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
		   <option value="Chennai">Chennai</option>
        </select>
        <br />
        <br />
        <label className="restrictions-title">Type of vehicle used for coming to office:</label>
        <br />
        <div className="restrictions">
          <input
            type="checkbox"
            name="Car"
            onChange={props.handleChange}
            checked={props.Car}
          />
          <span>Car</span>
          <br />
          <input
            type="checkbox"
            name="Bike"
            onChange={props.handleChange}
            checked={props.Bike}
          />
          <span>Bike</span>
          <br />

          <input
            type="checkbox"
            name="PT"
            onChange={props.handleChange}
            checked={props.PT}
          />
          <span>Public Transport</span>
        </div>
        <button className="submit">Submit</button>
      </form>
      <hr />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your Location: {props.destination}</p>
        <p>Your mode of transportation: </p>
        <div className="restrictions">
          <span>Car : {props.Car ? " Yes" : "No"}</span> <br />
          <span>Bike : {props.Bike ? " Yes" : "No"}</span>{" "}
          <br />
          <span>Public Transport: {props.PT? " Yes" : "No"}</span>
        </div>
      </div>
    </main>
  );
}

export default FormComponent;