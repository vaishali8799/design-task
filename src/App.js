import './App.css';
import ProfileCard from './components/ProfileCard'
import Navbar from './components/Navbar'
import Filter from './components/Filter'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="app">
      <div className="left">
        <h5>Filters</h5>
        <Filter></Filter>
        
      </div>
      <div className="right">
        <div className="super-head">
        <div ><h5>Featured Experts</h5></div>
        <div className="best-match"><div>Best Match<span>   <i class="fa fa-angle-down" aria-hidden="true"></i></span></div></div>
        </div>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      </div>

      
      
    </div>
    </>
  );
}

export default App;
