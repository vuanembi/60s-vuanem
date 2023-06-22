import Image from 'next/image';
import { useRouter } from 'next/router';
import { useController, useForm } from 'react-hook-form';
import { Box, Flex, Heading, IconButton, Input, chakra } from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

import { useWizardStore } from '../stores/wizard.store';
import HERO_IMAGE from '../public/hero.png';

type HomeForm = {
    name: string;
};

const Home = () => {
    const router = useRouter();

    const { name, setName } = useWizardStore((state) => ({ name: state.name, setName: state.setName }));

    const { control, handleSubmit } = useForm<HomeForm>({
        defaultValues: { name },
    });

    const { field } = useController({ control, name: 'name' });

    return (
        <Flex position="relative" minH="600px" flexDirection="column" alignItems="center">
            <Box
                position="relative"
                mt="32px"
                minW="320px"
                minH="320px"
                borderRadius="6px"
                overflow="hidden"
                boxShadow="inner"
            >
                <Image src={HERO_IMAGE} alt="Hero" fill />
            </Box>
            <Flex mt="32px" flexDirection="column" alignItems="center">
                <Heading as="h1" textAlign="center" fontSize="32px" fontWeight="medium" lineHeight={1.5}>
                    Tìm chiếc nệm tốt nhất với nhu cầu của bạn chỉ trong{' '}
                    <chakra.span fontWeight="bold">60s</chakra.span>
                </Heading>
            </Flex>
            <form
                onSubmit={handleSubmit((value) => {
                    setName(value.name);
                    router.push('/step-1');
                })}
            >
                <Flex mt="60px" gap="16px" justifyContent="space-around">
                    <Input
                        placeholder="Tên của anh/chị"
                        value={field.value}
                        onChange={(value) => {
                            field.onBlur();
                            field.onChange(value);
                        }}
                    />
                    <IconButton type="submit" flex="0" icon={<HiChevronRight />} aria-label="Begin Wizard">
                        Bắt đầu
                    </IconButton>
                </Flex>
            </form>
        </Flex>
    );
};

export default Home;
