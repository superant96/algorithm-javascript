/*
    [Problem]
    https://www.hackerrank.com/challenges/grading/problem
*/
console.log(gradingStudents([73, 67, 38, 33]));

function gradingStudents(grades) {
    let roundNumber = 0;

    return grades.map((grade) => {
        // 과락
        if (grade < 38) {
            return grade;
        }

        roundNumber = Math.floor(((grade / 5) + 1)) * 5 - grade;
        // 반올림 조건
        if (roundNumber < 3) {
            return grade + roundNumber;
        } else {
            // 바로 출력
            return grade;
        }
    });
}
