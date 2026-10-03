# Build journal: Unit Conversion Bench

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A maker needs trustworthy conversions between millimeters, centimeters and meters.

The main temptation was to make the project larger than its learning target. The useful boundary is **functions and explicit input contracts**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Supported units are mm, cm and m. Values must be finite numbers and nonnegative. Zero is valid. Conversion uses a unit ratio, rejects nonfinite output and leaves display rounding out of the core.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Centralize unit meaning in one table

Each unit states how many millimeters it represents. Adding a unit should not require writing every pairwise formula. The ratio makes the conversion relationship explicit.

**What a learner should challenge:** Derive centimeters to meters without looking at the implementation.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Check own properties

An ordinary object inherits names such as toString. A supported unit must be an actual key in the conversion table, not merely a property found somewhere on its prototype chain.

**What a learner should challenge:** Explain why a truthy property lookup is weaker than Object.hasOwn here.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Avoid unnecessary intermediate overflow

Converting a huge value into millimeters and then back can overflow even when the final identity conversion is valid. Computing the ratio first avoids that particular problem. Floating-point approximation and very small underflow remain ordinary JavaScript number limits.

**What a learner should challenge:** Explain what the finite-result check proves and what it does not.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `convertLength`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
