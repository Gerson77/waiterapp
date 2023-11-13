<!--
import { FlatList } from 'react-native';
import { Text } from '../Text';
import {
  Container,
  ListItemOrder,
  ListOrder,
  OrderCard,
  TableContainer,
  TableContent,
} from './styles';
import Order from '../../types/Order';

interface PropsOrdersBoard {
  orders: Order[];
}

export function OrderList({ orders }: PropsOrdersBoard) {
  const orderInLoad = orders.filter(
    (order) =>
      order.status === 'WAITING' ||
      order.status === 'IN_PRODUCTION' ||
      order.status === 'DONE'
  );
  const orderInDone = orders.filter((order) => order.status === 'CONCLUDED');

  return (
    <Container>
      <Text size={24} weight="700" style={{ marginTop: 24 }}>
        Pedidos
      </Text>
      <Text size={18} weight="600" color="#626262">
        Em andamento
      </Text>
      <FlatList
        data={orderInLoad}
        keyExtractor={(order) => order._id}
        showsVerticalScrollIndicator={true}
        style={{ marginTop: 16 }}
        renderItem={({ item: order }) => (
          <ListOrder>
            <OrderCard>
              <TableContainer>
                <TableContent>
                  <Text weight="600">Mesa {order.table}</Text>
                  {order.status === 'WAITING' && (
                    <Text
                      color="#626262"
                      weight="600"
                      style={{
                        backgroundColor: '#ebf8f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Em espera!
                    </Text>
                  )}
                  {order.status === 'IN_PRODUCTION' && (
                    <Text
                      color="#D76C30"
                      weight="600"
                      style={{
                        backgroundColor: '#f2e5de',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Entrou em produção!
                    </Text>
                  )}
                  {order.status === 'DONE' && (
                    <Text
                      color="#30D787"
                      weight="600"
                      style={{
                        backgroundColor: '#f2f2f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Pronto
                    </Text>
                  )}
                </TableContent>
                <ListItemOrder>
                  {order.products.map(({ _id, product, quantity }) => (
                    <Text color="#626262" key={_id}>
                      {quantity}x <Text color="#333">{product.name}</Text>{' '}
                    </Text>
                  ))}
                </ListItemOrder>
              </TableContainer>
            </OrderCard>
          </ListOrder>
        )}
      />
      <Text size={18} weight="600" color="#626262">
        Anteriores
      </Text>

      <FlatList
        data={orderInDone}
        keyExtractor={(order) => order._id}
        showsVerticalScrollIndicator={true}
        style={{ marginTop: 16 }}
        renderItem={({ item: order }) => (
          <ListOrder>
            <OrderCard>
              <TableContainer>
                <TableContent>
                  <Text weight="600">Mesa {order.table}</Text>
                  {order.status === 'CONCLUDED' && (
                    <Text
                      color="#626262"
                      style={{
                        backgroundColor: '#f2f2f2',
                        padding: 2,
                        borderRadius: 4,
                      }}
                    >
                      º Finalizado em 17/10/2023
                    </Text>
                  )}
                </TableContent>
                <ListItemOrder>
                  {order.products.map(({ _id, product, quantity }) => (
                    <Text color="#626262" key={_id}>
                      {quantity}x <Text color="#333">{product.name}</Text>{' '}
                    </Text>
                  ))}
                </ListItemOrder>
              </TableContainer>
            </OrderCard>
          </ListOrder>
        )}
      />
    </Container>
  );
}
 -->



<ListOrder>
  <Text size={18} weight="600" color="#626262">Em andamento {ingredient.name}</Text>
  <OrderCard>
    <TableContainer>
      <TableContent>
        <Text weight="600">Mesa 1</Text>
        <Text weight="600" color="#30D787">º Pronto!</Text>
      </TableContent>
      <ListItemOrder>
        <Text color="#626262">1x <Text color="#333">Frango com catupiry</Text> </Text>
        <Text color="#626262">2x <Text color="#333">Quatro queijo</Text></Text>
      </ListItemOrder>
    </TableContainer>
    <TableContainer>
      <TableContent>
        <Text weight="600">Mesa 2</Text>
        <Text color="#D76C30">º Entrou em produção!</Text>
      </TableContent>
      <ListItemOrder>
        <Text color="#626262">1x <Text color="#333">Frango com catupiry</Text> </Text>
        <Text color="#626262">2x <Text color="#333">Quatro queijo</Text></Text>
      </ListItemOrder>
    </TableContainer>
  </OrderCard>
</ListOrder>

 <ListOrder>
  <Text size={18} weight="600" color="#626262">Em andamento</Text>
  <OrderCard>
    <TableContainer>
      <TableContent>
        <Text weight="600">Mesa 1</Text>
        <Text weight="600" color="#30D787">º Pronto!</Text>
      </TableContent>
      <ListItemOrder>
        <Text color="#626262">1x <Text color="#333">Frango com catupiry</Text> </Text>
        <Text color="#626262">2x <Text color="#333">Quatro queijo</Text></Text>
      </ListItemOrder>
    </TableContainer>
    <TableContainer>
      <TableContent>
        <Text weight="600">Mesa 2</Text>
        <Text color="#D76C30">º Entrou em produção!</Text>
      </TableContent>
      <ListItemOrder>
        <Text color="#626262">1x <Text color="#333">Frango com catupiry</Text> </Text>
        <Text color="#626262">2x <Text color="#333">Quatro queijo</Text></Text>
      </ListItemOrder>
    </TableContainer>
  </OrderCard>
</ListOrder>

<ListOrder>
  <Text size={18} weight="600" color="#626262">Anteriores</Text>
  <OrderCard>
    <TableContainer>
      <TableContent>
        <Text weight="600">Mesa 14</Text>
        <Text color="#626262">º Finalizado em 17/10/2023!</Text>
      </TableContent>
      <ListItemOrder>
        <Text color="#626262">1x <Text color="#333">Frango com catupiry</Text> </Text>
        <Text color="#626262">2x <Text color="#333">Quatro queijo</Text></Text>
      </ListItemOrder>
    </TableContainer>
  </OrderCard>
</ListOrder>




<FlatList
  key={groups}
  data={orders}
  keyExtractor={order => order._id}
  showsVerticalScrollIndicator={false}
  style={{ marginTop: 16 }}
  renderItem={({ item: order }) => (
    <ListOrder>
      <OrderCard>
        <TableContainer>
          <TableContent>
            <Text weight="600">Mesa {order.table}</Text>
            {order.status === 'WAITING' && (
              <Text
                weight="600"
                color="#30D787"
                style={{ backgroundColor: '#ebf8f2', padding: 2, borderRadius: 4 }}
              >
            º Pronto!
              </Text>
            )}
            {order.status === 'IN_PRODUCTION' && (
              <Text
                color="#D76C30"
                style={{ backgroundColor: '#f2e5de', padding: 2, borderRadius: 4 }}
              >º Entrou em produção!</Text>
            )}
            {order.status === 'DONE' && (
              <Text
                color="#626262"
                style={{ backgroundColor: '#f2f2f2', padding: 2, borderRadius: 4 }}
              >º Finalizado em 17/10/2023!</Text>
            )}
          </TableContent>
          <ListItemOrder>
            {order.products.map(({ _id, product, quantity }) => (
              <Text color="#626262" key={_id}>{quantity}x <Text color="#333">{product.name}</Text> </Text>
            ))}
          </ListItemOrder>
        </TableContainer>
      </OrderCard>
    </ListOrder>
  )}
/>



<!--


{Object.entries(groupedDataSave).map(([groups, item]) => (
        <ListOrder key={groups}>
          {groups === ('IN_PRODUCTION' || 'DONE') ? (
            <Text size={18} weight="600" color="#626262">
              Em andamento
            </Text>
          ) : (
            <Text size={18} weight="600" color="#626262">
              Anterior
            </Text>
          )}
          <OrderCard>
            {item.map((order) => (
              // <TableContainer key={order._id}>
              //   <TableContent>
              //     <Text weight="600">Mesa {order.table}</Text>
              //     {order.status === 'WAITING' && (
              //       <Text
              //         weight="600"
              //         color="#30D787"
              //         style={{ backgroundColor: '#ebf8f2', padding: 2, borderRadius: 4 }}
              //       >
              //       º Pronto!
              //       </Text>
              //     )}
              //     {order.status === 'IN_PRODUCTION' && (
              //       <Text
              //         color="#D76C30"
              //         style={{ backgroundColor: '#f2e5de', padding: 2, borderRadius: 4 }}
              //       >º Entrou em produção!</Text>
              //     )}
              //     {order.status === 'DONE' && (
              //       <Text
              //         color="#626262"
              //         style={{ backgroundColor: '#f2f2f2', padding: 2, borderRadius: 4 }}
              //       >º Finalizado em 17/10/2023!</Text>
              //     )}
              //   </TableContent>
              //   <ListItemOrder>
              //     {order.products.map(({ _id, product, quantity }) => (
              //       <Text color="#626262" key={_id}>{quantity}x <Text color="#333">{product.name}</Text> </Text>
              //     ))}
              //   </ListItemOrder>
              // </TableContainer>
            ))}
          </OrderCard>
        </ListOrder>
      ))}
 -->




Argument of type '(string | { state: boolean; length: number; toString(): string; toLocaleString(): string; pop(): Product | undefined; push(...items: Product[]): number; concat(...items: ConcatArray<...>[]): Product[]; concat(...items: (Product | ConcatArray<...>)[]): Product[]; ... 34 more ...; [Symbol.unscopables]: { ...; }; })[]' is not assignable to parameter of type 'SetStateAction<Product[]>'.
  Type '(string | { state: boolean; length: number; toString(): string; toLocaleString(): string; pop(): Product | undefined; push(...items: Product[]): number; concat(...items: ConcatArray<...>[]): Product[]; concat(...items: (Product | ConcatArray<...>)[]): Product[]; ... 34 more ...; [Symbol.unscopables]: { ...; }; })[]' is not assignable to type 'Product[]'.
    Type 'string | { state: boolean; length: number; toString(): string; toLocaleString(): string; pop(): Product | undefined; push(...items: Product[]): number; concat(...items: ConcatArray<...>[]): Product[]; concat(...items: (Product | ConcatArray<...>)[]): Product[]; ... 34 more ...; [Symbol.unscopables]: { ...; }; }' is not assignable to type 'Product'.
      Type 'string' is not assignable to type 'Product'.ts(2345)
const updatedElements: (string | {
    state: boolean;
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): Product | undefined;
    push(...items: Product[]): number;
    concat(...items: ConcatArray<...>[]): Product[];
    concat(...items: (Product | ConcatArray<...>)[]): Product[];
    ... 34 more ...;
    [Symbol.unscopables]: {
        ...;
    };
})[]
