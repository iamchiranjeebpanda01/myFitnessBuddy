const assert = require("assert");
const User = require("../models/User");

describe("reading records", () => {
    let user;

    beforeEach((done) => {
        user = new User({email: "test@hotmail.com", password: "Win@2020"})
        user.save()
        .then(() => done())
    })

    it("finds user with email: test@hotmail.com", (done) => {
        User.findOne({email: "test@hotmail.com"})
        .then((foundUser) => {
            assert(foundUser._id.toString() === user._id.toString())
            done()
        })
    })

    it("finds user with email: test@hotmail.com and password: Win@2020", (done) => {
        User.findOne({email: "test@hotmail.com", password: "Win@2020"})
        .then((foundUser) => {
            assert(foundUser._id.toString() === user._id.toString())
            done()
        })
    })
})