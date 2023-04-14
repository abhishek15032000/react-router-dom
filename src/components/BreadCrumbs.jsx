import React from "react";
import { useLocation,Link } from "react-router-dom";
function BreadCrumbs() {
  const location = useLocation();
  console.log(location);
  // this location is an object , useLocation is an hook
  // from this location we can know the pathname:/about , pathname:/carrers/1
  let currLink = "";
  const crumbs = location.pathname.split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div>
      BreadCrumbs
      {crumbs}
    </div>
  );
}

export default BreadCrumbs;
