/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StrategyCacheService } from '../core/strategyCache';
import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
export class LocalStorageStrategy extends BaseSyncStorageStrategy {
    /**
     * @param {?} storage
     * @param {?} cache
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(storage, cache, platformId, zone) {
        super(storage, cache);
        this.storage = storage;
        this.cache = cache;
        this.platformId = platformId;
        this.zone = zone;
        this.name = LocalStorageStrategy.strategyName;
        if (isPlatformBrowser(this.platformId))
            this.listenExternalChanges();
    }
    /**
     * @protected
     * @return {?}
     */
    listenExternalChanges() {
        window.addEventListener('storage', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.zone.run((/**
         * @return {?}
         */
        () => {
            if (event.storageArea !== this.storage)
                return;
            /** @type {?} */
            const key = event.key;
            if (key !== null)
                this.cache.del(this.name, event.key);
            else
                this.cache.clear(this.name);
            this.keyChanges.next(key);
        }))));
    }
}
LocalStorageStrategy.strategyName = StorageStrategies.Local;
/** @nocollapse */
LocalStorageStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LOCAL_STORAGE,] }] },
    { type: StrategyCacheService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
if (false) {
    /** @type {?} */
    LocalStorageStrategy.strategyName;
    /** @type {?} */
    LocalStorageStrategy.prototype.name;
    /**
     * @type {?}
     * @protected
     */
    LocalStorageStrategy.prototype.storage;
    /**
     * @type {?}
     * @protected
     */
    LocalStorageStrategy.prototype.cache;
    /**
     * @type {?}
     * @protected
     */
    LocalStorageStrategy.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    LocalStorageStrategy.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RyYXRlZ2llcy9sb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFELE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHbEQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHVCQUF1Qjs7Ozs7OztJQUloRSxZQUE2QyxPQUFtQixFQUMxQyxLQUEyQixFQUNOLFVBQWUsRUFDcEMsSUFBWTtRQUNqQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSnNCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDMUMsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDTixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7UUFMekIsU0FBSSxHQUFXLG9CQUFvQixDQUFDLFlBQVksQ0FBQztRQU96RCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVTLHFCQUFxQjtRQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFFLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDOUUsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87O2tCQUN6QyxHQUFHLEdBQVcsS0FBSyxDQUFDLEdBQUc7WUFDN0IsSUFBSSxHQUFHLEtBQUssSUFBSTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFuQmUsaUNBQVksR0FBVyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7Ozs0Q0FHbEQsTUFBTSxTQUFDLGFBQWE7WUFaMUIsb0JBQW9COzRDQWNkLE1BQU0sU0FBQyxXQUFXO1lBWmhCLE1BQU07Ozs7SUFPckIsa0NBQStEOztJQUMvRCxvQ0FBMEQ7Ozs7O0lBRTlDLHVDQUFvRDs7Ozs7SUFDcEQscUNBQXFDOzs7OztJQUNyQywwQ0FBOEM7Ozs7O0lBQzlDLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RyYXRlZ3lDYWNoZVNlcnZpY2V9IGZyb20gJy4uL2NvcmUvc3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQge0Jhc2VTeW5jU3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuL2Jhc2VTeW5jU3RvcmFnZSc7XG5pbXBvcnQge0luamVjdCwgTmdab25lLCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xPQ0FMX1NUT1JBR0V9IGZyb20gJy4uL2NvcmUvbmF0aXZlU3RvcmFnZSc7XG5pbXBvcnQge1N0b3JhZ2VTdHJhdGVnaWVzfSBmcm9tICcuLi9jb25zdGFudHMvc3RyYXRlZ3knO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7V2ViU3RvcmFnZX0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL3dlYlN0b3JhZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RyYXRlZ3kgZXh0ZW5kcyBCYXNlU3luY1N0b3JhZ2VTdHJhdGVneSB7XG5cdHN0YXRpYyByZWFkb25seSBzdHJhdGVneU5hbWU6IHN0cmluZyA9IFN0b3JhZ2VTdHJhdGVnaWVzLkxvY2FsO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmcgPSBMb2NhbFN0b3JhZ2VTdHJhdGVneS5zdHJhdGVneU5hbWU7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChMT0NBTF9TVE9SQUdFKSBwcm90ZWN0ZWQgc3RvcmFnZTogV2ViU3RvcmFnZSxcblx0ICAgICAgICAgICAgcHJvdGVjdGVkIGNhY2hlOiBTdHJhdGVneUNhY2hlU2VydmljZSxcblx0ICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IGFueSxcblx0ICAgICAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSkge1xuXHRcdHN1cGVyKHN0b3JhZ2UsIGNhY2hlKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkgdGhpcy5saXN0ZW5FeHRlcm5hbENoYW5nZXMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBsaXN0ZW5FeHRlcm5hbENoYW5nZXMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQuc3RvcmFnZUFyZWEgIT09IHRoaXMuc3RvcmFnZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSBldmVudC5rZXk7XG5cdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGV2ZW50LmtleSk7XG5cdFx0XHRlbHNlIHRoaXMuY2FjaGUuY2xlYXIodGhpcy5uYW1lKTtcblx0XHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0fSkpO1xuXHR9XG5cbn1cbiJdfQ==