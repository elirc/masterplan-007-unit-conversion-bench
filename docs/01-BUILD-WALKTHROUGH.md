# Building Unit Conversion Bench, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Supported units are mm, cm and m. Values must be finite numbers and nonnegative. Zero is valid. Conversion uses a unit ratio, rejects nonfinite output and leaves display rounding out of the core.

The smallest useful result answers this user need: A maker needs trustworthy conversions between millimeters, centimeters and meters. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Begin with a dimensional example

Write 1m = 100cm = 1000mm and cancel units on paper. To convert 12.5cm into millimeters, multiply by ten. To convert millimeters into meters, divide by one thousand. These manual anchors are better starting tests than comparing the function with a second copy of its own formula.

**Pause and produce evidence:** 12.5 cm → mm. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Make the allowed domain explicit

Negative values are rejected because this workshop models a nonnegative length, not a signed displacement. Zero is a useful measurement and should not be rejected with a generic falsy check. The function also rejects strings even when they look numeric, because parsing belongs to its caller.

**Pause and produce evidence:** -1 cm → mm. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Inspect arithmetic limits

JavaScript numbers are not arbitrary-precision decimal measurements. The implementation avoids a needless huge intermediate by multiplying by the unit ratio. It rejects a nonfinite result, but it does not promise exact decimal arithmetic for every representable number. Tests use tolerance for round trips where strict equality would test binary representation rather than the intended conversion.

**Pause and produce evidence:** MAX_VALUE m → mm. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Keep formatting at the edge

The UI prints the returned result without modifying the underlying arithmetic. If you later want a fixed number of decimal places, make that a display choice and preserve the raw result for further calculations. Rounding after each conversion can cause repeated conversions to drift much more than necessary.

**Pause and produce evidence:** 1000 mm → m. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Decide whether negative measurements are rejected and document that rule.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
