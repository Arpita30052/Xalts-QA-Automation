Test Plan for Xalts Blockchain Portal

1. Introduction

This test plan outlines the testing strategy for the Xalts Blockchain Portal, covering various testing types including functional, UI, API, security, performance, and negative testing.

2. Scope

The testing will cover the following functionalities:

Sign Up

Sign In

Sign Out

Submit Request to Onboard Nodes to Existing Blockchain

Submit Request to Create a New Private Blockchain

3. Test Strategy

3.1 Functional Testing

Functional testing ensures that each feature works as expected.

Test Cases:

Sign Up

Valid email and password → Success

Invalid email format → Error message

Password less than required characters → Error message

Existing email → Error message

Sign In

Valid credentials → Successful login

Invalid password → Error message

Non-existing account → Error message

Sign Out

Click on sign-out button → Redirect to login page

Submit Request To Onboard Nodes to Existing Blockchain

Add valid node details → Success

Add invalid node ID format → Error message

Add invalid IP format → Error message

Submit with empty node list → Error message

Submit Request To Create New Private Blockchain

Valid network name and wallet address → Success

Invalid wallet address format → Error message

Submit with empty fields → Error message

3.2 UI Testing

Verify button placements, input fields, and alignment

Check responsiveness on different screen sizes

3.3 API Testing

Validate API responses and status codes

Verify error handling for incorrect payloads

3.4 Security Testing

Ensure password hashing

Test SQL injection scenarios

Verify session expiration after inactivity

3.5 Performance Testing

Load test sign-in with multiple users

Measure response time for form submissions

3.6 Negative Testing

Attempt actions with missing mandatory fields

Enter invalid data formats
