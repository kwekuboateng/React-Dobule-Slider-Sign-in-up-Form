const container = document.querySelector(".s-container");

class App extends React.Component{
 
  componentDidMount(){
    const container = document.querySelector(".container");
    const signUpBtn = document.getElementById("signUp");
  
    signUpBtn.addEventListener("click", () => {
      // alert('hello');
      container.classList.add("right-panel-active")
    })
    
     const signInBtn = document.getElementById("signIn");
    
     signInBtn.addEventListener("click", () => {
       
      container.classList.remove("right-panel-active")
    })
  }
  
  
  render(){
    return (
      <div className="container" >
          <div className="form-container sign-up-container">
             <Signup />
          </div>
          <div className="form-container sign-in-container">
              <Signin />
          </div>
          <div className="overlay-container">
             <Overlay />
          </div>
      </div>
    )
  }
}

function Signup(props) {
  return (
    <form action="">
        <h1>Create Account</h1>
        
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
    </form>
  )
}

function Signin (props) {
  return (
     
    <form action="">
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a >Forgot your password?</a>
        <button>Sign In</button>
    </form>

  )
}

const Button = () => {
  
}

const Overlay = () => {
  return (
    <div class="overlay">
        <div class="overlay-panel overlay-left">
            <h1>Already have an account?</h1>
            <p>
                Login to access your dashboard and experience the power of the web.
            </p>
            <button class="ghost" id="signIn">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
            <h1>Don't have an account?</h1>
            <p>Create an account and let's begin a new journey</p>
            <button class="ghost" id="signUp">Sign Up</button>
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
