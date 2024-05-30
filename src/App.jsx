import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FunctionComponent from './components/1.1_myFirstReactComponent/01_FunctionComponent'
import FunctionalComponent from './components/1.1_myFirstReactComponent/02_FunctionalComponent';
import ClassComponent from './components/1.1_myFirstReactComponent/03_ClassComponent';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>
          <FunctionComponent />
          <FunctionalComponent />
          <ClassComponent />
        </div>} />
        <Route path="page01" element={<FunctionComponent />} />
        <Route path="page02" element={<FunctionalComponent />} />
        <Route path="page03" element={<ClassComponent />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

