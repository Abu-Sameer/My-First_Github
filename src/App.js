import './App.css';
import TopBar from './component/TopBar/TopBar';
import CreateListing from './pagesection/create-listing/CreateListing';
import Home from './pagesection/homepage/Home';
import Details from './pagesection/ListingDetail/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="detail/:id" element={<Details />} />
          <Route exact path="create" element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
