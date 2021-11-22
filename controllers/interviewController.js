const fs = require('fs');

let list;
fs.readFile('./interviews.json', (err, data) => {
    if (err) throw err;
    list = JSON.parse(data);
});

exports.interviewList = (req, res) => {
    let newList = [];
    if(list) {
        list.forEach((item) => {
            if(item.archived.toString() === 'false') {
                newList.push(item)
            }
        });
        res.status(200).json(newList);
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
        if(archive.toString() === 'true') {
            res.status(200).json(list);
        } else {
            list.forEach((item) => {
                if(item.archived.toString() === 'false') {
                    newList.push(item)
                }
            });
            res.status(200).json(newList);
        }
    }
}

exports.toggleArchive = (req, res) => {
    let newList = [];
    const candidate = req.params.candidate;
    const archive = req.query.archived;
    if(list) {
        list.forEach((item) => {
            if(item.candidate.toLowerCase() === candidate.toLowerCase()) {
                (item.archived === true) ? item.archived = false : item.archived = true;
            }
        });
        if(archive.toString() === 'true') {
            res.status(200).json(list);
        } else {
            list.forEach((item) => {
                if(item.archived.toString() === 'false') {
                    newList.push(item)
                }
            });
            res.status(200).json(newList);
        }
    }
}