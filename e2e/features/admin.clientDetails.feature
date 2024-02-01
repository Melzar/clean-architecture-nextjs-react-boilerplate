Feature: Admin Client Details screen
  Admin can preview client details to see client packages and widgets with number of packages in specific status

  Background:
    Given I'm "admin"


  Scenario: Admin successfully preview client details list
    Given I see client details
    Then I see client packages

  Scenario: Admin see widgets with number of packages in specific status
    Given I see client details
    * I see client new today packages
    * I see client in delivery packages
    * I see client attention needed packages
    * I see client completed today packages
