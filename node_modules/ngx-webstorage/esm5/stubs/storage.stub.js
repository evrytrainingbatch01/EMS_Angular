/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageStub = /** @class */ (function () {
    function StorageStub() {
        this.store = {};
    }
    Object.defineProperty(StorageStub.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return Object.keys(this.store).length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageStub.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.store = {};
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageStub.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store[key] || null;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StorageStub.prototype.key = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Object.keys(this.store)[index];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageStub.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.store[key];
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageStub.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.store[key] = value;
    };
    return StorageStub;
}());
export { StorageStub };
if (false) {
    /** @type {?} */
    StorageStub.prototype.store;
    /* Skipping unhandled member: [name: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zdHViLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJzdHVicy9zdG9yYWdlLnN0dWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7UUFHUSxVQUFLLEdBQTRCLEVBQUUsQ0FBQztJQTBCNUMsQ0FBQztJQXhCQSxzQkFBSSwrQkFBTTs7OztRQUFWO1lBQ0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELDZCQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx5QkFBRzs7OztJQUFILFVBQUksS0FBYTtRQUNoQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELDZCQUFPOzs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7OztJQTFCQSw0QkFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2xpYi9jb3JlL2ludGVyZmFjZXMvd2ViU3RvcmFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU3R1YiBpbXBsZW1lbnRzIFdlYlN0b3JhZ2Uge1xuXHRbbmFtZTogc3RyaW5nXTogYW55O1xuXG5cdHB1YmxpYyBzdG9yZTogeyBbcHJvcDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RvcmUpLmxlbmd0aDtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmUgPSB7fTtcblx0fVxuXG5cdGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVtrZXldIHx8IG51bGw7XG5cdH1cblxuXHRrZXkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JlKVtpbmRleF07XG5cdH1cblxuXHRyZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0ZGVsZXRlIHRoaXMuc3RvcmVba2V5XTtcblx0fVxuXG5cdHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZTtcblx0fVxuXG59XG4iXX0=