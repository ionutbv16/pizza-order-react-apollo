import { QUERY_ORDER_INFO } from "../containers/Orders";

export const resolvers = {
  Mutation: {
    addItemToOrders: (_, args, { cache }) => {
      const { history } = cache.readQuery({ query: QUERY_ORDER_INFO });
      if (args.order.length > 0) {
        cache.writeQuery({
          query: QUERY_ORDER_INFO,
          data: {
            history: {
              items: history.items.concat(args.order),
              __typename: "Orders",
            },
          },
        });
      }
      return [{ ok: true }];
    },
  },
};
