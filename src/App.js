import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ContactFormHeader from './components/contactformheader/ContactFormHeader';
import ContactForm from './components/contactform/ContactForm';

function App() {
  return (
    <>
      <Navigation />
      <ContactFormHeader />
      <ContactForm/>
    </>
  );
}

export default App;
