const path = require('path');


const controller = {
    
    load: (req, res) => {

        // const route = path.resolve(__dirname, '../Views/index.html');
        // res.sendFile(route);
        res.sendFile(__dirname,"../Views/index.html")

    },
    
}

module.exports = controller;