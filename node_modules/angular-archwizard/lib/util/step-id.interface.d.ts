/**
 * An unique identifier of a wizard step
 *
 * @author Marc Arndt
 */
export interface StepId {
    /**
     * The id of the destination step
     */
    stepId: string;
}
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepId]] and false otherwise
 */
export declare function isStepId(value: any): value is StepId;
