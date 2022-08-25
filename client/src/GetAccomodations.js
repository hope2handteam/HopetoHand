import axios from "axios";
import { useState } from "react";
import { MainHeader } from "./MainHeader";
import { Footer } from "./Footer";
// import PostStatus from "./PostStatus";

const GetAccomodations = () => {
    const [request, setRequest] = useState();
    const [details, setDetails] = useState();
  



    const getRequestHandler = async () => {
      const response = await axios.get("http://localhost:5000/getaccomodations");
      console.log(response.data.data);
      setDetails(response.data.data);
      setRequest("GET");
    };
  
    // const removeAccomodation = async (id) => {
    //   try {
    //     await axios.delete(`http://localhost:5000/deleteaccomodations/${id}`);
    //     console.log("USer deleted! ", id);
    //     getRequestHandler();
    //   } catch (error) {
    //     alert(error);
    //   }
    // };
  
    return (
      <>
      
      {/* <PostStatus/> */}
      <div>
        <h1>Click the button to get all users</h1>
        <button onClick={getRequestHandler}>GET</button>
        {request 
          ? details.map((value) => {
              return (
                <div key={value._id}>
                  {/* <img alt="myimage" src={value.image} width="50px" /> */}
                  <h3>
                  address: {value.address} | city: {value.city} | accomodation Type: {value.accomodationType} | numberOfPersons: {value.numberOfPersons}
                  </h3>
                  {/* <div style={{ display: "inline" }}>
                    <small onClick={() => removeAccomodation(value._id)}>Delete</small>
                  </div> */}
                </div>
              );
            })
          : ""}
      </div>
     
      </>
    );
  };
  
  export default GetAccomodations;