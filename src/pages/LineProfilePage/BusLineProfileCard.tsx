import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { Label } from '../components/Label'
import { busIconPath } from '../components/utils/BusIcon'

import { INPUT_SIZE } from 'src/resources/sizes'

interface BusLineProfileCardProps {
  data: {
    agency_name: string
    route_short_name: string
    route_long_name: string
    operator_ref: string
    message?: string
  }
}

const BusLineProfileCard: React.FC<BusLineProfileCardProps> = ({ data }) => {
  const iconPath = busIconPath(data.operator_ref!)

  return (
    <Card
      className={'busLineCard'}
      sx={{
        maxWidth: INPUT_SIZE,
        boxShadow: ' 0px 0px 5px #C7C7D1',
        borderRadius: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <CardContent>
        <Grid marginLeft={3} container spacing={2}>
          <Grid xs={6}>
            <Label text={'מספר קו:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
            {data.route_short_name}
          </Grid>

          <Grid xs={6}>
            <Label text={'מפעיל:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
            <div style={{ display: 'flex' }}>
              <img src={iconPath} className="bus-icon" style={{ marginLeft: '0.5em' }}></img>
              {data.agency_name}
            </div>
          </Grid>

          <Grid paddingTop={3} marginBottom={3}>
            <Label text={'כיוון נסיעה:'} style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
            {data.route_long_name}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BusLineProfileCard
