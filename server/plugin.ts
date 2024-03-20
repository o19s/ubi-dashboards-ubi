import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { UbiDashboardPluginSetup, UbiDashboardPluginStart } from './types';
import { defineRoutes } from './routes';

export class UbiDashboardPlugin
  implements Plugin<UbiDashboardPluginSetup, UbiDashboardPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('ubiDashboard: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('ubiDashboard: Started');
    return {};
  }

  public stop() {}
}
