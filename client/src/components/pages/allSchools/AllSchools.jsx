import React from "react";
import SchoolCard from "../../Cards/SchoolCard";
import "../home/Home.css";
import "./AllSchools.css";

const AllSchools = () => {
  return (
    <>
      <div className="flex-column flex-center">
        <div className=" sub-section w-90">
          <SchoolCard
            title={"Delhi Public School"}
            src={"assets/schoolImg/dps2.jpg"}
          />
        </div>
        <div className=" sub-section w-90">
          <SchoolCard
            title={"Maria Mata Convent School"}
            src={"assets/schoolImg/mariamata.jpg"}
          />
        </div>
        <div className=" sub-section w-90">
          <SchoolCard
            title={"Sumati Academy"}
            src={"assets/schoolImg/sumati.jpg"}
          />
        </div>
        <div className=" sub-section w-90">
          <SchoolCard
            title={"Mansarovar Play School"}
            src={"assets/schoolImg/mansarovarplay.jpg"}
          />
        </div>
        <div className=" sub-section w-90">
          <SchoolCard
            title={"Minds Eye International School"}
            src={"assets/schoolImg/mindseyeplay.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default AllSchools;
