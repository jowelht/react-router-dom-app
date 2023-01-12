import { Route, Routes } from 'react-router-dom';
import AboutUs from './conponents/about';
import Blog from './conponents/blog';
import BlogDetails from './conponents/blog-details';
import Deshboard from './conponents/deshboard';
import Header from './conponents/header';
import Home from './conponents/home';
import Login from './conponents/login';
import PrivateOutlet from './conponents/privateoutlet';
import PrivateRouter from './conponents/privateRouter'
import Services from './conponents/services';
import './style.css'

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    {/* Way One */}
                    {/* <Route path="/deshboard/*" element={
                        <PrivateRouter>
                            <Deshboard/>
                        </PrivateRouter>
                    }/> */}
                    {/* Way Two */}
                    <Route path='/*' element={<PrivateOutlet/>}>
                        <Route path='deshboard' element={<Deshboard title="Deshboard"/>}/>
                        <Route path='services' element={<Services/>}/>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
