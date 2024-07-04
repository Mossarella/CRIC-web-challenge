import { EDepartment } from "@/enums/EDepartment";
import { ESubjectType } from "@/enums/ESubjectType";
import { IDataMapping } from "@/interfaces/IDataMapping";

export const mockDataMapping: IDataMapping[] = [
  {
    title: "the title of AD",
    desc: "desc of data of AD",
    department: EDepartment.AD,
    subjectType: ESubjectType.EMPLOYEES,
  },
  {
    title: "the title of AD 2",
    desc: "desc of data of AD 2",
    department: EDepartment.AD,
    subjectType: ESubjectType.STUDENTS,
  },
  {
    title: "the title of IT",
    desc: "desc of data of IT",
    department: EDepartment.IT_IS,
  },
  {
    title: "the title of MK",
    desc: "desc of data of MK",
    department: EDepartment.MK,
    subjectType: ESubjectType.FACULTY,
  },
  {
    title: "the title of HR",
    desc: "desc of data of HR",
    department: EDepartment.HR,
    subjectType: ESubjectType.EMPLOYEES,
  },
];
