/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { noop } from '../../helpers/noop';
import { StorageKeyManager } from '../../helpers/storageKeyManager';
import { distinctUntilChanged, filter, shareReplay, switchMap } from 'rxjs/operators';
export class SyncStorage {
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
        /** @type {?} */
        let value;
        this.strategy.get(StorageKeyManager.normalize(key)).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => value = typeof result === 'undefined' ? null : result));
        return value;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    store(key, value) {
        this.strategy.set(StorageKeyManager.normalize(key), value).subscribe(noop);
        return value;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    clear(key) {
        if (key !== undefined)
            this.strategy.del(StorageKeyManager.normalize(key)).subscribe(noop);
        else
            this.strategy.clear().subscribe(noop);
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
    SyncStorage.prototype.strategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1N0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3RlbXBsYXRlcy9zeW5jU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRWxFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBGLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3ZCLFlBQXNCLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQ3BELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQVc7O1lBQ2YsS0FBVTtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQztRQUNqSSxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBWTtRQUNqQixJQUFJLEdBQUcsS0FBSyxTQUFTO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELGVBQWUsS0FBWSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFdkQsT0FBTyxDQUFDLEdBQVc7UUFDbEIsR0FBRyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbkMsTUFBTTs7OztRQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxHQUFHLEVBQUMsRUFDaEUsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFDdkMsb0JBQW9CLEVBQUUsRUFDdEIsV0FBVyxFQUFFLENBQ2IsQ0FBQztJQUNILENBQUM7Q0FFRDs7Ozs7O0lBaENZLCtCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0b3JhZ2VTdHJhdGVneSc7XG5pbXBvcnQge25vb3B9IGZyb20gJy4uLy4uL2hlbHBlcnMvbm9vcCc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0b3JhZ2VTZXJ2aWNlJztcbmltcG9ydCB7U3RvcmFnZUtleU1hbmFnZXJ9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZUtleU1hbmFnZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgU3luY1N0b3JhZ2UgaW1wbGVtZW50cyBTdG9yYWdlU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdHJhdGVneTogU3RvcmFnZVN0cmF0ZWd5PGFueT4pIHtcblx0fVxuXG5cdHJldHJpZXZlKGtleTogc3RyaW5nKTogYW55IHtcblx0XHRsZXQgdmFsdWU6IGFueTtcblx0XHR0aGlzLnN0cmF0ZWd5LmdldChTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHZhbHVlID0gdHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVzdWx0KTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRzdG9yZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG5cdFx0dGhpcy5zdHJhdGVneS5zZXQoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSksIHZhbHVlKS5zdWJzY3JpYmUobm9vcCk7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y2xlYXIoa2V5Pzogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGtleSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhpcy5zdHJhdGVneS5kZWwoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSkpLnN1YnNjcmliZShub29wKTtcblx0XHRlbHNlIHRoaXMuc3RyYXRlZ3kuY2xlYXIoKS5zdWJzY3JpYmUobm9vcCk7XG5cdH1cblxuXHRnZXRTdHJhdGVneU5hbWUoKTogc3RyaW5nIHtyZXR1cm4gdGhpcy5zdHJhdGVneS5uYW1lOyB9XG5cblx0b2JzZXJ2ZShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0a2V5ID0gU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSk7XG5cdFx0cmV0dXJuIHRoaXMuc3RyYXRlZ3kua2V5Q2hhbmdlcy5waXBlKFxuXHRcdFx0ZmlsdGVyKChjaGFuZ2VkOiBzdHJpbmcpID0+IGNoYW5nZWQgPT09IG51bGwgfHwgY2hhbmdlZCA9PT0ga2V5KSxcblx0XHRcdHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0cmF0ZWd5LmdldChrZXkpKSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRzaGFyZVJlcGxheSgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=