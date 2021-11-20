const fs = require('fs');

let list;
fs.readFile('./interviews.json', (err, data) => {
    if (err) throw err;
    list = JSON.parse(data);
});

exports.interviewList = (req, res) => {
    if(list) {
        res.status(200).json(list);
    }
}

exports.searchList = (req, res) => {
const name = req.query.candidate;
if(list) {
    const newList = list.filter((item) => {
        if(item.candidate.toLowerCase().includes(name.toLowerCase())) {
            return item;
        }
    })
    res.status(200).json(newList);
}
}

exports.archiveList = (req, res) => {
    const archive = req.query.archived;
    let newList = [];
    if(list) {
        if(archive.toString() === 'false') {
            list.forEach((item) => {
                if(item.archived.toString() === 'false') {
                    newList.push(item)
                }
            });
            res.status(200).json(newList);
        } else {
            res.status(200).json(list);
        }
    }
}