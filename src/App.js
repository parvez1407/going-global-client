import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './routes/Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';


function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
