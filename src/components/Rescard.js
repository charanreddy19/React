const ResCard = (props) => {
    const {name , rating, cuisine, imgAddress} = props.resDetails
    return (<div className="res-card">
        <img className="res-img" src="https://images.theconversation.com/files/529655/original/file-20230601-21-meilfi.jpg?ixlib=rb-1.1.0&rect=3%2C130%2C2114%2C1057&q=45&auto=format&w=668&h=324&fit=crop"/>
        <span>{name}</span>
        <span>{rating}</span>
        <span>{cuisine}</span>
    </div>)
}
export default ResCard;