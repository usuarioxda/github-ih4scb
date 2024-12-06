import { describe, it, expect } from 'vitest';
import { generateRecommendations } from '../recommendations';
import { UserProfile } from '../../types';

describe('generateRecommendations', () => {
  it('should generate creative recommendations for visual arts profile', () => {
    const profile: UserProfile = {
      educationLevel: 'university',
      interestArea: 'visual_arts',
      aiKnowledge: 'intermediate',
      projectPreferences: ['digital_art'],
      preferredTools: ['image_creation']
    };

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('DALL-E');
    expect(recommendations.tools).toContain('Midjourney');
  });

  it('should generate technical recommendations for tech profile', () => {
    const profile: UserProfile = {
      educationLevel: 'tech_experienced',
      interestArea: 'tech_science',
      aiKnowledge: 'advanced',
      projectPreferences: ['scientific_research'],
      preferredTools: ['data_analysis']
    };

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('TensorFlow');
    expect(recommendations.tools).toContain('PyTorch');
  });

  it('should generate intermediate recommendations for other profiles', () => {
    const profile: UserProfile = {
      educationLevel: 'professional_non_tech',
      interestArea: 'other',
      aiKnowledge: 'basic',
      projectPreferences: [],
      preferredTools: []
    };

    const recommendations = generateRecommendations(profile);
    expect(recommendations.tools).toContain('ChatGPT');
    expect(recommendations.suggestion).toContain('Comienza a explorar ChatGPT');
  });
});