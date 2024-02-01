Feature: Admin Dashboard screen
  User can log into system as Admin
  First screen which user sees is dashboard with general details about packages

  Background:
    Given I'm "admin"
    And I see "dashboard"

  Scenario: Admin successfully preview recent packages widgets on Dashboard
    * I see recent new packages
    * I see recent packages in transit
    * I see recent packages delivered

  Scenario: Admin successfully preview number of packages by status
    * I see number of recent new packages
    * I see number of recent packages in transit
    * I see number of recent packages delivered

  Scenario: Admin see attention message
    * I see message with number of packages requires attention


#
#Given I'm Admin
#When I'm on packages screen
#Then I can see packages list
#
#Given I'm Admin
#When I'm on packages screen
#And I click on package item
#Then I can see package products
#
#Given I'm Admin
#When I tap on logout button
#Then I'm navigated to login screen
