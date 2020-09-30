import React, { Component, FunctionComponent } from "react";
import { Route, Switch, RouteProps, Link } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Home from "./Home";
import About from "./About";

import "./App.css";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  layout: any;
}

// const DefaultLayout: FunctionComponent = ({ children }) => (
//   <div className="container">
//     <div className="box header">
//       <nav className="nav-container">
//         <div className="nav-items-left">
//           <a className="navbar__brand" href="/">
//             <img
//               className="navbar__logo"
//               src="static/img/sun_glasses_logo.svg"
//               alt="My Site Logo"
//               height="32px"
//               width="32px"
//             />
//             <strong className="navbar__title">Chasmawala.com</strong>
//           </a>

//           <a className="navbar__item navbar__link" href="/docs">
//             Docs
//           </a>
//           <a className="navbar__item navbar__link" href="/blog">
//             Blog
//           </a>
//         </div>
//         <div className="nav-items-right">Right nav items</div>
//       </nav>
//     </div>

//     <div className="box content">
//       <header className="hero hero--primary heroBanner_2Ftp">
//         <div className="hero-container">
//           <h1 className="hero__title">Chasmawala</h1>
//           <p className="hero__subtitle">Find your perfect pair!</p>
//           {/* <div className="buttons_src-pages-">
//             <a
//               className="button button--outline button--secondary button--lg"
//               href="/docs/doc1"
//             >
//               Get Started
//             </a>
//           </div> */}
//         </div>
//       </header>
//       <main>
//         <section className="features_src-pages-">
//           <div className="pages-container">
//             <div>{children}</div>
//           </div>
//         </section>
//       </main>
//     </div>
//     <footer className="footer footer--dark">
//       <div className="footer-container">
//         <div className="row footer__links">
//           <div className="col">
//             <h4 className="footer__title">Docs</h4>
//             <ul className="footer__items">
//               <li className="footer__item">
//                 <a className="footer__link-item" href="/docs/doc1">
//                   Style Guide
//                 </a>
//               </li>
//               <li className="footer__item">
//                 <a className="footer__link-item" href="/docs/doc2">
//                   Second Doc
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col footer__col">
//             <h4 className="footer__title">Community</h4>
//             <ul className="footer__items">
//               <li className="footer__item">
//                 <a
//                   className="footer__link-item"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://stackoverflow.com/questions/tagged/docusaurus"
//                 >
//                   Stack Overflow
//                 </a>
//               </li>
//               <li className="footer__item">
//                 <a
//                   className="footer__link-item"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://discordapp.com/invite/docusaurus"
//                 >
//                   Discord
//                 </a>
//               </li>
//               <li className="footer__item">
//                 <a
//                   className="footer__link-item"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://twitter.com/docusaurus"
//                 >
//                   Twitter
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col footer__col">
//             <h4 className="footer__title">More</h4>
//             <ul className="footer__items">
//               <li className="footer__item">
//                 <a className="footer__link-item" href="/blog">
//                   Blog
//                 </a>
//               </li>
//               <li className="footer__item">
//                 <a
//                   className="footer__link-item"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href="https://github.com/facebook/docusaurus"
//                 >
//                   GitHub
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="text--center">
//           <div>Copyright © 2020 My Project, Inc. Built with Docusaurus.</div>
//         </div>
//       </div>
//     </footer>
//   </div>
// );

const RouteWrapper = (props: PrivateRouteProps) => {
  const { component: Component, layout: Layout, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => {
  return (
    <Switch>
      <RouteWrapper
        exact={true}
        path="/"
        component={Home}
        layout={DefaultLayout}
      />
      <RouteWrapper path="/about" component={About} layout={DefaultLayout} />
    </Switch>
  );
};

export default App;
