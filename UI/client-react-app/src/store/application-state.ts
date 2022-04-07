export interface ApplicationState {
  profile: ProfileState;
  candidate: CandidateInterviewDetails;
  interviews: InterviewsState;
}

export interface ProfileState {
  email: string;
  firstName: string;
  lastName: string;
  loading: boolean;
  error: any;
}

export interface CandidateInterviewDetails {
  room: string;
  interviewType: string;
  interviewer: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  loading: boolean;
  error: any;
}

export interface InterviewsState {
  interviewsList: Array<Interview>;
  loading: boolean;
  error: any;
}

export interface Interview {
  candidateId: number;
  date: string;
  id: number;
  interviewerId: number;
  reservedRoom: string;
  score: number;
  type: string;
}