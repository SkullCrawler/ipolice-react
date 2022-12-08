import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Industry} from './components/Industry'
import {BlogsMonitoring} from './components/BlogsMonitoring'
import {News} from './components/News'
import {EventsMap} from './components/EventsMap'
import {Advertise} from './components/Advertise'

const InfoBreadCrumbs: Array<PageLink> = [
  {
    title: 'HYIP Industry',
    path: 'info/industry',
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

const InfoPage = () => (
  <Routes>
    <Route
      path='industry'
      element={
        <>
          <PageTitle breadcrumbs={InfoBreadCrumbs}> HYIP Info | Industry</PageTitle>
          <Industry />
        </>
      }
    />
    <Route
      path='blog'
      element={
        <>
          <PageTitle breadcrumbs={InfoBreadCrumbs}> HYIP Info | Blogs & Monitoring</PageTitle>
          <BlogsMonitoring />
        </>
      }
    />
    <Route
      path='news'
      element={
        <>
          <PageTitle breadcrumbs={InfoBreadCrumbs}> HYIP Info | News</PageTitle>
          <News />
        </>
      }
    />
    <Route
      path='events'
      element={
        <>
          <PageTitle breadcrumbs={InfoBreadCrumbs}> HYIP Info | Events Map</PageTitle>
          <EventsMap />
        </>
      }
    />
    <Route
      path='advertise'
      element={
        <>
          <PageTitle breadcrumbs={InfoBreadCrumbs}> HYIP Info | Advertise</PageTitle>
          <Advertise />
        </>
      }
    />
    <Route index element={<Navigate to='/info/industry' />} />
</Routes>
)

export default InfoPage
