const counterReducer = (state = 0, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload; 
    case 'DECREMENT':
      return state + action.payload;
    //this defult is necesary to do functionate this switch seentence 
    default:
        return state;
  }
};
export default counterReducer;