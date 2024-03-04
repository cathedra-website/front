import { ReactNode } from "react";

export type LecturerInfo = {
  imgSrc: string;
  name: string;
  post: string;
};

export type MainSectionProps = {
  children: ReactNode
  lecturerInfo: LecturerInfo
};

export type HistoryProps = {
  timePeriod: ReactNode
  lecturerInfo: LecturerInfo
  first: ReactNode
  second: ReactNode
  third: ReactNode
};
