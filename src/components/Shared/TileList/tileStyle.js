import styled from 'styled-components';
import constants from '../../constants';

const tileStyle = styled.div`
    background-color: white;
    border: 1px solid ${constants.flatCardBorderColor};
    border-radius: ${constants.borderRadius};
    padding: 21px;
    
    @media (max-width: ${constants.largeScreen}) {
        width: 45%;
        margin: 10px !important;
    }
`;

export default tileStyle;
