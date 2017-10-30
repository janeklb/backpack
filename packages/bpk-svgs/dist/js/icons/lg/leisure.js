function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M9.5 7.3l-.2.5c0 .1-.1.2-.3.2H7c-.2 0-.3-.1-.3-.2l-.2-.5c0-.1.1-.3.3-.3h2.5c.1 0 .2.2.2.3zM8 2c-.7 0-1.2.7-1.3 1.7l-.2 1.9c0 .2.1.4.3.4h2.5c.2 0 .3-.2.2-.4l-.2-1.9C9.2 2.7 8.7 2 8 2zM5 15.5c0 2.2.3 4.2.7 5.8.2.4.5.7.9.7h2.7c.4 0 .8-.3.9-.8.5-1.5.7-3.6.7-5.8 0-2.4-1-4.6-1.6-6.2.1-.1-.1-.2-.2-.2H6.9c-.1 0-.3.1-.3.2C6 10.8 5 13 5 15.5zm15 .5c0 3.3-2.7 6-6 6-1 0-1.9-.2-2.7-.7.5-1.7.7-3.7.7-5.9 0-1.7-.4-3.4-.9-4.7.9-.4 1.9-.7 2.9-.7 3.3 0 6 2.7 6 6zm-5 0c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm1-3c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm2 2c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1z" /></svg>;
});