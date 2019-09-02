const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, colToSearch) {
        const queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], 
        function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        },

    insertOne: function(tableInput, colToSearch) {
        const queryString = "SELECT ??"
    }

}

module.exports = orm;