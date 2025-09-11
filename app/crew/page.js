import { Fragment } from "react";
import classes from "./crew.module.css";

function Crew() {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.container1}>
          <h1 className={classes.head}>Crew Page</h1>
        </div>

        <div className={classes.container2}>
          <h1 className={classes.second}>second page</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Crew;
