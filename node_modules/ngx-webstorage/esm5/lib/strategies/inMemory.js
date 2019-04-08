/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { StrategyCacheService } from '../core/strategyCache';
import { StorageStrategies } from '../constants/strategy';
import { Inject } from '@angular/core';
var InMemoryStorageStrategy = /** @class */ (function () {
    function InMemoryStorageStrategy(cache) {
        this.cache = cache;
        this.keyChanges = new Subject();
        this.isAvailable = true;
        this.name = InMemoryStorageStrategy.strategyName;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    InMemoryStorageStrategy.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return of(this.cache.get(this.name, key));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    InMemoryStorageStrategy.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    InMemoryStorageStrategy.prototype.del = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    };
    /**
     * @return {?}
     */
    InMemoryStorageStrategy.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    };
    InMemoryStorageStrategy.strategyName = StorageStrategies.InMemory;
    /** @nocollapse */
    InMemoryStorageStrategy.ctorParameters = function () { return [
        { type: StrategyCacheService, decorators: [{ type: Inject, args: [StrategyCacheService,] }] }
    ]; };
    return InMemoryStorageStrategy;
}());
export { InMemoryStorageStrategy };
if (false) {
    /** @type {?} */
    InMemoryStorageStrategy.strategyName;
    /** @type {?} */
    InMemoryStorageStrategy.prototype.keyChanges;
    /** @type {?} */
    InMemoryStorageStrategy.prototype.isAvailable;
    /** @type {?} */
    InMemoryStorageStrategy.prototype.name;
    /**
     * @type {?}
     * @protected
     */
    InMemoryStorageStrategy.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5NZW1vcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2luTWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWEsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXJDO0lBTUMsaUNBQW9ELEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBSnRFLGVBQVUsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyRCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsdUJBQXVCLENBQUMsWUFBWSxDQUFDO0lBRXFCLENBQUM7Ozs7O0lBRW5GLHFDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELHFDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHVDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBM0JlLG9DQUFZLEdBQVcsaUJBQWlCLENBQUMsUUFBUSxDQUFDOzs7Z0JBTDNELG9CQUFvQix1QkFVZCxNQUFNLFNBQUMsb0JBQW9COztJQXdCekMsOEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSx1QkFBdUI7OztJQUNuQyxxQ0FBa0U7O0lBQ2xFLDZDQUFxRDs7SUFDckQsOENBQTRCOztJQUM1Qix1Q0FBNkQ7Ozs7O0lBRWpELHdDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdHJhdGVneUNhY2hlU2VydmljZX0gZnJvbSAnLi4vY29yZS9zdHJhdGVneUNhY2hlJztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4uL2NvbnN0YW50cy9zdHJhdGVneSc7XG5pbXBvcnQge0luamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0b3JhZ2VTdHJhdGVneSBpbXBsZW1lbnRzIFN0b3JhZ2VTdHJhdGVneTxhbnk+IHtcblx0c3RhdGljIHJlYWRvbmx5IHN0cmF0ZWd5TmFtZTogc3RyaW5nID0gU3RvcmFnZVN0cmF0ZWdpZXMuSW5NZW1vcnk7XG5cdHJlYWRvbmx5IGtleUNoYW5nZXM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG5cdGlzQXZhaWxhYmxlOiBib29sZWFuID0gdHJ1ZTtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nID0gSW5NZW1vcnlTdG9yYWdlU3RyYXRlZ3kuc3RyYXRlZ3lOYW1lO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoU3RyYXRlZ3lDYWNoZVNlcnZpY2UpIHByb3RlY3RlZCBjYWNoZTogU3RyYXRlZ3lDYWNoZVNlcnZpY2UpIHt9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZS5nZXQodGhpcy5uYW1lLCBrZXkpKTtcblx0fVxuXG5cdHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0dGhpcy5jYWNoZS5zZXQodGhpcy5uYW1lLCBrZXksIHZhbHVlKTtcblx0XHR0aGlzLmtleUNoYW5nZXMubmV4dChrZXkpO1xuXHRcdHJldHVybiBvZih2YWx1ZSk7XG5cdH1cblxuXHRkZWwoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGtleSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRjbGVhcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQobnVsbCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==