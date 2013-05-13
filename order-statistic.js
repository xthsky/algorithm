/**
 * Created with JetBrains WebStorm.
 * User: xthsky
 * Date: 13-5-8
 * Time: 上午10:17
 * To change this template use File | Settings | File Templates.
 */

var input = [-1, 5, -2, 5, 7, 11, 6, 0, -9, -14];

// increase
function search(a, index) {
    return divide(a, index, 0, a.length);
}

function divide(a, index, start, end) {
    if (end - start < 2) {
        return a[start];
    }

    var p, q, num;
    q = start;
    num = a[q];

    for (p = start + 1; p < end; p++) {
        if (num > a[p]) {
            a[q] = a[p];
            q++;
            a[p] = a[q];
            a[q] = num;
        }
    }

    if (q > index) {
        return divide(a, index, start, q);
    } else if (q < index) {
        return divide(a, index, q + 1, end);
    } else {
        return num;
    }
}

var output = search(input, Math.floor(input.length/2));

console.log('index of median:');
console.log(output);