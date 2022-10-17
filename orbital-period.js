function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const alt = Math.pow(avgAlt + earthRadius, 3);
    const orbitalPeriod = Math.PI * 2 * Math.sqrt(alt / GM);
    return { name, orbitalPeriod: Math.round(orbitalPeriod) };
  });
}

const result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

result;
