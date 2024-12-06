import React from 'react';
import { useStore } from '../../store/useStore';
import { SelectField } from '../forms/SelectField';
import { FormSelector } from '../forms/FormSelector';
import { educationOptions, interestOptions, aiKnowledgeOptions } from '../../constants/options';

export const Section1Basic: React.FC = () => {
  const { userProfile, updateProfile } = useStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Perfil Básico del Participante</h2>
      
      <div className="space-y-4">
        <SelectField
          label="Nivel educativo"
          value={userProfile.educationLevel || ''}
          onChange={(value) => updateProfile({ educationLevel: value })}
          options={educationOptions}
        />

        <SelectField
          label="Área principal de interés"
          value={userProfile.interestArea || ''}
          onChange={(value) => updateProfile({ interestArea: value })}
          options={interestOptions}
        />

        <SelectField
          label="Conocimiento previo sobre IA"
          value={userProfile.aiKnowledge || ''}
          onChange={(value) => updateProfile({ aiKnowledge: value })}
          options={aiKnowledgeOptions}
        />

        <FormSelector />
      </div>
    </div>
  );
};