/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StorageKeyManager } from '../../helpers/storageKeyManager';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
var AsyncStorage = /** @class */ (function () {
    function AsyncStorage(strategy) {
        this.strategy = strategy;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    AsyncStorage.prototype.retrieve = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.strategy.get(StorageKeyManager.normalize(key)).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return typeof value === 'undefined' ? null : value; })));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    AsyncStorage.prototype.store = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return this.strategy.set(StorageKeyManager.normalize(key), value);
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    AsyncStorage.prototype.clear = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        return key !== undefined ? this.strategy.del(StorageKeyManager.normalize(key)) : this.strategy.clear();
    };
    /**
     * @return {?}
     */
    AsyncStorage.prototype.getStrategyName = /**
     * @return {?}
     */
    function () { return this.strategy.name; };
    /**
     * @param {?} key
     * @return {?}
     */
    AsyncStorage.prototype.observe = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        key = StorageKeyManager.normalize(key);
        return this.strategy.keyChanges.pipe(filter((/**
         * @param {?} changed
         * @return {?}
         */
        function (changed) { return changed === null || changed === key; })), switchMap((/**
         * @return {?}
         */
        function () { return _this.strategy.get(key); })), distinctUntilChanged(), shareReplay());
    };
    return AsyncStorage;
}());
export { AsyncStorage };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsyncStorage.prototype.strategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29yZS90ZW1wbGF0ZXMvYXN5bmNTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekY7SUFFQyxzQkFBc0IsUUFBOEI7UUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7SUFDcEQsQ0FBQzs7Ozs7SUFFRCwrQkFBUTs7OztJQUFSLFVBQVMsR0FBVztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUQsR0FBRzs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBM0MsQ0FBMkMsRUFBQyxDQUNoRSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNEJBQUs7Ozs7O0lBQUwsVUFBTSxHQUFXLEVBQUUsS0FBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxHQUFZO1FBQ2pCLE9BQU8sR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEcsQ0FBQzs7OztJQUVELHNDQUFlOzs7SUFBZixjQUE0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFeEQsOEJBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFBbkIsaUJBUUM7UUFQQSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNuQyxNQUFNOzs7O1FBQUMsVUFBQyxPQUFlLElBQUssT0FBQSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxHQUFHLEVBQW5DLENBQW1DLEVBQUMsRUFDaEUsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDLEVBQ3ZDLG9CQUFvQixFQUFFLEVBQ3RCLFdBQVcsRUFBRSxDQUNiLENBQUM7SUFDSCxDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7O0lBNUJZLGdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0b3JhZ2VTdHJhdGVneSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdG9yYWdlU2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VLZXlNYW5hZ2VyfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2VLZXlNYW5hZ2VyJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBc3luY1N0b3JhZ2UgaW1wbGVtZW50cyBTdG9yYWdlU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHN0cmF0ZWd5OiBTdG9yYWdlU3RyYXRlZ3k8YW55Pikge1xuXHR9XG5cblx0cmV0cmlldmUoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cmF0ZWd5LmdldChTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KSkucGlwZShcblx0XHRcdG1hcCgodmFsdWU6IGFueSkgPT4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB2YWx1ZSlcblx0XHQpO1xuXHR9XG5cblx0c3RvcmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cmF0ZWd5LnNldChTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KSwgdmFsdWUpO1xuXHR9XG5cblx0Y2xlYXIoa2V5Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0cmV0dXJuIGtleSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zdHJhdGVneS5kZWwoU3RvcmFnZUtleU1hbmFnZXIubm9ybWFsaXplKGtleSkpIDogdGhpcy5zdHJhdGVneS5jbGVhcigpO1xuXHR9XG5cblx0Z2V0U3RyYXRlZ3lOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN0cmF0ZWd5Lm5hbWU7IH1cblxuXHRvYnNlcnZlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRrZXkgPSBTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KTtcblx0XHRyZXR1cm4gdGhpcy5zdHJhdGVneS5rZXlDaGFuZ2VzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoKGNoYW5nZWQ6IHN0cmluZykgPT4gY2hhbmdlZCA9PT0gbnVsbCB8fCBjaGFuZ2VkID09PSBrZXkpLFxuXHRcdFx0c3dpdGNoTWFwKCgpID0+IHRoaXMuc3RyYXRlZ3kuZ2V0KGtleSkpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHNoYXJlUmVwbGF5KClcblx0XHQpO1xuXHR9XG59XG4iXX0=