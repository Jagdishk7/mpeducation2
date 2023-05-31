import React from "react";
import "./SchoolCard.css";

const SoftwareInstitutes = () => {
  return (
    <>
      <h1 className="page-heading">Software Institutes</h1>
      <main id="page-content" class="main section-wrap">
        <article class="article">
          <div class="content">
            <h1 class="headline">ICOESS Software & Services</h1>
            <p>
              ICOESS is commited to provide adative services & solutions to our
              cusomers. ICOESS helps businesses thrive in a world defined by
              disruption and fueled by transformative technology.{" "}
            </p>
            <p>
              <strong>Address : </strong>MIG-249 PEPTECH TOWN, Chhatarpur-471001 Madhya Pradesh.
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/SoftwareInstitutes/icoess.jpg"
              alt="ICOESS Software & Services"
            />
          </figure>
        </article>
      </main>
    </>
  );
};

export default SoftwareInstitutes;
