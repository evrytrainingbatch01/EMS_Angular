/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StorageKeyManager } from '../../helpers/storageKeyManager';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
export class AsyncStorage {
    /**
     * @param {?} strategy
     */
    constructor(strategy) {
        this.strategy = strategy;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    retrieve(key) {
        return this.strategy.get(StorageKeyManager.normalize(key)).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => typeof value === 'undefined' ? null : value)));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    store(key, value) {
        return this.strategy.set(StorageKeyManager.normalize(key), value);
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    clear(key) {
        return key !== undefined ? this.strategy.del(StorageKeyManager.normalize(key)) : this.strategy.clear();
    }
    /**
     * @return {?}
     */
    getStrategyName() { return this.strategy.name; }
    /**
     * @param {?} key
     * @return {?}
     */
    observe(key) {
        key = StorageKeyManager.normalize(key);
        return this.strategy.keyChanges.pipe(filter((/**
         * @param {?} changed
         * @return {?}
         */
        (changed) => changed === null || changed === key)), switchMap((/**
         * @return {?}
         */
        () => this.strategy.get(key))), distinctUntilChanged(), shareReplay());
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsyncStorage.prototype.strategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29yZS90ZW1wbGF0ZXMvYXN5bmNTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekYsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFeEIsWUFBc0IsUUFBOEI7UUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUQsR0FBRzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQ2hFLENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBWTtRQUNqQixPQUFPLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCxlQUFlLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBRXhELE9BQU8sQ0FBQyxHQUFXO1FBQ2xCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ25DLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFDLEVBQ2hFLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQ3ZDLG9CQUFvQixFQUFFLEVBQ3RCLFdBQVcsRUFBRSxDQUNiLENBQUM7SUFDSCxDQUFDO0NBQ0Q7Ozs7OztJQTVCWSxnQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdG9yYWdlU3RyYXRlZ3knO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RvcmFnZVNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yYWdlS2V5TWFuYWdlcn0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlS2V5TWFuYWdlcic7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdHJhdGVneTogU3RvcmFnZVN0cmF0ZWd5PGFueT4pIHtcblx0fVxuXG5cdHJldHJpZXZlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJhdGVneS5nZXQoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSkpLnBpcGUoXG5cdFx0XHRtYXAoKHZhbHVlOiBhbnkpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdmFsdWUpXG5cdFx0KTtcblx0fVxuXG5cdHN0b3JlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJhdGVneS5zZXQoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSksIHZhbHVlKTtcblx0fVxuXG5cdGNsZWFyKGtleT86IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdHJldHVybiBrZXkgIT09IHVuZGVmaW5lZCA/IHRoaXMuc3RyYXRlZ3kuZGVsKFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShrZXkpKSA6IHRoaXMuc3RyYXRlZ3kuY2xlYXIoKTtcblx0fVxuXG5cdGdldFN0cmF0ZWd5TmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdHJhdGVneS5uYW1lOyB9XG5cblx0b2JzZXJ2ZShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0a2V5ID0gU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSk7XG5cdFx0cmV0dXJuIHRoaXMuc3RyYXRlZ3kua2V5Q2hhbmdlcy5waXBlKFxuXHRcdFx0ZmlsdGVyKChjaGFuZ2VkOiBzdHJpbmcpID0+IGNoYW5nZWQgPT09IG51bGwgfHwgY2hhbmdlZCA9PT0ga2V5KSxcblx0XHRcdHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0cmF0ZWd5LmdldChrZXkpKSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRzaGFyZVJlcGxheSgpXG5cdFx0KTtcblx0fVxufVxuIl19