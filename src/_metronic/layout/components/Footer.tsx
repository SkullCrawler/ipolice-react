/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import clsx from 'clsx'
import {useLayout} from '../core'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className={'footer py-4 d-flex flex-lg-column'} id='kt_footer'>
      {/*begin::Container*/}
      <div
        className={clsx(
          classes.footerContainer,
          'd-flex flex-column flex-md-row align-items-center justify-content-between'
        )}
      >
        {/*begin::Copyright*/}
        <div className='text-dark order-2 order-md-1'>
          <span className='text-muted fw-bold me-1'>{new Date().getFullYear()}&copy; </span>
          <a href='Keenthemes.com' target='_blank' className='text-gray-800 text-hover-primary'>
            Investors Police
          </a>
        </div>
        {/*end::Copyright*/}

        {/*begin::Menu*/}
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              About
            </a>
          </li>

          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              Advertise
            </a>
          </li>

          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              Careers
            </a>
          </li>
          <li className='menu-item'>
            <a href='#' target='_blank' className='menu-link px-2'>
              Contact Us
            </a>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Container*/}
    </div>
  )
}

export {Footer}
