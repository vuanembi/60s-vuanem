import { FC, useCallback } from 'react';
import { ResponsiveValue, SimpleGrid, useRadioGroup } from '@chakra-ui/react';
import { useController, Control } from 'react-hook-form';

import { RadioCardImageProps } from './radio-card-image';
import { RadioCardTextProps } from './radio-card-text';

type RadioItemProps = RadioCardImageProps | RadioCardTextProps;

type RadioGroupQuestionProps<T extends RadioItemProps> = {
    name: string;
    options: T[];
    control: Control<any>;
    columns: ResponsiveValue<number>;
    Item: FC<T>;
};

export const RadioGroupQuestionProps = <T extends RadioItemProps>(props: RadioGroupQuestionProps<T>) => {
    const { name, options, columns, control, Item } = props;

    const { field } = useController({ control, name });

    const onChange = useCallback(
        (value: any) => {
            field.onChange(value);
            field.onBlur();
        },
        [field],
    );

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        onChange,
        value: field.value,
    });

    return (
        <SimpleGrid {...getRootProps()} columns={columns} spacing="20px">
            {options.map((option, i) => (
                <Item key={i} {...option} {...getRadioProps({ value: option.value })} />
            ))}
        </SimpleGrid>
    );
};
