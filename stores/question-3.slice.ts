import { StateCreator } from 'zustand';

import { SliderQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

type Value = {
    question31: number;
    question32: number;
    question33: number;
    question34: number;
};

export type Question3Slice = {
    question3: {
        question31: SliderQuestion;
        question32: SliderQuestion;
        question33: SliderQuestion;
        question34: SliderQuestion;
        prompt: () => string;
        subtitle: string;
        setValue: (value: Value) => void;
    };
};

export const createQuestion3Slice: StateCreator<WizardStore, [], [], Question3Slice> = (set, get) => {
    return {
        question3: {
            question31: {
                name: 'question31',
                prompt: 'Ngáy khi ngủ?',
                shortPrompt: 'Ngáy khi ngủ',
                value: 0,
            },
            question32: {
                name: 'question32',
                prompt: 'Trào ngược dạ dày?',
                shortPrompt: 'Trào ngược dạ dày',
                value: 0,
            },
            question33: {
                name: 'question33',
                prompt: 'Đau mỏi lưng?',
                shortPrompt: 'Đau mỏi lưng',
                value: 0,
            },
            question34: {
                name: 'question34',
                prompt: 'Đau mỏi vai gáy?',
                shortPrompt: 'Đau mỏi vai gáy',
                value: 0,
            },
            prompt: () => `Anh/chị${get().name ? ` ${get().name} ` : ' '}hoặc người sử dụng có gặp vấn đề về sức khoẻ?`,
            subtitle: 'Lựa chọn một miêu tả đúng với vấn đề đang gặp phải',
            setValue: (value) =>
                set(({ question3 }) => ({
                    question3: {
                        ...question3,
                        question31: { ...question3.question31, value: value.question31 },
                        question32: { ...question3.question32, value: value.question32 },
                        question33: { ...question3.question33, value: value.question33 },
                        question34: { ...question3.question34, value: value.question34 },
                    },
                })),
        },
    };
};
