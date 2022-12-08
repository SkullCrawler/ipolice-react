import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { AdWidget1 } from '../../../_metronic/partials/widgets'
import { CardsWidget1 } from '../../../_metronic/partials/widgets/cards/CardsWidget1'
import {CardsWidget2} from '../../../_metronic/partials/widgets/cards/CardsWidget2'
import { CardsWidget3 } from '../../../_metronic/partials/widgets/cards/CardsWidget3'
import {SliderWidget1} from '../../../_metronic/partials/widgets/slider/SliderWidget1'
import {SliderWidget2} from '../../../_metronic/partials/widgets/slider/SliderWidget2'
import { SliderWidget3 } from '../../../_metronic/partials/widgets/slider/SliderWidget3'


const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
        <div id="kt_content_container mt-2" className="container-fluid">
            {/* begin::Row */}
            <h1 className="mt-3">Investors Police</h1>
            <span className="pb-5 text-gray-800 fs-2">Your Trust Partners for All of your Investments.Secure your Investments with
                our pool of trusted platforms.</span><br/>
            <span className="pb-5 text-gray-600 fs-3">Secure your Investments with our pool of trusted platforms.</span>
            {/* end::Row */}
            {/* begin::Row */}
            <div className="row mt-1 g-5 g-xl-10">
                {/* begin::Card widget 2 */}
                <div className='col'>
                    <CardsWidget2
                        fontIcon='bi-coin'
                        backgroundsvg='https://investorspolice.com/assets/media/svg/shapes/bitcoin.svg'
                        backgroundsvgPos='right-top'
                        title='COINs'
                        description='325.1K'
                        descriptionexp='219 Added Today'
                    />
                </div>
                {/* end::Card widget 2 */}
                {/* begin::Card widget 2 */}
                <div className='col'>
                    <CardsWidget2
                        fontIcon='bi-boxes'
                        backgroundsvg='https://investorspolice.com/assets/media/svg/brand-logos/kanba.svg'
                        backgroundsvgPos='right-bottom'
                        title='DAPPs'
                        description='468K'
                        descriptionexp='49 Added Today'
                    />
                </div>
                {/* end::Card widget 2 */}
                {/* begin::Card widget 2 */}
                <div className='col'>
                    <CardsWidget2
                        fontIcon='bi-bar-chart'
                        backgroundsvg='https://investorspolice.com/assets/media/misc/bg-2.jpg'
                        backgroundsvgPos='center'
                        title='HYIPs'
                        description='15418'
                        descriptionexp='15 Added Today'
                    />
                </div>
                {/* end::Card widget 2 */}
                {/* begin::Card widget 2 */}
                <div className='col'>
                    <CardsWidget2
                        fontIcon='bi-cpu-fill'
                        backgroundsvg='https://investorspolice.com/assets/media/svg/misc/taieri.svg'
                        backgroundsvgPos='right-bottom'
                        title='NFTs'
                        description='1541K'
                        descriptionexp='1589 Added Today'
                    />
                </div>
                {/* end::Card widget 2 */}
                {/* begin::Card widget 2 */}
                <div className='col'>
                    <CardsWidget2
                        fontIcon='bi-currency-exchange'
                        backgroundsvg='https://investorspolice.com/assets/media/svg/coins/binance.svg'
                        backgroundsvgPos='right-bottom'
                        title='Exchanges'
                        description='249'
                        descriptionexp='15 Offers'
                    />
                </div>
                {/* end::Card widget 2 */}

            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className="row my-2 g-5 g-xl-10">
                {/* begin::Col */}
                <div className="col-xl-3 mb-xl-10">
                    {/* begin::Slider Widget 1 */}
                    <SliderWidget1 
                        title='Popular HYIPs'
                        titledescription='with higher IP score'
                        // Carasoul Item 1
                        chartimg1src=''
                        company1name='Ape Capital'
                        section1score='7.1'
                        section1deposits='$789065'
                        section1paid='$4680'
                        section1offers='10'
                        section1button='#'
                        // Carasoul Item 2
                        company2name='Ape Capital'
                        chartimg2src=''
                        section2score='7.1'
                        section2deposits='$789065'
                        section2paid='$4680'
                        section2offers='10'
                        section2button='#'
                        // Carasoul Item 3
                        company3name='Ape Capital'
                        chartimg3src=''
                        section3score='7.1'
                        section3deposits='$789065'
                        section3paid='$4680'
                        section3offers='10'
                        section3button='#'
                        // Carasoul Item 4
                        company4name='Ape Capital'
                        chartimg4src=''
                        section4score='7.1'
                        section4deposits='$789065'
                        section4paid='$4680'
                        section4offers='10'
                        section4button='#'
                    />
                    {/* end::Slider Widget 1 */}
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-xl-3 mb-xl-10">
                    {/* begin::Slider Widget 1 */}
                    <SliderWidget1 
                        title='Popular COINs'
                        titledescription='with higher IP score & trust rating in the last 24 Hrs'
                        // Carasoul Item 1
                        chartimg1src=''
                        company1name='Ape Capital'
                        section1score='7.1'
                        section1deposits='$789065'
                        section1paid='$4680'
                        section1offers='10'
                        section1button='#'
                        // Carasoul Item 2
                        company2name='Ape Capital'
                        chartimg2src=''
                        section2score='7.1'
                        section2deposits='$789065'
                        section2paid='$4680'
                        section2offers='10'
                        section2button='#'
                        // Carasoul Item 3
                        company3name='Ape Capital'
                        chartimg3src=''
                        section3score='7.1'
                        section3deposits='$789065'
                        section3paid='$4680'
                        section3offers='10'
                        section3button='#'
                        // Carasoul Item 4
                        company4name='Ape Capital'
                        chartimg4src=''
                        section4score='7.1'
                        section4deposits='$789065'
                        section4paid='$4680'
                        section4offers='10'
                        section4button='#'
                    />
                    {/* end::Slider Widget 1 */}
                </div>
                <div className="col-xl-3 mb-5 mb-xl-10">
                    {/* begin::Slider Widget 2 */}
                    <SliderWidget2 
                        title='Top DAPPs'
                        titledescription='In All Categories'
                        company1name='Alien Worlds'
                        chartimg1src='https://dashboard-assets.dappradar.com/document/5314/alienworlds-dapp-games-wax-logo-50x50_7eb46e879e197fbebc312a031961d539.png'
                        section1category='Games'
                        section1chain='BNB Chain'
                        section1bal='$1.26K'
                        section1vol='$1.58M'
                        section1button='#'
                        company2name='Splinter Lands'
                        chartimg2src='https://dashboard-assets.dappradar.com/document/3803/splinterlands-dapp-games-hive-logo-50x50_a226c66bc5a85c250400e213a02de3a0.png'
                        section2category='Games'
                        section2chain='BNB Chain'
                        section2bal='$1.26K'
                        section2vol='$1.58M'
                        section2button='#'
                        company3name='Pancake Swap'
                        chartimg3src='https://dashboard-assets.dappradar.com/document/4600/pancakeswap-dapp-defi-bsc-logo-50x50_20e5d8b6c50c2cead9eb33120e4e1417.png'
                        section3category='De-Fi'
                        section3chain='BNB Chain'
                        section3bal='$71.2K'
                        section3vol='$144.27M'
                        section3button='#'
                    />
                    {/* end::Slider Widget 2 */}
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-xl-3 mb-5 mb-xl-10">
                    {/* begin::Slider Widget 3 */}
                    <SliderWidget3 
                        title='Exchanges'
                        titledescription='With Higher Exchange Scores'
                        company1name='Binance'
                        chartimg1src='https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png'
                        section1score='9.9'
                        section1vol='636,072BTC'
                        section1button='#'
                        company2name='Coinbase'
                        chartimg2src='https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png'
                        section2score='8.0'
                        section2vol='236,072BTC'
                        section2button='#'
                        company3name='FTX'
                        chartimg3src='https://s2.coinmarketcap.com/static/img/exchanges/64x64/524.png'
                        section3score='7.8'
                        section3vol='36,072BTC'
                        section3button='#'
                    />
                    {/* end::Slider Widget 3 */}
                </div>
                {/* end::Col */}
            </div>
            {/* end::Row */}
            {/* begin::Ad-Row */}
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
            {/* end::Ad-Row */}
            {/* begin::Home card */}
            <div className="card">
                {/* begin::Body */}
                <div className="card-body ">
                    {/* begin::Section */}
                    <div className="row">
                        {/* begin::Title */}
                        <h3 className="text-dark mb-7">Great News about Investing Wisely Every Day!</h3>
                        {/* end::Title */}
                        {/* begin::Separator */}
                        <div className="separator separator-dashed mb-9"></div>
                        {/* end::Separator */}
                        {/* begin::Row */}
                        <div className="row">
                            {/* begin::Col */}
                            <div className="col-md-8">
                                {/* begin::Feature post */}
                                <div className="h-100 d-flex flex-column justify-content-between pe-lg-6 mb-lg-0 mb-10">
                                    {/* begin::Video */}

                                    {/* end::Video */}
                                    {/* begin::Body */}
                                    <div className="mb-0">
                                        {/* begin::Title */}
                                        <a href="#" className="fs-2  fw-bold text-hover-primary  lh-base">Join Investors Police
                                            Premium Community for updates &amp; News.</a>
                                        {/* end::Title */}
                                        {/* begin::Text */}
                                        <div className="fw-semibold fs-5 text-gray-600 text-dark mt-4">A group of high
                                            performance
                                            traders &amp; Investors focusd on investment markets. Join our Exclusive Telegram to
                                            get
                                            all community benefits including contests, investing tips and advanced market
                                            info.
                                        </div>
                                        <div className="mb-2">
                                            {/* begin::Title */}

                                            {/* end::Title */}
                                            {/* begin::Text */}
                                            <div className="fw-semibold fs-5 text-gray-800 text-dark mt-4">We are offering four
                                                Community spreads.</div>
                                            {/* end::Text */}
                                        </div>
                                        <div className="row gx-5 gx-xl-10">
                                            {/* begin::Col */}
                                            <div className="col-sm-3  ">
                                                <CardsWidget1
                                                    title='IP Investors'
                                                    description='Investment Stats'
                                                    insights='Investments'
                                                    insightstat='3'
                                                    insighttotal='10'
                                                    members='730K'
                                                    scoringupdates='5'
                                                />
                                            </div>
                                            {/* end::Col */}
                                            {/* begin::Col */}
                                            <div className="col-sm-3  ">
                                                <CardsWidget1
                                                    title='IP Traders'
                                                    description='Trading Stats'
                                                    insights='Trading'
                                                    insightstat='3'
                                                    insighttotal='10'
                                                    members='730K'
                                                    scoringupdates='5'
                                                />
                                            </div>
                                            {/* end::Col */}
                                            {/* begin::Col */}
                                            <div className="col-sm-3  ">
                                                <CardsWidget1
                                                    title='Premium Investors'
                                                    description='Investment Stats'
                                                    insights='Investment'
                                                    insightstat='10'
                                                    insighttotal='10'
                                                    members='70K'
                                                    scoringupdates='10'
                                                />
                                            </div>
                                            {/* end::Col */}
                                            {/* begin::Col */}
                                            <div className="col-sm-3  ">
                                                <CardsWidget1
                                                    title='Premium Traders'
                                                    description='Trading Stats'
                                                    insights='Trading'
                                                    insightstat='10'
                                                    insighttotal='10'
                                                    members='70K'
                                                    scoringupdates='10'
                                                />
                                            </div>
                                            {/* end::Col */}
                                        </div>
                                    </div>
                                    {/* end::Body */}
                                </div>
                                {/* end::Feature post */}
                            </div>
                            {/* end::Col */}
                            {/* begin::Col */}
                            <div className="col-md-4 justify-content-between d-flex flex-column">
                                {/* begin::Post */}
                                <div className="ps-lg-6  mt-md-0 mt-17">
                                    {/* begin::Body */}
                                    <div className="mb-2">
                                        {/* begin::Title */}
                                        <a className="fw-bold text-dark mb-4 fs-2 lh-base ">Follow Us on
                                            our Social Media!</a>
                                        {/* end::Title */}
                                        {/* begin::Text */}
                                        <div className="fw-semibold fs-5 mt-4 text-gray-600 text-dark">Follow Us on our Social
                                            Media
                                            and find all you need to know about Investment &amp; Trading World!
                                            <br/><br/>
                                            Join Today!
                                        </div>
                                        {/* end::Text */}
                                    </div>
                                    {/* end::Body */}
                                    {/* begin::Footer */}
                                    <div className="row mt-0 g-5 g-xl-10">
                                        {/* begin::Col */}
                                        <div className="col">
                                            {/* begin::Card widget 3 */}
                                            <CardsWidget3
                                                svgIcon='https://investorspolice.com/assets/media/svg/brand-logos/telegram.svg'
                                                title='Followers'
                                                description='320K'
                                                descriptionexp='2.1%'
                                            />
                                            {/* end::Card widget 3 */}
                                        </div>
                                        <div className="col">
                                            {/* begin::Card widget 3 */}
                                            <CardsWidget3
                                                svgIcon='https://investorspolice.com/assets/media/svg/brand-logos/facebook-4.svg'
                                                title='Followers'
                                                description='110K'
                                                descriptionexp='2.1%'
                                            />
                                            {/* end::Card widget 3 */}
                                        </div>
                                        {/* end::Col */}
                                        {/* begin::Col */}
                                        <div className="col">
                                            {/* begin::Card widget 3 */}
                                            <CardsWidget3
                                                svgIcon='https://investorspolice.com/assets/media/svg/brand-logos/twitter.svg'
                                                title='Followers'
                                                description='45K'
                                                descriptionexp='2.1%'
                                            />
                                            {/* end::Card widget 3 */}
                                        </div>
                                        {/* end::Col */}
                                        {/* begin::Col */}

                                        {/* end::Col */}
                                    </div>
                                    {/* end::Footer */}
                                </div>
                                {/* end::Post */}

                                {/* end::Post */}

                                {/* end::Post */}
                            </div>
                            {/* end::Col */}
                        </div>
                        {/* begin::Row */}
                    </div>
                    {/* end::Section */}
                    {/* begin::Section */}


                    {/* begin::Section */}

                    {/* end::Section */}
                    {/* begin::latest instagram */}

                    {/* end::latest instagram */}
                </div>
                {/* end::Body */}
            </div>
            <div className="row mt-5">
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
            <div className="card mt-5">
                {/* begin::Body */}
                <div className="card-body p-4 ">
                    {/* begin::Section */}
                    <p className="text-muted">All content available on our
                        website, on hyperlinked websites, and on applications, forums, blogs, social media accounts and
                        other
                        platforms associated with DEXTools is intended solely to provide you with general information. We
                        make
                        no warranties of any kind with respect to our content, including, but not limited to, the accuracy
                        and
                        currency of the information. None of the content we provide should be construed as financial, legal
                        or
                        any other type of advice on which you may specifically rely for any purpose. Any use or reliance you
                        place on our content is solely at your own risk. What you should do is conduct your own research,
                        review
                        and analysis, and verify our content before relying on it. Trading is a high-risk activity that can
                        result in significant losses, so you should consult with your financial advisor before making any
                        decisions. Nothing on our Site should be considered an invitation or offer to take any action</p>
                    {/* end::Section */}
                    {/* begin::Section */}


                    {/* begin::Section */}

                    {/* end::Section */}
                    {/* begin::latest instagram */}

                    {/* end::latest instagram */}
                </div>
                {/* end::Body */}
            </div>
            {/* end::Home card */}
        </div>
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
