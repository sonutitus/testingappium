Feature: Test Login Functionality 
  Scenario Outline: Verify login functionality with valid userdetails

    Given I am on the login page
    When user enters username:'<username>' and password:'<password>'
    And user clicks on login button
    Then I should see a Products label

    Examples:
      | username        | password |
      | bob@example.com | 10203040 | 
