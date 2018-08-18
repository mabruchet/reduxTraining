// a reducer takes in two things: 

// 1. The action (info about what happened)
// 2. copy of current state

function posts(state = [], action){
  //state[action.i].likes++; ==> pas possible car on modifie ce qui n'est pas dans la fonction.
  // il ne faut pas mutate 

  switch(action.type) {
    case 'INCREMENT_LIKES':
    // return the updated state
      console.log(' Incrementing Likes !!');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1), // after the one we are updating
      ]
    default: 
    return state;
  }

}

export default posts;