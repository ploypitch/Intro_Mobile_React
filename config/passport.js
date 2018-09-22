var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/auth');

module.exports = function (passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('signup', new LocalStrategy({
        firstnameField: 'firstname',
        lastnameField: 'lastname',
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            User.find({ 'email': email }, function (err, user) {
                if (err)
                    return done(err);
                if (email) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } 
                else {
                    var newUser = new User();
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password); // use the generateHash function in our user model

                    newUser.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }

            });

        }));

    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            User.findOne({ 'email': email }, function (err, user) {
                if (err)
                    return done(err);
                //ไม่พบ user ในระบบ
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                //รหัสผ่านไม่ถูกต้อง
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                //เข้่าสู่ระบบสำเร็จ
                return done(null, user);
            });

        }));

};