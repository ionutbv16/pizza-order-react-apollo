
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { IOrders } from '../types';
import { Title, Wrapper } from '../commonstyled/styled';

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ItemDivider = styled.div`
  padding: 10px
`;

const ButtonDivider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
  padding: 4px;
  width: 200px;
`;

const MUTATION_ADD_ITEM_TO_ORDERS = gql`
  mutation ($order: Any!) {
    addItemToOrders(order: $order) @client
  }
`

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 194,
  },
  root: {
    minWidth: 275,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const MakeOrders: React.FC<RouteComponentProps> = ({ history }) => {

  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const [formorder, setFormOrder] = useState<IOrders[]>([]);

  const onSubmit = (data:IOrders) => {
    setFormOrder([data])
  };

  const [ addItemToOrders ] = useMutation(
    MUTATION_ADD_ITEM_TO_ORDERS,
    { variables: { order: formorder } }
  )

  useEffect(() => {
    if (formorder.length > 0) {
      addItemToOrders()
      history.push("/")
    }
     
  }, [formorder]);

  return (
    <Wrapper>  
      <Card className={classes.root} variant="outlined">
      <Title>Make order</Title>
      <CardsWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
            <ItemDivider>
                <TextField  id="name"  error={false} label="Name" variant="outlined"  name="name" inputRef={register({
                  validate: value => value.length > 0
                })}  />
                {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
            </ItemDivider>
            <ItemDivider>
              <TextField  id="surname"  error={false} label="Surname" variant="outlined"  name="surname" inputRef={register({
                  validate: value => value.length > 0
                } ) }  />
              {errors.surname && <ErrorMessage>Surname is required</ErrorMessage>}
            </ItemDivider>
            <ItemDivider>
              <TextField  id="email"  error={false} label="Email" variant="outlined"  name="email" inputRef={register({required: true, pattern: /^\S+@\S+$/i})}  />
              {errors.email && <ErrorMessage>Invalid email format. name@domain.ext</ErrorMessage>}
            </ItemDivider>
            <ItemDivider>
              <TextField  id="telephone"  error={false} label="Telephone" variant="outlined"  name="telephone" inputRef={register({ required: true,  maxLength: 12, minLength: 6, pattern: /^\d+$/ })}  /> 
                {errors.telephone && <ErrorMessage>Invalid Telephone. Digits only (07887887887)</ErrorMessage>}
                </ItemDivider>
            <ItemDivider>
                  <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel htmlFor="pizza">Name of Pizza</InputLabel>
                      <Select
                      inputRef={register({
                        validate: value => value.length > 1
                      } ) }
                        native
                        inputProps={{
                          name: 'pizza',
                          id: 'pizza',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value="Pepperoni">Pepperoni</option>
                        <option value="Margherita">Margherita</option>
                        <option value="Hawaiian">Hawaiian</option>
                      </Select>
                </FormControl>
                {errors.pizza && <ErrorMessage>Please select Pizza</ErrorMessage>}
            </ItemDivider>
            <ButtonDivider>
              <Button type="submit" variant="contained">Submit</Button>
            </ButtonDivider>
        </form>
      </CardsWrapper>
    </Card>  
    <ButtonDivider>
      <Button variant="contained" onClick={() => history.push("/")}>Back To Home</Button>
    </ButtonDivider>
  </Wrapper>
  );
};

export default MakeOrders;
