import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Container>
      <Header />
      {/* <HomePage /> */}
      <AboutUsPage />
      <Footer />
    </Container>
  );
}

export default App;
