import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <main data-scroll-container>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
