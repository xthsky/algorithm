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
    if (a.length < 2) { return a; }

    var i, j, k, left, right, ret;

    // js是向下取整.
    left = sort(a.slice(0, a.length / 2));
    right = sort(a.slice(a.length / 2));

    left.push(Number.POSITIVE_INFINITY);
    right.push(Number.POSITIVE_INFINITY);

    ret = [];
    for (i = j = k = 0; k < a.length; k++) {
        if (left[i] < right[j]) {
            ret.push(left[i]);
            i++;
        } else {
            ret.push(right[j]);
            j++;
        }
    }
    return ret;
}

var output = sort(input);

console.log('merge sort:');
console.log(output);