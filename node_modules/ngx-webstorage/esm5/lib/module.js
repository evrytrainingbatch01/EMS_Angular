/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APP_INITIALIZER, Inject, InjectionToken, NgModule, Optional } from '@angular/core';
import { LocalStorageProvider, SessionStorageProvider } from './core/nativeStorage';
import { Services } from './services/index';
import { Strategies } from './strategies/index';
import { StrategyIndex } from './services/strategyIndex';
import { StorageKeyManager } from './helpers/storageKeyManager';
/** @type {?} */
export var LIB_CONFIG = new InjectionToken('ngx_webstorage_config');
/**
 * @param {?} index
 * @return {?}
 */
export function appInit(index) {
    index.indexStrategies();
    return (/**
     * @return {?}
     */
    function () { return StrategyIndex.index; });
}
var NgxWebstorageModule = /** @class */ (function () {
    function NgxWebstorageModule(index, config) {
        if (config)
            StorageKeyManager.consumeConfiguration(config);
        else
            console.error('NgxWebstorage : Possible misconfiguration (The forRoot method usage is mandatory since the 3.0.0)');
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxWebstorageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxWebstorageModule,
            providers: tslib_1.__spread([
                {
                    provide: LIB_CONFIG,
                    useValue: config,
                },
                LocalStorageProvider,
                SessionStorageProvider
            ], Services, Strategies, [
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInit,
                    deps: [StrategyIndex],
                    multi: true
                }
            ])
        };
    };
    NgxWebstorageModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    /** @nocollapse */
    NgxWebstorageModule.ctorParameters = function () { return [
        { type: StrategyIndex },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LIB_CONFIG,] }] }
    ]; };
    return NgxWebstorageModule;
}());
export { NgxWebstorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQUU5RCxNQUFNLEtBQU8sVUFBVSxHQUErQyxJQUFJLGNBQWMsQ0FBNkIsdUJBQXVCLENBQUM7Ozs7O0FBRTdJLE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBb0I7SUFDM0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCOzs7SUFBTyxjQUFNLE9BQUEsYUFBYSxDQUFDLEtBQUssRUFBbkIsQ0FBbUIsRUFBQztBQUNsQyxDQUFDO0FBRUQ7SUFHQyw2QkFBWSxLQUFvQixFQUFrQyxNQUFrQztRQUNuRyxJQUFJLE1BQU07WUFBRSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO0lBQ3pILENBQUM7Ozs7O0lBRU0sMkJBQU87Ozs7SUFBZCxVQUFlLE1BQXVDO1FBQXZDLHVCQUFBLEVBQUEsV0FBdUM7UUFDckQsT0FBTztZQUNOLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUztnQkFDUjtvQkFDQyxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsUUFBUSxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELG9CQUFvQjtnQkFDcEIsc0JBQXNCO2VBQ25CLFFBQVEsRUFDUixVQUFVO2dCQUNiO29CQUNDLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsT0FBTztvQkFDbkIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNyQixLQUFLLEVBQUUsSUFBSTtpQkFDWDtjQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQTVCRCxRQUFRLFNBQUMsRUFBRTs7OztnQkFYSixhQUFhO2dEQWNlLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVTs7SUEyQmpFLDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVByb3ZpZGVyLCBTZXNzaW9uU3RvcmFnZVByb3ZpZGVyfSBmcm9tICcuL2NvcmUvbmF0aXZlU3RvcmFnZSc7XG5pbXBvcnQge1NlcnZpY2VzfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7U3RyYXRlZ2llc30gZnJvbSAnLi9zdHJhdGVnaWVzL2luZGV4JztcbmltcG9ydCB7U3RyYXRlZ3lJbmRleH0gZnJvbSAnLi9zZXJ2aWNlcy9zdHJhdGVneUluZGV4JztcbmltcG9ydCB7Tmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7U3RvcmFnZUtleU1hbmFnZXJ9IGZyb20gJy4vaGVscGVycy9zdG9yYWdlS2V5TWFuYWdlcic7XG5cbmV4cG9ydCBjb25zdCBMSUJfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb24+KCduZ3hfd2Vic3RvcmFnZV9jb25maWcnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcEluaXQoaW5kZXg6IFN0cmF0ZWd5SW5kZXgpIHtcblx0aW5kZXguaW5kZXhTdHJhdGVnaWVzKCk7XG5cdHJldHVybiAoKSA9PiBTdHJhdGVneUluZGV4LmluZGV4O1xufVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTmd4V2Vic3RvcmFnZU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoaW5kZXg6IFN0cmF0ZWd5SW5kZXgsIEBPcHRpb25hbCgpIEBJbmplY3QoTElCX0NPTkZJRykgY29uZmlnOiBOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbikge1xuXHRcdGlmIChjb25maWcpIFN0b3JhZ2VLZXlNYW5hZ2VyLmNvbnN1bWVDb25maWd1cmF0aW9uKGNvbmZpZyk7XG5cdFx0ZWxzZSBjb25zb2xlLmVycm9yKCdOZ3hXZWJzdG9yYWdlIDogUG9zc2libGUgbWlzY29uZmlndXJhdGlvbiAoVGhlIGZvclJvb3QgbWV0aG9kIHVzYWdlIGlzIG1hbmRhdG9yeSBzaW5jZSB0aGUgMy4wLjApJyk7XG5cdH1cblxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IE5neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9uID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IE5neFdlYnN0b3JhZ2VNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IExJQl9DT05GSUcsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IGNvbmZpZyxcblx0XHRcdFx0fSxcblx0XHRcdFx0TG9jYWxTdG9yYWdlUHJvdmlkZXIsXG5cdFx0XHRcdFNlc3Npb25TdG9yYWdlUHJvdmlkZXIsXG5cdFx0XHRcdC4uLlNlcnZpY2VzLFxuXHRcdFx0XHQuLi5TdHJhdGVnaWVzLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IGFwcEluaXQsXG5cdFx0XHRcdFx0ZGVwczogW1N0cmF0ZWd5SW5kZXhdLFxuXHRcdFx0XHRcdG11bHRpOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9O1xuXHR9XG5cbn1cbiJdfQ==