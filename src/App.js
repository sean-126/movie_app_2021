import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;

// class는 function과 유사하나 state를 갖는다.

class App extends React.Component {
  // state에는 동적으로 변하는 데이터를 넣는다.
  state = {
    count: 0
  }
  render() {
    return <h1>I'm a class Component</h1>;
  }
}

export default App;