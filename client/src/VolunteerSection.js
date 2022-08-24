import { useState } from "react";
import { Select, MenuItem, TextField, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./css/VolunteerSection.module.css";

export const VolunteerSection = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);
  const [volenForm, setVolenForm] = useState("");

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
              <h4 className={styles.helloVolunteerH4}>
                Hello <span> backend/Volunteer,</span>
              </h4>
              <p className={styles.weWelcomeYouInOurEndevour}>
                We welcome you in our endevour and want to thank you for joining
                hands with us and help provide more caring hands in times of
                trouble, together we can change reality much faster.
              </p>
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.skillsDiv}>
                <h6 className={styles.skillsH6}>Skills</h6>

                <Select
                  className={styles.dropdownSelect}
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

            {volenForm === "accommodation" ? (
              <div className={styles.formContainer}>
                <form className={styles.accommodationForm} method="post">
                  <input
                    className={styles.contactPersonName}
                    type="text"
                    placeholder="Contact Person Name"
                  />
                  <input
                    className={styles.contactPersonNumber}
                    type="number"
                    placeholder="Contact Person Number"
                  />
                  <input
                    className={styles.contactPersonEmail}
                    type="email"
                    placeholder="Contact Person Email"
                  />
                  <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}>accommodation location</div>
                  <div className={styles.accommodationTitles}>Street</div>
                    <select
                      className={styles.accommodationSelect}
                      
                    >
                      <option className={styles.optionBox}>Berlin</option>
                      <option className={styles.optionBox}>Brandenburg</option>
                    </select>
                    <input
                      className={styles.accommodationStreet}
                      type="text"
                      placeholder="Street Name"
                    />
                  </div>
                  <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}>type of accommodation</div>
                  <div className={styles.accommodationTitles}>Number of Persons</div>
                    <select className={styles.accommodationDetails}>
                      <option>Hotels</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Guest house</option>
                      <option>Hoste</option>
                      <option>Chalets</option>
                      <option>Garage</option>
                      <option>Cottages</option>
                    </select>

                    <select className={styles.accommodationPersonsNumber}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                  <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}> available from</div>
                  <div className={styles.accommodationTitles}> to</div>
                    <input
                      className={styles.accommodationStreetDate}
                      type="date"
                      name="date"
                      id="date"
                    />
                    <input
                      className={styles.accommodationStreetEnd}
                      type="date"
                      name="date"
                      id="date"
                    />
                  </div>

                  <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}> contact person available from</div>
                  <div className={styles.accommodationTitles}> to</div>
                    <input
                      className={styles.accommodationStreetDate}
                      type="time"
                      name="time"
                      id="time"
                    />
                    <input
                      className={styles.ContactPersonAvailable}
                      type="time"
                      name="time"
                      id="time"
                    />
                  </div>
                  <div className={styles.accommodationSelectDiv}>
                  < input className={styles.formFileButton} type = "file" id = "file_input" name = "filepath" multiple = "multiple" / >
                  </div>

                  <div className={styles.accommodationSelectDiv}>
                    <input className={styles.checkBoxBox} type="checkbox" />{" "}
                    <p className={styles.termsOfUse}>
                     
                      I am agree with terms of use
                    </p>
                  </div>
                  <div className={styles.accommodationSelectDiv}>
                  <button className={styles.formButton}> submit the info</button>
                  </div>
                </form>
              </div>


            ) : volenForm === "Help" ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        options={[
                          "English",
                          "Germany",
                          "Arabic",
                          "Persian",
                          "Russian",
                        ]}
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
                        options={[
                          "Store Greeter",
                          "Housekeeper",
                          "Security Guard",
                          "Housekeeping Technician",
                          "Packaging Laborer",
                          "Student Worker",
                          "Stocker",
                        ]}
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

                      <p className={styles.inputFieldDivContact4}>
                        {" "}
                        available from:
                      </p>
                      <input
                        className={styles.inputFieldDivContact1}
                        type="time"
                        min="09:00"
                        max="18:00"
                        required
                        placeholder="E-mail"
                      />

                      <input
                        className={styles.inputFieldDivContact2}
                        type="time"
                        id="appt"
                        name="appt"
                        min="09:00"
                        max="18:00"
                        required
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

                      <h6 className={styles.jobInformationForm}>
                        Job Information Form
                      </h6>
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
              </LocalizationProvider>
            ) : volenForm === "Job" ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        options={[
                          "English",
                          "Germany",
                          "Arabic",
                          "Persian",
                          "Russian",
                        ]}
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
                        options={[
                          "Store Greeter",
                          "Housekeeper",
                          "Security Guard",
                          "Housekeeping Technician",
                          "Packaging Laborer",
                          "Student Worker",
                          "Stocker",
                        ]}
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

                      <h6 className={styles.jobInformationForm}>
                        Job Information Form
                      </h6>
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
              </LocalizationProvider>
            ) : (
              //  :  volenForm === "Medical_Services" ? ( <div>Medical Services</div>)

              volenForm == null
            )}
          </article>
        </div>
      </section>
    </LocalizationProvider>
  );
};
