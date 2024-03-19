import './index.scss';

import { UbiDashboardPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new UbiDashboardPlugin();
}
export { UbiDashboardPluginSetup, UbiDashboardPluginStart } from './types';
