import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SiteMap = React.lazy(() => import("pages/SiteMap"));
const DesignSytem = React.lazy(() => import("pages/DesignSytem"));
const ProductListinginCartPageConfirmationPage = React.lazy(() =>
  import("pages/ProductListinginCartPageConfirmationPage"),
);
const ProductListinginCartPage = React.lazy(() =>
  import("pages/ProductListinginCartPage"),
);
const ProductDetailsPageAfterLogin = React.lazy(() =>
  import("pages/ProductDetailsPageAfterLogin"),
);
const ProductDetailsPage = React.lazy(() => import("pages/ProductDetailsPage"));
const ProductArchivePage = React.lazy(() => import("pages/ProductArchivePage"));
const AboutusContactUS = React.lazy(() => import("pages/AboutusContactUS"));
const AboutusGallery = React.lazy(() => import("pages/AboutusGallery"));
const AboutusProjectsServices = React.lazy(() =>
  import("pages/AboutusProjectsServices"),
);
const AboutusCompanyInformation = React.lazy(() =>
  import("pages/AboutusCompanyInformation"),
);
const AboutusMessages = React.lazy(() => import("pages/AboutusMessages"));
const HomePageAboutUSMegaMenu = React.lazy(() =>
  import("pages/HomePageAboutUSMegaMenu"),
);
const HomePage = React.lazy(() => import("pages/HomePage"));
const Header = React.lazy(() => import("pages/Header"));
const ProductProfileandHistory = React.lazy(() =>
  import("pages/ProductProfileandHistory"),
);
const MegaMenu = React.lazy(() => import("pages/MegaMenu"));
const AboutUSPage = React.lazy(() => import("pages/AboutUSPage"));
const ProductDetailsPageOne = React.lazy(() =>
  import("pages/ProductDetailsPageOne"),
);
const ProductListingPage = React.lazy(() => import("pages/ProductListingPage"));
const HomePageRefTwo = React.lazy(() => import("pages/HomePageRefTwo"));
const HomePageRefOne = React.lazy(() => import("pages/HomePageRefOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagerefone" element={<HomePageRefOne />} />
          <Route path="/homepagereftwo" element={<HomePageRefTwo />} />
          <Route path="/productlistingpage" element={<ProductListingPage />} />
          <Route
            path="/productdetailspageone"
            element={<ProductDetailsPageOne />}
          />
          <Route path="/aboutuspage" element={<AboutUSPage />} />
          <Route path="/megamenu" element={<MegaMenu />} />
          <Route
            path="/productprofileandhistory"
            element={<ProductProfileandHistory />}
          />
          <Route path="/header" element={<Header />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/homepageaboutusmegamenu"
            element={<HomePageAboutUSMegaMenu />}
          />
          <Route path="/aboutusmessages" element={<AboutusMessages />} />
          <Route
            path="/aboutuscompanyinformation"
            element={<AboutusCompanyInformation />}
          />
          <Route
            path="/aboutusprojectsservices"
            element={<AboutusProjectsServices />}
          />
          <Route path="/aboutusgallery" element={<AboutusGallery />} />
          <Route path="/aboutuscontactus" element={<AboutusContactUS />} />
          <Route path="/productarchivepage" element={<ProductArchivePage />} />
          <Route path="/productdetailspage" element={<ProductDetailsPage />} />
          <Route
            path="/productdetailspageafterlogin"
            element={<ProductDetailsPageAfterLogin />}
          />
          <Route
            path="/productlistingincartpage"
            element={<ProductListinginCartPage />}
          />
          <Route
            path="/productlistingincartpageconfirmationpage"
            element={<ProductListinginCartPageConfirmationPage />}
          />
          <Route path="/designsytem" element={<DesignSytem />} />
          <Route path="/sitemap" element={<SiteMap />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
