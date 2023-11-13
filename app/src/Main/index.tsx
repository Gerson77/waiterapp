import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
  CenteredContainer,
  FooterButtons,
  ButtonFooter,
  Path,
  Separator
} from './styles';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { useEffect, useState } from 'react';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { ActivityIndicator } from 'react-native';

import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

import { Category } from '../types/Category';
import { api } from '../utils/api';
import { Home } from '../components/Icons/Home';
import { Order as OrderIcon } from '../components/Icons/Order';
import { Profile } from '../components/Icons/Profile';
import { OrderList } from '../components/OrderList';
import { ProfileUser } from '../components/Profile';
import Order from '../types/Order';
import { Notifications } from '../components/Notifications';

export function Main() {
  const [isTableModalVisible, setIsModalVisible] = useState(false);

  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  // const [isOrderMovalVisible, setIsOrderMovalVisible] = useState(false);

  useEffect(() => {
    Promise.all([api.get('/categories'), api.get('/products')]).then(
      ([categoriesResponse, productResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productResponse.data);
        setIsLoading(false);
      }
    );
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setIsLoadingProducts(false);
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleReseteOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItems) => cartItems.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItems) => cartItems.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItem = [...prevState];

      if (item.quantity === 1) {
        newCartItem.splice(itemIndex, 1);

        return newCartItem;
      }

      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItem;
    });
  }

  const [pageContent, setPageContent] = useState('HOME');

  // function handleOrder() {
  //   setIsOrderMovalVisible(prevState => !prevState);
  // }

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  },[]);

  // const waiting = orders.filter((order) => order.status === 'WAITING');
  // const inProduction = orders.filter(
  //   (order) => order.status === 'IN_PRODUCTION'
  // );
  // const done = orders.filter((order) => order.status === 'DONE');

  return (
    <>
      {pageContent === 'ORDER' && (
        <OrderList orders={orders} />
      )}

      {pageContent === 'HOME' && (
        <Container>
          <Header
            selectedTable={selectedTable}
            onCancelOrder={handleReseteOrder}
            onWidgetNotifications={() => setPageContent('NOTIFICATION')}
          />
          {isLoading && (
            <CenteredContainer>
              <ActivityIndicator color="#D73035" size="large" />
            </CenteredContainer>
          )}
          {!isLoading && (
            <>
              <CategoriesContainer>
                <Categories
                  categories={categories}
                  onSelectCategory={handleSelectCategory}
                />
              </CategoriesContainer>

              {isLoadingProducts ? (
                <CenteredContainer>
                  <ActivityIndicator color="#D73035" size="large" />
                </CenteredContainer>
              ) : (
                <>
                  {products.length > 0 ? (
                    <MenuContainer>
                      <Menu onAddToCart={handleAddToCart} products={products} />
                    </MenuContainer>
                  ) : (
                    <CenteredContainer>
                      <Empty />
                      <Text color="#626262" style={{ marginTop: 20 }}>
                    Nenhum produto foi encontrado!
                      </Text>
                    </CenteredContainer>
                  )}
                </>
              )}
            </>
          )}
        </Container>
      )}

      {pageContent === 'PROFILE' && (
        <ProfileUser />
      )}

      {pageContent === 'NOTIFICATION' && (
        <Notifications />
      )}

      <Separator />

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <FooterButtons>
              <ButtonFooter onPress={() => setPageContent('HOME')}>
                <Home color={pageContent === 'HOME' ? '#D73035' : '#626262'} />
                <Text color={pageContent === 'HOME' ? '#D73035' : '#626262'}>Home</Text>
                {pageContent === 'HOME' && (
                  <Path />
                )}
              </ButtonFooter>
              <ButtonFooter onPress={() => setPageContent('ORDER')}>
                <OrderIcon color={pageContent === 'ORDER' ? '#D73035' : '#626262'} />
                <Text color={pageContent === 'ORDER' ? '#D73035' : '#626262'}>Pedidos</Text>
                {pageContent === 'ORDER' && (
                  <Path />
                )}
              </ButtonFooter >
              <ButtonFooter onPress={() => setPageContent('PROFILE')}>
                <Profile color={pageContent === 'PROFILE' ? '#D73035' : '#626262'} />
                <Text color={pageContent === 'PROFILE' ? '#D73035' : '#626262'}>Meu Perfil</Text>
                {pageContent === 'PROFILE' && (
                  <Path />
                )}
              </ButtonFooter>
            </FooterButtons>
          )}

          {selectedTable && (
            <Cart
              selectedTable={selectedTable}
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleReseteOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
