import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Bastien est ...',
    answers: [
        {
            value: 'une pute',
            isCorrect: false,
        },
        {
            value: 'une tchoin',
            isCorrect: true,
        },
        {
            value: 'un homme',
            isCorrect: false,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Bastien', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'La tchoin',
        theme: 'Sport',
        questions: [QUESTION_SPORT],
    }
];
