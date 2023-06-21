import { StateCreator } from 'zustand';

import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioQuestion, SetRadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question1Slice = {
    question1: RadioQuestion<RadioCardTextProps>;
    setQuestion1: SetRadioQuestion;
};

export const createQuestion1Slice: StateCreator<WizardStore, [], [], Question1Slice> = (set) => ({
    question1: {
        props: {
            name: 'question1',
            prompt: 'Nhu cầu của bạn?',
            options: [
                { label: 'Đổi nệm hoặc nâng cấp nệm', value: 'Đổi nệm hoặc nâng cấp nệm' },
                { label: 'Nệm cũ ngủ không ngon giấc', value: 'Nệm cũ ngủ không ngon giấc' },
                { label: 'Mua nệm mới, giường mới', value: 'Mua nệm mới, giường mới' },
                { label: 'Mua tặng cha mẹ & người thân', value: 'Mua tặng cha mẹ & người thân' },
                { label: 'Cho con ngủ riêng', value: 'Cho con ngủ riêng' },
            ],
        },
        value: 'Đổi nệm hoặc nâng cấp nệm',
    },
    setQuestion1: (value) => set((state) => ({ question1: { props: state.question1.props, value } })),
});