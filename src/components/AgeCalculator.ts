export function calculateAge(birthDate: string): number {
  const birthDateObj: Date = new Date(birthDate);
  const currentDate: Date = new Date();
  const ageInMilliseconds: number = currentDate.getTime() - birthDateObj.getTime();
  const ageInYears: number = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  const roundedAge: number = Math.floor(ageInYears);
  return roundedAge;
}
