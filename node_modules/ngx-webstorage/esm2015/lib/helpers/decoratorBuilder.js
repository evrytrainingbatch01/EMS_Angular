/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StrategyIndex } from '../services/strategyIndex';
import { StorageKeyManager } from './storageKeyManager';
import { noop } from './noop';
export class DecoratorBuilder {
    /**
     * @param {?} strategyName
     * @param {?} prototype
     * @param {?} propName
     * @param {?=} key
     * @param {?=} defaultValue
     * @return {?}
     */
    static buildSyncStrategyDecorator(strategyName, prototype, propName, key, defaultValue = null) {
        /** @type {?} */
        const rawKey = key || propName;
        /** @type {?} */
        let storageKey;
        Object.defineProperty(prototype, propName, {
            get: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                let value;
                StrategyIndex.get(strategyName).get(getKey()).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => value = result));
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWJzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZGVjb3JhdG9yQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7O0lBRTVCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxZQUF3QyxFQUFFLFNBQVMsRUFBRSxRQUFnQixFQUFFLEdBQVksRUFBRSxlQUFvQixJQUFJOztjQUN4SSxNQUFNLEdBQVcsR0FBRyxJQUFJLFFBQVE7O1lBQ2xDLFVBQWtCO1FBRXRCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRTtZQUMxQyxHQUFHOzs7WUFBRTs7b0JBQ0EsS0FBVTtnQkFDZCxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUMsQ0FBQztnQkFDcEYsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxDQUFDLENBQUE7WUFDRCxHQUFHOzs7O1lBQUUsVUFBUyxLQUFLO2dCQUNsQixhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEUsQ0FBQyxDQUFBO1NBQ0QsQ0FBQyxDQUFDOzs7O1FBRUgsU0FBUyxNQUFNO1lBQ2QsSUFBSSxVQUFVLEtBQUssU0FBUztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUNoRCxPQUFPLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RyYXRlZ3lJbmRleH0gZnJvbSAnLi4vc2VydmljZXMvc3RyYXRlZ3lJbmRleCc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVnaWVzfSBmcm9tICcuLi9jb25zdGFudHMvc3RyYXRlZ3knO1xuaW1wb3J0IHtTdG9yYWdlS2V5TWFuYWdlcn0gZnJvbSAnLi9zdG9yYWdlS2V5TWFuYWdlcic7XG5pbXBvcnQge25vb3B9IGZyb20gJy4vbm9vcCc7XG5cbmV4cG9ydCBjbGFzcyBEZWNvcmF0b3JCdWlsZGVyIHtcblx0XG5cdHN0YXRpYyBidWlsZFN5bmNTdHJhdGVneURlY29yYXRvcihzdHJhdGVneU5hbWU6IHN0cmluZyB8IFN0b3JhZ2VTdHJhdGVnaWVzLCBwcm90b3R5cGUsIHByb3BOYW1lOiBzdHJpbmcsIGtleT86IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKSB7XG5cdFx0Y29uc3QgcmF3S2V5OiBzdHJpbmcgPSBrZXkgfHwgcHJvcE5hbWU7XG5cdFx0bGV0IHN0b3JhZ2VLZXk6IHN0cmluZztcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBwcm9wTmFtZSwge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IHZhbHVlOiBhbnk7XG5cdFx0XHRcdFN0cmF0ZWd5SW5kZXguZ2V0KHN0cmF0ZWd5TmFtZSkuZ2V0KGdldEtleSgpKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4gdmFsdWUgPSByZXN1bHQpO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0U3RyYXRlZ3lJbmRleC5nZXQoc3RyYXRlZ3lOYW1lKS5zZXQoZ2V0S2V5KCksIHZhbHVlKS5zdWJzY3JpYmUobm9vcCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0ZnVuY3Rpb24gZ2V0S2V5KCkge1xuXHRcdFx0aWYgKHN0b3JhZ2VLZXkgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHN0b3JhZ2VLZXk7XG5cdFx0XHRyZXR1cm4gc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShyYXdLZXkpO1xuXHRcdH1cblx0fVxufVxuXG4iXX0=