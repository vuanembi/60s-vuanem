import { GetProductsFormValues } from './use-wizard-form';
import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { SliderQuestionStepProps } from '../components/slider-question/slider-question-step';

import Q2_ANY from '../public/question-2/any.png';
import Q2_ANY_CHECKED from '../public/question-2/any-checked.png';
import Q2_BACK from '../public/question-2/back.png';
import Q2_BACK_CHECKED from '../public/question-2/back-checked.png';
import Q2_FACEDOWN from '../public/question-2/facedown.png';
import Q2_FACEDOWN_CHECKED from '../public/question-2/facedown-checked.png';
import Q2_SIDE from '../public/question-2/side.png';
import Q2_SIDE_CHECKED from '../public/question-2/side-checked.png';

import Q4_SINGLE from '../public/question-4/single.png';
import Q4_SINGLE_CHECKED from '../public/question-4/single-checked.png';
import Q4_DOUBLE from '../public/question-4/double.png';
import Q4_DOUBLE_CHECKED from '../public/question-4/double-checked.png';
import Q4_TRIPLE_CHECKED from '../public/question-4/triple-checked.png';
import Q4_TRIPLE from '../public/question-4/triple.png';

import Q5_ANY from '../public/question-5/any.png';
import Q5_ANY_CHECKED from '../public/question-5/any-checked.png';
import Q5_FIRM from '../public/question-5/firm.png';
import Q5_FIRM_CHECKED from '../public/question-5/firm-checked.png';
import Q5_MEDIUM from '../public/question-5/medium.png';
import Q5_MEDIUM_CHECKED from '../public/question-5/medium-checked.png';
import Q5_SOFT_CHECKED from '../public/question-5/soft-checked.png';
import Q5_SOFT from '../public/question-5/soft.png';

import Q6_COMPRESS from '../public/question-6/compress.png';
import Q6_COMPRESS_CHECKED from '../public/question-6/compress-checked.png';
import Q6_FOAM from '../public/question-6/foam.png';
import Q6_FOAM_CHECKED from '../public/question-6/foam-checked.png';
import Q6_LATEX from '../public/question-6/latex.png';
import Q6_LATEX_CHECKED from '../public/question-6/latex-checked.png';
import Q6_SPRING_CHECKED from '../public/question-6/spring-checked.png';
import Q6_SPRING from '../public/question-6/spring.png';

export type UseRadioQuestion<T> = () => {
    name: keyof GetProductsFormValues;
    question: string;
    options: T[];
};

export const useQuestion1: UseRadioQuestion<RadioCardTextProps> = () => ({
    name: 'question1',
    question: 'Nhu cầu của bạn?',
    options: [
        { label: 'Đổi nệm hoặc nâng cấp nệm', value: '1' },
        { label: 'Nệm cũ ngủ không ngon giấc', value: '2' },
        { label: 'Mua nệm mới, giường mới', value: '3' },
        { label: 'Mua tặng cha mẹ & người thân', value: '4' },
        { label: 'Cho con ngủ riêng', value: '5' },
    ],
});

export const useQuestion2: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question2',
    question: 'Tư thế nằm của bạn?',
    options: [
        {
            label: 'Nằm nghiêng',
            value: '1',
            src: (isChecked) => (isChecked ? Q2_SIDE_CHECKED : Q2_SIDE),
        },
        {
            label: 'Nằm sấp',
            value: '2',
            src: (isChecked) => (isChecked ? Q2_FACEDOWN_CHECKED : Q2_FACEDOWN),
        },
        {
            label: 'Nằm ngửa',
            value: '3',
            src: (isChecked) => (isChecked ? Q2_BACK_CHECKED : Q2_BACK),
        },
        {
            label: 'Nằm mọi tư thế',
            value: '4',
            src: (isChecked) => (isChecked ? Q2_ANY_CHECKED : Q2_ANY),
        },
    ],
});

export const useQuestion4: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question4',
    question: 'Kích cỡ sản phẩm mong muốn?',
    options: [
        {
            label: '1 người',
            value: '225',
            src: (isChecked) => (isChecked ? Q4_SINGLE_CHECKED : Q4_SINGLE),
        },
        {
            label: '2 người',
            value: '220',
            src: (isChecked) => (isChecked ? Q4_DOUBLE_CHECKED : Q4_DOUBLE),
        },
        {
            label: '3 người trở lên',
            value: '227',
            src: (isChecked) => (isChecked ? Q4_TRIPLE_CHECKED : Q4_TRIPLE),
        },
    ],
});

export const useQuestion5: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question5',
    question: 'Độ cứng mềm mong muốn?',
    options: [
        {
            label: 'Mềm mại',
            value: '1',
            src: (isChecked) => (isChecked ? Q5_SOFT_CHECKED : Q5_SOFT),
        },
        {
            label: 'Trung bình',
            value: '2',
            src: (isChecked) => (isChecked ? Q5_MEDIUM_CHECKED : Q5_MEDIUM),
        },
        {
            label: 'Cứng cáp',
            value: '3',
            src: (isChecked) => (isChecked ? Q5_FIRM_CHECKED : Q5_FIRM),
        },
        {
            label: 'Tôi không rõ',
            value: '4',
            src: (isChecked) => (isChecked ? Q5_ANY_CHECKED : Q5_ANY),
        },
    ],
});

export const useQuestion6: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question6',
    question: 'Loại / Chất liệu mong muốn?',
    options: [
        {
            label: 'Lò xo',
            value: '31',
            src: (isChecked) => (isChecked ? Q6_SPRING_CHECKED : Q6_SPRING),
        },
        {
            label: 'Foam',
            value: '28',
            src: (isChecked) => (isChecked ? Q6_FOAM_CHECKED : Q6_FOAM),
        },
        {
            label: 'Cao su',
            value: '34',
            src: (isChecked) => (isChecked ? Q6_LATEX_CHECKED : Q6_LATEX),
        },
        {
            label: 'Bông ép',
            value: '39',
            src: (isChecked) => (isChecked ? Q6_COMPRESS_CHECKED : Q6_COMPRESS),
        },
    ],
});

type UseSliderQuestions = () => Omit<SliderQuestionStepProps, 'control'>;

export const useQuestion3s: UseSliderQuestions = () => ({
    question: 'Bệnh lý liên quan của bạn?',
    questions: [
        {
            name: 'question31',
            question: 'Bạn ngáy khi ngủ?',
        },
        {
            name: 'question32',
            question: 'Bạn bị trào ngược dạ dày?',
        },
        {
            name: 'question33',
            question: 'Bạn bị đau mỏi lưng?',
        },
        {
            name: 'question34',
            question: 'Bạn bị đau mỏi vai gáy?',
        },
    ],
});
