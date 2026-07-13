import { AppState, Screen, User, Group, Duel, Question } from './types';
import { questionsData, topicsList, getQuestionsByTopic } from './data/questions';

class QuizCombatApp {
  private state: AppState;
  private currentQuestions: Question[] = [];

  constructor() {
    this.state = {
      screen: 'login',
      loginTab: 'session',
      currentUser: null,
      currentGroup: null,
      inviteCode: null,
      selectedTopic: null,
      selectedRival: null,
      currentDuel: null,
      currentQuestionIndex: 0,
      answers: Array(5).fill(null),
      userScore: 0,
      rivalScore: 0,
      resultUserWon: false,
      globalRanking: this.generateGlobalRanking(),
      isLoggedIn: false
    };
    this.loadFromStorage();
  }

  private generateGlobalRanking() {
    const names = ['Carlos', 'María', 'Juan', 'Sofia', 'Diego', 'Ana', 'Roberto', 'Patricia'];
    return names.map((name, i) => ({
      id: `player-${i}`,
      name,
      points: 1000 - i * 100,
      winRate: 60 + Math.random() * 30
    }));
  }

  getState(): AppState {
    return this.state;
  }

  private saveToStorage() {
    localStorage.setItem('quizCombatState', JSON.stringify({
      currentUser: this.state.currentUser,
      currentGroup: this.state.currentGroup,
      isLoggedIn: this.state.isLoggedIn
    }));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem('quizCombatState');
    if (stored) {
      const data = JSON.parse(stored);
      if (data.currentUser && data.currentGroup) {
        this.state.currentUser = data.currentUser;
        this.state.currentGroup = data.currentGroup;
        this.state.isLoggedIn = data.isLoggedIn;
        this.state.screen = 'dashboard';
      }
    }
  }

  switchLoginTab(tab: 'session' | 'register' | 'group') {
    this.state.loginTab = tab;
  }

  handleSessionLogin(username: string, password: string) {
    if (!username || !password) {
      alert('Por favor completa todos los campos');
      return;
    }
    const user: User = {
      id: `user-${Date.now()}`,
      name: username,
      email: username,
      groupId: 'default',
      winRate: 60,
      totalDuels: 5,
      wins: 3
    };
    this.state.currentUser = user;
    this.state.isLoggedIn = true;
    this.state.screen = 'dashboard';
    this.state.currentGroup = {
      id: 'default',
      name: 'Mi grupo',
      code: 'GRUPO001',
      adminId: user.id,
      members: [user, this.createSampleUser('María'), this.createSampleUser('Juan')],
      createdAt: new Date()
    };
    this.saveToStorage();
  }

  handleSessionRegister(username: string, password: string) {
    this.handleSessionLogin(username, password);
  }

  handleCreateGroup(groupName: string, userName: string) {
    if (!groupName || !userName) {
      alert('Por favor completa todos los campos');
      return;
    }
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const user: User = {
      id: `user-${Date.now()}`,
      name: userName,
      groupId: code,
      winRate: 50,
      totalDuels: 0,
      wins: 0
    };
    const group: Group = {
      id: `group-${Date.now()}`,
      name: groupName,
      code,
      adminId: user.id,
      members: [user],
      createdAt: new Date()
    };
    this.state.currentUser = user;
    this.state.currentGroup = group;
    this.state.inviteCode = code;
    this.state.screen = 'invite-code';
    this.state.isLoggedIn = false;
  }

  handleJoinGroup(code: string, name: string) {
    if (!code || !name) {
      alert('Por favor completa todos los campos');
      return;
    }
    const user: User = {
      id: `user-${Date.now()}`,
      name,
      groupId: code,
      winRate: 50,
      totalDuels: 0,
      wins: 0
    };
    this.state.currentUser = user;
    this.state.currentGroup = {
      id: `group-${code}`,
      name: `Grupo ${code}`,
      code,
      adminId: 'admin-' + code,
      members: [user, this.createSampleUser('María'), this.createSampleUser('Juan'), this.createSampleUser('Sofia')],
      createdAt: new Date()
    };
    this.state.screen = 'dashboard';
    this.state.isLoggedIn = false;
  }

  private createSampleUser(name: string): User {
    return {
      id: `user-${Date.now()}-${Math.random()}`,
      name,
      groupId: this.state.currentGroup?.code || 'default',
      winRate: Math.floor(Math.random() * 100),
      totalDuels: Math.floor(Math.random() * 20),
      wins: Math.floor(Math.random() * 10)
    };
  }

