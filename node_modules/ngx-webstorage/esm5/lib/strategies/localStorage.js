/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StrategyCacheService } from '../core/strategyCache';
import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
var LocalStorageStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageStrategy, _super);
    function LocalStorageStrategy(storage, cache, platformId, zone) {
        var _this = _super.call(this, storage, cache) || this;
        _this.storage = storage;
        _this.cache = cache;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.name = LocalStorageStrategy.strategyName;
        if (isPlatformBrowser(_this.platformId))
            _this.listenExternalChanges();
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    LocalStorageStrategy.prototype.listenExternalChanges = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        window.addEventListener('storage', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.zone.run((/**
         * @return {?}
         */
        function () {
            if (event.storageArea !== _this.storage)
                return;
            /** @type {?} */
            var key = event.key;
            if (key !== null)
                _this.cache.del(_this.name, event.key);
            else
                _this.cache.clear(_this.name);
            _this.keyChanges.next(key);
        })); }));
    };
    LocalStorageStrategy.strategyName = StorageStrategies.Local;
    /** @nocollapse */
    LocalStorageStrategy.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCAL_STORAGE,] }] },
        { type: StrategyCacheService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    return LocalStorageStrategy;
}(BaseSyncStorageStrategy));
export { LocalStorageStrategy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RyYXRlZ2llcy9sb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBR2xEO0lBQTBDLGdEQUF1QjtJQUloRSw4QkFBNkMsT0FBbUIsRUFDMUMsS0FBMkIsRUFDTixVQUFlLEVBQ3BDLElBQVk7UUFIbEMsWUFJQyxrQkFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBRXJCO1FBTjRDLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFDMUMsV0FBSyxHQUFMLEtBQUssQ0FBc0I7UUFDTixnQkFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBTHpCLFVBQUksR0FBVyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7UUFPekQsSUFBSSxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDO1lBQUUsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0lBQ3RFLENBQUM7Ozs7O0lBRVMsb0RBQXFCOzs7O0lBQS9CO1FBQUEsaUJBUUM7UUFQQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFFLFVBQUMsS0FBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1FBQUM7WUFDekUsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87O2dCQUN6QyxHQUFHLEdBQVcsS0FBSyxDQUFDLEdBQUc7WUFDN0IsSUFBSSxHQUFHLEtBQUssSUFBSTtnQkFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2xELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFOMEQsQ0FNMUQsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQW5CZSxpQ0FBWSxHQUFXLGlCQUFpQixDQUFDLEtBQUssQ0FBQzs7O2dEQUdsRCxNQUFNLFNBQUMsYUFBYTtnQkFaMUIsb0JBQW9CO2dEQWNkLE1BQU0sU0FBQyxXQUFXO2dCQVpoQixNQUFNOztJQTRCdEIsMkJBQUM7Q0FBQSxBQXRCRCxDQUEwQyx1QkFBdUIsR0FzQmhFO1NBdEJZLG9CQUFvQjs7O0lBQ2hDLGtDQUErRDs7SUFDL0Qsb0NBQTBEOzs7OztJQUU5Qyx1Q0FBb0Q7Ozs7O0lBQ3BELHFDQUFxQzs7Ozs7SUFDckMsMENBQThDOzs7OztJQUM5QyxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmF0ZWd5Q2FjaGVTZXJ2aWNlfSBmcm9tICcuLi9jb3JlL3N0cmF0ZWd5Q2FjaGUnO1xuaW1wb3J0IHtCYXNlU3luY1N0b3JhZ2VTdHJhdGVneX0gZnJvbSAnLi9iYXNlU3luY1N0b3JhZ2UnO1xuaW1wb3J0IHtJbmplY3QsIE5nWm9uZSwgUExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMT0NBTF9TVE9SQUdFfSBmcm9tICcuLi9jb3JlL25hdGl2ZVN0b3JhZ2UnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ2llc30gZnJvbSAnLi4vY29uc3RhbnRzL3N0cmF0ZWd5JztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy93ZWJTdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0cmF0ZWd5IGV4dGVuZHMgQmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3kge1xuXHRzdGF0aWMgcmVhZG9ubHkgc3RyYXRlZ3lOYW1lOiBzdHJpbmcgPSBTdG9yYWdlU3RyYXRlZ2llcy5Mb2NhbDtcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nID0gTG9jYWxTdG9yYWdlU3RyYXRlZ3kuc3RyYXRlZ3lOYW1lO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxfU1RPUkFHRSkgcHJvdGVjdGVkIHN0b3JhZ2U6IFdlYlN0b3JhZ2UsXG5cdCAgICAgICAgICAgIHByb3RlY3RlZCBjYWNoZTogU3RyYXRlZ3lDYWNoZVNlcnZpY2UsXG5cdCAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnksXG5cdCAgICAgICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUpIHtcblx0XHRzdXBlcihzdG9yYWdlLCBjYWNoZSk7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHRoaXMubGlzdGVuRXh0ZXJuYWxDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgbGlzdGVuRXh0ZXJuYWxDaGFuZ2VzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHJldHVybjtcblx0XHRcdGNvbnN0IGtleTogc3RyaW5nID0gZXZlbnQua2V5O1xuXHRcdFx0aWYgKGtleSAhPT0gbnVsbCkgdGhpcy5jYWNoZS5kZWwodGhpcy5uYW1lLCBldmVudC5rZXkpO1xuXHRcdFx0ZWxzZSB0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0XHR0aGlzLmtleUNoYW5nZXMubmV4dChrZXkpO1xuXHRcdH0pKTtcblx0fVxuXG59XG4iXX0=