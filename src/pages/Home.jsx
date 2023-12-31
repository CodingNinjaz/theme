import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/homepagerefone">HomePageRefOne</Link>
        </li>
        <li>
          <Link to="/homepagereftwo">HomePageRefTwo</Link>
        </li>
        <li>
          <Link to="/productlistingpage">ProductListingPage</Link>
        </li>
        <li>
          <Link to="/productdetailspageone">ProductDetailsPageOne</Link>
        </li>
        <li>
          <Link to="/aboutuspage">AboutUSPage</Link>
        </li>
        <li>
          <Link to="/megamenu">MegaMenu</Link>
        </li>
        <li>
          <Link to="/productprofileandhistory">ProductProfileandHistory</Link>
        </li>
        <li>
          <Link to="/header">Header</Link>
        </li>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/homepageaboutusmegamenu">HomePageAboutUSMegaMenu</Link>
        </li>
        <li>
          <Link to="/aboutusmessages">AboutusMessages</Link>
        </li>
        <li>
          <Link to="/aboutuscompanyinformation">AboutusCompanyInformation</Link>
        </li>
        <li>
          <Link to="/aboutusprojectsservices">AboutusProjectsServices</Link>
        </li>
        <li>
          <Link to="/aboutusgallery">AboutusGallery</Link>
        </li>
        <li>
          <Link to="/aboutuscontactus">AboutusContactUS</Link>
        </li>
        <li>
          <Link to="/productarchivepage">ProductArchivePage</Link>
        </li>
        <li>
          <Link to="/productdetailspage">ProductDetailsPage</Link>
        </li>
        <li>
          <Link to="/productdetailspageafterlogin">
            ProductDetailsPageAfterLogin
          </Link>
        </li>
        <li>
          <Link to="/productlistingincartpage">ProductListinginCartPage</Link>
        </li>
        <li>
          <Link to="/productlistingincartpageconfirmationpage">
            ProductListinginCartPageConfirmationPage
          </Link>
        </li>
        <li>
          <Link to="/designsytem">DesignSytem</Link>
        </li>
        <li>
          <Link to="/sitemap">SiteMap</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
