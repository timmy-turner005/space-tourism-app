import NavBar from "@/components/Navbar";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <NavBar />
      <section>
        <div>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let us face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we will give you a truly out of
            this world experience!
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;
