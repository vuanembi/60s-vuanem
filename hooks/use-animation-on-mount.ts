import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const useAnimationOnMount = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen();
        return onClose;
    }, [onOpen, onClose]);

    return { isOpen };
};
