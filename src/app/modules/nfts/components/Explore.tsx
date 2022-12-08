/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function Explore() {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-center text-center p-10">
        {/* begin::Wrapper */}
        <div className="card card-flush w-lg-650px py-5">
          <div className="card-body py-15 py-lg-20">
            {/* begin::Title */}
            <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Coming Soon</h1>
            {/* end::Title */}
            {/* begin::Text */}
            <div className="fw-semibold fs-6 text-gray-500 mb-7">We are creating some thing exciting!</div>
            {/* end::Text */}
            {/* begin::Illustration */}
            <div className="mb-3">
              <img src="/metronic8/demo6/assets/media/auth/404-error.png" className="mw-100 mh-300px theme-light-show" alt=""/>
              <img src="/metronic8/demo6/assets/media/auth/404-error-dark.png" className="mw-100 mh-300px theme-dark-show" alt=""/>
            </div>
            {/* end::Illustration */}
            {/* begin::Link */}
            <div className="mb-0">
              <a href="https://investorspolice.com/" className="btn btn-sm btn-primary">Return Home</a>
            </div>
            {/* end::Link */}
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}
