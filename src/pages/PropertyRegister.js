
// import { useNavigate } from "react-router-dom";
// import React, { useContext, useEffect, useState } from "react";
// import ToastContext from "../context/ToastContext";


// const PropertyRegister = () => {
//     const [propertyRegister, setpropertyRegister] = useState({ title: "", area: "", address: "", pincode: "", state: "", city: "", propertyType: "", upload: "", village: "", propertyCondition: "", busStandDistance: "", autoStandDistance: "", shopNearProperty: "", hospitalNearProperty: "", distFromMainRoad: "", schoolNearProperty: "", collegeNearProperty: "", mallNearProperty: "", purchaseDate: "", propertySize: "", unit: "" });

//     const [records, setRecords] = useState([]);

//     const { toast } = useContext(ToastContext);



//     // const navigate = useNavigate();




//     const handlePropChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         console.log(name, value);
//         setpropertyRegister({ ...propertyRegister, [name]: value });
//     }


//     const handleSubmit = async (event) => {

//         event.preventDefault();

//         const newRecords = { ...propertyRegister, id: new Date().getTime().toString() };
//         console.log(records)
//         setRecords([...records, newRecords])

//         const res = await fetch(`http://localhost:8000/api/registerProperty`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//             body: JSON.stringify(PropertyRegister),
//         });
//         const result = await res.json();
//         if (!result.error) {
//             toast.success(`Created [${PropertyRegister.title}] Property`);

//             setpropertyRegister({ title: "", area: "", address: "", pincode: "", state: "", city: "", propertyType: "", upload: "", village: "", propertyCondition: "", busStandDistance: "", autoStandDistance: "", shopNearProperty: "", hospitalNearProperty: "", distFromMainRoad: "", schoolNearProperty: "", collegeNearProperty: "", mallNearProperty: "", purchaseDate: "", propertySize: "", unit: "" });
//         } else {
//             toast.error(result.error);
//         }
//         setpropertyRegister(result);

//     };





//     return (
//         <>
//             <div className="container my-3" id="usersInfo">
//                 <h3 className="my-3"> Register Property Here:-</h3>
//                 <form action="">
//                     <div className="row">
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputTitle" className="form-label">
//                                     Discription
//                                 </label>
//                                 <input
//                                     type="text"
//                                     onChange={handlePropChange}
//                                     name="title"
//                                     value={propertyRegister.title}
//                                     className="form-control"
//                                     id="exampleInputTitle"
//                                     placeholder="  "
//                                 />
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputArea" className="form-label">
//                                     Area
//                                 </label>
//                                 <input
//                                     type="area"
//                                     onChange={handlePropChange}
//                                     name="area"
//                                     value={propertyRegister.area}
//                                     className="form-control"
//                                     placeholder="In which area Property is situated? "
//                                     id="exampleInputArea"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputAddress" className="form-label">
//                                     Address
//                                 </label>
//                                 <textarea
//                                     type="text"
//                                     onChange={handlePropChange}
//                                     name="address"
//                                     value={propertyRegister.address}
//                                     className="form-control"
//                                     rows="2"
//                                     placeholder="enter your address"
//                                     id="exampleInputAddress"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputPincode" className="form-label">
//                                     Pincode
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.pincode}
//                                     name="pincode"
//                                     className="form-control"
//                                     placeholder="Enter Pincode"
//                                     id="exampleInputPincode"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="col">

//                             <div className="dropdown-container">
//                                 <label className="dropdown-label" htmlFor="flag-permission">
//                                     Enter City :-
//                                 </label>
//                                 <input
//                                     id="flag-permission"
//                                     value={propertyRegister.city}
//                                     onChange={handlePropChange}
//                                     className="dropdown-select"
//                                     required
//                                     name="city"
//                                 >



//                                 </input>

//                             </div>
//                         </div>

//                         {/* ggggggggggggggggg */}
//                         <div className="col">
//                             <div className="dropdown-container">
//                                 <label className="dropdown-label" htmlFor="flag-permission">
//                                     Enter State :-
//                                 </label>
//                                 <input
//                                     id="flag-permission"
//                                     value={propertyRegister.state}
//                                     name="state"
//                                     onChange={handlePropChange}
//                                     className="dropdown-select"
//                                     required
//                                 ></input>




