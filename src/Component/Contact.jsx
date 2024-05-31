import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center">
        <h1 className="mb-3 font-bold text-white">Contact</h1>
        <h2 className="text-2xl font-bold text-white">REACH OUT ME</h2>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white mt-3 mb-3">ANY PROJECY?</h1>
        <div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="mb-5">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">
                    Name <br />
                    ________________________________________________________________________________________
                  </span>
                </div>
              </label>
            </div>
            <div className="mb-5">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">
                    Email <br />
                    _________________________________________________________________________________________
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className="mb-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">
                  Message <br />
                  _____________________________________________________________________________
                </span>
              </div>
            </label>
          </div>
          <h1 className=" mt-5 mb-5">ATTACH FILE</h1>
          <div>
            <button className="btn bg-orange-500 text-white mt-5 mb-5">Submit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
