import React from "react";
import "./Kyc3.css"; 
import Line30 from './line-30.svg'; 
import Line31 from './line-31.svg';
import Line34 from './line-34.svg';
import Line35 from './line-35.svg';
import Line36 from './line-36.svg';
import Line37 from './line-37.svg';

export const Kyc3 = () => {
  return (
    <div className="kyc">
      <div className="div">
        <div className="text-wrapper">Complete KYC</div>
        <p className="submit-following-to">Submit following to initiate&nbsp;&nbsp;KYC Process</p>
        <div className="text-wrapper-3">Affiliated exchange or Finra?</div>
        <div className="text-wrapper-4">Is control Person?</div>
        <div className="text-wrapper-5">Politically Exposed?</div>
        <div className="text-wrapper-6">Family Exposed?</div>
        <input type="checkbox" />
        <input type="checkbox" className="rectangle-2" />
        <input type="checkbox" className="rectangle-3" />
        <input type="checkbox" className="rectangle-4" />
        <div className="text-wrapper-7">Margin Agreement</div>
        <div className="text-wrapper-8">Crypto Agreement</div>
        <div className="text-wrapper-9">Account Agreement</div>
        <div className="text-wrapper-10">Custodial Customer Agreement</div>
        <div className="text-wrapper-11">Customer Agreement</div>
        <input type="checkbox" className="rectangle-5" />
        <input type="checkbox" className="rectangle-6" />
        <input type="checkbox" className="rectangle-7" />
        <input type="checkbox" className="rectangle-8" />
        <input type="checkbox" className="rectangle-9" />
        <button className="overlap-group">Submit</button>
        <div className="overlap">
          <div className="text-wrapper-12">Disclosures</div>
          <img className="line" alt="Line" src={Line31} />
        </div>
        <div className="text-wrapper-13">Agreements</div>
        <img className="img" alt="Line" src={Line30} />
        <img className="line-2" alt="Line" src={Line36} />
        <img className="line-3" alt="Line" src={Line34} />
        <img className="line-4" alt="Line" src={Line35} />
        <img className="line-5" alt="Line" src={Line36} />
        <img className="line-6" alt="Line" src={Line37} />
      </div>
    </div>
  );
};

export default Kyc3;
