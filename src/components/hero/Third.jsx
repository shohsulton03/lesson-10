import React from "react";
import "./Third.scss";
import blend from "../../assets/blend.png";

function Third() {
  return (
    <section className="third">
      <div className="third__box">
        <div className="third__box-left">
          <img src={blend} alt="" />
        </div>

        <div className="third__box-right">
          <h2 className="third__box-right-title">
            Coffee <br /> machine, buy for home
          </h2>
          <p className="third__box-right-txt">
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nib maximus, est eu, mattis nuce. preasent ut quam quis
            quam venen atis fri ngilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
          <button className="third__box-right-btn">Discover now</button>
        </div>
      </div>
    </section>
  );
}

export default Third;
