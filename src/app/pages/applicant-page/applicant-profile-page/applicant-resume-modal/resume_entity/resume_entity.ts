
export class Resume{
  constructor(
    public name: string | ['',],
    public surname: string,
    public age: string,
    public height: string,
    public image: string,
    public phone: number,
    public location: string,
    public languages: string,
    public skills: string,
    public experience: string,
    public study: string,
    public habits: string
  ) {}
}

export const resumeDefault: Resume = {
  name: "",
  surname: "",
  age: "",
  height: "",
  image: "",
  phone: 0,
  location: "",
  languages: "",
  skills: "",
  experience: "",
  study: "",
  habits: "",
}

export const resumeList: Resume[] = [
  new Resume(
    "Asyl",
    "Duld",
    "20",
    "175",
    "img",
    +77479028172,
    "Astana",
    "Kazakh,English,Russian",
    "angular,java",
    "1,5 year of frontend",
    "Computer Sience",
    "Video-game"
  )
]
