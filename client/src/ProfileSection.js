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
import BootstrapCarouselComponent from "./BootstrapCarouselComponent.js";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




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
      const response = await axios.get("http://localhost:5000/gethelp");
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
              <b  className={styles.logoTitleB}>HOPE2HAND</b>
              <img className={styles.logoMainIcon} alt="" src="logomain7.svg" />
            </div>
          </div>
        </article>
      </form>

      {menu === "accommodation" ? (
        
       
        <div>
         <>

{/* <PostStatus/> */}
<div className="main_acc">
  <h1 className="title_acc">Accommodations</h1>
 
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
               </div>         
             </div>
           
              <div className="acc_info">
                <div className="availability">
                <h3>Availability</h3>
                <p> From: {value.startDate}  </p>
                <p> to: {value.endDate}  </p>
                </div>
                <div className="place">
                <p>City: {value.city} </p>
                <p>Address: {value.address}</p>
                </div>
                <div>
                <p>Accomodation Type: {value.accomodationType} </p>
                
                
                <p>Number of Persons: {value.numberOfPersons}</p>
                </div>
                
                <div className="contact_info">
                <p>Email: {value.contactEmail}</p>
                <p>contact: {value.contactPerson}</p>
                <p>Phone Number: {value.contactNumber}</p>
                </div>
              </div>
              
              {/* <div style={{ display: "inline" }}>
              <small onClick={() => removeAccomodation(value._id)}>Delete</small>
            </div> */}
         
          
            </div>
            
            
      );
    })
    : ""}
</div>
{/* <div>
                <div style={{width:"500px"}} className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>React Bootstrap Carousel</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
 
                                <Carousel.Item>
                                    <img 
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
 
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />
 
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
 
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
 
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div> */}
          

</>
        </div>
      ) : menu === "Jobs" ? (
        <div> 
          <div className="main_acc">
  <h1>Accommodations</h1>
 
  {request
    ? detailsHelp.map((value) => {
      return (
       <div className="img_card" >
          <div className="main_container" key={value._id}>
            <div className="img_acc" >   
            {/* {

value.image.length >= 0 ? (
  value.image.map((img) => 
  <img src={img} alt="" />
  
  )
) : "No image"


            }            */}
             </div>
           
              
                <div>
                <h3 className="availability">Availability</h3>
                <span className="availability_span">
                <p> From: {value.startDate}  </p>
                <p> to: {value.endDate}  </p>
                </span>
                </div>
                <p>City: {value.city} </p>
                <p>Address: {value.address}</p>
                <p>Accomodation Type: {value.helpType} </p>
                <p>Number of Persons: {value.numberOfPersons}</p>
                <p>Email: {value.contactEmail}</p>
                <p>contact: {value.contactPerson}</p>
                <p>Phone Number: {value.contactNumber}</p>
              </div>
              {/* <div style={{ display: "inline" }}>
              <small onClick={() => removeAccomodation(value._id)}>Delete</small>
            </div> */}
            </div>
          
            
      );
    })
    : ""}
</div>

        </div>
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

