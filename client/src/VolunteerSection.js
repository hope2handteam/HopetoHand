import { useState } from "react";
import {
  
  Select,
  MenuItem,
  TextField,
  TextareaAutosize,
  Autocomplete,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./css/VolunteerSection.module.css";


export const VolunteerSection = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);
    const [volenForm, setVolenForm] = useState("")




  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={styles.volunteerSection}>
        <div className={styles.frameDiv}>
          <article className={styles.userFrameArticle}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.profileSymbolIcon}
                alt=""
                src="profilesymbol3.svg"
              />
              <p className={styles.uploadAPhoto}>Upload a Photo</p>
              <div className={styles.frameDiv2}>
                <p className={styles.loremIpsumDolorSitAmetCo}>
                  <p
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
                  <p className={styles.sedDoEiusmod}>sed do eiusmod tempor.</p>
                </p>
                <h5 className={styles.johnDoeH5}>John Doe</h5>
              </div>
            </div>
            <div className={styles.frameDiv3} />
          </article>
          <article className={styles.userVolunteerAboutSectionArticle}>
            <div className={styles.frameDiv4}>
              <h4 className={styles.helloVolunteerH4}>Hello  <span> backend/Volunteer,</span></h4>
              <p className={styles.weWelcomeYouInOurEndevour}>
                We welcome you in our endevour and want to thank you for joining
                hands with us and help provide more caring hands in times of
                trouble, together we can change reality much faster.
              </p>
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.skillsDiv}>
                <h6 className={styles.skillsH6}>Skills</h6>

                <Select className={styles.dropdownSelect}
                  onChange={(e) => setVolenForm(e.target.value)}
                  color="secondary"
                 size="2x"
                  label="Select Here"
                >
                  <MenuItem value="accommodation">Accommodation</MenuItem>
                  <MenuItem value="Help">Help</MenuItem>
                  {/* <MenuItem value="Translation">Translation</MenuItem> */}
                  <MenuItem value="Job">Job</MenuItem>
                  {/* <MenuItem value="Social_Services">
                  Social Services
                  </MenuItem>
                  <MenuItem value="Medical_Services">
                  Medical Services
                  </MenuItem> */}
                </Select>

                  
                
              </div>
             
            </div>



          {volenForm === "accommodation" ? (    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <section className={styles.accomodationFormSection}>
          <form className={styles.step3Form}>
            <form className={styles.userDataForm} method="post">
              <div className={styles.subheadDiv}>
                <div className={styles.textDiv}>{` `}</div>
              </div>

              <input
              className={styles.inputFieldDiv}
              type="text"
              placeholder="Contact Person"
            
            />
            <input
              className={styles.inputFieldDivContact}
              type="Number"
              placeholder="Contact Number"
            
            />
                    <input
              className={styles.inputFieldDivContact}
              type="email"
              placeholder="E-mail"
            
            />
              <div className={styles.fieldDiv1}>
                <TextField
                  className={styles.inputTextField1}
                  sx={{ width: 441 }}
                  color="info"
                  variant="standard"
                  type="text"
                  label="Street Name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.selectDiv}>
                <Autocomplete
                  sx={{ width: 438 }}
                  disablePortal
                  options={["Berlin", "Barndenboug"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Accommodation location "
                      variant="standard"
                      placeholder="Select City"
                      helperText=""
                    />
                  )}
                  size="medium"
                />
              </div>


     


              <Autocomplete
                className={styles.autocompleteStandard3}
                sx={{ width: 438 }}
                disablePortal
                options={["Hotels", "House", "Apartment", "Guest house","Hoste",
              "Chalets", "Garage", "Garden", "Cottages"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Type of Accommodation"
                    variant="standard"
                    placeholder="Select Accommodation"
                    helperText=""
                  />
                )}
                size="medium"
              />
              <Autocomplete
                className={styles.autocompleteStandard4}
                sx={{ width: 438 }}
                disablePortal
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Number of Person"
                    variant="standard"
                    placeholder="Select the Number"
                    helperText=""
                  />
                )}
                size="medium"
              />
              <div className={styles.fieldsDiv}>
                <div className={styles.datePickerDiv}>
                  <DatePicker
                    label="Start Date"
                    value={datePickerDateTimePickerValue}
                    onChange={(newValue) => {
                      setDatePickerDateTimePickerValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="standard"
                        size="medium"
                        renderInput={{ placeholder: "Start Date" }}
                        helperText=""
                      />
                    )}
                  />
                </div>
                <div className={styles.datePickerDiv}>
                  <DatePicker
                    label="End Date"
                    value={datePickerDateTimePicker1Value}
                    onChange={(newValue) => {
                      setDatePickerDateTimePicker1Value(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="standard"
                        size="medium"
                        renderInput={{ placeholder: "End Date" }}
                        helperText=""
                      />
                    )}
                  />
                </div>
              </div>
              <div className={styles.availabilityDiv}>Availability</div>
              <h6 className={styles.accomodationInformationForm}>
                Accomodation Information Form
              </h6>
              <p className={styles.usedToHostPeopleAndPropos}>
                Used to host people and propose a place to stay in Berlin
              </p>
            </form>
            <div className={styles.agreementDiv}>
              <img
                className={styles.buttonIconGhostOff}
                alt=""
                src="buttoniconghostoff.svg"
              />
              <p className={styles.captionText}>I agree with</p>
              <p className={styles.linkP}>Terms of use</p>
            </div>
          </form>
          <button className={styles.button} autoFocus>
            <b className={styles.sendRequestB}>{`Send Infos  `}</b>
          </button>
        </section>
      </LocalizationProvider> ) 



       : volenForm === "Help" ? (<LocalizationProvider dateAdapter={AdapterDateFns}>
        <section className={styles.jobFormSection}>
          <form className={styles.step3Form}>
            <form className={styles.userDataForm} method="post">
              <div className={styles.subheadDiv}>
                <div className={styles.textDiv}>{` `}</div>
              </div>
              {/* <div className={styles.fieldDiv}>
                <TextField
                  className={styles.inputTextField}
                  sx={{ width: 441 }}
                  color="info"
                  variant="standard"
                  type="text"
                  label="Weisestr."
                  size="medium"
                  margin="none"
                />
              </div> */}
               
                 <input
                className={styles.inputFieldDiv}
                type="text"
                placeholder="Contact Person"
              
              />
              <input
                className={styles.inputFieldDivContact}
                type="Number"
                placeholder="Contact Number"
              
              />
                      <input
                className={styles.inputFieldDivContact}
                type="email"
                placeholder="E-mail"
              
              />
  
        
              <div className={styles.selectDiv}>
                <Autocomplete
                  sx={{ width: 438 }}
                  disablePortal
                  options={["Berlin", "Barndenboug"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="City"
                      variant="standard"
                      placeholder="Select City"
                      helperText=""
                    />
                  )}
                  size="medium"
                />
              </div>
              <Autocomplete
                className={styles.autocompleteStandard}
                sx={{ width: 438 }}
                disablePortal
                options={["English", "Germany", "Arabic", "Persian","Russian"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Language"
                    variant="standard"
                    placeholder="Select Language"
                    helperText=""
                  />
                )}
                size="medium"
              />
              <Autocomplete
                className={styles.autocompleteStandard1}
                sx={{ width: 438 }}
                disablePortal
                options={["Store Greeter", "Housekeeper", "Security Guard","Housekeeping Technician",
              "Packaging Laborer","Student Worker", "Stocker"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Jobs List"
                    variant="standard"
                    placeholder="Select from the List"
                    helperText=""
                  />
                )}
                size="medium"
              />

<p className={styles.inputFieldDivContact4}> available from:</p>
                <input
                className={styles.inputFieldDivContact1}
                type="time"
                min="09:00" max="18:00" required
                placeholder="E-mail" />

    
                    <input
                className={styles.inputFieldDivContact2}
               
                type="time"
                id="appt" 
                name="appt"
                min="09:00" max="18:00" required
               
              
              />
  
  
              <div className={styles.fieldsDiv}>
                <div className={styles.datePickerDiv}>
                  <DatePicker
                    label="Start Date"
                    value={datePickerDateTimePickerValue}
                    onChange={(newValue) => {
                      setDatePickerDateTimePickerValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="standard"
                        size="medium"
                        renderInput={{ placeholder: "Start Date" }}
                        helperText=""
                      />
                    )}
                  />
                </div>
                <div className={styles.datePickerDiv}>
                  <DatePicker
                    label="End Date"
                    value={datePickerDateTimePicker1Value}
                    onChange={(newValue) => {
                      setDatePickerDateTimePicker1Value(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="standard"
                        size="medium"
                        renderInput={{ placeholder: "End Date" }}
                        helperText=""
                      />
                    )}
                  />
                </div>
              </div>
  
              <h6 className={styles.jobInformationForm}>Job Information Form</h6>
              <p className={styles.usedToProposeJobOffersOr}>
              Used to propose job offers or weiterbildung
              </p>
            </form>
            <div className={styles.agreementDiv}>
              <img
                className={styles.buttonIconGhostOff}
                alt=""
                src="../buttoniconghostoff.svg"
              />
              <p className={styles.captionText}>I agree with</p>
              <p className={styles.linkP}>Terms of use</p>
            </div>
          </form>
          <button className={styles.button} autoFocus>
            <b className={styles.sendRequestB}>{`Send Infos  `}</b>
          </button>
        </section>
      </LocalizationProvider>) 
      
     : volenForm === "Job" ? (<LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={styles.jobFormSection}>
        <form className={styles.step3Form}>
          <form className={styles.userDataForm} method="post">
            <div className={styles.subheadDiv}>
              <div className={styles.textDiv}>{` `}</div>
            </div>
            {/* <div className={styles.fieldDiv}>
              <TextField
                className={styles.inputTextField}
                sx={{ width: 441 }}
                color="info"
                variant="standard"
                type="text"
                label="Weisestr."
                size="medium"
                margin="none"
              />
            </div> */}
             
               <input
              className={styles.inputFieldDiv}
              type="text"
              placeholder="Contact Person"
            
            />
            <input
              className={styles.inputFieldDivContact}
              type="Number"
              placeholder="Contact Number"
            
            />
                    <input
              className={styles.inputFieldDivContact}
              type="email"
              placeholder="E-mail"
            
            />

      
            <div className={styles.selectDiv}>
              <Autocomplete
                sx={{ width: 438 }}
                disablePortal
                options={["Berlin", "Barndenboug"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="City"
                    variant="standard"
                    placeholder="Select City"
                    helperText=""
                  />
                )}
                size="medium"
              />
            </div>
            <Autocomplete
              className={styles.autocompleteStandard}
              sx={{ width: 438 }}
              disablePortal
              options={["English", "Germany", "Arabic", "Persian","Russian"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Language"
                  variant="standard"
                  placeholder="Select Language"
                  helperText=""
                />
              )}
              size="medium"
            />
            <Autocomplete
              className={styles.autocompleteStandard1}
              sx={{ width: 438 }}
              disablePortal
              options={["Store Greeter", "Housekeeper", "Security Guard","Housekeeping Technician",
            "Packaging Laborer","Student Worker", "Stocker"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Jobs List"
                  variant="standard"
                  placeholder="Select from the List"
                  helperText=""
                />
              )}
              size="medium"
            />
                        <Autocomplete
              className={styles.autocompleteStandard2}
              sx={{ width: 438 }}
              disablePortal
              options={["Part time", "full time"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Job Type"
                  variant="standard"
                  placeholder="Select the Type"
                  helperText=""
                />
              )}
              size="medium"
            />


            <div className={styles.fieldsDiv}>
              <div className={styles.datePickerDiv}>
                <DatePicker
                  label="Start Date"
                  value={datePickerDateTimePickerValue}
                  onChange={(newValue) => {
                    setDatePickerDateTimePickerValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="standard"
                      size="medium"
                      renderInput={{ placeholder: "Start Date" }}
                      helperText=""
                    />
                  )}
                />
              </div>
              <div className={styles.datePickerDiv}>
                <DatePicker
                  label="End Date"
                  value={datePickerDateTimePicker1Value}
                  onChange={(newValue) => {
                    setDatePickerDateTimePicker1Value(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="standard"
                      size="medium"
                      renderInput={{ placeholder: "End Date" }}
                      helperText=""
                    />
                  )}
                />
              </div>
            </div>

            <h6 className={styles.jobInformationForm}>Job Information Form</h6>
            <p className={styles.usedToProposeJobOffersOr}>
            Used to propose job offers or weiterbildung
            </p>
          </form>
          <div className={styles.agreementDiv}>
            <img
              className={styles.buttonIconGhostOff}
              alt=""
              src="../buttoniconghostoff.svg"
            />
            <p className={styles.captionText}>I agree with</p>
            <p className={styles.linkP}>Terms of use</p>
          </div>
        </form>
        <button className={styles.button} autoFocus>
          <b className={styles.sendRequestB}>{`Send Infos  `}</b>
        </button>
      </section>
    </LocalizationProvider>)
        
      //  :  volenForm === "Medical_Services" ? ( <div>Medical Services</div>)
     
       : (
        volenForm == null
      )}


          </article>
        </div>

      </section>
    </LocalizationProvider>
  );
};
