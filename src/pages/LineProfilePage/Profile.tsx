// EXTERNAL COMPONENTS
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useLoaderData } from 'react-router-dom'

// COMPONENTS
import { PageContainer } from '../components/PageContainer'
import BusLineProfileCard from './BusLineProfileCard'
import { MapWithLocationsAndPath } from '../components/map-related/MapWithLocationsAndPath'
import Widget from 'src/shared/Widget'

//API
import { useEffect, useState } from 'react'
import { getRoutesAsync } from 'src/api/gtfsService'
import moment from 'moment'

const LineProfileComponent = () => {
  const { Title } = Typography
  const { t } = useTranslation()
  const [route, setRoute] = useState(useLoaderData())
  console.log(route)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    getRoutesAsync(
      moment().subtract(1, 'days'),
      moment(),
      route.operator_ref,
      route.route_short_name,
      signal,
    ).then((routes) => {
      console.log(routes)
      const gtfs_route = routes.filter((tempRoute) => tempRoute.lineRef === route.line_ref)
      console.log('ROUTE:  ', gtfs_route)
      setRoute(gtfs_route[0])
    })
    return () => controller.abort()
  }, [])

  return (
    <PageContainer>
      <Grid xs={12} lg={6}>
        <Widget>
          <Title level={3}>{t('lineProfile.title')}</Title>
          <Grid columns={{ xs: 4, sm: 8 }}>
            <Grid xs={4}>
              <BusLineProfileCard data={route} />
            </Grid>
            {/* <Grid xs={4}>
              <MapWithLocationsAndPath positions={filteredPositions} paths={paths} />
            </Grid> */}
          </Grid>
          {/* <Grid>
            <div>
              <pre style={{ direction: 'ltr' }}>{JSON.stringify(route, null, 2)}</pre>
            </div>
          </Grid> */}
          {/* <Label text="שעות פעילות" /> */}
          {/* GET the earliest and the latest bus drive departure time for each day */}
          {/* <TableStyle>
              <table className="time-table">
                <tr>
                  <th></th>
                  <th>יום ראשון</th>
                  <th>יום שני</th>
                  <th>יום שלישי</th>
                  <th>יום רביעי</th>
                  <th>יום חמישי</th>
                  <th>יום שישי</th>
                  <th>יום שבת</th>
                </tr>

                <tr>
                  <td>אוטובוס ראשון</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>אוטובוס אחרון</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </TableStyle>

            <Label text="הערות ועדכונים על הקו:" />
            <div></div>
          </div>
        </Grid> */}
        </Widget>
      </Grid>
    </PageContainer>
  )
}

const TableStyle = styled.table`
  & th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(95, 91, 255);
    color: white;
  }
  & tr {
    font-size: 1.15em;
  }
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & table {
    border-collapse: collapse;
  }
`
const Profile = () => {
  return (
    <>
      <PageContainer className="line-data-container">
        <LineProfileComponent />
      </PageContainer>
    </>
  )
}

export default Profile
