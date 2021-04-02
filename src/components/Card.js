import "./card.css";
const Card = (props) => {
  const showItem = (e) => {
    console.log(props.n.name);
  };
  return (
    <div className="card" onClick={(e) => showItem(e)}>
      <h4>{props.n.name}</h4>
      <p>Price : {props.n.price}$</p>
      <img src={props.n.img} alt={props.n.price} />
    </div>
  );
};
export default Card;
