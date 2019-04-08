/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { CompatHelper } from '../helpers/compat';
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseSyncStorageStrategy = /** @class */ (function () {
    function BaseSyncStorageStrategy(storage, cache) {
        this.storage = storage;
        this.cache = cache;
        this.keyChanges = new Subject();
    }
    Object.defineProperty(BaseSyncStorageStrategy.prototype, "isAvailable", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._isAvailable === undefined)
                this._isAvailable = CompatHelper.isStorageAvailable(this.storage);
            return this._isAvailable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    BaseSyncStorageStrategy.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var data = this.cache.get(this.name, key);
        if (data !== undefined)
            return of(data);
        try {
            /** @type {?} */
            var item = this.storage.getItem(key);
            if (item !== null) {
                data = JSON.parse(item);
                this.cache.set(this.name, key, data);
            }
        }
        catch (err) {
            console.warn(err);
        }
        return of(data);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseSyncStorageStrategy.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var data = JSON.stringify(value);
        this.storage.setItem(key, data);
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    BaseSyncStorageStrategy.prototype.del = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.storage.removeItem(key);
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    };
    /**
     * @return {?}
     */
    BaseSyncStorageStrategy.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.storage.clear();
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    };
    return BaseSyncStorageStrategy;
}());
/**
 * @abstract
 */
export { BaseSyncStorageStrategy };
if (false) {
    /** @type {?} */
    BaseSyncStorageStrategy.prototype.keyChanges;
    /** @type {?} */
    BaseSyncStorageStrategy.prototype.name;
    /**
     * @type {?}
     * @protected
     */
    BaseSyncStorageStrategy.prototype._isAvailable;
    /**
     * @type {?}
     * @protected
     */
    BaseSyncStorageStrategy.prototype.storage;
    /**
     * @type {?}
     * @protected
     */
    BaseSyncStorageStrategy.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVN5bmNTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RyYXRlZ2llcy9iYXNlU3luY1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUcvQzs7OztJQUlDLGlDQUFzQixPQUFtQixFQUFZLEtBQTJCO1FBQTFELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUh2RSxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7SUFHOEIsQ0FBQztJQUlwRixzQkFBSSxnREFBVzs7OztRQUFmO1lBQ0MsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZHLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBVzs7WUFDVixJQUFJLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDOUMsSUFBSSxJQUFJLEtBQUssU0FBUztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUk7O2dCQUNHLElBQUksR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDM0MsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckM7U0FDRDtRQUFDLE9BQU0sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVELHFDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQVU7O1lBQ3BCLElBQUksR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHVDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7Ozs7Ozs7SUFuREEsNkNBQXFEOztJQUNyRCx1Q0FBK0I7Ozs7O0lBSS9CLCtDQUFnQzs7Ozs7SUFGcEIsMENBQTZCOzs7OztJQUFFLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdHJhdGVneUNhY2hlU2VydmljZX0gZnJvbSAnLi4vY29yZS9zdHJhdGVneUNhY2hlJztcbmltcG9ydCB7Q29tcGF0SGVscGVyfSBmcm9tICcuLi9oZWxwZXJzL2NvbXBhdCc7XG5pbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy93ZWJTdG9yYWdlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTeW5jU3RvcmFnZVN0cmF0ZWd5IGltcGxlbWVudHMgU3RvcmFnZVN0cmF0ZWd5PGFueT4ge1xuXHRyZWFkb25seSBrZXlDaGFuZ2VzOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXHRhYnN0cmFjdCByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JhZ2U6IFdlYlN0b3JhZ2UsIHByb3RlY3RlZCBjYWNoZTogU3RyYXRlZ3lDYWNoZVNlcnZpY2UpIHt9XG5cblx0cHJvdGVjdGVkIF9pc0F2YWlsYWJsZTogYm9vbGVhbjtcblxuXHRnZXQgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuX2lzQXZhaWxhYmxlID09PSB1bmRlZmluZWQpIHRoaXMuX2lzQXZhaWxhYmxlID0gQ29tcGF0SGVscGVyLmlzU3RvcmFnZUF2YWlsYWJsZSh0aGlzLnN0b3JhZ2UpO1xuXHRcdHJldHVybiB0aGlzLl9pc0F2YWlsYWJsZTtcblx0fVxuXHRcblx0Z2V0KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRsZXQgZGF0YTogYW55ID0gdGhpcy5jYWNoZS5nZXQodGhpcy5uYW1lLCBrZXkpO1xuXHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHJldHVybiBvZihkYXRhKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpdGVtOiBhbnkgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXHRcdFx0aWYgKGl0ZW0gIT09IG51bGwpIHtcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoaXRlbSk7XG5cdFx0XHRcdHRoaXMuY2FjaGUuc2V0KHRoaXMubmFtZSwga2V5LCBkYXRhKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS53YXJuKGVycik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9mKGRhdGEpO1xuXHR9XG5cblx0c2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBkYXRhOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0dGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcblx0XHR0aGlzLmNhY2hlLnNldCh0aGlzLm5hbWUsIGtleSwgdmFsdWUpO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0cmV0dXJuIG9mKHZhbHVlKTtcblx0fVxuXG5cdGRlbChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0dGhpcy5jYWNoZS5kZWwodGhpcy5uYW1lLCBrZXkpO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cblx0Y2xlYXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0dGhpcy5zdG9yYWdlLmNsZWFyKCk7XG5cdFx0dGhpcy5jYWNoZS5jbGVhcih0aGlzLm5hbWUpO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KG51bGwpO1xuXHRcdHJldHVybiBvZihudWxsKTtcblx0fVxuXG59XG4iXX0=