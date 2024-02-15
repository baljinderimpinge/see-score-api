/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');
var router = express.Router();

var fetch = require('../common/fetch');

var { GRAPH_ME_ENDPOINT } = require('../common/authConfig');
function isAuthenticated(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth/signin'); 
    }

    next();
};

router.get('/id',
    isAuthenticated, 
    async function (req, res, next) {
        console.log(req.session.account,"req.session.account")
        res.render('id', { idTokenClaims: req.session.account.idTokenClaims });
    }
);

router.get('/profile',
    isAuthenticated, 
    async function (req, res, next) {
        try {
            const graphResponse = await fetch(GRAPH_ME_ENDPOINT, req.session.accessToken);
            res.render('profile', { profile: graphResponse });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;