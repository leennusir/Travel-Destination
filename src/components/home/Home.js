import Header from '../header/Header'
import Footer from '../footer/Footer'
import Tours from '../tours/Tours'
import Data from '../../data/db.json';

function App() {
  return (
    < >
    <Header/>
      <Tours xx={Data} />
      <Footer/>
      
    </>
  );
}

export default App;
