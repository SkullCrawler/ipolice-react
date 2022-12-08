/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  title: string
  description: string
  insights: string
  insightstat: string
  insighttotal: string
  members: string
  scoringupdates: string
}

const CardsWidget1: React.FC<Props> = ({
  title,
  description,
  insights,
  insightstat,
  insighttotal,
  members,
  scoringupdates,
}) => {
  return (
    <div className="card card-flush bg-light h-lg-100">
        {/* begin::Header */}
        <div className="card-header pt-5">
            {/* begin::Title */}
            <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">{title}</span>
                <span className="text-gray-400 mt-1 fw-semibold fs-6">{description}</span>
            </h3>
            {/* end::Title */}
            {/* begin::Toolbar */}
            <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr095.svg */}
                <span className="svg-icon svg-icon-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="currentColor"></path>
                        <rect x="21.9497" y="3.46448" width="13" height="2" rx="1" transform="rotate(135 21.9497 3.46448)" fill="currentColor"></rect>
                        <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="currentColor"></path>
                    </svg>
                </span>
                {/* end::Svg Icon */}
            </button>
            {/* end::Toolbar */}
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body pt-5">
            {/* begin::Item */}
            <div className="d-flex flex-stack">
                {/* begin::Section */}
                <div className="text-gray-700 fw-semibold fs-6 me-2">{insights}
                    Insights
                </div>
                {/* end::Section */}
                {/* begin::Statistics */}
                <div className="d-flex align-items-senter">
                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr094.svg */}
                    <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor"></rect>
                            <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* begin::Number */}
                    <span className="text-gray-900 fw-bolder fs-6">{insightstat}</span>
                    {/* end::Number */}
                    <span className="text-gray-400 fw-bold fs-6">/{insighttotal}</span>
                </div>
                {/* end::Statistics */}
            </div>
            {/* end::Item */}
            {/* begin::Separator */}
            <div className="separator separator-dashed my-3"></div>
            {/* end::Separator */}
            {/* begin::Item */}
            <div className="d-flex flex-stack">
                {/* begin::Section */}
                <div className="text-gray-700 fw-semibold fs-6 me-2">Community
                    Members
                </div>
                {/* end::Section */}
                {/* begin::Statistics */}
                <div className="d-flex align-items-senter">
                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr093.svg */}

                    {/* end::Svg Icon */}
                    {/* begin::Number */}
                    <span className="text-gray-900 fw-bolder fs-6">{members}</span>
                    {/* end::Number */}
                </div>
                {/* end::Statistics */}
            </div>
            {/* end::Item */}
            {/* begin::Separator */}
            <div className="separator separator-dashed my-3"></div>
            {/* end::Separator */}
            {/* begin::Item */}
            <div className="d-flex flex-stack">
                {/* begin::Section */}
                <div className="text-gray-700 fw-semibold fs-6 me-2">Scoring Posts
                </div>
                {/* end::Section */}
                {/* begin::Statistics */}
                <div className="d-flex align-items-senter">
                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr094.svg */}
                    <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor"></rect>
                            <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* begin::Number */}
                    <span className="text-gray-900 fw-bolder fs-6">{scoringupdates} Daily</span>
                    {/* end::Number */}
                </div>
                {/* end::Statistics */}
            </div>
            {/* end::Item */}
        </div>
        {/* end::Body */}
    </div>
  )
}

export {CardsWidget1}
