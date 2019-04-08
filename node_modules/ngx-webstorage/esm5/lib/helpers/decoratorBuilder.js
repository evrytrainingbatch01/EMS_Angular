/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StrategyIndex } from '../services/strategyIndex';
import { StorageKeyManager } from './storageKeyManager';
import { noop } from './noop';
var DecoratorBuilder = /** @class */ (function () {
    function DecoratorBuilder() {
    }
    /**
     * @param {?} strategyName
     * @param {?} prototype
     * @param {?} propName
     * @param {?=} key
     * @param {?=} defaultValue
     * @return {?}
     */
    DecoratorBuilder.buildSyncStrategyDecorator = /**
     * @param {?} strategyName
     * @param {?} prototype
     * @param {?} propName
     * @param {?=} key
     * @param {?=} defaultValue
     * @return {?}
     */
    function (strategyName, prototype, propName, key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        /** @type {?} */
        var rawKey = key || propName;
        /** @type {?} */
        var storageKey;
        Object.defineProperty(prototype, propName, {
            get: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var value;
                StrategyIndex.get(strategyName).get(getKey()).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return value = result; }));
                return value === undefined ? defaultValue : value;
            }),
            set: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                StrategyIndex.get(strategyName).set(getKey(), value).subscribe(noop);
            })
        });
        /**
         * @return {?}
         */
        function getKey() {
            if (storageKey !== undefined)
                return storageKey;
            return storageKey = StorageKeyManager.normalize(rawKey);
        }
    };
    return DecoratorBuilder;
}());
export { DecoratorBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWJzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZGVjb3JhdG9yQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUI7SUFBQTtJQXNCQSxDQUFDOzs7Ozs7Ozs7SUFwQk8sMkNBQTBCOzs7Ozs7OztJQUFqQyxVQUFrQyxZQUF3QyxFQUFFLFNBQVMsRUFBRSxRQUFnQixFQUFFLEdBQVksRUFBRSxZQUF3QjtRQUF4Qiw2QkFBQSxFQUFBLG1CQUF3Qjs7WUFDeEksTUFBTSxHQUFXLEdBQUcsSUFBSSxRQUFROztZQUNsQyxVQUFrQjtRQUV0QixNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7WUFDMUMsR0FBRzs7O1lBQUU7O29CQUNBLEtBQVU7Z0JBQ2QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSyxHQUFHLE1BQU0sRUFBZCxDQUFjLEVBQUMsQ0FBQztnQkFDcEYsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxDQUFDLENBQUE7WUFDRCxHQUFHOzs7O1lBQUUsVUFBUyxLQUFLO2dCQUNsQixhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxDQUFBO1NBQ0QsQ0FBQyxDQUFDOzs7O1FBRUgsU0FBUyxNQUFNO1lBQ2QsSUFBSSxVQUFVLEtBQUssU0FBUztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUNoRCxPQUFPLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmF0ZWd5SW5kZXh9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmF0ZWd5SW5kZXgnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ2llc30gZnJvbSAnLi4vY29uc3RhbnRzL3N0cmF0ZWd5JztcbmltcG9ydCB7U3RvcmFnZUtleU1hbmFnZXJ9IGZyb20gJy4vc3RvcmFnZUtleU1hbmFnZXInO1xuaW1wb3J0IHtub29wfSBmcm9tICcuL25vb3AnO1xuXG5leHBvcnQgY2xhc3MgRGVjb3JhdG9yQnVpbGRlciB7XG5cdFxuXHRzdGF0aWMgYnVpbGRTeW5jU3RyYXRlZ3lEZWNvcmF0b3Ioc3RyYXRlZ3lOYW1lOiBzdHJpbmcgfCBTdG9yYWdlU3RyYXRlZ2llcywgcHJvdG90eXBlLCBwcm9wTmFtZTogc3RyaW5nLCBrZXk/OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbCkge1xuXHRcdGNvbnN0IHJhd0tleTogc3RyaW5nID0ga2V5IHx8IHByb3BOYW1lO1xuXHRcdGxldCBzdG9yYWdlS2V5OiBzdHJpbmc7XG5cdFx0XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgcHJvcE5hbWUsIHtcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCB2YWx1ZTogYW55O1xuXHRcdFx0XHRTdHJhdGVneUluZGV4LmdldChzdHJhdGVneU5hbWUpLmdldChnZXRLZXkoKSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHZhbHVlID0gcmVzdWx0KTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFN0cmF0ZWd5SW5kZXguZ2V0KHN0cmF0ZWd5TmFtZSkuc2V0KGdldEtleSgpLCB2YWx1ZSkuc3Vic2NyaWJlKG5vb3ApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdGZ1bmN0aW9uIGdldEtleSgpIHtcblx0XHRcdGlmIChzdG9yYWdlS2V5ICE9PSB1bmRlZmluZWQpIHJldHVybiBzdG9yYWdlS2V5O1xuXHRcdFx0cmV0dXJuIHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUocmF3S2V5KTtcblx0XHR9XG5cdH1cbn1cblxuIl19