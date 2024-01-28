import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography

const StyledDiv = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`

type LabelProps = {
  text: string
  style?: React.CSSProperties // Optional style prop
}

export const Label = ({ text, style }: LabelProps) => (
  <StyledDiv>
    <Text style={style}>{text}</Text>
  </StyledDiv>
)
