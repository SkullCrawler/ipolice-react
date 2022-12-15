/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  color: string
  title: string
  description: string
  progress: string
  amount: string
}

const StatisticsWidget6: React.FC<Props> = ({className, color, title, description, progress, amount}) => {
  return (
    <div className={`card bg-light-${color} ${className}`} style={{ height: 218}}>
      {/* begin::Body */}
      <div className='card-body my-3'>
        <a href='#' className={`card-title fw-bold text-${color} fs-5 mb-3 d-block`}>
          {description}
        </a>

        <div className='py-1'>
          <span className='text-dark fs-1 fw-bold me-2'>{amount}</span>

          <span className='fw-semibold text-muted fs-7'>{title}</span>
        </div>

        <div className={`progress h-7px bg-${color} bg-opacity-50 mt-7`}>
          <div
            className={`progress-bar bg-${color}`}
            role='progressbar'
            style={{width: progress}}
          />
        </div>
      </div>
      {/* end:: Body */}
    </div>
  )
}

export {StatisticsWidget6}
