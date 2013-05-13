/**
 * Created with JetBrains WebStorm.
 * User: xthsky
 * Date: 13-5-8
 * Time: 上午10:17
 * To change this template use File | Settings | File Templates.
 */

var input = [3, 5, 2, 8, 7, 1, 6, 0, 9, 4];

// increase
function sort(a) {
    divide(a, 0, a.length);

    return a;
}

function divide(a, start, end) {
    if (end - start < 2) {
        return;
    }

    var p, k, num;
    k = start;
    num = a[k];

    for (p = start + 1; p < end; p++) {
        if (num > a[p]) {
            a[k] = a[p];
            k++;
            a[p] = a[k];
            a[k] = num;
        }
    }

    divide(a, start, k);
    divide(a, k + 1, end);
}

var output = sort(input);

console.log('quick sort:');
console.log(output);