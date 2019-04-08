/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class StorageStub {
    constructor() {
        this.store = {};
    }
    /**
     * @return {?}
     */
    get length() {
        return Object.keys(this.store).length;
    }
    /**
     * @return {?}
     */
    clear() {
        this.store = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return this.store[key] || null;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    key(index) {
        return Object.keys(this.store)[index];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        delete this.store[key];
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.store[key] = value;
    }
}
if (false) {
    /** @type {?} */
    StorageStub.prototype.store;
    /* Skipping unhandled member: [name: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zdHViLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYnN0b3JhZ2UvIiwic291cmNlcyI6WyJzdHVicy9zdG9yYWdlLnN0dWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxXQUFXO0lBQXhCO1FBR1EsVUFBSyxHQUE0QixFQUFFLENBQUM7SUEwQjVDLENBQUM7Ozs7SUF4QkEsSUFBSSxNQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBYTtRQUNoQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0NBRUQ7OztJQTFCQSw0QkFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2xpYi9jb3JlL2ludGVyZmFjZXMvd2ViU3RvcmFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU3R1YiBpbXBsZW1lbnRzIFdlYlN0b3JhZ2Uge1xuXHRbbmFtZTogc3RyaW5nXTogYW55O1xuXG5cdHB1YmxpYyBzdG9yZTogeyBbcHJvcDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuXHRnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RvcmUpLmxlbmd0aDtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmUgPSB7fTtcblx0fVxuXG5cdGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVtrZXldIHx8IG51bGw7XG5cdH1cblxuXHRrZXkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JlKVtpbmRleF07XG5cdH1cblxuXHRyZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0ZGVsZXRlIHRoaXMuc3RvcmVba2V5XTtcblx0fVxuXG5cdHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZTtcblx0fVxuXG59XG4iXX0=