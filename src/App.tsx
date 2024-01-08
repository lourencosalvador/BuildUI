import { Link } from "react-router-dom";
import './global.css'
import React, { useState } from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

function App() {
  const [userName, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [profilePic, setProfilePic] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("profileObj" in response) {
      const { profileObj: { name, email: userEmail, imageUrl } } = response as GoogleLoginResponse;
      setName(name);
      setEmail(userEmail);
      setProfilePic(imageUrl);
      setIsLoggedIn(true);
    } else {
      console.error("Offline response or unexpected response received:", response);
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#000] overflow-hidden">
        <h1 className="text-white text-[30px] font-bold absolute top-5 left-8">Build<span className="text-violet-600">UI</span></h1>
        <div className="absolute top-[60%] left-[600px] w-auto h-auto z-10">
        <GoogleLogin
				clientId="412601487645-rrk2a43bg83snouh3tssht7jpsuh5hd4.apps.googleusercontent.com"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
			{isLoggedIn ? (
				<div  className="text-center text-white">
					<h1>User Information</h1>
					<img className="profile" src={profilePic} alt="Profile" />
					<p>Name: {userName}</p>
					<p>Email: {email}</p>
				</div>
			) : (
				""
			)}
        </div>
        <h1
         className="text-white font-semibold text-[50px] text-center mt-[200px]"
        >Faça o seu Login! E começa <br /> a a sua <span className="textR text-violet-600">criatividade</span></h1>
        <div className="relative top-[-450px]">
          <img src="/bola.svg"  />
        </div>
        
		
      </div>
    </>
  );
}

export default App;
