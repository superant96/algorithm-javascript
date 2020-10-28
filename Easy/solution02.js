/*
    [Problem]
    https://www.hackerrank.com/challenges/apple-and-orange/problem
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    const applePassLength = s - a;
    const orangesPassLength = t - b;

    for (const apple of apples) {
        // 미달된 사과들은 패스
        if (apple < applePassLength) {
            continue;
        }
        appleCount++;
    }

    for (const orange of oranges) {
        // 미달된 오렌지들은 패스
        if (orange > orangesPassLength) {
            continue;
        }
        orangeCount++;
    }
    console.log(appleCount);
    console.log(orangeCount);
}