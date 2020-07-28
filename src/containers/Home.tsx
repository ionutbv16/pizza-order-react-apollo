import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import  Button  from "@material-ui/core/Button"; 

const WrapperButttons = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperButtton = styled.div`
  padding: 10px;
`;

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
      <WrapperButttons>
        <WrapperButtton>
          <Button variant="contained" onClick={() => history.push("/makeorders")}>Make Order</Button>
        </WrapperButtton>
        <WrapperButtton>
          <Button variant="contained" onClick={() => history.push("/orders")}>Orders</Button>
        </WrapperButtton>
      </WrapperButttons>
  );
};

export default withRouter(Home);