//                             </div>
//                         </div>
//                         <div className='col'>
//                             <div className="dropdown-container">
//                                 <label className="dropdown-label" htmlFor="flag-permission">
//                                     Property Type?( House,Flat,Bunglow):-
//                                 </label>
//                                 <input
//                                     id="flag-permission"
//                                     value={propertyRegister.propertytype}
//                                     name="propertyType"
//                                     onChange={handlePropChange}
//                                     className="dropdown-select"
//                                     required
//                                 >



//                                 </input>
//                             </div>
//                         </div>

//                     </div>
//                     <br />
//                     <div className="row" >
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputUploadphoto" className="form-label">
//                                     Upload Photo
//                                 </label>
//                                 <input type="file" value={propertyRegister.photo} onChange={handlePropChange} name="photo" />
//                             </div>
//                         </div>
//                         {/* /////////////////// */}



//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputVillage" className="form-label">
//                                     Village:-
//                                 </label>
//                                 <input
//                                     type="text"
//                                     onChange={handlePropChange}
//                                     name="village"
//                                     value={propertyRegister.village}
//                                     className="form-control"
//                                     id="exampleInputVillage"
//                                     placeholder="Enter your village"
//                                 />
//                             </div>
//                         </div>

//                         {/* //////////////////////////////// */}
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputdistance" className="form-label">
//                                     AutoStand Distance from property in (Km):-
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     name="autodistance"
//                                     value={propertyRegister.autoDistance}
//                                     className="form-control"
//                                     id="exampleInputdistance"
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     {/* ////////////////////////////////////////////////////////////// */}
//                     <div className="row">
//                         <div className="col">
//                             <div className="form-check form-switch">
//                                 <label className="form-label" htmlFor="exampleShop">Shop near property:-</label>
//                                 <input className="form-control"
//                                     onChange={handlePropChange}
//                                     name="shop"
//                                     value={propertyRegister.shop}
//                                     type="text"

//                                     id="exampleShop" />
//                             </div>

//                         </div>
//                         <div className="col">
//                             <div className="form-check form-switch">
//                                 <label className="form-label" htmlFor="exampleShop">School near property:-</label>
//                                 <input className="form-control"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.school}
//                                     name="school"
//                                     type="text"

//                                     id="exampleShop" />

//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="form-check form-switch">
//                                 <label className="form-label" htmlFor="exampleCollege">College near property:-</label>
//                                 <input className="form-control"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.college}
//                                     name="college"
//                                     type="text" id="exampleCollege" />

//                             </div>
//                         </div>

//                     </div>


//                     <div className="row">
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputdistance" className="form-label">
//                                     Distance from property to mainroad:-
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.road}
//                                     name="road"
//                                     className="form-control"
//                                     id="exampleInputdistance"
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputSize" className="form-label">
//                                     Property Size
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.propertySize}
//                                     name="propertySize"
//                                     className="form-control"
//                                     id="exampleInputSize"
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputUnit" className="form-label">
//                                     Units(Quantity)
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.units}
//                                     name="units"
//                                     className="form-control"
//                                     id="exampleInputUnit"
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>

//                         {/* //////////////switches */}
//                         <div className="form-check form-check-inline">
//                             <label className="form-check-label" htmlFor="examplenewold">PropertyType(New or Old)</label>
//                             <input className="form-control"
//                                 onChange={handlePropChange}
//                                 value={propertyRegister.newold}
//                                 name="newold"
//                                 type="text"
//                                 id="examplenewold" />


//                         </div>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label htmlFor="exampleInputdistance" className="form-label">
//                                     BusStand Distance from property:-
//                                 </label>
//                                 <input
//                                     type="number"
//                                     onChange={handlePropChange}
//                                     value={propertyRegister.bus}
//                                     name="bus"
//                                     className="form-control"
//                                     id="exampleInputdistance"
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>

//                         <div className="text-center my-3">
//                             <button
//                                 type="button"
//                                 // name="submit"
//                                 // value={submit}
//                                 className="btn btn-primary "
//                                 onClick={handleSubmit}
//                             >
//                                 Submit
//                             </button>


//                         </div>

