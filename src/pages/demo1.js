// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// import AuthContext from "../context/AuthContext";
// import ToastContext from "../context/ToastContext";

// const PropertyRegister = () => {
//   const { toast } = useContext(ToastContext);
//   const { registerUser } = useContext(AuthContext);


//   // //switches 
//   const [switchValues, setSwitchValues] = useState({
//     switch1: false,
//     switch2: false,
//     switch3: false,
//     switch4: false,
//   });

//   const handleSwitchChange = (event) => {
//     setSwitchValues({
//       ...switchValues,
//       [event.target.name]: event.target.checked,
//     });
//   };
//   //date
//   const [dateValue, setDateValue] = useState("");

//   const handleDateChange = (event) => {
//     setDateValue(event.target.value);
//   };



//   const [credentials, setCredentials] = useState({
//     title: "", area: "", address: "", pincode: "", state: "", city: "",
//     propertyType: "", upload: "", village: "", propertyCondition: "",
//     busStandDistance: "", autoStandDistance: "", shopNearProperty: "",
//     hospitalNearProperty: "", distFromMainRoad: "", schoolNearProperty: "",
//     collegeNearProperty: "", mallNearProperty: "", purchaseDate: "",
//     propertySize: "", unit: ""
//   });



//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // if (
//     //   !credentials.email ||
//     //   !credentials.password ||
//     //   !credentials.confirmPassword
//     // ) {
//     //   toast.error("please enter all the required fields!");
//     //   return;
//     // }

//     // if (credentials.password !== credentials.confirmPassword) {
//     //   toast.error("password do not match!");
//     //   return;
//     // }

//     const userData = { ...credentials };
//     registerUser(userData);
//   };

//   return (
//     <>
//       <div className="container">
//         <h3> Register Property Here:-</h3>
//         <div className="container  border-dark">
//           <form onSubmit={handleSubmit}>
//             <div class="form-group">
//               <label htmlFor="titleInput" className="form-label mt-4 size=5 ">
//                 Title/Description
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="textInput"
//                 name="title"
//                 value={credentials.title}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="areaInput" className="form-label mt-4">
//                 Area
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="areaInput"
//                 aria-describedby="areaHelp"
//                 name="area"
//                 value={credentials.area}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="addressInput" className="form-label mt-4">
//                 Address
//               </label>
//               <input
//                 type="area"
//                 class="form-control"
//                 id="addressInput"
//                 aria-describedby="areaHelp"
//                 name="address"
//                 value={credentials.address}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pincodeInput" className="form-label mt-4">
//                 Pincode
//               </label>
//               <input
//                 type="pincode"
//                 class="form-control"
//                 id="pincodeInput"
//                 aria-describedby="pincodeHelp"
//                 name="pincode"
//                 value={credentials.pincode}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="StateInput" className="form-label mt-4">
//                 Enter State :-
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="stateInput"
//                 aria-describedby="stateHelp"
//                 name="state"
//                 value={credentials.state}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cityInput" className="form-label mt-4">
//                 Enter City :-
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="cityInput"
//                 aria-describedby="cityHelp"
//                 name="city"
//                 value={credentials.city}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="propertyTypeInput" className="form-label mt-4">
//                 Property Type?( House,Flat,Bunglow):-
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="propertyTypeInput"
//                 aria-describedby="propertyTypeHelp"
//                 name="propertyType"
//                 value={credentials.propertyType}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="uploadInput" className="form-label mt-4">
//                 Upload Photo
//               </label>
//               <input
//                 type="file"
//                 class="form-control"
//                 id="uploadInput"
//                 aria-describedby="uploadHelp"
//                 name="upload"
//                 value={credentials.upload}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="villageInput" className="form-label mt-4">
//                 Village
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="villageInput"
//                 aria-describedby="villageHelp"
//                 name="village"
//                 value={credentials.village}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="autoStandDistanceInput" className="form-label mt-4">
//                 AutoStand Distance from property in (Km):-
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 id="autoStandDistanceInput"
//                 aria-describedby="autoStandDistanceHelp"
//                 name="autoStandDistance"
//                 value={credentials.autoStandDistance}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="DistanceInput" className="form-label mt-4">
//                 Distance from property to mainroad(Km):-
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 id="DistanceInput"
//                 aria-describedby="DistanceHelp"
//                 name="distFromMainRoad"
//                 value={credentials.distFromMainRoad}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="propertySizeInput" className="form-label mt-4">
//                 Property Size
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 id="propertySizeInput"
//                 aria-describedby="propertySizeHelp"
//                 name="propertySize"
//                 value={credentials.propertySize}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="unitInput" className="form-label mt-4">
//                 Unit
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 id="unitInput"
//                 aria-describedby="unitHelp"
//                 name="unit"
//                 value={credentials.unit}
//                 onChange={handleInputChange}
//                 placeholder=""
//                 required
//               />
//             </div>
//             {/* ////////////////////// */}
//             <div className="form-group">
//               <label>
//                 IsPropertyType(New)
//                 <input
//                   type="checkbox"
//                   name="switch1"
//                   checked={switchValues.switch1}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="form-group">
//               <label>
//                 Shop near property:-
//                 <input
//                   type="checkbox"
//                   name="switch2"
//                   checked={switchValues.switch2}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="form-group">
//               <label>
//                 School near property:-
//                 <input
//                   type="checkbox"
//                   name="switch3"
//                   checked={switchValues.switch3}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="form-group">
//               <label>
//                 College near property:-
//                 <input
//                   type="checkbox"
//                   name="switch4"
//                   checked={switchValues.switch4}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="form-group">
//               <label>
//                 hospital near property:-
//                 <input
//                   type="checkbox"
//                   name="switch5"
//                   checked={switchValues.switch5}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="form-group">
//               <label>
//                 ShopingMall near property:-
//                 <input
//                   type="checkbox"
//                   name="switch6"
//                   checked={switchValues.switch6}
//                   onChange={handleSwitchChange}
//                 />

//               </label>

//             </div>
//             <div className="from-date">
//               <label>
//                 purchaseDate
//                 <input type="date" value={dateValue} onChange={handleDateChange} />
//               </label>
//             </div>






//             <input
//               type="submit"
//               value="Register"
//               className="btn btn-primary my-3"
//             />
//             <p>
//               Already have an account ? <Link to="/login">Login</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PropertyRegister;



