import {useSelector,useDispatch} from 'react-redux'

export default function Organizer(){
    // let {organizer}=useSelector(function(a){
    //     return a;
    // })
    // let dispatch=useDispatch()
    // function ItemDeleteHandler(imdbID){
    //     dispatch({
    //         type:'delete',
    //         load:imdbID
    //     })
    // }

    return(
        <div className="organizer">
            <h2>Added movies :</h2> 
             <ul className="favorites-list">
                    <li className='list-item'>
                        <button type="button" className="favorites-delete">X</button>
                    </li>
            </ul>

        </div>
    );
}