import { Fragment } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import NavBar from "@/components/Navbar";

function Destination() {
  return (
    <Fragment>
      <NavBar />

      <section>
        <p className={classes.heading}>
          <span className={classes.number}>01</span>pick your destination
        </p>
      </section>
      <div className={classes.divider}>
        <section className={classes.image}>
          <Image
            src="/image-mars.png"
            alt="planet"
            width={600}
            height={600}
            priority
          />
        </section>

        <section className={classes.content}>
          <div className={classes.links}>
            <p>moon</p>
            <p>mars</p>
            <p>europa</p>
            <p>titan</p>
          </div>
          <h1>mars</h1>
          <p>
            Dont forget to pack your hiking boots. You will need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system. it
            is two and half times the size of Everest!
          </p>

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
