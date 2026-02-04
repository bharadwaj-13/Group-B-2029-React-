import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />

      <div>
        <Card title="Laptops" content="Apple Macbooks" footerData="Rs 100000" />
        <Card
          title="Headphone"
          content="Bose Headphones"
          footerData="Rs 45000"
        />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
