import "./App.css";
import TodoList from "./TodoList";
import { getImageUrl } from "./utils.js";
import { Routes, Route, Link } from "react-router-dom";

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile({ name, imgId, proFession, award, discovered }) {
  return (
    <>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {proFession}
        </li>
        <li>
          <b>Awards: 4 </b>
          {award}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </>
  );
}

function App() {
  const person1 = {
    name: "Maria Skłodowska-Curie",
    imgId: "szV5sdG",
    proFession: "physicist and chemist",
    award:
      "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
    discovered: "seawater",
  };
  const person2 = {
    name: "Katsuko Saruhashi",
    imgId: "YfeOqp2",
    proFession: "geochemist",
    award: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater",
  };
  return (
    <>
      <div>
        <Link to="/test">テストページへ遷移</Link>
        <h1>Notable Scientists</h1>
        <Card>
          <Profile {...person1} />
        </Card>
        <Card>
          <Profile {...person2} />
        </Card>
      </div>
    </>
  );
}
function Card(props) {
  return <section className="profile">{props.children}</section>;
}
export default App;
