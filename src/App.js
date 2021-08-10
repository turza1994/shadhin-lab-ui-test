import './App.css';
import BecomeInstructor from './components/BecomeInstructor/BecomeInstructor';
import BestCourses from './components/BestCourses/BestCourses';
import Header from './components/Header/Header';
import LiveCourses from './components/LiveCourses/LiveCourses';
import WhyAreYouHere from './components/WhyAreYouHere/WhyAreYouHere';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyAreYouHere />
      <BestCourses />
      <LiveCourses />
      <BecomeInstructor />
    </div>
  );
}

export default App;
