import Hobbies from "./hobbies"
import Experience from "./experience"
import Projects from "./projects"
import About from "./about"

const Information = () =>{


  return (
 <div className="m-8">
      <body>
        <section id="about">
          <About></About>
        </section>
        <section id="experience">
          <Experience></Experience>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        <section id="hobbies">
          <Hobbies></Hobbies>
        </section>
      </body>
      <footer></footer>
    </div>
  )
}

export default Information
