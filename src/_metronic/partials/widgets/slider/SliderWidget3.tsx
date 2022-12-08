/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  title: string
  titledescription: string
  chartimg1src: string
  chartimg2src: string
  chartimg3src: string
  company1name: string
  company2name: string
  company3name: string
  section1score: string
  section1vol: string
  section1button: string
  section2score: string
  section2vol: string
  section2button: string
  section3score: string
  section3vol: string
  section3button: string
}

const SliderWidget3: React.FC<Props> = ({
  title,
  titledescription,
  chartimg1src,
  chartimg2src,
  chartimg3src,
  company1name,
  company2name,
  company3name,
  section1score,
  section1vol,
  section1button,
  section2score,
  section2vol,
  section2button,
  section3score,
  section3vol,
  section3button,
}) => {
  return (
        <div id="kt_sliders_widget_3_slider" className="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100" data-bs-ride="carousel" data-bs-interval="2000">
                {/* begin::Header */}
                <div className="card-header pt-5">
                    {/* begin::Title */}
                    <h4 className="card-title d-flex align-items-start flex-column">
                        <span className="card-label fw-bold text-gray-800">{title}</span>
                        <span className="text-gray-400 mt-1 fw-bold fs-7">{titledescription}</span>
                    </h4>
                    {/* end::Title */}
                    {/* begin::Toolbar */}
                    <div className="card-toolbar">
                        {/* begin::Carousel Indicators */}
                        <ol className="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-success">
                            <li data-bs-target="#kt_sliders_widget_3_slider" data-bs-slide-to="0" className="ms-1 active" aria-current="true"></li>
                            <li data-bs-target="#kt_sliders_widget_3_slider" data-bs-slide-to="1" className="ms-1"></li>
                            <li data-bs-target="#kt_sliders_widget_3_slider" data-bs-slide-to="2" className="ms-1"></li>
                        </ol>
                        {/* end::Carousel Indicators */}
                    </div>
                    {/* end::Toolbar */}
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className="card-body pt-6">
                    {/* begin::Carousel */}
                    <div className="carousel-inner">
                        {/* begin::Item */}
                        <div className="carousel-item active">
                            {/* begin::Wrapper */}
                            <div className="d-flex align-items-center mb-9">
                                {/* begin::Symbol */}
                                <div className="symbol symbol-70px symbol-circle me-5" id="kt_slider_widget_3_chart_1">
                                    <span className="symbol-label bg-light-success">
                                        {/* begin::Svg Icon | path: icons/duotune/abstract/abs025.svg */}
                                        <img src={chartimg1src} alt="Chartimg" className="d6bmin-2 hlsoxu"/>
                                        {/* end::Svg Icon */}
                                    </span>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Info */}
                                <div className="m-0">
                                    {/* begin::Subtitle */}
                                    <h4 className="fw-bold text-gray-800 mb-3">{company1name}</h4>
                                    {/* end::Subtitle */}
                                    {/* begin::Info */}
                                    <div className="d-flex d-grid gap-5">
                                        {/* begin::Item */}
                                        <div className="d-flex flex-column flex-shrink-0 me-4">
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center text-gray-600 fw-bold fs-7">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Volume 24 hr:{section1vol}
                                            </span>
                                            {/* end::Section */}
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center fs-7 fw-bold text-gray-600">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Exchange Score:<span className="badge badge-success ms-2 ">{section1score}</span>
                                            </span>
                                            {/* begin::Section */}
                                        </div>
                                        {/* end::Item */}
                                    </div>
                                    {/* end::Info */}
                                </div>

                                {/* end::Wrapper */}
                                {/* begin::Action */}

                                {/* end::Action */}
                            </div>
                            <div className="mb-1">

                                <a href={section1button} className="btn btn-sm btn-primary">View Details</a>
                            </div>
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className="carousel-item active">
                            {/* begin::Wrapper */}
                            <div className="d-flex align-items-center mb-9">
                                {/* begin::Symbol */}
                                <div className="symbol symbol-70px symbol-circle me-5" id="kt_slider_widget_3_chart_2">
                                    <span className="symbol-label bg-light-success">
                                        {/* begin::Svg Icon | path: icons/duotune/abstract/abs025.svg */}
                                        <img src={chartimg2src} alt="Chartimg" className="d6bmin-2 hlsoxu"/>
                                        {/* end::Svg Icon */}
                                    </span>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Info */}
                                <div className="m-0">
                                    {/* begin::Subtitle */}
                                    <h4 className="fw-bold text-gray-800 mb-3">{company2name}</h4>
                                    {/* end::Subtitle */}
                                    {/* begin::Info */}
                                    <div className="d-flex d-grid gap-5">
                                        {/* begin::Item */}
                                        <div className="d-flex flex-column flex-shrink-0 me-4">
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center text-gray-600 fw-bold fs-7">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Volume 24 hr:{section2vol}
                                            </span>
                                            {/* end::Section */}
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center fs-7 fw-bold text-gray-600">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Exchange Score:<span className="badge badge-success ms-2 ">{section2score}</span>
                                            </span>
                                            {/* begin::Section */}
                                        </div>
                                        {/* end::Item */}
                                    </div>
                                    {/* end::Info */}
                                </div>

                                {/* end::Wrapper */}
                                {/* begin::Action */}

                                {/* end::Action */}
                            </div>
                            <div className="mb-1">

                                <a href={section2button} className="btn btn-sm btn-primary">View Details</a>
                            </div>
                        </div>
                        {/* end::Item */}
                        {/* begin::Item */}
                        <div className="carousel-item active">
                            {/* begin::Wrapper */}
                            <div className="d-flex align-items-center mb-9">
                                {/* begin::Symbol */}
                                <div className="symbol symbol-70px symbol-circle me-5" id="kt_slider_widget_3_chart_3">
                                    <span className="symbol-label bg-light-success">
                                        {/* begin::Svg Icon | path: icons/duotune/abstract/abs025.svg */}
                                        <img src={chartimg3src} alt="Chartimg" className="d6bmin-2 hlsoxu"/>
                                        {/* end::Svg Icon */}
                                    </span>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Info */}
                                <div className="m-0">
                                    {/* begin::Subtitle */}
                                    <h4 className="fw-bold text-gray-800 mb-3">{company3name}</h4>
                                    {/* end::Subtitle */}
                                    {/* begin::Info */}
                                    <div className="d-flex d-grid gap-5">
                                        {/* begin::Item */}
                                        <div className="d-flex flex-column flex-shrink-0 me-4">
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center text-gray-600 fw-bold fs-7">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Volume 24 hr:{section3vol}
                                            </span>
                                            {/* end::Section */}
                                            {/* begin::Section */}
                                            <span className="d-flex align-items-center fs-7 fw-bold text-gray-600">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen057.svg */}
                                                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                        <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                                Exchange Score:<span className="badge badge-success ms-2 ">{section3score}</span>
                                            </span>
                                            {/* begin::Section */}
                                        </div>
                                        {/* end::Item */}
                                    </div>
                                    {/* end::Info */}
                                </div>
                                {/* end::Wrapper */}
                            </div>
                            <div className="mb-1">
                                <a href={section3button} className="btn btn-sm btn-primary">View Details</a>
                            </div>
                        </div>
                        {/* end::Item */}
                        {/* end::Action */}
                    </div>
                    {/* end::Carousel */}
                </div>
            {/* end::Body */}
        </div>
  )
}

export {SliderWidget3}
