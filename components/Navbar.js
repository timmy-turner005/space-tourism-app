import Link from "next/link";
import { Fragment } from "react";
import classes from "./navbar.module.css";

function NavBar() {
  return (
    <Fragment>
      <header className="navbar">
        <div className="logo">✦</div>
        <nav>
          <ul>
            <Link href="/">
              <span>00</span> Home
            </Link>
            <Link href="/destination">
              <span>01</span> Destination
            </Link>
            <Link href="/crew">
              <span>02</span> Crew
            </Link>
            <Link href="/technology">
              <span>03</span> Technology
            </Link>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default NavBar;
