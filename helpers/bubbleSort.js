const bubbleSort = items => {
    let length = items.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
};

module.exports = bubbleSort;
