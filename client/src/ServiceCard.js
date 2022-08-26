import styles from "./css/ServiceCard.module.css";

export const ServiceCard = ({Image,title,city = "",h2,heartIcon}) => {
  return (
    <article >
      <img  alt="" src={Image} />
      <div >
        <h4 >{title}</h4>
        <p >{city}</p>
      </div>
      <img  alt="" src={heartIcon} />
      <div >
        <h2 > {h2} </h2>
      </div>
    </article>
  );
};
