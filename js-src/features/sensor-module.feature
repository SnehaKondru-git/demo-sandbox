Feature: Sensor module

  @tests:spec-sensor-reading-warning
  Scenario: Test sensor reading
    Given Application is open
    When Data of 8 is entered
    And Form is submitted
    Then sensor is not read
    And An error message is shown
