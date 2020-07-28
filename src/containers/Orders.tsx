import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button"; 
import { HistoryInfo } from '../types';
import { Title, Wrapper } from '../commonstyled/styled';

const NoOrders = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: gray;
`;

const ButtonDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const OrdersWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87); 
  background-color: #fff;
  padding:20px;
`;
 
const ItemsWrapper = styled.div`
  padding: 10px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
  },
  card: {
    minWidth: 260,
    maxWidth: 280,
  },
  divider: {
    maxWidth: 240,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const QUERY_ORDER_INFO = gql`
  query {
    history @client {
      items    
    }
  }
`

const Orders: React.FC<RouteComponentProps> = ({ history }) => {

  const classes = useStyles();

  const data:any  = useQuery<HistoryInfo>(QUERY_ORDER_INFO).data
  
  const noOrders = data && data.history && data.history.items.length === 0 ? true : false

  return (
    <Wrapper>
      <OrdersWrapper>
      <Title>Orders</Title>
      { noOrders && <NoOrders>No Orders yet</NoOrders> }
      {data && data.history && data.history.items.map( (itemHistory:any, index: number) => 

        (<Accordion className={classes.divider} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Order from: {itemHistory.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <ItemsWrapper>
              Name: {itemHistory.name}
            </ItemsWrapper>
            <ItemsWrapper>
              Surame: {itemHistory.surname}
            </ItemsWrapper>
            <ItemsWrapper>
              Email: {itemHistory.email}
            </ItemsWrapper>
            <ItemsWrapper>
              Telephone: {itemHistory.telephone}
            </ItemsWrapper>
            <ItemsWrapper>
              Name of Pizza: {itemHistory.pizza}
            </ItemsWrapper>
          </AccordionDetails>
        </Accordion>)

      )}
      </OrdersWrapper>
      <ButtonDivider>
        <Button variant="contained" onClick={() => history.push("/")}>Back To Home</Button>
      </ButtonDivider>
    </Wrapper>
  );
};

export default Orders;
