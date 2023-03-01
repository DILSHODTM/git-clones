import React from "react";
import "./style.scss";
const index = () => {
  return (
    <>
      <footer>
        <hr />
        <div className="container">
          <ul className="d-flex justify-content-between forlinks  ">
            <li>About eBay</li>
            <li>Announcement</li>
            <li>Comunity</li>
            <li>Security Center</li>
            <li>Seller Center</li>
            <li> Policies</li>
            <li>Affiliates</li>
            <li>Help & Contact</li>
            <li>Site Map</li>
          </ul>
          <ul className="d-flex justify-content-evenly forlinks">
            <li>© 1995-2021 eBay Inc. All rights reserved. </li>
            <li> User Agreement, Privacy, Cookies and AdChoice</li>
            <li> Norton Secured - powered by Verisign</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default index;
