import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dashboard} from './components/Dashboard'
import {AllProjects} from './components/AllProjects'
import {Ratings} from './components/Ratings'
import {RCBSearch} from './components/RCBSearch'
import {RecentEvents} from './components/RecentEvents'

const hyipBreadCrumbs: Array<PageLink> = [
  {
    title: 'HYIPs',
    path: 'hyip/dashboard',
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

const HyipPage = () => (
  <Routes>
      <Route
        path='Dashboard'
        element={
          <>
            <PageTitle breadcrumbs={hyipBreadCrumbs}> HYIPs | Dashboard</PageTitle>
            <Dashboard />
          </>
        }
      />
      <Route
        path='all'
        element={
          <>
            <PageTitle breadcrumbs={hyipBreadCrumbs}> HYIPs | All Projects</PageTitle>
            <AllProjects />
          </>
        }
      />
      <Route
        path='rating'
        element={
          <>
            <PageTitle breadcrumbs={hyipBreadCrumbs}> HYIPs | Ratings</PageTitle>
            <Ratings />
          </>
        }
      />
      <Route
        path='rcbSearch'
        element={
          <>
            <PageTitle breadcrumbs={hyipBreadCrumbs}> HYIPs | RCB Search</PageTitle>
            <RCBSearch />
          </>
        }
      />
      
      <Route
        path='recent'
        element={
          <>
            <PageTitle breadcrumbs={hyipBreadCrumbs}> HYIPs | Recent Events</PageTitle>
            <RecentEvents />
          </>
        }
      />
      
      <Route index element={<Navigate to='/hyip/dashboard' />} />
    
  </Routes>
)

export default HyipPage
