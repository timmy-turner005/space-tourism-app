import Link from "next/link";
import { Fragment } from "react";
import classes from "./navbar.module.css";

function NavBar() {
  return (
    <Fragment>
      <header className={classes.navbar}>
        {/* <div className={classes.logo}>✦</div> */}
        {/* <nav> */}
        <div className={classes.navitems}>
          <Link href="/" className={classes.navlink}>
            <span className={classes.span}>00</span> Home
          </Link>
          <Link href="/destination" className={classes.navlink}>
            <span className={classes.span}>01</span> Destination
          </Link>
          <Link href="/crew" className={classes.navlink}>
            <span className={classes.span}>02</span> Crew
          </Link>
          <Link href="/technology" className={classes.navlink}>
            <span className={classes.span}>03</span> Technology
          </Link>
        </div>
        {/* </nav> */}
      </header>
    </Fragment>
  );
}

export default NavBar;
