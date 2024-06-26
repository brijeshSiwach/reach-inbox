
import './App.css'
import getGoogleOAuthURL from './utils/getGoogleUrl'

function App() {
  
  // const clickHandler = () => {
  //   console.log("clicked")
  // }



  return (
    <>

      <div className="google" > 
        <a href={getGoogleOAuthURL()}> Login with Google </a> 
      </div>
      {/* <button className="outlook" onClick={clickHandler}> Sign In With outlook </button> */}
    </>
  )
}

export default App
