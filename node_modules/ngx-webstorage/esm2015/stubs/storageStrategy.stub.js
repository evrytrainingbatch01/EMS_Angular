/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { Optional } from '@angular/core';
/** @type {?} */
export const StorageStrategyStubName = 'stub_strategy';
export class StorageStrategyStub {
    /**
     * @param {?=} name
     */
    constructor(name) {
        this.keyChanges = new Subject();
        this.store = {};
        this._available = true;
        this.name = name || StorageStrategyStubName;
    }
    /**
     * @return {?}
     */
    get isAvailable() {
        return this._available;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return of(this.store[key]);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.store[key] = value;
        this.keyChanges.next(key);
        return of(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    del(key) {
        delete this.store[key];
        this.keyChanges.next(key);
        return of(null);
    }
    /**
     * @return {?}
     */
    clear() {
        this.store = {};
        this.keyChanges.next(null);
        return of(null);
    }
}
/** @nocollapse */
StorageStrategyStub.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    StorageStrategyStub.prototype.keyChanges;
    /** @type {?} */
    StorageStrategyStub.prototype.store;
    /** @type {?} */
    StorageStrategyStub.prototype._available;
    /** @type {?} */
    StorageStrategyStub.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZVN0cmF0ZWd5LnN0dWIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbInN0dWJzL3N0b3JhZ2VTdHJhdGVneS5zdHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV2QyxNQUFNLE9BQU8sdUJBQXVCLEdBQVcsZUFBZTtBQUU5RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTy9CLFlBQXdCLElBQWE7UUFMNUIsZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUlqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSx1QkFBdUIsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7O3lDQTVCWSxRQUFROzs7O0lBTHJCLHlDQUFxRDs7SUFDckQsb0NBQXVCOztJQUN2Qix5Q0FBa0M7O0lBQ2xDLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4uL2xpYi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgU3RvcmFnZVN0cmF0ZWd5U3R1Yk5hbWU6IHN0cmluZyA9ICdzdHViX3N0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTdHJhdGVneVN0dWIgaW1wbGVtZW50cyBTdG9yYWdlU3RyYXRlZ3k8YW55PiB7XG5cblx0cmVhZG9ubHkga2V5Q2hhbmdlczogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblx0cHVibGljIHN0b3JlOiBhbnkgPSB7fTtcblx0cHVibGljIF9hdmFpbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgbmFtZT86IHN0cmluZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgU3RvcmFnZVN0cmF0ZWd5U3R1Yk5hbWU7XG5cdH1cblxuXHRnZXQgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2F2YWlsYWJsZTtcblx0fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIG9mKHRoaXMuc3RvcmVba2V5XSk7XG5cdH1cblxuXHRzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHRoaXMuc3RvcmVba2V5XSA9IHZhbHVlO1xuXHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0cmV0dXJuIG9mKHZhbHVlKTtcblx0fVxuXG5cdGRlbChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdGRlbGV0ZSB0aGlzLnN0b3JlW2tleV07XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQoa2V5KTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRjbGVhcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHR0aGlzLnN0b3JlID0ge307XG5cdFx0dGhpcy5rZXlDaGFuZ2VzLm5leHQobnVsbCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==