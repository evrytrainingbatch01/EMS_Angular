/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompatHelper = /** @class */ (function () {
    function CompatHelper() {
    }
    /**
     * @param {?} storage
     * @return {?}
     */
    CompatHelper.isStorageAvailable = /**
     * @param {?} storage
     * @return {?}
     */
    function (storage) {
        /** @type {?} */
        var available = true;
        try {
            if (typeof storage === 'object') {
                storage.setItem('test-storage', 'foobar');
                storage.removeItem('test-storage');
            }
            else
                available = false;
        }
        catch (e) {
            available = false;
        }
        return available;
    };
    return CompatHelper;
}());
export { CompatHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvaGVscGVycy9jb21wYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7SUFkTywrQkFBa0I7Ozs7SUFBekIsVUFBMEIsT0FBbUI7O1lBQ3hDLFNBQVMsR0FBRyxJQUFJO1FBQ3BCLElBQUk7WUFDSCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbkM7O2dCQUNJLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUNWLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJTdG9yYWdlfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvd2ViU3RvcmFnZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wYXRIZWxwZXIge1xuXG5cdHN0YXRpYyBpc1N0b3JhZ2VBdmFpbGFibGUoc3RvcmFnZTogV2ViU3RvcmFnZSk6IGJvb2xlYW4ge1xuXHRcdGxldCBhdmFpbGFibGUgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIHN0b3JhZ2UgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbSgndGVzdC1zdG9yYWdlJywgJ2Zvb2JhcicpO1xuXHRcdFx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3Qtc3RvcmFnZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBhdmFpbGFibGUgPSBmYWxzZTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdGF2YWlsYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gYXZhaWxhYmxlO1xuXHR9XG5cbn1cblxuIl19