# Hazy Calculator

## Instructions

In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. Your task is to create a `calculate` function which will properly calculate the answer given the array of values given the rules outlined below.

## Calculation Rules

The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)

Each input should be either a number or an operand (`+`, `-`, `*`, `/`)

Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:

- if Stringified numbers (eg. `'2'`) should be treated as numbers
- if `NULL` should be treated as zero
- if `undefined` values should be ignored
- if Empty string values (eg. `''`) should be ignored
- if Non-numeric values (eg. `'foo'`) should be ignored
