import NavBar from "@/components/Navbar";
import { Fragment } from "react";
import classes from "./page.module.css";

function HomePage() {
  return (
    <Fragment>
      <div className={classes.background}>
        <NavBar />
        <div className={classes.container}>
          <main className={classes.main}>
            <div className={classes.content}>
              <h1 className={classes.title}>so, you want to travel</h1>
              <h2 className={classes.space}>space</h2>
              <p className={classes.description}>
                Let us face it; If you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we will give you a truly
                out of this world experience!
              </p>
            </div>

            <section className={classes["explore-container"]}>
              <div className={classes["explore-button"]}>explore</div>
            </section>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
