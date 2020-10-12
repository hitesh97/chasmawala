import * as cartActions from '../actions/cartActions';

const cart = (state = 0, action: any) => {
    switch (action.type) {
      case cartActions.SET_COUNTER:
        return action.payload;
      case cartActions.INCREMENT_COUNTER:
        return state + 1;
      case cartActions.DECREMENT_COUNTER:
        return state - 1;
      default:
        return state;
    }
  };
  
  export default cart;