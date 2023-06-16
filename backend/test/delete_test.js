const assert = require("assert");
const User = require("../models/User");

describe("delete records", () => {
    let user;
    
    beforeEach((done) => {
        user = new User({email: "test@hotmail.com", password: "Win@2020"})
        user.save()
        .then(() => done())
    })

    it("delete a user", () => {
        user.deleteOne()
        .then(() => User.findOne({email: "test@hotmail.com"}))
        .then((users) => {
            assert(users === null)
            done()
        })
    })
})