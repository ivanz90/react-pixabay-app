import styled from 'styled-components'
import { INPUT_BORDER_DEFAULT, GREEN_BG_DEFAULT, TEXT_COLOR } from '../../../shared/style'


export const CheckboxLabel = styled.label`
    cursor: pointer;
`

export const CheckboxContainer = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid ${INPUT_BORDER_DEFAULT};
    display: inline-block
`

export const CheckboxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
    visibility: hidden;
    position: absolute;
    opacity: 0;
    left: -9999px;
`

export const CheckboxStyled = styled.div`
    width: 100%;
    heght: 100%;
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 6px;
        height: 11px;
        border-left: 2px solid ${GREEN_BG_DEFAULT};
        border-bottom: 2px solid ${GREEN_BG_DEFAULT};
        left: 22%;
        transform: rotateZ(-30deg);
        visibility: hidden;
    }
    input:checked + & {
        &::after {
            visibility: visible;
        }
    }
`

export const CheckboxText = styled.span`
    margin-left: 10px;
    color: ${TEXT_COLOR};
    transform: translateY(-3px);
    display: inline-block;
`