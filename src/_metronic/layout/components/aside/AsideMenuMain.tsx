/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
// import {AsideMenuItemWithSubMain} from './AsideMenuItemWithSubMain'
// import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/coins'
        title="Coins"
        fontIcon='bi-coin fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
      <AsideMenuItem
        to='/dapps'
        title='DAPPS'
        fontIcon='bi-boxes'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      />
      <AsideMenuItem
        to='/hyip'
        title="HYIPs"
        fontIcon='bi-bar-chart'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
      <AsideMenuItem
        to='/nfts'
        title='NFTs'
        fontIcon='bi-cpu-fill'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      />
      <AsideMenuItem
        to='/exchanges'
        title='Exchanges'
        fontIcon='bi-currency-exchange'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      />
    </>
  )
}
