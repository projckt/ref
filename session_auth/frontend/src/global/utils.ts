export const check = {
  cookie: {
    isLogged: () => {
      console.log(`Cookie: ${document.cookie}`);
      return true;
    }
  }
};
