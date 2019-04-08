/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SyncStorage } from '../core/templates/syncStorage';
import { StrategyIndex } from './strategyIndex';
import { StorageStrategies } from '../constants/strategy';
var SessionStorageService = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageService, _super);
    function SessionStorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SessionStorageService;
}(SyncStorage));
export { SessionStorageService };
/**
 * @param {?} index
 * @return {?}
 */
export function buildService(index) {
    /** @type {?} */
    var strategy = index.indexStrategy(StorageStrategies.Session);
    return new SyncStorage(strategy);
}
/** @type {?} */
export var SessionStorageServiceProvider = {
    provide: SessionStorageService,
    useFactory: buildService,
    deps: [StrategyIndex]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvblN0b3JhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXNzaW9uU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQ7SUFBMkMsaURBQVc7SUFBdEQ7O0lBQXdELENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFBekQsQ0FBMkMsV0FBVyxHQUFHOzs7Ozs7QUFFekQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFvQjs7UUFDMUMsUUFBUSxHQUF5QixLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUNyRixPQUFPLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7O0FBRUQsTUFBTSxLQUFPLDZCQUE2QixHQUFvQjtJQUM3RCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztDQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmFjdG9yeVByb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3luY1N0b3JhZ2V9IGZyb20gJy4uL2NvcmUvdGVtcGxhdGVzL3N5bmNTdG9yYWdlJztcbmltcG9ydCB7U3RyYXRlZ3lJbmRleH0gZnJvbSAnLi9zdHJhdGVneUluZGV4JztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWd5fSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvc3RvcmFnZVN0cmF0ZWd5JztcbmltcG9ydCB7U3RvcmFnZVN0cmF0ZWdpZXN9IGZyb20gJy4uL2NvbnN0YW50cy9zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgZXh0ZW5kcyBTeW5jU3RvcmFnZSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZXJ2aWNlKGluZGV4OiBTdHJhdGVneUluZGV4KSB7XG5cdGNvbnN0IHN0cmF0ZWd5OiBTdG9yYWdlU3RyYXRlZ3k8YW55PiA9IGluZGV4LmluZGV4U3RyYXRlZ3koU3RvcmFnZVN0cmF0ZWdpZXMuU2Vzc2lvbik7XG5cdHJldHVybiBuZXcgU3luY1N0b3JhZ2Uoc3RyYXRlZ3kpO1xufVxuXG5leHBvcnQgY29uc3QgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXI6IEZhY3RvcnlQcm92aWRlciA9IHtcblx0cHJvdmlkZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxuXHR1c2VGYWN0b3J5OiBidWlsZFNlcnZpY2UsXG5cdGRlcHM6IFtTdHJhdGVneUluZGV4XVxufTtcbiJdfQ==