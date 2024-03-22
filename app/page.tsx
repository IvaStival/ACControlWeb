import Chart from "./components/Chart";
import Title from "./components/Tittle/Title";

export default function Home() {
  return (
    <div className="main-content">
      <Title title="ACControl" />
      <Chart />
    </div>
  );
}
