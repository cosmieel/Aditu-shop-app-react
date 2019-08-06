import { priceList } from '../components/content-products/'

export const incShoesPrice = () => ({ 
  type: 'INC_SHOES_PRICE', 
  priceList
})

export const incTshirtPrice1 = () => ({ 
  type: 'INC_TSHIRT_PRICE_1', 
  priceList
})

export const incTshirtPrice2 = () => ({ 
  type: 'INC_TSHIRT_PRICE_2', 
  priceList
})

export const incWalletPrice = () => ({ 
  type: 'INC_WALLET_PRICE', 
  priceList
})

export const incBagPrice = () => ({ 
  type: 'INC_BAG_PRICE', 
  priceList
})

export const incCargoPrice = () => ({ 
  type: 'INC_CARGO_PRICE', 
  priceList
})

export const clear = () => ({
  type: 'CLEAR'
})