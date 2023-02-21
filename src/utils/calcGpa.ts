import type { Grade } from "../types/Grade";

const gradeMap: Record<string, number> = {
    "5": 5,
    "4": 4,
    "3": 3,
    "G": 1,
    "U": 0,
}


export default function calcGpa(grades: Grade[]): number {
    const sum = grades.reduce((accumulator, grade) => accumulator + gradeMap[grade.grade] * grade.credits, 0);
    return sum / grades.length;
}