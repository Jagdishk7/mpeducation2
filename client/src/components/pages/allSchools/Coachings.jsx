import React from "react";
import './SchoolCard.css'

const Coachings = () => {
  return (
    <>
    <h1 className='page-heading'>Coachings</h1>
      <main id="page-content" class="main section-wrap">
        <article class="article">
          <div class="content">
            <h1 class="headline">
              Coaching Name
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore repudiandae iusto, harum soluta alias consectetur placeat, unde non suscipit ex nam sequi nemo accusamus distinctio sapiente, debitis dicta doloremque illo esse possimus cupiditate.
            </p>
            <p>
              <strong>Address : </strong>Chhatarpur
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/dps.jpg"
              alt="It's a cupcake and it looks delicious"
            />
          </figure>
        </article>

        
      </main>
    </>
  );
};

export default Coachings;
