import { parseCsv } from './parseCsv';

describe('parseCsv', () => {
  it('converts csv to array of objects', () => {
    const result = parseCsv(`Country|Currency|Amount|Code|Rate
        Australia|dollar|1|AUD|15.281
        Brazil|real|1|BRL|4.223`);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
  });

  it('uses first csv row as object keys', () => {
    const result = parseCsv(`Country|Currency|Amount|Code|Rate
        Australia|dollar|1|AUD|15.281
        Brazil|real|1|BRL|4.223`);

    expect(Object.keys(result[0])).toEqual(['Country', 'Currency', 'Amount', 'Code', 'Rate']);
  });

  it('trims empty characters', () => {
    const result = parseCsv(`
    Country|Currency|Amount|Code|Rate
        Australia|dollar|1|AUD|15.281
        Brazil|real|1|BRL|4.223
        `);

    expect(Object.keys(result[0])).toEqual(['Country', 'Currency', 'Amount', 'Code', 'Rate']);
    expect(result).toHaveLength(2);
  });

  it('converts number like strings to actual numbers', () => {
    const result = parseCsv(`Country|Currency|Amount|Code|Rate
        Australia|dollar|1|AUD|15.281
        Brazil|real|1|BRL|4.223`);

    expect(typeof result[0].Amount).toEqual('number');
    expect(result[0].Amount).toEqual(1);

    expect(typeof result[0].Rate).toEqual('number');
    expect(result[0].Rate).toEqual(15.281);
  });

  it('converts boolean like strings to actual booleans', () => {
    const result = parseCsv(`Country|Currency|Amount|Code|Rate|Current
        Australia|dollar|1|AUD|15.281|true
        Brazil|real|1|BRL|4.223|false`);

    expect(typeof result[0].Current).toEqual('boolean');
    expect(result[0].Current).toEqual(true);

    expect(typeof result[1].Current).toEqual('boolean');
    expect(result[1].Current).toEqual(false);
  });
});
