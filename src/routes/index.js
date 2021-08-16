import Home from "../pages/Home";
import Header from "../template/Header";
import Footer from "../template/Footer";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import Gallery from "../pages/Gallery";
/* import ErrorNotFound from "../pages/ErrorNotFound";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import Task from "../pages/Task"; */

const routes = {
    "/": Home,
    "/gallery": Gallery
  /*"/signin": SignIn, // http://localhost:8080/#/signin
    "/login1": LogIn,
    "/:id": Task //http://localhost:8080/#/3 */
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    const footer = null || document.getElementById("footer");
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    let hash = getHash();
    let route = await getResolveRoutes(hash);
    let render = routes[route] ? routes[route] : ErrorNotFound;
    content.innerHTML = await render();
}

export default router;