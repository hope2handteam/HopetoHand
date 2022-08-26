import axios from "axios";
import { useState } from "react";
import { ServiceCard } from "./ServiceCard";

const GetUserPost = () => {

    const [request, setRequest] = useState();
    const [details, setDetails] = useState();

    
    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).token
        }`;
      }
      return req;
    });
    
    const user = JSON.parse(localStorage.getItem("profile"));
    
   
    const getRequestHandler = async () => {
        console.log("Clicked!")
        const response = await API.get("/getuseraccomodations");
        console.log(response.data);
        setDetails(response.data);
       setRequest("GET");
      };

      

      const removeAccomodation = async (id) => {
        try {
         

const response = await API.delete(`/deleteuseraccommodation/${id}`);
          console.log(response);
          getRequestHandler();
        } catch (error) {
          alert(error);
        }
      };
     
      if (!user?.token) {
        return  <div>You are not logged in</div>;
      
     };
      return (
        <>
        
        {/* <PostStatus/> */}
        <div>
          <h1>Click the button to get all users</h1>
          <button onClick={getRequestHandler}>GET!</button>
          {request 
            ? details.map((value) => {
                return (
                  <div key={value._id}>
                    {/* <img alt="myimage" src={value.image} width="50px" /> */}
                    <h3>
                    address: {value.address} | city: {value.city} | accomodation Type: {value.accomodationType} | numberOfPersons: {value.numberOfPersons}
                    </h3>
                    <div style={{ display: "inline" }}>
                      <small onClick={() => removeAccomodation(value._id)}>Delete</small>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <ServiceCard
        title="joseph"
        city="Cuiaba"
      
        />
        <ServiceCard
        title="brasil"
        city="Cuiaba"
      
        />
        <ServiceCard
        title="japao"
        city="Cuiaba"
      
        />
        
        </>
      );
    };
export default GetUserPost