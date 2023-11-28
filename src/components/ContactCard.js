// import React from "react";
// import userimg from "../images/userimg.png";

// const ContactCard = (props) => {
//   const { id, name, email } = props.contact;
//   return (
//     <div
//       className="item"
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       <img className="ui avatar image" src={userimg} alt="user" />
//       <div className="content">
//         <div className="header">{name}</div>
//         <div>{email}</div>
//       </div>
//       <div style={{ marginLeft: "auto" }}>
//         <i
//           className="trash alternate outline icon"
//           style={{ color: "red" }}
//           onClick={() => props.clickHandler(id)}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default ContactCard;
import React from "react";
import userimg from "../images/userimg.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={userimg} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
