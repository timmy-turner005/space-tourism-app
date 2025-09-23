import NavBar from "@/components/Navbar";
import { Fragment } from "react";
import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      {/* <div className={classes.background}>
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
      </div> */}
      <div className={classes.background}>
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
              <span>00</span>home
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

        <section className={classes.content}>
          <div className={classes["text-content"]}>
            <p>so you want to travel to sapce</p>
            <h1>space</h1>
            <p>
              Let&apos;s face it; If you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className={classes["explore-container"]}>
            <p>explore</p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default HomePage;
