import styles from "./css/BlogSection.module.css";
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import MiddleImg from "./pics/middleimage@2x.png"
import leftimg from "./pics/rightimage@2x.png"
import rightimg from  "./pics/leftimage@2x.png"
// import Collapse from 'react-bootstrap/Collapse';

export const BlogSection = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [open, setOpen] = useState(false);


  return (
<section className={styles.blogSection}>


<h3 className={styles.titleH3}>
        <h3
          className={styles.cityGuideEventsTips}
        >{`City Guide, Events & Tips`}</h3>
      </h3>
      <div className={styles.outlineDiv} />

<div className={styles.container}>      
    <div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={leftimg} alt="leftImage" />
     </div>
     
    <div className={styles.content}>
      <h4>Choose the right institution to help you</h4>
 
        <p>Center for Migration and Integration
      <br /> 
      Add: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>0306664390</span> <br />
        website: <span>www.awoberlin.de</span>
        </p>
         
        <p>Center for Migration and Integration
      <br /> 
      Add: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>0306664390</span> <br />
        website: <span>www.awoberlin.de</span>
        </p>
         
        <p>Center for Migration and Integration
      <br /> 
      Add: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>0306664390</span> <br />
        website: <span>www.awoberlin.de</span>
        </p>
         
        <p>Center for Migration and Integration
      <br /> 
      Add: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>0306664390</span> <br />
        website: <span>www.awoberlin.de</span>
        </p>
         
        <p>Center for Migration and Integration
      <br /> 
      Add: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>0306664390</span> <br />
        website: <span>www.awoberlin.de</span>
        </p>
        
    </div>
</div>
<div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={MiddleImg} alt="leftImage" />
     </div>

    <div className={styles.content}>
      <h4>Best Place to do Sport in Berlin</h4>
      <p>Fitness Center
      <br /> Add: <span>Mühlenstraße 62-65/Haus 5, 13187 Berlin</span>
      <br /> Contact: <span>03064442342</span> <br />
        website: <span>http://www.argo-athletics.de/</span></p>

      <p>Fitness Center
      <br /> Add: <span>Mühlenstraße 62-65/Haus 5, 13187 Berlin</span>
      <br /> Contact: <span>03064442342</span> <br />
        website: <span>http://www.argo-athletics.de/</span></p>

        <p>Fitness Center
      <br /> Add: <span>Mühlenstraße 62-65/Haus 5, 13187 Berlin</span>
      <br /> Contact: <span>03064442342</span> <br />
        website: <span>http://www.argo-athletics.de/</span></p>

        <p>Fitness Center
      <br /> Add: <span>Mühlenstraße 62-65/Haus 5, 13187 Berlin</span>
      <br /> Contact: <span>03064442342</span> <br />
        website: <span>http://www.argo-athletics.de/</span></p>

        <p>Fitness Center
      <br /> Add: <span>Mühlenstraße 62-65/Haus 5, 13187 Berlin</span>
      <br /> Contact: <span>03064442342</span> <br />
        website: <span>http://www.argo-athletics.de/</span></p>
        
        
    </div>

    

    
</div>
<div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={rightimg} alt="leftImage" />
     </div>
    <div className={styles.content}>
      <h4>Best City guides at your service</h4>

      <p>Bike & Tour Rental
      <br /> 
      Add: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>

        <p>Bike & Tour Rental
      <br /> 
      Add: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>
        <p>Bike & Tour Rental
      <br /> 
      Add: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>
        <p>Bike & Tour Rental
      <br /> 
      Add: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>
        <p>Bike & Tour Rental
      <br /> 
      Add: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>


    </div>
</div>
</div>
























      {/* <main className={styles.cardsMain}>
















        
        <article className={styles.rightArticle}>
          <img
            className={styles.rightimageIcon}
            alt=""
            src="../rightimage@2x.png"
          />
          <div className={styles.cardbottomDiv}>
         

<Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

            <div className={styles.integrationDiv}>Integration</div>
          </div>
        </article>
        <article className={styles.middleArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="../middleimage@2x.png"
          />
          <div className={styles.cardbottomDiv1}>

            <div className={styles.integrationDiv}>Lifestyle</div>
          </div>
        </article>
        <article className={styles.rightArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="../leftimage@2x.png"
          />
          <div className={styles.cardbottomDiv2}>

            <b className={styles.chooseTheRightInstitutionT}>
              Best city guides at your services
            </b>
            <div className={styles.integrationDiv}>City Guides in Berlin</div>
          </div>
        </article>
      </main> */}
    </section>
  );
};
