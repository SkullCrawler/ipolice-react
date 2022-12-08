import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dashboard} from './components/Dashboard'
import {AllCoins} from './components/AllCoins'
import {News} from './components/News'
import {Ratings} from './components/Ratings'

const coinsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Coins',
    path: '/coins/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CoinsPage = () => (
  <Routes>
    <Route
      path='Dashboard'
      element={
        <>
          <PageTitle breadcrumbs={coinsBreadCrumbs}>Coins | Dashboard</PageTitle>
          <Dashboard />
        </>
      }
    />
    <Route
      path='all'
      element={
        <>
          <PageTitle breadcrumbs={coinsBreadCrumbs}>Coins | All Coins</PageTitle>
          <AllCoins />
        </>
      }
    />
    <Route
      path='news'
      element={
        <>
          <PageTitle breadcrumbs={coinsBreadCrumbs}>Coins | News</PageTitle>
          <News />
        </>
      }
    />
    <Route
      path='ratings'
      element={
        <>
          <PageTitle breadcrumbs={coinsBreadCrumbs}>Coins | Ratings</PageTitle>
          <Ratings />
        </>
      }
    />
    <Route index element={<Navigate to='/coins/dashboard' />} />
  </Routes>
)

export default CoinsPage
