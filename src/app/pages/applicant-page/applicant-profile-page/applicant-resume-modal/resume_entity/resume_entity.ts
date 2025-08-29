export interface Resume {
  name: string,
  surname: string,
  age: string,
  height: string,
  image: string,
  phone: number,
  location: string,
  languages: string[],
  skills: string,
  experience: string,
  study: string,
}

export const resumeDefault: Resume = {
  name: "",
  surname: "",
  age: "",
  height: "",
  image: "",
  phone: 0,
  location: "",
  languages: [],
  skills: "",
  experience: "",
  study: "",
}
