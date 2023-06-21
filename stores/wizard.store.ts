import { create } from 'zustand';

import { Question1Slice, createQuestion1Slice } from './question-1.slice';
import { Question2Slice, createQuestion2Slice } from './question-2.slice';
import { Question31Slice, createQuestion31Slice } from './question-31.slice';
import { Question32Slice, createQuestion32Slice } from './question-32.slice';
import { Question33Slice, createQuestion33Slice } from './question-33.slice';
import { Question34Slice, createQuestion34Slice } from './question-34.slice';
import { Question4Slice, createQuestion4Slice } from './question-4.slice';
import { Question5Slice, createQuestion5Slice } from './question-5.slice';
import { Question6Slice, createQuestion6Slice } from './question-6.slice';
import { Question7Slice, createQuestion7Slice } from './question-7.slice';

export type WizardStore = Question1Slice &
    Question2Slice &
    Question31Slice &
    Question32Slice &
    Question33Slice &
    Question34Slice &
    Question4Slice &
    Question5Slice &
    Question6Slice &
    Question7Slice & { getValues: () => { [key: string]: any } };

export const useWizardStore = create<WizardStore>()((...a) => {
    const [_, get] = a;

    return {
        ...createQuestion1Slice(...a),
        ...createQuestion2Slice(...a),
        ...createQuestion31Slice(...a),
        ...createQuestion32Slice(...a),
        ...createQuestion33Slice(...a),
        ...createQuestion34Slice(...a),
        ...createQuestion4Slice(...a),
        ...createQuestion5Slice(...a),
        ...createQuestion6Slice(...a),
        ...createQuestion7Slice(...a),
        getValues: () => ({
            question1: get().question4,
            question2: get().question4,
            question31: get().question31,
            question32: get().question32,
            question33: get().question33,
            question34: get().question34,
            question4: get().question4,
            question5: get().question5,
            question6: get().question6,
            question7: get().question7,
        }),
    };
});
