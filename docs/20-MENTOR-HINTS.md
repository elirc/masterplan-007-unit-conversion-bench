# M007: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain unit ratio through this project

Source scale divided by target scale.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain numeric boundary through this project

The accepted type, range and finiteness of an input.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain presentation precision through this project

How many digits a reader sees.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain overflow through this project

A result outside finite numeric representation.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: 12.5 cm → mm

125

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: 1000 mm → m

1

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: 0 m → cm

0

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Derive centimeters to meters without looking at the implementation.

Each unit states how many millimeters it represents. Adding a unit should not require writing every pairwise formula. The ratio makes the conversion relationship explicit.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Explain why a truthy property lookup is weaker than Object.hasOwn here.

An ordinary object inherits names such as toString. A supported unit must be an actual key in the conversion table, not merely a property found somewhere on its prototype chain.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Explain what the finite-result check proves and what it does not.

Converting a huge value into millimeters and then back can overflow even when the final identity conversion is valid. Computing the ratio first avoids that particular problem. Floating-point approximation and very small underflow remain ordinary JavaScript number limits.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** What assumptions must a caller know before invoking this function?

A conversion factor has direction. Converting centimetres to millimetres multiplies by ten; reversing the units divides by ten. The core first defines which numbers and units it accepts, then computes one ratio. Display formatting belongs afterward. A rounded display is evidence about presentation, not the exact numeric result returned to another caller.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add conversion history in memory

**First hint:** The desired improvement is “Let a learner compare recent successful operations.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Append normalized successful inputs and result; keep failed attempts separate; cap the retained list.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: An invalid conversion never appears as a successful history row.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the history limit. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a same-unit explanation

**First hint:** The desired improvement is “Make the identity case educational.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Detect equal units in the presentation layer; show the factor one; leave core arithmetic consistent.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: mm-to-mm preserves zero and ordinary finite values.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the explanatory sentence. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Clear old success on input change

**First hint:** The desired improvement is “Prevent stale numeric feedback.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Listen to value and unit edits; invalidate the old result; retain the user's text.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A changed source unit cannot leave the old answer labeled current.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose blank output or an explicit prompt. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a reference examples panel

**First hint:** The desired improvement is “Provide hand-computable starter cases.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Choose three different unit pairs; write expected values manually; allow a case to populate controls without auto-submitting.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Loaded examples still pass through normal validation and conversion.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose values that reveal direction errors. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Compare round-trip error

**First hint:** The desired improvement is “Teach floating-point limits without promising exact equality.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Convert one value out and back; compare difference; document an appropriate tolerance for the chosen example.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The report distinguishes representation error from a reversed factor.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the value and tolerance rationale. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a copyable result sentence

**First hint:** The desired improvement is “Support a clear handoff.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Format source, target and value together; keep numeric calculation unchanged; expose selectable text.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A copied sentence contains both unit labels and the correct direction.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose display precision independently. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a rejected-unit fixture

**First hint:** The desired improvement is “Show why allowlisting matters.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Call the core with an unknown unit; compare with a prototype-looking key; verify explicit rejection.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Neither unknown nor inherited property names become conversion factors.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a clear error example. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Normalize negative-zero display deliberately

**First hint:** The desired improvement is “Explain a subtle numeric edge.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Trace the existing zero normalization; write an Object.is-based regression; explain why ordinary equality hides the distinction.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The public result does not expose negative zero for a valid zero length.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether UI text needs a note. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a conversion worksheet export

**First hint:** The desired improvement is “Help a learner reproduce calculations away from the UI.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Generate a plain text worksheet from selected examples; leave prediction cells blank; include factors separately as hints.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Exported expected answers are labeled as hints rather than learner observations.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the worksheet layout. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
