/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultIsCaseSensitive, DefaultPrefix, DefaultSeparator } from '../constants/config';
export class StorageKeyManager {
    /**
     * @param {?} raw
     * @return {?}
     */
    static normalize(raw) {
        raw = StorageKeyManager.isCaseSensitive ? raw : raw.toLowerCase();
        return `${StorageKeyManager.prefix}${StorageKeyManager.separator}${raw}`;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static isNormalizedKey(key) {
        return key.indexOf(StorageKeyManager.prefix + StorageKeyManager.separator) === 0;
    }
    /**
     * @param {?} prefix
     * @return {?}
     */
    static setPrefix(prefix) {
        StorageKeyManager.prefix = prefix;
    }
    /**
     * @param {?} separator
     * @return {?}
     */
    static setSeparator(separator) {
        StorageKeyManager.separator = separator;
    }
    /**
     * @param {?} enable
     * @return {?}
     */
    static setCaseSensitive(enable) {
        StorageKeyManager.isCaseSensitive = enable;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static consumeConfiguration(config) {
        if ('prefix' in config)
            this.setPrefix(config.prefix);
        if ('separator' in config)
            this.setSeparator(config.separator);
        if ('caseSensitive' in config)
            this.setCaseSensitive(config.caseSensitive);
    }
}
StorageKeyManager.prefix = DefaultPrefix;
StorageKeyManager.separator = DefaultSeparator;
StorageKeyManager.isCaseSensitive = DefaultIsCaseSensitive;
if (false) {
    /** @type {?} */
    StorageKeyManager.prefix;
    /** @type {?} */
    StorageKeyManager.separator;
    /** @type {?} */
    StorageKeyManager.isCaseSensitive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZUtleU1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL3N0b3JhZ2VLZXlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFHNUYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFNN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFXO1FBQzNCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xFLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFXO1FBQ2pDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFjO1FBQzlCLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWlCO1FBQ3BDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBZTtRQUN0QyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQWtDO1FBQzdELElBQUksUUFBUSxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLFdBQVcsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxlQUFlLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7QUE3Qk0sd0JBQU0sR0FBRyxhQUFhLENBQUM7QUFDdkIsMkJBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixpQ0FBZSxHQUFHLHNCQUFzQixDQUFDOzs7SUFGaEQseUJBQThCOztJQUM5Qiw0QkFBb0M7O0lBQ3BDLGtDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVmYXVsdElzQ2FzZVNlbnNpdGl2ZSwgRGVmYXVsdFByZWZpeCwgRGVmYXVsdFNlcGFyYXRvcn0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbmZpZyc7XG5pbXBvcnQge05neFdlYnN0b3JhZ2VDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUtleU1hbmFnZXIge1xuXHRcblx0c3RhdGljIHByZWZpeCA9IERlZmF1bHRQcmVmaXg7XG5cdHN0YXRpYyBzZXBhcmF0b3IgPSBEZWZhdWx0U2VwYXJhdG9yO1xuXHRzdGF0aWMgaXNDYXNlU2Vuc2l0aXZlID0gRGVmYXVsdElzQ2FzZVNlbnNpdGl2ZTtcblx0XG5cdHN0YXRpYyBub3JtYWxpemUocmF3OiBzdHJpbmcpIHtcblx0XHRyYXcgPSBTdG9yYWdlS2V5TWFuYWdlci5pc0Nhc2VTZW5zaXRpdmUgPyByYXcgOiByYXcudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gYCR7U3RvcmFnZUtleU1hbmFnZXIucHJlZml4fSR7U3RvcmFnZUtleU1hbmFnZXIuc2VwYXJhdG9yfSR7cmF3fWA7XG5cdH1cblx0XG5cdHN0YXRpYyBpc05vcm1hbGl6ZWRLZXkoa2V5OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4ga2V5LmluZGV4T2YoU3RvcmFnZUtleU1hbmFnZXIucHJlZml4ICsgU3RvcmFnZUtleU1hbmFnZXIuc2VwYXJhdG9yKSA9PT0gMDtcblx0fVxuXHRcblx0c3RhdGljIHNldFByZWZpeChwcmVmaXg6IHN0cmluZykge1xuXHRcdFN0b3JhZ2VLZXlNYW5hZ2VyLnByZWZpeCA9IHByZWZpeDtcblx0fVxuXHRcblx0c3RhdGljIHNldFNlcGFyYXRvcihzZXBhcmF0b3I6IHN0cmluZykge1xuXHRcdFN0b3JhZ2VLZXlNYW5hZ2VyLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcblx0fVxuXHRcblx0c3RhdGljIHNldENhc2VTZW5zaXRpdmUoZW5hYmxlOiBib29sZWFuKSB7XG5cdFx0U3RvcmFnZUtleU1hbmFnZXIuaXNDYXNlU2Vuc2l0aXZlID0gZW5hYmxlO1xuXHR9XG5cdFxuXHRzdGF0aWMgY29uc3VtZUNvbmZpZ3VyYXRpb24oY29uZmlnOiBOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbikge1xuXHRcdGlmICgncHJlZml4JyBpbiBjb25maWcpIHRoaXMuc2V0UHJlZml4KGNvbmZpZy5wcmVmaXgpO1xuXHRcdGlmICgnc2VwYXJhdG9yJyBpbiBjb25maWcpIHRoaXMuc2V0U2VwYXJhdG9yKGNvbmZpZy5zZXBhcmF0b3IpO1xuXHRcdGlmICgnY2FzZVNlbnNpdGl2ZScgaW4gY29uZmlnKSB0aGlzLnNldENhc2VTZW5zaXRpdmUoY29uZmlnLmNhc2VTZW5zaXRpdmUpO1xuXHR9XG59XG4iXX0=