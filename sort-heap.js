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
    var i, temp;

    buildMaxHeap(a);
    for (i = a.length - 1; i > 0; i--) {
        temp = a[i];
        a[i] = a[0];
        a[0] = temp;
        maxHeapify(a, 0, i);
    }

    return a;
}

// 复杂度为O(n)，插入法建堆复杂度则为O(nlgn)
function buildMaxHeap(a) {
    for (var i = Math.floor(a.length / 2); i > -1; i--) {
        maxHeapify(a, i, a.length);
    }
}

function maxHeapify(a, root, size) {
    var child, left, right, temp;

    left = 2 * root + 1;
    if (left >= size) {
        return;
    }

    child = left;
    right = 2 * root + 2;
    if (right < size && a[left] < a[right]) {
        child = right;
    }

    if (a[root] < a[child]) {
        temp = a[child];
        a[child] = a[root];
        a[root] = temp;
    }

    maxHeapify(a, child, size);
}

var output = sort(input);

console.log('heap sort:');
console.log(output);