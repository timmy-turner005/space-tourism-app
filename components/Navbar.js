import Link from "next/link";
import { Fragment } from "react";
import classes from "./navbar.module.css";

function NavBar() {
  return (
    <Fragment>
      <div className={classes.link}>
        <Link href="/">
          <span>00</span>HOME
        </Link>
        <Link href="/destination">
          <span>01</span>DESTINATION
        </Link>
        <Link href="/crew">
          <span>02</span>CREW
        </Link>
        <Link href="/technology">
          <span>03</span>TECHNOLOGY
        </Link>
      </div>
    </Fragment>
  );
}

export default NavBar;
