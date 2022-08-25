import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  useEffect(() => {
    PRODUCTS.map(({ id, name }) => (
      <div key={id}>
        <h1>{name}</h1>
      </div>
    ));
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
