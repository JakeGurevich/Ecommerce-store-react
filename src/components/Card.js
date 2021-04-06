import "./card.css";
import img from "../img/delete.png";
const Card = (props) => {
  // const showItem = (e) => {
  //   console.log(props.n.name);
  // };

  return !props.style ? (
    <div className="cardWrap">
      <div
        className={props.cssClass ? props.cssClass : "card"}
        // onClick={(e) => showItem(e)}
      >
        <img src={props.n.img} alt={props.n.price} />
        <h5>{props.n.name}</h5>
        <p>Price : {props.n.price}$</p>
      </div>

      <button onClick={() => props.add(props.n)}>Add to Cart</button>
    </div>
  ) : (
    <div className="cartItemWrap">
      <div className="cartItem">
        <img src={props.n.img} alt={props.n.price} />
        <h5>{props.n.name}</h5>
        <p>Price : {props.n.price}$</p>
      </div>
      <div className="changeCount">
        <div></div>
        <div></div>
      </div>
      <div className="del" onClick={() => props.delete(props.n)}>
        <img src={img} />
      </div>
    </div>
  );
};
export default Card;
