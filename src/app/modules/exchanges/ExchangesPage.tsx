import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dashboard} from './components/Dashboard'
import {Spot} from './components/Spot'
import {Derivatives} from './components/Derivatives'
import {Dex} from './components/Dex'
import {Lending} from './components/Lending'

const ExchangesBreadCrumbs: Array<PageLink> = [
  {
    title: 'Exchanges',
    path: 'exchanges/dashboard',
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

const ExchangesPage = () => (
  <Routes>
    
      <Route
        path='dashboard'
        element={
          <>
            <PageTitle breadcrumbs={ExchangesBreadCrumbs}> Exchanges | Dashboard</PageTitle>
            <Dashboard />
          </>
        }
      />
      <Route
        path='spot'
        element={
          <>
            <PageTitle breadcrumbs={ExchangesBreadCrumbs}> Exchanges | Spot</PageTitle>
            <Spot />
          </>
        }
      />
      <Route
        path='derivatives'
        element={
          <>
            <PageTitle breadcrumbs={ExchangesBreadCrumbs}> Exchanges | Derivatives</PageTitle>
            <Derivatives />
          </>
        }
      />
      <Route
        path='dex'
        element={
          <>
            <PageTitle breadcrumbs={ExchangesBreadCrumbs}> Exchanges | Dex</PageTitle>
            <Dex />
          </>
        }
      />
      <Route
        path='lending'
        element={
          <>
            <PageTitle breadcrumbs={ExchangesBreadCrumbs}> Exchanges | Lending</PageTitle>
            <Lending />
          </>
        }
      />
      <Route index element={<Navigate to='/exchanges/dashboard' />} />
    
  </Routes>
)

export default ExchangesPage
