
export const reducer = (state = { sum: 0 }, action) => {
  switch(action.type) {
    case 'INC_SHOES_PRICE': 
      return {...state, sum: state.sum + action.priceList.shoesPrice }
    case 'INC_TSHIRT_PRICE_1': 
      return {...state, sum: state.sum + action.priceList.tshirtPrice1 }
    case 'INC_TSHIRT_PRICE_2': 
      return {...state, sum: state.sum + action.priceList.tshirtPrice2 }
    case 'INC_WALLET_PRICE': 
      return {...state, sum: state.sum + action.priceList.walletPrice }
    case 'INC_BAG_PRICE': 
      return {...state, sum: state.sum + action.priceList.bagPrice }
    case 'INC_CARGO_PRICE': 
      return {...state, sum: state.sum + action.priceList.cargoPrice }
    case 'CLEAR':
      return {...state, sum: 0 }
    default:
      return state
  }
}