//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default PropertyRegister;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const PropertyRegister = (props) => {
  const { toast } = useContext(ToastContext);
  const { registerProperty } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    title: "",
    // area: "", address: "", pincode: "", state: "", city: "",
    // propertyType: "", upload: "", village: "", propertyCondition: "",
    // busStandDistance: "", autoStandDistance: "", shopNearProperty: "",
    // hospitalNearProperty: "", distFromMainRoad: "", schoolNearProperty: "",
    // collegeNearProperty: "", mallNearProperty: "", purchaseDate: "",
    // propertySize: "", unit: ""
  });

  const handleInputChange = (event) => {
    const { title, value } = event.target;

    setCredentials({ ...credentials, [title]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !credentials.title
    ) {
      toast.error("please enter all the required fields!");
      return;
    }
    const PropertyData = { ...credentials, propertyType: undefined };
    registerProperty(PropertyData);
  };


  // //switches 
  // const [switchValues, setSwitchValues] = useState({
  //   switch1: false,
  //   switch2: false,
  //   switch3: false,
  //   switch4: false,
  //   switch5: false,
  //   switch6: false,
  // });

  return (
    <>
      
      <div className="container " style={{
          width: 900,
          height: 2200,
          backgroundColor: 'powderblue',
        }} >
          <h3>Register Property </h3>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Title/Discription
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              title="title"
              value={credentials.title}
              onChange={handleInputChange}
              placeholder=""
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Area
            </label>
            <input
              type="area"
              class="form-control"
              id="areaInput"
              title="area"
              value={credentials.area}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              title="address"
              value={credentials.address}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincodeInput"
              title="pincode"
              value={credentials.pincode}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="stateInput"
              title="state"
              value={credentials.state}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="cityInput"
              title="city"
              value={credentials.city}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Property Type
            </label>
            <input
              type="text"
              className="form-control"
              id="propertyTypeInput"
              title="propertyType"
              value={credentials.propertyType}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="uploadInput" className="form-la mt-4" >
              Upload Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="uploadInput"
              aria-describedby="uploadHelp"
              title="upload"
              value={credentials.upload}
              onChange={handleInputChange}
              placeholder="Upload Property Photos"
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Village
            </label>
            <input
              type="text"
              className="form-control"
              id="villageInput"
              title="village"
              value={credentials.village}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              AutoStand Distance in KM
            </label>
            <input
              type="text"
              className="form-control"
              id="autoStandDistanceInput"
              title="autoStandDistance"
              value={credentials.autoStandDistance}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Distance from Property to Main Road
            </label>
            <input
              type="text"
              className="form-control"
              id="distFromMainRoadInput"
              title="distFromMainRoad"
              value={credentials.distFromMainRoad}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Propert Size
            </label>
            <input
              type="text"
              className="form-control"
              id="propertySizeInput"
              title="propertySize"
              value={credentials.propertySize}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Unit
            </label>
            <input
              type="text"
              className="form-control"
              id="unitInput"
              title="unit"
              value={credentials.unit}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Propert Type
            </label>
            <input
              type="text"
              className="form-control"
              id="propertyTypeInput"
              title="propertyType"
              value={credentials.propertyType}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Shop Near Property
            </label>
            <input
              type="text"
              className="form-control"
              id="shopNearPropertyInput"
              title="shopNearProperty"
              value={credentials.shopNearProperty}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              School Near Property
            </label>
            <input
              type="text"
              className="form-control"
              id="schoolNearPropertyInput"
              title="schoolNearProperty"
              value={credentials.schoolNearProperty}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              College Near Property
            </label>
            <input
              type="text"
              className="form-control"
              id="collegeNearPropertyInput"
              title="collegeNearProperty"
              value={credentials.collegeNearProperty}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Hospital Near Property
            </label>
            <input
              type="text"
              className="form-control"
              id="hospitalNearPropertyInput"
              title="hospitalNearProperty"
              value={credentials.hospitalNearProperty}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Shopping Mall Near Property
            </label>
            <input
              type="text"
              className="form-control"
              id="shopNearPropertyInput"
              title="shopNearProperty"
              value={credentials.shopNearProperty}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <div className="form-group">
            <label Htmlfor="nameInput" className="form-label mt-4">
              Purchase Date
            </label>
            <input
              type="text"
              className="form-control"
              id="purchaseDateInput"
              title="purchaseDate"
              value={credentials.purchaseDate}
              onChange={handleInputChange}
             
              required
            />
          </div>
          <input
            type="submit"
            value="register"
            className="btn btn-primary my-3 mt-4"
          />
        </form>
      </div>
    </>
  );
};

export default PropertyRegister;
