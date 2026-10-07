# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a display precision option

**Hint 1 — ownership:** Begin from the result line in `public/app.js`. Allow the UI to choose displayed decimal places while retaining the raw conversion result.

**Hint 2 — reasoning:** Revisit the decision “Avoid unnecessary intermediate overflow”. Ask yourself: Explain what the finite-result check proves and what it does not.

**Answer direction:** A defensible solution demonstrates this observable result: Changing display precision does not change subsequent arithmetic. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add kilometers

**Hint 1 — ownership:** Begin from the `millimetersPerUnit` table and both unit selects. Extend the unit table and both controls, then add reference examples.

**Hint 2 — reasoning:** Revisit the decision “Centralize unit meaning in one table”. Ask yourself: Derive centimeters to meters without looking at the implementation.

**Answer direction:** A defensible solution demonstrates this observable result: 1km→1000m and an unknown unit rejection both pass. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a swap action

**Hint 1 — ownership:** Begin from the submit handler in `public/app.js`. Swap source and destination units while deciding whether to reuse the displayed result.

**Hint 2 — reasoning:** Revisit the decision “Centralize unit meaning in one table”. Ask yourself: Derive centimeters to meters without looking at the implementation.

**Answer direction:** A defensible solution demonstrates this observable result: Document the choice and handle a blank input without inventing a value. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Show the conversion factor

**Hint 1 — ownership:** Begin from the ratio expression in `convertLength`. Display the ratio used for the chosen unit pair.

**Hint 2 — reasoning:** Revisit the decision “Centralize unit meaning in one table”. Ask yourself: Derive centimeters to meters without looking at the implementation.

**Answer direction:** A defensible solution demonstrates this observable result: A learner can multiply the input by that factor to reproduce the result. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Test very small values

**Hint 1 — ownership:** Begin from `test/core.test.js`. Add documented examples near the practical limits of floating-point representation.

**Hint 2 — reasoning:** Revisit the decision “Avoid unnecessary intermediate overflow”. Ask yourself: Explain what the finite-result check proves and what it does not.

**Answer direction:** A defensible solution demonstrates this observable result: Distinguish approximation or underflow from a wrong unit factor. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Extract input parsing

**Hint 1 — ownership:** Begin from `numberFromInput`, which already exists inside `public/app.js` (the open work is making it testable outside the browser). Create a small UI parsing function with explicit blank, invalid and zero cases.

**Hint 2 — reasoning:** Revisit the decision “Check own properties”. Ask yourself: Explain why a truthy property lookup is weaker than Object.hasOwn here.

**Answer direction:** A defensible solution demonstrates this observable result: The core still accepts numbers only and can be used independently. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

12.5 cm → validate numeric input and own unit keys → ratio 10/1 → multiply 12.5 by 10 → return 125 → UI displays 12.5 cm = 125 mm.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
