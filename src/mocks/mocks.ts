 

import {QUERY_ORDER_INFO} from '../containers/Orders'; 

export const itemsMock = [{"name":"Ionut Chirita","surname":"Surname","email":"ionu_ess@yahoo.com","telephone":"21323131","pizza":"Margherita"}]
export const mocks = [
  {
    request: {
      query: QUERY_ORDER_INFO,
    },
    result: {
      data: {
        history: { items: itemsMock },
      },
    },
  },
];
