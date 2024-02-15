import { useTranslation } from 'react-i18next'
import { BusRoute } from 'src/model/busRoute'

const getRouteTitle = (route: BusRoute) => {
  const { t } = useTranslation()
  // in case the route title comse from
  return `${route.fromName} ${t('direction_arrow')} ${route.toName}  ${
    route.routeAlternative === '#' || route.routeAlternative === '0'
      ? ''
      : `(${t('halufa_ride')} ${route.routeAlternative})`
  }`
}

export default getRouteTitle
