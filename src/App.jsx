import MyFirstComponent from "./components/MyFirstComponent"
import Header from "./components/Header"
import Footer from "./components/Footer"
import User from "./components/User"
import MovieList from "./components/MovieList"

function App() {

  return (
    <>
      <Header title="hello world" />

      <User firstName="Valentina" surname="Serrano Casas" age={4} />
      <User firstName="Alguer" surname="Serrano Casas" age={1} />
      <User firstName="Aleyda" surname="Casas Miró" age={39} />
      <MovieList />
      <MyFirstComponent />


      <Footer />
    </>
  )
}

export default App
