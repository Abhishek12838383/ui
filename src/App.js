import Achiv from './achievments/Achiv';
import './App.css';
import Banner from './Banner';
import Brands from './brands/Brands';
import Buiss from './buiss/Buiss';
import Choose from './choose/Choose';
import Connect from './connect/Connect';
import Footer from './footer/Footer';
import Form from './form/Form';
import Hero from './hero/Hero';
import Laptop from './laptop/Laptop';
import Nav from './Nav';
import Package from './packages/Package';
import Project from './projects/Project';
import Que from './ques/Que';
import Work from './work/Work';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Banner/>
     <Work/>
     {/* <Laptop/> */}
     <Choose/>
     <Achiv/>
<Brands/>
<Connect/>
<Project/>
<Buiss/>

     <Que/>
<Package/>
<Form/>
     <Footer/>
    </div>
  );
}

export default App;
