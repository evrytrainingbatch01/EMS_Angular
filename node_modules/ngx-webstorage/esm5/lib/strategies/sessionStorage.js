/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StrategyCacheService } from '../core/strategyCache';
import { BaseSyncStorageStrategy } from './baseSyncStorage';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { SESSION_STORAGE } from '../core/nativeStorage';
import { StorageStrategies } from '../constants/strategy';
import { isPlatformBrowser } from '@angular/common';
var SessionStorageStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageStrategy, _super);
    function SessionStorageStrategy(storage, cache, platformId, zone) {
        var _this = _super.call(this, storage, cache) || this;
        _this.storage = storage;
        _this.cache = cache;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.name = SessionStorageStrategy.strategyName;
        if (isPlatformBrowser(_this.platformId))
            _this.listenExternalChanges();
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    SessionStorageStrategy.prototype.listenExternalChanges = /**
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
            if (event.key !== null)
                _this.cache.del(_this.name, event.key);
            else
                _this.cache.clear(_this.name);
            _this.keyChanges.next(key);
        })); }));
    };
    SessionStorageStrategy.strategyName = StorageStrategies.Session;
    /** @nocollapse */
    SessionStorageStrategy.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [SESSION_STORAGE,] }] },
        { type: StrategyCacheService },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    return SessionStorageStrategy;
}(BaseSyncStorageStrategy));
export { SessionStorageStrategy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblN0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL3Nlc3Npb25TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUdsRDtJQUE0QyxrREFBdUI7SUFJbEUsZ0NBQStDLE9BQW1CLEVBQzVDLEtBQTJCLEVBQ04sVUFBZSxFQUNwQyxJQUFZO1FBSGxDLFlBSUMsa0JBQU0sT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUVyQjtRQU44QyxhQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzVDLFdBQUssR0FBTCxLQUFLLENBQXNCO1FBQ04sZ0JBQVUsR0FBVixVQUFVLENBQUs7UUFDcEMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUx6QixVQUFJLEdBQVcsc0JBQXNCLENBQUMsWUFBWSxDQUFDO1FBTzNELElBQUksaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztJQUN0RSxDQUFDOzs7OztJQUVTLHNEQUFxQjs7OztJQUEvQjtRQUFBLGlCQVFDO1FBUEEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBRSxVQUFDLEtBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztRQUFDO1lBQ3pFLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPOztnQkFDekMsR0FBRyxHQUFXLEtBQUssQ0FBQyxHQUFHO1lBQzdCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJO2dCQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDeEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQU4wRCxDQU0xRCxFQUFDLENBQUM7SUFDTCxDQUFDO0lBbkJlLG1DQUFZLEdBQVcsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzs7Z0RBR3BELE1BQU0sU0FBQyxlQUFlO2dCQVo1QixvQkFBb0I7Z0RBY2QsTUFBTSxTQUFDLFdBQVc7Z0JBWmhCLE1BQU07O0lBNEJ0Qiw2QkFBQztDQUFBLEFBdEJELENBQTRDLHVCQUF1QixHQXNCbEU7U0F0Qlksc0JBQXNCOzs7SUFDbEMsb0NBQWlFOztJQUNqRSxzQ0FBNEQ7Ozs7O0lBRWhELHlDQUFzRDs7Ozs7SUFDdEQsdUNBQXFDOzs7OztJQUNyQyw0Q0FBOEM7Ozs7O0lBQzlDLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RyYXRlZ3lDYWNoZVNlcnZpY2V9IGZyb20gJy4uL2NvcmUvc3RyYXRlZ3lDYWNoZSc7XG5pbXBvcnQge0Jhc2VTeW5jU3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuL2Jhc2VTeW5jU3RvcmFnZSc7XG5pbXBvcnQge0luamVjdCwgTmdab25lLCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NFU1NJT05fU1RPUkFHRX0gZnJvbSAnLi4vY29yZS9uYXRpdmVTdG9yYWdlJztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4uL2NvbnN0YW50cy9zdHJhdGVneSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtXZWJTdG9yYWdlfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvd2ViU3RvcmFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0cmF0ZWd5IGV4dGVuZHMgQmFzZVN5bmNTdG9yYWdlU3RyYXRlZ3kge1xuXHRzdGF0aWMgcmVhZG9ubHkgc3RyYXRlZ3lOYW1lOiBzdHJpbmcgPSBTdG9yYWdlU3RyYXRlZ2llcy5TZXNzaW9uO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmcgPSBTZXNzaW9uU3RvcmFnZVN0cmF0ZWd5LnN0cmF0ZWd5TmFtZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFNFU1NJT05fU1RPUkFHRSkgcHJvdGVjdGVkIHN0b3JhZ2U6IFdlYlN0b3JhZ2UsXG5cdCAgICAgICAgICAgIHByb3RlY3RlZCBjYWNoZTogU3RyYXRlZ3lDYWNoZVNlcnZpY2UsXG5cdCAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnksXG5cdCAgICAgICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUpIHtcblx0XHRzdXBlcihzdG9yYWdlLCBjYWNoZSk7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHRoaXMubGlzdGVuRXh0ZXJuYWxDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgbGlzdGVuRXh0ZXJuYWxDaGFuZ2VzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHJldHVybjtcblx0XHRcdGNvbnN0IGtleTogc3RyaW5nID0gZXZlbnQua2V5O1xuXHRcdFx0aWYgKGV2ZW50LmtleSAhPT0gbnVsbCkgdGhpcy5jYWNoZS5kZWwodGhpcy5uYW1lLCBldmVudC5rZXkpO1xuXHRcdFx0ZWxzZSB0aGlzLmNhY2hlLmNsZWFyKHRoaXMubmFtZSk7XG5cdFx0XHR0aGlzLmtleUNoYW5nZXMubmV4dChrZXkpO1xuXHRcdH0pKTtcblx0fVxuXG59XG4iXX0=