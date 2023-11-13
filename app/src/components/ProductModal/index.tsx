import { FlatList, Modal } from 'react-native';
import { Text } from '../Text';
import { Product } from '../../types/Product';
import { Image, CloseButton, Header, ModalBody, IngredientsContainer, Ingredients, Footer, FooterContainer, PriceContainer } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductModalProp {
  visible: boolean
  onClose: () => void;
  product: Product | null
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProp) {
  if(!product) return null;

  function handleAddToCart(){
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.0.10:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text weight="600" size={24}>{product.name}</Text>
          <Text color="#626262" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#626262">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredients => ingredients._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredients>
                  <Text>{ingredient.icon}</Text>
                  <Text color="#626262" size={14} style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredients>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#626262">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>
            Adicionar ao Pedido
          </Button>
        </FooterContainer>
      </Footer>

    </Modal>
  );
}
