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
  const [detailsHelp, setDetailsHelp] = useState();




  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:5000/getaccomodations");
    console.log(response.data.data);
    setDetails(response.data.data);
    setRequest("GET");
  };

  const getRequestHandlerHelp = async () => {
    const response = await axios.get("http://localhost:5000/gethelper");
    console.log(response.data.data);
    setDetailsHelp(response.data.data);
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
                  <MenuItem onClick={getRequestHandlerHelp} value="Helpers">Helpers</MenuItem>
                  <MenuItem value="Translation Service">
                    Translation Service
                  </MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className={styles.logoDiv}>
              <b className={styles.logoTitleB}>HOPE2HAND</b>
              <img className={styles.logoMainIcon} alt="" src="logomain7.svg" />
            </div>
          </div>
        </article>
      </form>

      {menu === "accommodation" ? (


        <div>
          <>

         
            <div className={styles.accommodationMainContainer}>
              <h2 className={styles.title}> Accommodation List:</h2>


              {request
                ? details?.map((value) => {
                  return (
                    //  <div className="img_card" >
                    //     <div className="main_container" key={value._id}>
                    //       <div className="img_acc" >   
                    <div className={styles.accommodationContainer} key={value._id}>
                      <div className={styles.detailsContainer}>
                        <div className={styles.contactPersonDetails}>
                          <p>contact Person: {value.contactPerson}</p>
                          <p>Phone Number: {value.contactNumber}</p>
                          <p>Email: {value.contactEmail}</p>
                        </div>
                        <div className={styles.accommodationDetails}>
                          <p>Accommodation Type: {value.accomodationType} </p>
                          <p>Number of Persons: {value.numberOfPersons}</p>
                          <p>Address: {value.address}, {value.city} </p>
                        </div>
                        <div className={styles.accommodationAvailable}>
                          <p>Available from: {value.startDate} </p>
                          <p>to: {value.endDate} </p>
                          <p>Status: <span> Available</span>  </p>
                        </div>
                      </div>
                      <div className={styles.accommodationImgContainer}>

                        {

                          value.image.length >= 0 ? (
                            value.image.map((img) =>


                              <img className={styles.accommodationImg} src={img} alt="" />

                            )
                          ) : "No image"


                        }


                      </div>
                    </div>


                  );
                })
                : ""}
            </div>



          </>
        </div>
      ) : menu === "Helpers" ? (
        <div>
          <div >
            <h1>Helper</h1>

            {request
              ? detailsHelp?.map((value) => {
                return (                 
                    <div  key={value._id}>
                      <div >
                      <p>Cooperation type: <span>{value.helpType}</span>  </p>
                      <p>Cooperation City: {value.cityHelp} </p>
                      <p>Organization: {value.orgHelp}</p>
                      <p>Language: {value.TypeOfLanguageHelp}</p>
                      <p>contact Person: {value.contactPersonHelp}</p>
                      <p>Phone Number: {value.contactNumberHelp}</p>
                      <p>Email: {value.contactEmailHelp}</p>
                      <p> Valid From: {value.startDateHelp} </p>
                      <p> to: {value.endDateHelp} </p>
                    
                    </div>          
                  </div>


                );
              })
              : ""}
          </div>

        </div>
      ) : menu === "Job" ? (
        <div> helpers</div>
      ) : menu === "Translation Service" ? (
        <div> Translation Service</div>
      ) : (
        menu == null
      )}

    </div>


  );
};

