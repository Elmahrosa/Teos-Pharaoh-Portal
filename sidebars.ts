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
        'architec
