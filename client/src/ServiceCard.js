import styles from "./css/ServiceCard.module.css";

export const ServiceCard = (props) => {
  return (
    <article >
      <img  alt="" src={props.Image} />
      <div >
        <h4 >{props.title}</h4>
        <p >{props.city}</p>
      </div>
      <img  alt="" src={props.heartIcon} />
      <div >
        <h2 > {props.h2} </h2>
      </div>
    </article>
  );
};
