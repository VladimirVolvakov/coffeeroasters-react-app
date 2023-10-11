import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Container>
      <Header />
      <HomePage />
      <Footer />
    </Container>
  );
}

export default App;
