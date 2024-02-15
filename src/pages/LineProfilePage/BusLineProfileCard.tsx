import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { Label } from '../components/Label'
import { busIconPath } from '../components/utils/BusIcon'
import getRouteTitle from '../components/utils/getBusTitle'
import { BusRoute } from 'src/model/busRoute'

const BusLineProfileCard = ({ data }: BusRoute) => {
  const iconPath = busIconPath(data.operatorId!)
  const title = getRouteTitle(data)

  return (
    <Card
      className={'busLineCard'}
      sx={{
        display: 'flex',
        boxShadow: ' 0px 0px 5px #C7C7D1',
        borderRadius: '1.4rem',
        padding: '0.5rem 1rem 0.5rem 1rem',
      }}>
      <CardContent>
        <Grid xs={12} container spacing={2}>
          <Grid xs={6}>
            <Label text={'מספר קו:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
            <p style={{ fontSize: '1.1rem', margin: 'auto' }}>{data.lineNumber}</p>
          </Grid>
          <Grid xs={6}>
            <Label text={'מפעיל:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'start' }}>
              <img
                src={iconPath}
                className="bus-icon"
                style={{ marginLeft: '0.5em', width: '2.5rem' }}></img>
              <p style={{ fontSize: '1.1rem', margin: '0' }}>{data.agencyName}</p>
            </div>
          </Grid>
        </Grid>

        <Grid marginTop={6} container>
          <Label text={'כיוון נסיעה:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
          <p style={{ fontSize: '1.1rem', margin: '0' }}>{title}</p>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BusLineProfileCard
