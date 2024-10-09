# Web Hack Odyssey: DOM-based XSS Lab

## Overview

Welcome to the **vulnerabilityvoyage**! This repository contains a lab focused on demonstrating and exploiting a **DOM-based Cross-Site Scripting (XSS)** vulnerability. Participants will learn how to identify, exploit, and understand the implications of this vulnerability in web applications.

## Lab Description

In this lab, you will encounter a DOM-based XSS vulnerability on the feedback page. The application uses the jQuery library to modify the `href` attribute of an anchor element based on the `location.search` query parameters. Your goal is to manipulate the `returnPath` query to trigger an alert displaying `document.cookie`.

### Objective

- Identify the DOM-based XSS vulnerability on the feedback page.
- Manipulate the `returnPath` query parameter in the URL.
- Trigger an alert that displays `document.cookie`.

## Tasks

### Task 1: Exploit the DOM XSS

#### Description
In this task, you will exploit the DOM-based XSS vulnerability found on the feedback page.

#### Steps to Solve

1. Access the feedback page and analyze the functionality.
2. Modify the `returnPath` query parameter in the URL to inject a JavaScript payload.
3. Trigger the alert that displays `document.cookie`.

#### Hints
- Use the browser's developer tools to inspect the feedback page.
- Experiment with different values for the `returnPath` parameter.
- Consider using `javascript:` to execute your payload.

#### Solution
Change the query parameter `returnPath` to:
```javascript
javascript:alert(document.cookie)
```
Hit enter and click the "back" link to see the alert.

## Questions

1. **What is the flag for successfully exploiting the DOM-based XSS vulnerability in this lab?**
   - Answer: The flag is **FLAG{YUBI_£34527}**. (Replace with your actual flag once the lab is solved.)

2. **How can you retrieve the flag after solving the DOM-based XSS vulnerability?**
   - Answer: By triggering the alert with `document.cookie`, which may contain the flag if the application is set up to include it.

3. **What specific action must be performed to display the flag in the navigation bar?**
   - Answer: Enter the correct flag in the input box on the home page, and upon submission, it will display the congratulatory message along with the flag.

4. **What does the presence of the flag indicate in the context of this lab?**
   - Answer: The presence of the flag indicates that the user has successfully exploited the DOM-based XSS vulnerability and completed the task.


## Conclusion

This lab provides a hands-on experience with a real-world vulnerability, allowing participants to enhance their skills in web security. By completing this lab, you will gain valuable insights into how DOM-based XSS vulnerabilities can be exploited and how to mitigate such risks in your own applications.
