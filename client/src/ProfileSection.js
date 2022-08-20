import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./css/ProfileSection.module.css";
import { useState } from "react";



export const ProfileSection = () => {
  const [menu, setMenu]= useState("")
 



  
  return (
    <div className={styles.dropDownContainer}>
      <form className={styles.profileSectionForm} method="post">
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
                <Select onChange={e=> setMenu(e.target.value)} color="secondary" size="2x" label="Select Here">
                  <MenuItem id="menuItem1" value="Accommodation">
                    Accommodation
                  </MenuItem>

                  <MenuItem id="menuItem2" value="Jobs">
                    Jobs
                  </MenuItem>

                  <MenuItem id="menuItem3" value="Helpers">
                    Helpers
                  </MenuItem>

                  <MenuItem id="menuItem4" value="Translation Service">
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

{menu === "Accommodation" ? (<div className={styles.accommodation}>
        <div className={styles.accommodationInfo}>
          <h3>
            Accomodation Type:{" "}
            <span className={styles.spanStyle}>backend Info</span>
          </h3>
          <h3>
            Number Of Persons:{" "}
            <span className={styles.spanStyle}>backend Info</span>
          </h3>
          <h3>
            Address: <span className={styles.spanStyle}>street and number</span>{" "}
            <span className={styles.spanStyle}>city</span>
          </h3>
        </div>

        <div className={styles.accommodationAvail}>
          <h3>
          availability From:{" "}
            <span className={styles.spanStyle}>Date, backend Info</span>
          </h3>
          <h3>
          Availability To:{" "}
            <span className={styles.spanStyle}>Date, backend Info</span>
          </h3>
          <h3>
            Available status: <span className={styles.spanStyle}>backend Info</span>{" "}
            <span className={styles.spanStyle}>city</span>
          </h3>
        </div>

        <div className={styles.contactPersonInfo}>
          <h3>
            Contact Person Name:{" "}
            <span className={styles.spanStyle}>backend Info</span>
          </h3>
          <h3>
            Mobile Number:{" "}
            <span className={styles.spanStyle}>backend Info</span>
          </h3>
          <h3>
            Email: <span className={styles.spanStyle}>street and number</span>{" "}
            <span className={styles.spanStyle}>city</span>
          </h3>
        </div>

        <div className={styles.accommodationPics}>
<img className={styles.acomImg} src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
<img className={styles.acomImg} src="https://images.unsplash.com/photo-1572986564625-2feb29fbb77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
<img className={styles.acomImg} src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
<img className={styles.acomImg} src="https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
<img className={styles.acomImg} src="https://images.unsplash.com/photo-1575245959159-3d4fedfa465a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
           
        </div>

      </div>) : menu === "Jobs" ? <div>
       
      </div> : menu === "Helpers" ? <div>Helpers data</div> : menu === "Translation Service" ? <div>Translation Service</div> : null}
      
    </div>
    
  );
};
