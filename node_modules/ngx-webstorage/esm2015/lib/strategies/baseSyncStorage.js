/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { CompatHelper } from '../helpers/compat';
/**
 * @abstract
 */
export class BaseSyncStorageStrategy {
    /**
     * @param {?} storage
     * @param {?} cache
     */
    constructor(storage, cache) {
        this.storage = storage;
        this.cache = cache;
        this.keyChanges = new Subject();
    }
    /**
     * @return {?}
     */
    get isAvailable() {
        if (this._isAvailable === undefined)
            this._isAvailable = CompatHelper.isStorageAvailable(this.storage);
        return this._isAvailable;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        /** @type {?} */
        let data = this.cache.get(this.name, key);
        if (data !== undefined)
            return of(data);
        try {
            /** @type {?} */
            const item = this.storage.getItem(key);
            if (item !== null) {
                data = JSON.parse(item);
                this.cache.set(this.name, key, data);
            }
        }
        catch (err) {
            console.warn(err);
        }
        return of(data);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        /** @type {?} */
        const data = JSON.stringify(value);
        this.storage.setItem(key, data);
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    del(key) {
        this.storage.removeItem(key);
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    }
    /**
     * @return {?}
     */
    clear() {
        this.storage.clear();
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVN5bmNTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RyYXRlZ2llcy9iYXNlU3luY1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUcvQyxNQUFNLE9BQWdCLHVCQUF1Qjs7Ozs7SUFJNUMsWUFBc0IsT0FBbUIsRUFBWSxLQUEyQjtRQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFIdkUsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRzhCLENBQUM7Ozs7SUFJcEYsSUFBSSxXQUFXO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkcsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7O1lBQ1YsSUFBSSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQzlDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJOztrQkFDRyxJQUFJLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzNDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Q7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVU7O2NBQ3BCLElBQUksR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBRUQ7OztJQW5EQSw2Q0FBcUQ7O0lBQ3JELHVDQUErQjs7Ozs7SUFJL0IsK0NBQWdDOzs7OztJQUZwQiwwQ0FBNkI7Ozs7O0lBQUUsd0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9zdG9yYWdlU3RyYXRlZ3knO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N0cmF0ZWd5Q2FjaGVTZXJ2aWNlfSBmcm9tICcuLi9jb3JlL3N0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHtDb21wYXRIZWxwZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29tcGF0JztcbmltcG9ydCB7V2ViU3RvcmFnZX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3dlYlN0b3JhZ2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3kgaW1wbGVtZW50cyBTdG9yYWdlU3RyYXRlZ3k8YW55PiB7XG5cdHJlYWRvbmx5IGtleUNoYW5nZXM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cdGFic3RyYWN0IHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmFnZTogV2ViU3RvcmFnZSwgcHJvdGVjdGVkIGNhY2hlOiBTdHJhdGVneUNhY2hlU2VydmljZSkge31cblxuXHRwcm90ZWN0ZWQgX2lzQXZhaWxhYmxlOiBib29sZWFuO1xuXG5cdGdldCBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5faXNBdmFpbGFibGUgPT09IHVuZGVmaW5lZCkgdGhpcy5faXNBdmFpbGFibGUgPSBDb21wYXRIZWxwZXIuaXNTdG9yYWdlQXZhaWxhYmxlKHRoaXMuc3RvcmFnZSk7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQXZhaWxhYmxlO1xuXHR9XG5cdFxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGxldCBkYXRhOiBhbnkgPSB0aGlzLmNhY2hlLmdldCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkgcmV0dXJuIG9mKGRhdGEpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cdFx0XHRpZiAoaXRlbSAhPT0gbnVsbCkge1xuXHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZShpdGVtKTtcblx0XHRcdFx0dGhpcy5jYWNoZS5zZXQodGhpcy5uYW1lLCBrZXksIGRhdGEpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2YoZGF0YSk7XG5cdH1cblxuXHRzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGRhdGE6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHR0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuXHRcdHRoaXMuY2FjaGUuc2V0KHRoaXMubmFtZSwga2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YodmFsdWUpO1xuXHR9XG5cblx0ZGVsKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHR0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRjbGVhcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQobnVsbCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==