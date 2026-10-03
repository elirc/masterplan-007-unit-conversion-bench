import { test } from 'node:test';
import assert from 'node:assert/strict';

import { convertLength as convert } from '../public/core.js';
test('hand-computed reference values', () => { assert.equal(convert(12.5,'cm','mm'),125); assert.equal(convert(1,'m','cm'),100); assert.equal(convert(1000,'mm','m'),1); });
test('zero and same-unit values', () => { assert.equal(convert(0,'cm','m'),0); assert.equal(convert(123,'mm','mm'),123); assert.equal(Object.is(convert(-0,'m','mm'),-0),false); });
test('all nine unit combinations round-trip within tolerance', () => { for(const a of ['mm','cm','m']) for(const b of ['mm','cm','m']) { const result=convert(convert(13.7,a,b),b,a); assert.ok(Math.abs(result-13.7)<1e-10); } });
test('invalid numeric input is rejected without coercion', () => { for(const x of [-1,'2',null,NaN,Infinity,undefined]) assert.throws(() => convert(x,'m','mm')); });
test('unknown and inherited object property units are rejected', () => { for(const u of ['km','toString','__proto__',undefined]) assert.throws(() => convert(1,u,'mm')); });
test('overflow is rejected while huge identity conversion is valid', () => { assert.throws(() => convert(Number.MAX_VALUE,'m','mm')); assert.equal(convert(Number.MAX_VALUE,'m','m'),Number.MAX_VALUE); });
