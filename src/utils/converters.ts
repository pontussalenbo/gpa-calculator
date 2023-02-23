import type { Grade } from "../types/Grade";

const gradeMap: Record<string, number> = {
    "5": 5,
    "4": 4,
    "3": 3,
    "G": 3,
    "U": 0,
}

const convertCredit = (credit: unknown): number => Number.parseFloat(credit as string)

export function calcCredits(grades: Grade[]): number {
    return grades.reduce((accumulator, grade) => accumulator + convertCredit(grade.credits), 0);
}

export function calcGpa(grades: Grade[]): number {
    const sum = grades.reduce((accumulator, grade) => accumulator + gradeMap[grade.grade] * convertCredit(grade.credits), 0);
    return sum / calcCredits(grades);
}