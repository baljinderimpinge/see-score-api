/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');

const authProvider = require('../auth/AuthProvider');
const { REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } = require('../common/authConfig');

const router = express.Router();

router.get('/signin', authProvider.login({
    scopes: ["offline_access","User.Read","SecurityEvents.ReadWrite.All",
    "SecurityEvents.Read.All", "Directory.Read.All", "Directory.ReadWrite.All",
    "DirectoryRecommendations.Read.All", "DirectoryRecommendations.ReadWrite.All"],
    redirectUri: REDIRECT_URI,
    successRedirect: '/'
}));

router.get('/acquireToken', authProvider.acquireToken({
    scopes: ["offline_access","User.Read","SecurityEvents.ReadWrite.All",
    "SecurityEvents.Read.All", "Directory.Read.All", "Directory.ReadWrite.All",
    "DirectoryRecommendations.Read.All", "DirectoryRecommendations.ReadWrite.All"],
    redirectUri: REDIRECT_URI,
    successRedirect: '/users/profile'
}));

router.post('/redirect', authProvider.handleRedirect());

router.get('/signout', authProvider.logout({
    postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI
}));

module.exports = router;