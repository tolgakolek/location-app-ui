/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Inject, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { animationFrameScheduler, asapScheduler, fromEvent, merge, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { NgDropdownPanelService } from './ng-dropdown-panel.service';
import { isDefined } from './value-utils';
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.outsideClick = new EventEmitter();
        this._destroy$ = new Subject();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "itemsLength", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._itemsLength;
        },
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._itemsLength) {
                this._itemsLength = value;
                this._onItemsLengthChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "_startOffset", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (this.markedItem) {
                var _a = this._panelService.dimensions, itemHeight = _a.itemHeight, panelHeight = _a.panelHeight;
                /** @type {?} */
                var offset = this.markedItem.index * itemHeight;
                return panelHeight > offset ? 0 : offset;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.items) {
            /** @type {?} */
            var change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollTo = /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    function (option, startFromOption) {
        if (startFromOption === void 0) { startFromOption = false; }
        if (!option) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        /** @type {?} */
        var scrollTo;
        if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#" + option.htmlId);
            /** @type {?} */
            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollToTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.adjustPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        this._setOffset(parent, select);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDropdownPosition = /**
     * @private
     * @return {?}
     */
    function () {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updatePosition();
        }
        this._dropdown.style.opacity = '1';
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.scrollElementRef.nativeElement, 'scroll')
                .pipe(takeUntil(_this._destroy$), auditTime(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this._onContentScrolled(e.target.scrollTop); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            merge(fromEvent(_this._document, 'touchstart', { capture: true }), fromEvent(_this._document, 'mousedown', { capture: true })).pipe(takeUntil(_this._destroy$))
                .subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) { return _this._checkToClose($event); }));
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._checkToClose = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run((/**
         * @return {?}
         */
        function () { return _this.outsideClick.emit(); }));
    };
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsChange = /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    function (items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._updateItems(firstChange);
        }
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var panelHeight = _this._scrollablePanel.clientHeight;
                _this._panelService.setDimensions(0, panelHeight);
                _this._handleDropdownPosition();
                _this.scrollTo(_this.markedItem, firstChange);
            }));
        }));
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItemsRange = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._measureDimensions().then((/**
             * @return {?}
             */
            function () {
                if (firstChange) {
                    _this._renderItemsRange(_this._startOffset);
                    _this._handleDropdownPosition();
                }
                else {
                    _this._renderItemsRange();
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onContentScrolled = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    };
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateVirtualHeight = /**
     * @private
     * @param {?} height
     * @return {?}
     */
    function (height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = height + "px";
            this._updateScrollHeight = false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsLengthChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._updateScrollHeight = true;
    };
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._renderItemsRange = /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (scrollTop === void 0) { scrollTop = null; }
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        /** @type {?} */
        var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = "translateY(" + range.topPadding + "px)";
        this._zone.run((/**
         * @return {?}
         */
        function () {
            _this.update.emit(_this.items.slice(range.start, range.end));
            _this.scroll.emit({ start: range.start, end: range.end });
        }));
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._measureDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        var _a = tslib_1.__read(this.items, 1), first = _a[0];
        this.update.emit([first]);
        return Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var option = _this._dropdown.querySelector("#" + first.htmlId);
            /** @type {?} */
            var optionHeight = option.clientHeight;
            _this._virtualPadding.style.height = optionHeight * _this.itemsLength + "px";
            /** @type {?} */
            var panelHeight = _this._scrollablePanel.clientHeight;
            _this._panelService.setDimensions(optionHeight, panelHeight);
            return _this._panelService.dimensions;
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        /** @type {?} */
        var padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run((/**
             * @return {?}
             */
            function () { return _this.scrollToEnd.emit(); }));
            this._scrollToEndFired = true;
        }
    };
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        this._parent.appendChild(this._dropdown);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var offsetLeft = select.left - parent.left;
        this._setOffset(parent, select);
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._setOffset = /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    function (parent, select) {
        /** @type {?} */
        var delta = select.height;
        if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    };
    NgDropdownPanelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ng-dropdown-panel',
                    template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: NgDropdownPanelService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: Input }],
        markedItem: [{ type: Input }],
        position: [{ type: Input }],
        appendTo: [{ type: Input }],
        bufferAmount: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        headerTemplate: [{ type: Input }],
        footerTemplate: [{ type: Input }],
        filterValue: [{ type: Input }],
        update: [{ type: Output }],
        scroll: [{ type: Output }],
        scrollToEnd: [{ type: Output }],
        outsideClick: [{ type: Output }],
        contentElementRef: [{ type: ViewChild, args: ['content', { read: ElementRef, static: true },] }],
        scrollElementRef: [{ type: ViewChild, args: ['scroll', { read: ElementRef, static: true },] }],
        paddingElementRef: [{ type: ViewChild, args: ['padding', { read: ElementRef, static: true },] }],
        handleMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return NgDropdownPanelComponent;
}());
export { NgDropdownPanelComponent };
if (false) {
    /** @type {?} */
    NgDropdownPanelComponent.prototype.items;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.markedItem;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.position;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.appendTo;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.bufferAmount;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.virtualScroll;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.headerTemplate;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.footerTemplate;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.filterValue;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.update;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scroll;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scrollToEnd;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.outsideClick;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.contentElementRef;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.scrollElementRef;
    /** @type {?} */
    NgDropdownPanelComponent.prototype.paddingElementRef;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._dropdown;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._virtualPadding;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._scrollablePanel;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._contentPanel;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._select;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._scrollToEndFired;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._updateScrollHeight;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._lastScrollPosition;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._currentPosition;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._itemsLength;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._panelService;
    /**
     * @type {?}
     * @private
     */
    NgDropdownPanelComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3QvIiwic291cmNlcyI6WyJsaWIvbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFJdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFcEMsYUFBYSxHQUFHLGVBQWU7O0lBQy9CLGdCQUFnQixHQUFHLGtCQUFrQjs7SUFDckMsZ0JBQWdCLEdBQUcsT0FBTyxxQkFBcUIsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxhQUFhO0FBRS9HO0lBbURJLGtDQUNZLFNBQW9CLEVBQ3BCLEtBQWEsRUFDYixhQUFxQyxFQUM3QyxXQUF1QixFQUNlLFNBQWM7UUFKNUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBRVAsY0FB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QUE2Qzs7SUFDN0MsMENBQXNFOztJQUN0RSwrQ0FBaUQ7O0lBQ2pELGdEQUFrRDs7SUFFbEQscURBQXdGOztJQUN4RixvREFBc0Y7O0lBQ3RGLHFEQUF3Rjs7Ozs7SUFFeEYsNkNBQWlEOzs7OztJQUNqRCw2Q0FBd0M7Ozs7O0lBQ3hDLG1EQUFxQzs7Ozs7SUFDckMsb0RBQXNDOzs7OztJQUN0QyxpREFBbUM7Ozs7O0lBQ25DLDJDQUE2Qjs7Ozs7SUFDN0IsMkNBQTZCOzs7OztJQUM3QixxREFBa0M7Ozs7O0lBQ2xDLHVEQUFvQzs7Ozs7SUFDcEMsdURBQWdDOzs7OztJQVloQyxvREFBMkM7Ozs7O0lBTTNDLGdEQUE2Qjs7Ozs7SUFmekIsNkNBQTRCOzs7OztJQUM1Qix5Q0FBcUI7Ozs7O0lBQ3JCLGlEQUE2Qzs7Ozs7SUFFN0MsNkNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3B0aW9uYWwsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBhc2FwU2NoZWR1bGVyLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbFNlcnZpY2UsIFBhbmVsRGltZW5zaW9ucyB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuc2VydmljZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duUG9zaXRpb24gfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBpc0RlZmluZWQgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcblxuY29uc3QgVE9QX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtdG9wJztcbmNvbnN0IEJPVFRPTV9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LWJvdHRvbSc7XG5jb25zdCBTQ1JPTExfU0NIRURVTEVSID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciA6IGFzYXBTY2hlZHVsZXI7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi1wYW5lbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNzY3JvbGwgY2xhc3M9XCJuZy1kcm9wZG93bi1wYW5lbC1pdGVtcyBzY3JvbGwtaG9zdFwiPlxuICAgICAgICAgICAgPGRpdiAjcGFkZGluZyBbY2xhc3MudG90YWwtcGFkZGluZ109XCJ2aXJ0dWFsU2Nyb2xsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtjbGFzcy5zY3JvbGxhYmxlLWNvbnRlbnRdPVwidmlydHVhbFNjcm9sbCAmJiBpdGVtcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmb290ZXJUZW1wbGF0ZVwiIGNsYXNzPVwibmctZHJvcGRvd24tZm9vdGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgc2VhcmNoVGVybTogZmlsdGVyVmFsdWUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcbiAgICBASW5wdXQoKSBtYXJrZWRJdGVtOiBOZ09wdGlvbjtcbiAgICBASW5wdXQoKSBwb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbiA9ICdhdXRvJztcbiAgICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudDtcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZmlsdGVyVmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBvdXRzaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgc2Nyb2xsRWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdwYWRkaW5nJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgcGFkZGluZ0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZHJvcGRvd246IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3ZpcnR1YWxQYWRkaW5nOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9zY3JvbGxhYmxlUGFuZWw6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX2NvbnRlbnRQYW5lbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2VsZWN0OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9wYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3Njcm9sbFRvRW5kRmlyZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF91cGRhdGVTY3JvbGxIZWlnaHQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9sYXN0U2Nyb2xsUG9zaXRpb24gPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBfcGFuZWxTZXJ2aWNlOiBOZ0Ryb3Bkb3duUGFuZWxTZXJ2aWNlLFxuICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLl9kcm9wZG93biA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudFBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uO1xuXG4gICAgZ2V0IGN1cnJlbnRQb3NpdGlvbigpOiBEcm9wZG93blBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pdGVtc0xlbmd0aDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgaXRlbXNMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc0xlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldCBpdGVtc0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5faXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zTGVuZ3RoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9vbkl0ZW1zTGVuZ3RoQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3N0YXJ0T2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1IZWlnaHQsIHBhbmVsSGVpZ2h0IH0gPSB0aGlzLl9wYW5lbFNlcnZpY2UuZGltZW5zaW9ucztcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWFya2VkSXRlbS5pbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gcGFuZWxIZWlnaHQgPiBvZmZzZXQgPyAwIDogb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ID0gdGhpcy5fZHJvcGRvd24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5fdmlydHVhbFBhZGRpbmcgPSB0aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3Njcm9sbGFibGVQYW5lbCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9jb250ZW50UGFuZWwgPSB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2hhbmRsZVNjcm9sbCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soKTtcbiAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5fb25JdGVtc0NoYW5nZShjaGFuZ2UuY3VycmVudFZhbHVlLCBjaGFuZ2UuZmlyc3RDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2Ryb3Bkb3duLnBhcmVudE5vZGUsIHRoaXMuX2Ryb3Bkb3duKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvKG9wdGlvbjogTmdPcHRpb24sIHN0YXJ0RnJvbU9wdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihvcHRpb24pO1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuaXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzY3JvbGxUbztcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHRoaXMuX3BhbmVsU2VydmljZS5kaW1lbnNpb25zLml0ZW1IZWlnaHQ7XG4gICAgICAgICAgICBzY3JvbGxUbyA9IHRoaXMuX3BhbmVsU2VydmljZS5nZXRTY3JvbGxUbyhpbmRleCAqIGl0ZW1IZWlnaHQsIGl0ZW1IZWlnaHQsIHRoaXMuX2xhc3RTY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtOiBIVE1MRWxlbWVudCA9IHRoaXMuX2Ryb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoYCMke29wdGlvbi5odG1sSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2Nyb2xsID0gc3RhcnRGcm9tT3B0aW9uID8gaXRlbS5vZmZzZXRUb3AgOiB0aGlzLl9sYXN0U2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgICBzY3JvbGxUbyA9IHRoaXMuX3BhbmVsU2VydmljZS5nZXRTY3JvbGxUbyhpdGVtLm9mZnNldFRvcCwgaXRlbS5jbGllbnRIZWlnaHQsIGxhc3RTY3JvbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmaW5lZChzY3JvbGxUbykpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbGFibGVQYW5lbC5zY3JvbGxUb3AgPSBzY3JvbGxUbztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvVGFnKCkge1xuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMuX3Njcm9sbGFibGVQYW5lbDtcbiAgICAgICAgcGFuZWwuc2Nyb2xsVG9wID0gcGFuZWwuc2Nyb2xsSGVpZ2h0IC0gcGFuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIGFkanVzdFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHRoaXMuX3NlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fc2V0T2Zmc2V0KHBhcmVudCwgc2VsZWN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24odGhpcy5fZHJvcGRvd24pO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2Ryb3Bkb3duLCBCT1RUT01fQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9zZWxlY3QsIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksIGF1ZGl0VGltZSgwLCBTQ1JPTExfU0NIRURVTEVSKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChlOiB7IHRhcmdldDogSFRNTEVsZW1lbnQgfSkgPT4gdGhpcy5fb25Db250ZW50U2Nyb2xsZWQoZS50YXJnZXQuc2Nyb2xsVG9wKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZU91dHNpZGVDbGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgeyBjYXB0dXJlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KVxuICAgICAgICAgICAgKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAgLnN1YnNjcmliZSgkZXZlbnQgPT4gdGhpcy5fY2hlY2tUb0Nsb3NlKCRldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja1RvQ2xvc2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5jb250YWlucygkZXZlbnQudGFyZ2V0KSB8fCB0aGlzLl9kcm9wZG93bi5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9ICRldmVudC5wYXRoIHx8ICgkZXZlbnQuY29tcG9zZWRQYXRoICYmICRldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICYmICRldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiBwYXRoICYmIHBhdGhbMF0gJiYgdGhpcy5fc2VsZWN0LmNvbnRhaW5zKHBhdGhbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLm91dHNpZGVDbGljay5lbWl0KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uSXRlbXNDaGFuZ2UoaXRlbXM6IE5nT3B0aW9uW10sIGZpcnN0Q2hhbmdlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLml0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1zUmFuZ2UoZmlyc3RDaGFuZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoZmlyc3RDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlSXRlbXMoZmlyc3RDaGFuZ2U6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICAgICAgaWYgKGZpcnN0Q2hhbmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lbEhlaWdodCA9IHRoaXMuX3Njcm9sbGFibGVQYW5lbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFuZWxTZXJ2aWNlLnNldERpbWVuc2lvbnMoMCwgcGFuZWxIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZURyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMubWFya2VkSXRlbSwgZmlyc3RDaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUl0ZW1zUmFuZ2UoZmlyc3RDaGFuZ2U6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9tZWFzdXJlRGltZW5zaW9ucygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJJdGVtc1JhbmdlKHRoaXMuX3N0YXJ0T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckl0ZW1zUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Db250ZW50U2Nyb2xsZWQoc2Nyb2xsVG9wOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVySXRlbXNSYW5nZShzY3JvbGxUb3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5fZmlyZVNjcm9sbFRvRW5kKHNjcm9sbFRvcCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmlydHVhbEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fdXBkYXRlU2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsUGFkZGluZy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsSGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkl0ZW1zTGVuZ3RoQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsSGVpZ2h0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW5kZXJJdGVtc1JhbmdlKHNjcm9sbFRvcCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCAmJiB0aGlzLl9sYXN0U2Nyb2xsUG9zaXRpb24gPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wIHx8IHRoaXMuX3Njcm9sbGFibGVQYW5lbC5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5fcGFuZWxTZXJ2aWNlLmNhbGN1bGF0ZUl0ZW1zKHNjcm9sbFRvcCwgdGhpcy5pdGVtc0xlbmd0aCwgdGhpcy5idWZmZXJBbW91bnQpO1xuICAgICAgICB0aGlzLl91cGRhdGVWaXJ0dWFsSGVpZ2h0KHJhbmdlLnNjcm9sbEhlaWdodCk7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3JhbmdlLnRvcFBhZGRpbmd9cHgpYDtcblxuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UocmFuZ2Uuc3RhcnQsIHJhbmdlLmVuZCkpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuZW1pdCh7IHN0YXJ0OiByYW5nZS5zdGFydCwgZW5kOiByYW5nZS5lbmQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0RlZmluZWQoc2Nyb2xsVG9wKSAmJiB0aGlzLl9sYXN0U2Nyb2xsUG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbGFibGVQYW5lbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9tZWFzdXJlRGltZW5zaW9ucygpOiBQcm9taXNlPFBhbmVsRGltZW5zaW9ucz4ge1xuICAgICAgICBpZiAodGhpcy5fcGFuZWxTZXJ2aWNlLmRpbWVuc2lvbnMuaXRlbUhlaWdodCA+IDAgfHwgdGhpcy5pdGVtc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9wYW5lbFNlcnZpY2UuZGltZW5zaW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbZmlyc3RdID0gdGhpcy5pdGVtcztcbiAgICAgICAgdGhpcy51cGRhdGUuZW1pdChbZmlyc3RdKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLl9kcm9wZG93bi5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdC5odG1sSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBvcHRpb24uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fdmlydHVhbFBhZGRpbmcuc3R5bGUuaGVpZ2h0ID0gYCR7b3B0aW9uSGVpZ2h0ICogdGhpcy5pdGVtc0xlbmd0aH1weGA7XG4gICAgICAgICAgICBjb25zdCBwYW5lbEhlaWdodCA9IHRoaXMuX3Njcm9sbGFibGVQYW5lbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYW5lbFNlcnZpY2Uuc2V0RGltZW5zaW9ucyhvcHRpb25IZWlnaHQsIHBhbmVsSGVpZ2h0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhbmVsU2VydmljZS5kaW1lbnNpb25zO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maXJlU2Nyb2xsVG9FbmQoc2Nyb2xsVG9wOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgfHwgc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWRkaW5nID0gdGhpcy52aXJ0dWFsU2Nyb2xsID9cbiAgICAgICAgICAgIHRoaXMuX3ZpcnR1YWxQYWRkaW5nIDpcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRQYW5lbDtcblxuICAgICAgICBpZiAoc2Nyb2xsVG9wICsgdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0ID49IHBhZGRpbmcuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLnNjcm9sbFRvRW5kLmVtaXQoKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUN1cnJlbnRQb3NpdGlvbihkcm9wZG93bkVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2VsZWN0UmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIGlmIChvZmZzZXRUb3AgKyBoZWlnaHQgKyBkcm9wZG93bkhlaWdodCA+IHNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwcGVuZFRvIHNlbGVjdG9yICR7dGhpcy5hcHBlbmRUb30gZGlkIG5vdCBmb3VuZCBhbnkgcGFyZW50IGVsZW1lbnRgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJvcGRvd24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHNlbGVjdC5sZWZ0IC0gcGFyZW50LmxlZnQ7XG5cbiAgICAgICAgdGhpcy5fc2V0T2Zmc2V0KHBhcmVudCwgc2VsZWN0KTtcblxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLndpZHRoID0gc2VsZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubWluV2lkdGggPSBzZWxlY3Qud2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldE9mZnNldChwYXJlbnQ6IENsaWVudFJlY3QsIHNlbGVjdDogQ2xpZW50UmVjdCkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IHNlbGVjdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJvdHRvbSA9IHBhcmVudC5ib3R0b20gLSBzZWxlY3QuYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuYm90dG9tID0gb2Zmc2V0Qm90dG9tICsgZGVsdGEgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUudG9wID0gJ2F1dG8nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdC50b3AgLSBwYXJlbnQudG9wO1xuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUudG9wID0gb2Zmc2V0VG9wICsgZGVsdGEgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19