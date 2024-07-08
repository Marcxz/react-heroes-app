import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MarvelPage from '../heroes/pages/MarvelPage'
import DcPage from '../heroes/pages/DcPage'
import LoginPage from '../auth/pages/LoginPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<MarvelPage />} />
            <Route path='/marvel' element={<MarvelPage />} />
            <Route path='/dc' element={<DcPage />} />
            <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
