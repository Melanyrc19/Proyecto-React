import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
export const ModalEditar = (props) => {
  const { abierta, onCerrar, tarea, onGuardar } = props;
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const guardarCambios = (e) => {
    e.preventDefault();
    if (!abierta || !tarea) return null;
    if (texto.trim() === "") {
      setError("El texto no puede estar vacío.");
      return;
    }
    onGuardar(tarea.id, texto);
    onCerrar();
  };
  useEffect(() => {
    if (tarea) {
      setTexto(tarea.texto);
    }
  }, [tarea]);

  if (!abierta) return null;
  return (
    <Modal isOpen={abierta} onClose={onCerrar} isCentered>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={guardarCambios}>
        <ModalHeader>Editar Tarea</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>Ingrese nueva tarea:</Text>
          <Input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            bg="white"
            color="black"
          />
          {error && (
            <Text color="red.500" mt={2}>
              {error}
            </Text>
          )}
        </ModalBody>
        <ModalFooter gap={2}>
          <Button colorScheme="teal" type="submit">
            Guardar cambios
          </Button>
          <Button bg="gray.300" onClick={onCerrar}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
