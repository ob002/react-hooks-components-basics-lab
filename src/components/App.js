import React from "react";

// Define Navbar component
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// Define Home component
function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>Welcome to my portfolio site!</p>
    </div>
  );
}

// ✅ Define About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This section tells more about me.</p>
    </div>
  );
}

// ✅ App component returns all three child components
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

