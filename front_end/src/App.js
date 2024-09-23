import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import View from './components/View'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <>
        <h1 style={{textAlign: "center"}}>Laravel...API...React CRUD</h1>
        <hr></hr>
        <div class="spinner-border text-dark" role="status">
  <span class="sr-only"></span>
</div><div class="spinner-border text-dark" role="status">
  <span class="sr-only"></span>
</div><div class="spinner-border text-dark" role="status">
  <span class="sr-only"></span>
</div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/view/:id" element={<View />}/>
            <Route exact path="/edit/:id" element={<Edit />}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
