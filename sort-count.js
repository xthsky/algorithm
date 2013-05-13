/**
 * Created with JetBrains WebStorm.
 * User: xthsky
 * Date: 13-5-8
 * Time: 上午10:17
 * To change this template use File | Settings | File Templates.
 */

var input = [3, 2, 2, 9, 3, 1, 6, 0, 9, 4];

// increase
function sort(a) {
    var b, c, i, j;
    b = [];
    c = [];

    for (i = 0; i < a.length; i++) {
        if (b[a[i]] === undefined) {
            b[a[i]] = 1;
        } else {
            b[a[i]]++;
        }
    }
    for (i = 0; i < b.length; i++) {
        for (j = 0; j < b[i]; j++) {
            c.push(i);
        }
    }

    return c;
}

var output = sort(input);

console.log('counting sort:');
console.log(output);