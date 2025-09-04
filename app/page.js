import NavBar from "@/components/Navbar";
import { Fragment } from "react";
import classes from "./page.module.css";

function HomePage() {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <main className={classes.main}>
          <div className={classes.content}>
            <h1 className={classes.title}>SO, YOU WANT TO TRAVEL TO</h1>
            <h2 className={classes.space}>SPACE</h2>
            <p className={classes.description}>
              Let us face it; If you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we will give you a truly out
              of this world experience!
            </p>
          </div>

          <div className={classes["explore-container"]}>
            <button className={classes["explore-button"]}>EXPLORE</button>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default HomePage;
