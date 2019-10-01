import { NavigationMode } from './navigation-mode.interface';
import { WizardState } from './wizard-state.model';
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param navigationMode The name of the to be used navigation mode
 * @param wizardState The wizard state of the wizard
 * @returns The created [[NavigationMode]]
 */
export declare function navigationModeFactory(navigationMode: string, wizardState: WizardState): NavigationMode;
