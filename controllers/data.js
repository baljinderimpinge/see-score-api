

module.exports={
    
    dataPart : async()=>{
        console.log("---------")
        let data = {
            "value": [
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-26",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-26T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.82,
                            "appsScore": 29.12,
                            "appsScoreMax": 79.68,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.07,
                            "identityScore": 34.84,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.06,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.76,
                            "appsScoreMax": 92.45,
                            "dataScore": 0.5,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.37,
                            "deviceScoreMax": 11.74,
                            "identityScore": 33.27,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": "By restricting anonymous users from joining Microsoft Teams meetings, you have full control over meeting access. Anonymous users may not be from your organization and could have joined for malicious purposes, such as gaining information about your organization through conversations.",
                            "score": 0.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "current status: On",
                            "on": "false",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": "Dial-in users aren’t authenticated though the Teams app. Increase the security of your meetings by preventing these unknown users from bypassing the lobby and immediately joining the meeting.",
                            "score": 1.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": "External participants are users that are outside your organization. Limiting their permission to share content, add new users, and more protects your organization’s information from data leaks, inappropriate content being shared, or malicious actors joining the meeting.",
                            "score": 1.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": "If anonymous users are allowed to start meetings, they can admit any users from the lobbies, authenticated or otherwise. Anonymous users haven’t been authenticated, which can increase the risk of data leakage.",
                            "score": 1.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": "Users who aren’t invited to a meeting shouldn’t be let in automatically, because it increases the risk of data leaks, inappropriate content being shared, or malicious actors joining. If only invited users are automatically admitted, then users who weren’t invited will be sent to a meeting lobby. The host can then decide whether or not to let them in.",
                            "score": 0.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": "Only allow users with presenter rights to share content during meetings. Restricting who can present limits meeting disruptions and reduces the risk of unwanted or inappropriate content being shared.  ",
                            "score": 0.0,
                            "lastSynced": "2023-12-11T09:38:38Z",
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": "To reduce the risk of malicious applications attempting to trick users into granting them access to your organization's data, we recommend that you allow user consent only for applications that have been published by a verified publisher.",
                            "score": 0.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have no user consent policy in place.",
                            "on": "false",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": "Research has found that when periodic password resets are enforced, passwords become less secure. Users tend to pick a weaker password and vary it slightly for each reset. If a user creates a strong password (long, complex and without any pragmatic words present) it should remain just as strong in the future as it is today. It is Microsoft's official security position to not expire passwords periodically without a specific reason, and recommends that cloud-only tenants set the password policy to never expire.",
                            "score": 8.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": "Today, most compromising sign-in attempts come from legacy authentication. Older office clients such as Office 2010 don’t support modern authentication and use legacy protocols such as IMAP, SMTP, and POP3. Legacy authentication does not support multifactor authentication (MFA). Even if an MFA policy is configured in your environment, bad actors can bypass these enforcements through legacy protocols.",
                            "score": 8.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 of 5 users that don't have legacy authentication blocked.",
                            "count": "5",
                            "total": "5",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": "Multifactor authentication (MFA) helps protect devices and data that are accessible to these users. Adding more authentication methods, such as the Microsoft Authenticator app or a phone number, increases the level of protection if one factor is compromised.",
                            "score": 9.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 out of 5 users that aren’t registered with MFA.",
                            "count": "5",
                            "total": "5",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": "<p>Requiring multifactor authentication (MFA) for administrative roles makes it harder for attackers to access accounts. Administrative roles have higher permissions than typical users. If any of those accounts are compromised, your entire organization is exposed. At a minimum, protect the following roles:&nbsp;</p><ul><li>Global administrator&nbsp;</li><li>Authentication administrator&nbsp;</li><li>Billing administrator&nbsp;</li><li>Conditional Access administrator&nbsp;</li><li>Exchange administrator&nbsp;</li><li>Helpdesk administrator&nbsp;</li><li>Security administrator&nbsp;</li><li>SharePoint administrator&nbsp;</li><li>User administrator&nbsp;</li></ul>",
                            "score": 10.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 out of 1 users with administrative roles that aren’t registered and protected with MFA.",
                            "count": "1",
                            "total": "1",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": "Turning on the sign-in risk policy ensures that suspicious sign-ins are challenged for multifactor authentication (MFA).",
                            "score": 7.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 of 5 users that don't have the sign-in risky policy turned on.",
                            "count": "5",
                            "total": "5",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": "With the user risk policy turned on, Azure Active Directory detects the probability that a user account has been compromised. As an administrator, you can configure a user risk Conditional Access policy to automatically respond to a specific user risk level. For example, you can block access to your resources or require a password change to get a user account back into a clean state.",
                            "score": 7.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 users out of 5 that do not have user risk policy enabled.",
                            "count": "5",
                            "total": "5",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": "<p>Having more than one global administrator helps if you are unable to fulfill the needs or obligations of your organization. It's important to have a delegate or an emergency account someone from your team can access if necessary. It also allows admins the ability to monitor each other for signs of a breach.</p> <p><strong>Note</strong>:</p> <p>According to CIS O365 Benchmark 2.0.0, the suggestion is to have between two to four global admins. Currently, the condition to comply is to have more than one global administrator - This security recommendation will be updated accordingly to CIS benchmark in the future.</p> <p><strong>Rationale</strong>:</p> <p>If there is only one global tenant administrator, he or she can perform malicious activity without the possibility of being discovered by another admin. If there are numerous global tenant administrators, the more likely it is that one of their accounts will be successfully breached by an external attacker.</p>",
                            "score": 0.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You currently have 1 global admins.",
                            "count": "1",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": "Ensure that your administrators can accomplish their work with the least amount of privilege assigned to their account. Assigning users roles like Password Administrator or Exchange Online Administrator, instead of Global Administrator, reduces the likelihood of a global administrative privileged account being breached.",
                            "score": 0.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 users with least privileged administrative roles.",
                            "count": "0",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": "With self-service password reset in Azure Active Directory, users no longer need to engage help desk to reset passwords. This feature works well with Azure AD dynamically banned passwords, which prevents easily guessable passwords from being used.",
                            "score": 1.0,
                            "lastSynced": "2023-12-24T15:32:03Z",
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "count": "0",
                            "total": "0",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-25",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-25T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.82,
                            "appsScore": 29.12,
                            "appsScoreMax": 79.68,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.07,
                            "identityScore": 34.84,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.06,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.76,
                            "appsScoreMax": 92.45,
                            "dataScore": 0.5,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.37,
                            "deviceScoreMax": 11.74,
                            "identityScore": 33.27,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-24",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-24T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.8,
                            "appsScore": 29.13,
                            "appsScoreMax": 79.71,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.35,
                            "deviceScore": 8.77,
                            "deviceScoreMax": 16.1,
                            "identityScore": 34.83,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.05,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.77,
                            "appsScoreMax": 92.47,
                            "dataScore": 0.5,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.38,
                            "deviceScoreMax": 11.77,
                            "identityScore": 33.26,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-23",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-23T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.79,
                            "appsScore": 29.13,
                            "appsScoreMax": 79.71,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.78,
                            "deviceScoreMax": 16.13,
                            "identityScore": 34.83,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.04,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.75,
                            "appsScoreMax": 92.43,
                            "dataScore": 0.5,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.4,
                            "deviceScoreMax": 11.8,
                            "identityScore": 33.26,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-22",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-22T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.79,
                            "appsScore": 29.12,
                            "appsScoreMax": 79.68,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.79,
                            "deviceScoreMax": 16.15,
                            "identityScore": 34.82,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.04,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.74,
                            "appsScoreMax": 92.39,
                            "dataScore": 0.5,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.41,
                            "deviceScoreMax": 11.82,
                            "identityScore": 33.25,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-21",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-21T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.78,
                            "appsScore": 29.11,
                            "appsScoreMax": 79.63,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.79,
                            "deviceScoreMax": 16.16,
                            "identityScore": 34.82,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.04,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.72,
                            "appsScoreMax": 92.31,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.41,
                            "deviceScoreMax": 11.83,
                            "identityScore": 33.25,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-20",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-20T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.83,
                            "appsScore": 29.08,
                            "appsScoreMax": 79.22,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.78,
                            "deviceScoreMax": 16.15,
                            "identityScore": 34.82,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.09,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.68,
                            "appsScoreMax": 91.84,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.82,
                            "identityScore": 33.25,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-19",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-19T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.86,
                            "appsScore": 29.07,
                            "appsScoreMax": 78.89,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.77,
                            "deviceScoreMax": 16.13,
                            "identityScore": 34.79,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.13,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.67,
                            "appsScoreMax": 91.5,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.38,
                            "deviceScoreMax": 11.8,
                            "identityScore": 33.24,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-18",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-18T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.86,
                            "appsScore": 29.06,
                            "appsScoreMax": 78.81,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.1,
                            "identityScore": 34.77,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.14,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.66,
                            "appsScoreMax": 91.41,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.77,
                            "identityScore": 33.24,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-17",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-17T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.84,
                            "appsScore": 29.07,
                            "appsScoreMax": 78.84,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.76,
                            "deviceScoreMax": 16.12,
                            "identityScore": 34.76,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.12,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.67,
                            "appsScoreMax": 91.43,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.37,
                            "deviceScoreMax": 11.79,
                            "identityScore": 33.23,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-16",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-16T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.82,
                            "appsScore": 29.07,
                            "appsScoreMax": 78.85,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.77,
                            "deviceScoreMax": 16.15,
                            "identityScore": 34.74,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.1,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.66,
                            "appsScoreMax": 91.4,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.38,
                            "deviceScoreMax": 11.81,
                            "identityScore": 33.22,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-15",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-15T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.8,
                            "appsScore": 29.05,
                            "appsScoreMax": 78.81,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.78,
                            "deviceScoreMax": 16.16,
                            "identityScore": 34.74,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.1,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.63,
                            "appsScoreMax": 91.34,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.82,
                            "identityScore": 33.21,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-14",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-14T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.8,
                            "appsScore": 29.03,
                            "appsScoreMax": 78.76,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.77,
                            "deviceScoreMax": 16.15,
                            "identityScore": 34.74,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.1,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.6,
                            "appsScoreMax": 91.26,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.82,
                            "identityScore": 33.21,
                            "identityScoreMax": 59.76,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-13",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-13T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.8,
                            "appsScore": 29.01,
                            "appsScoreMax": 78.73,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.76,
                            "deviceScoreMax": 16.12,
                            "identityScore": 34.73,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.1,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.58,
                            "appsScoreMax": 91.23,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.37,
                            "deviceScoreMax": 11.79,
                            "identityScore": 33.21,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-12",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-12T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.79,
                            "appsScore": 29.02,
                            "appsScoreMax": 78.75,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.74,
                            "deviceScoreMax": 16.08,
                            "identityScore": 34.73,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.09,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.58,
                            "appsScoreMax": 91.24,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.35,
                            "deviceScoreMax": 11.75,
                            "identityScore": 33.21,
                            "identityScoreMax": 59.77,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-11",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-11T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.78,
                            "appsScore": 29.03,
                            "appsScoreMax": 78.79,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.73,
                            "deviceScoreMax": 16.06,
                            "identityScore": 34.72,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.08,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.6,
                            "appsScoreMax": 91.29,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.73,
                            "identityScore": 33.2,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-10",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-10T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.73,
                            "appsScore": 29.08,
                            "appsScoreMax": 78.92,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.74,
                            "deviceScoreMax": 16.09,
                            "identityScore": 34.7,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.03,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.65,
                            "appsScoreMax": 91.43,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.35,
                            "deviceScoreMax": 11.76,
                            "identityScore": 33.18,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-09",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-09T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.71,
                            "appsScore": 29.07,
                            "appsScoreMax": 78.92,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.11,
                            "identityScore": 34.69,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.01,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.63,
                            "appsScoreMax": 91.39,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.77,
                            "identityScore": 33.17,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-08",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-08T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.7,
                            "appsScore": 29.04,
                            "appsScoreMax": 78.84,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.11,
                            "identityScore": 34.68,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.01,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.58,
                            "appsScoreMax": 91.27,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.77,
                            "identityScore": 33.16,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-07",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-07T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.7,
                            "appsScore": 29.03,
                            "appsScoreMax": 78.81,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.1,
                            "identityScore": 34.67,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 48.01,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.57,
                            "appsScoreMax": 91.23,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.77,
                            "identityScore": 33.15,
                            "identityScoreMax": 59.78,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-06",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-06T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.68,
                            "appsScore": 29.03,
                            "appsScoreMax": 78.82,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.73,
                            "deviceScoreMax": 16.07,
                            "identityScore": 34.66,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.99,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.57,
                            "appsScoreMax": 91.24,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.74,
                            "identityScore": 33.14,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-05",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-05T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.66,
                            "appsScore": 29.05,
                            "appsScoreMax": 78.87,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.72,
                            "deviceScoreMax": 16.04,
                            "identityScore": 34.65,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.97,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.59,
                            "appsScoreMax": 91.29,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.33,
                            "deviceScoreMax": 11.7,
                            "identityScore": 33.13,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-04",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-04T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.64,
                            "appsScore": 29.07,
                            "appsScoreMax": 78.93,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.7,
                            "deviceScoreMax": 16.01,
                            "identityScore": 34.64,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.96,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.6,
                            "appsScoreMax": 91.34,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.31,
                            "deviceScoreMax": 11.67,
                            "identityScore": 33.12,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-03",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-03T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.64,
                            "appsScore": 29.05,
                            "appsScoreMax": 78.88,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.7,
                            "deviceScoreMax": 16.01,
                            "identityScore": 34.64,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.96,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.58,
                            "appsScoreMax": 91.28,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.3,
                            "deviceScoreMax": 11.67,
                            "identityScore": 33.12,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-02",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-02T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.61,
                            "appsScore": 29.04,
                            "appsScoreMax": 78.84,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.71,
                            "deviceScoreMax": 16.04,
                            "identityScore": 34.62,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.93,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.56,
                            "appsScoreMax": 91.22,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.31,
                            "deviceScoreMax": 11.69,
                            "identityScore": 33.1,
                            "identityScoreMax": 59.79,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-12-01",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-12-01T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.6,
                            "appsScore": 29.03,
                            "appsScoreMax": 78.82,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.71,
                            "deviceScoreMax": 16.05,
                            "identityScore": 34.61,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.92,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.54,
                            "appsScoreMax": 91.18,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.89,
                            "deviceScore": 6.32,
                            "deviceScoreMax": 11.7,
                            "identityScore": 33.09,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-30",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-30T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.58,
                            "appsScore": 29.02,
                            "appsScoreMax": 78.82,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.71,
                            "deviceScoreMax": 16.05,
                            "identityScore": 34.6,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.91,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.54,
                            "appsScoreMax": 91.17,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.89,
                            "deviceScore": 6.32,
                            "deviceScoreMax": 11.7,
                            "identityScore": 33.07,
                            "identityScoreMax": 59.8,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-29",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-29T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.55,
                            "appsScore": 29.04,
                            "appsScoreMax": 78.88,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.33,
                            "deviceScore": 8.7,
                            "deviceScoreMax": 16.03,
                            "identityScore": 34.62,
                            "identityScoreMax": 59.86,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.86,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.56,
                            "appsScoreMax": 91.24,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.31,
                            "deviceScoreMax": 11.69,
                            "identityScore": 33.06,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-28",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-28T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.53,
                            "appsScore": 29.08,
                            "appsScoreMax": 78.99,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.7,
                            "deviceScoreMax": 16.02,
                            "identityScore": 34.66,
                            "identityScoreMax": 59.91,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.84,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.61,
                            "appsScoreMax": 91.37,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.3,
                            "deviceScoreMax": 11.67,
                            "identityScore": 33.07,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-27",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-27T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.52,
                            "appsScore": 29.08,
                            "appsScoreMax": 78.99,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.67,
                            "deviceScoreMax": 15.99,
                            "identityScore": 34.65,
                            "identityScoreMax": 59.91,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.83,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.61,
                            "appsScoreMax": 91.37,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.28,
                            "deviceScoreMax": 11.63,
                            "identityScore": 33.07,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-26",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-26T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.5,
                            "appsScore": 29.09,
                            "appsScoreMax": 79.0,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.67,
                            "deviceScoreMax": 15.99,
                            "identityScore": 34.63,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.81,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.61,
                            "appsScoreMax": 91.38,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.28,
                            "deviceScoreMax": 11.63,
                            "identityScore": 33.06,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-25",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-25T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.49,
                            "appsScore": 29.08,
                            "appsScoreMax": 79.0,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.7,
                            "deviceScoreMax": 16.05,
                            "identityScore": 34.63,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.81,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.61,
                            "appsScoreMax": 91.37,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.31,
                            "deviceScoreMax": 11.7,
                            "identityScore": 33.05,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-24",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-24T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.47,
                            "appsScore": 29.11,
                            "appsScoreMax": 79.06,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.72,
                            "deviceScoreMax": 16.09,
                            "identityScore": 34.62,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.79,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.63,
                            "appsScoreMax": 91.44,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.33,
                            "deviceScoreMax": 11.73,
                            "identityScore": 33.05,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-23",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-23T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.45,
                            "appsScore": 29.11,
                            "appsScoreMax": 79.07,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.74,
                            "deviceScoreMax": 16.11,
                            "identityScore": 34.61,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.78,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.62,
                            "appsScoreMax": 91.42,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.75,
                            "identityScore": 33.04,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-22",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-22T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.43,
                            "appsScore": 29.12,
                            "appsScoreMax": 79.11,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.75,
                            "deviceScoreMax": 16.12,
                            "identityScore": 34.59,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.76,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.63,
                            "appsScoreMax": 91.46,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.9,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.75,
                            "identityScore": 33.02,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-21",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-21T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.4,
                            "appsScore": 29.13,
                            "appsScoreMax": 79.13,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.34,
                            "deviceScore": 8.74,
                            "deviceScoreMax": 16.1,
                            "identityScore": 34.56,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.73,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.64,
                            "appsScoreMax": 91.48,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.74,
                            "identityScore": 32.99,
                            "identityScoreMax": 59.86,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-20",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-20T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.33,
                            "appsScore": 29.16,
                            "appsScoreMax": 79.21,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.35,
                            "deviceScore": 8.74,
                            "deviceScoreMax": 16.11,
                            "identityScore": 34.42,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.66,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.67,
                            "appsScoreMax": 91.57,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.34,
                            "deviceScoreMax": 11.75,
                            "identityScore": 32.89,
                            "identityScoreMax": 59.83,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-19",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-19T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.25,
                            "appsScore": 29.18,
                            "appsScoreMax": 79.28,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.35,
                            "deviceScore": 8.76,
                            "deviceScoreMax": 16.14,
                            "identityScore": 34.32,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.57,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.69,
                            "appsScoreMax": 91.63,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.91,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.78,
                            "identityScore": 32.78,
                            "identityScoreMax": 59.83,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-18",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-18T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 52.12,
                            "appsScore": 29.2,
                            "appsScoreMax": 79.33,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.35,
                            "deviceScore": 8.77,
                            "deviceScoreMax": 16.18,
                            "identityScore": 34.19,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.44,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.71,
                            "appsScoreMax": 91.67,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.36,
                            "deviceScoreMax": 11.8,
                            "identityScore": 32.63,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-17",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-17T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.98,
                            "appsScore": 29.23,
                            "appsScoreMax": 79.4,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.36,
                            "deviceScore": 8.8,
                            "deviceScoreMax": 16.22,
                            "identityScore": 34.09,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.3,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.73,
                            "appsScoreMax": 91.74,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.84,
                            "identityScore": 32.53,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-16",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-16T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.97,
                            "appsScore": 29.2,
                            "appsScoreMax": 79.34,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.35,
                            "deviceScore": 8.8,
                            "deviceScoreMax": 16.22,
                            "identityScore": 34.08,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.29,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.7,
                            "appsScoreMax": 91.66,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.84,
                            "identityScore": 32.52,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-15",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-15T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.93,
                            "appsScore": 29.2,
                            "appsScoreMax": 79.34,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.36,
                            "deviceScore": 8.79,
                            "deviceScoreMax": 16.2,
                            "identityScore": 34.06,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.25,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.7,
                            "appsScoreMax": 91.65,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.38,
                            "deviceScoreMax": 11.83,
                            "identityScore": 32.49,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-14",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-14T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.88,
                            "appsScore": 29.23,
                            "appsScoreMax": 79.42,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.36,
                            "deviceScore": 8.79,
                            "deviceScoreMax": 16.19,
                            "identityScore": 34.03,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.19,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.73,
                            "appsScoreMax": 91.75,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.92,
                            "deviceScore": 6.38,
                            "deviceScoreMax": 11.82,
                            "identityScore": 32.46,
                            "identityScoreMax": 59.82,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-13",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-13T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.83,
                            "appsScore": 29.3,
                            "appsScoreMax": 79.6,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.37,
                            "deviceScore": 8.8,
                            "deviceScoreMax": 16.22,
                            "identityScore": 34.03,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.12,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.8,
                            "appsScoreMax": 91.95,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.94,
                            "deviceScore": 6.39,
                            "deviceScoreMax": 11.85,
                            "identityScore": 32.43,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-12",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-12T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.78,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.71,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.39,
                            "deviceScore": 8.82,
                            "deviceScoreMax": 16.27,
                            "identityScore": 34.01,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.04,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.85,
                            "appsScoreMax": 92.07,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.95,
                            "deviceScore": 6.41,
                            "deviceScoreMax": 11.89,
                            "identityScore": 32.4,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-11",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-11T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.78,
                            "appsScore": 29.3,
                            "appsScoreMax": 79.61,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.38,
                            "deviceScore": 8.84,
                            "deviceScoreMax": 16.31,
                            "identityScore": 34.0,
                            "identityScoreMax": 59.84,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.05,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.8,
                            "appsScoreMax": 91.93,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.95,
                            "deviceScore": 6.43,
                            "deviceScoreMax": 11.93,
                            "identityScore": 32.4,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-10",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-10T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.78,
                            "appsScore": 29.27,
                            "appsScoreMax": 79.52,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.38,
                            "deviceScore": 8.85,
                            "deviceScoreMax": 16.32,
                            "identityScore": 34.0,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.05,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.76,
                            "appsScoreMax": 91.81,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.94,
                            "deviceScore": 6.44,
                            "deviceScoreMax": 11.95,
                            "identityScore": 32.39,
                            "identityScoreMax": 59.81,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-09",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-09T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.76,
                            "appsScore": 29.31,
                            "appsScoreMax": 79.63,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.4,
                            "deviceScore": 8.86,
                            "deviceScoreMax": 16.34,
                            "identityScore": 33.99,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 47.02,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.81,
                            "appsScoreMax": 91.97,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.97,
                            "deviceScore": 6.45,
                            "deviceScoreMax": 11.97,
                            "identityScore": 32.38,
                            "identityScoreMax": 59.85,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-08",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-08T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.7,
                            "appsScore": 29.32,
                            "appsScoreMax": 79.67,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.4,
                            "deviceScore": 8.85,
                            "deviceScoreMax": 16.33,
                            "identityScore": 33.95,
                            "identityScoreMax": 59.88,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.95,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.83,
                            "appsScoreMax": 92.03,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.97,
                            "deviceScore": 6.45,
                            "deviceScoreMax": 11.96,
                            "identityScore": 32.33,
                            "identityScoreMax": 59.86,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-07",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-07T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.66,
                            "appsScore": 29.36,
                            "appsScoreMax": 79.79,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.41,
                            "deviceScore": 8.85,
                            "deviceScoreMax": 16.32,
                            "identityScore": 33.93,
                            "identityScoreMax": 59.89,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.89,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.88,
                            "appsScoreMax": 92.17,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.98,
                            "deviceScore": 6.44,
                            "deviceScoreMax": 11.95,
                            "identityScore": 32.3,
                            "identityScoreMax": 59.86,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-06",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-06T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.62,
                            "appsScore": 29.39,
                            "appsScoreMax": 79.87,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.84,
                            "deviceScoreMax": 16.32,
                            "identityScore": 33.91,
                            "identityScoreMax": 59.89,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.85,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.92,
                            "appsScoreMax": 92.27,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.43,
                            "deviceScoreMax": 11.94,
                            "identityScore": 32.28,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-05",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-05T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.62,
                            "appsScore": 29.38,
                            "appsScoreMax": 79.82,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.84,
                            "deviceScoreMax": 16.32,
                            "identityScore": 33.91,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.85,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.89,
                            "appsScoreMax": 92.2,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.43,
                            "deviceScoreMax": 11.94,
                            "identityScore": 32.28,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-04",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-04T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.61,
                            "appsScore": 29.35,
                            "appsScoreMax": 79.74,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.86,
                            "deviceScoreMax": 16.36,
                            "identityScore": 33.9,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.85,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.86,
                            "appsScoreMax": 92.1,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.45,
                            "deviceScoreMax": 11.98,
                            "identityScore": 32.27,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-03",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-03T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.57,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.73,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.87,
                            "deviceScoreMax": 16.38,
                            "identityScore": 33.86,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.8,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.84,
                            "appsScoreMax": 92.06,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.46,
                            "deviceScoreMax": 12.0,
                            "identityScore": 32.23,
                            "identityScoreMax": 59.87,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-02",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-02T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.53,
                            "appsScore": 29.33,
                            "appsScoreMax": 79.7,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.87,
                            "deviceScoreMax": 16.39,
                            "identityScore": 33.83,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.76,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.83,
                            "appsScoreMax": 92.03,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.47,
                            "deviceScoreMax": 12.01,
                            "identityScore": 32.18,
                            "identityScoreMax": 59.88,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-11-01",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-11-01T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.48,
                            "appsScore": 29.35,
                            "appsScoreMax": 79.75,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.88,
                            "deviceScoreMax": 16.39,
                            "identityScore": 33.8,
                            "identityScoreMax": 59.91,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.69,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.85,
                            "appsScoreMax": 92.09,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.47,
                            "deviceScoreMax": 12.02,
                            "identityScore": 32.15,
                            "identityScoreMax": 59.89,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-31",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-31T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.47,
                            "appsScore": 29.35,
                            "appsScoreMax": 79.77,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.86,
                            "deviceScoreMax": 16.38,
                            "identityScore": 33.79,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.68,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.86,
                            "appsScoreMax": 92.11,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.46,
                            "deviceScoreMax": 12.02,
                            "identityScore": 32.14,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-30",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-30T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.44,
                            "appsScore": 29.36,
                            "appsScoreMax": 79.79,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 8.85,
                            "deviceScoreMax": 16.38,
                            "identityScore": 33.77,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.65,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.87,
                            "appsScoreMax": 92.15,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.46,
                            "deviceScoreMax": 12.02,
                            "identityScore": 32.12,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-29",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-29T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.41,
                            "appsScore": 29.36,
                            "appsScoreMax": 79.81,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 8.85,
                            "deviceScoreMax": 16.4,
                            "identityScore": 33.76,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.62,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.87,
                            "appsScoreMax": 92.17,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.46,
                            "deviceScoreMax": 12.03,
                            "identityScore": 32.1,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-28",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-28T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.37,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.78,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 8.88,
                            "deviceScoreMax": 16.44,
                            "identityScore": 33.73,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.57,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.85,
                            "appsScoreMax": 92.11,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.48,
                            "deviceScoreMax": 12.07,
                            "identityScore": 32.06,
                            "identityScoreMax": 59.9,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-27",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-27T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.35,
                            "appsScore": 29.32,
                            "appsScoreMax": 79.73,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.9,
                            "deviceScoreMax": 16.49,
                            "identityScore": 33.71,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.55,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.81,
                            "appsScoreMax": 92.03,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.5,
                            "deviceScoreMax": 12.12,
                            "identityScore": 32.05,
                            "identityScoreMax": 59.91,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-26",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-26T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.33,
                            "appsScore": 29.28,
                            "appsScoreMax": 79.67,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.9,
                            "deviceScoreMax": 16.49,
                            "identityScore": 33.7,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.53,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.77,
                            "appsScoreMax": 91.95,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.51,
                            "deviceScoreMax": 12.13,
                            "identityScore": 32.03,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-25",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-25T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.31,
                            "appsScore": 29.28,
                            "appsScoreMax": 79.68,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.42,
                            "deviceScore": 8.9,
                            "deviceScoreMax": 16.48,
                            "identityScore": 33.68,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.5,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.77,
                            "appsScoreMax": 91.96,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.99,
                            "deviceScore": 6.51,
                            "deviceScoreMax": 12.12,
                            "identityScore": 32.0,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-24",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-24T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.27,
                            "appsScore": 29.31,
                            "appsScoreMax": 79.77,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.77,
                            "identityScore": 33.65,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.46,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.81,
                            "appsScoreMax": 92.08,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.0,
                            "deviceScore": 6.64,
                            "deviceScoreMax": 12.46,
                            "identityScore": 31.97,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-23",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-23T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.22,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.85,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.62,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.4,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.85,
                            "appsScoreMax": 92.17,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.01,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.92,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-22",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-22T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.18,
                            "appsScore": 29.36,
                            "appsScoreMax": 79.89,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.43,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.87,
                            "identityScore": 33.58,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.36,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.86,
                            "appsScoreMax": 92.21,
                            "dataScore": 0.49,
                            "dataScoreMax": 4.01,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.89,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-21",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-21T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.16,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.83,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.39,
                            "deviceScore": 9.01,
                            "deviceScoreMax": 16.88,
                            "identityScore": 33.56,
                            "identityScoreMax": 59.95,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.35,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.83,
                            "appsScoreMax": 92.12,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.95,
                            "deviceScore": 6.67,
                            "deviceScoreMax": 12.57,
                            "identityScore": 31.87,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-20",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-20T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.17,
                            "appsScore": 29.32,
                            "appsScoreMax": 79.77,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.28,
                            "deviceScore": 9.01,
                            "deviceScoreMax": 16.88,
                            "identityScore": 33.55,
                            "identityScoreMax": 59.95,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.36,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.8,
                            "appsScoreMax": 92.03,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.81,
                            "deviceScore": 6.67,
                            "deviceScoreMax": 12.57,
                            "identityScore": 31.86,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-19",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-19T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.17,
                            "appsScore": 29.3,
                            "appsScoreMax": 79.72,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.17,
                            "deviceScore": 9.01,
                            "deviceScoreMax": 16.88,
                            "identityScore": 33.54,
                            "identityScoreMax": 59.95,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.37,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.78,
                            "appsScoreMax": 91.96,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.67,
                            "deviceScore": 6.67,
                            "deviceScoreMax": 12.57,
                            "identityScore": 31.85,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-18",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-18T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.15,
                            "appsScore": 29.31,
                            "appsScoreMax": 79.74,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.15,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.53,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.36,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.78,
                            "appsScoreMax": 91.98,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.65,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.84,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-17",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-17T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.13,
                            "appsScore": 29.34,
                            "appsScoreMax": 79.82,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.16,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.85,
                            "identityScore": 33.52,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.34,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.82,
                            "appsScoreMax": 92.06,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.65,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.82,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-16",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-16T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.13,
                            "appsScore": 29.38,
                            "appsScoreMax": 79.86,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.16,
                            "deviceScore": 8.99,
                            "deviceScoreMax": 16.84,
                            "identityScore": 33.52,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.34,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.85,
                            "appsScoreMax": 92.11,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.66,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.53,
                            "identityScore": 31.82,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-15",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-15T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.13,
                            "appsScore": 29.39,
                            "appsScoreMax": 79.86,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.17,
                            "deviceScore": 8.99,
                            "deviceScoreMax": 16.84,
                            "identityScore": 33.52,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.34,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.86,
                            "appsScoreMax": 92.09,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.66,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.53,
                            "identityScore": 31.82,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-14",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-14T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.13,
                            "appsScore": 29.38,
                            "appsScoreMax": 79.82,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.17,
                            "deviceScore": 8.99,
                            "deviceScoreMax": 16.85,
                            "identityScore": 33.51,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.35,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.84,
                            "appsScoreMax": 92.02,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.66,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.82,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-13",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-13T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.13,
                            "appsScore": 29.37,
                            "appsScoreMax": 79.79,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.17,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.51,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.35,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.82,
                            "appsScoreMax": 91.97,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.66,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.82,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-12",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-12T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.12,
                            "appsScore": 29.36,
                            "appsScoreMax": 79.77,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.17,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.5,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.34,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.81,
                            "appsScoreMax": 91.94,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.67,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.81,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-11",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-11T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.11,
                            "appsScore": 29.39,
                            "appsScoreMax": 79.83,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.18,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.5,
                            "identityScoreMax": 59.98,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.33,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.84,
                            "appsScoreMax": 92.01,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.67,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.81,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-10",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-10T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.1,
                            "appsScore": 29.45,
                            "appsScoreMax": 80.0,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.19,
                            "deviceScore": 9.0,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.5,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.31,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.92,
                            "appsScoreMax": 92.23,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.68,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.54,
                            "identityScore": 31.81,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-09",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-09T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.09,
                            "appsScore": 29.47,
                            "appsScoreMax": 80.05,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.19,
                            "deviceScore": 8.99,
                            "deviceScoreMax": 16.84,
                            "identityScore": 33.5,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.31,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.93,
                            "appsScoreMax": 92.26,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.69,
                            "deviceScore": 6.64,
                            "deviceScoreMax": 12.52,
                            "identityScore": 31.81,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-08",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-08T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.07,
                            "appsScore": 29.48,
                            "appsScoreMax": 80.1,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.19,
                            "deviceScore": 8.99,
                            "deviceScoreMax": 16.86,
                            "identityScore": 33.5,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.3,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.95,
                            "appsScoreMax": 92.3,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.69,
                            "deviceScore": 6.64,
                            "deviceScoreMax": 12.53,
                            "identityScore": 31.8,
                            "identityScoreMax": 59.97,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-07",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-07T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.05,
                            "appsScore": 29.49,
                            "appsScoreMax": 80.11,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.2,
                            "deviceScore": 9.01,
                            "deviceScoreMax": 16.89,
                            "identityScore": 33.49,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.3,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.94,
                            "appsScoreMax": 92.27,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.7,
                            "deviceScore": 6.65,
                            "deviceScoreMax": 12.55,
                            "identityScore": 31.8,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-06",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-06T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.03,
                            "appsScore": 29.5,
                            "appsScoreMax": 80.12,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.2,
                            "deviceScore": 9.02,
                            "deviceScoreMax": 16.91,
                            "identityScore": 33.47,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.29,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.93,
                            "appsScoreMax": 92.25,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.7,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.79,
                            "identityScoreMax": 59.96,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-05",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-05T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 51.01,
                            "appsScore": 29.52,
                            "appsScoreMax": 80.19,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.21,
                            "deviceScore": 9.03,
                            "deviceScoreMax": 16.93,
                            "identityScore": 33.46,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.28,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.94,
                            "appsScoreMax": 92.27,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.71,
                            "deviceScore": 6.67,
                            "deviceScoreMax": 12.58,
                            "identityScore": 31.78,
                            "identityScoreMax": 59.95,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-04",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-04T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.99,
                            "appsScore": 29.52,
                            "appsScoreMax": 80.19,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.21,
                            "deviceScore": 9.03,
                            "deviceScoreMax": 16.92,
                            "identityScore": 33.45,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.29,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.93,
                            "appsScoreMax": 92.23,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.71,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.57,
                            "identityScore": 31.78,
                            "identityScoreMax": 59.95,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-03",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-03T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.96,
                            "appsScore": 29.57,
                            "appsScoreMax": 80.31,
                            "dataScore": 0.45,
                            "dataScoreMax": 3.22,
                            "deviceScore": 9.03,
                            "deviceScoreMax": 16.93,
                            "identityScore": 33.43,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.28,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.96,
                            "appsScoreMax": 92.31,
                            "dataScore": 0.48,
                            "dataScoreMax": 3.71,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.77,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-02",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-02T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.91,
                            "appsScore": 29.63,
                            "appsScoreMax": 80.48,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.23,
                            "deviceScore": 9.04,
                            "deviceScoreMax": 16.95,
                            "identityScore": 33.41,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.25,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 33.0,
                            "appsScoreMax": 92.42,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.72,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.55,
                            "identityScore": 31.75,
                            "identityScoreMax": 59.94,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-10-01",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-10-01T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.86,
                            "appsScore": 29.67,
                            "appsScoreMax": 80.59,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.23,
                            "deviceScore": 9.06,
                            "deviceScoreMax": 16.98,
                            "identityScore": 33.38,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.23,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 33.0,
                            "appsScoreMax": 92.44,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.73,
                            "deviceScore": 6.66,
                            "deviceScoreMax": 12.56,
                            "identityScore": 31.74,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-09-30",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-09-30T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.81,
                            "appsScore": 29.73,
                            "appsScoreMax": 80.76,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.25,
                            "deviceScore": 9.09,
                            "deviceScoreMax": 17.05,
                            "identityScore": 33.36,
                            "identityScoreMax": 59.99,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.22,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 33.02,
                            "appsScoreMax": 92.48,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.73,
                            "deviceScore": 6.68,
                            "deviceScoreMax": 12.6,
                            "identityScore": 31.72,
                            "identityScoreMax": 59.91,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-09-29",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-09-29T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.76,
                            "appsScore": 29.77,
                            "appsScoreMax": 80.87,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.25,
                            "deviceScore": 9.11,
                            "deviceScoreMax": 17.08,
                            "identityScore": 33.34,
                            "identityScoreMax": 60.0,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.21,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 33.02,
                            "appsScoreMax": 92.48,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.74,
                            "deviceScore": 6.68,
                            "deviceScoreMax": 12.61,
                            "identityScore": 31.72,
                            "identityScoreMax": 59.92,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                },
                {
                    "id": "4cda6fa4-1377-4e12-827a-362a904d8b84_2023-09-28",
                    "azureTenantId": "4cda6fa4-1377-4e12-827a-362a904d8b84",
                    "activeUserCount": 9,
                    "createdDateTime": "2023-09-28T00:00:00Z",
                    "currentScore": 53.0,
                    "enabledServices": [
                        "HasEOP",
                        "HasSPOP1",
                        "HasAADFree"
                    ],
                    "licensedUserCount": 0,
                    "maxScore": 64.0,
                    "vendorInformation": {
                        "provider": "SecureScore",
                        "providerVersion": null,
                        "subProvider": null,
                        "vendor": "Microsoft"
                    },
                    "averageComparativeScores": [
                        {
                            "basis": "AllTenants",
                            "averageScore": 50.76,
                            "appsScore": 29.75,
                            "appsScoreMax": 80.81,
                            "dataScore": 0.46,
                            "dataScoreMax": 3.25,
                            "deviceScore": 9.1,
                            "deviceScoreMax": 17.06,
                            "identityScore": 33.34,
                            "identityScoreMax": 60.01,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        },
                        {
                            "basis": "TotalSeats",
                            "averageScore": 46.21,
                            "SeatSizeRangeLowerValue": "1",
                            "SeatSizeRangeUpperValue": "100",
                            "appsScore": 32.99,
                            "appsScoreMax": 92.4,
                            "dataScore": 0.49,
                            "dataScoreMax": 3.74,
                            "deviceScore": 6.67,
                            "deviceScoreMax": 12.59,
                            "identityScore": 31.72,
                            "identityScoreMax": 59.93,
                            "infrastructureScore": 0.0,
                            "infrastructureScoreMax": 0.0
                        }
                    ],
                    "controlScores": [
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_restrictanonymousjoin_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "current status: ",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_pstnusersbypasslobby_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_externalrequestcontrol_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_anonymousstartmeeting_v1",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_autoadmitusers_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Apps",
                            "controlName": "meeting_designatedpresenter_v1",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "IntegratedApps",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have no user consent policy in place.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "PWAgePolicyNew",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "Your current policy is set to let passwords expire.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "BlockLegacyAuthentication",
                            "description": null,
                            "score": 8.0,
                            "implementationStatus": "You have 0 of 0 users that don't have legacy authentication blocked.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "MFARegistrationV2",
                            "description": null,
                            "score": 9.0,
                            "implementationStatus": "You have 0 out of 0 users that aren’t registered with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "AdminMFAV2",
                            "description": null,
                            "score": 10.0,
                            "implementationStatus": "You have 0 out of 0 users with administrative roles that aren’t registered and protected with MFA.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SigninRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 of 0 users that don't have the sign-in risky policy turned on.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "UserRiskPolicy",
                            "description": null,
                            "score": 7.0,
                            "implementationStatus": "You have 0 users out of 0 that do not have user risk policy enabled.",
                            "scoreInPercentage": 100.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "OneAdmin",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You currently have  global admins.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "RoleOverlap",
                            "description": null,
                            "score": 0.0,
                            "implementationStatus": "You have  users with least privileged administrative roles.",
                            "scoreInPercentage": 0.0
                        },
                        {
                            "controlCategory": "Identity",
                            "controlName": "SelfServicePasswordReset",
                            "description": null,
                            "score": 1.0,
                            "implementationStatus": "You have 0 of 0 users who don't have self-service password reset enabled.",
                            "scoreInPercentage": 100.0
                        }
                    ]
                }
            ]
        }
        console.log("=====", data)
        try{
       return data;
        }catch(error){
            throw error;
        }    
    }  ,
}


