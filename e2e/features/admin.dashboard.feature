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

