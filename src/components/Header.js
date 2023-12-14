import { useState } from "react";
const HeaderComponent = ()=> {
    const [loginButton,setLoginButton] = useState("Login");
    return (<div className="header-component">
        <h1>I am Header</h1>
        <button onClick={()=> {
          loginButton == "Login" ? setLoginButton("Logout") : setLoginButton("Login");
        }} className="login-button">{loginButton}</button>
    </div>)
}
export default HeaderComponent;