# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Add a display precision option

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Allow the UI to choose displayed decimal places while retaining the raw conversion result.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Changing display precision does not change subsequent arithmetic.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Changing display precision does not change subsequent arithmetic.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Add kilometers

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Extend the unit table and both controls, then add reference examples.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: 1km→1000m and an unknown unit rejection both pass.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** 1km→1000m and an unknown unit rejection both pass.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Add a swap action

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Swap source and destination units while deciding whether to reuse the displayed result.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Document the choice and handle a blank input without inventing a value.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Document the choice and handle a blank input without inventing a value.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Show the conversion factor

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Display the ratio used for the chosen unit pair.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: A learner can multiply the input by that factor to reproduce the result.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** A learner can multiply the input by that factor to reproduce the result.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Test very small values

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add documented examples near the practical limits of floating-point representation.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Distinguish approximation or underflow from a wrong unit factor.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Distinguish approximation or underflow from a wrong unit factor.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Extract input parsing

**User need:** As a learner or user of Unit Conversion Bench, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Create a small UI parsing function with explicit blank, invalid and zero cases.

**Implementation plan:**

1. Trace `convertLength` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The core still accepts numbers only and can be used independently.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The core still accepts numbers only and can be used independently.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
