import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);

function Application() {
  return <>
    <h2>Welcome to my application</h2>
    <div>
      <h2>Hello</h2>
    </div>
  </>;
}
