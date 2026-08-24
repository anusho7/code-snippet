import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { QUESTIONNAIRE_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import './Questionnaire.css';

export const Questionnaire = () => {
  const { role, answers, updateAnswer, setScreen, showToast } = useUser();
  const [currentStep, setCurrentStep] = useState(0);

  const questions = QUESTIONNAIRE_DATA[role] || QUESTIONNAIRE_DATA.student;
  const currentQ = questions[currentStep];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  const handleOptionSelect = (optionValue) => {
    updateAnswer(currentQ.id, optionValue);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Completed questionnaire -> go to Skill Comparison or direct Dashboard
      showToast('Profile mapped! Generating curriculum gap analysis...', 'success');
      setScreen('comparison');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setScreen('entry');
    }
  };

  const handleSkip = () => {
    setScreen('dashboard');
  };

  return (
    <div className="questionnaire animate-fade-in">
      {/* Header & Step Tracker */}
      <div className="questionnaire__header">
        <div className="questionnaire__step-indicator">
          <span>Step {currentStep + 1} of {questions.length}</span>
        </div>

        <div className="questionnaire__progress-bar-wrap">
          <div
            className="questionnaire__progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <h2 className="questionnaire__title">{currentQ.question}</h2>
        <p className="questionnaire__subtitle">{currentQ.subtitle}</p>
      </div>

      {/* Options Grid */}
      <div className="questionnaire__options-grid">
        {currentQ.options.map((opt) => {
          const isSelected = answers[currentQ.id] === opt.value;

          return (
            <div
              key={opt.value}
              className={`option-card ${isSelected ? 'option-card--selected' : ''}`}
              onClick={() => handleOptionSelect(opt.value)}
            >
              <div className="option-card__content">
                {opt.tag && <span className="option-card__tag">{opt.tag}</span>}
                <span className="option-card__label">{opt.label}</span>
              </div>

              <div className="option-card__radio-circle">
                {isSelected && <div className="option-card__radio-dot"></div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="questionnaire__footer">
        <button className="questionnaire__skip-btn" onClick={handleSkip}>
          Skip to Dashboard →
        </button>

        <div className="questionnaire__nav-btns">
          <PrimaryButton
            variant="ghost"
            onClick={handlePrev}
            icon={<ArrowLeft size={16} />}
            iconPosition="left"
          >
            {currentStep === 0 ? 'Change Role' : 'Back'}
          </PrimaryButton>

          <PrimaryButton
            variant="primary"
            onClick={handleNext}
            icon={<ArrowRight size={16} />}
          >
            {currentStep === questions.length - 1 ? 'Analyze Skill Gap' : 'Continue'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
