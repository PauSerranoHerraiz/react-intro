import MyFirstComponent from "./components/MyFirstComponent"
import Header from "./components/Header"
import Footer from "./components/Footer"
import User from "./components/User"
import MovieList from "./components/MovieList"

function App() {

  return (
    <>
      <Header title="hello world" />
      <MovieList />
      <User firstName="Valentina" surname="Serrano" age={4} />
      <User firstName="Alguer" surname="Serrano" age={1} />
      <User firstName="Aleyda" surname="Casas" age={39} />

      <MyFirstComponent />


      <Footer />
    </>
  )
}

export default App
