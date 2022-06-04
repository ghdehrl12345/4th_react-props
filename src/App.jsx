import React from "react";

const Dogi = ({ kimchi }) => {
  return <input type={`${kimchi}`} />;
};

const App = () => {
  return (
    <div>
      Hello Props
      <Dogi kimchi="text" />
      <Dogi kimchi="checkbox" />
      <Dogi kimchi="password" />
      <Dogi kimchi="date" />
    </div>
  );
};

export default App;
