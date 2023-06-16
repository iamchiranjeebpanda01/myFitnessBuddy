const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://0.0.0.0/users_data");

before((done) => {
    mongoose.connection
    .once("open", () => console.log("Good to go"))
    .on("error", (error) => console.warn("Warning", error))
    done()
})


beforeEach(() => {
    mongoose.connection.collections.users.drop((done) => {
        done();
    })
})