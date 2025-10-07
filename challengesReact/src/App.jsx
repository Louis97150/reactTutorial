import Main from './components/Main'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {

  // Small challenge:
  // const firstName = "Louis";
  // const lastName = "Duong";

  // const hours = new Date().getHours()%12;
  // let message = "";

  // if (hours < 12) {
  //   message= "Morning";
  // } else if (hours >= 12 && hours < 17) {
  //   message="Afternoon";
  // } else {
  //   message="Evening";
  // }

  return (
    <div className="contacts">
      {/* <h1>Good {message}</h1> */}
      {/* <h1> Hello {firstName} {lastName} </h1> */}
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  )
}

export default App
