import './App.css';
import BecomeInstructor from './components/BecomeInstructor/BecomeInstructor';
import BestCourses from './components/BestCourses/BestCourses';
import FeaturesAndValue from './components/FeaturesAndValue/FeaturesAndValue';
import GrowingFast from './components/GrowingFast/GrowingFast';
import Header from './components/Header/Header';
import LiveCourses from './components/LiveCourses/LiveCourses';
import OurFocus from './components/OurFocus/OurFocus';
import UpcomingCourses from './components/UpcomingCourses/UpcomingCourses';
import WhyAreYouHere from './components/WhyAreYouHere/WhyAreYouHere';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyAreYouHere />
      <BestCourses />
      <LiveCourses />
      <BecomeInstructor />
      <UpcomingCourses />
      <OurFocus />
      <GrowingFast />
      <FeaturesAndValue />
    </div>
  );
}

export default App;
