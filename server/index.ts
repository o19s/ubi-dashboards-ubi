import { PluginInitializerContext } from '../../../src/core/server';
import { UbiDashboardPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new UbiDashboardPlugin(initializerContext);
}

export { UbiDashboardPluginSetup, UbiDashboardPluginStart } from './types';
