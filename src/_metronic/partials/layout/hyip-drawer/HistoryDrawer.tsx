/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {KTSVG} from '../../../helpers'

export function HistoryDrawer() {
  return (
    <>
      {/* begin::History drawer */}
      <div
        id='kt_engage_history'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_engage_history_toggle'
        data-kt-drawer-close='#kt_engage_history_close'
      >
        {/* begin::Card  */}
        <div className='card shadow-none w-100'>
          {/* begin::Header */}
          <div className='card-header' id='kt_explore_header'>
            <h5 className='card-title fw-bold text-gray-600'>
              History of Deposits
            </h5>

            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon explore-btn-dismiss me-n5'
                id='kt_engage_history_close'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
              </button>
            </div><br/>
            <p>
              This page shows a timeline with all project deposits. 
              The lists are sorted by the amount of investments from more to less. 
              The list shows the total amount of investments and the number of deposits. 
              Clicking on the project opens detailed statistics of deposits for the selected day.
            </p>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body' id='kt_explore_body'>
            {/* begin::Content */}
            
            {/* end::Content */}
          </div>
          {/* end::Body */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::History drawer */}
    </>
  )
}
