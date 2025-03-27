// Load state from Local Storage
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("cartState");
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
      console.error("Error loading state from localStorage:", error);
      return undefined;
    }
  };
  
  // Save state to Local Storage
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cartState", serializedState);
    } catch (error) {
      console.error("Error saving state to localStorage:", error);
    }
  };
  