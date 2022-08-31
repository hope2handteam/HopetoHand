import axios from "axios";
import { useState, useEffect } from "react";


const GetUserPostHelp = () => {

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
        const response = await API.get("/getuserhelp");
        console.log(response.data);
        setDetails(response.data);
       setRequest("GET");
      };

useEffect( () => {
  getRequestHandler();        
},[]);
      

      const removeHelp = async (id) => {
        try {
         

const response = await API.delete(`/deleteuserhelp/${id}`);
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
          <h1>Help</h1>         
          {request 
            ? details.map((value) => {
                return (
                  <div key={value._id}>
                    {/* <img alt="myimage" src={value.image} width="50px" /> */}
                    <h3>
                    address: {value.addressHelp} | city: {value.cityHelp} | accomodation Type: {value.contactPersonHelp} | numberOfPersons: {value.TypeOfLanguageHelp}
                    </h3>
                    {/* {value.image.map((img) => {
                      
                      return (
                        <img src={img} alt="" />
                      )}
                    )} */}
                    <div style={{ display: "inline" }}>
                      <small onClick={() => removeHelp(value._id)}>Delete</small>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        {/* {data.map((value) => {
          return (
            <ServiceCard
              key={value._id}
              Image={value.image}
              title={value.title}
              city={value.city}
              heartIcon={value.heartIcon}
              h2={value.h2}
            />
          );
        } */}
        {/* <ServiceCard
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
      
        /> */}
        
        </>
      );
    };
export default GetUserPostHelp