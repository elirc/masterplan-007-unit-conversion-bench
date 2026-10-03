# Rebuild Unit Conversion Bench through small verified slices

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

This is a hypothetical reconstruction exercise using the existing reference as a comparison point. Work on a practice branch or a separate scratch copy. Do not erase the working reference. Your goal is to recover the important decisions from requirements, not reproduce every character or configuration file from memory.

## Session zero: write a contract you can challenge

Supported units are mm, cm and m. Values must be finite numbers and nonnegative. Zero is valid. Conversion uses a unit ratio, rejects nonfinite output and leaves display rounding out of the core.

Your target skill is functions and explicit input contracts. Write three examples before implementation: one ordinary success, one boundary distinction and one recovery or repeat sequence. Reuse the fixed reference fixtures only after making a prediction. If your new example is outside the documented scope, decide whether to reject it or explicitly expand the contract; do not let an incidental implementation choice decide silently.

Write a short non-goal list tied to this exercise. Non-goals keep an assistant from adding a database, a UI framework or a broad refactor before you understand the central rule. For static layout work, a meaningful non-goal may be scripting interactions that native HTML already handles. For stateful work, it may be remote persistence or a global state container.

## Slice 1: Begin with a dimensional example

**Reference context:** Write 1m = 100cm = 1000mm and cancel units on paper. To convert 12.5cm into millimeters, multiply by ten. To convert millimeters into meters, divide by one thousand. These manual anchors are better starting tests than comparing the function with a second copy of its own formula.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **12.5 cm → mm → 125**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 2: Make the allowed domain explicit

**Reference context:** Negative values are rejected because this workshop models a nonnegative length, not a signed displacement. Zero is a useful measurement and should not be rejected with a generic falsy check. The function also rejects strings even when they look numeric, because parsing belongs to its caller.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **1000 mm → m → 1**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 3: Inspect arithmetic limits

**Reference context:** JavaScript numbers are not arbitrary-precision decimal measurements. The implementation avoids a needless huge intermediate by multiplying by the unit ratio. It rejects a nonfinite result, but it does not promise exact decimal arithmetic for every representable number. Tests use tolerance for round trips where strict equality would test binary representation rather than the intended conversion.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **0 m → cm → 0**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 4: Keep formatting at the edge

**Reference context:** The UI prints the returned result without modifying the underlying arithmetic. If you later want a fixed number of decimal places, make that a display choice and preserve the raw result for further calculations. Rounding after each conversion can cause repeated conversions to drift much more than necessary.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **-1 cm → mm → RangeError**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Reconstruct the whole path without the guide

12.5 cm → validate numeric input and own unit keys → ratio 10/1 → multiply 12.5 by 10 → return 125 → UI displays 12.5 cm = 125 mm.

Close this page and redraw that route from memory using your own labels. Open the code only to resolve a specific uncertainty. Then trace a different valid input and one boundary. If your picture requires a hidden value that you cannot locate in the source, investigate it; diagrams can invent state just as easily as prose can.

## Compare your implementation fairly

First compare behavior and evidence. Only then compare style and abstractions. A shorter implementation may be harder for you to explain; a longer implementation may duplicate a rule that later drifts. State the concrete tradeoff. Do not treat matching the reference line for line as the only successful outcome.

## Finish with a teach-back

Explain why `convertLength` is enough for its present responsibility, which work remains in `public/app.js`, and which future requirement would justify changing that boundary. Answer the original transfer question: What assumptions must a caller know before invoking this function? Keep the answer short enough that another junior can challenge it with an example.
