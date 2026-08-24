import React from 'react';
import { useUser } from '../../store/UserState';
import { ROADMAP_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  Map,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  Code2,
  Compass,
  CheckCircle2,
  Lock
} from 'lucide-react';
import './SkillRoadmap.css';

export const SkillRoadmap = () => {
  const { completedNodes, toggleNodeCompletion, setScreen, showToast } = useUser();

  // Calculate overall metrics
  const allNodes = ROADMAP_DATA.phases.flatMap(p => p.nodes);
  const totalNodesCount = allNodes.length;
  const completedCount = allNodes.filter(n => completedNodes[n.id]).length;
  const percentDone = Math.round((completedCount / totalNodesCount) * 100);

  const handleNodeClick = (nodeId, nodeLabel) => {
    toggleNodeCompletion(nodeId);
  };

  return (
    <div className="skill-roadmap animate-fade-in">
      {/* Header Bar */}
      <div className="skill-roadmap__header">
        <div className="skill-roadmap__title-wrap">
          <div className="skill-roadmap__badge">
            <Map size={14} />
            <span>Interactive Node-Based Learning Track</span>
          </div>
          <h1 className="skill-roadmap__title">{ROADMAP_DATA.title}</h1>
          <p className="skill-roadmap__subtitle">
            Curated 16-Week Progressive Milestone Track with Hands-on Projects & Direct Referral Badges
          </p>
        </div>

        <div className="skill-roadmap__overall-progress">
          <div className="skill-roadmap__progress-circle-val">{percentDone}%</div>
          <div className="skill-roadmap__progress-info">
            <span className="skill-roadmap__progress-label">Roadmap Progress</span>
            <span className="skill-roadmap__progress-count">
              {completedCount} of {totalNodesCount} Milestones Verified
            </span>
          </div>

          <PrimaryButton
            variant="primary"
            size="sm"
            onClick={() => setScreen('match')}
            icon={<Compass size={16} />}
          >
            Matched Roles
          </PrimaryButton>
        </div>
      </div>

      {/* Phases (Part 1, Part 2, Part 3, Part 4) */}
      {ROADMAP_DATA.phases.map((phase) => {
        const phaseCompletedCount = phase.nodes.filter(n => completedNodes[n.id]).length;
        const phasePercent = Math.round((phaseCompletedCount / phase.nodes.length) * 100);
        const isFullyDone = phaseCompletedCount === phase.nodes.length;

        return (
          <div key={phase.id} className="roadmap-phase">
            <div className="roadmap-phase__header">
              <div className="roadmap-phase__tag-row">
                <span className="roadmap-phase__number">{phase.phaseNumber}</span>
                <h2 className="roadmap-phase__name">{phase.title}</h2>
              </div>
              <span className="roadmap-phase__duration">{phase.duration}</span>
            </div>

            {/* Nodes Grid */}
            <div className="roadmap-phase__nodes-grid">
              {phase.nodes.map((node) => {
                const isCompleted = !!completedNodes[node.id];

                return (
                  <div
                    key={node.id}
                    className={`roadmap-node-card ${isCompleted ? 'roadmap-node-card--completed' : ''}`}
                    onClick={() => handleNodeClick(node.id, node.label)}
                  >
                    <div className="roadmap-node-card__top">
                      <h3 className="roadmap-node-card__label">{node.label}</h3>
                      <div className="roadmap-node-card__check">
                        {isCompleted && <Check size={14} strokeWidth={3} />}
                      </div>
                    </div>

                    <p className="roadmap-node-card__concept">
                      {node.keyConcept}
                    </p>

                    <div className="roadmap-node-card__footer">
                      <span className="roadmap-node-card__hours">
                        <Clock size={12} style={{ display: 'inline', marginRight: '3px' }} />
                        {node.hours}
                      </span>
                      <span style={{ color: isCompleted ? '#10B981' : '#8C8275', fontWeight: 600 }}>
                        {isCompleted ? 'Completed ✓' : 'Click to complete'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Phase Milestone Project Banner */}
            <div className="roadmap-phase__project-banner">
              <Code2 size={18} color="#588B71" />
              <span>{phase.project}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillRoadmap;
