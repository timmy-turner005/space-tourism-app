import { Fragment } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function Technology() {
  return (
    <Fragment>
      <section className={classes.navbar}>
        <div className={classes.logo}>
          <Image
            src="/logo.svg"
            alt="star-logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <div className={classes.links}>
          <Link href="/" className={classes.navlink}>
            <span className={classes.nums}>00</span>home
          </Link>
          <Link href="/destination" className={classes.navlink}>
            <span>01</span>destination
          </Link>
          <Link href="/crew" className={classes.navlink}>
            <span>02</span>crew
          </Link>
          <Link href="/technology" className={classes.navlink}>
            <span>03</span>technology
          </Link>
        </div>
      </section>
      <div>
        <p>03</p>
        <p>space launch 101</p>
      </div>
      <section>
        <div>
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div>
            <p>the technology</p>
            <h1>launch vehicle</h1>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. standing 150 metres tall, its quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/rocket.jpg"
            alt="rocket"
            width={50}
            height={50}
            priority
          />
        </div>
      </section>
    </Fragment>
  );
}

export default Technology;
