# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Browser events, parsing, rendering and visible errors. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `convertLength`. Use this trace as a map: 12.5 cm → validate numeric input and own unit keys → ratio 10/1 → multiply 12.5 by 10 → return 125 → UI displays 12.5 cm = 125 mm.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding a small pure function.

## Decision: Centralize unit meaning in one table

Each unit states how many millimeters it represents. Adding a unit should not require writing every pairwise formula. The ratio makes the conversion relationship explicit.

**Review question:** Derive centimeters to meters without looking at the implementation.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Check own properties

An ordinary object inherits names such as toString. A supported unit must be an actual key in the conversion table, not merely a property found somewhere on its prototype chain.

**Review question:** Explain why a truthy property lookup is weaker than Object.hasOwn here.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Avoid unnecessary intermediate overflow

Converting a huge value into millimeters and then back can overflow even when the final identity conversion is valid. Computing the ratio first avoids that particular problem. Floating-point approximation and very small underflow remain ordinary JavaScript number limits.

**Review question:** Explain what the finite-result check proves and what it does not.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), wording and interaction in the browser adapter (`public/app.js`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

No persistence, external integration or general framework is hidden behind these files. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
