import {useDispatch,} from 'react-redux'



const MovieCard = ({ movie1}) => {
  // let dispatch=useDispatch();
  //   // let {organizer}=useSelector(function(e){
  //   //     return e;
  //   // })
    
  //       function addFavoriteListAddHanlder(){

  //           dispatch({
  //               type:'Fav',
  //               load:{movie1},
  //           })
            
           
  //       }


    return (
      <div className="movie" key={movie1.imdbID} >
        <div>
          <p>{movie1.Year}</p>
        </div>
        <div>
          <img
            src={
              movie1.Poster !== "N/A"
                ? movie1.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie1.Title}
          />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  