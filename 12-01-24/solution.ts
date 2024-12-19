import { parseInput } from "../Advent";

parseInput("/12-01-24/input.txt").then((fileArray) => {
    let list1: string[] = [];
    let list2: any = {};
    let totalDistance = 0;
    let similarityScore = 0;

    for (let line of fileArray) {
        let a = line.slice(0, 5);
        let b = line.slice(8);
        list1.push(a);
        if (!list2[b]) {
            list2[b] = 1;
        } else {
            list2[b] += 1;
        }
    }
    // Part 1
    // list1.sort!((a, b) => a - b);
    // list2.sort!((a, b) => a - b);

    // for (let i = 0; i < list1.length; i++) {
    //     totalDistance += Math.abs(list1[i] - list2[i]);
    // }
    // Part 2
    // console.log(list1, list2);
    for (let i = 0; i < list1.length; i++) {
        console.log(String(list1[i]), list2[list1[i]]);
        similarityScore += parseInt(list1[i]) * (list2[list1[i]] || 0);
    }
    console.log(similarityScore);
});
