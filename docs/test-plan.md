# Test Plan for Xalts Blockchain Portal

## 1. Introduction  
This test plan outlines the testing strategy for the Xalts Blockchain Portal, covering various testing types including functional, UI, API, security, performance, and negative testing.

## 2. Scope  
The testing will cover the following functionalities:  
- Sign Up  
- Sign In  
- Sign Out  
- Submit Request to Onboard Nodes to Existing Blockchain  
- Submit Request to Create a New Private Blockchain  

## 3. Test Strategy  

### 3.1 Functional Testing  
Functional testing ensures that each feature works as expected.  

#### Test Cases:  

### **Sign Up**  
✅ **Positive Test Cases:**  
1. Sign up with valid email and password → Success  
2. Sign up with a strong password (including uppercase, lowercase, special characters, and numbers) → Success  
3. Sign up using different valid email domains (e.g., Gmail, Yahoo, Outlook) → Success  

❌ **Negative Test Cases:**  
4. Sign up with an invalid email format (e.g., `testuser@com`) → Error message  
5. Sign up with a password less than required characters → Error message  
6. Sign up with an existing email → Error message  
7. Sign up with only spaces in the email field → Error message  
8. Sign up with a password containing only numbers → Error message  
9. Sign up with an empty password field → Error message  

### **Sign In**  
✅ **Positive Test Cases:**  
1. Login with valid credentials → Successful login  
2. Login with a different valid user account → Successful login  
3. Login after refreshing the page → Successful login  

❌ **Negative Test Cases:**  
4. Login with an invalid password → Error message  
5. Login with a non-existing account → Error message  
6. Login with spaces before/after email → Error message  

### **Sign Out**  
✅ **Positive Test Cases:**  
1. Click on sign-out button → Redirect to Dashboard  

### **Submit Request To Onboard Nodes to Existing Blockchain**  
✅ **Positive Test Cases:**  
1. Add valid node details → Success  
2. Add multiple valid nodes at once → Success  
3. Submit request and verify the request ID is generated → Success  

❌ **Negative Test Cases:**  
4. Add invalid node ID format → Error message  
5. Add invalid IP format → Error message  
6. Submit with empty node list → ADD node button will not be enabled  

### **Submit Request To Create New Private Blockchain**  
✅ **Positive Test Cases:**  
1. Create a private blockchain with valid network name and wallet address → Success  
2. Create a private blockchain with a long but valid network name → Success  

❌ **Negative Test Cases:**  
3. Create a blockchain with an invalid wallet address format → Error message  
4. Submit request with an empty network name → Submit button will not be enabled 
5. Submit request with special characters in the network name → Error message  

### 3.2 UI Testing  
- Verify button placements, input fields, and alignment  
- Check responsiveness on different screen sizes  

### 3.3 API Testing  
- Validate API responses and status codes  
- Verify error handling for incorrect payloads  
- Ensure API response time meets performance expectations  

### 3.4 Security Testing  
- Ensure password hashing  
- Verify session expiration after inactivity  

### 3.5 Performance Testing  
- Load test sign-in with multiple users  
- Measure response time for form submissions  
- Verify system behavior under high user load  

### 3.6 Negative Testing  
- Attempt actions with missing mandatory fields  
- Enter invalid data formats  

## 4. Automation Scope  
Automated test cases will be written for:  
1. Sign Up  
2. Sign In  
3. Sign Out   
