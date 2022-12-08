import React from 'react'
import {RightToolbar} from '../../../../_metronic/partials/layout/RightToolbar'
import { AdWidget1, StatisticsWidget6 } from '../../../../_metronic/partials/widgets'
import { ApexWidget1 } from '../../../../_metronic/partials/widgets/apex/ApexWidget1'
import { ApexWidget2 } from '../../../../_metronic/partials/widgets/apex/ApexWidget2'
import { StatisticsWidget7 } from '../../../../_metronic/partials/widgets/statistics/StatisticsWidget7'

export function Dashboard() {
  return (
    <>
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container">
            {/* begin::Post */}
            <div className="content flex-row-fluid" id="kt_content">
                {/* begin::Row */}
                <AdWidget1
                    adsrc1='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                    adsrc2='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                    adsrc3='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                />
                <div className="row g-5 g-lg-10">
                    <div className="col-xl-12 mb-xl-10">
                        {/* begin::Mixed Widget 6 */}
                        <StatisticsWidget7
                            className='card h-xl-40'
                            title='HYIP Industry Stats'
                            description='Recent HYIP statistics'
                            stat1='Paying HYIPs'
                            statnum1='24'
                            svgstat1='/media/icons/duotune/art/art007.svg'
                            stat2='Total HYIPs in the database'
                            statnum2='30890'
                            svgstat2='/media/icons/duotune/ecommerce/ecm002.svg'
                            stat3='Added Today'
                            statnum3='6'
                            svgstat3='/media/icons/duotune/abstract/abs027.svg'
                            stat4='Scammed Today'
                            statnum4='8'
                            svgstat4='/media/icons/duotune/ecommerce/ecm010.svg'
                            stat5='Redisigned Today'
                            statnum5='8'
                            svgstat5='/media/icons/duotune/ecommerce/ecm008.svg' 
                        />
                        {/* end::Mixed Widget 6 */}
                    </div>

                    {/* end::Col */}
                </div>
                <div className="row">
                    <div className="col-6">
                        <AdWidget1
                            adsrc1='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                            adsrc2='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                            adsrc3='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                        />
                    </div>
                    <div className="col-6">
                        <AdWidget1
                            adsrc1='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                            adsrc2='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                            adsrc3='https://static.h-metrics.com/upload/202210/banners/bb400ce1832e4c48c697eff6a8cdb9fb.gif'
                        />
                    </div>
                </div>
                <div className="row g-5 g-xl-8">
                    <div className="col-xl-3">
                        {/* begin::Apex Widget 1 */}
                        <ApexWidget1 
                            title='Search for the best RCB Offers'
                            description='RCB - Referral Commission Back'
                        />
                        {/* end::Apex Widget 1 */}
                    </div>
                    <div className="col-xl-6">
                        {/* begin::Charts Widget 5 */}
                        <ApexWidget2
                            title='Industry Dynamics'
                            description='The graph shows the number of new and scam
                            projects by day over the last 10 days'
                        />
                        {/* end::Charts Widget 5 */}
                    </div>
                    <div className="col-xl-3 " style={{ height: 450 }}>
                        {/* begin::Charts Widget 5 */}
                        <StatisticsWidget6
                            className='card-xl-stretch mb-xl-8'
                            color='success'
                            title='In Last 10 Days'
                            description='Deposits'
                            progress='50%'
                            amount='$48,325'
                        />
                        <StatisticsWidget6
                            className='card-xl-stretch mb-xl-8'
                            color='warning'
                            title='In Last 10 Days'
                            description='Paid Out'
                            progress='15%'
                            amount='$16,953'
                        />
                        {/* end::Charts Widget 5 */}
                    </div>
                </div>
                <div className="row g-5 g-lg-10">
                    <div className="col-xl-3 mb-xl-10">
                        {/* begin::List Widget 4 */}
                        <div className="card h-xl ">
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-light">New Projects</span>
                                    <span className="text-muted mt-1 fw-bold fs-7">Recently Launched Projects</span>
                                </h3>

                            </div>
                            <div className="separator separator-dashed my-3"></div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-6 overflow-auto" style={{ height: 300 }}>
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                        {/* begin::Table head */}
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white ">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">One Bull</a>
                                                            <span className="fw-bold text-white">onebull.cc</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">Sedo Mining</a>
                                                            <span className="fw-bold text-white">sedomining.farm</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                </div>
                                {/* end::Table */}
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        {/* begin::List Widget 4 */}
                        <div className="card h-xl bg-light-success">
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-light">Most Popular</span>
                                    <span className="text-muted mt-1 fw-bold fs-7">Popular projects with high IP index score</span>

                                </h3>

                            </div>
                            <div className="separator separator-dashed my-3"></div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-6 overflow-auto" style={{ height: 300 }}>
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                        {/* begin::Table head */}
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white ">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">One Bull</a>
                                                            <span className="fw-bold text-white">onebull.cc</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">Sedo Mining</a>
                                                            <span className="fw-bold text-white">sedomining.farm</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                </div>
                                {/* end::Table */}
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        {/* begin::List Widget 4 */}
                        <div className="card h-xl bg-light-danger">
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-light">Just Scammed</span>
                                </h3>

                            </div>
                            <div className="separator separator-dashed my-3"></div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-6 overflow-auto" style={{ height: 300 }}>
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                        {/* begin::Table head */}
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white ">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">One Bull</a>
                                                            <span className="fw-bold text-white">onebull.cc</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">Sedo Mining</a>
                                                            <span className="fw-bold text-white">sedomining.farm</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                </div>
                                {/* end::Table */}
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        {/* begin::List Widget 4 */}
                        <div className="card h-xl">
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-light">Recent Redesigns</span>
                                    <span className="text-muted mt-1 fw-bold fs-7">Projects with recent design updates</span>
                                </h3>

                            </div>
                            <div className="separator separator-dashed my-3"></div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-6 overflow-auto" style={{ height: 300 }}>
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                        {/* begin::Table head */}
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white ">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">One Bull</a>
                                                            <span className="fw-bold text-white">onebull.cc</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">Sedo Mining</a>
                                                            <span className="fw-bold text-white">sedomining.farm</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-3">
                                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="" alt=""/>
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="fw-bold text-white  fs-4">REVOD Finance</a>
                                                            <span className="fw-bold text-white">revod.io</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="fw-bold text-white fs-6">25/06/2022</span>
                                                </td>
                                                <td className="text-end pe-0">
                                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">3 days back</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                </div>
                                {/* end::Table */}
                            </div>
                        </div>

                    </div>


                    {/* end::Col */}
                </div>
                <div className="row g-5 g-lg-10">
                    <div className="col-xl-9 mb-xl-10">
                        {/* begin::Mixed Widget 6 */}

                        <div className="card mt-5 mb-5 mb-xl-8" style={{ height: 600 }}>
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold fs-3 mb-1">Recent Events</span>
                                    <span className="text-muted mt-1 fw-semibold fs-8">A list of events over the last 24 hours,
                                        grouped by
                                        project. The list is sorted by the relevance of the last event of the project.</span>
                                </h3>





                            </div>


                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body py-3 overflow-auto">
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className="fw-bold text-muted">

                                                <th className="min-w-200px">HYIPs</th>
                                                <th className="min-w-150px">Events</th>

                                            </tr>
                                        </thead>
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                                                Finance</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                                        </rect>
                                                                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                                        </rect>
                                                                    </svg></span>
                                                                <span className="badge badge-primary ">new</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>
                                                        <div className=" col m-1 p-2 bg-light " style={{ minWidth: 'fit-content', maxWidth: 'fit-content' }}>
                                                            <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                                            <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                                                ago</a>
                                                            <span className="text-muted fw-semibold text-muted d-block fs-9">

                                                                <span className="badge badge-success ">Paying</span>

                                                                <span className="text-dark ">changed to</span>
                                                                <span className="badge badge-danger ">Not Paying</span>

                                                            </span>
                                                        </div>

                                                    </div>
                                                </td>

                                            </tr>

                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                    {/* end::Table */}
                                </div>
                                {/* end::Table container */}
                            </div>
                            {/* begin::Body */}
                        </div>
                        {/* end::Mixed Widget 6 */}
                    </div>

                    <div className="col-xl-3 mb-xl-10">
                        {/* begin::List Widget 4 */}

                        <div className="card h-xl mt-5" style={{ height: 600 }}>
                            {/* begin::Header */}
                            <div className="card-header border-0 pt-5">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-dark">Marked"Admin Joined"</span>
                                    <span className="text-muted mt-1 fw-bold fs-7">A list of projects sorted by the date <br/>of
                                        registration of the administration in our system. </span>
                                </h3>

                            </div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-6 overflow-auto">
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                    {/* begin::Table */}
                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                        {/* begin::Table head */}
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a className="nav-link btn btn-flex flex-center btn-light-success btn-color-gray-600 btn-active-color-white rounded-2 w-50px h-50px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1" style={{ marginRight: 10 }}>6.2</a>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6">REVOD
                                                                Finance</a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">3%daily for 45
                                                                days, 4% daily for 55 days</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end " style={{ width: 150 }}>
                                                    <span className="badge badge-success fs-base">3 </span>
                                                    <span className="badge badge-primary fs-base">0 </span>
                                                    <span className="badge badge-danger fs-base">0 </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-50px h-50px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1" style={{ marginRight: 10 }}>2.2</a>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6">One
                                                                Bull</a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">3%daily for 45
                                                                days, 4% daily for 55 days,6%daily for 45 days</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end ">
                                                    <span className="badge badge-success fs-base">3 </span>
                                                    <span className="badge badge-primary fs-base">0 </span>
                                                    <span className="badge badge-danger fs-base">0 </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-50px h-50px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1" style={{ marginRight: 10 }}>2.2</a>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6">One
                                                                Bull</a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">3%daily for 45
                                                                days, 4% daily for 55 days,6%daily for 45 days</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end ">
                                                    <span className="badge badge-success fs-base">3 </span>
                                                    <span className="badge badge-primary fs-base">0 </span>
                                                    <span className="badge badge-danger fs-base">0 </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-50px h-50px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1" style={{ marginRight: 10 }}>2.2</a>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6">One
                                                                Bull</a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">3%daily for 45
                                                                days, 4% daily for 55 days,6%daily for 45 days</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end ">
                                                    <span className="badge badge-success fs-base">3 </span>
                                                    <span className="badge badge-primary fs-base">0 </span>
                                                    <span className="badge badge-danger fs-base">0 </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-50px h-50px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1" style={{ marginRight: 10 }}>2.2</a>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <a href="#" className="text-gray-800 fw-bolder text-hover-primary mb-1 fs-6">One
                                                                Bull</a>
                                                            <span className="text-gray-400 fw-bold d-block fs-7">3%daily for 45
                                                                days, 4% daily for 55 days,6%daily for 45 days</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end ">
                                                    <span className="badge badge-success fs-base">3 </span>
                                                    <span className="badge badge-primary fs-base">0 </span>
                                                    <span className="badge badge-danger fs-base">0 </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                </div>
                                {/* end::Table */}
                            </div>
                            {/* end::Body */}
                        </div>
                    </div>
                    {/* end::Col */}
                </div>
                <div className="row g-5 g-lg-10">
                    {/* begin::Col */}
                    <div className="col-xl-8 mb-xl-10">
                        {/* begin::Chart widget 10 */}
                        <div className="card card-flush h-xxl-100">
                            {/* begin::Header */}
                            <div className="card-header pt-7">
                                {/* begin::Title */}
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-gray-800">History of Deposits</span>
                                    <span className="text-gray-400 mt-1 fw-bold fs-6">Top projects history by deposits</span>
                                </h3>
                                <div className="card-toolbar">
                                    <a className="btn btn-sm btn-light-primary fw-bolder" data-bs-toggle="modal" data-bs-target="#deposits" title="" data-bs-original-title="All Project News">View All</a>
                                </div>
                            </div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body d-flex flex-column pb-5 pt-1 px-0">
                                {/* begin::Nav */}
                                <ul className="nav nav-pills nav-pills-custom mb-3 mx-9" role="tablist">
                                    {/* begin::Item */}
                                    <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                        {/* begin::Link */}
                                        <a className="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden   pt-5 pb-3 active" data-bs-toggle="pill" id="kt_charts_widget_10_tab_1" href="#kt_charts_widget_10_tab_content_1" aria-selected="true" role="tab">
                                            <span className="badge badge-primary fs-base">Total: $12186.96 </span>
                                            <span className="nav-text text-gray-800 fw-bolder fs-6 lh-1">
                                                <br/>Today, Jun 26, 2022 </span>
                                            {/* end::Title */}
                                            {/* begin::Bullet */}
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                            {/* end::Bullet */}
                                        </a>
                                        {/* end::Link */}
                                    </li>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                        {/* begin::Link */}
                                        <a className="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden  pt-5 pb-3" data-bs-toggle="pill" id="kt_charts_widget_10_tab_2" href="#kt_charts_widget_10_tab_content_2" aria-selected="false" role="tab">
                                            {/* begin::Icon */}
                                            <span className="badge badge-primary fs-base">Total: $11186.96 </span>
                                            <span className="nav-text text-gray-800 fw-bolder fs-6 lh-1">
                                                <br/>Yesterday, Jun 25, 2022 </span>
                                            {/* end::Title */}
                                            {/* begin::Bullet */}
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                            {/* end::Bullet */}
                                        </a>
                                        {/* end::Link */}
                                    </li>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                        {/* begin::Link */}
                                        <a className="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden  pt-5 pb-3" data-bs-toggle="pill" id="kt_charts_widget_10_tab_3" href="#kt_charts_widget_10_tab_content_3" aria-selected="false" role="tab">
                                            <span className="badge badge-primary fs-base">Total: $17386.96 </span>
                                            <span className="nav-text text-gray-800 fw-bolder fs-6 lh-1">
                                                <br/>Jun 24, 2022 </span>
                                            {/* end::Title */}
                                            {/* begin::Bullet */}
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                            {/* end::Bullet */}
                                        </a>
                                        {/* end::Link */}
                                    </li>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                        {/* begin::Link */}
                                        <a className="nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden  pt-5 pb-3" data-bs-toggle="pill" id="kt_charts_widget_10_tab_4" href="#kt_charts_widget_10_tab_content_4" aria-selected="false" role="tab">
                                            <span className="badge badge-primary fs-base">Total: $16886.96 </span>
                                            <span className="nav-text text-gray-800 fw-bolder fs-6 lh-1">
                                                <br/> Jun 23, 2022 </span>
                                            {/* end::Title */}
                                            {/* begin::Bullet */}
                                            <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                            {/* end::Bullet */}
                                        </a>
                                        {/* end::Link */}
                                    </li>
                                    {/* end::Item */}
                                </ul>
                                {/* end::Nav */}
                                {/* begin::Tab Content */}
                                <div className="tab-content ps-4 pe-6">
                                    {/* begin::Tap pane */}
                                    <div className="tab-pane  active show overflow-auto" id="kt_charts_widget_10_tab_content_1" role="tabpanel" aria-labelledby="#kt_charts_widget_10_tab_1">
                                        {/* begin::Chart */}
                                        <div id="kt_charts_widget_10_chart_1" className="min-h-auto" style={{ height: 270, minHeight: 285 }}>
                                            <div id="apexchartsarr9ae9gj" className="apexcharts-canvas apexchartsarr9ae9gj apexcharts-theme-light" style={{ width: 797, height: 270 }}>
                                                <svg id="SvgjsSvg3338" width="797" height="270" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG3340" className="apexcharts-inner apexcharts-graphical" transform="translate(51.366943359375, 30)">
                                                        <defs id="SvgjsDefs3339">
                                                            <linearGradient id="SvgjsLinearGradient3344" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop3345" stop-opacity="0" stop-color="rgba(216,227,240,0)" offset="0"></stop>
                                                                <stop id="SvgjsStop3346" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                                <stop id="SvgjsStop3347" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMaskarr9ae9gj">
                                                                <rect id="SvgjsRect3349" width="741.633056640625" height="196.25799999999998" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskarr9ae9gj"></clipPath>
                                                            <clipPath id="nonForecastMaskarr9ae9gj"></clipPath>
                                                            <clipPath id="gridRectMarkerMaskarr9ae9gj">
                                                                <rect id="SvgjsRect3350" width="739.633056640625" height="198.25799999999998" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect3348" width="23.119896065848216" height="194.25799999999998" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient3344)" className="apexcharts-xcrosshairs" y2="194.25799999999998" filter="none" fill-opacity="0.9"></rect>
                                                        <g id="SvgjsG3397" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g id="SvgjsG3398" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                                <text id="SvgjsText3400" font-family="inherit" x="52.545218331473215" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3401">Grenminer.com</tspan>
                                                                    <title>Grenminer.com</title>
                                                                </text>
                                                                <text id="SvgjsText3403" font-family="inherit" x="157.63565499441964" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3404">petrolix.io</tspan>
                                                                    <title>petrolix.io</title>
                                                                </text>
                                                                <text id="SvgjsText3406" font-family="inherit" x="262.72609165736606" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3407">revod.io</tspan>
                                                                    <title>revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText3409" font-family="inherit" x="367.8165283203125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3410">astynax.com</tspan>
                                                                    <title>astynax.com</title>
                                                                </text>
                                                                <text id="SvgjsText3412" font-family="inherit" x="472.9069649832589" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3413">astoro.io</tspan>
                                                                    <title>astoro.io</title>
                                                                </text>
                                                                <text id="SvgjsText3415" font-family="inherit" x="577.9974016462054" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3416">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText3418" font-family="inherit" x="683.0878383091518" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3419">Lader.club</tspan>
                                                                    <title>Lader.club</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG3432" className="apexcharts-grid">
                                                            <g id="SvgjsG3433" className="apexcharts-gridlines-horizontal">
                                                                <line id="SvgjsLine3435" x1="0" y1="0" x2="735.633056640625" y2="0" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3436" x1="0" y1="48.564499999999995" x2="735.633056640625" y2="48.564499999999995" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3437" x1="0" y1="97.12899999999999" x2="735.633056640625" y2="97.12899999999999" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3438" x1="0" y1="145.69349999999997" x2="735.633056640625" y2="145.69349999999997" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3439" x1="0" y1="194.25799999999998" x2="735.633056640625" y2="194.25799999999998" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <g id="SvgjsG3434" className="apexcharts-gridlines-vertical"></g>
                                                            <line id="SvgjsLine3441" x1="0" y1="194.25799999999998" x2="735.633056640625" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                                                            </line>
                                                            <line id="SvgjsLine3440" x1="0" y1="1" x2="0" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG3351" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG3352" className="apexcharts-series" seriesname="AchievedxTarget">
                                                                <path id="SvgjsPath3356" d="M 40.98527029854911 194.25799999999998L 40.98527029854911 126.41125Q 40.98527029854911 121.41125 45.98527029854911 121.41125L 57.10516636439732 121.41125Q 62.10516636439732 121.41125 62.10516636439732 126.41125L 62.10516636439732 126.41125L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 40.98527029854911 194.25799999999998L 40.98527029854911 126.41125Q 40.98527029854911 121.41125 45.98527029854911 121.41125L 57.10516636439732 121.41125Q 62.10516636439732 121.41125 62.10516636439732 126.41125L 62.10516636439732 126.41125L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998z" pathfrom="M 40.98527029854911 194.25799999999998L 40.98527029854911 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 40.98527029854911 194.25799999999998" cy="121.41125" cx="145.07570696149554" j="0" val="30" barheight="72.84674999999999" barwidth="23.119896065848216">
                                                                </path>
                                                                <path id="SvgjsPath3362" d="M 146.07570696149554 194.25799999999998L 146.07570696149554 155.54995Q 146.07570696149554 150.54995 151.07570696149554 150.54995L 162.19560302734376 150.54995Q 167.19560302734376 150.54995 167.19560302734376 155.54995L 167.19560302734376 155.54995L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 146.07570696149554 194.25799999999998L 146.07570696149554 155.54995Q 146.07570696149554 150.54995 151.07570696149554 150.54995L 162.19560302734376 150.54995Q 167.19560302734376 150.54995 167.19560302734376 155.54995L 167.19560302734376 155.54995L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998z" pathfrom="M 146.07570696149554 194.25799999999998L 146.07570696149554 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 146.07570696149554 194.25799999999998" cy="150.54995" cx="250.166143624442" j="1" val="18" barheight="43.70804999999999" barwidth="23.119896065848216">
                                                                </path>
                                                                <path id="SvgjsPath3368" d="M 251.166143624442 194.25799999999998L 251.166143624442 94.844325Q 251.166143624442 89.844325 256.166143624442 89.844325L 267.2860396902902 89.844325Q 272.2860396902902 89.844325 272.2860396902902 94.844325L 272.2860396902902 94.844325L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 251.166143624442 194.25799999999998L 251.166143624442 94.844325Q 251.166143624442 89.844325 256.166143624442 89.844325L 267.2860396902902 89.844325Q 272.2860396902902 89.844325 272.2860396902902 94.844325L 272.2860396902902 94.844325L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998z" pathfrom="M 251.166143624442 194.25799999999998L 251.166143624442 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 251.166143624442 194.25799999999998" cy="89.844325" cx="355.25658028738843" j="2" val="43" barheight="104.41367499999998" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3374" d="M 356.25658028738843 194.25799999999998L 356.25658028738843 29.282250000000005Q 356.25658028738843 24.282250000000005 361.25658028738843 24.282250000000005L 372.3764763532366 24.282250000000005Q 377.3764763532366 24.282250000000005 377.3764763532366 29.282250000000005L 377.3764763532366 29.282250000000005L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 356.25658028738843 194.25799999999998L 356.25658028738843 29.282250000000005Q 356.25658028738843 24.282250000000005 361.25658028738843 24.282250000000005L 372.3764763532366 24.282250000000005Q 377.3764763532366 24.282250000000005 377.3764763532366 29.282250000000005L 377.3764763532366 29.282250000000005L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998z" pathfrom="M 356.25658028738843 194.25799999999998L 356.25658028738843 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 356.25658028738843 194.25799999999998" cy="24.282250000000005" cx="460.3470169503349" j="3" val="70" barheight="169.97574999999998" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3380" d="M 461.3470169503349 194.25799999999998L 461.3470169503349 167.69107499999998Q 461.3470169503349 162.69107499999998 466.3470169503349 162.69107499999998L 477.46691301618307 162.69107499999998Q 482.46691301618307 162.69107499999998 482.46691301618307 167.69107499999998L 482.46691301618307 167.69107499999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 461.3470169503349 194.25799999999998L 461.3470169503349 167.69107499999998Q 461.3470169503349 162.69107499999998 466.3470169503349 162.69107499999998L 477.46691301618307 162.69107499999998Q 482.46691301618307 162.69107499999998 482.46691301618307 167.69107499999998L 482.46691301618307 167.69107499999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998z" pathfrom="M 461.3470169503349 194.25799999999998L 461.3470169503349 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 461.3470169503349 194.25799999999998" cy="162.69107499999998" cx="565.4374536132813" j="4" val="13" barheight="31.566924999999998" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3386" d="M 566.4374536132813 194.25799999999998L 566.4374536132813 109.413675Q 566.4374536132813 104.413675 571.4374536132813 104.413675L 582.5573496791295 104.413675Q 587.5573496791295 104.413675 587.5573496791295 109.413675L 587.5573496791295 109.413675L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 566.4374536132813 194.25799999999998L 566.4374536132813 109.413675Q 566.4374536132813 104.413675 571.4374536132813 104.413675L 582.5573496791295 104.413675Q 587.5573496791295 104.413675 587.5573496791295 109.413675L 587.5573496791295 109.413675L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998z" pathfrom="M 566.4374536132813 194.25799999999998L 566.4374536132813 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 566.4374536132813 194.25799999999998" cy="104.413675" cx="670.5278902762277" j="5" val="37" barheight="89.84432499999998" barwidth="23.119896065848216">
                                                                </path>
                                                                <path id="SvgjsPath3392" d="M 671.5278902762277 194.25799999999998L 671.5278902762277 143.40882499999998Q 671.5278902762277 138.40882499999998 676.5278902762277 138.40882499999998L 687.647786342076 138.40882499999998Q 692.647786342076 138.40882499999998 692.647786342076 143.40882499999998L 692.647786342076 143.40882499999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskarr9ae9gj)" pathto="M 671.5278902762277 194.25799999999998L 671.5278902762277 143.40882499999998Q 671.5278902762277 138.40882499999998 676.5278902762277 138.40882499999998L 687.647786342076 138.40882499999998Q 692.647786342076 138.40882499999998 692.647786342076 143.40882499999998L 692.647786342076 143.40882499999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998z" pathfrom="M 671.5278902762277 194.25799999999998L 671.5278902762277 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 671.5278902762277 194.25799999999998" cy="138.40882499999998" cx="775.6183269391742" j="6" val="23" barheight="55.849174999999995" barwidth="23.119896065848216"></path>
                                                                <g id="SvgjsG3354" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG3355" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3361" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3367" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3373" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3379" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3385" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3391" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG3353" className="apexcharts-datalabels">
                                                                <g id="SvgjsG3358" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3360" font-family="inherit" x="51.54521833147322" y="110.41125" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="51.54521833147322" cy="110.41125" style={{ fontFamily: 'inherit' }}>30K</text>
                                                                </g>
                                                                <g id="SvgjsG3364" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3366" font-family="inherit" x="156.63565499441964" y="139.54995" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="156.63565499441964" cy="139.54995" style={{ fontFamily: 'inherit' }}>18K</text>
                                                                </g>
                                                                <g id="SvgjsG3370" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3372" font-family="inherit" x="261.7260916573661" y="78.844325" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="261.7260916573661" cy="78.844325" style={{ fontFamily: 'inherit' }}>43K</text>
                                                                </g>
                                                                <g id="SvgjsG3376" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3378" font-family="inherit" x="366.81652832031256" y="13.282250000000005" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="366.81652832031256" cy="13.282250000000005" style={{ fontFamily: 'inherit' }}>70K</text>
                                                                </g>
                                                                <g id="SvgjsG3382" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3384" font-family="inherit" x="471.90696498325894" y="151.69107499999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="471.90696498325894" cy="151.69107499999998" style={{ fontFamily: 'inherit' }}>13K</text>
                                                                </g>
                                                                <g id="SvgjsG3388" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3390" font-family="inherit" x="576.9974016462054" y="93.413675" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="576.9974016462054" cy="93.413675" style={{ fontFamily: 'inherit' }}>37K</text>
                                                                </g>
                                                                <g id="SvgjsG3394" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3396" font-family="inherit" x="682.0878383091518" y="127.40882499999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="682.0878383091518" cy="127.40882499999998" style={{ fontFamily: 'inherit' }}>23K</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine3442" x1="0" y1="0" x2="735.633056640625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine3443" x1="0" y1="0" x2="735.633056640625" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG3444" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG3445" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG3446" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG3420" className="apexcharts-yaxis" transform="translate(21.366943359375, 0)">
                                                        <g id="SvgjsG3421" className="apexcharts-yaxis-texts-g">
                                                            <text id="SvgjsText3422" font-family="inherit" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3423">80K</tspan>
                                                                <title>80K</title>
                                                            </text>
                                                            <text id="SvgjsText3424" font-family="inherit" x="20" y="79.9645" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3425">60K</tspan>
                                                                <title>60K</title>
                                                            </text>
                                                            <text id="SvgjsText3426" font-family="inherit" x="20" y="128.529" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3427">40K</tspan>
                                                                <title>40K</title>
                                                            </text>
                                                            <text id="SvgjsText3428" font-family="inherit" x="20" y="177.09349999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3429">20K</tspan>
                                                                <title>20K</title>
                                                            </text>
                                                            <text id="SvgjsText3430" font-family="inherit" x="20" y="225.658" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3431">0K</tspan>
                                                                <title>0K</title>
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG3341" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 153 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}></div>
                                                    <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(0, 158, 247, 1)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label"></span>
                                                                <span className="apexcharts-tooltip-text-y-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end::Tap pane */}
                                    {/* begin::Tap pane */}
                                    <div className="tab-pane fade overflow-auto" id="kt_charts_widget_10_tab_content_2" role="tabpanel" aria-labelledby="#kt_charts_widget_10_tab_2">
                                        {/* begin::Chart */}
                                        {/* begin::Chart */}
                                        <div id="kt_charts_widget_10_chart_2" className="min-h-auto" style={{ height: 270, minHeight: 285 }}>
                                            <div id="apexcharts1b3is4o3" className="apexcharts-canvas apexcharts1b3is4o3 apexcharts-theme-light" style={{ width: 797, height: 270 }}>
                                                <svg id="SvgjsSvg3455" width="797" height="270" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG3457" className="apexcharts-inner apexcharts-graphical" transform="translate(51.4189453125, 30)">
                                                        <defs id="SvgjsDefs3456">
                                                            <linearGradient id="SvgjsLinearGradient3461" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop3462" stop-opacity="0" stop-color="rgba(216,227,240,0)" offset="0"></stop>
                                                                <stop id="SvgjsStop3463" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                                <stop id="SvgjsStop3464" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMask1b3is4o3">
                                                                <rect id="SvgjsRect3466" width="741.5810546875" height="196.25799999999998" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMask1b3is4o3"></clipPath>
                                                            <clipPath id="nonForecastMask1b3is4o3"></clipPath>
                                                            <clipPath id="gridRectMarkerMask1b3is4o3">
                                                                <rect id="SvgjsRect3467" width="739.5810546875" height="198.25799999999998" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect3465" width="23.11826171875" height="194.25799999999998" x="458.916943359375" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient3461)" className="apexcharts-xcrosshairs" y2="194.25799999999998" filter="none" fill-opacity="0.9" x1="458.916943359375" x2="458.916943359375"></rect>
                                                        <g id="SvgjsG3514" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g id="SvgjsG3515" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                                <text id="SvgjsText3517" font-family="inherit" x="52.54150390625" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3518">Grenminer.com</tspan>
                                                                    <title>Grenminer.com</title>
                                                                </text>
                                                                <text id="SvgjsText3520" font-family="inherit" x="157.62451171875" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3521">petrolix.io</tspan>
                                                                    <title>petrolix.io</title>
                                                                </text>
                                                                <text id="SvgjsText3523" font-family="inherit" x="262.70751953125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3524">revod.io</tspan>
                                                                    <title>revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText3526" font-family="inherit" x="367.79052734375" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3527">astynax.com</tspan>
                                                                    <title>astynax.com</title>
                                                                </text>
                                                                <text id="SvgjsText3529" font-family="inherit" x="472.87353515625" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3530">astoro.io</tspan>
                                                                    <title>astoro.io</title>
                                                                </text>
                                                                <text id="SvgjsText3532" font-family="inherit" x="577.95654296875" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3533">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText3535" font-family="inherit" x="683.03955078125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3536">Lader.club</tspan>
                                                                    <title>Lader.club</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG3553" className="apexcharts-grid">
                                                            <g id="SvgjsG3554" className="apexcharts-gridlines-horizontal">
                                                                <line id="SvgjsLine3556" x1="0" y1="0" x2="735.5810546875" y2="0" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3557" x1="0" y1="32.37633333333333" x2="735.5810546875" y2="32.37633333333333" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3558" x1="0" y1="64.75266666666666" x2="735.5810546875" y2="64.75266666666666" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3559" x1="0" y1="97.12899999999999" x2="735.5810546875" y2="97.12899999999999" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3560" x1="0" y1="129.5053333333333" x2="735.5810546875" y2="129.5053333333333" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3561" x1="0" y1="161.88166666666663" x2="735.5810546875" y2="161.88166666666663" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3562" x1="0" y1="194.25799999999995" x2="735.5810546875" y2="194.25799999999995" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <g id="SvgjsG3555" className="apexcharts-gridlines-vertical"></g>
                                                            <line id="SvgjsLine3564" x1="0" y1="194.25799999999998" x2="735.5810546875" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                            <line id="SvgjsLine3563" x1="0" y1="1" x2="0" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG3468" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG3469" className="apexcharts-series">
                                                                <path id="SvgjsPath3473" d="M 40.982373046875 194.25799999999998L 40.982373046875 118.31716666666665Q 40.982373046875 113.31716666666665 45.982373046875 113.31716666666665L 57.10063476562499 113.31716666666665Q 62.10063476562499 113.31716666666665 62.10063476562499 118.31716666666665L 62.10063476562499 118.31716666666665L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 40.982373046875 194.25799999999998L 40.982373046875 118.31716666666665Q 40.982373046875 113.31716666666665 45.982373046875 113.31716666666665L 57.10063476562499 113.31716666666665Q 62.10063476562499 113.31716666666665 62.10063476562499 118.31716666666665L 62.10063476562499 118.31716666666665L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998z" pathfrom="M 40.982373046875 194.25799999999998L 40.982373046875 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 40.982373046875 194.25799999999998" cy="113.31716666666665" cx="145.065380859375" j="0" val="25" barheight="80.94083333333333" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3479" d="M 146.065380859375 194.25799999999998L 146.065380859375 21.18816666666666Q 146.065380859375 16.18816666666666 151.065380859375 16.18816666666666L 162.18364257812502 16.18816666666666Q 167.18364257812502 16.18816666666666 167.18364257812502 21.18816666666666L 167.18364257812502 21.18816666666666L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 146.065380859375 194.25799999999998L 146.065380859375 21.18816666666666Q 146.065380859375 16.18816666666666 151.065380859375 16.18816666666666L 162.18364257812502 16.18816666666666Q 167.18364257812502 16.18816666666666 167.18364257812502 21.18816666666666L 167.18364257812502 21.18816666666666L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998z" pathfrom="M 146.065380859375 194.25799999999998L 146.065380859375 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 146.065380859375 194.25799999999998" cy="16.18816666666666" cx="250.148388671875" j="1" val="55" barheight="178.06983333333332" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3485" d="M 251.148388671875 194.25799999999998L 251.148388671875 85.94083333333332Q 251.148388671875 80.94083333333332 256.148388671875 80.94083333333332L 267.266650390625 80.94083333333332Q 272.266650390625 80.94083333333332 272.266650390625 85.94083333333332L 272.266650390625 85.94083333333332L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 251.148388671875 194.25799999999998L 251.148388671875 85.94083333333332Q 251.148388671875 80.94083333333332 256.148388671875 80.94083333333332L 267.266650390625 80.94083333333332Q 272.266650390625 80.94083333333332 272.266650390625 85.94083333333332L 272.266650390625 85.94083333333332L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998z" pathfrom="M 251.148388671875 194.25799999999998L 251.148388671875 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 251.148388671875 194.25799999999998" cy="80.94083333333332" cx="355.231396484375" j="2" val="35" barheight="113.31716666666667" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3491" d="M 356.231396484375 194.25799999999998L 356.231396484375 37.37633333333332Q 356.231396484375 32.37633333333332 361.231396484375 32.37633333333332L 372.349658203125 32.37633333333332Q 377.349658203125 32.37633333333332 377.349658203125 37.37633333333332L 377.349658203125 37.37633333333332L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 356.231396484375 194.25799999999998L 356.231396484375 37.37633333333332Q 356.231396484375 32.37633333333332 361.231396484375 32.37633333333332L 372.349658203125 32.37633333333332Q 377.349658203125 32.37633333333332 377.349658203125 37.37633333333332L 377.349658203125 37.37633333333332L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998z" pathfrom="M 356.231396484375 194.25799999999998L 356.231396484375 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 356.231396484375 194.25799999999998" cy="32.37633333333332" cx="460.314404296875" j="3" val="50" barheight="161.88166666666666" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3497" d="M 461.314404296875 194.25799999999998L 461.314404296875 53.56449999999998Q 461.314404296875 48.56449999999998 466.314404296875 48.56449999999998L 477.432666015625 48.56449999999998Q 482.432666015625 48.56449999999998 482.432666015625 53.56449999999998L 482.432666015625 53.56449999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 461.314404296875 194.25799999999998L 461.314404296875 53.56449999999998Q 461.314404296875 48.56449999999998 466.314404296875 48.56449999999998L 477.432666015625 48.56449999999998Q 482.432666015625 48.56449999999998 482.432666015625 53.56449999999998L 482.432666015625 53.56449999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998z" pathfrom="M 461.314404296875 194.25799999999998L 461.314404296875 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 461.314404296875 194.25799999999998" cy="48.56449999999998" cx="565.397412109375" j="4" val="45" barheight="145.6935" barwidth="23.11826171875" selected="true"></path>
                                                                <path id="SvgjsPath3503" d="M 566.397412109375 194.25799999999998L 566.397412109375 134.50533333333334Q 566.397412109375 129.50533333333334 571.397412109375 129.50533333333334L 582.5156738281249 129.50533333333334Q 587.5156738281249 129.50533333333334 587.5156738281249 134.50533333333334L 587.5156738281249 134.50533333333334L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 566.397412109375 194.25799999999998L 566.397412109375 134.50533333333334Q 566.397412109375 129.50533333333334 571.397412109375 129.50533333333334L 582.5156738281249 129.50533333333334Q 587.5156738281249 129.50533333333334 587.5156738281249 134.50533333333334L 587.5156738281249 134.50533333333334L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998z" pathfrom="M 566.397412109375 194.25799999999998L 566.397412109375 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 566.397412109375 194.25799999999998" cy="129.50533333333334" cx="670.480419921875" j="5" val="20" barheight="64.75266666666666" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3509" d="M 671.480419921875 194.25799999999998L 671.480419921875 98.89136666666666Q 671.480419921875 93.89136666666666 676.480419921875 93.89136666666666L 687.5986816406249 93.89136666666666Q 692.5986816406249 93.89136666666666 692.5986816406249 98.89136666666666L 692.5986816406249 98.89136666666666L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask1b3is4o3)" pathto="M 671.480419921875 194.25799999999998L 671.480419921875 98.89136666666666Q 671.480419921875 93.89136666666666 676.480419921875 93.89136666666666L 687.5986816406249 93.89136666666666Q 692.5986816406249 93.89136666666666 692.5986816406249 98.89136666666666L 692.5986816406249 98.89136666666666L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998z" pathfrom="M 671.480419921875 194.25799999999998L 671.480419921875 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 671.480419921875 194.25799999999998" cy="93.89136666666666" cx="775.563427734375" j="6" val="31" barheight="100.36663333333333" barwidth="23.11826171875">
                                                                </path>
                                                                <g id="SvgjsG3471" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG3472" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3478" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3484" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3490" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3496" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3502" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3508" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG3470" className="apexcharts-datalabels">
                                                                <g id="SvgjsG3475" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3477" font-family="inherit" x="51.541503906250014" y="102.31716666666665" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="51.541503906250014" cy="102.31716666666665" style={{ fontFamily: 'inherit' }}>25K</text>
                                                                </g>
                                                                <g id="SvgjsG3481" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3483" font-family="inherit" x="156.62451171875" y="5.18816666666666" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="156.62451171875" cy="5.18816666666666" style={{ fontFamily: 'inherit' }}>55K</text>
                                                                </g>
                                                                <g id="SvgjsG3487" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3489" font-family="inherit" x="261.70751953125" y="69.94083333333332" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="261.70751953125" cy="69.94083333333332" style={{ fontFamily: 'inherit' }}>35K</text>
                                                                </g>
                                                                <g id="SvgjsG3493" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3495" font-family="inherit" x="366.79052734375" y="21.37633333333332" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="366.79052734375" cy="21.37633333333332" style={{ fontFamily: 'inherit' }}>50K</text>
                                                                </g>
                                                                <g id="SvgjsG3499" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3501" font-family="inherit" x="471.87353515624994" y="37.56449999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="471.87353515624994" cy="37.56449999999998" style={{ fontFamily: 'inherit' }}>45K</text>
                                                                </g>
                                                                <g id="SvgjsG3505" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3507" font-family="inherit" x="576.95654296875" y="118.50533333333334" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="576.95654296875" cy="118.50533333333334" style={{ fontFamily: 'inherit' }}>20K</text>
                                                                </g>
                                                                <g id="SvgjsG3511" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3513" font-family="inherit" x="682.03955078125" y="82.89136666666666" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="682.03955078125" cy="82.89136666666666" style={{ fontFamily: 'inherit' }}>31K</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine3565" x1="0" y1="0" x2="735.5810546875" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine3566" x1="0" y1="0" x2="735.5810546875" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG3567" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG3568" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG3569" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG3537" className="apexcharts-yaxis" transform="translate(21.4189453125, 0)">
                                                        <g id="SvgjsG3538" className="apexcharts-yaxis-texts-g">
                                                            <text id="SvgjsText3539" font-family="inherit" x="20" y="31.6" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3540">60K</tspan>
                                                                <title>60K</title>
                                                            </text>
                                                            <text id="SvgjsText3541" font-family="inherit" x="20" y="63.97633333333333" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3542">50K</tspan>
                                                                <title>50K</title>
                                                            </text>
                                                            <text id="SvgjsText3543" font-family="inherit" x="20" y="96.35266666666665" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3544">40K</tspan>
                                                                <title>40K</title>
                                                            </text>
                                                            <text id="SvgjsText3545" font-family="inherit" x="20" y="128.72899999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3546">30K</tspan>
                                                                <title>30K</title>
                                                            </text>
                                                            <text id="SvgjsText3547" font-family="inherit" x="20" y="161.1053333333333" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3548">20K</tspan>
                                                                <title>20K</title>
                                                            </text>
                                                            <text id="SvgjsText3549" font-family="inherit" x="20" y="193.48166666666663" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3550">10K</tspan>
                                                                <title>10K</title>
                                                            </text>
                                                            <text id="SvgjsText3551" font-family="inherit" x="20" y="225.85799999999995" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3552">0K</tspan>
                                                                <title>0K</title>
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG3458" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 153 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: 521.895, top: 43.5 }}>
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}>astoro.io</div>
                                                    <div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(0, 158, 247, 1)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">Achieved Target:
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-y-value">45K</span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end::Chart */}
                                        {/* end::Chart */}
                                    </div>
                                    {/* end::Tap pane */}
                                    {/* begin::Tap pane */}
                                    <div className="tab-pane fade overflow-auto" id="kt_charts_widget_10_tab_content_3" role="tabpanel" aria-labelledby="#kt_charts_widget_10_tab_3">
                                        {/* begin::Chart */}
                                        <div id="kt_charts_widget_10_chart_3" className="min-h-auto" style={{ height: 270, minHeight: 285 }}>
                                            <div id="apexchartsdr7d6jm5g" className="apexcharts-canvas apexchartsdr7d6jm5g apexcharts-theme-light" style={{ width: 797, height: 270 }}>
                                                <svg id="SvgjsSvg3574" width="797" height="270" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG3576" className="apexcharts-inner apexcharts-graphical" transform="translate(51.366943359375, 30)">
                                                        <defs id="SvgjsDefs3575">
                                                            <linearGradient id="SvgjsLinearGradient3580" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop3581" stop-opacity="0" stop-color="rgba(216,227,240,0)" offset="0"></stop>
                                                                <stop id="SvgjsStop3582" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                                <stop id="SvgjsStop3583" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMaskdr7d6jm5g">
                                                                <rect id="SvgjsRect3585" width="741.633056640625" height="196.25799999999998" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskdr7d6jm5g"></clipPath>
                                                            <clipPath id="nonForecastMaskdr7d6jm5g"></clipPath>
                                                            <clipPath id="gridRectMarkerMaskdr7d6jm5g">
                                                                <rect id="SvgjsRect3586" width="739.633056640625" height="198.25799999999998" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect3584" width="23.119896065848216" height="194.25799999999998" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient3580)" className="apexcharts-xcrosshairs" y2="194.25799999999998" filter="none" fill-opacity="0.9"></rect>
                                                        <g id="SvgjsG3633" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g id="SvgjsG3634" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                                <text id="SvgjsText3636" font-family="inherit" x="52.545218331473215" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3637">Grenminer.com</tspan>
                                                                    <title>Grenminer.com</title>
                                                                </text>
                                                                <text id="SvgjsText3639" font-family="inherit" x="157.63565499441964" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3640">petrolix.io</tspan>
                                                                    <title>petrolix.io</title>
                                                                </text>
                                                                <text id="SvgjsText3642" font-family="inherit" x="262.72609165736606" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3643">revod.io</tspan>
                                                                    <title>revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText3645" font-family="inherit" x="367.8165283203125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3646">astynax.com</tspan>
                                                                    <title>astynax.com</title>
                                                                </text>
                                                                <text id="SvgjsText3648" font-family="inherit" x="472.9069649832589" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3649">astoro.io</tspan>
                                                                    <title>astoro.io</title>
                                                                </text>
                                                                <text id="SvgjsText3651" font-family="inherit" x="577.9974016462054" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3652">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText3654" font-family="inherit" x="683.0878383091518" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3655">Lader.club</tspan>
                                                                    <title>Lader.club</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG3668" className="apexcharts-grid">
                                                            <g id="SvgjsG3669" className="apexcharts-gridlines-horizontal">
                                                                <line id="SvgjsLine3671" x1="0" y1="0" x2="735.633056640625" y2="0" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3672" x1="0" y1="48.564499999999995" x2="735.633056640625" y2="48.564499999999995" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3673" x1="0" y1="97.12899999999999" x2="735.633056640625" y2="97.12899999999999" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3674" x1="0" y1="145.69349999999997" x2="735.633056640625" y2="145.69349999999997" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3675" x1="0" y1="194.25799999999998" x2="735.633056640625" y2="194.25799999999998" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <g id="SvgjsG3670" className="apexcharts-gridlines-vertical"></g>
                                                            <line id="SvgjsLine3677" x1="0" y1="194.25799999999998" x2="735.633056640625" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                                                            </line>
                                                            <line id="SvgjsLine3676" x1="0" y1="1" x2="0" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG3587" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG3588" className="apexcharts-series">
                                                                <path id="SvgjsPath3592" d="M 40.98527029854911 194.25799999999998L 40.98527029854911 89.98787499999999Q 40.98527029854911 84.98787499999999 45.98527029854911 84.98787499999999L 57.10516636439732 84.98787499999999Q 62.10516636439732 84.98787499999999 62.10516636439732 89.98787499999999L 62.10516636439732 89.98787499999999L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 40.98527029854911 194.25799999999998L 40.98527029854911 89.98787499999999Q 40.98527029854911 84.98787499999999 45.98527029854911 84.98787499999999L 57.10516636439732 84.98787499999999Q 62.10516636439732 84.98787499999999 62.10516636439732 89.98787499999999L 62.10516636439732 89.98787499999999L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998z" pathfrom="M 40.98527029854911 194.25799999999998L 40.98527029854911 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 62.10516636439732 194.25799999999998L 40.98527029854911 194.25799999999998" cy="84.98787499999999" cx="145.07570696149554" j="0" val="45" barheight="109.270125" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3598" d="M 146.07570696149554 194.25799999999998L 146.07570696149554 162.834625Q 146.07570696149554 157.834625 151.07570696149554 157.834625L 162.19560302734376 157.834625Q 167.19560302734376 157.834625 167.19560302734376 162.834625L 167.19560302734376 162.834625L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 146.07570696149554 194.25799999999998L 146.07570696149554 162.834625Q 146.07570696149554 157.834625 151.07570696149554 157.834625L 162.19560302734376 157.834625Q 167.19560302734376 157.834625 167.19560302734376 162.834625L 167.19560302734376 162.834625L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998z" pathfrom="M 146.07570696149554 194.25799999999998L 146.07570696149554 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 167.19560302734376 194.25799999999998L 146.07570696149554 194.25799999999998" cy="157.834625" cx="250.166143624442" j="1" val="15" barheight="36.42337499999999" barwidth="23.119896065848216">
                                                                </path>
                                                                <path id="SvgjsPath3604" d="M 251.166143624442 194.25799999999998L 251.166143624442 114.270125Q 251.166143624442 109.270125 256.166143624442 109.270125L 267.2860396902902 109.270125Q 272.2860396902902 109.270125 272.2860396902902 114.270125L 272.2860396902902 114.270125L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 251.166143624442 194.25799999999998L 251.166143624442 114.270125Q 251.166143624442 109.270125 256.166143624442 109.270125L 267.2860396902902 109.270125Q 272.2860396902902 109.270125 272.2860396902902 114.270125L 272.2860396902902 114.270125L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998z" pathfrom="M 251.166143624442 194.25799999999998L 251.166143624442 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 272.2860396902902 194.25799999999998L 251.166143624442 194.25799999999998" cy="109.270125" cx="355.25658028738843" j="2" val="35" barheight="84.98787499999999" barwidth="23.119896065848216">
                                                                </path>
                                                                <path id="SvgjsPath3610" d="M 356.25658028738843 194.25799999999998L 356.25658028738843 29.282250000000005Q 356.25658028738843 24.282250000000005 361.25658028738843 24.282250000000005L 372.3764763532366 24.282250000000005Q 377.3764763532366 24.282250000000005 377.3764763532366 29.282250000000005L 377.3764763532366 29.282250000000005L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 356.25658028738843 194.25799999999998L 356.25658028738843 29.282250000000005Q 356.25658028738843 24.282250000000005 361.25658028738843 24.282250000000005L 372.3764763532366 24.282250000000005Q 377.3764763532366 24.282250000000005 377.3764763532366 29.282250000000005L 377.3764763532366 29.282250000000005L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998z" pathfrom="M 356.25658028738843 194.25799999999998L 356.25658028738843 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 377.3764763532366 194.25799999999998L 356.25658028738843 194.25799999999998" cy="24.282250000000005" cx="460.3470169503349" j="3" val="70" barheight="169.97574999999998" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3616" d="M 461.3470169503349 194.25799999999998L 461.3470169503349 89.98787499999999Q 461.3470169503349 84.98787499999999 466.3470169503349 84.98787499999999L 477.46691301618307 84.98787499999999Q 482.46691301618307 84.98787499999999 482.46691301618307 89.98787499999999L 482.46691301618307 89.98787499999999L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 461.3470169503349 194.25799999999998L 461.3470169503349 89.98787499999999Q 461.3470169503349 84.98787499999999 466.3470169503349 84.98787499999999L 477.46691301618307 84.98787499999999Q 482.46691301618307 84.98787499999999 482.46691301618307 89.98787499999999L 482.46691301618307 89.98787499999999L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998z" pathfrom="M 461.3470169503349 194.25799999999998L 461.3470169503349 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 482.46691301618307 194.25799999999998L 461.3470169503349 194.25799999999998" cy="84.98787499999999" cx="565.4374536132813" j="4" val="45" barheight="109.270125" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3622" d="M 566.4374536132813 194.25799999999998L 566.4374536132813 77.84675Q 566.4374536132813 72.84675 571.4374536132813 72.84675L 582.5573496791295 72.84675Q 587.5573496791295 72.84675 587.5573496791295 77.84675L 587.5573496791295 77.84675L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 566.4374536132813 194.25799999999998L 566.4374536132813 77.84675Q 566.4374536132813 72.84675 571.4374536132813 72.84675L 582.5573496791295 72.84675Q 587.5573496791295 72.84675 587.5573496791295 77.84675L 587.5573496791295 77.84675L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998z" pathfrom="M 566.4374536132813 194.25799999999998L 566.4374536132813 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 587.5573496791295 194.25799999999998L 566.4374536132813 194.25799999999998" cy="72.84675" cx="670.5278902762277" j="5" val="50" barheight="121.41124999999998" barwidth="23.119896065848216"></path>
                                                                <path id="SvgjsPath3628" d="M 671.5278902762277 194.25799999999998L 671.5278902762277 148.26527499999997Q 671.5278902762277 143.26527499999997 676.5278902762277 143.26527499999997L 687.647786342076 143.26527499999997Q 692.647786342076 143.26527499999997 692.647786342076 148.26527499999997L 692.647786342076 148.26527499999997L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskdr7d6jm5g)" pathto="M 671.5278902762277 194.25799999999998L 671.5278902762277 148.26527499999997Q 671.5278902762277 143.26527499999997 676.5278902762277 143.26527499999997L 687.647786342076 143.26527499999997Q 692.647786342076 143.26527499999997 692.647786342076 148.26527499999997L 692.647786342076 148.26527499999997L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998z" pathfrom="M 671.5278902762277 194.25799999999998L 671.5278902762277 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 692.647786342076 194.25799999999998L 671.5278902762277 194.25799999999998" cy="143.26527499999997" cx="775.6183269391742" j="6" val="21" barheight="50.99272499999999" barwidth="23.119896065848216"></path>
                                                                <g id="SvgjsG3590" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG3591" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3597" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3603" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3609" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3615" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3621" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3627" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG3589" className="apexcharts-datalabels">
                                                                <g id="SvgjsG3594" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3596" font-family="inherit" x="51.54521833147322" y="73.98787499999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="51.54521833147322" cy="73.98787499999999" style={{ fontFamily: 'inherit' }}>45K</text>
                                                                </g>
                                                                <g id="SvgjsG3600" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3602" font-family="inherit" x="156.63565499441964" y="146.834625" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="156.63565499441964" cy="146.834625" style={{ fontFamily: 'inherit' }}>15K</text>
                                                                </g>
                                                                <g id="SvgjsG3606" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3608" font-family="inherit" x="261.7260916573661" y="98.27012500000001" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="261.7260916573661" cy="98.27012500000001" style={{ fontFamily: 'inherit' }}>35K</text>
                                                                </g>
                                                                <g id="SvgjsG3612" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3614" font-family="inherit" x="366.81652832031256" y="13.282250000000005" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="366.81652832031256" cy="13.282250000000005" style={{ fontFamily: 'inherit' }}>70K</text>
                                                                </g>
                                                                <g id="SvgjsG3618" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3620" font-family="inherit" x="471.90696498325894" y="73.98787499999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="471.90696498325894" cy="73.98787499999999" style={{ fontFamily: 'inherit' }}>45K</text>
                                                                </g>
                                                                <g id="SvgjsG3624" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3626" font-family="inherit" x="576.9974016462054" y="61.84675" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="576.9974016462054" cy="61.84675" style={{ fontFamily: 'inherit' }}>50K</text>
                                                                </g>
                                                                <g id="SvgjsG3630" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3632" font-family="inherit" x="682.0878383091518" y="132.26527499999997" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="682.0878383091518" cy="132.26527499999997" style={{ fontFamily: 'inherit' }}>21K</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine3678" x1="0" y1="0" x2="735.633056640625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine3679" x1="0" y1="0" x2="735.633056640625" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG3680" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG3681" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG3682" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG3656" className="apexcharts-yaxis" transform="translate(21.366943359375, 0)">
                                                        <g id="SvgjsG3657" className="apexcharts-yaxis-texts-g">
                                                            <text id="SvgjsText3658" font-family="inherit" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3659">80K</tspan>
                                                                <title>80K</title>
                                                            </text>
                                                            <text id="SvgjsText3660" font-family="inherit" x="20" y="79.9645" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3661">60K</tspan>
                                                                <title>60K</title>
                                                            </text>
                                                            <text id="SvgjsText3662" font-family="inherit" x="20" y="128.529" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3663">40K</tspan>
                                                                <title>40K</title>
                                                            </text>
                                                            <text id="SvgjsText3664" font-family="inherit" x="20" y="177.09349999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3665">20K</tspan>
                                                                <title>20K</title>
                                                            </text>
                                                            <text id="SvgjsText3666" font-family="inherit" x="20" y="225.658" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3667">0K</tspan>
                                                                <title>0K</title>
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG3577" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 153 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}></div>
                                                    <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(0, 158, 247, 1)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label"></span>
                                                                <span className="apexcharts-tooltip-text-y-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end::Chart */}
                                    </div>
                                    {/* end::Tap pane */}
                                    {/* begin::Tap pane */}
                                    <div className="tab-pane fade overflow-auto" id="kt_charts_widget_10_tab_content_4" role="tabpanel" aria-labelledby="#kt_charts_widget_10_tab_4">
                                        {/* begin::Chart */}
                                        <div id="kt_charts_widget_10_chart_4" className="min-h-auto" style={{ height: 270, minHeight: 285 }}>
                                            <div id="apexcharts353n3kl5" className="apexcharts-canvas apexcharts353n3kl5 apexcharts-theme-light" style={{ width: 797, height: 270 }}>
                                                <svg id="SvgjsSvg3687" width="797" height="270" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG3689" className="apexcharts-inner apexcharts-graphical" transform="translate(51.4189453125, 30)">
                                                        <defs id="SvgjsDefs3688">
                                                            <linearGradient id="SvgjsLinearGradient3693" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop3694" stop-opacity="0" stop-color="rgba(216,227,240,0)" offset="0"></stop>
                                                                <stop id="SvgjsStop3695" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                                <stop id="SvgjsStop3696" stop-opacity="0" stop-color="rgba(190,209,230,0)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMask353n3kl5">
                                                                <rect id="SvgjsRect3698" width="741.5810546875" height="196.25799999999998" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMask353n3kl5"></clipPath>
                                                            <clipPath id="nonForecastMask353n3kl5"></clipPath>
                                                            <clipPath id="gridRectMarkerMask353n3kl5">
                                                                <rect id="SvgjsRect3699" width="739.5810546875" height="198.25799999999998" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect3697" width="23.11826171875" height="194.25799999999998" x="563.916943359375" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient3693)" className="apexcharts-xcrosshairs" y2="194.25799999999998" filter="none" fill-opacity="0.9" x1="563.916943359375" x2="563.916943359375"></rect>
                                                        <g id="SvgjsG3746" className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g id="SvgjsG3747" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                                <text id="SvgjsText3749" font-family="inherit" x="52.54150390625" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3750">Grenminer.com</tspan>
                                                                    <title>Grenminer.com</title>
                                                                </text>
                                                                <text id="SvgjsText3752" font-family="inherit" x="157.62451171875" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3753">petrolix.io</tspan>
                                                                    <title>petrolix.io</title>
                                                                </text>
                                                                <text id="SvgjsText3755" font-family="inherit" x="262.70751953125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3756">revod.io</tspan>
                                                                    <title>revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText3758" font-family="inherit" x="367.79052734375" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3759">astynax.com</tspan>
                                                                    <title>astynax.com</title>
                                                                </text>
                                                                <text id="SvgjsText3761" font-family="inherit" x="472.87353515625" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3762">astoro.io</tspan>
                                                                    <title>astoro.io</title>
                                                                </text>
                                                                <text id="SvgjsText3764" font-family="inherit" x="577.95654296875" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3765">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText3767" font-family="inherit" x="683.03955078125" y="223.25799999999998" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan3768">Lader.club</tspan>
                                                                    <title>Lader.club</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG3779" className="apexcharts-grid">
                                                            <g id="SvgjsG3780" className="apexcharts-gridlines-horizontal">
                                                                <line id="SvgjsLine3782" x1="0" y1="0" x2="735.5810546875" y2="0" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3783" x1="0" y1="64.75266666666666" x2="735.5810546875" y2="64.75266666666666" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3784" x1="0" y1="129.5053333333333" x2="735.5810546875" y2="129.5053333333333" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine3785" x1="0" y1="194.25799999999998" x2="735.5810546875" y2="194.25799999999998" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <g id="SvgjsG3781" className="apexcharts-gridlines-vertical"></g>
                                                            <line id="SvgjsLine3787" x1="0" y1="194.25799999999998" x2="735.5810546875" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                            <line id="SvgjsLine3786" x1="0" y1="1" x2="0" y2="194.25799999999998" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG3700" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG3701" className="apexcharts-series">
                                                                <path id="SvgjsPath3705" d="M 40.982373046875 194.25799999999998L 40.982373046875 150.69349999999997Q 40.982373046875 145.69349999999997 45.982373046875 145.69349999999997L 57.10063476562499 145.69349999999997Q 62.10063476562499 145.69349999999997 62.10063476562499 150.69349999999997L 62.10063476562499 150.69349999999997L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 40.982373046875 194.25799999999998L 40.982373046875 150.69349999999997Q 40.982373046875 145.69349999999997 45.982373046875 145.69349999999997L 57.10063476562499 145.69349999999997Q 62.10063476562499 145.69349999999997 62.10063476562499 150.69349999999997L 62.10063476562499 150.69349999999997L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998z" pathfrom="M 40.982373046875 194.25799999999998L 40.982373046875 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 62.10063476562499 194.25799999999998L 40.982373046875 194.25799999999998" cy="145.69349999999997" cx="145.065380859375" j="0" val="15" barheight="48.564499999999995" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3711" d="M 146.065380859375 194.25799999999998L 146.065380859375 21.18816666666666Q 146.065380859375 16.18816666666666 151.065380859375 16.18816666666666L 162.18364257812502 16.18816666666666Q 167.18364257812502 16.18816666666666 167.18364257812502 21.18816666666666L 167.18364257812502 21.18816666666666L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 146.065380859375 194.25799999999998L 146.065380859375 21.18816666666666Q 146.065380859375 16.18816666666666 151.065380859375 16.18816666666666L 162.18364257812502 16.18816666666666Q 167.18364257812502 16.18816666666666 167.18364257812502 21.18816666666666L 167.18364257812502 21.18816666666666L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998z" pathfrom="M 146.065380859375 194.25799999999998L 146.065380859375 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 167.18364257812502 194.25799999999998L 146.065380859375 194.25799999999998" cy="16.18816666666666" cx="250.148388671875" j="1" val="55" barheight="178.06983333333332" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3717" d="M 251.148388671875 194.25799999999998L 251.148388671875 118.31716666666665Q 251.148388671875 113.31716666666665 256.148388671875 113.31716666666665L 267.266650390625 113.31716666666665Q 272.266650390625 113.31716666666665 272.266650390625 118.31716666666665L 272.266650390625 118.31716666666665L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 251.148388671875 194.25799999999998L 251.148388671875 118.31716666666665Q 251.148388671875 113.31716666666665 256.148388671875 113.31716666666665L 267.266650390625 113.31716666666665Q 272.266650390625 113.31716666666665 272.266650390625 118.31716666666665L 272.266650390625 118.31716666666665L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998z" pathfrom="M 251.148388671875 194.25799999999998L 251.148388671875 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 272.266650390625 194.25799999999998L 251.148388671875 194.25799999999998" cy="113.31716666666665" cx="355.231396484375" j="2" val="25" barheight="80.94083333333333" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3723" d="M 356.231396484375 194.25799999999998L 356.231396484375 37.37633333333332Q 356.231396484375 32.37633333333332 361.231396484375 32.37633333333332L 372.349658203125 32.37633333333332Q 377.349658203125 32.37633333333332 377.349658203125 37.37633333333332L 377.349658203125 37.37633333333332L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 356.231396484375 194.25799999999998L 356.231396484375 37.37633333333332Q 356.231396484375 32.37633333333332 361.231396484375 32.37633333333332L 372.349658203125 32.37633333333332Q 377.349658203125 32.37633333333332 377.349658203125 37.37633333333332L 377.349658203125 37.37633333333332L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998z" pathfrom="M 356.231396484375 194.25799999999998L 356.231396484375 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 377.349658203125 194.25799999999998L 356.231396484375 194.25799999999998" cy="32.37633333333332" cx="460.314404296875" j="3" val="50" barheight="161.88166666666666" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3729" d="M 461.314404296875 194.25799999999998L 461.314404296875 118.31716666666665Q 461.314404296875 113.31716666666665 466.314404296875 113.31716666666665L 477.432666015625 113.31716666666665Q 482.432666015625 113.31716666666665 482.432666015625 118.31716666666665L 482.432666015625 118.31716666666665L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 461.314404296875 194.25799999999998L 461.314404296875 118.31716666666665Q 461.314404296875 113.31716666666665 466.314404296875 113.31716666666665L 477.432666015625 113.31716666666665Q 482.432666015625 113.31716666666665 482.432666015625 118.31716666666665L 482.432666015625 118.31716666666665L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998z" pathfrom="M 461.314404296875 194.25799999999998L 461.314404296875 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 482.432666015625 194.25799999999998L 461.314404296875 194.25799999999998" cy="113.31716666666665" cx="565.397412109375" j="4" val="25" barheight="80.94083333333333" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3735" d="M 566.397412109375 194.25799999999998L 566.397412109375 5Q 566.397412109375 0 571.397412109375 0L 582.5156738281249 0Q 587.5156738281249 0 587.5156738281249 5L 587.5156738281249 5L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 566.397412109375 194.25799999999998L 566.397412109375 5Q 566.397412109375 0 571.397412109375 0L 582.5156738281249 0Q 587.5156738281249 0 587.5156738281249 5L 587.5156738281249 5L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998z" pathfrom="M 566.397412109375 194.25799999999998L 566.397412109375 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 587.5156738281249 194.25799999999998L 566.397412109375 194.25799999999998" cy="0" cx="670.480419921875" j="5" val="60" barheight="194.25799999999998" barwidth="23.11826171875">
                                                                </path>
                                                                <path id="SvgjsPath3741" d="M 671.480419921875 194.25799999999998L 671.480419921875 98.89136666666666Q 671.480419921875 93.89136666666666 676.480419921875 93.89136666666666L 687.5986816406249 93.89136666666666Q 692.5986816406249 93.89136666666666 692.5986816406249 98.89136666666666L 692.5986816406249 98.89136666666666L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998z" fill="rgba(0,158,247,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMask353n3kl5)" pathto="M 671.480419921875 194.25799999999998L 671.480419921875 98.89136666666666Q 671.480419921875 93.89136666666666 676.480419921875 93.89136666666666L 687.5986816406249 93.89136666666666Q 692.5986816406249 93.89136666666666 692.5986816406249 98.89136666666666L 692.5986816406249 98.89136666666666L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998z" pathfrom="M 671.480419921875 194.25799999999998L 671.480419921875 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 692.5986816406249 194.25799999999998L 671.480419921875 194.25799999999998" cy="93.89136666666666" cx="775.563427734375" j="6" val="31" barheight="100.36663333333333" barwidth="23.11826171875">
                                                                </path>
                                                                <g id="SvgjsG3703" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG3704" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3710" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3716" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3722" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3728" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3734" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG3740" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG3702" className="apexcharts-datalabels">
                                                                <g id="SvgjsG3707" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3709" font-family="inherit" x="51.541503906250014" y="134.69349999999997" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="51.541503906250014" cy="134.69349999999997" style={{ fontFamily: 'inherit' }}>15K</text>
                                                                </g>
                                                                <g id="SvgjsG3713" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3715" font-family="inherit" x="156.62451171875" y="5.18816666666666" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="156.62451171875" cy="5.18816666666666" style={{ fontFamily: 'inherit' }}>55K</text>
                                                                </g>
                                                                <g id="SvgjsG3719" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3721" font-family="inherit" x="261.70751953125" y="102.31716666666665" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="261.70751953125" cy="102.31716666666665" style={{ fontFamily: 'inherit' }}>25K</text>
                                                                </g>
                                                                <g id="SvgjsG3725" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3727" font-family="inherit" x="366.79052734375" y="21.37633333333332" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="366.79052734375" cy="21.37633333333332" style={{ fontFamily: 'inherit' }}>50K</text>
                                                                </g>
                                                                <g id="SvgjsG3731" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3733" font-family="inherit" x="471.87353515624994" y="102.31716666666665" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="471.87353515624994" cy="102.31716666666665" style={{ fontFamily: 'inherit' }}>25K</text>
                                                                </g>
                                                                <g id="SvgjsG3737" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3739" font-family="inherit" x="576.95654296875" y="2" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="576.95654296875" cy="2" style={{ fontFamily: 'inherit' }}>60K</text>
                                                                </g>
                                                                <g id="SvgjsG3743" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText3745" font-family="inherit" x="682.03955078125" y="82.89136666666666" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="600" fill="labelColor" className="apexcharts-datalabel" cx="682.03955078125" cy="82.89136666666666" style={{ fontFamily: 'inherit' }}>31K</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine3788" x1="0" y1="0" x2="735.5810546875" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine3789" x1="0" y1="0" x2="735.5810546875" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG3790" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG3791" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG3792" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG3769" className="apexcharts-yaxis" transform="translate(21.4189453125, 0)">
                                                        <g id="SvgjsG3770" className="apexcharts-yaxis-texts-g">
                                                            <text id="SvgjsText3771" font-family="inherit" x="20" y="31.3" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3772">60K</tspan>
                                                                <title>60K</title>
                                                            </text>
                                                            <text id="SvgjsText3773" font-family="inherit" x="20" y="96.05266666666665" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3774">40K</tspan>
                                                                <title>40K</title>
                                                            </text>
                                                            <text id="SvgjsText3775" font-family="inherit" x="20" y="160.80533333333332" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3776">20K</tspan>
                                                                <title>20K</title>
                                                            </text>
                                                            <text id="SvgjsText3777" font-family="inherit" x="20" y="225.558" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1a5b7" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                <tspan id="SvgjsTspan3778">0K</tspan>
                                                                <title>0K</title>
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG3690" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 153 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: 452.801, top: 0 }}>
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}>8bit.io</div>
                                                    <div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(0, 158, 247, 1)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">Achieved Target:
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-y-value">60K</span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end::Chart */}
                                    </div>
                                    {/* end::Tap pane */}
                                </div>
                                {/* end::Tab Content */}
                            </div>
                            {/* end: Card Body */}
                        </div>
                        {/* end::Chart widget 10 */}
                    </div>
                    <div className="col-xl-4 mb-xl-10">
                        <div className="card card-flush h-xl-100">
                            {/* begin::Header */}
                            <div className="card-header pt-7">
                                {/* begin::Title */}
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bolder text-gray-800">Project News</span>
                                    <span className="text-gray-400 mt-1 fw-bold fs-6">Updates in Projects by Admins</span>
                                </h3>
                                {/* end::Title */}
                                {/* begin::Toolbar */}
                                <div className="card-toolbar">
                                    <a href="https://investorspolice.com/hyip/p-news.php" className="btn btn-sm btn-light" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-custom-className="tooltip-dark" title="" data-bs-original-title="All Project News" data-kt-initialized="1">View All</a>
                                </div>
                                {/* end::Toolbar */}
                            </div>
                            {/* end::Header */}
                            {/* begin::Body */}
                            <div className="card-body pt-4 px-0">
                                {/* begin::Nav */}

                                {/* end::Nav */}
                                {/* begin::Tab Content */}
                                <div className="tab-content px-9 hover-scroll-overlay-y pe-7 me-3 mb-2" style={{ height: 350 }}>
                                    {/* begin::Tap pane */}
                                    <div className="tab-pane fade show active" id="kt_list_widget_16_tab_1">
                                        {/* begin::Item */}
                                        <div className="m-0">
                                            {/* begin::Timeline */}
                                            <div className="timeline ms-n1">
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">altexbit.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Welcome
                                                            to Altexbit</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">We are pleased to announce the launch of
                                                            our new website! After several months of hard work and dedication,
                                                            we are delighted to officially announce the launch.</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                <div className="timeline-item align-items-center mb-4">
                                                    <div className="timeline-content m-0">
                                                        <span className="fs-8 fw-boldest text-primary text-uppercase">grenminer.com</span>
                                                        <a href="#" className="fs-6 text-gray-800 fw-bolder d-block text-hover-primary">Georgian
                                                            language</a>
                                                        <span className="fw-bold text-gray-400">Admin grenminer.com / Jun 24, 2022
                                                            17:46 <br/>
                                                        </span>
                                                        <span className=" text-gray-800">Friends, we have great news for you! Many
                                                            people from Georgia are working with our company and we have added
                                                            Georgian language for their convenience.If you are a native speaker
                                                            of this language, you can now easily choose the Georgian language on
                                                            our website and you can easily earn in our...</span>
                                                        <div className="card-toolbar">
                                                            <span className="text-primary" data-action="/project_news/view/" data-nid="1845">Read more...</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="separator separator-dashed mt-5 mb-4"></div>
                                                {/* end::Timeline item */}
                                            </div>
                                            {/* end::Timeline */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        {/* end::Item */}
                                    </div>
                                    {/* end::Tap pane */}
                                    {/* begin::Tap pane */}
                                    {/* end::Tap pane */}
                                </div>
                                {/* end::Tab Content */}
                            </div>
                            {/* end: Card Body */}
                        </div>
                    </div>
                    {/* end::Col */}
                </div>
                <div className="row gy-5 g-xl-10">
                    {/* begin::Col */}
                    {/* end::Col */}
                    {/* begin::Col */}
                    <div className="col-xl-12 mb-5 mb-xl-10">
                        {/* begin::Row */}
                        <div className="row g-5 g-xl-10 h-xxl-50 mb-0 mb-xl-10">
                            {/* begin::Col */}
                            <div className="col-xxl-4">
                                {/* begin::Chart widget 6 */}
                                <div className="card card-flush h-lg-100">
                                    {/* begin::Header */}
                                    <div className="card-header py-7 mb-3">
                                        {/* begin::Title */}
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder text-gray-800">Top 5 Projects by Deposits</span>
                                            <span className="text-gray-400 mt-1 fw-bold fs-6">Top paying sites by deposits </span>
                                        </h3>
                                        {/* end::Title */}
                                        {/* begin::Toolbar */}
                                        <div className="card-toolbar">
                                            <a href="https://investorspolice.com/hyip/h-projects.php" title="View All Projects" className="btn btn-sm btn-light">View All</a>
                                        </div>
                                        {/* end::Toolbar */}
                                    </div>
                                    {/* end::Header */}
                                    {/* begin::Body */}
                                    <div className="card-body py-0 ps-6 mt-n12">
                                        <div id="kt_charts_widget_6" style={{ minHeight: 365 }}>
                                            <div id="apexchartsgjm5rj4gl" className="apexcharts-canvas apexchartsgjm5rj4gl apexcharts-theme-light" style={{ width: 350, height: 350 }}>
                                                <svg id="SvgjsSvg2157" width="350" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG2159" className="apexcharts-inner apexcharts-graphical" transform="translate(95.8199462890625, 30)">
                                                        <defs id="SvgjsDefs2158">
                                                            <linearGradient id="SvgjsLinearGradient2163" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop2164" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                                                                <stop id="SvgjsStop2165" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                                <stop id="SvgjsStop2166" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMaskgjm5rj4gl">
                                                                <rect id="SvgjsRect2168" width="235.99505615234375" height="272.64" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskgjm5rj4gl"></clipPath>
                                                            <clipPath id="nonForecastMaskgjm5rj4gl"></clipPath>
                                                            <clipPath id="gridRectMarkerMaskgjm5rj4gl">
                                                                <rect id="SvgjsRect2169" width="235.99505615234375" height="276.64" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect2167" width="0" height="272.64" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient2163)" className="apexcharts-xcrosshairs" y2="272.64" filter="none" fill-opacity="0.9"></rect>
                                                        <g id="SvgjsG2221" className="apexcharts-yaxis apexcharts-xaxis-inversed">
                                                            <g id="SvgjsG2222" className="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g" transform="translate(-75.59490966796875, 0)">
                                                                <text id="SvgjsText2223" font-family="inherit" x="-15" y="31.742545454545457" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2224">Revod.io</tspan>
                                                                    <title>Revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText2225" font-family="inherit" x="-15" y="86.27054545454546" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2226">Astynax</tspan>
                                                                    <title>Astynax</title>
                                                                </text>
                                                                <text id="SvgjsText2227" font-family="inherit" x="-15" y="140.79854545454546" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2228">AMC23</tspan>
                                                                    <title>AMC23</title>
                                                                </text>
                                                                <text id="SvgjsText2229" font-family="inherit" x="-15" y="195.32654545454545" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2230">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText2231" font-family="inherit" x="-15" y="249.85454545454544" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2232">incuby.biz</tspan>
                                                                    <title>incuby.biz</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG2204" className="apexcharts-xaxis apexcharts-yaxis-inversed">
                                                            <g id="SvgjsG2205" className="apexcharts-xaxis-texts-g" transform="translate(0, -9.333333333333334)">
                                                                <text id="SvgjsText2206" font-family="inherit" x="231.99505615234375" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2208">16K</tspan>
                                                                    <title>16K</title>
                                                                </text>
                                                                <text id="SvgjsText2209" font-family="inherit" x="173.89629211425782" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2211">12K</tspan>
                                                                    <title>12K</title>
                                                                </text>
                                                                <text id="SvgjsText2212" font-family="inherit" x="115.79752807617186" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2214">8K</tspan>
                                                                    <title>8K</title>
                                                                </text>
                                                                <text id="SvgjsText2215" font-family="inherit" x="57.698764038085926" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2217">4K</tspan>
                                                                    <title>4K</title>
                                                                </text>
                                                                <text id="SvgjsText2218" font-family="inherit" x="-0.4000000000000057" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2220">0K</tspan>
                                                                    <title>0K</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG2233" className="apexcharts-grid">
                                                            <g id="SvgjsG2234" className="apexcharts-gridlines-horizontal"></g>
                                                            <g id="SvgjsG2235" className="apexcharts-gridlines-vertical">
                                                                <line id="SvgjsLine2236" x1="0" y1="0" x2="0" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2238" x1="58.298764038085935" y1="0" x2="58.298764038085935" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2240" x1="116.59752807617187" y1="0" x2="116.59752807617187" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2242" x1="174.89629211425782" y1="0" x2="174.89629211425782" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2244" x1="233.19505615234377" y1="0" x2="233.19505615234377" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <line id="SvgjsLine2237" x1="0" y1="273.64" x2="0" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2239" x1="58.298764038085935" y1="273.64" x2="58.298764038085935" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2241" x1="116.59752807617187" y1="273.64" x2="116.59752807617187" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2243" x1="174.89629211425782" y1="273.64" x2="174.89629211425782" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2245" x1="233.19505615234377" y1="273.64" x2="233.19505615234377" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2247" x1="0" y1="272.64" x2="231.99505615234375" y2="272.64" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                            <line id="SvgjsLine2246" x1="0" y1="1" x2="0" y2="272.64" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                                                            </line>
                                                        </g>
                                                        <g id="SvgjsG2170" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG2171" className="apexcharts-series" seriesname="Sales">
                                                                <path id="SvgjsPath2175" d="M 0.1 13.632L 209.59536514282226 13.632Q 217.59536514282226 13.632 217.59536514282226 21.631999999999998L 217.59536514282226 32.896Q 217.59536514282226 40.896 209.59536514282226 40.896L 209.59536514282226 40.896L 0.1 40.896L 0.1 40.896z" fill="rgba(62,151,255,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 13.632L 209.59536514282226 13.632Q 217.59536514282226 13.632 217.59536514282226 21.631999999999998L 217.59536514282226 32.896Q 217.59536514282226 40.896 209.59536514282226 40.896L 209.59536514282226 40.896L 0.1 40.896L 0.1 40.896z" pathfrom="M 0.1 13.632L 0.1 13.632L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 13.632" cy="68.16" cx="217.59536514282226" j="0" val="15" barheight="27.264" barwidth="217.49536514282227"></path>
                                                                <path id="SvgjsPath2181" d="M 0.1 68.16L 166.0962921142578 68.16Q 174.0962921142578 68.16 174.0962921142578 76.16L 174.0962921142578 87.42399999999999Q 174.0962921142578 95.42399999999999 166.0962921142578 95.42399999999999L 166.0962921142578 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999z" fill="rgba(241,65,108,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 68.16L 166.0962921142578 68.16Q 174.0962921142578 68.16 174.0962921142578 76.16L 174.0962921142578 87.42399999999999Q 174.0962921142578 95.42399999999999 166.0962921142578 95.42399999999999L 166.0962921142578 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999z" pathfrom="M 0.1 68.16L 0.1 68.16L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 68.16" cy="122.68799999999999" cx="174.0962921142578" j="1" val="12" barheight="27.264" barwidth="173.9962921142578">
                                                                </path>
                                                                <path id="SvgjsPath2187" d="M 0.1 122.68799999999999L 137.09691009521484 122.68799999999999Q 145.09691009521484 122.68799999999999 145.09691009521484 130.688L 145.09691009521484 141.952Q 145.09691009521484 149.952 137.09691009521484 149.952L 137.09691009521484 149.952L 0.1 149.952L 0.1 149.952z" fill="rgba(80,205,137,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 122.68799999999999L 137.09691009521484 122.68799999999999Q 145.09691009521484 122.68799999999999 145.09691009521484 130.688L 145.09691009521484 141.952Q 145.09691009521484 149.952 137.09691009521484 149.952L 137.09691009521484 149.952L 0.1 149.952L 0.1 149.952z" pathfrom="M 0.1 122.68799999999999L 0.1 122.68799999999999L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 122.68799999999999" cy="177.21599999999998" cx="145.09691009521484" j="2" val="10" barheight="27.264" barwidth="144.99691009521484">
                                                                </path>
                                                                <path id="SvgjsPath2193" d="M 0.1 177.21599999999998L 108.09752807617187 177.21599999999998Q 116.09752807617187 177.21599999999998 116.09752807617187 185.21599999999998L 116.09752807617187 196.48Q 116.09752807617187 204.48 108.09752807617187 204.48L 108.09752807617187 204.48L 0.1 204.48L 0.1 204.48z" fill="rgba(255,199,0,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 177.21599999999998L 108.09752807617187 177.21599999999998Q 116.09752807617187 177.21599999999998 116.09752807617187 185.21599999999998L 116.09752807617187 196.48Q 116.09752807617187 204.48 108.09752807617187 204.48L 108.09752807617187 204.48L 0.1 204.48L 0.1 204.48z" pathfrom="M 0.1 177.21599999999998L 0.1 177.21599999999998L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 177.21599999999998" cy="231.74399999999997" cx="116.09752807617187" j="3" val="8" barheight="27.264" barwidth="115.99752807617188">
                                                                </path>
                                                                <path id="SvgjsPath2199" d="M 0.1 231.74399999999997L 93.59783706665038 231.74399999999997Q 101.59783706665038 231.74399999999997 101.59783706665038 239.74399999999997L 101.59783706665038 251.00799999999998Q 101.59783706665038 259.008 93.59783706665038 259.008L 93.59783706665038 259.008L 0.1 259.008L 0.1 259.008z" fill="rgba(114,57,234,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 231.74399999999997L 93.59783706665038 231.74399999999997Q 101.59783706665038 231.74399999999997 101.59783706665038 239.74399999999997L 101.59783706665038 251.00799999999998Q 101.59783706665038 259.008 93.59783706665038 259.008L 93.59783706665038 259.008L 0.1 259.008L 0.1 259.008z" pathfrom="M 0.1 231.74399999999997L 0.1 231.74399999999997L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 231.74399999999997" cy="286.272" cx="101.59783706665038" j="4" val="7" barheight="27.264" barwidth="101.49783706665039"></path>
                                                                <g id="SvgjsG2173" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG2174" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2180" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2186" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2192" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2198" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG2172" className="apexcharts-datalabels">
                                                                <g id="SvgjsG2177" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2179" font-family="inherit" x="28.099999999999994" y="34.263999999999996" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="28.099999999999994" cy="34.263999999999996" style={{ fontFamily: 'inherit' }}>15,000</text>
                                                                </g>
                                                                <g id="SvgjsG2183" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2185" font-family="inherit" x="28.099999999999994" y="88.792" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="28.099999999999994" cy="88.792" style={{ fontFamily: 'inherit' }}>12,000</text>
                                                                </g>
                                                                <g id="SvgjsG2189" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2191" font-family="inherit" x="29.099999999999994" y="143.32" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="29.099999999999994" cy="143.32" style={{ fontFamily: 'inherit' }}>10,000</text>
                                                                </g>
                                                                <g id="SvgjsG2195" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2197" font-family="inherit" x="26.099999999999994" y="197.84799999999998" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="26.099999999999994" cy="197.84799999999998" style={{ fontFamily: 'inherit' }}>8,000</text>
                                                                </g>
                                                                <g id="SvgjsG2201" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2203" font-family="inherit" x="25.099999999999994" y="252.376" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="25.099999999999994" cy="252.376" style={{ fontFamily: 'inherit' }}>7,000</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine2248" x1="0" y1="0" x2="231.99505615234375" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine2249" x1="0" y1="0" x2="231.99505615234375" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG2250" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG2251" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG2252" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG2160" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 175 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: 166.039, top: 42.104 }}>
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}>Astynax</div>
                                                    <div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(241, 65, 108, 0.85)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">Sales: </span>
                                                                <span className="apexcharts-tooltip-text-y-value">12K</span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end::Body */}
                                </div>
                                {/* end::Chart widget 6 */}
                            </div>
                            <div className="col-xxl-4">
                                {/* begin::Chart widget 6 */}
                                <div className="card card-flush h-lg-100">
                                    {/* begin::Header */}
                                    <div className="card-header py-7 mb-3">
                                        {/* begin::Title */}
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder text-gray-800">Top 5 Projects by RCB</span>
                                            <span className="text-gray-400 mt-1 fw-bold fs-6">Projects offering Hight RCB</span>
                                        </h3>
                                        {/* end::Title */}
                                        {/* begin::Toolbar */}
                                        <div className="card-toolbar">
                                            <a href="https://investorspolice.com/hyip/h-projects.php" title="View All" className="btn btn-sm btn-light">View All</a>
                                        </div>
                                        {/* end::Toolbar */}
                                    </div>
                                    {/* end::Header */}
                                    {/* begin::Body */}
                                    <div className="card-body py-0 ps-6 mt-n12">
                                        <div id="kt_charts_widget_6" style={{ minHeight: 365 }}>
                                            <div id="apexchartsgjm5rj4gl" className="apexcharts-canvas apexchartsgjm5rj4gl apexcharts-theme-light" style={{ width: 350, height: 350 }}>
                                                <svg id="SvgjsSvg2157" width="350" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                                    <g id="SvgjsG2159" className="apexcharts-inner apexcharts-graphical" transform="translate(95.8199462890625, 30)">
                                                        <defs id="SvgjsDefs2158">
                                                            <linearGradient id="SvgjsLinearGradient2163" x1="0" y1="0" x2="0" y2="1">
                                                                <stop id="SvgjsStop2164" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                                                                <stop id="SvgjsStop2165" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                                <stop id="SvgjsStop2166" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                            </linearGradient>
                                                            <clipPath id="gridRectMaskgjm5rj4gl">
                                                                <rect id="SvgjsRect2168" width="235.99505615234375" height="272.64" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskgjm5rj4gl"></clipPath>
                                                            <clipPath id="nonForecastMaskgjm5rj4gl"></clipPath>
                                                            <clipPath id="gridRectMarkerMaskgjm5rj4gl">
                                                                <rect id="SvgjsRect2169" width="235.99505615234375" height="276.64" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                        </defs>
                                                        <rect id="SvgjsRect2167" width="0" height="272.64" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient2163)" className="apexcharts-xcrosshairs" y2="272.64" filter="none" fill-opacity="0.9"></rect>
                                                        <g id="SvgjsG2221" className="apexcharts-yaxis apexcharts-xaxis-inversed">
                                                            <g id="SvgjsG2222" className="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g" transform="translate(-75.59490966796875, 0)">
                                                                <text id="SvgjsText2223" font-family="inherit" x="-15" y="31.742545454545457" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2224">Revod.io</tspan>
                                                                    <title>Revod.io</title>
                                                                </text>
                                                                <text id="SvgjsText2225" font-family="inherit" x="-15" y="86.27054545454546" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2226">Astynax</tspan>
                                                                    <title>Astynax</title>
                                                                </text>
                                                                <text id="SvgjsText2227" font-family="inherit" x="-15" y="140.79854545454546" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2228">AMC23</tspan>
                                                                    <title>AMC23</title>
                                                                </text>
                                                                <text id="SvgjsText2229" font-family="inherit" x="-15" y="195.32654545454545" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2230">8bit.io</tspan>
                                                                    <title>8bit.io</title>
                                                                </text>
                                                                <text id="SvgjsText2231" font-family="inherit" x="-15" y="249.85454545454544" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2232">incuby.biz</tspan>
                                                                    <title>incuby.biz</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG2204" className="apexcharts-xaxis apexcharts-yaxis-inversed">
                                                            <g id="SvgjsG2205" className="apexcharts-xaxis-texts-g" transform="translate(0, -9.333333333333334)">
                                                                <text id="SvgjsText2206" font-family="inherit" x="231.99505615234375" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2208">16K</tspan>
                                                                    <title>16K</title>
                                                                </text>
                                                                <text id="SvgjsText2209" font-family="inherit" x="173.89629211425782" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2211">12K</tspan>
                                                                    <title>12K</title>
                                                                </text>
                                                                <text id="SvgjsText2212" font-family="inherit" x="115.79752807617186" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2214">8K</tspan>
                                                                    <title>8K</title>
                                                                </text>
                                                                <text id="SvgjsText2215" font-family="inherit" x="57.698764038085926" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2217">4K</tspan>
                                                                    <title>4K</title>
                                                                </text>
                                                                <text id="SvgjsText2218" font-family="inherit" x="-0.4000000000000057" y="302.64" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#3f4254" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: 'inherit' }}>
                                                                    <tspan id="SvgjsTspan2220">0K</tspan>
                                                                    <title>0K</title>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG2233" className="apexcharts-grid">
                                                            <g id="SvgjsG2234" className="apexcharts-gridlines-horizontal"></g>
                                                            <g id="SvgjsG2235" className="apexcharts-gridlines-vertical">
                                                                <line id="SvgjsLine2236" x1="0" y1="0" x2="0" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2238" x1="58.298764038085935" y1="0" x2="58.298764038085935" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2240" x1="116.59752807617187" y1="0" x2="116.59752807617187" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2242" x1="174.89629211425782" y1="0" x2="174.89629211425782" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                                <line id="SvgjsLine2244" x1="233.19505615234377" y1="0" x2="233.19505615234377" y2="272.64" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" className="apexcharts-gridline"></line>
                                                            </g>
                                                            <line id="SvgjsLine2237" x1="0" y1="273.64" x2="0" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2239" x1="58.298764038085935" y1="273.64" x2="58.298764038085935" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2241" x1="116.59752807617187" y1="273.64" x2="116.59752807617187" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2243" x1="174.89629211425782" y1="273.64" x2="174.89629211425782" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2245" x1="233.19505615234377" y1="273.64" x2="233.19505615234377" y2="279.64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line>
                                                            <line id="SvgjsLine2247" x1="0" y1="272.64" x2="231.99505615234375" y2="272.64" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                            <line id="SvgjsLine2246" x1="0" y1="1" x2="0" y2="272.64" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                                                            </line>
                                                        </g>
                                                        <g id="SvgjsG2170" className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g id="SvgjsG2171" className="apexcharts-series" seriesname="Sales">
                                                                <path id="SvgjsPath2175" d="M 0.1 13.632L 209.59536514282226 13.632Q 217.59536514282226 13.632 217.59536514282226 21.631999999999998L 217.59536514282226 32.896Q 217.59536514282226 40.896 209.59536514282226 40.896L 209.59536514282226 40.896L 0.1 40.896L 0.1 40.896z" fill="rgba(62,151,255,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 13.632L 209.59536514282226 13.632Q 217.59536514282226 13.632 217.59536514282226 21.631999999999998L 217.59536514282226 32.896Q 217.59536514282226 40.896 209.59536514282226 40.896L 209.59536514282226 40.896L 0.1 40.896L 0.1 40.896z" pathfrom="M 0.1 13.632L 0.1 13.632L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 40.896L 0.1 13.632" cy="68.16" cx="217.59536514282226" j="0" val="15" barheight="27.264" barwidth="217.49536514282227"></path>
                                                                <path id="SvgjsPath2181" d="M 0.1 68.16L 166.0962921142578 68.16Q 174.0962921142578 68.16 174.0962921142578 76.16L 174.0962921142578 87.42399999999999Q 174.0962921142578 95.42399999999999 166.0962921142578 95.42399999999999L 166.0962921142578 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999z" fill="rgba(241,65,108,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 68.16L 166.0962921142578 68.16Q 174.0962921142578 68.16 174.0962921142578 76.16L 174.0962921142578 87.42399999999999Q 174.0962921142578 95.42399999999999 166.0962921142578 95.42399999999999L 166.0962921142578 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999z" pathfrom="M 0.1 68.16L 0.1 68.16L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 95.42399999999999L 0.1 68.16" cy="122.68799999999999" cx="174.0962921142578" j="1" val="12" barheight="27.264" barwidth="173.9962921142578">
                                                                </path>
                                                                <path id="SvgjsPath2187" d="M 0.1 122.68799999999999L 137.09691009521484 122.68799999999999Q 145.09691009521484 122.68799999999999 145.09691009521484 130.688L 145.09691009521484 141.952Q 145.09691009521484 149.952 137.09691009521484 149.952L 137.09691009521484 149.952L 0.1 149.952L 0.1 149.952z" fill="rgba(80,205,137,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 122.68799999999999L 137.09691009521484 122.68799999999999Q 145.09691009521484 122.68799999999999 145.09691009521484 130.688L 145.09691009521484 141.952Q 145.09691009521484 149.952 137.09691009521484 149.952L 137.09691009521484 149.952L 0.1 149.952L 0.1 149.952z" pathfrom="M 0.1 122.68799999999999L 0.1 122.68799999999999L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 149.952L 0.1 122.68799999999999" cy="177.21599999999998" cx="145.09691009521484" j="2" val="10" barheight="27.264" barwidth="144.99691009521484">
                                                                </path>
                                                                <path id="SvgjsPath2193" d="M 0.1 177.21599999999998L 108.09752807617187 177.21599999999998Q 116.09752807617187 177.21599999999998 116.09752807617187 185.21599999999998L 116.09752807617187 196.48Q 116.09752807617187 204.48 108.09752807617187 204.48L 108.09752807617187 204.48L 0.1 204.48L 0.1 204.48z" fill="rgba(255,199,0,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 177.21599999999998L 108.09752807617187 177.21599999999998Q 116.09752807617187 177.21599999999998 116.09752807617187 185.21599999999998L 116.09752807617187 196.48Q 116.09752807617187 204.48 108.09752807617187 204.48L 108.09752807617187 204.48L 0.1 204.48L 0.1 204.48z" pathfrom="M 0.1 177.21599999999998L 0.1 177.21599999999998L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 204.48L 0.1 177.21599999999998" cy="231.74399999999997" cx="116.09752807617187" j="3" val="8" barheight="27.264" barwidth="115.99752807617188">
                                                                </path>
                                                                <path id="SvgjsPath2199" d="M 0.1 231.74399999999997L 93.59783706665038 231.74399999999997Q 101.59783706665038 231.74399999999997 101.59783706665038 239.74399999999997L 101.59783706665038 251.00799999999998Q 101.59783706665038 259.008 93.59783706665038 259.008L 93.59783706665038 259.008L 0.1 259.008L 0.1 259.008z" fill="rgba(114,57,234,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" clip-path="url(#gridRectMaskgjm5rj4gl)" pathto="M 0.1 231.74399999999997L 93.59783706665038 231.74399999999997Q 101.59783706665038 231.74399999999997 101.59783706665038 239.74399999999997L 101.59783706665038 251.00799999999998Q 101.59783706665038 259.008 93.59783706665038 259.008L 93.59783706665038 259.008L 0.1 259.008L 0.1 259.008z" pathfrom="M 0.1 231.74399999999997L 0.1 231.74399999999997L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 259.008L 0.1 231.74399999999997" cy="286.272" cx="101.59783706665038" j="4" val="7" barheight="27.264" barwidth="101.49783706665039"></path>
                                                                <g id="SvgjsG2173" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                                    <g id="SvgjsG2174" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2180" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2186" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2192" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                    <g id="SvgjsG2198" className="apexcharts-bar-goals-groups">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG2172" className="apexcharts-datalabels">
                                                                <g id="SvgjsG2177" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2179" font-family="inherit" x="28.099999999999994" y="34.263999999999996" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="28.099999999999994" cy="34.263999999999996" style={{ fontFamily: 'inherit' }}>15,000</text>
                                                                </g>
                                                                <g id="SvgjsG2183" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2185" font-family="inherit" x="28.099999999999994" y="88.792" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="28.099999999999994" cy="88.792" style={{ fontFamily: 'inherit' }}>12,000</text>
                                                                </g>
                                                                <g id="SvgjsG2189" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2191" font-family="inherit" x="29.099999999999994" y="143.32" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="29.099999999999994" cy="143.32" style={{ fontFamily: 'inherit' }}>10,000</text>
                                                                </g>
                                                                <g id="SvgjsG2195" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2197" font-family="inherit" x="26.099999999999994" y="197.84799999999998" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="26.099999999999994" cy="197.84799999999998" style={{ fontFamily: 'inherit' }}>8,000</text>
                                                                </g>
                                                                <g id="SvgjsG2201" className="apexcharts-data-labels" transform="rotate(0)">
                                                                    <text id="SvgjsText2203" font-family="inherit" x="25.099999999999994" y="252.376" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="600" fill="#ffffff" className="apexcharts-datalabel" cx="25.099999999999994" cy="252.376" style={{ fontFamily: 'inherit' }}>7,000</text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine2248" x1="0" y1="0" x2="231.99505615234375" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine2249" x1="0" y1="0" x2="231.99505615234375" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG2250" className="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG2251" className="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG2252" className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g id="SvgjsG2160" className="apexcharts-annotations"></g>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: 175 }}></div>
                                                <div className="apexcharts-tooltip apexcharts-theme-light" style={{ left: 166.039, top: 42.104 }}>
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'inherit', fontSize: 12 }}>Astynax</div>
                                                    <div className="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgba(241, 65, 108, 0.85)' }}></span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'inherit', fontSize: 12 }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">Sales: </span>
                                                                <span className="apexcharts-tooltip-text-y-value">12K</span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label"></span>
                                                                <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end::Body */}
                                </div>
                                {/* end::Chart widget 6 */}
                            </div>
                            {/* end::Col */}
                            {/* begin::Col */}
                            <div className="col-xxl-4 mb-5 mb-xl-0">
                                {/* begin::List widget 8 */}
                                <div className="card card-flush h-lg-100">
                                    {/* begin::Header */}
                                    <div className="card-header pt-7 mb-5">
                                        {/* begin::Title */}
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder text-gray-800">Top Projects by Users</span>
                                            <span className="text-gray-400 mt-1 fw-bold fs-6">Projects by No. of Investors</span>
                                        </h3>
                                        {/* end::Title */}
                                        {/* begin::Toolbar */}
                                        <div className="card-toolbar">
                                            <a href="https://investorspolice.com/hyip/h-projects.php" title="View All" className="btn btn-sm btn-light">View All</a>
                                        </div>
                                        {/* end::Toolbar */}
                                    </div>
                                    {/* end::Header */}
                                    {/* begin::Body */}
                                    <div className="card-body pt-0">
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Revod
                                                        Finance</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">revod.io</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">9,763</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-success fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}2.6%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        <div className="separator separator-dashed my-3"></div>
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">8bit</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">8bit.io</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">4,062</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-danger fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}0.4%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        <div className="separator separator-dashed my-3"></div>
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Astynax</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">astynax.com</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">1,680</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-success fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}0.2%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        <div className="separator separator-dashed my-3"></div>
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">AMC23</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">amc23</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">849</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-success fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}4.1%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        <div className="separator separator-dashed my-3"></div>
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Incuby</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">incuby.biz</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">604</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-danger fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                                    <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}8.3%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                        {/* begin::Separator */}
                                        <div className="separator separator-dashed my-3"></div>
                                        {/* end::Separator */}
                                        {/* begin::Item */}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Flag */}
                                            <img src="https://investorspolice.com/assets/media/logos/favicon.ico" className="me-4 w-25px" style={{ borderRadius: 4 }} alt=""/>
                                            {/* end::Flag */}
                                            {/* begin::Section */}
                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                {/* begin::Content */}
                                                <div className="me-5">
                                                    {/* begin::Title */}
                                                    <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">One
                                                        Bull</a>
                                                    {/* end::Title */}
                                                    {/* begin::Desc */}
                                                    <span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">onebull.com</span>
                                                    {/* end::Desc */}
                                                </div>
                                                {/* end::Content */}
                                                {/* begin::Info */}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Number */}
                                                    <span className="text-gray-800 fw-bolder fs-6 me-3 d-block">237</span>
                                                    {/* end::Number */}
                                                    {/* begin::Label */}
                                                    <div className="m-0">
                                                        {/* begin::Label */}
                                                        <span className="badge badge-success fs-base">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
                                                            <span className="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon */}1.9%
                                                        </span>
                                                        {/* end::Label */}
                                                    </div>
                                                    {/* end::Label */}
                                                </div>
                                                {/* end::Info */}
                                            </div>
                                            {/* end::Section */}
                                        </div>
                                        {/* end::Item */}
                                    </div>
                                    {/* end::Body */}
                                </div>
                                {/* end::LIst widget 8 */}
                            </div>
                            {/* end::Col */}
                        </div>
                        {/* end::Row */}
                    </div>
                    {/* end::Col */}
                </div>
            </div>
        </div>
        <RightToolbar />
    </>
  )
}
