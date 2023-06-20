import star from "../img/Star.png";

function Card(props) {
  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = "Sold out";
  } else if (props.items.location === "Online") {
    badgeText = "online";
  }

  return (
    <div className="card">
      <img src={props.items.coverImg} alt="" className="card-img" />

      {badgeText && (
        <div className="card-status">
          <p className="status-txt">{badgeText}</p>
        </div>
      )}
      <div className="card-rating">
        <img src={star} alt="" className="card-star" />
        <p className="rating-num">
          {props.items.stats.rating}
          <span className="rating-counts">
            ({props.items.stats.reviewCount})<sup> . </sup>
            {props.items.location}
          </span>
        </p>
      </div>
      <div className="card-info">
        <p className="card-txt">
          {props.items.title} <br />{" "}
          <span className="card-price">from ${props.items.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
