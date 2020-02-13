const isUserLogged = () => {
  let cookieVal = document.cookie.replace(
    /(?:(?:^|.*;\s*)is_logged\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return cookieVal;
};

export default isUserLogged;
