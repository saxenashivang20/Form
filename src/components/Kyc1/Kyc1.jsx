import React from "react";
import "./Kyc1.css";
import Line from './line-28.svg';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useFormik } from "formik";

const initialValues = {
  email: "",
  number: "",
  address: "",
  city: "",
  state: "",
  code: ""
};

export const Kyc1 = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      alert("Form is submitted");
    }
  });

  return (
    <div className="kyc">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Contact</div>
          <img className="line" alt="Line" src={Line} />
        </div>
        <div className="text-wrapper-2">Email</div>
        <div className="text-wrapper-3">Phone</div>
        <div className="text-wrapper-4">Street Address</div>
        <div className="text-wrapper-5">City</div>
        <div className="text-wrapper-6">State</div>
        <div className="text-wrapper-7">Postal code</div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle"
          />
          <input
            type="text"
            required
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle-2"
          />
          <input
            type="text"
            required
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle-3"
          />
          <input
            type="text"
            required
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle-4"
          />
          <input
            type="text"
            required
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle-5"
          />
          <input
            type="text"
            required
            name="code"
            value={values.code}
            onChange={handleChange}
            onBlur={handleBlur}
            className="rectangle-6"
          />

          <div className="text-wrapper-8">Complete KYC</div>
          <p className="submit-following-to">Submit following to initiate&nbsp;&nbsp;KYC Process</p>

          {/* Use Link component to navigate to Kyc2 */}
          <Link to="/kyc2">
            <button type="submit" className="overlap-group text-wrapper-2">Next</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Kyc1;
