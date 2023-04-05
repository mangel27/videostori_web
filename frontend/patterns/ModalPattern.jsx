import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const ModalPattern = ({ children, headertext, ...props }) => {
  const { isOpen, onToggle, onClose } = { props };
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onToggle} {...props}>
      <ModalOverlay />
      <ModalContent>
        {headertext && <ModalHeader>{headertext}</ModalHeader>}
        <ModalCloseButton />

        <ModalBody p={10}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalPattern;
