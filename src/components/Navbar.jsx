	import React, { useState, useEffect } from 'react';
	import { useMediaQuery } from 'react-responsive';
	import { RxHamburgerMenu } from "react-icons/rx";
	import { BrowserRouter, Routes, Route, NavLink,} from "react-router-dom";
	import Dashboard from './Dashboard.jsx';
	import PrivateRoute from './PrivateRoute.js';
	import Forgotpassword from "./Forgotpasswords.jsx";
	import UpdateProfile from "./Updateprofile.jsx";
	import Chatbot from "./Chatbot.jsx";
	import ChatWithImageUpload from "./ChatWithImageUpload.jsx";
	import Croprecommend from "./Croprecommend.jsx";
	import Home from "./Home.jsx";
	import Loginsignup from "./Loginsignup.jsx";
	import './Navbar.css'
	import MarketPlace from "./MarketPlace/MarketPlace.jsx";
	import { auth} from '../firebase'; 
	function Navbar() {
		const [loggedIn,setLoggedIn]=useState(false);
		const [imagePreview, setImagePreview] = useState(null); // State to store the image preview URL
		const [displayName,setDisplayName]=useState(null)
		const isMobile = useMediaQuery({ maxWidth: 920 });
		const [menuVisible, setMenuVisible] = useState(false);
		const defaultPhotoUrl = "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"; // Default profile photo URL
		const toggleMenu = () => {
    
			setMenuVisible(!menuVisible);
		};
		useEffect(() => {
			const user = auth.currentUser;
			if (user) {
			setLoggedIn(!!user);
			setImagePreview(user.photoURL || defaultPhotoUrl);
			setDisplayName(user.displayName || "Profile");
			}
		}, [auth.currentUser]);// Empty dependency array ensures it runs only once

		return (
			<> 
				<BrowserRouter>
					{!isMobile &&
					<div  style={{ display:"flex", background: "black", padding: "5px 0 5px 5px", fontSize: "20px", alignItems: "center",    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
						<div style={{ margin: "10px" }}>
							<NavLink to="/" className={"Home"} style={({ isActive }) => ({color: isActive ? "greenyellow": "white",})}> Farm App </NavLink>
						</div>
						<div className='droplinks' style={{display:"flex", flexDirection:"row"}}>
						<div style={{ margin: "10px" }}>
							<NavLink to="/services" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white",})}> Chatbot </NavLink>
						</div>
						<div style={{ margin: "10px" }}>
							<NavLink to="/disease" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white",})}> Services </NavLink>
						</div>
						<div style={{ margin: "10px" }}>
							<NavLink to="/recommend" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })}> Crop Recommendation </NavLink>
						</div> 
						<div style={{margin:"10px"}}>
							<NavLink to="/market" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })}> Market </NavLink>
						</div>
						</div>
						<div style={{flexGrow:10}}>
						</div>
					<div>
						{loggedIn && 
						<div style={{ margin: "10px" }}>
							<NavLink to="/dashboard" className={"nav-profile"} style={({ isActive }) => ({ color: isActive ? "rgb(255,238,0)" : "white", })}> {displayName} <img src={imagePreview}/> </NavLink>
						</div>
						}
						{!loggedIn &&
							<div style={{ margin: "10px" }}>
							<NavLink to="/loginsignup" className={"Signup"} style={({ isActive }) => ({ color: isActive ? "rgb(255,238,0)" : "white", })}> Signin/Signup</NavLink>
						</div>
						}
					</div>
					</div>
					}

					{isMobile && 
					<div  style={{  background: "black", fontSize: "20px", alignItems: "center",    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
						<div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
							<div style={{display:"flex",flexDirection:"row",}}>
							<div style={{ margin:"10px" }}>
								<RxHamburgerMenu onClick={toggleMenu} color='white' size={20}/>
         				 	</div>
							<div style={{ marginLeft: "10px" ,marginTop: "10px", marginBottom:"10px"	  }}>
								<NavLink to="/" className={"Home"} style={({ isActive }) => ({color: isActive ? "greenyellow": "white",})}> Farm App </NavLink>
							</div>
							</div>
							{loggedIn && 
								<div style={{ margin: "10px" }}>
									<NavLink to="/dashboard" className={"nav-profile"} style={({ isActive }) => ({ color: isActive ? "rgb(255,238,0)" : "white", })}> {displayName} <img src={imagePreview}/> </NavLink>
								</div>
							}
							{!loggedIn &&
								<div style={{ margin: "10px" }}>
									<NavLink to="/loginsignup" className={"Signup"} style={({ isActive }) => ({ color: isActive ? "rgb(255,238,0)" : "white", })}> Signin/Signup</NavLink>
								</div>
							}
						
						</div>
						{ menuVisible &&
						<div onChange={toggleMenu} className='droplinks'>
						<div style={{ margin: "10px" }}>
							<NavLink to="/services" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white",})}> Chatbot </NavLink>
						</div>
						<div style={{ margin: "10px" }}>
							<NavLink to="/disease" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white",})}> Services </NavLink>
						</div>
						<div style={{ margin: "10px" }}>
							<NavLink to="/recommend" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })}> Crop Recommendation </NavLink>
						</div> 
						<div style={{margin:"10px"}}>
							<NavLink to="/market" className={"navlinks"} style={({ isActive }) => ({ color: isActive ? "greenyellow" : "white", })}> Market </NavLink>
						</div>
						</div>
						}
					</div>
					}

					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/services" element={<Chatbot />} />
						<Route exact path="/disease" element={<ChatWithImageUpload />} />
						<Route exact path="/recommend" element={<Croprecommend />} />
						<Route exact path="/market" element={<MarketPlace />} />
						<Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
						<Route exact path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
						<Route exact path="/loginsignup" element={<Loginsignup/>} />
						<Route exact path="/forgot-password" element={<Forgotpassword />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}

	export default Navbar;
