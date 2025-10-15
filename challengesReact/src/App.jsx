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
      <Contact 
        img="./images/mr-whiskerson.png"
        alt="Photo of Mr. Whiskerson"
        name="Mr. Whiskerson"
        pNumber="(212) 555-1234"  
        email="test@gmail.com"
        />
      <Contact 
        img="./images/felix.png"
        name="Felix"
        alt="Photo of Mr. Felix"
        pNumber="(212) 525-1234"  
        email="test2@gmail.com"
      />
      <Contact 
        img="./images/pumpkin.png"
        name="Pumpkin"  
        alt="Photo of Mr. Pumpkin"
        pNumber="(212) 595-1234"  
        email="test@gmail.com"
      />
      <Contact 
        img="./images/fluffykins.png"
        name="Fluffykins"
        alt="Photo of Mr. Fluffykins"
        pNumber="(215) 555-1234"  
        email="test3@gmail.com"
      />
    </div>
  )
}

export default App
