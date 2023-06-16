const assert = require("assert");
const User = require("../models/User");

describe("creating Records", () => {
    it("saves a user", (done) => {
        const user = new User({email: "test@hotmail.com", password: "Win@2020"})
        user.save()
        .then(() => {
            assert(!user.isNew)
            done();
        })
    })
})