import Card from "./Component/Card";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import styles from "./Styles/styles.css";
import data from "./data";

function App() {
  const cardElements = data.map((el) => {
    return <Card key={el.id} items={el} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-section">{cardElements}</section>
    </div>
  );
}

export default App;
