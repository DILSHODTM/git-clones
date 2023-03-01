const initialState ={
    users: ""
   
  }
  
  const wishlistInitialState= {
    likedProducts: []
  }

    const addToCartInitialState= {
    cartProducts: []
    }
  
  const reducer = (state = initialState, action) => {
    switch(action.type){ 
      case "LOGIN_USER":
        return {
          email: localStorage.getItem("email"),
        };
      case "CREATE_USER":
        return {email: action.email};
     
      default:
        return state
    }
  }
  
  const wishlistReducer = (state = wishlistInitialState, action) => {
    switch(action.type){
      case "ADD_TO_WISHLIST":
        return {
          likedProducts: [...state.likedProducts, action.product]
        }
      case "REMOVE_FROM_WISHLIST":
        const indexOfDeleteProduct = state.likedProducts.findIndex(p => p.id === action.id);
        state.likedProducts.splice(indexOfDeleteProduct, 1);
        return {
          likedProducts: [...state.likedProducts]
        }
      default:
        return state
    }
  }
  


  const addToCarTReducer = (state = addToCartInitialState, action) => {
    switch(action.type){
      case "ADD_TO_CART":
        return {
            cartProducts: [...state.cartProducts, action.product]
 
        }
        case "REMOVE_FROM_CART":
        const indexOfDeleteProduct = state.cartProducts.findIndex(p => p.id === action.id);
        state.cartProducts.splice(indexOfDeleteProduct, 1);
        return {
            cartProducts: [...state.cartProducts]
        }

      default:
        return state
    }
  }
  
  export { reducer, wishlistReducer, addToCarTReducer };