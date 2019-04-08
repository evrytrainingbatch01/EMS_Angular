/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { StrategyCacheService } from '../core/strategyCache';
import { StorageStrategies } from '../constants/strategy';
import { Inject } from '@angular/core';
export class InMemoryStorageStrategy {
    /**
     * @param {?} cache
     */
    constructor(cache) {
        this.cache = cache;
        this.keyChanges = new Subject();
        this.isAvailable = true;
        this.name = InMemoryStorageStrategy.strategyName;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return of(this.cache.get(this.name, key));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.cache.set(this.name, key, value);
        this.keyChanges.next(key);
        return of(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    del(key) {
        this.cache.del(this.name, key);
        this.keyChanges.next(key);
        return of(null);
    }
    /**
     * @return {?}
     */
    clear() {
        this.cache.clear(this.name);
        this.keyChanges.next(null);
        return of(null);
    }
}
InMemoryStorageStrategy.strategyName = StorageStrategies.InMemory;
/** @nocollapse */
InMemoryStorageStrategy.ctorParameters = () => [
    { type: StrategyCacheService, decorators: [{ type: Inject, args: [StrategyCacheService,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5NZW1vcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2luTWVtb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWEsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXJDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFNbkMsWUFBb0QsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFKdEUsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7SUFFcUIsQ0FBQzs7Ozs7SUFFbkYsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7O0FBM0JlLG9DQUFZLEdBQVcsaUJBQWlCLENBQUMsUUFBUSxDQUFDOzs7WUFMM0Qsb0JBQW9CLHVCQVVkLE1BQU0sU0FBQyxvQkFBb0I7Ozs7SUFMeEMscUNBQWtFOztJQUNsRSw2Q0FBcUQ7O0lBQ3JELDhDQUE0Qjs7SUFDNUIsdUNBQTZEOzs7OztJQUVqRCx3Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3N0b3JhZ2VTdHJhdGVneSc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3RyYXRlZ3lDYWNoZVNlcnZpY2V9IGZyb20gJy4uL2NvcmUvc3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVnaWVzfSBmcm9tICcuLi9jb25zdGFudHMvc3RyYXRlZ3knO1xuaW1wb3J0IHtJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdG9yYWdlU3RyYXRlZ3kgaW1wbGVtZW50cyBTdG9yYWdlU3RyYXRlZ3k8YW55PiB7XG5cdHN0YXRpYyByZWFkb25seSBzdHJhdGVneU5hbWU6IHN0cmluZyA9IFN0b3JhZ2VTdHJhdGVnaWVzLkluTWVtb3J5O1xuXHRyZWFkb25seSBrZXlDaGFuZ2VzOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXHRpc0F2YWlsYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9IEluTWVtb3J5U3RvcmFnZVN0cmF0ZWd5LnN0cmF0ZWd5TmFtZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFN0cmF0ZWd5Q2FjaGVTZXJ2aWNlKSBwcm90ZWN0ZWQgY2FjaGU6IFN0cmF0ZWd5Q2FjaGVTZXJ2aWNlKSB7fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGUuZ2V0KHRoaXMubmFtZSwga2V5KSk7XG5cdH1cblxuXHRzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHRoaXMuY2FjaGUuc2V0KHRoaXMubmFtZSwga2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YodmFsdWUpO1xuXHR9XG5cblx0ZGVsKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0dGhpcy5jYWNoZS5kZWwodGhpcy5uYW1lLCBrZXkpO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cblx0Y2xlYXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0dGhpcy5jYWNoZS5jbGVhcih0aGlzLm5hbWUpO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KG51bGwpO1xuXHRcdHJldHVybiBvZihudWxsKTtcblx0fVxuXG59XG4iXX0=