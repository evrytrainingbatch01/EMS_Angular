/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, Inject, InjectionToken, NgModule, Optional } from '@angular/core';
import { LocalStorageProvider, SessionStorageProvider } from './core/nativeStorage';
import { Services } from './services/index';
import { Strategies } from './strategies/index';
import { StrategyIndex } from './services/strategyIndex';
import { StorageKeyManager } from './helpers/storageKeyManager';
/** @type {?} */
export const LIB_CONFIG = new InjectionToken('ngx_webstorage_config');
/**
 * @param {?} index
 * @return {?}
 */
export function appInit(index) {
    index.indexStrategies();
    return (/**
     * @return {?}
     */
    () => StrategyIndex.index);
}
export class NgxWebstorageModule {
    /**
     * @param {?} index
     * @param {?} config
     */
    constructor(index, config) {
        if (config)
            StorageKeyManager.consumeConfiguration(config);
        else
            console.error('NgxWebstorage : Possible misconfiguration (The forRoot method usage is mandatory since the 3.0.0)');
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: NgxWebstorageModule,
            providers: [
                {
                    provide: LIB_CONFIG,
                    useValue: config,
                },
                LocalStorageProvider,
                SessionStorageProvider,
                ...Services,
                ...Strategies,
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInit,
                    deps: [StrategyIndex],
                    multi: true
                }
            ]
        };
    }
}
NgxWebstorageModule.decorators = [
    { type: NgModule, args: [{},] }
];
/** @nocollapse */
NgxWebstorageModule.ctorParameters = () => [
    { type: StrategyIndex },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LIB_CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7O0FBRTlELE1BQU0sT0FBTyxVQUFVLEdBQStDLElBQUksY0FBYyxDQUE2Qix1QkFBdUIsQ0FBQzs7Ozs7QUFFN0ksTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQjtJQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEI7OztJQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFDbEMsQ0FBQztBQUdELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBRS9CLFlBQVksS0FBb0IsRUFBa0MsTUFBa0M7UUFDbkcsSUFBSSxNQUFNO1lBQUUsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ3RELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztJQUN6SCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBcUMsRUFBRTtRQUNyRCxPQUFPO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFFBQVEsRUFBRSxNQUFNO2lCQUNoQjtnQkFDRCxvQkFBb0I7Z0JBQ3BCLHNCQUFzQjtnQkFDdEIsR0FBRyxRQUFRO2dCQUNYLEdBQUcsVUFBVTtnQkFDYjtvQkFDQyxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLE9BQU87b0JBQ25CLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDckIsS0FBSyxFQUFFLElBQUk7aUJBQ1g7YUFDRDtTQUNELENBQUM7SUFDSCxDQUFDOzs7WUE1QkQsUUFBUSxTQUFDLEVBQUU7Ozs7WUFYSixhQUFhOzRDQWNlLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBJbmplY3QsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VQcm92aWRlciwgU2Vzc2lvblN0b3JhZ2VQcm92aWRlcn0gZnJvbSAnLi9jb3JlL25hdGl2ZVN0b3JhZ2UnO1xuaW1wb3J0IHtTZXJ2aWNlc30gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQge1N0cmF0ZWdpZXN9IGZyb20gJy4vc3RyYXRlZ2llcy9pbmRleCc7XG5pbXBvcnQge1N0cmF0ZWd5SW5kZXh9IGZyb20gJy4vc2VydmljZXMvc3RyYXRlZ3lJbmRleCc7XG5pbXBvcnQge05neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge1N0b3JhZ2VLZXlNYW5hZ2VyfSBmcm9tICcuL2hlbHBlcnMvc3RvcmFnZUtleU1hbmFnZXInO1xuXG5leHBvcnQgY29uc3QgTElCX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48Tmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb24+ID0gbmV3IEluamVjdGlvblRva2VuPE5neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9uPignbmd4X3dlYnN0b3JhZ2VfY29uZmlnJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBJbml0KGluZGV4OiBTdHJhdGVneUluZGV4KSB7XG5cdGluZGV4LmluZGV4U3RyYXRlZ2llcygpO1xuXHRyZXR1cm4gKCkgPT4gU3RyYXRlZ3lJbmRleC5pbmRleDtcbn1cblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIE5neFdlYnN0b3JhZ2VNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKGluZGV4OiBTdHJhdGVneUluZGV4LCBAT3B0aW9uYWwoKSBASW5qZWN0KExJQl9DT05GSUcpIGNvbmZpZzogTmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb24pIHtcblx0XHRpZiAoY29uZmlnKSBTdG9yYWdlS2V5TWFuYWdlci5jb25zdW1lQ29uZmlndXJhdGlvbihjb25maWcpO1xuXHRcdGVsc2UgY29uc29sZS5lcnJvcignTmd4V2Vic3RvcmFnZSA6IFBvc3NpYmxlIG1pc2NvbmZpZ3VyYXRpb24gKFRoZSBmb3JSb290IG1ldGhvZCB1c2FnZSBpcyBtYW5kYXRvcnkgc2luY2UgdGhlIDMuMC4wKScpO1xuXHR9XG5cblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOZ3hXZWJzdG9yYWdlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBMSUJfQ09ORklHLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBjb25maWcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdExvY2FsU3RvcmFnZVByb3ZpZGVyLFxuXHRcdFx0XHRTZXNzaW9uU3RvcmFnZVByb3ZpZGVyLFxuXHRcdFx0XHQuLi5TZXJ2aWNlcyxcblx0XHRcdFx0Li4uU3RyYXRlZ2llcyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBhcHBJbml0LFxuXHRcdFx0XHRcdGRlcHM6IFtTdHJhdGVneUluZGV4XSxcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG59XG4iXX0=