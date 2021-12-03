import Link from "next/link";

export default function Headpage(props) {
  return (
    <>
      <section
        data-scroll-section
        data-scroll-section-inview
        className="head-page"
      >
        <div className="container -full">
          <div className="box">
            <h1>{props.title}</h1>
          </div>
          <div className="box">
            <p>{props.description}</p>
          </div>
        </div>
      </section>
      {/*
      <section data-scroll-section className="head-page-under">
        <span>Last Updated on Mar 21, 2021</span>
        <Link href="/">
          <a className="scroll-down">Scroll down</a>
        </Link>
      </section>
      */}
    </>
  );
}
