function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="location-image">
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className="location-details">
        <div className="location">
          <p>
            <i className="bx bx-current-location"></i>
            <span>{props.item.location}</span>
          </p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="title">
          <h1>{props.item.title}</h1>
        </div>
        <div className="date">
          <p className="startDate">{props.item.startDate}</p>-
          <p className="endDate">{props.item.endDate}</p>
        </div>
        <p className="details">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
