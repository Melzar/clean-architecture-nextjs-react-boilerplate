Feature: Admin Clients screen
  Admin can preview clients list and also have an access to client details and related packages

  Background:
    Given I'm "admin"
    And I see "clients"

  Scenario: Admin preview clients list
    * I see client list

  Scenario: Admin previews specific client details and packages
    When I click on client row
    Then I see client packages
