export type Screen = 'login' | 'dashboard' | 'game' | 'results' | 'invite-code' | 'ranking' | 'ranking-join';
export type LoginTab = 'session' | 'register' | 'group';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  justification: string;
  topic: string;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  groupId: string;
  winRate: number;
  totalDuels: number;
  wins: number;
}

export interface Group {
  id: string;
  name: string;
  code: string;
  adminId: string;
  members: User[];
  createdAt: Date;
}

export interface Duel {
  id: string;
  groupId: string;
  userId1: string;
  userId2: string;
  topic: string;
  user1Answers: (number | null)[];
  user2Answers: (number | null)[];
  user1Score: number;
  user2Score: number;
  status: 'pending' | 'in-progress' | 'completed' | 'expired';
  createdAt: Date;
  completedAt?: Date;
  expiresAt: Date;
}

export interface GlobalRankingPlayer {
  id: string;
  name: string;
  points: number;
  winRate: number;
}

export interface AppState {
  screen: Screen;
  loginTab: LoginTab;
  currentUser: User | null;
  currentGroup: Group | null;
  inviteCode: string | null;
  selectedTopic: string | null;
  selectedRival: User | null;
  currentDuel: Duel | null;
  currentQuestionIndex: number;
  answers: (number | null)[];
  userScore: number;
  rivalScore: number;
  resultUserWon: boolean;
  globalRanking: GlobalRankingPlayer[];
  isLoggedIn: boolean;
}
