const mergeSort = require('../helpers/mergeSort');

module.exports = {
    post: (req, res, next) => {
        const unsortedNumbers = req.body.unsortedNumbers;
        res.status(200);
        res.json(mergeSort(unsortedNumbers));
    }
};
