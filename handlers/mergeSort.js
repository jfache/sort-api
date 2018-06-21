module.exports = {
    post: function bubbleSort(req, res, next) {
        const sortedNumbers = req.body.unsortedNumbers.sort();
        res.status(200);
        res.json(sortedNumbers);
    }
};
