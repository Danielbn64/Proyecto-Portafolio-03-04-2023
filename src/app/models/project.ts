export class Project {
  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public category: string,
    public year: number,
    public languages: string,
    public codeLink: string,
    public webLink: string,
    public image: string
  ) {}
}