  handleCopyCode() {
    if (this.state.inviteCode) {
      navigator.clipboard.writeText(this.state.inviteCode);
      alert('Código copiado al portapapeles');
    }
  }

  goToDashboard() {
    this.state.screen = 'dashboard';
  }

  goToRankingJoin() {
    this.state.screen = 'ranking-join';
  }

  handleJoinRanking(playerName: string) {
    if (!playerName) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    const user: User = {
      id: `ranking-user-${Date.now()}`,
      name: playerName,
      groupId: 'ranking',
      winRate: Math.floor(Math.random() * 100),
      totalDuels: Math.floor(Math.random() * 50),
      wins: Math.floor(Math.random() * 25)
    };
    this.state.currentUser = user;
    this.state.screen = 'ranking';
    this.state.isLoggedIn = false;
  }

  backToLogin() {
    this.state.screen = 'login';
    this.state.currentUser = null;
    this.state.currentGroup = null;
    this.state.isLoggedIn = false;
  }

  logout() {
    this.backToLogin();
    localStorage.removeItem('quizCombatState');
  }

  selectTopic(topicName: string) {
    if (this.state.selectedTopic === topicName) {
      this.state.selectedTopic = null;
      this.state.selectedRival = null;
    } else {
      this.state.selectedTopic = topicName;
      this.state.selectedRival = null;
      this.currentQuestions = getQuestionsByTopic(topicName);
    }
  }

  selectRival(rivalName: string) {
    const rival = this.state.currentGroup?.members.find(m => m.name === rivalName);
    if (rival) {
      if (this.state.selectedRival?.id === rival.id) {
        this.state.selectedRival = null;
      } else {
        this.state.selectedRival = rival;
      }
    }
  }

  startDuel() {
    if (!this.state.selectedTopic || !this.state.selectedRival) {
      alert('Por favor selecciona un tema y un rival');
      return;
    }
    this.currentQuestions = getQuestionsByTopic(this.state.selectedTopic);
    this.state.currentDuel = {
      id: `duel-${Date.now()}`,
      groupId: this.state.currentGroup?.id || '',
      userId1: this.state.currentUser?.id || '',
      userId2: this.state.selectedRival.id,
      topic: this.state.selectedTopic,
      user1Answers: Array(5).fill(null),
      user2Answers: Array(5).fill(null),
      user1Score: 0,
      user2Score: 0,
      status: 'in-progress',
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
    this.state.currentQuestionIndex = 0;
    this.state.answers = Array(5).fill(null);
    this.state.screen = 'game';
  }

  selectAnswer(questionIndex: number, answerIndex: number) {
    this.state.answers[questionIndex] = answerIndex;
  }

  nextQuestion() {
    if (this.state.currentQuestionIndex < 4) {
      this.state.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    if (this.state.currentQuestionIndex > 0) {
      this.state.currentQuestionIndex--;
    }
  }

  submitDuel() {
    // Calculate scores
    let userScore = 0;
    for (let i = 0; i < this.currentQuestions.length; i++) {
      if (this.state.answers[i] === this.currentQuestions[i].correctAnswerIndex) {
        userScore++;
      }
    }
    // Simulate rival score
    const rivalScore = Math.floor(Math.random() * 5);

    this.state.userScore = userScore;
    this.state.rivalScore = rivalScore;
    this.state.resultUserWon = userScore > rivalScore;
    this.state.currentDuel!.status = 'completed';
    this.state.currentDuel!.user1Score = userScore;
    this.state.currentDuel!.user2Score = rivalScore;
    this.state.currentDuel!.completedAt = new Date();

    // Update user win rate
    if (this.state.currentUser) {
      this.state.currentUser.totalDuels++;
      if (userScore > rivalScore) {
        this.state.currentUser.wins++;
      }
      this.state.currentUser.winRate = Math.round((this.state.currentUser.wins / this.state.currentUser.totalDuels) * 100);
    }

    this.state.screen = 'results';
  }

  backToDashboard() {
    this.state.screen = 'dashboard';
    this.state.selectedTopic = null;
    this.state.selectedRival = null;
    this.state.currentDuel = null;
    this.state.currentQuestionIndex = 0;
    this.state.answers = Array(5).fill(null);
  }

  getCurrentQuestions(): Question[] {
    return this.currentQuestions;
  }

  getTopics() {
    return topicsList;
  }
}

export default QuizCombatApp;
