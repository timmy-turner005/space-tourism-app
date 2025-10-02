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
    </Fragment>
  );
}

export default Technology;
