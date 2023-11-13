import { Text } from '../Text';
import { Container, ContentProfile, Input, ButtonSave } from './styles';


export function ProfileUser () {
  return (
    <Container>
      <Text size={24} weight="700" style={{ marginTop: 24 }}>Meu perfil</Text>

      <ContentProfile>
        <Text>Nome</Text>
        <Input
          placeholder="John Doe"
          placeholderTextColor="#6e6e6e"
          keyboardType="number-pad"
        />
        <Text>E-mail</Text>
        <Input
          placeholder="jhondoe@email.com"
          placeholderTextColor="#6e6e6e"
          keyboardType="number-pad"
        />
        <Text>Senha</Text>
        <Input
          placeholder="****"
          placeholderTextColor="#6e6e6e"
          keyboardType="number-pad"
        />
        <Text>Confirmar Senha</Text>
        <Input
          placeholder="****"
          placeholderTextColor="#6e6e6e"
          keyboardType="number-pad"
        />
        <ButtonSave colorBtn="#ccc">
          <Text weight="600" color="#fff">Salvar alterações</Text>
        </ButtonSave>
      </ContentProfile>

    </Container>
  );
}
