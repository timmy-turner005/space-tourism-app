import { Fragment } from "react";
import classes from "./page.module.css";
import Image from "next/image";

function Destination() {
  return (
    <Fragment>
      <div className={classes.body}>
        <section>
          <p className={classes.heading}>
            <span className={classes.number}>01</span>pick your destination
          </p>
        </section>
        <section>
          <Image
            src="/image-mars.png"
            alt="planet"
            width={300}
            height={300}
            priority
          />
        </section>
        <ul classes={classes.links}>
          <li>moon</li>
          <li>mars</li>
          <li>europa</li>
          <li>titan</li>
        </ul>
        <h1>mars</h1>
        <p>
          Dont forget to pack your hiking boots. You will need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. it
          is two and half times the size of Everest!
        </p>
        <section>
          <div>
            avg. distance <span>225 mil. km</span>
          </div>
          <div>
            est. travel time <span>9 months</span>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Destination;
