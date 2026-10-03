# Concepts and worked traces

[Walkthrough](01-BUILD-WALKTHROUGH.md) · [Debugging lab](04-DEBUGGING-LAB.md)

## The exact contract

Supported units are mm, cm and m. Values must be finite numbers and nonnegative. Zero is valid. Conversion uses a unit ratio, rejects nonfinite output and leaves display rounding out of the core.

This paragraph is the reference behavior. If you extend the product, update the contract and examples together. An implementation can be internally consistent while solving the wrong problem, so start with the user's meaning before discussing syntax.

## A complete trace

12.5 cm → validate numeric input and own unit keys → ratio 10/1 → multiply 12.5 by 10 → return 125 → UI displays 12.5 cm = 125 mm.

Copy that trace onto paper. At each arrow, name the input, the owner of the rule or state, and the output. For browser layout, the owner is a CSS rule acting on a particular box. For JavaScript, it may be a local variable, a returned object or a callback. For Git, it is a specific snapshot comparison. These are different mechanisms but the same useful habit: make the boundary visible.

## Examples you can verify independently

| Input or situation | Expected observation |
|---|---|
| 12.5 cm → mm | 125 |
| 1000 mm → m | 1 |
| 0 m → cm | 0 |
| -1 cm → mm | RangeError |
| MAX_VALUE m → m | MAX_VALUE remains valid |
| MAX_VALUE m → mm | RangeError because the result overflows |

Do not derive the expected result by copying the implementation into your test. Use the user rule, a hand calculation, a source-order trace or a deliberately simple fixture. Otherwise two copies of the same mistake can agree while the product is wrong.

## Contrast three kinds of statement

**Requirement:** what the user should be able to rely on. **Implementation:** how the current files attempt to provide it. **Evidence:** the input and observation that support a conclusion about that attempt. In your journal, write one example of each for this project. A source comment is useful explanation, but by itself it is not runtime evidence.

## Retrieval practice

1. Explain `convertLength` to a learner who knows the preceding project but has not opened this one.
2. Reproduce the trace with one changed input or piece of content. Predict which intermediate fact changes first.
3. Name a result that would look plausible but violate the contract.
4. Identify the smallest counterexample that distinguishes correct from incorrect behavior.
5. State one limitation of the reference without treating that limitation as a hidden completed feature.

Write your answers before opening the hints. Then compare explanations, not just vocabulary. If your answer says “it works because JavaScript/CSS/Git handles it,” identify the particular rule that actually explains the result.

## Transfer beyond this example

What assumptions must a caller know before invoking this function?

Connect your answer to a future application: a form, a list, a report or a reusable component. The useful transfer is the reasoning habit, not the fictional domain. For example, deciding equality at a boundary is useful in both dates and temperature ranges; distinguishing identity from a label applies to more than score sheets.

## Reference reading

Use [MDN Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) to confirm terminology and language/platform behavior. The workshop's product rules and fixtures are original teaching choices, not quotations from that reference. Return to the actual source after reading the documentation and explain which line or rule the terminology helps you understand.
