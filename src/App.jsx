import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <main>
      <section className="bg-gradient">
      <Navbar/>
      <Home />
      </section>

      <About />
      
    </main>
   
    </>
  )
}

export default App
