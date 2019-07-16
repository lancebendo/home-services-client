import styled from 'styled-components';
import constants from '../../ReactConstants';

const tileStyle = styled.div`
    background-color: white;
    border: 1px solid ${constants.flatCardBorderColor};
    border-radius: ${constants.borderRadius};
    min-height: 130px;
    position: relative;
    padding-bottom: 42px;
    
    @media (min-width: ${constants.mediumScreen}) {
        width: 45%;
        margin: 10px !important;
    }
`;

export default tileStyle;
