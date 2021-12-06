// components
import Footer from "./footer";
import Header from "./header";

// nucleus
export default function Layout({ children }) {
  return (
    <main data-scroll-container>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
