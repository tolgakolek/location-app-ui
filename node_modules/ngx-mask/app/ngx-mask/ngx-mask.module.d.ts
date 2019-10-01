import { optionsConfig } from './config';
import { ModuleWithProviders } from '@angular/core';
export declare class NgxMaskModule {
    static forRoot(configValue?: optionsConfig | (() => optionsConfig)): ModuleWithProviders;
    static forChild(_configValue?: optionsConfig): ModuleWithProviders;
}
/**
 * @internal
 */
export declare function _configFactory(initConfig: optionsConfig, configValue: optionsConfig | (() => optionsConfig)): optionsConfig;
