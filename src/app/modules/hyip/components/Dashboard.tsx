import React from 'react'
import {RightToolbar} from '../../../../_metronic/partials/layout/RightToolbar'
import { AdWidget1, StatisticsWidget6 } from '../../../../_metronic/partials/widgets'
// import { ApexWidget1 } from '../../../../_metronic/partials/widgets/apex/ApexWidget1'
// import { ApexWidget2 } from '../../../../_metronic/partials/widgets/apex/ApexWidget2'
import { ListsWidget10 } from '../../../../_metronic/partials/widgets/lists/ListsWidget10'
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
                        {/* <ApexWidget1 
                            title='Search for the best RCB Offers'
                            description='RCB - Referral Commission Back'
                        /> */}
                        {/* end::Apex Widget 1 */}
                    </div>
                    <div className="col-xl-6">
                        {/* begin::Charts Widget 5 */}
                        {/* <ApexWidget2
                            title='Industry Dynamics'
                            description='The graph shows the number of new and scam
                            projects by day over the last 10 days'
                        /> */}
                        {/* end::Charts Widget 5 */}
                    </div>
                    <div className="col-xl-3 " style={{ height: 450 }}>
                        {/* begin::Charts Widget 5 */}
                        <StatisticsWidget6
                            className='card-xl-stretch mb-xl-4'
                            color='success'
                            title='In Last 10 Days'
                            description='Deposits'
                            progress='50%'
                            amount='$48,325'
                        />
                        <StatisticsWidget6
                            className='card-xl-stretch mt-1 mb-0'
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
                        <div className='bg-primary'>
                            {/* begin::List Widget 10 */}
                            <ListsWidget10 
                                title='New Projects'
                                description='Recently Launched Projects'
                                project1name='REVOD Finance'
                                project1domain='revod.io'
                                project1logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project1reportdate='25/06/2022'
                                project1senility='3 Days Back'
                                project2name='One Bull'
                                project2domain='onebull.cc'
                                project2logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project2reportdate='25/06/2022'
                                project2senility='3 Days Back'
                                project3name='Sedo Mining'
                                project3domain='sedomining.farm'
                                project3logo='https://uploads-ssl.webflow.com/61094a65869caa4f3c35df0e/632805cc1c814d86d2792c62_63189f35f79985fb88e29064_sedologonew.png'
                                project3reportdate='25/06/2022'
                                project3senility='3 Days Back'
                                project4name='REVOD Finance'
                                project4domain='revod.io'
                                project4logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project4reportdate='25/06/2022'
                                project4senility='3 Days Back'
                                project5name='REVOD Finance'
                                project5domain='revod.io'
                                project5logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project5reportdate='25/06/2022'
                                project5senility='3 Days Back'
                                project6name='REVOD Finance'
                                project6domain='revod.io'
                                project6logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project6reportdate='25/06/2022'
                                project6senility='3 Days Back'
                                project7name='REVOD Finance'
                                project7domain='revod.io'
                                project7logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project7reportdate='25/06/2022'
                                project7senility='3 Days Back'
                                project8name='REVOD Finance'
                                project8domain='revod.io'
                                project8logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project8reportdate='25/06/2022'
                                project8senility='3 Days Back'
                            />
                            {/* end::List Widget 10 */}
                        </div>
                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        <div className='bg-primary'>
                            {/* begin::List Widget 10 */}
                            <ListsWidget10 
                                title='New Projects'
                                description='Recently Launched Projects'
                                project1name='REVOD Finance'
                                project1domain='revod.io'
                                project1logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project1reportdate='25/06/2022'
                                project1senility='3 Days Back'
                                project2name='One Bull'
                                project2domain='onebull.cc'
                                project2logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project2reportdate='25/06/2022'
                                project2senility='3 Days Back'
                                project3name='Sedo Mining'
                                project3domain='sedomining.farm'
                                project3logo='https://uploads-ssl.webflow.com/61094a65869caa4f3c35df0e/632805cc1c814d86d2792c62_63189f35f79985fb88e29064_sedologonew.png'
                                project3reportdate='25/06/2022'
                                project3senility='3 Days Back'
                                project4name='REVOD Finance'
                                project4domain='revod.io'
                                project4logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project4reportdate='25/06/2022'
                                project4senility='3 Days Back'
                                project5name='REVOD Finance'
                                project5domain='revod.io'
                                project5logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project5reportdate='25/06/2022'
                                project5senility='3 Days Back'
                                project6name='REVOD Finance'
                                project6domain='revod.io'
                                project6logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project6reportdate='25/06/2022'
                                project6senility='3 Days Back'
                                project7name='REVOD Finance'
                                project7domain='revod.io'
                                project7logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project7reportdate='25/06/2022'
                                project7senility='3 Days Back'
                                project8name='REVOD Finance'
                                project8domain='revod.io'
                                project8logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project8reportdate='25/06/2022'
                                project8senility='3 Days Back'
                            />
                            {/* end::List Widget 10 */}
                        </div>
                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        <div className='bg-primary'>
                            {/* begin::List Widget 10 */}
                            <ListsWidget10 
                                title='New Projects'
                                description='Recently Launched Projects'
                                project1name='REVOD Finance'
                                project1domain='revod.io'
                                project1logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project1reportdate='25/06/2022'
                                project1senility='3 Days Back'
                                project2name='One Bull'
                                project2domain='onebull.cc'
                                project2logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project2reportdate='25/06/2022'
                                project2senility='3 Days Back'
                                project3name='Sedo Mining'
                                project3domain='sedomining.farm'
                                project3logo='https://uploads-ssl.webflow.com/61094a65869caa4f3c35df0e/632805cc1c814d86d2792c62_63189f35f79985fb88e29064_sedologonew.png'
                                project3reportdate='25/06/2022'
                                project3senility='3 Days Back'
                                project4name='REVOD Finance'
                                project4domain='revod.io'
                                project4logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project4reportdate='25/06/2022'
                                project4senility='3 Days Back'
                                project5name='REVOD Finance'
                                project5domain='revod.io'
                                project5logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project5reportdate='25/06/2022'
                                project5senility='3 Days Back'
                                project6name='REVOD Finance'
                                project6domain='revod.io'
                                project6logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project6reportdate='25/06/2022'
                                project6senility='3 Days Back'
                                project7name='REVOD Finance'
                                project7domain='revod.io'
                                project7logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project7reportdate='25/06/2022'
                                project7senility='3 Days Back'
                                project8name='REVOD Finance'
                                project8domain='revod.io'
                                project8logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project8reportdate='25/06/2022'
                                project8senility='3 Days Back'
                            />
                            {/* end::List Widget 10 */}
                        </div>
                    </div>
                    <div className="col-xl-3 mb-xl-10">
                        <div className='bg-primary'>
                            {/* begin::List Widget 10 */}
                            <ListsWidget10 
                                title='New Projects'
                                description='Recently Launched Projects'
                                project1name='REVOD Finance'
                                project1domain='revod.io'
                                project1logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project1reportdate='25/06/2022'
                                project1senility='3 Days Back'
                                project2name='One Bull'
                                project2domain='onebull.cc'
                                project2logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project2reportdate='25/06/2022'
                                project2senility='3 Days Back'
                                project3name='Sedo Mining'
                                project3domain='sedomining.farm'
                                project3logo='https://uploads-ssl.webflow.com/61094a65869caa4f3c35df0e/632805cc1c814d86d2792c62_63189f35f79985fb88e29064_sedologonew.png'
                                project3reportdate='25/06/2022'
                                project3senility='3 Days Back'
                                project4name='REVOD Finance'
                                project4domain='revod.io'
                                project4logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project4reportdate='25/06/2022'
                                project4senility='3 Days Back'
                                project5name='REVOD Finance'
                                project5domain='revod.io'
                                project5logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project5reportdate='25/06/2022'
                                project5senility='3 Days Back'
                                project6name='REVOD Finance'
                                project6domain='revod.io'
                                project6logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project6reportdate='25/06/2022'
                                project6senility='3 Days Back'
                                project7name='REVOD Finance'
                                project7domain='revod.io'
                                project7logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project7reportdate='25/06/2022'
                                project7senility='3 Days Back'
                                project8name='REVOD Finance'
                                project8domain='revod.io'
                                project8logo='https://investorspolice.com/assets/media/logos/favicon.ico'
                                project8reportdate='25/06/2022'
                                project8senility='3 Days Back'
                            />
                            {/* end::List Widget 10 */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 mb-xl-10">
                    {/* begin::Mixed Widget 16 */}
                    
                    {/* end::Mixed Widget 16 */}
                </div>
            </div>
        </div>
        <RightToolbar />
    </>
  )
}
