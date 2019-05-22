import styled from 'styled-components';

const ModalFixedFooter = styled.div`
position: absolute;
bottom: 0;
height: 20px;
width: 100%;
border-radius: 0 0 2px 2px;
background-color: #fafafa;
padding: 4px 6px;
text-align: right;
border-top: 1px solid rgba(0, 0, 0, 0.1);

& > * {
    top: 50%;
    transform: translateY(-50%);
}
`;

export default ModalFixedFooter;
