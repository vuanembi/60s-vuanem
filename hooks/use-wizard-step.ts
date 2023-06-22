import { useRouter } from 'next/router';
import { UseFormHandleSubmit } from 'react-hook-form';

type UseWizardStepsProps<T extends {}> = {
    step: number;
    previous: string;
    next: string;
    handleSubmit: UseFormHandleSubmit<T, undefined>;
    setValue: (value: T) => void;
};

export const useWizardStep = <T extends {}>(props: UseWizardStepsProps<T>) => {
    const { step, previous, next, handleSubmit, setValue } = props;

    const router = useRouter();

    return () => ({
        step,
        secondaryBtnOnClick: () => router.push(previous),
        onSubmit: handleSubmit((value) => {
            setValue(value);
            router.push(next);
        }),
    });
};
