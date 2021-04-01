import "./card.css";
const Card = (props) => {
  return (
    <div className="card">
      <h4>{props.n.name}</h4>
      <p>Price : {props.n.price}$</p>
      <img src={props.n.img} alt={props.n.price} />
    </div>
  );
};
export default Card;
