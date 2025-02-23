export interface CreateChallengeDTO {
  image: string;
  title: string;
  description: string;
  liveDemo: string;
  sourceCode: string;
  tech: string[];
  completedAt: Date;
}

export interface UpdateChallengeDTO {
  image?: string;
  title?: string;
  description?: string;
  liveDemo?: string;
  sourceCode?: string;
  tech?: string[];
  completedAt?: Date;
}
