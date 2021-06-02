import React from 'react';

function Resume() {

  return (
    <section>
      <div className="contact-info">
        <h2>Calvin Johnson</h2>
        <p> 3603 Padre Ct, Nisswa, MN 56468</p>
        <p>(218) 820 4013</p>
        <p>joh11145@umn.edu</p>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate sapien suscipit dolor pretium, sed pellentesque ex facilisis. Phasellus imperdiet lacinia faucibus. Sed eu risus in leo egestas sagittis. Suspendisse vestibulum mauris eu mattis vestibulum. Mauris tristique semper varius. Fusce facilisis lectus id facilisis cursus. Donec tincidunt dapibus aliquet. Vestibulum ac porta tellus, id posuere diam. Suspendisse elementum lorem non magna porttitor, sit amet ultrices lacus consectetur.</p>
      </div>
      <div className="education">
        <h3>Education</h3>
        <p>
          <b>University of Minnesota</b> <br/>
          Curtis L. Carlson School of Management <br/>
          Bachelor of Science in Business <br/>
          Major: Finance <br/>
        </p>
      </div>
      <div className="experience">
        <h3>Experience</h3>
      </div>

    </section>
  )
}

export default Resume;