export interface UserProfile {
  name: string;
  degree: string;
  branch: string;
  year: string;
  careerGoal: string;
  skills: string[];
  experience: string;
}

const PROFILE_KEY = "careerAI_userProfile";

export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};

export const getUserProfile = (): UserProfile | null => {
  const stored = localStorage.getItem(PROFILE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as UserProfile;
  } catch {
    return null;
  }
};

export const clearUserProfile = (): void => {
  localStorage.removeItem(PROFILE_KEY);
};
