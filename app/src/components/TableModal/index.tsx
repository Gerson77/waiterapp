import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Form, Header, ModalBody, Overlay, Input } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}
export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a Mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#6e6e6e' />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#6e6e6e"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
