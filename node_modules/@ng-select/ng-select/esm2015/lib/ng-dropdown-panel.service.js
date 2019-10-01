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
export class NgDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    /**
     * @return {?}
     */
    get dimensions() {
        return this._dimensions;
    }
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    calculateItems(scrollPos, itemsLength, buffer) {
        /** @type {?} */
        const d = this._dimensions;
        /** @type {?} */
        const scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        const scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        const maxStartEnd = end;
        /** @type {?} */
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    setDimensions(itemHeight, panelHeight) {
        /** @type {?} */
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        /** @type {?} */
        const itemBottom = itemTop + itemHeight;
        /** @type {?} */
        const top = lastScroll;
        /** @type {?} */
        const bottom = top + panelHeight;
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
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelService.prototype._dimensions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZHJvcGRvd24tcGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL25nLWRyb3Bkb3duLXBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUtDOzs7SUFKRyx3Q0FBcUI7O0lBQ3JCLHNDQUFtQjs7SUFDbkIsaUNBQWM7O0lBQ2QsK0JBQVk7Ozs7O0FBR2hCLHFDQUlDOzs7SUFIRyxxQ0FBbUI7O0lBQ25CLHNDQUFvQjs7SUFDcEIsMkNBQXlCOztBQUc3QixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRVksZ0JBQVcsR0FBb0I7WUFDbkMsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLGdCQUFnQixFQUFFLENBQUM7U0FDdEIsQ0FBQztJQThETixDQUFDOzs7O0lBNURHLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxNQUFjOztjQUMzRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVc7O2NBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLFdBQVc7O2NBRXpDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUM7O2NBQ2xDLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxZQUFZLEdBQUcsV0FBVzs7WUFDM0QsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Y0FFakYsV0FBVyxHQUFHLEdBQUc7O2NBQ2pCLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDOztZQUMxRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztZQUV4RCxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRixVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsS0FBSyxJQUFJLE1BQU0sQ0FBQztRQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0IsR0FBRyxJQUFJLE1BQU0sQ0FBQztRQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVqQyxPQUFPO1lBQ0gsVUFBVTtZQUNWLFlBQVk7WUFDWixLQUFLO1lBQ0wsR0FBRztTQUNOLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsVUFBa0IsRUFBRSxXQUFtQjs7Y0FDM0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFVBQVU7WUFDVixXQUFXO1lBQ1gsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWUsRUFBRSxVQUFrQixFQUFFLFVBQWtCO2NBQ3pELEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2NBQ2pDLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVTs7Y0FDakMsR0FBRyxHQUFHLFVBQVU7O2NBQ2hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsV0FBVztRQUVoQyxJQUFJLFdBQVcsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxVQUFVLEdBQUcsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDcEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxHQUFHLEVBQUU7WUFDdkIsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7Ozs7OztJQWxFRyw2Q0FJRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxEaW1lbnNpb25zIHtcbiAgICBpdGVtSGVpZ2h0OiBudW1iZXI7XG4gICAgcGFuZWxIZWlnaHQ6IG51bWJlcjtcbiAgICBpdGVtc1BlclZpZXdwb3J0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2RpbWVuc2lvbnM6IFBhbmVsRGltZW5zaW9ucyA9IHtcbiAgICAgICAgaXRlbUhlaWdodDogMCxcbiAgICAgICAgcGFuZWxIZWlnaHQ6IDAsXG4gICAgICAgIGl0ZW1zUGVyVmlld3BvcnQ6IDBcbiAgICB9O1xuXG4gICAgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUl0ZW1zKHNjcm9sbFBvczogbnVtYmVyLCBpdGVtc0xlbmd0aDogbnVtYmVyLCBidWZmZXI6IG51bWJlcik6IEl0ZW1zUmFuZ2VSZXN1bHQge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5pdGVtSGVpZ2h0ICogaXRlbXNMZW5ndGg7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsUG9zKTtcbiAgICAgICAgY29uc3QgaW5kZXhCeVNjcm9sbFRvcCA9IHNjcm9sbFRvcCAvIHNjcm9sbEhlaWdodCAqIGl0ZW1zTGVuZ3RoO1xuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oaXRlbXNMZW5ndGgsIE1hdGguY2VpbChpbmRleEJ5U2Nyb2xsVG9wKSArIChkLml0ZW1zUGVyVmlld3BvcnQgKyAxKSk7XG5cbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyVmlld3BvcnQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1pbihtYXhTdGFydCwgTWF0aC5mbG9vcihpbmRleEJ5U2Nyb2xsVG9wKSk7XG5cbiAgICAgICAgbGV0IHRvcFBhZGRpbmcgPSBkLml0ZW1IZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuaXRlbUhlaWdodCAqIE1hdGgubWluKHN0YXJ0LCBidWZmZXIpKTtcbiAgICAgICAgdG9wUGFkZGluZyA9ICFpc05hTih0b3BQYWRkaW5nKSA/IHRvcFBhZGRpbmcgOiAwO1xuICAgICAgICBzdGFydCA9ICFpc05hTihzdGFydCkgPyBzdGFydCA6IC0xO1xuICAgICAgICBlbmQgPSAhaXNOYU4oZW5kKSA/IGVuZCA6IC0xO1xuICAgICAgICBzdGFydCAtPSBidWZmZXI7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnQpO1xuICAgICAgICBlbmQgKz0gYnVmZmVyO1xuICAgICAgICBlbmQgPSBNYXRoLm1pbihpdGVtc0xlbmd0aCwgZW5kKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wUGFkZGluZyxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREaW1lbnNpb25zKGl0ZW1IZWlnaHQ6IG51bWJlciwgcGFuZWxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpdGVtc1BlclZpZXdwb3J0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihwYW5lbEhlaWdodCAvIGl0ZW1IZWlnaHQpKTtcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICAgICAgICBwYW5lbEhlaWdodCxcbiAgICAgICAgICAgIGl0ZW1zUGVyVmlld3BvcnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRTY3JvbGxUbyhpdGVtVG9wOiBudW1iZXIsIGl0ZW1IZWlnaHQ6IG51bWJlciwgbGFzdFNjcm9sbDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHsgcGFuZWxIZWlnaHQgfSA9IHRoaXMuZGltZW5zaW9ucztcbiAgICAgICAgY29uc3QgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCB0b3AgPSBsYXN0U2Nyb2xsO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyBwYW5lbEhlaWdodDtcblxuICAgICAgICBpZiAocGFuZWxIZWlnaHQgPj0gaXRlbUJvdHRvbSAmJiBsYXN0U2Nyb2xsID09PSBpdGVtVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtQm90dG9tID4gYm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9wICsgaXRlbUJvdHRvbSAtIGJvdHRvbTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtVG9wIDw9IHRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=