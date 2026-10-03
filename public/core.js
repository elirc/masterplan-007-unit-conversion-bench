const millimetersPerUnit = Object.freeze({ mm: 1, cm: 10, m: 1000 });
export function convertLength(value, from, to) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError('Length must be a finite number.');
  }
  if (value < 0) throw new RangeError('Length cannot be negative.');
  if (!Object.hasOwn(millimetersPerUnit, from) || !Object.hasOwn(millimetersPerUnit, to)) {
    throw new RangeError('Supported units: mm, cm, m.');
  }
  // Convert with the unit ratio, avoiding an unnecessary overflowing intermediate.
  const result = value * (millimetersPerUnit[from] / millimetersPerUnit[to]);
  if (!Number.isFinite(result)) throw new RangeError('Converted length is too large.');
  return result === 0 ? 0 : result; // Normalize negative zero for display/callers.
}
