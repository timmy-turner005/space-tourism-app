import { Fragment } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import NavBar from "@/components/Navbar";

function Destination() {
  return (
    <Fragment>
      <div className={classes.background}>
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
            <h1 className={classes.mars}>mars</h1>
            <p className={classes.text}>
              Dont forget to pack your hiking boots. You will need them to
              tackle Olympus Mons, the tallest planetary mountain in our solar
              system. it is two and half times the size of Everest!
            </p>
            <footer className={classes.footer}>
              <div className={classes.distance}>
                <p className={classes.footone}>avg. distance</p>
                <p>225 mil. km</p>
              </div>
              <div className={classes.distance}>
                <p className={classes.footone}>est. travel time</p>
                <p>9 months</p>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Destination;
