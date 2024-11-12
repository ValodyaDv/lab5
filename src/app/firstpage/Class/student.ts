export class Student {
  name: string;
  averageScore: number;

  constructor(name: string, averageScore: number) {
    this.name = name;
    this.averageScore = averageScore;
  }

  calculateScholarship(): number {
    if (this.averageScore === 5) {
      return 4000;
    } else {
      return 3000;
    }
  }
}
