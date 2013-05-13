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
    var i, j, temp;
    for (i = 1; i < a.length; i++) {
        temp = a[i];
        for (j = i; temp < a[j - 1] && j > 0; j--) {
            a[j] = a[j - 1];
            a[j - 1] = temp;
        }
    }
    return a;
}

var output = sort(input);

console.log('insert sort:');
console.log(output);