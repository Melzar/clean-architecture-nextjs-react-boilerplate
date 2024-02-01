Feature: Admin Packages screen
  Admin can preview packages list

  Background:
    Given I'm "admin"
    And I see "packages"

  Scenario: Admin preview packages list
    * I see packages list

  Scenario: Admin see widgets with number of packages in specific status
    * I see new today packages
    * I see in delivery packages
    * I see attention needed packages
    * I see completed today packages
