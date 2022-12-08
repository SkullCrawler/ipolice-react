import React, {FC} from 'react'

const HistoryToggleDrawer: FC = () => (
  <button
    id='kt_engage_history_toggle'
    className='engage-history-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0'
    title={`History of Deposits`}
    data-bs-toggle='tooltip'
    data-bs-placement='left'
    data-bs-dismiss='click'
    data-bs-trigger='hover'
  >
    <span id='kt_engage_history_label'>History of Deposits</span>
  </button>
)

export {HistoryToggleDrawer}
