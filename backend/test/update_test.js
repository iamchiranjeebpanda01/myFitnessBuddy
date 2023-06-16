const assert = require("assert");
const User = require("../models/User");

describe("update Records", () => {
    let user;
    
    beforeEach((done) => {
        user = new User({email:"test@hotmail.com", password: "win@2020"})
        user.save()
        .then(() => done())
    })

    it("update bmrValue of user", (done) => {
        user.set("bmrValue", 2000)
        user.save()
        .then(() => User.find({}))
        .then((users) => {
            assert(users.length === 1)
            assert(users[0].bmrValue === 2000)
            done()
        })
    })
})