import { FC, useCallback, useEffect } from 'react';
import { ResponsiveValue, SimpleGrid, useRadioGroup } from '@chakra-ui/react';
import { useController, Control } from 'react-hook-form';

import { GetProductsFormValues } from '../../hooks/use-wizard-form';
import { WizardPaginator } from '../wizard/paginator';
import { RadioCardImageProps } from './radio-card-image';
import { RadioCardTextProps } from './radio-card-text';

type RadioItemProps = RadioCardImageProps | RadioCardTextProps;

type RadioQuestionStepProps<T extends RadioItemProps> = {
    name: keyof GetProductsFormValues;
    options: T[];
    question: string;
    control: Control<GetProductsFormValues>;
    columns: ResponsiveValue<number>;
    Item: FC<T>;
};

export const RadioQuestionStep = <T extends RadioItemProps>(props: RadioQuestionStepProps<T>) => {
    const { name, question, options, columns, control, Item } = props;

    const { field } = useController({ control, name });

    const onChange = useCallback(
        (value: any) => {
            field.onChange(value);
            field.onBlur();
        },
        [field],
    );

    const defaultValue = options[0].value;

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        onChange,
        defaultValue,
        value: field.value,
    });

    useEffect(() => {
        onChange(defaultValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <WizardPaginator question={question}>
            <SimpleGrid {...getRootProps()} columns={columns} spacing="20px">
                {options.map((option, i) => (
                    <Item key={i} {...option} {...getRadioProps({ value: option.value })} />
                ))}
            </SimpleGrid>
        </WizardPaginator>
    );
};
