import './App.css';
import BestCourses from './components/BestCourses/BestCourses';
import Header from './components/Header/Header';
import WhyAreYouHere from './components/WhyAreYouHere/WhyAreYouHere';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyAreYouHere />
      <BestCourses />
    </div>
  );
}

export default App;
