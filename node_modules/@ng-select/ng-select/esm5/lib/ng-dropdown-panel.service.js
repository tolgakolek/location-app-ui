/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ItemsRangeResult() { }
if (false) {
    /** @type {?} */
    ItemsRangeResult.prototype.scrollHeight;
    /** @type {?} */
    ItemsRangeResult.prototype.topPadding;
    /** @type {?} */
    ItemsRangeResult.prototype.start;
    /** @type {?} */
    ItemsRangeResult.prototype.end;
}
/**
 * @record
 */
export function PanelDimensions() { }
if (false) {
    /** @type {?} */
    PanelDimensions.prototype.itemHeight;
    /** @type {?} */
    PanelDimensions.prototype.panelHeight;
    /** @type {?} */
    PanelDimensions.prototype.itemsPerViewport;
}
var NgDropdownPanelService = /** @class */ (function () {
    function NgDropdownPanelService() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    Object.defineProperty(NgDropdownPanelService.prototype, "dimensions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dimensions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    NgDropdownPanelService.prototype.calculateItems = /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    function (scrollPos, itemsLength, buffer) {
        /** @type {?} */
        var d = this._dimensions;
        /** @type {?} */
        var scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        var scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    NgDropdownPanelService.prototype.setDimensions = /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    function (itemHeight, panelHeight) {
        /** @type {?} */
        var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
        };
    };
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    NgDropdownPanelService.prototype.getScrollTo = /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    function (itemTop, itemHeight, lastScroll) {
        var panelHeight = this.dimensions.panelHeight;
        /** @type {?} */
        var itemBottom = itemTop + itemHeight;
        /** @type {?} */
        var top = lastScroll;
        /** @type {?} */
        var bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    };
    return NgDropdownPanelService;
}());
export { NgDropdownPanelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelService.prototype._dimensions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZHJvcGRvd24tcGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL25nLWRyb3Bkb3duLXBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUtDOzs7SUFKRyx3Q0FBcUI7O0lBQ3JCLHNDQUFtQjs7SUFDbkIsaUNBQWM7O0lBQ2QsK0JBQVk7Ozs7O0FBR2hCLHFDQUlDOzs7SUFIRyxxQ0FBbUI7O0lBQ25CLHNDQUFvQjs7SUFDcEIsMkNBQXlCOztBQUc3QjtJQUFBO1FBRVksZ0JBQVcsR0FBb0I7WUFDbkMsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLGdCQUFnQixFQUFFLENBQUM7U0FDdEIsQ0FBQztJQThETixDQUFDO0lBNURHLHNCQUFJLDhDQUFVOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFRCwrQ0FBYzs7Ozs7O0lBQWQsVUFBZSxTQUFpQixFQUFFLFdBQW1CLEVBQUUsTUFBYzs7WUFDM0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxXQUFXOztZQUV6QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDOztZQUNsQyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsWUFBWSxHQUFHLFdBQVc7O1lBQzNELEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBRWpGLFdBQVcsR0FBRyxHQUFHOztZQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFDMUQsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFFeEQsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0YsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxNQUFNLENBQUM7UUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakMsT0FBTztZQUNILFVBQVUsWUFBQTtZQUNWLFlBQVksY0FBQTtZQUNaLEtBQUssT0FBQTtZQUNMLEdBQUcsS0FBQTtTQUNOLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFRCw4Q0FBYTs7Ozs7SUFBYixVQUFjLFVBQWtCLEVBQUUsV0FBbUI7O1lBQzNDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixVQUFVLFlBQUE7WUFDVixXQUFXLGFBQUE7WUFDWCxnQkFBZ0Isa0JBQUE7U0FDbkIsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFRCw0Q0FBVzs7Ozs7O0lBQVgsVUFBWSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUFrQjtRQUN2RCxJQUFBLHlDQUFXOztZQUNiLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVTs7WUFDakMsR0FBRyxHQUFHLFVBQVU7O1lBQ2hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsV0FBVztRQUVoQyxJQUFJLFdBQVcsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxVQUFVLEdBQUcsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDcEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxHQUFHLEVBQUU7WUFDdkIsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDOzs7Ozs7O0lBbEVHLDZDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJdGVtc1JhbmdlUmVzdWx0IHtcbiAgICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcbiAgICB0b3BQYWRkaW5nOiBudW1iZXI7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbERpbWVuc2lvbnMge1xuICAgIGl0ZW1IZWlnaHQ6IG51bWJlcjtcbiAgICBwYW5lbEhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1zUGVyVmlld3BvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5nRHJvcGRvd25QYW5lbFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfZGltZW5zaW9uczogUGFuZWxEaW1lbnNpb25zID0ge1xuICAgICAgICBpdGVtSGVpZ2h0OiAwLFxuICAgICAgICBwYW5lbEhlaWdodDogMCxcbiAgICAgICAgaXRlbXNQZXJWaWV3cG9ydDogMFxuICAgIH07XG5cbiAgICBnZXQgZGltZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSXRlbXMoc2Nyb2xsUG9zOiBudW1iZXIsIGl0ZW1zTGVuZ3RoOiBudW1iZXIsIGJ1ZmZlcjogbnVtYmVyKTogSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLl9kaW1lbnNpb25zO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkLml0ZW1IZWlnaHQgKiBpdGVtc0xlbmd0aDtcblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxQb3MpO1xuICAgICAgICBjb25zdCBpbmRleEJ5U2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC8gc2Nyb2xsSGVpZ2h0ICogaXRlbXNMZW5ndGg7XG4gICAgICAgIGxldCBlbmQgPSBNYXRoLm1pbihpdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJWaWV3cG9ydCArIDEpKTtcblxuICAgICAgICBjb25zdCBtYXhTdGFydEVuZCA9IGVuZDtcbiAgICAgICAgY29uc3QgbWF4U3RhcnQgPSBNYXRoLm1heCgwLCBtYXhTdGFydEVuZCAtIGQuaXRlbXNQZXJWaWV3cG9ydCk7XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApKTtcblxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuaXRlbUhlaWdodCAqIE1hdGguY2VpbChzdGFydCkgLSAoZC5pdGVtSGVpZ2h0ICogTWF0aC5taW4oc3RhcnQsIGJ1ZmZlcikpO1xuICAgICAgICB0b3BQYWRkaW5nID0gIWlzTmFOKHRvcFBhZGRpbmcpID8gdG9wUGFkZGluZyA6IDA7XG4gICAgICAgIHN0YXJ0ID0gIWlzTmFOKHN0YXJ0KSA/IHN0YXJ0IDogLTE7XG4gICAgICAgIGVuZCA9ICFpc05hTihlbmQpID8gZW5kIDogLTE7XG4gICAgICAgIHN0YXJ0IC09IGJ1ZmZlcjtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCk7XG4gICAgICAgIGVuZCArPSBidWZmZXI7XG4gICAgICAgIGVuZCA9IE1hdGgubWluKGl0ZW1zTGVuZ3RoLCBlbmQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3BQYWRkaW5nLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERpbWVuc2lvbnMoaXRlbUhlaWdodDogbnVtYmVyLCBwYW5lbEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyVmlld3BvcnQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsSGVpZ2h0IC8gaXRlbUhlaWdodCkpO1xuICAgICAgICB0aGlzLl9kaW1lbnNpb25zID0ge1xuICAgICAgICAgICAgaXRlbUhlaWdodCxcbiAgICAgICAgICAgIHBhbmVsSGVpZ2h0LFxuICAgICAgICAgICAgaXRlbXNQZXJWaWV3cG9ydFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFNjcm9sbFRvKGl0ZW1Ub3A6IG51bWJlciwgaXRlbUhlaWdodDogbnVtYmVyLCBsYXN0U2Nyb2xsOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgeyBwYW5lbEhlaWdodCB9ID0gdGhpcy5kaW1lbnNpb25zO1xuICAgICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IHRvcCA9IGxhc3RTY3JvbGw7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIHBhbmVsSGVpZ2h0O1xuXG4gICAgICAgIGlmIChwYW5lbEhlaWdodCA+PSBpdGVtQm90dG9tICYmIGxhc3RTY3JvbGwgPT09IGl0ZW1Ub3ApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1Cb3R0b20gPiBib3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiB0b3AgKyBpdGVtQm90dG9tIC0gYm90dG9tO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPD0gdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==