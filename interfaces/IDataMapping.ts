import { EDepartment } from "@/enums/EDepartment";
import { ESubjectType } from "@/enums/ESubjectType";

export interface IDataMapping {
  title: string;
  desc: string;
  department: EDepartment;
  subjectType?: ESubjectType;
}
