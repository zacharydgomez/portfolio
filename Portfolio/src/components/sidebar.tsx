
import Profiles from "./profileLinks"
import NavButton from "./navButtons"
const Sidebar = () =>{


  return (
   
            <div className="m-8">
        
        
        <body>
          <h1 className="text-3xl m-8">
            Zachary Gomez
          </h1>

          <h2 className="text-lg m-8">
            Software Engineer
          </h2>
          <p className= "m-8">
            I build projects for the internet.

          </p>

          <NavButton />
        </body>

        <footer><Profiles /></footer>
      </div>
  )
}

export default Sidebar

