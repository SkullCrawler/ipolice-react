import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dashboard} from './components/Dashboard'
import {DeFi} from './components/DeFi'
import {Gambling} from './components/Gambling'
import {Marketplace} from './components/Marketplace'
import {HighRisk} from './components/HighRisk'

const dappsBreadCrumbs: Array<PageLink> = [
  {
    title: 'D-APPs',
    path: '/dapps/dashboard',
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

const DappsPage = () => (
  <Routes>
    
      <Route
        path='Dashboard'
        element={
          <>
            <PageTitle breadcrumbs={dappsBreadCrumbs}>D-APPs | Dashboard</PageTitle>
            <Dashboard />
          </>
        }
      />
      <Route
        path='defi'
        element={
          <>
            <PageTitle breadcrumbs={dappsBreadCrumbs}>D-APPs | De-Fi</PageTitle>
            <DeFi />
          </>
        }
      />
      <Route
        path='gambling'
        element={
          <>
            <PageTitle breadcrumbs={dappsBreadCrumbs}>D-APPs | Gambling</PageTitle>
            <Gambling />
          </>
        }
      />
      <Route
        path='market'
        element={
          <>
            <PageTitle breadcrumbs={dappsBreadCrumbs}>D-APPs | Marketplace</PageTitle>
            <Marketplace />
          </>
        }
      />
      <Route
        path='highrisk'
        element={
          <>
            <PageTitle breadcrumbs={dappsBreadCrumbs}>D-APPs | High Risk</PageTitle>
            <HighRisk />
          </>
        }
      />
      <Route index element={<Navigate to='/dapps/dashboard' />} />
    
  </Routes>
)

export default DappsPage
