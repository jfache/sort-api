const bubbleSort = require('../helpers/bubbleSort');

module.exports = {
    post: (req, res) => {
        let unsortedNumbers = req.body.unsortedNumbers;
        bubbleSort(unsortedNumbers);
        res.status(200);
        res.json(unsortedNumbers);
    }
};
