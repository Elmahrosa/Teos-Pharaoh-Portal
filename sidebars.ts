// sidebars.ts
import type { SidebarConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarConfig = {
  docs: [
    'introduction/OVERVIEW',
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
    // continue with your categories...
  ],
};

export default sidebars;
