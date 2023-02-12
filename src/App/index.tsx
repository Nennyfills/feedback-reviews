import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'Components';

function App() {
 return (
  <main className="app" data-testid="app">
   <ToastContainer autoClose={200} />
   <Layout>
    <Routes>
     {routes.map((value) => (
      <Route
       key={value?.path}
       element={<Suspense fallback={value?.loader}>{value?.element}</Suspense>}
       path={value?.path}
      />
     ))}
    </Routes>
   </Layout>
  </main>
 );
}

export default App;
