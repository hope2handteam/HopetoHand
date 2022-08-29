import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Autocomplete,
  TextField,
  
  Select,
} from "@mui/material";
import styles from "./css/ProfileSection.module.css";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import GetAccomodations from "./GetAccomodations";
import axios from "axios";



export const ProfileSection = () => {
  const [menu, setMenu] = useState("");
  const [jobs, setJobs] = useState("");
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
  useState(null);
const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
  useState(null);
 
    const [request, setRequest] = useState();
    const [details, setDetails] = useState();
  
  
  
  
    const getRequestHandler = async () => {
      const response = await axios.get("http://localhost:5000/getaccomodations");
      console.log(response.data.data);
      setDetails(response.data.data);
      setRequest("GET");
    };

  return (
    <div className={styles.formContainer}>
      <form className={styles.profileSectionForm}>
        <img
          className={styles.imgSeekerFormIcon}
          alt=""
          src="imgseekerform@2x.png"
        />
        <article className={styles.formRegistrationBgArticle}>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <h5 className={styles.whatAreYouLookingFor}>
                What are you looking for ?
              </h5>
              <FormControl
                className={styles.inputFormControl}
                sx={{ width: 307 }}
                variant="outlined"
              >
                <InputLabel color="secondary">Select Here</InputLabel>
                <Select
                  onChange={(e) => setMenu(e.target.value)}
                  color="secondary"
                  size="2x"
                  label="Select Here"
                >
                  <MenuItem onClick={getRequestHandler} value="accommodation">Accommodation</MenuItem>
                  <MenuItem value="Jobs">Jobs</MenuItem>
                  <MenuItem value="Helpers">Helpers</MenuItem>
                  <MenuItem value="Translation Service">
                    Translation Service
                  </MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className={styles.logoDiv}>
              <b  className={styles.logoTitleB}>HOPE2HAND</b>
              <img className={styles.logoMainIcon} alt="" src="logomain7.svg" />
            </div>
          </div>
        </article>
      </form>

      {menu === "accommodation" ? (
        // <div className={styles.accommodationDiv}>
        //   <div className={styles.accommodationCont}>
        //     <div className={styles.accommodationDetails}>

        //       <div className={styles.acInfo}>
        //       <p>AccomodationType: <span> BakendIfo</span></p>
        //       <p> Number of Persons: <span> BakendIfo</span> </p>
        //      </div>

        //       <div className={styles.acInfo}>
        //         <p> city: <span> BakendIfo</span></p>
 
        //         <p>Street: <span> BakendIfo</span></p></div>
 
        //       <div className={styles.acInfo}>
        //         <p>  Contact Person: <span> BakendIfo</span></p>
        //         <p> Tell: <span> BakendIfo</span></p>  
        //       </div>

        //       <div className={styles.acInfo}>
        //         <p> Last Active: <span> BakendIfo</span> </p>
        //       </div>

        //     </div>
          
           
        //       <img
        //         src="https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        //         alt=""
        //       />
        //       <img
        //         src="https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        //         alt=""
        //       />
        //       <img
        //         src="https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        //         alt=""
        //       />
        //       <img
        //         src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        //         alt=""
        //       />
        //           </div>
        //    <div>
        //   </div>
        // </div>
        <div>
         <>

{/* <PostStatus/> */}
<div className="main_acc">
  <h1>Accommodations</h1>
 
  {request
    ? details.map((value) => {
      return (
       <div className="img_card" >
          <div className="main_container" key={value._id}>
            <div className="img_acc" >   
            {

value.image.length >= 0 ? (
  value.image.map((img) => 
  <img src={img} alt="" />
  
  )
) : "No image"


            }           
            ` </div>
           
              <div className="acc_info">
                <p>City: {value.city} </p>
                <p>Address: {value.address}</p>
                <p>Accomodation Type: {value.accomodationType} </p>
                <p>Number of Persons: {value.numberOfPersons}</p>
                <p>Email: {value.contactEmail}</p>
                <p>contact: {value.contactPerson}</p>
                <p>Phone Number: {value.contactNumber}</p>
                <h3>Availability</h3>
                <p> From: {value.startDate}  </p>
                <p> to: {value.endDate}  </p>
                 
              </div>
              {/* <div style={{ display: "inline" }}>
              <small onClick={() => removeAccomodation(value._id)}>Delete</small>
            </div> */}
            </div>
          
            </div>
      );
    })
    : ""}
</div>

</>
        </div>
      ) : menu === "Jobs" ? (
        <div> jobs</div>
      ) : menu === "Helpers" ? (
        <div> helpers</div>
      ) : menu === "Translation Service" ? (
        <div> Translation Service</div>
      ) : (
        menu == null
      )}
    </div>

  );
};

