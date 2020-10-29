/*
    [Problem]
    https://www.hackerrank.com/challenges/apple-and-orange/problem
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter((apple) => {
        if (apple >= 1) {
            let appleNumber = a + apple;
            if (appleNumber >= s && appleNumber <= t) {
                return apple;
            }
        }
    }).length);

    console.log(oranges.filter((orange) => {
        if (orange < 1) {
            let orangeNumber = b + orange;
            if (orangeNumber >= s && orangeNumber <= t) {
                return orange;
            }
        }
    }).length);
}