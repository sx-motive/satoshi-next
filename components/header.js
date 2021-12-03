import Link from "next/link";
import MotiveLink from "./activelink";

import { nav } from "../pages/api/data";

export default function Header() {
  return (
    <>
      <div
        data-scroll-section
        data-scroll-section-inview
        className="header-notification"
      >
        <span>
          <marquee>
            Buy more, save more during our holiday special. Offer ends in 00
            days 11 hours 41 min.
          </marquee>
        </span>
      </div>
      <header data-scroll-section data-scroll-section-inview>
        <div className="wrap-logo">
          <Link href="/">
            <a className="logo">Satoshi</a>
          </Link>
        </div>
        <nav className="wrap-nav">
          <ul>
            {nav.map((item, index) => (
              <li key={index}>
                <MotiveLink href={item.link}>
                  <a>
                    <span>{item.title}</span>
                  </a>
                </MotiveLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap-btns">
          <Link href="/constacts">
            <a>Lets work together</a>
          </Link>
        </div>
      </header>
    </>
  );
}
