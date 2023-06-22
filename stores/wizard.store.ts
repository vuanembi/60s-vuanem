import { create } from 'zustand';

import { NameSlice, createNameSlice } from './name.slice';
import { Question1Slice, createQuestion1Slice } from './question-1.slice';
import { Question2Slice, createQuestion2Slice } from './question-2.slice';
import { Question3Slice, createQuestion3Slice } from './question-3.slice';
import { Question4Slice, createQuestion4Slice } from './question-4.slice';
import { Question5Slice, createQuestion5Slice } from './question-5.slice';
import { Question6Slice, createQuestion6Slice } from './question-6.slice';
import { Question7Slice, createQuestion7Slice } from './question-7.slice';

export type WizardStore = NameSlice &
    Question1Slice &
    Question2Slice &
    Question3Slice &
    Question4Slice &
    Question5Slice &
    Question6Slice &
    Question7Slice;

export const useWizardStore = create<WizardStore>()((...a) => {
    return {
        ...createNameSlice(...a),
        ...createQuestion1Slice(...a),
        ...createQuestion2Slice(...a),
        ...createQuestion3Slice(...a),
        ...createQuestion4Slice(...a),
        ...createQuestion5Slice(...a),
        ...createQuestion6Slice(...a),
        ...createQuestion7Slice(...a),
    };
});
