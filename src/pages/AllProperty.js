// import React, { useContext, useEffect, useState } from "react";
// import { Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Spinner from "../components/Spinner";
// import ToastContext from "../context/ToastContext";

// const AllProperty = () => {
//     const { toast } = useContext(ToastContext);
//     const [showModal, setShowModal] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [modalData, setModalData] = useState({});
//     const [property, setProperty] = useState([]);
//     const [searchInput, setSearchInput] = useState("");

//     // useEffect( async() => {
        
        
//     //     setLoading(true);
        
//     //     try {
//     //         const res = await fetch(`http://localhost:8000/api/registerProperty`, {
//     //             method: "GET",
//     //             headers: {
//     //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//     //             },
//     //         });
//     //         const result = await res.json();
//     //         if (!result.error) {
//     //             setProperty(result.property);
//     //             setLoading(false);
//     //         } else {
//     //             console.log(result);
//     //             setLoading(false);
//     //         }
//     //     } catch (err) {
//     //         console.log(err);
//     //     }
//     // }, []);

//     const deleteProperty = async (id) => {
//         if (window.confirm("Are you sure you want to delete this property?")) {
//             try {
//                 const res = await fetch(`http://localhost:8000/api/deleteProperty/${id}`, {
//                     method: "DELETE",
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 });
//                 const result = await res.json();
//                 if (!result.error) {
//                     setProperty(result.myProperty);
//                     toast.success("Deleted Property");
//                     setShowModal(false);
//                 } else {
//                     toast.error(result.error);
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();

//         const newSearchUser = property.filter((property) =>
//             property.name.toLowerCase().includes(searchInput.toLowerCase())
//         );
//         console.log(newSearchUser);
//         setProperty(newSearchUser);
//     };

//     return (
//         <>
//             <div>
//                 <h1>Your Properties</h1>
//                 <a href="/Myproperties" className="btn btn-danger my-2">
//                     Reload Properties
//                 </a>
//                 <hr className="my-4" />
//                 {loading ? (
//                     <Spinner splash="Loading Property..." />
//                 ) : (
//                     <>
//                         {property.length == 0 ? (
//                             <h3>No property created yet</h3>
//                         ) : (
//                             <>
//                                 <form className="d-flex" onSubmit={handleSearchSubmit}>
//                                     <input
//                                         type="text"
//                                         name="searchInput"
//                                         id="searchInput"
//                                         className="form-control my-2"
//                                         placeholder="Search Property"
//                                         value={searchInput}
//                                         onChange={(e) => setSearchInput(e.target.value)}
//                                     />
//                                     <button type="submit" className="btn btn-info mx-2">
//                                         Search
//                                     </button>
//                                 </form>

//                                 <p>
//                                     Your Total Properties: <strong>{property.length}</strong>
//                                 </p>
//                                 <table className="table table-hover">
//                                     <thead>
//                                         <tr className="table-dark">
//                                             <th scope="col">Title</th>
//                                             <th scope="col">area</th>
//                                             <th scope="col">Address</th>
//                                             <th scope="col">pincode</th>
//                                             <th scope="col">state</th>
//                                             <th scope="col">city</th>
//                                             <th scope="col">propertyType</th>
//                                             <th scope="col">upload</th>
//                                             <th scope="col">village</th>
//                                             <th scope="col">propertyCondition</th>
//                                             <th scope="col">busStandDistance</th>
//                                             <th scope="col">autoStandDistance</th>
//                                             <th scope="col">shopNearProperty</th>
//                                             <th scope="col">hospitalNearProperty</th>
//                                             <th scope="col">distFromMainRoad</th>
//                                             <th scope="col">schoolNearProperty</th>
//                                             <th scope="col">collegeNearProperty</th>
//                                             <th scope="col">mallNearProperty</th>
//                                             <th scope="col">purchaseDate</th>
//                                             <th scope="col">propertySize</th>
//                                             <th scope="col">unit</th>


//                                             {/* <th scope="col">Email</th>
//                                             <th scope="col">Phone</th> */}
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {property.map((property) => (
//                                             <tr
//                                                 key={property._id}
//                                                 onClick={() => {
//                                                     setModalData({});
//                                                     setModalData(property);
//                                                     setShowModal(true);
//                                                 }}
//                                             >
//                                                 <th scope="row">{property.title}</th>
//                                                 <td>{property.address}</td>
//                                                 <td>{property.pincode}</td>
//                                                 <td>{property.state}</td>
//                                                 <td>{property.city}</td>
//                                                 <td>{property.propertyType}</td>
//                                                 <td>{property.upload}</td>
//                                                 <td>{property.village}</td>
//                                                 <td>{property.propertyCondition}</td>
//                                                 <td>{property.busStandDistance}</td>
//                                                 <td>{property.autoStandDistance}</td>
//                                                 <td>{property.shopNearProperty}</td>
//                                                 <td>{property.hospitalNearProperty}</td>
//                                                 <td>{property.distFromMainRoad}</td>
//                                                 <td>{property.schoolNearProperty}</td>
//                                                 <td>{property.collegeNearProperty}</td>
//                                                 <td>{property.mallNearProperty}</td>
//                                                 <td>{property.purchaseDate}</td>
//                                                 <td>{property.propertySize}</td>
//                                                 <td>{property.unit}</td>


//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </>
//                         )}
//                     </>
//                 )}
//             </div>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalData.title}</Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body>
//                     <h3>{modalData.title}</h3>
//                     <p>
//                         <strong>Address</strong>: {modalData.address}
//                     </p>
//                     {/* <p>
//                         <strong>Email</strong>: {modalData.email}
//                     </p>
//                     <p>
//                         <strong>Phone Number</strong>: {modalData.phone}
//                     </p> */}
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Link className="btn btn-info" to={`/edit/${modalData._id}`}>
//                         Edit
//                     </Link>
//                     <button
//                         className="btn btn-danger"
//                         onClick={() => deleteProperty(modalData._id)}
//                     >
//                         Delete
//                     </button>
//                     <button
//                         className="btn btn-warning"
//                         onClick={() => setShowModal(false)}
//                     >
//                         Close
//                     </button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default AllProperty;
