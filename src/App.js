import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CreatePlanPage from "./pages/CreatePlanPage";
// import HomePage from "./pages/HomePage";
// import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Container>
      <Header />
      {/* <HomePage /> */}
      {/* <AboutUsPage /> */}
      <CreatePlanPage />
      <Footer />
    </Container>
  );
}

export default App;
