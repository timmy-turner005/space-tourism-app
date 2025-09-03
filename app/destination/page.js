import { Fragment } from "react";

function Destination() {
  return (
    <Fragment>
      <p>PICK YOUR DESTINATION</p>
      <div>
        <span>MOON</span>
        <span>MARS</span>
        <span>EUROPA</span>
        <span>TITAN</span>
      </div>
      <h1>MARS</h1>
      <p>
        Dont forget to pack your hiking boots. You will need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. it is
        two and half times the size of Everest!
      </p>
      <section>
        <div>
          AVG. DISTANCE <span>225 MIL. KM</span>
        </div>
        <div>
          EST. TRAVEL TIME <span>9 MONTHS</span>
        </div>
      </section>
    </Fragment>
  );
}

export default Destination;
