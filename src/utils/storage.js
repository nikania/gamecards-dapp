export const getCurrentUserAddress = () => 
    localStorage.getItem('userAddress');

export const saveCurrentUser = (address, role) => {
    if (!address || !role) {
      return;
    }
  
    localStorage.setItem('userAddress', address);
    localStorage.setItem('userRole', role);
  };