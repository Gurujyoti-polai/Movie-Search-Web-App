export default function movies(state=[],action){
    if(action.type==="ADD_movies"){
        return action.movies;
    }
    return state;
}