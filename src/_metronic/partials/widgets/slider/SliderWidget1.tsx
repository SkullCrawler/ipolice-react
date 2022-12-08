/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  title: string
  titledescription: string
  chartimg1src: string
  chartimg2src: string
  chartimg3src: string
  chartimg4src: string
  company1name: string
  company2name: string
  company3name: string
  company4name: string
  section1score: string
  section1deposits: string
  section1paid: string
  section1offers: string
  section1button: string
  section2score: string
  section2deposits: string
  section2paid: string
  section2offers: string
  section2button: string
  section3score: string
  section3deposits: string
  section3paid: string
  section3offers: string
  section3button: string
  section4score: string
  section4deposits: string
  section4paid: string
  section4offers: string
  section4button: string
}

const SliderWidget1: React.FC<Props> = ({
  title,
  titledescription,
  chartimg1src,
  chartimg2src,
  chartimg3src,
  chartimg4src,
  company1name,
  company2name,
  company3name,
  company4name,
  section1score,
  section1deposits,
  section1paid,
  section1offers,
  section1button,
  section2score,
  section2deposits,
  section2paid,
  section2offers,
  section2button,
  section3score,
  section3deposits,
  section3paid,
  section3offers,
  section3button,
  section4score,
  section4deposits,
  section4paid,
  section4offers,
  section4button,
}) => {
  return (
    <div id="kt_sliders_widget_1_slider" className="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100" data-bs-ride="carousel" data-bs-interval="3000">
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
                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to="0" className="ms-1"></li>
                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to="1" className="ms-1"></li>
                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to="2" className="ms-1 active" aria-current="true"></li>
                    <li data-bs-target="#kt_sliders_widget_1_slider" data-bs-slide-to="3" className="ms-1"></li>
                </ol>
                {/* end::Carousel Indicators */}
            </div>
            {/* end::Toolbar */}
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body  pt-6">
            {/* begin::Carousel */}
            <div className="carousel-inner mt-n5">
                {/* begin::Item */}
                <div className="carousel-item active">
                    {/* begin::Wrapper */}
                    <div className="d-flex align-items-center mb-5">
                        {/* begin::Chart */}
                        <div className="w-80px flex-shrink-0 me-2">
                            <div className="min-h-auto ms-n3 initialized" id="kt_slider_widget_1_chart_1" style={{height: 100, minHeight: 101}}>
                                <span className="symbol-label bg-light">
                                    <img src={chartimg1src} className=" align-self-end" style={{height: 85, width: 85}} alt="ChartImg"/>
                                    
                                </span>
                            </div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Info */}
                        <div className="m-0">
                            {/* begin::Subtitle */}
                            <h4 className="fw-bold text-gray-800 mb-3">{company1name}</h4>
                            {/* end::Subtitle */}
                            {/* begin::Items */}
                            <div className="d-flex d-grid gap-5">
                                {/* begin::Item */}
                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>IP Score:{section1score}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Total Deposits:{section1deposits}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Paid:{section1paid}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>RCB Offers:{section1offers}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                </div>
                                {/* end::Item */}
                            </div>
                            {/* end::Items */}
                        </div>
                        {/* end::Info */}
                    </div>
                    {/* end::Wrapper */}
                    {/* begin::Action */}
                    <div className="mt-2">
                        <a href={section1button} className="btn btn-sm btn-primary">View Project</a>
                    </div>
                    {/* end::Action */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className="carousel-item active">
                    {/* begin::Wrapper */}
                    <div className="d-flex align-items-center mb-5">
                        {/* begin::Chart */}
                        <div className="w-80px flex-shrink-0 me-2">
                            <div className="min-h-auto ms-n3 initialized" id="kt_slider_widget_1_chart_2" style={{height: 100, minHeight: 101}}>
                                <span className="symbol-label bg-light">
                                    <img src={chartimg2src} className=" align-self-end" style={{height: 85, width: 85}} alt="ChartImg"/>
                                    
                                </span>
                            </div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Info */}
                        <div className="m-0">
                            {/* begin::Subtitle */}
                            <h4 className="fw-bold text-gray-800 mb-3">{company2name}</h4>
                            {/* end::Subtitle */}
                            {/* begin::Items */}
                            <div className="d-flex d-grid gap-5">
                                {/* begin::Item */}
                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>IP Score:{section2score}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Total Deposits:{section2deposits}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Paid:{section2paid}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>RCB Offers:{section2offers}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                </div>
                                {/* end::Item */}
                            </div>
                            {/* end::Items */}
                        </div>
                        {/* end::Info */}
                    </div>
                    {/* end::Wrapper */}
                    {/* begin::Action */}
                    <div className="mt-2">
                        <a href={section2button} className="btn btn-sm btn-primary">View Project</a>
                    </div>
                    {/* end::Action */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className="carousel-item active">
                    {/* begin::Wrapper */}
                    <div className="d-flex align-items-center mb-5">
                        {/* begin::Chart */}
                        <div className="w-80px flex-shrink-0 me-2">
                            <div className="min-h-auto ms-n3 initialized" id="kt_slider_widget_1_chart_3" style={{height: 100, minHeight: 101}}>
                                <span className="symbol-label bg-light">
                                    <img src={chartimg3src} className=" align-self-end" style={{height: 85, width: 85}} alt="ChartImg"/>
                                    
                                </span>
                            </div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Info */}
                        <div className="m-0">
                            {/* begin::Subtitle */}
                            <h4 className="fw-bold text-gray-800 mb-3">{company3name}</h4>
                            {/* end::Subtitle */}
                            {/* begin::Items */}
                            <div className="d-flex d-grid gap-5">
                                {/* begin::Item */}
                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>IP Score:{section3score}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Total Deposits:{section3deposits}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Paid:{section3paid}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>RCB Offers:{section3offers}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                </div>
                                {/* end::Item */}
                            </div>
                            {/* end::Items */}
                        </div>
                        {/* end::Info */}
                    </div>
                    {/* end::Wrapper */}
                    {/* begin::Action */}
                    <div className="mt-2">
                        <a href={section3button} className="btn btn-sm btn-primary">View Project</a>
                    </div>
                    {/* end::Action */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className="carousel-item active">
                    {/* begin::Wrapper */}
                    <div className="d-flex align-items-center mb-5">
                        {/* begin::Chart */}
                        <div className="w-80px flex-shrink-0 me-2">
                            <div className="min-h-auto ms-n3 initialized" id="kt_slider_widget_1_chart_4" style={{height: 100, minHeight: 101}}>
                                <span className="symbol-label bg-light">
                                    <img src={chartimg4src} className=" align-self-end" style={{height: 85, width: 85}} alt="ChartImg"/>
                                    
                                </span>
                            </div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Info */}
                        <div className="m-0">
                            {/* begin::Subtitle */}
                            <h4 className="fw-bold text-gray-800 mb-3">{company4name}</h4>
                            {/* end::Subtitle */}
                            {/* begin::Items */}
                            <div className="d-flex d-grid gap-5">
                                {/* begin::Item */}
                                <div className="d-flex flex-column flex-shrink-0 me-4">
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>IP Score:{section4score}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Total Deposits:{section4deposits}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center fs-7 fw-bold text-gray-400">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>Paid:{section4paid}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                    {/* begin::Section */}
                                    <span className="d-flex align-items-center text-gray-400 fw-bold fs-7">
                                        <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                                            <svg width="24" height="24" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"></rect>
                                                <path d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>RCB Offers:{section4offers}
                                        {/* end::Svg Icon */}
                                    </span>
                                    {/* end::Section */}
                                </div>
                                {/* end::Item */}
                            </div>
                            {/* end::Items */}
                        </div>
                        {/* end::Info */}
                    </div>
                    {/* end::Wrapper */}
                    {/* begin::Action */}
                    <div className="mt-2">
                        <a href={section4button} className="btn btn-sm btn-primary">View Project</a>
                    </div>
                    {/* end::Action */}
                </div>
                {/* end::Item */}
            </div>
            {/* end::Carousel */}
        </div>
        {/* end::Body */}
    </div>
  )
}

export {SliderWidget1}
