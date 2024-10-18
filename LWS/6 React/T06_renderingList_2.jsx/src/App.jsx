import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", rating: 7 },
    { id: 2, name: "mango", rating: 10 },
    { id: 3, name: "orange", rating: 8 },
    { id: 4, name: "banana", rating: 8.5 },
    { id: 5, name: "pineapple", rating: 9 },
  ];

  const vegetables = [
    { id: 6, name: "potato", rating: 7.3 },
    { id: 7, name: "calery", rating: 9 },
    { id: 8, name: "carrots", rating: 4.6 },
    { id: 9, name: "corn", rating: 8 },
    { id: 10, name: "broccoli", rating: 7.9 },
  ];
  return (
<>
   <List items={fruits} type="Fruits" />
   <List items={vegetables} type="Vegetables"/>
</>
  )
}

export default App;
