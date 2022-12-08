// import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      {/* Coins */}
      <MenuInnerWithSub
        title='Coins'
        to='/coins'
        fontIcon='bi-coin'
        hasArrow={true}
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        {/* Inner menu */}
        <MenuItem to='/coins/dashboard' title='Dashboard' hasBullet={true} />
        <MenuItem to='/coins/all' title='All Coins' hasBullet={true} />
        <MenuItem to='/coins/ratings' title='Ratings' hasBullet={true} />
        <MenuItem to='/coins/news' title='News' hasBullet={true} />
      </MenuInnerWithSub>

      {/* DAPPs */}
      <MenuInnerWithSub
        title='D-APPs'
        to='/dapps'
        fontIcon='bi-boxes'
        hasArrow={true} 
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        {/* Inner menu */}
        <MenuItem to='/dapps/dashboard' title='Dashboard' hasBullet={true} />
        <MenuItem to='/dapps/defi' title='De-Fi' hasBullet={true} />
        <MenuItem to='/dapps/gambling' title='Gambling' hasBullet={true} />
        <MenuItem to='/dapps/market' title='Marketplace' hasBullet={true} />
        <MenuItem to='/dapps/highrisk' title='High Risk' hasBullet={true} />
      </MenuInnerWithSub>

      {/* HYIPs */}
      <MenuInnerWithSub
        title='HYIPs'
        to='/hyip'
        fontIcon='bi-bar-chart'
        hasArrow={true}
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        {/* Inner menu */}
        <MenuItem to='/hyip/dashboard' title='Dashboard' hasBullet={true} />
        <MenuItem to='/hyip/all' title='All Projects' hasBullet={true} />
        <MenuItem to='/hyip/rating' title='Ratings' hasBullet={true} />
        <MenuItem to='/hyip/rcbsearch' title='RCB Search' hasBullet={true} />
        <MenuItem to='/hyip/recent' title='Recent Events' hasBullet={true} />
        {/* Sub-Innner Menu */}
        <MenuInnerWithSub
          title='HYIP Info'
          to='/hyip/info'
          hasArrow={true}
          hasBullet={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/hyip/info/industry' title='HYIP Industry' hasBullet={true} />
          <MenuItem to='/hyip/info/blog' title='Blogs & Monitoring' hasBullet={true} />
          <MenuItem to='/hyip/info/news' title='News' hasBullet={true} />
          <MenuItem to='/hyip/info/events' title='Events Map' hasBullet={true} />
          <MenuItem to='/hyip/info/advertise' title='Advertise' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>
      {/* NFTs */}
      <MenuInnerWithSub
        title='NFTs'
        to='/nfts'
        fontIcon='bi-cpu-fill'
        hasArrow={true}
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        {/* Inner menu */}
        <MenuItem to='/nfts/dashboard' title='Dashboard' hasBullet={true} />
        <MenuItem to='/nfts/explore' title='Explore' hasBullet={true} />
        <MenuItem to='/nfts/stats' title='Stats' hasBullet={true} />
        <MenuItem to='/nfts/rankings' title='Rankings' hasBullet={true} />
        <MenuItem to='/nfts/activity' title='Activity' hasBullet={true} />
      </MenuInnerWithSub>
      {/* Exchanges */}
      <MenuInnerWithSub
        title='Exchanges'
        to='/exchanges'
        fontIcon='bi-currency-exchange'
        hasArrow={true}
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        {/* Inner menu */}
        <MenuItem to='/exchanges/dashboard' title='Dashboard' hasBullet={true} />
        <MenuItem to='/exchanges/spot' title='Spot' hasBullet={true} />
        <MenuItem to='/exchanges/derivatives' title='Derivatives' hasBullet={true} />
        <MenuItem to='/exchanges/dex' title='Dex' hasBullet={true} />
        <MenuItem to='/exchanges/lending' title='Lending' hasBullet={true} />
      </MenuInnerWithSub>
    </>
  )
}
