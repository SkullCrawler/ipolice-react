import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Dashboard} from './components/Dashboard'
import {Explore} from './components/Explore'
import {Stats} from './components/Stats'
import {Rankings} from './components/Rankings'
import {Activity} from './components/Activity'

const NftBreadCrumbs: Array<PageLink> = [
  {
    title: 'NFTs',
    path: 'nfts/dashboard',
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

const NftPage = () => (
  <Routes>
    
      <Route
        path='dashboard'
        element={
          <>
            <PageTitle breadcrumbs={NftBreadCrumbs}> NFTs | Dashboard</PageTitle>
            <Dashboard />
          </>
        }
      />
      <Route
        path='explore'
        element={
          <>
            <PageTitle breadcrumbs={NftBreadCrumbs}> NFTs | Explore</PageTitle>
            <Explore />
          </>
        }
      />
      <Route
        path='stats'
        element={
          <>
            <PageTitle breadcrumbs={NftBreadCrumbs}> NFTs | Stats</PageTitle>
            <Stats />
          </>
        }
      />
      <Route
        path='rankings'
        element={
          <>
            <PageTitle breadcrumbs={NftBreadCrumbs}> NFTs | Rankings</PageTitle>
            <Rankings />
          </>
        }
      />
      <Route
        path='activity'
        element={
          <>
            <PageTitle breadcrumbs={NftBreadCrumbs}> NFTs | Activity</PageTitle>
            <Activity />
          </>
        }
      />
      <Route index element={<Navigate to='/nfts/dashboard' />} />
    
  </Routes>
)

export default NftPage
