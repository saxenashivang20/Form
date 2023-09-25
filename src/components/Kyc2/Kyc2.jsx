import React from "react";
import "./Kyc2.css"; 
import Line from './line-32.svg'; 
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  family: "",
  birth: "",
  tax: "",
  identity: "",
  typeofid: "",
  funding: ""
};

export const Kyc2 = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      alert("Form Submitted");
    }
  });

  return (
    <div className="kyc">
      <div className="div">
        <div className="text-wrapper">Complete KYC</div>
        <p className="submit-following-to">Submit following to initiate&nbsp;&nbsp;KYC Process</p>
        <div className="text-wrapper-3">Family Name</div>
        <div className="text-wrapper-4">Birth</div>
        <div className="text-wrapper-5">Tax Country</div>
        <div className="text-wrapper-6">Name</div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="family"
            required
            className="rectangle"
            onChange={handleChange}
            value={values.family}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="birth"
            required
            className="rectangle-2"
            onChange={handleChange}
            value={values.birth}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="tax"
            required
            className="rectangle-3"
            onChange={handleChange}
            value={values.tax}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="name"
            required
            className="rectangle-4"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />

          <div className="text-wrapper-7">Tax Id</div>
          <div className="text-wrapper-8">Tax Id Type</div>
          <div className="text-wrapper-9">Funding Source</div>
          <input
            type="text"
            name="identity"
            required
            className="rectangle-5"
            onChange={handleChange}
            value={values.identity}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="typeofid"
            required
            className="rectangle-6"
            onChange={handleChange}
            value={values.typeofid}
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="funding"
            required
            className="rectangle-7"
            onChange={handleChange}
            value={values.funding}
            onBlur={handleBlur}
          />
           <Link to="/kyc3">
          <button type="submit" className="overlap-group text-wrapper-2">Next</button>
          </Link>
        </form>
        <div className="text-wrapper-10">Identity</div>
        <img className="line" alt="Line" src={Line} />
      </div>
    </div>
  );
};

export default Kyc2;