import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('poke_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('poke_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
  
      if (existingItem) {
        // Safely map to a new array and create a new object instance
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
  
      // Add new item if it doesn't exist
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove Item from Cart
  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId && item.id !== cartItemId));
  };

  // Update Item Quantity
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.cartItemId || item.id) === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
