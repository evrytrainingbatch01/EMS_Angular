/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { noop } from '../../helpers/noop';
import { StorageKeyManager } from '../../helpers/storageKeyManager';
import { distinctUntilChanged, filter, shareReplay, switchMap } from 'rxjs/operators';
var SyncStorage = /** @class */ (function () {
    function SyncStorage(strategy) {
        this.strategy = strategy;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SyncStorage.prototype.retrieve = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value;
        this.strategy.get(StorageKeyManager.normalize(key)).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return value = typeof result === 'undefined' ? null : result; }));
        return value;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SyncStorage.prototype.store = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.strategy.set(StorageKeyManager.normalize(key), value).subscribe(noop);
        return value;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    SyncStorage.prototype.clear = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        if (key !== undefined)
            this.strategy.del(StorageKeyManager.normalize(key)).subscribe(noop);
        else
            this.strategy.clear().subscribe(noop);
    };
    /**
     * @return {?}
     */
    SyncStorage.prototype.getStrategyName = /**
     * @return {?}
     */
    function () { return this.strategy.name; };
    /**
     * @param {?} key
     * @return {?}
     */
    SyncStorage.prototype.observe = /**
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
    return SyncStorage;
}());
export { SyncStorage };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SyncStorage.prototype.strategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1N0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3RlbXBsYXRlcy9zeW5jU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRWxFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBGO0lBQ0MscUJBQXNCLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQ3BELENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFTLEdBQVc7O1lBQ2YsS0FBVTtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUssR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFyRCxDQUFxRCxFQUFDLENBQUM7UUFDakksT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCwyQkFBSzs7Ozs7SUFBTCxVQUFNLEdBQVcsRUFBRSxLQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELDJCQUFLOzs7O0lBQUwsVUFBTSxHQUFZO1FBQ2pCLElBQUksR0FBRyxLQUFLLFNBQVM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQscUNBQWU7OztJQUFmLGNBQTJCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV2RCw2QkFBTzs7OztJQUFQLFVBQVEsR0FBVztRQUFuQixpQkFRQztRQVBBLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ25DLE1BQU07Ozs7UUFBQyxVQUFDLE9BQWUsSUFBSyxPQUFBLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBbkMsQ0FBbUMsRUFBQyxFQUNoRSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsRUFDdkMsb0JBQW9CLEVBQUUsRUFDdEIsV0FBVyxFQUFFLENBQ2IsQ0FBQztJQUNILENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7SUFoQ1ksK0JBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7bm9vcH0gZnJvbSAnLi4vLi4vaGVscGVycy9ub29wJztcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RvcmFnZVNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yYWdlS2V5TWFuYWdlcn0gZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlS2V5TWFuYWdlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBTeW5jU3RvcmFnZSBpbXBsZW1lbnRzIFN0b3JhZ2VTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHN0cmF0ZWd5OiBTdG9yYWdlU3RyYXRlZ3k8YW55Pikge1xuXHR9XG5cblx0cmV0cmlldmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCB2YWx1ZTogYW55O1xuXHRcdHRoaXMuc3RyYXRlZ3kuZ2V0KFN0b3JhZ2VLZXlNYW5hZ2VyLm5vcm1hbGl6ZShrZXkpKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4gdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXN1bHQpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHN0b3JlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcblx0XHR0aGlzLnN0cmF0ZWd5LnNldChTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KSwgdmFsdWUpLnN1YnNjcmliZShub29wKTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjbGVhcihrZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLnN0cmF0ZWd5LmRlbChTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KSkuc3Vic2NyaWJlKG5vb3ApO1xuXHRcdGVsc2UgdGhpcy5zdHJhdGVneS5jbGVhcigpLnN1YnNjcmliZShub29wKTtcblx0fVxuXG5cdGdldFN0cmF0ZWd5TmFtZSgpOiBzdHJpbmcge3JldHVybiB0aGlzLnN0cmF0ZWd5Lm5hbWU7IH1cblxuXHRvYnNlcnZlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRrZXkgPSBTdG9yYWdlS2V5TWFuYWdlci5ub3JtYWxpemUoa2V5KTtcblx0XHRyZXR1cm4gdGhpcy5zdHJhdGVneS5rZXlDaGFuZ2VzLnBpcGUoXG5cdFx0XHRmaWx0ZXIoKGNoYW5nZWQ6IHN0cmluZykgPT4gY2hhbmdlZCA9PT0gbnVsbCB8fCBjaGFuZ2VkID09PSBrZXkpLFxuXHRcdFx0c3dpdGNoTWFwKCgpID0+IHRoaXMuc3RyYXRlZ3kuZ2V0KGtleSkpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHNoYXJlUmVwbGF5KClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==