import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import PrivateRoute from '../heroes/routes/PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <>
      <Routes>
            <Route path='login/*' element={
              <PublicRoute>
                <Routes>
                  <Route path='/*' element={<LoginPage />} />
                </Routes>
            </PublicRoute>} />
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
              } />
      </Routes>
    </>
  )
}

export default AppRouter
