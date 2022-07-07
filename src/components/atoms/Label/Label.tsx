import styled from 'styled-components'
import { purple, white } from 'styles/colors';

interface Props {
    text: string;
    light?: boolean;
}

const StyledLabel = styled.p<{light?: boolean}>`
    margin: 0;
    font-size: 14px;
    color: ${({light}) => light ? white : purple}
`

const Label: React.FC<Props> = ({text, light}) => <StyledLabel light={light}>{text}</StyledLabel>

export default Label
