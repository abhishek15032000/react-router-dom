
import { BrowserRouter
  ,Route
  ,createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Layout from "./Layout/Layout";
import HelpLayout from "./Layout/HelpLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Carrers,{LoaderFunction} from "./pages/Carrers";
import CarrersDetails from "./pages/CarrersDetails";
const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
           <Route path="/" element={<Home/>}></Route>
           <Route path="about" element={<About />}></Route>
           <Route path="help" element={<HelpLayout/>}>
                <Route path="faq" element={<Faq/>}/>
                <Route path="contact" element={<Contact/>}/>  
           </Route>
           <Route path="carrers" element={<Carrers/>} loader={LoaderFunction}>
               <Route path=":id" element={<CarrersDetails/>}/>
           </Route>
           <Route path="*" element={<NotFound/>}/>
      </Route>
  )
)

function App() {
  return (
    // <BrowserRouter> 
    //        <main> 
    //         <header>
    //              <h1>Jobrouter</h1>
    //              <Link to="/">Home</Link>
    //              {/* show up as anchor tag  */}
    //              <NavLink to="/about">About</NavLink>
    //         </header>
    //             <Routes>
    //                  <Route index path="/" element={<Home/>}/>
    //                  <Route path="/about" element={<About/>}/>
    //             </Routes>
    //        </main>
    // </BrowserRouter>

     <RouterProvider router={router} />
  )
    
}

export default App
