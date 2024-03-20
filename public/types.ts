import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface UbiDashboardPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UbiDashboardPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
