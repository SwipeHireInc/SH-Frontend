export class JobModel {
  constructor(
    public id: number,
    public title: string,
    public company: string,
    public logo: string,
    public location: string,
    public salary: string,
    public type: string,
    public experience: string,
    public teamSize: string,
    public description: string,
    public requirements: string,
    public benefits: string,
    public posted?: string,
    public applicants?: string
  ) {}
}

export const Jobs: JobModel[] = [
  new JobModel(
    1,
    'Frontend Developer',
    'TechCorp',
    'assets/techcorp-logo.png',
    'New York, NY',
    '$4000',
    'Full-time',
    '2+ years',
    '10-20',
    'Develop UI components and maintain frontend codebase.',
    'Angular, TypeScript, HTML, CSS',
    'Medical insurance, Flexible hours, Flexible hours, Flexible hours',
    '2 days ago',
    '32'
  ),
]
