import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Protected from "../route/protectRoute/ProtectRoute"
const Home = lazy(() => import('../component/Home'));
const Login = lazy(() => import('../component/Login'));

function Routing() {
    return (
        <main>
            <Suspense fallback={<div className='loader'> </div>}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Protected.ProtectedRoute><Home /></Protected.ProtectedRoute>} />
                </Routes>
            </Suspense>
        </main>
    )
}

export default Routing
