import Jsonplaceholder from "../apis/Jsonplaceholder"

export const fetchPost=()=>async dispatch =>{
    const response=await Jsonplaceholder.get('/posts')

    dispatch({type:'FETCH_POST',payload:response.data})
}