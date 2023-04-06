import React from "react";

const Footer = () => {
  // let footerStyle = {
  //   position: "relative",
  //   width: "100%",
  //   bottom: "-10vh",
  //   border: "2px solid red"
  // };

  return (
    <footer>
      <div className="bg-dark text-light py-3" /* style={footerStyle} */>
        <p className="text-center"> Copyright &copy; TodosList.com</p>
      </div>
    </footer>
  );
};

export default Footer;
