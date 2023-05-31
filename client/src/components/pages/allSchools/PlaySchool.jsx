import React from "react";
import "./SchoolCard.css";

const PlaySchool = () => {
  return (
    <>
      <h1 className="page-heading">Play Schools</h1>
      <main id="page-content" class="main section-wrap">
        <article class="article">
          <div class="content">
            <h1 class="headline">Minds eye play school</h1>
            <p>
              Minds Eye International School Behind Addinath Moters. We are an
              Education Institute Providing High Tech Education
            </p>
            <p>
              <strong>Address : </strong>WHGP+7JQ, Vishwanath Colony, Chhatarpur, Madhya Pradesh 471001
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/mindseyeplay.jpg"
              alt=" Minds eye play school"
            />
          </figure>
        </article>

        <article class="article">
          <div class="content">
            <h1 class="headline">Mansarovar Play School</h1>
            <p>
              This School is counted among the top-rated Schools in Madhya
              Pradesh with an excellent academic track record. If you’re looking
              for more details regarding admission/application forms, syllabus,
              results or examinations schedule, kindly get in touch with the
              relevant department of the school. If you’re an official or owner
              of this School and would like to add or update data on this
              listing, contact us.
            </p>
            <p>
              <strong>Address : </strong>VHVV+28P, Satai-Chhatarpur Rd, Ambedkar Nagar, Chhatarpur, Madhya Pradesh 471001
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/mansarovarplay.jpg"
              alt="Mansarovar Play School"
            />
          </figure>
        </article>

        <article class="article">
          <div class="content">
            <h1 class="headline">Sumati Academy</h1>
            <p>
              The school comes with an uncompromising commitment. It aims to
              achieve specific, measurable, observable and quantifiable results
              among all aspirants/students. Because the School has a vision to
              provide value based education to young minds and provide a dynamic
              learning environment. However, the School aegis for every student
              which strives for excellence through active learning and
              education. Moreover, the School has the core committed faculty
              which has come from accomplished backgrounds with vast experience.{" "}
            </p>
            <p>
              <strong>Address : </strong>Nowgong Road, Chhatarpur, Madhya Pradesh 471001
            </p>
          </div>

          <figure class="image-wrap">
            <img src="assets/schoolImg/sumati.jpg" alt="Sumati Academy" />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Delhi Public School</h1>
            <p>
              Delhi Public School, Chhatarpur (Madhya Pradesh) aims to deliver
              balanced educational and personality skills within a safe,
              stimulating environment for each child to grow to the greatest
              potential.
            </p>
            <p>
              <strong>Address : </strong>Basari, Panna Khajuraho Rd, Chhatarpur, Madhya Pradesh 471105
            </p>
          </div>

          <figure class="image-wrap">
            <img src="assets/schoolImg/dps2.jpg" alt="Delhi Public School" />
          </figure>
        </article>
      </main>
    </>
  );
};

export default PlaySchool;
