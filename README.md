## Challenge outline: Tax Calculator

Design a website that allows for tax calculation based on a users input.

![Screenshot 2024-04-07 at 12.06.20 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/983632c5-ee66-4f64-a1a6-b3eeff04ddb8/b2775372-5b3a-462f-b309-5e3e512f457a/Screenshot_2024-04-07_at_12.06.20_AM.png)

![Screenshot 2024-04-07 at 12.06.37 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/983632c5-ee66-4f64-a1a6-b3eeff04ddb8/24606b4a-5b8a-447c-8655-67dab0a7c472/Screenshot_2024-04-07_at_12.06.37_AM.png)

### References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

### Notes

- The assignment has to be done in HTML, CSS and Javascript. You can use Bootstrap and Jquery but no other library/design system is allowed.
- You're free to make assumptions, please make sure they are mentioned in the README.
- Design is for representation purposes only, you are free to modify it, but all the functionalities as shown in the design (and as listed in requirements) should be present.
- Make sure all edge cases are thought out throughly and handled.

### Live Link

- https://fyle-taxcalculator.netlify.app/
