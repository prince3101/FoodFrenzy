import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const About = lazy(() => import('../pages/about'));
const Table = lazy(() => import('../pages/table'));
const Inventory = lazy(() => import('../pages/inventory'));



const Navigate = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route exact path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route exact path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route exact path="/table" element={<Suspense fallback={<div>Loading...</div>}><Table /></Suspense>} />
        <Route exact path="/inventory" element={<Suspense fallback={<div>Loading...</div>}><Inventory /></Suspense>} />
    </Routes>
  );
};

export default Navigate;