/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StrategyCacheService } from '../core/strategyCache';
import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { SESSION_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
export class SessionStorageStrategy extends BaseSyncStorageStrategy {
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
        this.name = SessionStorageStrategy.strategyName;
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
            if (event.key !== null)
                this.cache.del(this.name, event.key);
            else
                this.cache.clear(this.name);
            this.keyChanges.next(key);
        }))));
    }
}
SessionStorageStrategy.strategyName = StorageStrategies.Session;
/** @nocollapse */
SessionStorageStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [SESSION_STORAGE,] }] },
    { type: StrategyCacheService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
if (false) {
    /** @type {?} */
    SessionStorageStrategy.strategyName;
    /** @type {?} */
    SessionStorageStrategy.prototype.name;
    /**
     * @type {?}
     * @protected
     */
    SessionStorageStrategy.prototype.storage;
    /**
     * @type {?}
     * @protected
     */
    SessionStorageStrategy.prototype.cache;
    /**
     * @type {?}
     * @protected
     */
    SessionStorageStrategy.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    SessionStorageStrategy.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblN0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL3Nlc3Npb25TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBR2xELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUFJbEUsWUFBK0MsT0FBbUIsRUFDNUMsS0FBMkIsRUFDTixVQUFlLEVBQ3BDLElBQVk7UUFDakMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUp3QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzVDLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQ04sZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTHpCLFNBQUksR0FBVyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7UUFPM0QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFUyxxQkFBcUI7UUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQzlFLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPOztrQkFDekMsR0FBRyxHQUFXLEtBQUssQ0FBQyxHQUFHO1lBQzdCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJO2dCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztBQW5CZSxtQ0FBWSxHQUFXLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzs7OzRDQUdwRCxNQUFNLFNBQUMsZUFBZTtZQVo1QixvQkFBb0I7NENBY2QsTUFBTSxTQUFDLFdBQVc7WUFaaEIsTUFBTTs7OztJQU9yQixvQ0FBaUU7O0lBQ2pFLHNDQUE0RDs7Ozs7SUFFaEQseUNBQXNEOzs7OztJQUN0RCx1Q0FBcUM7Ozs7O0lBQ3JDLDRDQUE4Qzs7Ozs7SUFDOUMsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHJhdGVneUNhY2hlU2VydmljZX0gZnJvbSAnLi4vY29yZS9zdHJhdGVneUNhY2hlJztcbmltcG9ydCB7QmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4vYmFzZVN5bmNTdG9yYWdlJztcbmltcG9ydCB7SW5qZWN0LCBOZ1pvbmUsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0VTU0lPTl9TVE9SQUdFfSBmcm9tICcuLi9jb3JlL25hdGl2ZVN0b3JhZ2UnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ2llc30gZnJvbSAnLi4vY29uc3RhbnRzL3N0cmF0ZWd5JztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy93ZWJTdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RyYXRlZ3kgZXh0ZW5kcyBCYXNlU3luY1N0b3JhZ2VTdHJhdGVneSB7XG5cdHN0YXRpYyByZWFkb25seSBzdHJhdGVneU5hbWU6IHN0cmluZyA9IFN0b3JhZ2VTdHJhdGVnaWVzLlNlc3Npb247XG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9IFNlc3Npb25TdG9yYWdlU3RyYXRlZ3kuc3RyYXRlZ3lOYW1lO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoU0VTU0lPTl9TVE9SQUdFKSBwcm90ZWN0ZWQgc3RvcmFnZTogV2ViU3RvcmFnZSxcblx0ICAgICAgICAgICAgcHJvdGVjdGVkIGNhY2hlOiBTdHJhdGVneUNhY2hlU2VydmljZSxcblx0ICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IGFueSxcblx0ICAgICAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSkge1xuXHRcdHN1cGVyKHN0b3JhZ2UsIGNhY2hlKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkgdGhpcy5saXN0ZW5FeHRlcm5hbENoYW5nZXMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBsaXN0ZW5FeHRlcm5hbENoYW5nZXMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQuc3RvcmFnZUFyZWEgIT09IHRoaXMuc3RvcmFnZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSBldmVudC5rZXk7XG5cdFx0XHRpZiAoZXZlbnQua2V5ICE9PSBudWxsKSB0aGlzLmNhY2hlLmRlbCh0aGlzLm5hbWUsIGV2ZW50LmtleSk7XG5cdFx0XHRlbHNlIHRoaXMuY2FjaGUuY2xlYXIodGhpcy5uYW1lKTtcblx0XHRcdHRoaXMua2V5Q2hhbmdlcy5uZXh0KGtleSk7XG5cdFx0fSkpO1xuXHR9XG5cbn1cbiJdfQ==