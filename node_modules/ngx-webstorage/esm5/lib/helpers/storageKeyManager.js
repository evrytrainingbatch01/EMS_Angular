/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultIsCaseSensitive, DefaultPrefix, DefaultSeparator } from '../constants/config';
var StorageKeyManager = /** @class */ (function () {
    function StorageKeyManager() {
    }
    /**
     * @param {?} raw
     * @return {?}
     */
    StorageKeyManager.normalize = /**
     * @param {?} raw
     * @return {?}
     */
    function (raw) {
        raw = StorageKeyManager.isCaseSensitive ? raw : raw.toLowerCase();
        return "" + StorageKeyManager.prefix + StorageKeyManager.separator + raw;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageKeyManager.isNormalizedKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.indexOf(StorageKeyManager.prefix + StorageKeyManager.separator) === 0;
    };
    /**
     * @param {?} prefix
     * @return {?}
     */
    StorageKeyManager.setPrefix = /**
     * @param {?} prefix
     * @return {?}
     */
    function (prefix) {
        StorageKeyManager.prefix = prefix;
    };
    /**
     * @param {?} separator
     * @return {?}
     */
    StorageKeyManager.setSeparator = /**
     * @param {?} separator
     * @return {?}
     */
    function (separator) {
        StorageKeyManager.separator = separator;
    };
    /**
     * @param {?} enable
     * @return {?}
     */
    StorageKeyManager.setCaseSensitive = /**
     * @param {?} enable
     * @return {?}
     */
    function (enable) {
        StorageKeyManager.isCaseSensitive = enable;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StorageKeyManager.consumeConfiguration = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if ('prefix' in config)
            this.setPrefix(config.prefix);
        if ('separator' in config)
            this.setSeparator(config.separator);
        if ('caseSensitive' in config)
            this.setCaseSensitive(config.caseSensitive);
    };
    StorageKeyManager.prefix = DefaultPrefix;
    StorageKeyManager.separator = DefaultSeparator;
    StorageKeyManager.isCaseSensitive = DefaultIsCaseSensitive;
    return StorageKeyManager;
}());
export { StorageKeyManager };
if (false) {
    /** @type {?} */
    StorageKeyManager.prefix;
    /** @type {?} */
    StorageKeyManager.separator;
    /** @type {?} */
    StorageKeyManager.isCaseSensitive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZUtleU1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2Vic3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL3N0b3JhZ2VLZXlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFHNUY7SUFBQTtJQWdDQSxDQUFDOzs7OztJQTFCTywyQkFBUzs7OztJQUFoQixVQUFpQixHQUFXO1FBQzNCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xFLE9BQU8sS0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEdBQUssQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVNLGlDQUFlOzs7O0lBQXRCLFVBQXVCLEdBQVc7UUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFTSwyQkFBUzs7OztJQUFoQixVQUFpQixNQUFjO1FBQzlCLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFTSw4QkFBWTs7OztJQUFuQixVQUFvQixTQUFpQjtRQUNwQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU0sa0NBQWdCOzs7O0lBQXZCLFVBQXdCLE1BQWU7UUFDdEMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVNLHNDQUFvQjs7OztJQUEzQixVQUE0QixNQUFrQztRQUM3RCxJQUFJLFFBQVEsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxXQUFXLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksZUFBZSxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUE3Qk0sd0JBQU0sR0FBRyxhQUFhLENBQUM7SUFDdkIsMkJBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QixpQ0FBZSxHQUFHLHNCQUFzQixDQUFDO0lBNEJqRCx3QkFBQztDQUFBLEFBaENELElBZ0NDO1NBaENZLGlCQUFpQjs7O0lBRTdCLHlCQUE4Qjs7SUFDOUIsNEJBQW9DOztJQUNwQyxrQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlZmF1bHRJc0Nhc2VTZW5zaXRpdmUsIERlZmF1bHRQcmVmaXgsIERlZmF1bHRTZXBhcmF0b3J9IGZyb20gJy4uL2NvbnN0YW50cy9jb25maWcnO1xuaW1wb3J0IHtOZ3hXZWJzdG9yYWdlQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VLZXlNYW5hZ2VyIHtcblx0XG5cdHN0YXRpYyBwcmVmaXggPSBEZWZhdWx0UHJlZml4O1xuXHRzdGF0aWMgc2VwYXJhdG9yID0gRGVmYXVsdFNlcGFyYXRvcjtcblx0c3RhdGljIGlzQ2FzZVNlbnNpdGl2ZSA9IERlZmF1bHRJc0Nhc2VTZW5zaXRpdmU7XG5cdFxuXHRzdGF0aWMgbm9ybWFsaXplKHJhdzogc3RyaW5nKSB7XG5cdFx0cmF3ID0gU3RvcmFnZUtleU1hbmFnZXIuaXNDYXNlU2Vuc2l0aXZlID8gcmF3IDogcmF3LnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGAke1N0b3JhZ2VLZXlNYW5hZ2VyLnByZWZpeH0ke1N0b3JhZ2VLZXlNYW5hZ2VyLnNlcGFyYXRvcn0ke3Jhd31gO1xuXHR9XG5cdFxuXHRzdGF0aWMgaXNOb3JtYWxpemVkS2V5KGtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIGtleS5pbmRleE9mKFN0b3JhZ2VLZXlNYW5hZ2VyLnByZWZpeCArIFN0b3JhZ2VLZXlNYW5hZ2VyLnNlcGFyYXRvcikgPT09IDA7XG5cdH1cblx0XG5cdHN0YXRpYyBzZXRQcmVmaXgocHJlZml4OiBzdHJpbmcpIHtcblx0XHRTdG9yYWdlS2V5TWFuYWdlci5wcmVmaXggPSBwcmVmaXg7XG5cdH1cblx0XG5cdHN0YXRpYyBzZXRTZXBhcmF0b3Ioc2VwYXJhdG9yOiBzdHJpbmcpIHtcblx0XHRTdG9yYWdlS2V5TWFuYWdlci5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG5cdH1cblx0XG5cdHN0YXRpYyBzZXRDYXNlU2Vuc2l0aXZlKGVuYWJsZTogYm9vbGVhbikge1xuXHRcdFN0b3JhZ2VLZXlNYW5hZ2VyLmlzQ2FzZVNlbnNpdGl2ZSA9IGVuYWJsZTtcblx0fVxuXHRcblx0c3RhdGljIGNvbnN1bWVDb25maWd1cmF0aW9uKGNvbmZpZzogTmd4V2Vic3RvcmFnZUNvbmZpZ3VyYXRpb24pIHtcblx0XHRpZiAoJ3ByZWZpeCcgaW4gY29uZmlnKSB0aGlzLnNldFByZWZpeChjb25maWcucHJlZml4KTtcblx0XHRpZiAoJ3NlcGFyYXRvcicgaW4gY29uZmlnKSB0aGlzLnNldFNlcGFyYXRvcihjb25maWcuc2VwYXJhdG9yKTtcblx0XHRpZiAoJ2Nhc2VTZW5zaXRpdmUnIGluIGNvbmZpZykgdGhpcy5zZXRDYXNlU2Vuc2l0aXZlKGNvbmZpZy5jYXNlU2Vuc2l0aXZlKTtcblx0fVxufVxuIl19