import Q2_ANY from '../public/question-2/any.svg';
import Q2_ANY_CHECKED from '../public/question-2/any-checked.svg';
import Q2_BACK from '../public/question-2/back.svg';
import Q2_BACK_CHECKED from '../public/question-2/back-checked.svg';
import Q2_FACEDOWN from '../public/question-2/face-down.svg';
import Q2_FACEDOWN_CHECKED from '../public/question-2/face-down-checked.svg';
import Q2_SIDE from '../public/question-2/side.svg';
import Q2_SIDE_CHECKED from '../public/question-2/side-checked.svg';

import Q4_SINGLE from '../public/question-4/single.svg';
import Q4_SINGLE_CHECKED from '../public/question-4/single-checked.svg';
import Q4_DOUBLE from '../public/question-4/double.svg';
import Q4_DOUBLE_CHECKED from '../public/question-4/double-checked.svg';
import Q4_TRIPLE_CHECKED from '../public/question-4/triple-checked.svg';
import Q4_TRIPLE from '../public/question-4/triple.svg';

import Q5_ANY from '../public/question-5/any.svg';
import Q5_ANY_CHECKED from '../public/question-5/any-checked.svg';
import Q5_FIRM from '../public/question-5/firm.svg';
import Q5_FIRM_CHECKED from '../public/question-5/firm-checked.svg';
import Q5_NORMAL from '../public/question-5/normal.svg';
import Q5_NORMAL_CHECKED from '../public/question-5/normal-checked.svg';
import Q5_SOFT_CHECKED from '../public/question-5/soft-checked.svg';
import Q5_SOFT from '../public/question-5/soft.svg';

import Q6_ANY from '../public/question-6/any.svg';
import Q6_ANY_CHECKED from '../public/question-6/any-checked.svg';
import Q6_COMPRESS from '../public/question-6/compress.svg';
import Q6_COMPRESS_CHECKED from '../public/question-6/compress-checked.svg';
import Q6_FOAM from '../public/question-6/foam.svg';
import Q6_FOAM_CHECKED from '../public/question-6/foam-checked.svg';
import Q6_LATEX from '../public/question-6/latex.svg';
import Q6_LATEX_CHECKED from '../public/question-6/latex-checked.svg';
import Q6_SPRING_CHECKED from '../public/question-6/spring-checked.svg';
import Q6_SPRING from '../public/question-6/spring.svg';

export const useQuestion1 = () => ({
    name: 'question1',
    options: [
        { label: 'Đổi đệm hoặc nâng cấp nệm', value: '1' },
        { label: 'Đệm cũ ngủ không ngon giấc', value: '2' },
        { label: 'Mua nệm mới, giường mới', value: '3' },
        { label: 'Mua tặng cho bố mẹ & người thân', value: '4' },
        { label: 'Cho con ngủ riêng', value: '5' },
    ],
});

export const useQuestion2 = () => ({
    name: 'question2',
    options: [
        {
            label: 'Nằm nghiêng',
            value: '1',
            checkedSVG: Q2_SIDE_CHECKED,
            SVG: Q2_SIDE,
        },
        {
            label: 'Nằm sấp',
            value: '2',
            checkedSVG: Q2_FACEDOWN_CHECKED,
            SVG: Q2_FACEDOWN,
        },
        {
            label: 'Nằm ngửa',
            value: '3',
            checkedSVG: Q2_BACK_CHECKED,
            SVG: Q2_BACK,
        },
        {
            label: 'Nằm mọi tư thế',
            value: '4',
            checkedSVG: Q2_ANY_CHECKED,
            SVG: Q2_ANY,
        },
    ],
});

export const useQuestion3 = () => ({
    name: 'question3',
    options: [
        { label: 'Đau lưng', value: '1' },
        { label: 'Đau cổ, vai và gáy', value: '2' },
        { label: 'Đau vùng thắt lưng', value: '3' },
        { label: 'Nóng lưng', value: '4' },
        { label: 'Không gặp các vấn đề trên', value: '5' },
    ],
});

export const useQuestion4 = () => ({
    name: 'question4',
    options: [
        {
            label: '1 người',
            value: '225',
            checkedSVG: Q4_SINGLE_CHECKED,
            SVG: Q4_SINGLE,
        },
        {
            label: '2 người',
            value: '220',
            checkedSVG: Q4_DOUBLE_CHECKED,
            SVG: Q4_DOUBLE,
        },
        {
            label: '3 người trở lên',
            value: '227',
            checkedSVG: Q4_TRIPLE_CHECKED,
            SVG: Q4_TRIPLE,
        },
    ],
});

export const useQuestion5 = () => ({
    name: 'question5',
    options: [
        {
            label: 'Mềm mại',
            value: '1',
            checkedSVG: Q5_SOFT_CHECKED,
            SVG: Q5_SOFT,
        },
        {
            label: 'Trung bình',
            value: '2',
            checkedSVG: Q5_NORMAL_CHECKED,
            SVG: Q5_NORMAL,
        },
        {
            label: 'Cứng cáp',
            value: '3',
            checkedSVG: Q5_FIRM_CHECKED,
            SVG: Q5_FIRM,
        },
        {
            label: 'Tôi không rõ',
            value: '4',
            checkedSVG: Q5_ANY_CHECKED,
            SVG: Q5_ANY,
        },
    ],
});

export const useQuestion6 = () => ({
    name: 'question6',
    options: [
        {
            label: 'Nệm lò xo',
            value: '31',
            checkedSVG: Q6_SPRING_CHECKED,
            SVG: Q6_SPRING,
        },
        {
            label: 'Nệm foam',
            value: '28',
            checkedSVG: Q6_FOAM_CHECKED,
            SVG: Q6_FOAM,
        },
        {
            label: 'Nệm cao su',
            value: '34',
            checkedSVG: Q6_LATEX_CHECKED,
            SVG: Q6_LATEX,
        },
        {
            label: 'Nệm bông ép',
            value: '39',
            checkedSVG: Q6_COMPRESS_CHECKED,
            SVG: Q6_COMPRESS,
        },
        {
            label: 'Tôi không rõ',
            value: '0',
            checkedSVG: Q6_ANY_CHECKED,
            SVG: Q6_ANY,
        },
    ],
});
