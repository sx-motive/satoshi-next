import React from "react";
import Image from "next/image";
import Link from "next/link";

{
  /*

API: sectionDescription
props: img: string, subtitle: string, title: string, p: string

*/
}

export default function SectionDescription(props) {
  return (
    <section
      data-scroll-section
      data-scroll-section-inview
      className="description-section"
    >
      <div className="main-container" id="stick">
        {props.data.map((item, index) => (
          <div key={index} className="item-wrap">
            <div className="col-left">
              <div className="img-wrap">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
            <div className="col-right">
              <span>{item.title}</span>
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="side-bar">
        <div
          className="side-bar-wrap"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#stick"
        >
          <span>read list</span>
          <nav>
            <ul>
              {props.data.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contacts">
            <a>Have an queastion?</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
