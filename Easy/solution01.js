/*
    [Problem]
    - Every student receives a grade in the inclusive range from 0 to 100.
    - Any grade less than 40 is a failing grade.
    [rules]
    - If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
    - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
    [Examples]
    grade = 84 round to 85 (85 - 84 is less than 3)
    grade = 29 do not round (result is less than 40)
    grade = 57 do not round (60 - 57 is 3 or higher)

    [Sample Input 0]
    - [ 73, 67, 38, 33 ]
    [Sample Output 0]
    - [ 75, 67, 40, 33 ]
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
