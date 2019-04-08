/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SyncStorage } from '../core/templates/syncStorage';
import { StrategyIndex } from './strategyIndex';
import { StorageStrategies } from '../constants/strategy';
var LocalStorageService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageService, _super);
    function LocalStorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalStorageService;
}(SyncStorage));
export { LocalStorageService };
/**
 * @param {?} index
 * @return {?}
 */
export function buildService(index) {
    /** @type {?} */
    var strategy = index.indexStrategy(StorageStrategies.Local);
    return new SyncStorage(strategy);
}
/** @type {?} */
export var LocalStorageServiceProvider = {
    provide: LocalStorageService,
    useFactory: buildService,
    deps: [StrategyIndex]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RDtJQUF5QywrQ0FBVztJQUFwRDs7SUFBc0QsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUF2RCxDQUF5QyxXQUFXLEdBQUc7Ozs7OztBQUV2RCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQW9COztRQUMxQyxRQUFRLEdBQXlCLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBQ25GLE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCLEdBQW9CO0lBQzNELE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGYWN0b3J5UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTeW5jU3RvcmFnZX0gZnJvbSAnLi4vY29yZS90ZW1wbGF0ZXMvc3luY1N0b3JhZ2UnO1xuaW1wb3J0IHtTdHJhdGVneUluZGV4fSBmcm9tICcuL3N0cmF0ZWd5SW5kZXgnO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ3l9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9zdG9yYWdlU3RyYXRlZ3knO1xuaW1wb3J0IHtTdG9yYWdlU3RyYXRlZ2llc30gZnJvbSAnLi4vY29uc3RhbnRzL3N0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2UgZXh0ZW5kcyBTeW5jU3RvcmFnZSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZXJ2aWNlKGluZGV4OiBTdHJhdGVneUluZGV4KSB7XG5cdGNvbnN0IHN0cmF0ZWd5OiBTdG9yYWdlU3RyYXRlZ3k8YW55PiA9IGluZGV4LmluZGV4U3RyYXRlZ3koU3RvcmFnZVN0cmF0ZWdpZXMuTG9jYWwpO1xuXHRyZXR1cm4gbmV3IFN5bmNTdG9yYWdlKHN0cmF0ZWd5KTtcbn1cblxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlcjogRmFjdG9yeVByb3ZpZGVyID0ge1xuXHRwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHR1c2VGYWN0b3J5OiBidWlsZFNlcnZpY2UsXG5cdGRlcHM6IFtTdHJhdGVneUluZGV4XVxufTtcbiJdfQ==