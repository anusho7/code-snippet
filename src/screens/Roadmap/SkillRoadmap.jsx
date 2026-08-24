import React from 'react';
import { useUser } from '../../store/UserState';
import { ROADMAP_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  Map,
  Check,
  Clock,
  ArrowRight,
  Code2,
  Compass,
  BookOpen,
  CheckCircle2,
  Layers
} from 'lucide-react';
import './SkillRoadmap.css';

export const SkillRoadmap = () => {
  const { completedNodes, toggleNodeCompletion, setScreen, showToast } = useUser();

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
            Curated 16-Week Progressive Milestone Track designed to bridge traditional college academics with high-demand industry skills.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={() => setScreen('match')}
          icon={<Compass size={16} />}
        >
          View Matched Roles
        </PrimaryButton>
      </div>

      {/* Difference Between Academic Skills & Required Latest Technical Skills */}
      <div className="skill-gap-comparison">
        <div className="skill-gap-comparison__header">
          <h2 className="skill-gap-comparison__title">
            Academic Curriculum vs. Required Technical Skills
          </h2>
          <p className="skill-gap-comparison__subtitle">
            Highlighting the difference between traditional college syllabus and modern 2026 industry technical requirements.
          </p>
        </div>

        <div className="skill-gap-comparison__grid">
          {/* Academic Skills */}
          <div className="skill-gap-col skill-gap-col--academic">
            <div className="skill-gap-col__header">
              <div className="skill-gap-col__icon-wrap academic-icon">
                <BookOpen size={18} />
              </div>
              <div>
                <h3 className="skill-gap-col__title">Academic Skills</h3>
                <span className="skill-gap-col__subtitle">Traditional College Syllabus</span>
              </div>
            </div>
            <ul className="skill-gap-list">
              <li>
                <span className="gap-bullet gap-bullet--amber"></span>
                <div>
                  <strong>Theory & Core Fundamentals</strong>
                  <p>C, C++, Java Syntax, OOPs Principles, Manual Memory concepts</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--amber"></span>
                <div>
                  <strong>Relational Databases Theory</strong>
                  <p>ER Diagrams, Normalization theory & basic SQL queries</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--amber"></span>
                <div>
                  <strong>Classic Systems Architecture</strong>
                  <p>Monolithic Desktop Applications & basic static HTML/CSS</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--amber"></span>
                <div>
                  <strong>OS & Networking Concepts</strong>
                  <p>Process Scheduling algorithms & TCP/IP OSI model theory</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Divider Badge */}
          <div className="skill-gap-divider">
            <span className="skill-gap-tag">CURRICULUM GAP</span>
            <ArrowRight size={18} className="skill-gap-arrow" />
          </div>

          {/* Required Technical Skills */}
          <div className="skill-gap-col skill-gap-col--industry">
            <div className="skill-gap-col__header">
              <div className="skill-gap-col__icon-wrap industry-icon">
                <Code2 size={18} />
              </div>
              <div>
                <h3 className="skill-gap-col__title">Required Technical Skills</h3>
                <span className="skill-gap-col__subtitle">2026 Industry Standard</span>
              </div>
            </div>
            <ul className="skill-gap-list">
              <li>
                <span className="gap-bullet gap-bullet--green"></span>
                <div>
                  <strong>Modern Reactive Front-End</strong>
                  <p>React 19, TypeScript, Next.js App Router & Atomic Design Systems</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--green"></span>
                <div>
                  <strong>Scalable Backend & ORM Data Modeling</strong>
                  <p>Node.js microservices, PostgreSQL with Prisma ORM & Redis caching</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--green"></span>
                <div>
                  <strong>Cloud Infra & CI/CD Pipelines</strong>
                  <p>Docker containerization, AWS ECS/S3 & GitHub Actions deployment</p>
                </div>
              </li>
              <li>
                <span className="gap-bullet gap-bullet--green"></span>
                <div>
                  <strong>AI & Production System Design</strong>
                  <p>LLM Integrations, Vector Search (RAG) & Distributed Load Balancing</p>
                </div>
              </li>
            </ul>
          </div>
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
