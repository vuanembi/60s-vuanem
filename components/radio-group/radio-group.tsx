import { FC } from 'react';
import { SimpleGrid, useRadioGroup } from '@chakra-ui/react';

import { useController, Control } from 'react-hook-form';

type RadioItem = {
    label: string;
    value: string;
    [key: string]: any;
};

type RadioGroupProps<T extends RadioItem> = {
    name: string;
    options: T[];
    control: Control;
    columns: number;
    Item: FC<T>;
};

export const RadioGroup = <T extends RadioItem>(props: RadioGroupProps<T>) => {
    const { name, options, columns, control, Item } = props;

    const { field } = useController({ control, name });

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        onChange: field.onChange,
        value: field.value,
    });

    return (
        <SimpleGrid columns={columns} spacing="18px" alignItems="stretch" {...getRootProps()}>
            {options.map((option, i) => (
                <Item key={i} {...option} {...getRadioProps({ value: option.value })} />
            ))}
        </SimpleGrid>
    );
};
