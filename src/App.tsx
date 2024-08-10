import "./App.css";

function App() {
  let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];

  type Person = {
    name: string;
    age?: number;
  };

  let person: Person = {
    name: "Piyush",
    age: 20,
  };

  let lotsOfPeople: Person[];

  //957
  return (
    <>
      <p>Hello world</p>
    </>
  );
}

export default App;
