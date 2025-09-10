import { Fragment } from "react";

function Destination() {
  return (
    <Fragment>
      <p>pick your destination</p>
      <div>
        <span>moon</span>
        <span>mars</span>
        <span>europa</span>
        <span>titan</span>
      </div>
      <h1>mars</h1>
      <p>
        Dont forget to pack your hiking boots. You will need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. it is
        two and half times the size of Everest!
      </p>
      <section>
        <div>
          avg. distance <span>225 mil. km</span>
        </div>
        <div>
          est. travel time <span>9 months</span>
        </div>
      </section>
    </Fragment>
  );
}

export default Destination;
