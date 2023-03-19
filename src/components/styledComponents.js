import styled from 'styled-components'

const StyledSelect = styled.select`
    padding: 0.7rem 1rem;
    width: 11.5em;
    color: #e87722;
    background-color: white;
    font-size: medium;
    border-radius: 5px;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='36' viewBox='0 0 24 24' width='36' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    border: 1px solid #dfdfdf;
    background-position-x: 95%;
    padding-right: 2rem;
    font-weight: 550;
`;

const StyledSearchButton = styled.button`
    padding: .8rem 2.3rem;
    font-size: .9em;
    border-radius: 5px;
    color: white;
    background-color: #e87722;
    border: none;
    font-weight: bold;
    &:hover{
        background-color: orange;
        cursor: pointer;
    }
`;

const StyledButton = styled.button`
    background-image: url('../../public/chart_icon.png') no-repeat scroll 0 0 transparent;
    background-repeat: no-repeat;
    width: 100%;
    background-color: transparent;
    border: none;
`

export {
    StyledSelect,
    StyledSearchButton,
    StyledButton
}