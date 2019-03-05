import styled from 'styled-components';
import { Icon } from 'antd';
const blue = '#4A90E2'
const yellow = '#F5A623'
const StyledIcon = styled(Icon)`
  font-size: 24px;
  cursor: pointer;
  margin-right:${props => props.type === 'star' ? '32px': 0};
  color: ${props => {
    if(props.clicked === 'true') {
      switch(props.type) {
        case 'star':
          return yellow
        case 'edit':
          return blue
        default:
          return ''
      }
    }
  }}

`;
export {StyledIcon};
