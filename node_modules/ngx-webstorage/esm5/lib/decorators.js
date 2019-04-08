/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StorageStrategies } from './constants/strategy';
import { DecoratorBuilder } from './helpers/decoratorBuilder';
/**
 * @param {?=} key
 * @param {?=} defaultValue
 * @return {?}
 */
export function LocalStorage(key, defaultValue) {
    return (/**
     * @param {?} prototype
     * @param {?} propName
     * @return {?}
     */
    function (prototype, propName) {
        DecoratorBuilder.buildSyncStrategyDecorator(StorageStrategies.Local, prototype, propName, key, defaultValue);
    });
}
/**
 * @param {?=} key
 * @param {?=} defaultValue
 * @return {?}
 */
export function SessionStorage(key, defaultValue) {
    return (/**
     * @param {?} prototype
     * @param {?} propName
     * @return {?}
     */
    function (prototype, propName) {
        DecoratorBuilder.buildSyncStrategyDecorator(StorageStrategies.Session, prototype, propName, key, defaultValue);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWJzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFFNUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxHQUFZLEVBQUUsWUFBa0I7SUFDNUQ7Ozs7O0lBQU8sVUFBUyxTQUFTLEVBQUUsUUFBUTtRQUNsQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUcsQ0FBQyxFQUFDO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxHQUFZLEVBQUUsWUFBa0I7SUFDOUQ7Ozs7O0lBQU8sVUFBUyxTQUFTLEVBQUUsUUFBUTtRQUNsQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEgsQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4vY29uc3RhbnRzL3N0cmF0ZWd5JztcbmltcG9ydCB7RGVjb3JhdG9yQnVpbGRlcn0gZnJvbSAnLi9oZWxwZXJzL2RlY29yYXRvckJ1aWxkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlKGtleT86IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG5cdHJldHVybiBmdW5jdGlvbihwcm90b3R5cGUsIHByb3BOYW1lKSB7XG5cdFx0RGVjb3JhdG9yQnVpbGRlci5idWlsZFN5bmNTdHJhdGVneURlY29yYXRvcihTdG9yYWdlU3RyYXRlZ2llcy5Mb2NhbCwgcHJvdG90eXBlLCBwcm9wTmFtZSwga2V5LCBkZWZhdWx0VmFsdWUpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2Vzc2lvblN0b3JhZ2Uoa2V5Pzogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKHByb3RvdHlwZSwgcHJvcE5hbWUpIHtcblx0XHREZWNvcmF0b3JCdWlsZGVyLmJ1aWxkU3luY1N0cmF0ZWd5RGVjb3JhdG9yKFN0b3JhZ2VTdHJhdGVnaWVzLlNlc3Npb24sIHByb3RvdHlwZSwgcHJvcE5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKTtcblx0fTtcbn1cbiJdfQ==