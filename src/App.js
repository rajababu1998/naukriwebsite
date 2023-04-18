import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './pages/Home';
import LatestJob from './pages/LatestJob';
import Results from './pages/Results';
import Admitcard from './pages/Admitcard';
import Answerkey from './pages/Answerkey';
import Syllabus from './pages/Syllabus';
import Contactus from './pages/Contactus';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/home' element = {<Home/>} />
            <Route path='/latestjob' element = {<LatestJob/>} />
            <Route path='/results' element = {<Results/>} />
            <Route path='/admitcard' element = {<Admitcard/>} />
            <Route path='/answerkey' element = {<Answerkey/>} />
            <Route path='/syllabus' element = {<Syllabus/>} />
            <Route path='/contact' element = {<Contactus/>} />
            
          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
