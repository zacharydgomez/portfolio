import React from 'react';
import Sidebar from "./components/sidebar";
import Information from "./components/information";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-300">
      <div className="flex justify-center">
        <div className="m-4 p-4 bg-gray">
          <Sidebar />
        </div>
        <div className="m-4 p-4 bg-grey" style={{ height: "400px", width: "50%", overflowY: "scroll" }}>
          <Information />
        </div>
      </div>
    </div>
  );
};

export default App;