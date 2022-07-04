import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  var errorVar
  return (
    <>

      <div class="header">
        <div class="navbar">
          <nav>
            <ul>
                <li><Link to="/"><img width="50px" src="https://cdn1.iconfinder.com/data/icons/build-a-house-1/60/house__window__home__building__property-128.png"></img></Link> </li>
                <li class="navright"><Link to="/newnote"><img width="50px" src="https://cdn1.iconfinder.com/data/icons/ios-and-android-8/60/new__create__file__notes__document-512.png"></img></Link></li>
            </ul>
          </nav>
        </div>
      </div>


      <Outlet />
    </>
  )
};

export default Layout;
