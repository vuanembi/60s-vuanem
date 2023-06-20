import { GetProductsFormValues } from './use-wizard-form';
import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { SliderQuestionStepProps } from '../components/slider-question/slider-question-step';

import Q2_ANY from '../public/q2/any.png';
import Q2_ANY_CHECKED from '../public/q2/any-checked.png';
import Q2_BACK from '../public/q2/back.png';
import Q2_BACK_CHECKED from '../public/q2/back-checked.png';
import Q2_FACEDOWN from '../public/q2/facedown.png';
import Q2_FACEDOWN_CHECKED from '../public/q2/facedown-checked.png';
import Q2_SIDE from '../public/q2/side.png';
import Q2_SIDE_CHECKED from '../public/q2/side-checked.png';

import Q4_SINGLE from '../public/q4/single.png';
import Q4_SINGLE_CHECKED from '../public/q4/single-checked.png';
import Q4_DOUBLE from '../public/q4/double.png';
import Q4_DOUBLE_CHECKED from '../public/q4/double-checked.png';
import Q4_TRIPLE_CHECKED from '../public/q4/triple-checked.png';
import Q4_TRIPLE from '../public/q4/triple.png';

import Q6_ANY from '../public/q6/any.png';
import Q6_ANY_CHECKED from '../public/q6/any-checked.png';
import Q6_FIRM from '../public/q6/firm.png';
import Q6_FIRM_CHECKED from '../public/q6/firm-checked.png';
import Q6_MEDIUM from '../public/q6/medium.png';
import Q6_MEDIUM_CHECKED from '../public/q6/medium-checked.png';
import Q6_SOFT_CHECKED from '../public/q6/soft-checked.png';
import Q6_SOFT from '../public/q6/soft.png';

import Q7_COMPRESS from '../public/q7/compress.png';
import Q7_COMPRESS_CHECKED from '../public/q7/compress-checked.png';
import Q7_FOAM from '../public/q7/foam.png';
import Q7_FOAM_CHECKED from '../public/q7/foam-checked.png';
import Q7_LATEX from '../public/q7/latex.png';
import Q7_LATEX_CHECKED from '../public/q7/latex-checked.png';
import Q7_SPRING_CHECKED from '../public/q7/spring-checked.png';
import Q7_SPRING from '../public/q7/spring.png';

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
            value: '1',
            src: (isChecked) => (isChecked ? Q4_SINGLE_CHECKED : Q4_SINGLE),
        },
        {
            label: '2 người',
            value: '2',
            src: (isChecked) => (isChecked ? Q4_DOUBLE_CHECKED : Q4_DOUBLE),
        },
        {
            label: '3 người trở lên',
            value: '3',
            src: (isChecked) => (isChecked ? Q4_TRIPLE_CHECKED : Q4_TRIPLE),
        },
    ],
});

export const useQuestion5: UseRadioQuestion<RadioCardTextProps> = () => ({
    name: 'question5',
    question: 'Độ cao của gối bạn sử dụng?',
    options: [
        { label: 'Gối cao', value: '1' },
        { label: 'Gối thấp', value: '2' },
        { label: 'Linh hoạt', value: '3' },
    ],
});

export const useQuestion6: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question6',
    question: 'Độ cứng mềm mong muốn?',
    options: [
        {
            label: 'Mềm mại',
            value: 'Mềm mại',
            src: (isChecked) => (isChecked ? Q6_SOFT_CHECKED : Q6_SOFT),
        },
        {
            label: 'Trung bình',
            value: 'Trung bình',
            src: (isChecked) => (isChecked ? Q6_MEDIUM_CHECKED : Q6_MEDIUM),
        },
        {
            label: 'Cứng cáp',
            value: 'Cứng cáp',
            src: (isChecked) => (isChecked ? Q6_FIRM_CHECKED : Q6_FIRM),
        },
        {
            label: 'Tôi không rõ',
            value: 'Tôi không rõ',
            src: (isChecked) => (isChecked ? Q6_ANY_CHECKED : Q6_ANY),
        },
    ],
});

export const useQuestion7: UseRadioQuestion<RadioCardImageProps> = () => ({
    name: 'question7',
    question: 'Loại / Chất liệu mong muốn?',
    options: [
        {
            label: 'Lò xo',
            value: 'Lò xo',
            src: (isChecked) => (isChecked ? Q7_SPRING_CHECKED : Q7_SPRING),
        },
        {
            label: 'Foam',
            value: 'Foam',
            src: (isChecked) => (isChecked ? Q7_FOAM_CHECKED : Q7_FOAM),
        },
        {
            label: 'Cao su',
            value: 'Cao su',
            src: (isChecked) => (isChecked ? Q7_LATEX_CHECKED : Q7_LATEX),
        },
        {
            label: 'Không rõ',
            value: 'Không rõ',
            src: (isChecked) => (isChecked ? Q7_COMPRESS_CHECKED : Q7_COMPRESS),
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
