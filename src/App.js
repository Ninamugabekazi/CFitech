import './App.css';
import Formationinitiation from './components/FormationInitiation/Formationinitiation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formationtechnicien from './components/Formationhelpdesk/Formationhelpdesk';
import Formationweb from './components/Formationweb/Formationweb';
import Formationtech_pc_réseaux from './components/Formationtech_pc_réseaux/Formationtech_pc_réseaux';
import Jobs from './components/Jobs/Jobs';
import Formationhelpdesk from './components/Formationhelpdesk/Formationhelpdesk';
import Inscription from './components/Inscription/Inscription';




function App() {
  return (
    <div className="App">
      {/* <Formationinitiation/> */}
      {/* <Formationhelpdesk/> */}
      {/* <Formationweb/> */}
      {/* <Formationtech_pc_réseaux/> */}
      {/* <Jobs/> */}
      <Inscription/>
    </div>
  );
}

export default App;
