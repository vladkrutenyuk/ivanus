import styled from 'styled-components'

const OldButton = ({text = 'Button', size = 16}) => {
    return (
        <Button fontSize={size}>
            {text}
        </Button>
    )
}

const Button = styled.div<{ fontSize: number }>`
    padding: 8px;
    background-color: #BDBDC1;
    color: #001AFF;
    font-family: 'Comic Sans MS';
    font-size: ${props => props.fontSize}px;
    border-top: 4px #e7e7e7 solid;
    border-left: 4px #e7e7e7 solid;
    border-bottom: 4px #868788 solid;
    border-right: 4px #868788 solid;

    &:hover {
        background-color: #a2a2a7;
    }

    &:active {
        background-color: #84848b;
        border-bottom: 4px #b0b0b2 solid;
        border-right: 4px #b0b0b2 solid;
        border-top: 4px #626268 solid;
        border-left: 4px #626268 solid;
    }
`

export default OldButton