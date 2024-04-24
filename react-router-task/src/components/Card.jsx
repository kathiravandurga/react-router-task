export default function Card(data=[],data2=[]){
    return(
        <div className="card" style={{width: 350, height:390,borderRadius:10,padding:0}}>
        <img src={data.data.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{data.data.name}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}