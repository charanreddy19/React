const ResCard = (props) => {
    const {name , avgRating, cuisines, cloudinaryImageId} = props.resDetails.info
    return (<div className="res-card">
        <img className="res-img" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
        <span>{name}</span>
        <span>{avgRating}</span>
        <span>{cuisines}</span>
    </div>)
}
export default ResCard;