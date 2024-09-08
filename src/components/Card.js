

function Card (props) {
    // destructuring object
  //  const {URLimage, title , text} = props

    return (
        // <></>  = impty tag
        <>  
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={props.imageURL} 
                    className="card-img-top" alt="card image" 
                />
                <div className="card-body">
                    <h2 className="card-text">{props.title}</h2>
                    
                </div>
            </div>
        </>
    )
}

export default Card