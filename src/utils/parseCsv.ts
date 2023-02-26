const parseStringToType = (value: string): string | number | boolean => {
  if (!isNaN(Number(value))) {
    return Number(value);
  } else if (value === 'true' || value === 'false') {
    return value === 'true';
  } else {
    return value;
  }
};

export const parseCsv = (csv: string): Array<Record<string, unknown>> => {
  const [header, ...lines] = csv.trim().split('\n');
  const columns = header.split('|');

  return lines.reduce<Array<Record<string, unknown>>>((acc, curr) => {
    const values = curr.split('|');
    const currentRow = values.reduce(
      (acc, curr, i) => ({ ...acc, [columns[i]]: parseStringToType(curr) }),
      {}
    );

    return [...acc, currentRow];
  }, []);
};
