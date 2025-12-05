// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/OVERVIEW',
        'introduction/VISION',
        'introduction/GLOSSARY',
        'introduction/FAQ',
      ],
    },
    {
      type: 'category',
      label: 'Sovereign Legal',
      items: [
        'sovereign-legal/LICENSE',
        'sovereign-legal/SOVEREIGN-DECREE',
        'sovereign-legal/ACCESS-RESTRICTIONS',
        'sovereign-legal/DATA-SOVEREIGNTY',
        'sovereign-legal/COMPLIANCE-OBLIGATIONS',
        'sovereign-legal/AUDIT-GUIDELINES',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/HIGH-LEVEL',
        'architecture/BANKCHAIN-ROUTING',
        'architecture/CIVICCHAIN-FLOW',
        'architecture/MULTI-CHAIN-EXECUTION',
        'architecture/PI-ECOSYSTEM-INTEGRATION',
        'architecture/DATA-FLOW-DIAGRAMS',
        'architecture/INFRASTRUCTURE-MAPS',
      ],
    },
    {
      type: 'category',
      label: 'Identity',
      items: [
        'identity/IDENTITY-FRAMEWORK',
        'identity/WALLET-CONNECT',
        'identity/CITIZEN-ACCESS',
        'identity/INSTITUTION-ACCESS',
        'identity/AUTHENTICATION-FLOWS',
        'identity/KYC-AML-PROCEDURES',
      ],
    },
    {
      type: 'category',
      label: 'Bankchain',
      items: [
        'bankchain/OVERVIEW',
        'bankchain/FIAT-CRYPTO-RAILS',
        'bankchain/ISO20022-PIPELINES',
        'bankchain/SETTLEMENT-FLOWS',
        'bankchain/COMPLIANCE-ENGINE',
        'bankchain/AI-MONITORING',
        'bankchain/API-GUIDE',
      ],
    },
    {
      type: 'category',
      label: 'Civicchain',
      items: [
        'civicchain/GOVERNANCE-MODEL',
        'civicchain/VOTING-PROTOCOL',
        'civicchain/PUBLIC-RECORDS',
        'civicchain/CIVIC-MIXER',
        'civicchain/CONSTITUTION-INTEGRATION',
      ],
    },
    {
      type: 'category',
      label: 'Smart City',
      items: [
        'smart-city/PI-SMART-CITY',
        'smart-city/PITAXI',
        'smart-city/ELMAHROSA-MAP',
        'smart-city/GEO-IOT',
        'smart-city/CITY-DASHBOARDS',
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      items: [
        'apis/INTRODUCTION',
        'apis/AUTHENTICATION',
        'apis/RATE-LIMITS',
        {
          type: 'category',
          label: 'REST',
          items: [
            'apis/rest/BANKCHAIN-REST',
            'apis/rest/CIVICCHAIN-REST',
            'apis/rest/IDENTITY-REST',
            'apis/rest/ADMIN-REST',
          ],
        },
        {
          type: 'category',
          label: 'WebSocket',
          items: [
            'apis/websocket/STREAMS',
            'apis/websocket/EVENT-TYPES',
          ],
        },
        {
          type: 'category',
          label: 'Blockchain',
          items: [
            'apis/blockchain/SOLANA-PROGRAMS',
            'apis/blockchain/PI-NETWORK',
            'apis/blockchain/ELMAHROSA-CHAIN',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/SECURITY-MODEL',
        'security/ENCRYPTION',
        'security/THREAT-MODEL',
        'security/INCIDENT-RESPONSE',
        'security/PENETRATION-GUIDELINES',
        'security/AUDIT-TRAILS',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/LOCAL-SETUP',
        'deployment/STAGING',
        'deployment/PRODUCTION',
        'deployment/VERSEL-DEPLOY',
        'deployment/DOCKER-CONTAINERS',
        'deployment/CLOUD-INFRA',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/MONITORING',
        'operations/LOGGING',
        'operations/BACKUPS',
        'operations/FAILOVER',
        'operations/MAINTENANCE',
      ],
    },
    {
      type: 'category',
      label: 'AI Automation',
      items: [
        'ai-automation/AI-AUDITOR',
        'ai-automation/RISK-SCORING',
        'ai-automation/FRAUD-DETECTION',
        'ai-automation/AUTOVERIFICATION',
        'ai-automation/SERVICE-RECOMMENDER',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/CIVIC-BLOCKCHAIN-CONSTITUTION',
        'governance/GOVERNANCE-RULES',
        'governance/DECISION-MAKING',
        'governance/PUBLIC-TRANSPARENCY',
      ],
    },
    {
      type: 'category',
      label: 'Branding',
      items: [
        'branding/BRAND-GUIDE',
        'branding/LOGO-USAGE',
        'branding/UI-COMPONENTS',
        'branding/TYPOGRAPHY',
        'branding/COLOR-SYSTEM',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/2025',
        'roadmap/2026',
        'roadmap/BEYOND',
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      items: [
        'changelog/v1',
        'changelog/v2',
        'changelog/v2.1',
      ],
    },
  ],
};

export default sidebars;
