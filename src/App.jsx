import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Home/Hero.jsx';
import NotFound from './components/NotFound/NotFound';
import MainLayouts from './components/layouts/MainLayouts.jsx';
import Services from './components/common/services/Services.jsx';
import SingleService from './components/SingleServ/SingleService.jsx';
import AboutUs from './components/About/AboutUs.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        { path: '', element: <Hero /> },
        { path: '/services', element: <Services /> },
        { path: '/services/:id', element: <SingleService /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/contact', element: <Contact /> },
      ]
    },

    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
