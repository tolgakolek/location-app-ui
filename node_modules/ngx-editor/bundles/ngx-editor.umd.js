(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('@angular/forms'), require('ngx-bootstrap'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-editor', ['exports', '@angular/core', '@angular/common/http', 'rxjs', '@angular/forms', 'ngx-bootstrap', '@angular/common'], factory) :
    (factory((global['ngx-editor'] = {}),global.ng.core,global.ng.common.http,global.rxjs,global.ng.forms,global['ngx-bootstrap'],global.ng.common));
}(this, (function (exports,core,http,rxjs,forms,ngxBootstrap,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * enable or disable toolbar based on configuration
     *
     * @param {?} value toolbar item
     * @param {?} toolbar toolbar configuration object
     * @return {?}
     */
    function canEnableToolbarOptions(value, toolbar) {
        if (value) {
            if (toolbar['length'] === 0) {
                return true;
            }
            else {
                /** @type {?} */
                var found = toolbar.filter(function (array) {
                    return array.indexOf(value) !== -1;
                });
                return found.length ? true : false;
            }
        }
        else {
            return false;
        }
    }
    /**
     * set editor configuration
     *
     * @param {?} value configuration via [config] property
     * @param {?} ngxEditorConfig default editor configuration
     * @param {?} input direct configuration inputs via directives
     * @return {?}
     */
    function getEditorConfiguration(value, ngxEditorConfig, input) {
        for (var i in ngxEditorConfig) {
            if (i) {
                if (input[i] !== undefined) {
                    value[i] = input[i];
                }
                if (!value.hasOwnProperty(i)) {
                    value[i] = ngxEditorConfig[i];
                }
            }
        }
        return value;
    }
    /**
     * return vertical if the element is the resizer property is set to basic
     *
     * @param {?} resizer type of resizer, either basic or stack
     * @return {?}
     */
    function canResize(resizer) {
        if (resizer === 'basic') {
            return 'vertical';
        }
        return false;
    }
    /**
     * save selection when the editor is focussed out
     * @return {?}
     */
    function saveSelection() {
        if (window.getSelection) {
            /** @type {?} */
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        }
        else if (document.getSelection && document.createRange) {
            return document.createRange();
        }
        return null;
    }
    /**
     * restore selection when the editor is focussed in
     *
     * @param {?} range saved selection when the editor is focussed out
     * @return {?}
     */
    function restoreSelection(range) {
        if (range) {
            if (window.getSelection) {
                /** @type {?} */
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return true;
            }
            else if (document.getSelection && range.select) {
                range.select();
                return true;
            }
        }
        else {
            return false;
        }
    }

    var Utils = /*#__PURE__*/Object.freeze({
        canEnableToolbarOptions: canEnableToolbarOptions,
        getEditorConfiguration: getEditorConfiguration,
        canResize: canResize,
        saveSelection: saveSelection,
        restoreSelection: restoreSelection
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandExecutorService = /** @class */ (function () {
        /**
         *
         * @param _http HTTP Client for making http requests
         */
        function CommandExecutorService(_http) {
            this._http = _http;
            /**
             * saves the selection from the editor when focussed out
             */
            this.savedSelection = undefined;
        }
        /**
         * executes command from the toolbar
         *
         * @param command command to be executed
         */
        /**
         * executes command from the toolbar
         *
         * @param {?} command command to be executed
         * @return {?}
         */
        CommandExecutorService.prototype.execute = /**
         * executes command from the toolbar
         *
         * @param {?} command command to be executed
         * @return {?}
         */
            function (command) {
                if (!this.savedSelection && command !== 'enableObjectResizing') {
                    throw new Error('Range out of Editor');
                }
                if (command === 'enableObjectResizing') {
                    document.execCommand('enableObjectResizing', true);
                }
                if (command === 'blockquote') {
                    document.execCommand('formatBlock', false, 'blockquote');
                }
                if (command === 'removeBlockquote') {
                    document.execCommand('formatBlock', false, 'div');
                }
                document.execCommand(command, false, null);
            };
        /**
         * inserts image in the editor
         *
         * @param imageURI url of the image to be inserted
         */
        /**
         * inserts image in the editor
         *
         * @param {?} imageURI url of the image to be inserted
         * @return {?}
         */
        CommandExecutorService.prototype.insertImage = /**
         * inserts image in the editor
         *
         * @param {?} imageURI url of the image to be inserted
         * @return {?}
         */
            function (imageURI) {
                if (this.savedSelection) {
                    if (imageURI) {
                        /** @type {?} */
                        var restored = restoreSelection(this.savedSelection);
                        if (restored) {
                            /** @type {?} */
                            var inserted = document.execCommand('insertImage', false, imageURI);
                            if (!inserted) {
                                throw new Error('Invalid URL');
                            }
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
       * inserts image in the editor
       *
       * @param videParams url of the image to be inserted
       */
        /**
         * inserts image in the editor
         *
         * @param {?} videParams url of the image to be inserted
         * @return {?}
         */
        CommandExecutorService.prototype.insertVideo = /**
         * inserts image in the editor
         *
         * @param {?} videParams url of the image to be inserted
         * @return {?}
         */
            function (videParams) {
                if (this.savedSelection) {
                    if (videParams) {
                        /** @type {?} */
                        var restored = restoreSelection(this.savedSelection);
                        if (restored) {
                            if (this.isYoutubeLink(videParams.videoUrl)) {
                                /** @type {?} */
                                var youtubeURL = '<iframe width="' + videParams.width + '" height="' + videParams.height + '"'
                                    + 'src="' + videParams.videoUrl + '"></iframe>';
                                this.insertHtml(youtubeURL);
                            }
                            else if (this.checkTagSupportInBrowser('video')) {
                                if (this.isValidURL(videParams.videoUrl)) {
                                    /** @type {?} */
                                    var videoSrc = '<video width="' + videParams.width + '" height="' + videParams.height + '"'
                                        + ' controls="true"><source src="' + videParams.videoUrl + '"></video>';
                                    this.insertHtml(videoSrc);
                                }
                                else {
                                    throw new Error('Invalid video URL');
                                }
                            }
                            else {
                                throw new Error('Unable to insert video');
                            }
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
         * checks the input url is a valid youtube URL or not
         *
         * @param {?} url Youtue URL
         * @return {?}
         */
        CommandExecutorService.prototype.isYoutubeLink = /**
         * checks the input url is a valid youtube URL or not
         *
         * @param {?} url Youtue URL
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var ytRegExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
                return ytRegExp.test(url);
            };
        /**
         * check whether the string is a valid url or not
         * @param {?} url url
         * @return {?}
         */
        CommandExecutorService.prototype.isValidURL = /**
         * check whether the string is a valid url or not
         * @param {?} url url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var urlRegExp = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                return urlRegExp.test(url);
            };
        /**
         * uploads image to the server
         *
         * @param file file that has to be uploaded
         * @param endPoint enpoint to which the image has to be uploaded
         */
        /**
         * uploads image to the server
         *
         * @param {?} file file that has to be uploaded
         * @param {?} endPoint enpoint to which the image has to be uploaded
         * @return {?}
         */
        CommandExecutorService.prototype.uploadImage = /**
         * uploads image to the server
         *
         * @param {?} file file that has to be uploaded
         * @param {?} endPoint enpoint to which the image has to be uploaded
         * @return {?}
         */
            function (file, endPoint) {
                if (!endPoint) {
                    throw new Error('Image Endpoint isn`t provided or invalid');
                }
                /** @type {?} */
                var formData = new FormData();
                if (file) {
                    formData.append('file', file);
                    /** @type {?} */
                    var req = new http.HttpRequest('POST', endPoint, formData, {
                        reportProgress: true
                    });
                    return this._http.request(req);
                }
                else {
                    throw new Error('Invalid Image');
                }
            };
        /**
         * inserts link in the editor
         *
         * @param params parameters that holds the information for the link
         */
        /**
         * inserts link in the editor
         *
         * @param {?} params parameters that holds the information for the link
         * @return {?}
         */
        CommandExecutorService.prototype.createLink = /**
         * inserts link in the editor
         *
         * @param {?} params parameters that holds the information for the link
         * @return {?}
         */
            function (params) {
                if (this.savedSelection) {
                    /**
                           * check whether the saved selection contains a range or plain selection
                           */
                    if (params.urlNewTab) {
                        /** @type {?} */
                        var newUrl = '<a href="' + params.urlLink + '" target="_blank">' + params.urlText + '</a>';
                        if (document.getSelection().type !== 'Range') {
                            /** @type {?} */
                            var restored = restoreSelection(this.savedSelection);
                            if (restored) {
                                this.insertHtml(newUrl);
                            }
                        }
                        else {
                            throw new Error('Only new links can be inserted. You cannot edit URL`s');
                        }
                    }
                    else {
                        /** @type {?} */
                        var restored = restoreSelection(this.savedSelection);
                        if (restored) {
                            document.execCommand('createLink', false, params.urlLink);
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
         * insert color either font or background
         *
         * @param color color to be inserted
         * @param where where the color has to be inserted either text/background
         */
        /**
         * insert color either font or background
         *
         * @param {?} color color to be inserted
         * @param {?} where where the color has to be inserted either text/background
         * @return {?}
         */
        CommandExecutorService.prototype.insertColor = /**
         * insert color either font or background
         *
         * @param {?} color color to be inserted
         * @param {?} where where the color has to be inserted either text/background
         * @return {?}
         */
            function (color, where) {
                if (this.savedSelection) {
                    /** @type {?} */
                    var restored = restoreSelection(this.savedSelection);
                    if (restored && this.checkSelection()) {
                        if (where === 'textColor') {
                            document.execCommand('foreColor', false, color);
                        }
                        else {
                            document.execCommand('hiliteColor', false, color);
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
         * set font size for text
         *
         * @param fontSize font-size to be set
         */
        /**
         * set font size for text
         *
         * @param {?} fontSize font-size to be set
         * @return {?}
         */
        CommandExecutorService.prototype.setFontSize = /**
         * set font size for text
         *
         * @param {?} fontSize font-size to be set
         * @return {?}
         */
            function (fontSize) {
                if (this.savedSelection && this.checkSelection()) {
                    /** @type {?} */
                    var deletedValue = this.deleteAndGetElement();
                    if (deletedValue) {
                        /** @type {?} */
                        var restored = restoreSelection(this.savedSelection);
                        if (restored) {
                            if (this.isNumeric(fontSize)) {
                                /** @type {?} */
                                var fontPx = '<span style="font-size: ' + fontSize + 'px;">' + deletedValue + '</span>';
                                this.insertHtml(fontPx);
                            }
                            else {
                                /** @type {?} */
                                var fontPx = '<span style="font-size: ' + fontSize + ';">' + deletedValue + '</span>';
                                this.insertHtml(fontPx);
                            }
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
         * set font name/family for text
         *
         * @param fontName font-family to be set
         */
        /**
         * set font name/family for text
         *
         * @param {?} fontName font-family to be set
         * @return {?}
         */
        CommandExecutorService.prototype.setFontName = /**
         * set font name/family for text
         *
         * @param {?} fontName font-family to be set
         * @return {?}
         */
            function (fontName) {
                if (this.savedSelection && this.checkSelection()) {
                    /** @type {?} */
                    var deletedValue = this.deleteAndGetElement();
                    if (deletedValue) {
                        /** @type {?} */
                        var restored = restoreSelection(this.savedSelection);
                        if (restored) {
                            if (this.isNumeric(fontName)) {
                                /** @type {?} */
                                var fontFamily = '<span style="font-family: ' + fontName + 'px;">' + deletedValue + '</span>';
                                this.insertHtml(fontFamily);
                            }
                            else {
                                /** @type {?} */
                                var fontFamily = '<span style="font-family: ' + fontName + ';">' + deletedValue + '</span>';
                                this.insertHtml(fontFamily);
                            }
                        }
                    }
                }
                else {
                    throw new Error('Range out of the editor');
                }
            };
        /**
         * insert HTML
         * @param {?} html
         * @return {?}
         */
        CommandExecutorService.prototype.insertHtml = /**
         * insert HTML
         * @param {?} html
         * @return {?}
         */
            function (html) {
                /** @type {?} */
                var isHTMLInserted = document.execCommand('insertHTML', false, html);
                if (!isHTMLInserted) {
                    throw new Error('Unable to perform the operation');
                }
            };
        /**
         * check whether the value is a number or string
         * if number return true
         * else return false
         * @param {?} value
         * @return {?}
         */
        CommandExecutorService.prototype.isNumeric = /**
         * check whether the value is a number or string
         * if number return true
         * else return false
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return /^-{0,1}\d+$/.test(value);
            };
        /**
         * delete the text at selected range and return the value
         * @return {?}
         */
        CommandExecutorService.prototype.deleteAndGetElement = /**
         * delete the text at selected range and return the value
         * @return {?}
         */
            function () {
                /** @type {?} */
                var slectedText;
                if (this.savedSelection) {
                    slectedText = this.savedSelection.toString();
                    this.savedSelection.deleteContents();
                    return slectedText;
                }
                return false;
            };
        /**
         * check any slection is made or not
         * @return {?}
         */
        CommandExecutorService.prototype.checkSelection = /**
         * check any slection is made or not
         * @return {?}
         */
            function () {
                /** @type {?} */
                var slectedText = this.savedSelection.toString();
                if (slectedText.length === 0) {
                    throw new Error('No Selection Made');
                }
                return true;
            };
        /**
         * check tag is supported by browser or not
         *
         * @param {?} tag HTML tag
         * @return {?}
         */
        CommandExecutorService.prototype.checkTagSupportInBrowser = /**
         * check tag is supported by browser or not
         *
         * @param {?} tag HTML tag
         * @return {?}
         */
            function (tag) {
                return !(document.createElement(tag) instanceof HTMLUnknownElement);
            };
        CommandExecutorService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CommandExecutorService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        return CommandExecutorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * time in which the message has to be cleared
      @type {?} */
    var DURATION = 7000;
    var MessageService = /** @class */ (function () {
        function MessageService() {
            /**
             * variable to hold the user message
             */
            this.message = new rxjs.Subject();
        }
        /** returns the message sent by the editor */
        /**
         * returns the message sent by the editor
         * @return {?}
         */
        MessageService.prototype.getMessage = /**
         * returns the message sent by the editor
         * @return {?}
         */
            function () {
                return this.message.asObservable();
            };
        /**
         * sends message to the editor
         *
         * @param message message to be sent
         */
        /**
         * sends message to the editor
         *
         * @param {?} message message to be sent
         * @return {?}
         */
        MessageService.prototype.sendMessage = /**
         * sends message to the editor
         *
         * @param {?} message message to be sent
         * @return {?}
         */
            function (message) {
                this.message.next(message);
                this.clearMessageIn(DURATION);
            };
        /**
         * a short interval to clear message
         *
         * @param {?} milliseconds time in seconds in which the message has to be cleared
         * @return {?}
         */
        MessageService.prototype.clearMessageIn = /**
         * a short interval to clear message
         *
         * @param {?} milliseconds time in seconds in which the message has to be cleared
         * @return {?}
         */
            function (milliseconds) {
                var _this = this;
                setTimeout(function () {
                    _this.message.next(undefined);
                }, milliseconds);
            };
        MessageService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MessageService.ctorParameters = function () { return []; };
        return MessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * toolbar default configuration
      @type {?} */
    var ngxEditorConfig = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        imageEndPoint: '',
        toolbar: [
            ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
            ['fontName', 'fontSize', 'color'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
            ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
            ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
            ['link', 'unlink', 'image', 'video']
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxEditorComponent = /** @class */ (function () {
        /**
         * @param _messageService service to send message to the editor message component
         * @param _commandExecutor executes command from the toolbar
         * @param _renderer access and manipulate the dom element
         */
        function NgxEditorComponent(_messageService, _commandExecutor, _renderer) {
            this._messageService = _messageService;
            this._commandExecutor = _commandExecutor;
            this._renderer = _renderer;
            /**
             * The editor can be resized vertically.
             *
             * `basic` resizer enables the html5 reszier. Check here https://www.w3schools.com/cssref/css3_pr_resize.asp
             *
             * `stack` resizer enable a resizer that looks like as if in https://stackoverflow.com
             */
            this.resizer = 'stack';
            /**
             * The config property is a JSON object
             *
             * All avaibale inputs inputs can be provided in the configuration as JSON
             * inputs provided directly are considered as top priority
             */
            this.config = ngxEditorConfig;
            /**
             * emits `blur` event when focused out from the textarea
             */
            this.blur = new core.EventEmitter();
            /**
             * emits `focus` event when focused in to the textarea
             */
            this.focus = new core.EventEmitter();
            this.Utils = Utils;
        }
        /**
         * events
         */
        /**
         * events
         * @return {?}
         */
        NgxEditorComponent.prototype.onTextAreaFocus = /**
         * events
         * @return {?}
         */
            function () {
                this.focus.emit('focus');
            };
        /** focus the text area when the editor is focussed */
        /**
         * focus the text area when the editor is focussed
         * @return {?}
         */
        NgxEditorComponent.prototype.onEditorFocus = /**
         * focus the text area when the editor is focussed
         * @return {?}
         */
            function () {
                this.textArea.nativeElement.focus();
            };
        /**
         * Executed from the contenteditable section while the input property changes
         * @param html html string from contenteditable
         */
        /**
         * Executed from the contenteditable section while the input property changes
         * @param {?} innerHTML
         * @return {?}
         */
        NgxEditorComponent.prototype.onContentChange = /**
         * Executed from the contenteditable section while the input property changes
         * @param {?} innerHTML
         * @return {?}
         */
            function (innerHTML) {
                if (typeof this.onChange === 'function') {
                    this.onChange(innerHTML);
                    this.togglePlaceholder(innerHTML);
                }
            };
        /**
         * @return {?}
         */
        NgxEditorComponent.prototype.onTextAreaBlur = /**
         * @return {?}
         */
            function () {
                /** save selection if focussed out */
                this._commandExecutor.savedSelection = saveSelection();
                if (typeof this.onTouched === 'function') {
                    this.onTouched();
                }
                this.blur.emit('blur');
            };
        /**
         * resizing text area
         *
         * @param offsetY vertical height of the eidtable portion of the editor
         */
        /**
         * resizing text area
         *
         * @param {?} offsetY vertical height of the eidtable portion of the editor
         * @return {?}
         */
        NgxEditorComponent.prototype.resizeTextArea = /**
         * resizing text area
         *
         * @param {?} offsetY vertical height of the eidtable portion of the editor
         * @return {?}
         */
            function (offsetY) {
                /** @type {?} */
                var newHeight = parseInt(this.height, 10);
                newHeight += offsetY;
                this.height = newHeight + 'px';
                this.textArea.nativeElement.style.height = this.height;
            };
        /**
         * editor actions, i.e., executes command from toolbar
         *
         * @param commandName name of the command to be executed
         */
        /**
         * editor actions, i.e., executes command from toolbar
         *
         * @param {?} commandName name of the command to be executed
         * @return {?}
         */
        NgxEditorComponent.prototype.executeCommand = /**
         * editor actions, i.e., executes command from toolbar
         *
         * @param {?} commandName name of the command to be executed
         * @return {?}
         */
            function (commandName) {
                try {
                    this._commandExecutor.execute(commandName);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
            };
        /**
         * Write a new value to the element.
         *
         * @param value value to be executed when there is a change in contenteditable
         */
        /**
         * Write a new value to the element.
         *
         * @param {?} value value to be executed when there is a change in contenteditable
         * @return {?}
         */
        NgxEditorComponent.prototype.writeValue = /**
         * Write a new value to the element.
         *
         * @param {?} value value to be executed when there is a change in contenteditable
         * @return {?}
         */
            function (value) {
                this.togglePlaceholder(value);
                if (value === null || value === undefined || value === '' || value === '<br>') {
                    value = null;
                }
                this.refreshView(value);
            };
        /**
         * Set the function to be called
         * when the control receives a change event.
         *
         * @param fn a function
         */
        /**
         * Set the function to be called
         * when the control receives a change event.
         *
         * @param {?} fn a function
         * @return {?}
         */
        NgxEditorComponent.prototype.registerOnChange = /**
         * Set the function to be called
         * when the control receives a change event.
         *
         * @param {?} fn a function
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * Set the function to be called
         * when the control receives a touch event.
         *
         * @param fn a function
         */
        /**
         * Set the function to be called
         * when the control receives a touch event.
         *
         * @param {?} fn a function
         * @return {?}
         */
        NgxEditorComponent.prototype.registerOnTouched = /**
         * Set the function to be called
         * when the control receives a touch event.
         *
         * @param {?} fn a function
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * refresh view/HTML of the editor
         *
         * @param value html string from the editor
         */
        /**
         * refresh view/HTML of the editor
         *
         * @param {?} value html string from the editor
         * @return {?}
         */
        NgxEditorComponent.prototype.refreshView = /**
         * refresh view/HTML of the editor
         *
         * @param {?} value html string from the editor
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var normalizedValue = value === null ? '' : value;
                this._renderer.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
            };
        /**
         * toggles placeholder based on input string
         *
         * @param value A HTML string from the editor
         */
        /**
         * toggles placeholder based on input string
         *
         * @param {?} value A HTML string from the editor
         * @return {?}
         */
        NgxEditorComponent.prototype.togglePlaceholder = /**
         * toggles placeholder based on input string
         *
         * @param {?} value A HTML string from the editor
         * @return {?}
         */
            function (value) {
                if (!value || value === '<br>' || value === '') {
                    this._renderer.addClass(this.ngxWrapper.nativeElement, 'show-placeholder');
                }
                else {
                    this._renderer.removeClass(this.ngxWrapper.nativeElement, 'show-placeholder');
                }
            };
        /**
         * returns a json containing input params
         */
        /**
         * returns a json containing input params
         * @return {?}
         */
        NgxEditorComponent.prototype.getCollectiveParams = /**
         * returns a json containing input params
         * @return {?}
         */
            function () {
                return {
                    editable: this.editable,
                    spellcheck: this.spellcheck,
                    placeholder: this.placeholder,
                    translate: this.translate,
                    height: this.height,
                    minHeight: this.minHeight,
                    width: this.width,
                    minWidth: this.minWidth,
                    enableToolbar: this.enableToolbar,
                    showToolbar: this.showToolbar,
                    imageEndPoint: this.imageEndPoint,
                    toolbar: this.toolbar
                };
            };
        /**
         * @return {?}
         */
        NgxEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /**
                     * set configuartion
                     */
                this.config = this.Utils.getEditorConfiguration(this.config, ngxEditorConfig, this.getCollectiveParams());
                this.height = this.height || this.textArea.nativeElement.offsetHeight;
                this.executeCommand('enableObjectResizing');
            };
        NgxEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-ngx-editor',
                        template: "<div class=\"ngx-editor\" id=\"ngxEditor\" [style.width]=\"config['width']\" [style.minWidth]=\"config['minWidth']\" tabindex=\"0\"\n  (focus)=\"onEditorFocus()\">\n\n  <app-ngx-editor-toolbar [config]=\"config\" (execute)=\"executeCommand($event)\"></app-ngx-editor-toolbar>\n\n  <!-- text area -->\n  <div class=\"ngx-wrapper\" #ngxWrapper>\n    <div class=\"ngx-editor-textarea\" [attr.contenteditable]=\"config['editable']\" (input)=\"onContentChange($event.target.innerHTML)\"\n      [attr.translate]=\"config['translate']\" [attr.spellcheck]=\"config['spellcheck']\" [style.height]=\"config['height']\"\n      [style.minHeight]=\"config['minHeight']\" [style.resize]=\"Utils?.canResize(resizer)\" (focus)=\"onTextAreaFocus()\"\n      (blur)=\"onTextAreaBlur()\" #ngxTextArea></div>\n\n    <span class=\"ngx-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n  </div>\n\n  <app-ngx-editor-message></app-ngx-editor-message>\n  <app-ngx-grippie *ngIf=\"resizer === 'stack'\"></app-ngx-grippie>\n\n</div>\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return NgxEditorComponent; }),
                                multi: true
                            }],
                        styles: [".ngx-editor{position:relative}.ngx-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);display:block;color:#868e96;opacity:1}.ngx-editor .ngx-wrapper{position:relative}.ngx-editor .ngx-wrapper .ngx-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;z-index:2;position:relative}.ngx-editor .ngx-wrapper .ngx-editor-textarea.focus,.ngx-editor .ngx-wrapper .ngx-editor-textarea:focus{outline:0}.ngx-editor .ngx-wrapper .ngx-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.ngx-editor .ngx-wrapper ::ng-deep p{margin-bottom:0}.ngx-editor .ngx-wrapper .ngx-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;z-index:1;color:#6c757d;opacity:1}.ngx-editor .ngx-wrapper.show-placeholder .ngx-editor-placeholder{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        NgxEditorComponent.ctorParameters = function () {
            return [
                { type: MessageService },
                { type: CommandExecutorService },
                { type: core.Renderer2 }
            ];
        };
        NgxEditorComponent.propDecorators = {
            editable: [{ type: core.Input }],
            spellcheck: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            translate: [{ type: core.Input }],
            height: [{ type: core.Input }],
            minHeight: [{ type: core.Input }],
            width: [{ type: core.Input }],
            minWidth: [{ type: core.Input }],
            toolbar: [{ type: core.Input }],
            resizer: [{ type: core.Input }],
            config: [{ type: core.Input }],
            showToolbar: [{ type: core.Input }],
            enableToolbar: [{ type: core.Input }],
            imageEndPoint: [{ type: core.Input }],
            blur: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            textArea: [{ type: core.ViewChild, args: ['ngxTextArea',] }],
            ngxWrapper: [{ type: core.ViewChild, args: ['ngxWrapper',] }]
        };
        return NgxEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxGrippieComponent = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param _editorComponent Editor component
         */
        function NgxGrippieComponent(_editorComponent) {
            this._editorComponent = _editorComponent;
            /**
             * previous value befor resizing the editor
             */
            this.oldY = 0;
            /**
             * set to true on mousedown event
             */
            this.grabber = false;
        }
        /**
         *
         * @param event Mouseevent
         *
         * Update the height of the editor when the grabber is dragged
         */
        /**
         *
         * @param {?} event Mouseevent
         *
         * Update the height of the editor when the grabber is dragged
         * @return {?}
         */
        NgxGrippieComponent.prototype.onMouseMove = /**
         *
         * @param {?} event Mouseevent
         *
         * Update the height of the editor when the grabber is dragged
         * @return {?}
         */
            function (event) {
                if (!this.grabber) {
                    return;
                }
                this._editorComponent.resizeTextArea(event.clientY - this.oldY);
                this.oldY = event.clientY;
            };
        /**
         *
         * @param event Mouseevent
         *
         * set the grabber to false on mouse up action
         */
        /**
         *
         * @param {?} event Mouseevent
         *
         * set the grabber to false on mouse up action
         * @return {?}
         */
        NgxGrippieComponent.prototype.onMouseUp = /**
         *
         * @param {?} event Mouseevent
         *
         * set the grabber to false on mouse up action
         * @return {?}
         */
            function (event) {
                this.grabber = false;
            };
        /**
         * @param {?} event
         * @param {?=} resizer
         * @return {?}
         */
        NgxGrippieComponent.prototype.onResize = /**
         * @param {?} event
         * @param {?=} resizer
         * @return {?}
         */
            function (event, resizer) {
                this.grabber = true;
                this.oldY = event.clientY;
                event.preventDefault();
            };
        NgxGrippieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-ngx-grippie',
                        template: "<div class=\"ngx-editor-grippie\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\" viewBox=\"651.6 235 26 5\"\n    width=\"26\" height=\"5\">\n    <g id=\"sprites\">\n      <path d=\" M 651.6 235 L 653.6 235 L 653.6 237 L 651.6 237 M 654.6 238 L 656.6 238 L 656.6 240 L 654.6 240 M 660.6 238 L 662.6 238 L 662.6 240 L 660.6 240 M 666.6 238 L 668.6 238 L 668.6 240 L 666.6 240 M 672.6 238 L 674.6 238 L 674.6 240 L 672.6 240 M 657.6 235 L 659.6 235 L 659.6 237 L 657.6 237 M 663.6 235 L 665.6 235 L 665.6 237 L 663.6 237 M 669.6 235 L 671.6 235 L 671.6 237 L 669.6 237 M 675.6 235 L 677.6 235 L 677.6 237 L 675.6 237\"\n        fill=\"rgb(147,153,159)\" />\n    </g>\n  </svg>\n</div>\n",
                        styles: [".ngx-editor-grippie{height:9px;background-color:#f1f1f1;position:relative;text-align:center;cursor:s-resize;border:1px solid #ddd;border-top:transparent}.ngx-editor-grippie svg{position:absolute;top:1.5px;width:50%;right:25%}"]
                    }] }
        ];
        /** @nocollapse */
        NgxGrippieComponent.ctorParameters = function () {
            return [
                { type: NgxEditorComponent }
            ];
        };
        NgxGrippieComponent.propDecorators = {
            onMouseMove: [{ type: core.HostListener, args: ['document:mousemove', ['$event'],] }],
            onMouseUp: [{ type: core.HostListener, args: ['document:mouseup', ['$event'],] }],
            onResize: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }]
        };
        return NgxGrippieComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxEditorMessageComponent = /** @class */ (function () {
        /**
         * @param _messageService service to send message to the editor
         */
        function NgxEditorMessageComponent(_messageService) {
            var _this = this;
            this._messageService = _messageService;
            /**
             * property that holds the message to be displayed on the editor
             */
            this.ngxMessage = undefined;
            this._messageService.getMessage().subscribe(function (message) { return _this.ngxMessage = message; });
        }
        /**
         * clears editor message
         */
        /**
         * clears editor message
         * @return {?}
         */
        NgxEditorMessageComponent.prototype.clearMessage = /**
         * clears editor message
         * @return {?}
         */
            function () {
                this.ngxMessage = undefined;
            };
        NgxEditorMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-ngx-editor-message',
                        template: "<div class=\"ngx-editor-message\" *ngIf=\"ngxMessage\" (dblclick)=\"clearMessage()\">\n  {{ ngxMessage }}\n</div>\n",
                        styles: [".ngx-editor-message{font-size:80%;background-color:#f1f1f1;border:1px solid #ddd;border-top:transparent;padding:0 .5rem .1rem;transition:.5s ease-in}"]
                    }] }
        ];
        /** @nocollapse */
        NgxEditorMessageComponent.ctorParameters = function () {
            return [
                { type: MessageService }
            ];
        };
        return NgxEditorMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxEditorToolbarComponent = /** @class */ (function () {
        function NgxEditorToolbarComponent(_popOverConfig, _formBuilder, _messageService, _commandExecutorService) {
            this._popOverConfig = _popOverConfig;
            this._formBuilder = _formBuilder;
            this._messageService = _messageService;
            this._commandExecutorService = _commandExecutorService;
            /**
             * set to false when image is being uploaded
             */
            this.uploadComplete = true;
            /**
             * upload percentage
             */
            this.updloadPercentage = 0;
            /**
             * set to true when the image is being uploaded
             */
            this.isUploading = false;
            /**
             * which tab to active for color insetion
             */
            this.selectedColorTab = 'textColor';
            /**
             * font family name
             */
            this.fontName = '';
            /**
             * font size
             */
            this.fontSize = '';
            /**
             * hex color code
             */
            this.hexColor = '';
            /**
             * show/hide image uploader
             */
            this.isImageUploader = false;
            /**
             * Emits an event when a toolbar button is clicked
             */
            this.execute = new core.EventEmitter();
            this._popOverConfig.outsideClick = true;
            this._popOverConfig.placement = 'bottom';
            this._popOverConfig.container = 'body';
        }
        /**
         * enable or diable toolbar based on configuration
         *
         * @param value name of the toolbar buttons
         */
        /**
         * enable or diable toolbar based on configuration
         *
         * @param {?} value name of the toolbar buttons
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.canEnableToolbarOptions = /**
         * enable or diable toolbar based on configuration
         *
         * @param {?} value name of the toolbar buttons
         * @return {?}
         */
            function (value) {
                return canEnableToolbarOptions(value, this.config['toolbar']);
            };
        /**
         * triggers command from the toolbar to be executed and emits an event
         *
         * @param command name of the command to be executed
         */
        /**
         * triggers command from the toolbar to be executed and emits an event
         *
         * @param {?} command name of the command to be executed
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.triggerCommand = /**
         * triggers command from the toolbar to be executed and emits an event
         *
         * @param {?} command name of the command to be executed
         * @return {?}
         */
            function (command) {
                this.execute.emit(command);
            };
        /**
         * create URL insert form
         */
        /**
         * create URL insert form
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.buildUrlForm = /**
         * create URL insert form
         * @return {?}
         */
            function () {
                this.urlForm = this._formBuilder.group({
                    urlLink: ['', [forms.Validators.required]],
                    urlText: ['', [forms.Validators.required]],
                    urlNewTab: [true]
                });
            };
        /**
         * inserts link in the editor
         */
        /**
         * inserts link in the editor
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.insertLink = /**
         * inserts link in the editor
         * @return {?}
         */
            function () {
                try {
                    this._commandExecutorService.createLink(this.urlForm.value);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                /** reset form to default */
                this.buildUrlForm();
                /** close inset URL pop up */
                this.urlPopover.hide();
            };
        /**
         * create insert image form
         */
        /**
         * create insert image form
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.buildImageForm = /**
         * create insert image form
         * @return {?}
         */
            function () {
                this.imageForm = this._formBuilder.group({
                    imageUrl: ['', [forms.Validators.required]]
                });
            };
        /**
         * create insert image form
         */
        /**
         * create insert image form
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.buildVideoForm = /**
         * create insert image form
         * @return {?}
         */
            function () {
                this.videoForm = this._formBuilder.group({
                    videoUrl: ['', [forms.Validators.required]],
                    height: [''],
                    width: ['']
                });
            };
        /**
         * Executed when file is selected
         *
         * @param e onChange event
         */
        /**
         * Executed when file is selected
         *
         * @param {?} e onChange event
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.onFileChange = /**
         * Executed when file is selected
         *
         * @param {?} e onChange event
         * @return {?}
         */
            function (e) {
                var _this = this;
                this.uploadComplete = false;
                this.isUploading = true;
                if (e.target.files.length > 0) {
                    /** @type {?} */
                    var file = e.target.files[0];
                    try {
                        this._commandExecutorService.uploadImage(file, this.config.imageEndPoint).subscribe(function (event) {
                            if (event.type) {
                                _this.updloadPercentage = Math.round(100 * event.loaded / event.total);
                            }
                            if (event instanceof http.HttpResponse) {
                                try {
                                    _this._commandExecutorService.insertImage(event.body.url);
                                }
                                catch (error) {
                                    _this._messageService.sendMessage(error.message);
                                }
                                _this.uploadComplete = true;
                                _this.isUploading = false;
                            }
                        });
                    }
                    catch (error) {
                        this._messageService.sendMessage(error.message);
                        this.uploadComplete = true;
                        this.isUploading = false;
                    }
                }
            };
        /** insert image in the editor */
        /**
         * insert image in the editor
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.insertImage = /**
         * insert image in the editor
         * @return {?}
         */
            function () {
                try {
                    this._commandExecutorService.insertImage(this.imageForm.value.imageUrl);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                /** reset form to default */
                this.buildImageForm();
                /** close inset URL pop up */
                this.imagePopover.hide();
            };
        /** insert image in the editor */
        /**
         * insert image in the editor
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.insertVideo = /**
         * insert image in the editor
         * @return {?}
         */
            function () {
                try {
                    this._commandExecutorService.insertVideo(this.videoForm.value);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                /** reset form to default */
                this.buildVideoForm();
                /** close inset URL pop up */
                this.videoPopover.hide();
            };
        /** inser text/background color */
        /**
         * inser text/background color
         * @param {?} color
         * @param {?} where
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.insertColor = /**
         * inser text/background color
         * @param {?} color
         * @param {?} where
         * @return {?}
         */
            function (color, where) {
                try {
                    this._commandExecutorService.insertColor(color, where);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                this.colorPopover.hide();
            };
        /** set font size */
        /**
         * set font size
         * @param {?} fontSize
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.setFontSize = /**
         * set font size
         * @param {?} fontSize
         * @return {?}
         */
            function (fontSize) {
                try {
                    this._commandExecutorService.setFontSize(fontSize);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                this.fontSizePopover.hide();
            };
        /** set font Name/family */
        /**
         * set font Name/family
         * @param {?} fontName
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.setFontName = /**
         * set font Name/family
         * @param {?} fontName
         * @return {?}
         */
            function (fontName) {
                try {
                    this._commandExecutorService.setFontName(fontName);
                }
                catch (error) {
                    this._messageService.sendMessage(error.message);
                }
                this.fontSizePopover.hide();
            };
        /**
         * @return {?}
         */
        NgxEditorToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.buildUrlForm();
                this.buildImageForm();
                this.buildVideoForm();
            };
        NgxEditorToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-ngx-editor-toolbar',
                        template: "<div class=\"ngx-toolbar\" *ngIf=\"config['showToolbar']\">\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('bold')\" (click)=\"triggerCommand('bold')\"\n      title=\"Bold\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-bold\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('italic')\" (click)=\"triggerCommand('italic')\"\n      title=\"Italic\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-italic\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('underline')\" (click)=\"triggerCommand('underline')\"\n      title=\"Underline\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-underline\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('strikeThrough')\" (click)=\"triggerCommand('strikeThrough')\"\n      title=\"Strikethrough\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-strikethrough\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('superscript')\" (click)=\"triggerCommand('superscript')\"\n      title=\"Superscript\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-superscript\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('subscript')\" (click)=\"triggerCommand('subscript')\"\n      title=\"Subscript\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-subscript\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('fontName')\" (click)=\"fontName = ''\"\n      title=\"Font Family\" [popover]=\"fontNameTemplate\" #fontNamePopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-font\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('fontSize')\" (click)=\"fontSize = ''\"\n      title=\"Font Size\" [popover]=\"fontSizeTemplate\" #fontSizePopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-text-height\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('color')\" (click)=\"hexColor = ''\"\n      title=\"Color Picker\" [popover]=\"insertColorTemplate\" #colorPopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-tint\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('justifyLeft')\" (click)=\"triggerCommand('justifyLeft')\"\n      title=\"Justify Left\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('justifyCenter')\" (click)=\"triggerCommand('justifyCenter')\"\n      title=\"Justify Center\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-align-center\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('justifyRight')\" (click)=\"triggerCommand('justifyRight')\"\n      title=\"Justify Right\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-align-right\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('justifyFull')\" (click)=\"triggerCommand('justifyFull')\"\n      title=\"Justify\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-align-justify\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('indent')\" (click)=\"triggerCommand('indent')\"\n      title=\"Indent\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-indent\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('outdent')\" (click)=\"triggerCommand('outdent')\"\n      title=\"Outdent\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-outdent\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('cut')\" (click)=\"triggerCommand('cut')\"\n      title=\"Cut\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('copy')\" (click)=\"triggerCommand('copy')\"\n      title=\"Copy\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-files-o\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('delete')\" (click)=\"triggerCommand('delete')\"\n      title=\"Delete\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('removeFormat')\" (click)=\"triggerCommand('removeFormat')\"\n      title=\"Clear Formatting\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-eraser\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('undo')\" (click)=\"triggerCommand('undo')\"\n      title=\"Undo\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('redo')\" (click)=\"triggerCommand('redo')\"\n      title=\"Redo\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-repeat\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('paragraph')\" (click)=\"triggerCommand('insertParagraph')\"\n      title=\"Paragraph\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-paragraph\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('blockquote')\" (click)=\"triggerCommand('blockquote')\"\n      title=\"Blockquote\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('removeBlockquote')\" (click)=\"triggerCommand('removeBlockquote')\"\n      title=\"Remove Blockquote\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('horizontalLine')\" (click)=\"triggerCommand('insertHorizontalRule')\"\n      title=\"Horizontal Line\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('unorderedList')\" (click)=\"triggerCommand('insertUnorderedList')\"\n      title=\"Unordered List\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('orderedList')\" (click)=\"triggerCommand('insertOrderedList')\"\n      title=\"Ordered List\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"ngx-toolbar-set\">\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('link')\" (click)=\"buildUrlForm()\"\n      [popover]=\"insertLinkTemplate\" title=\"Insert Link\" #urlPopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('unlink')\" (click)=\"triggerCommand('unlink')\"\n      title=\"Unlink\" [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-chain-broken\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('image')\" (click)=\"buildImageForm()\"\n      title=\"Insert Image\" [popover]=\"insertImageTemplate\" #imagePopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n    </button>\n    <button type=\"button\" class=\"ngx-editor-button\" *ngIf=\"canEnableToolbarOptions('video')\" (click)=\"buildVideoForm()\"\n      title=\"Insert Video\" [popover]=\"insertVideoTemplate\" #videoPopover=\"bs-popover\" containerClass=\"ngxePopover\"\n      [disabled]=\"!config['enableToolbar']\">\n      <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n\n<!-- URL Popover template -->\n<ng-template #insertLinkTemplate>\n  <div class=\"ngxe-popover extra-gt\">\n    <form [formGroup]=\"urlForm\" (ngSubmit)=\"urlForm.valid && insertLink()\" autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"urlInput\" class=\"small\">URL</label>\n        <input type=\"text\" class=\"form-control-sm\" id=\"URLInput\" placeholder=\"URL\" formControlName=\"urlLink\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"urlTextInput\" class=\"small\">Text</label>\n        <input type=\"text\" class=\"form-control-sm\" id=\"urlTextInput\" placeholder=\"Text\" formControlName=\"urlText\"\n          required>\n      </div>\n      <div class=\"form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"urlNewTab\" formControlName=\"urlNewTab\">\n        <label class=\"form-check-label\" for=\"urlNewTab\">Open in new tab</label>\n      </div>\n      <button type=\"submit\" class=\"btn-primary btn-sm btn\">Submit</button>\n    </form>\n  </div>\n</ng-template>\n\n<!-- Image Uploader Popover template -->\n<ng-template #insertImageTemplate>\n  <div class=\"ngxe-popover imgc-ctnr\">\n    <div class=\"imgc-topbar btn-ctnr\">\n      <button type=\"button\" class=\"btn\" [ngClass]=\"{active: isImageUploader}\" (click)=\"isImageUploader = true\">\n        <i class=\"fa fa-upload\"></i>\n      </button>\n      <button type=\"button\" class=\"btn\" [ngClass]=\"{active: !isImageUploader}\" (click)=\"isImageUploader = false\">\n        <i class=\"fa fa-link\"></i>\n      </button>\n    </div>\n    <div class=\"imgc-ctnt is-image\">\n      <div *ngIf=\"isImageUploader; else insertImageLink\"> </div>\n      <div *ngIf=\"!isImageUploader; else imageUploder\"> </div>\n      <ng-template #imageUploder>\n        <div class=\"ngx-insert-img-ph\">\n          <p *ngIf=\"uploadComplete\">Choose Image</p>\n          <p *ngIf=\"!uploadComplete\">\n            <span>Uploading Image</span>\n            <br>\n            <span>{{ updloadPercentage }} %</span>\n          </p>\n          <div class=\"ngxe-img-upl-frm\">\n            <input type=\"file\" (change)=\"onFileChange($event)\" accept=\"image/*\" [disabled]=\"isUploading\" [style.cursor]=\"isUploading ? 'not-allowed': 'allowed'\">\n          </div>\n        </div>\n      </ng-template>\n      <ng-template #insertImageLink>\n        <form class=\"extra-gt\" [formGroup]=\"imageForm\" (ngSubmit)=\"imageForm.valid && insertImage()\" autocomplete=\"off\">\n          <div class=\"form-group\">\n            <label for=\"imageURLInput\" class=\"small\">URL</label>\n            <input type=\"text\" class=\"form-control-sm\" id=\"imageURLInput\" placeholder=\"URL\" formControlName=\"imageUrl\"\n              required>\n          </div>\n          <button type=\"submit\" class=\"btn-primary btn-sm btn\">Submit</button>\n        </form>\n      </ng-template>\n      <div class=\"progress\" *ngIf=\"!uploadComplete\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" [ngClass]=\"{'bg-danger': updloadPercentage<20, 'bg-warning': updloadPercentage<50, 'bg-success': updloadPercentage>=100}\"\n          [style.width.%]=\"updloadPercentage\"></div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<!-- Insert Video Popover template -->\n<ng-template #insertVideoTemplate>\n  <div class=\"ngxe-popover imgc-ctnr\">\n    <div class=\"imgc-topbar btn-ctnr\">\n      <button type=\"button\" class=\"btn active\">\n        <i class=\"fa fa-link\"></i>\n      </button>\n    </div>\n    <div class=\"imgc-ctnt is-image\">\n      <form class=\"extra-gt\" [formGroup]=\"videoForm\" (ngSubmit)=\"videoForm.valid && insertVideo()\" autocomplete=\"off\">\n        <div class=\"form-group\">\n          <label for=\"videoURLInput\" class=\"small\">URL</label>\n          <input type=\"text\" class=\"form-control-sm\" id=\"videoURLInput\" placeholder=\"URL\" formControlName=\"videoUrl\"\n            required>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control-sm\" formControlName=\"height\" placeholder=\"height (px)\" pattern=\"[0-9]\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control-sm\" formControlName=\"width\" placeholder=\"width (px)\" pattern=\"[0-9]\">\n          </div>\n          <label class=\"small\">Height/Width</label>\n        </div>\n        <button type=\"submit\" class=\"btn-primary btn-sm btn\">Submit</button>\n      </form>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Insert color template -->\n<ng-template #insertColorTemplate>\n  <div class=\"ngxe-popover imgc-ctnr\">\n    <div class=\"imgc-topbar two-tabs\">\n      <span (click)=\"selectedColorTab ='textColor'\" [ngClass]=\"{active: selectedColorTab ==='textColor'}\">Text</span>\n      <span (click)=\"selectedColorTab ='backgroundColor'\" [ngClass]=\"{active: selectedColorTab ==='backgroundColor'}\">Background</span>\n    </div>\n    <div class=\"imgc-ctnt is-color extra-gt1\">\n      <form autocomplete=\"off\">\n        <div class=\"form-group\">\n          <label for=\"hexInput\" class=\"small\">Hex Color</label>\n          <input type=\"text\" class=\"form-control-sm\" id=\"hexInput\" name=\"hexInput\" maxlength=\"7\" placeholder=\"HEX Color\"\n            [(ngModel)]=\"hexColor\" required>\n        </div>\n        <button type=\"button\" class=\"btn-primary btn-sm btn\" (click)=\"insertColor(hexColor, selectedColorTab)\">Submit</button>\n      </form>\n    </div>\n  </div>\n</ng-template>\n\n<!-- font size template -->\n<ng-template #fontSizeTemplate>\n  <div class=\"ngxe-popover extra-gt1\">\n    <form autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"fontSize\" class=\"small\">Font Size</label>\n        <input type=\"text\" class=\"form-control-sm\" id=\"fontSize\" name=\"fontSize\" placeholder=\"Font size in px/rem\"\n          [(ngModel)]=\"fontSize\" required>\n      </div>\n      <button type=\"button\" class=\"btn-primary btn-sm btn\" (click)=\"setFontSize(fontSize)\">Submit</button>\n    </form>\n  </div>\n</ng-template>\n\n<!-- font family/name template -->\n<ng-template #fontNameTemplate>\n  <div class=\"ngxe-popover extra-gt1\">\n    <form autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"fontSize\" class=\"small\">Font Size</label>\n        <input type=\"text\" class=\"form-control-sm\" id=\"fontSize\" name=\"fontName\" placeholder=\"Ex: 'Times New Roman', Times, serif\"\n          [(ngModel)]=\"fontName\" required>\n      </div>\n      <button type=\"button\" class=\"btn-primary btn-sm btn\" (click)=\"setFontName(fontName)\">Submit</button>\n    </form>\n  </div>\n</ng-template>\n",
                        providers: [ngxBootstrap.PopoverConfig],
                        styles: ["::ng-deep .ngxePopover.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}::ng-deep .ngxePopover.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}::ng-deep .ngxePopover.popover .arrow::after,::ng-deep .ngxePopover.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}::ng-deep .ngxePopover.popover .popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}::ng-deep .ngxePopover.popover .popover-header:empty{display:none}::ng-deep .ngxePopover.popover .popover-body{padding:.5rem .75rem;color:#212529}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top],::ng-deep .ngxePopover.popover.bs-popover-top{margin-bottom:.5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top] .arrow,::ng-deep .ngxePopover.popover.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-top .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=top] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right],::ng-deep .ngxePopover.popover.bs-popover-right{margin-left:.5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right] .arrow,::ng-deep .ngxePopover.popover.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-right .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=right] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom],::ng-deep .ngxePopover.popover.bs-popover-bottom{margin-top:.5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .arrow,::ng-deep .ngxePopover.popover.bs-popover-bottom .arrow{left:45%!important;top:calc((.5rem + 1px) * -1)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-bottom .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=bottom] .popover-header::before,::ng-deep .ngxePopover.popover.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left],::ng-deep .ngxePopover.popover.bs-popover-left{margin-right:.5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left] .arrow,::ng-deep .ngxePopover.popover.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-left .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left] .arrow::before,::ng-deep .ngxePopover.popover.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}::ng-deep .ngxePopover.popover.bs-popover-auto[x-placement^=left] .arrow::after,::ng-deep .ngxePopover.popover.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}::ng-deep .ngxePopover .btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}::ng-deep .ngxePopover .btn.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}::ng-deep .ngxePopover .btn:active,::ng-deep .ngxePopover .btn:focus{outline:0;box-shadow:none}::ng-deep .ngxePopover .btn.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}::ng-deep .ngxePopover .btn.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}::ng-deep .ngxePopover .btn:not(:disabled):not(.disabled){cursor:pointer}::ng-deep .ngxePopover form .form-group{margin-bottom:1rem}::ng-deep .ngxePopover form .form-group input{overflow:visible}::ng-deep .ngxePopover form .form-group .form-control-sm{width:100%;outline:0;border:none;border-bottom:1px solid #bdbdbd;border-radius:0;margin-bottom:1px;padding:.25rem .5rem;font-size:.875rem;line-height:1.5}::ng-deep .ngxePopover form .form-group.row{display:flex;flex-wrap:wrap;margin-left:0;margin-right:0}::ng-deep .ngxePopover form .form-group.row .col{flex-basis:0;flex-grow:1;max-width:100%;padding:0}::ng-deep .ngxePopover form .form-group.row .col:first-child{padding-right:15px}::ng-deep .ngxePopover form .form-check{position:relative;display:block;padding-left:1.25rem}::ng-deep .ngxePopover form .form-check .form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.ngx-toolbar{display:flex;flex-wrap:wrap;background-color:#f5f5f5;font-size:.8rem;padding:.2rem .2rem 0;border:1px solid #ddd}.ngx-toolbar .ngx-toolbar-set{display:flex;border-radius:5px;background-color:#fff;margin-right:.2rem;margin-bottom:.2rem}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button{background-color:transparent;padding:.4rem;min-width:2.5rem;border:1px solid #ddd;border-right:transparent}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button.focus,.ngx-toolbar .ngx-toolbar-set .ngx-editor-button:focus{outline:0}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button:last-child{border-right:1px solid #ddd;border-top-right-radius:5px;border-bottom-right-radius:5px}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.ngx-toolbar .ngx-toolbar-set .ngx-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}::ng-deep .popover{border-top-right-radius:0;border-top-left-radius:0}::ng-deep .ngxe-popover{min-width:15rem;white-space:nowrap}::ng-deep .ngxe-popover .extra-gt,::ng-deep .ngxe-popover.extra-gt{padding-top:.5rem!important}::ng-deep .ngxe-popover .extra-gt1,::ng-deep .ngxe-popover.extra-gt1{padding-top:.75rem!important}::ng-deep .ngxe-popover .extra-gt2,::ng-deep .ngxe-popover.extra-gt2{padding-top:1rem!important}::ng-deep .ngxe-popover .form-group label{display:none;margin:0}::ng-deep .ngxe-popover .form-group .form-control-sm{width:100%;outline:0;border:none;border-bottom:1px solid #bdbdbd;border-radius:0;margin-bottom:1px;padding-left:0;padding-right:0}::ng-deep .ngxe-popover .form-group .form-control-sm:active,::ng-deep .ngxe-popover .form-group .form-control-sm:focus{border-bottom:2px solid #1e88e5;box-shadow:none;margin-bottom:0}::ng-deep .ngxe-popover .form-group .form-control-sm.ng-dirty.ng-invalid:not(.ng-pristine){border-bottom:2px solid red}::ng-deep .ngxe-popover .form-check{margin-bottom:1rem}::ng-deep .ngxe-popover .btn:focus{box-shadow:none!important}::ng-deep .ngxe-popover.imgc-ctnr{margin:-.5rem -.75rem}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 1px 1px rgba(0,0,0,.16);border-bottom:0}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.btn-ctnr button{background-color:transparent;border-radius:0}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.btn-ctnr button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.btn-ctnr button.active{color:#007bff;transition:.2s}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.two-tabs span{width:50%;display:inline-flex;justify-content:center;padding:.4rem 0;margin:0 -1px 2px}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.two-tabs span:hover{cursor:pointer}::ng-deep .ngxe-popover.imgc-ctnr .imgc-topbar.two-tabs span.active{margin-bottom:-2px;border-bottom:2px solid #007bff;color:#007bff}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt{padding:.5rem}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image .progress{height:.5rem;margin:.5rem -.5rem -.6rem}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image p{margin:0}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image .ngx-insert-img-ph{border:2px dashed #bdbdbd;padding:1.8rem 0;position:relative;letter-spacing:1px;text-align:center}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image .ngx-insert-img-ph:hover{background:#ebebeb}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image .ngx-insert-img-ph .ngxe-img-upl-frm{opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;z-index:2147483640;overflow:hidden;margin:0;padding:0;width:100%}::ng-deep .ngxe-popover.imgc-ctnr .imgc-ctnt.is-image .ngx-insert-img-ph .ngxe-img-upl-frm input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;margin:0}"]
                    }] }
        ];
        /** @nocollapse */
        NgxEditorToolbarComponent.ctorParameters = function () {
            return [
                { type: ngxBootstrap.PopoverConfig },
                { type: forms.FormBuilder },
                { type: MessageService },
                { type: CommandExecutorService }
            ];
        };
        NgxEditorToolbarComponent.propDecorators = {
            config: [{ type: core.Input }],
            urlPopover: [{ type: core.ViewChild, args: ['urlPopover',] }],
            imagePopover: [{ type: core.ViewChild, args: ['imagePopover',] }],
            videoPopover: [{ type: core.ViewChild, args: ['videoPopover',] }],
            fontSizePopover: [{ type: core.ViewChild, args: ['fontSizePopover',] }],
            colorPopover: [{ type: core.ViewChild, args: ['colorPopover',] }],
            execute: [{ type: core.Output }]
        };
        return NgxEditorToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxEditorModule = /** @class */ (function () {
        function NgxEditorModule() {
        }
        NgxEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule, ngxBootstrap.PopoverModule.forRoot()],
                        declarations: [NgxEditorComponent, NgxGrippieComponent, NgxEditorMessageComponent, NgxEditorToolbarComponent],
                        exports: [NgxEditorComponent],
                        providers: [CommandExecutorService, MessageService]
                    },] }
        ];
        return NgxEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} maxlength
     * @param {?=} options
     * @return {?}
     */
    function MaxLengthValidator(maxlength, options) {
        return function (control) {
            /** @type {?} */
            var parsedDocument = new DOMParser().parseFromString(control.value, 'text/html');
            /** @type {?} */
            var innerText = parsedDocument.body.innerText || '';
            // replace all linebreaks
            if (options.excludeLineBreaks) {
                innerText = innerText.replace(/(\r\n\t|\n|\r\t)/gm, '');
            }
            // concat multiple whitespaces into a single whitespace
            if (options.concatWhiteSpaces) {
                innerText = innerText.replace(/(\s\s+)/gm, ' ');
            }
            // remove all whitespaces
            if (options.excludeWhiteSpaces) {
                innerText = innerText.replace(/(\s)/gm, '');
            }
            if (innerText.length > maxlength) {
                return {
                    ngxEditor: {
                        allowedLength: maxlength,
                        textLength: innerText.length
                    }
                };
            }
            return null;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgxEditorModule = NgxEditorModule;
    exports.MaxLengthValidator = MaxLengthValidator;
    exports.ɵc = CommandExecutorService;
    exports.ɵb = MessageService;
    exports.ɵe = NgxEditorMessageComponent;
    exports.ɵf = NgxEditorToolbarComponent;
    exports.ɵa = NgxEditorComponent;
    exports.ɵd = NgxGrippieComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1lZGl0b3IvYXBwL25neC1lZGl0b3IvY29tbW9uL3V0aWxzL25neC1lZGl0b3IudXRpbHMudHMiLCJuZzovL25neC1lZGl0b3IvYXBwL25neC1lZGl0b3IvY29tbW9uL3NlcnZpY2VzL2NvbW1hbmQtZXhlY3V0b3Iuc2VydmljZS50cyIsIm5nOi8vbmd4LWVkaXRvci9hcHAvbmd4LWVkaXRvci9jb21tb24vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtZWRpdG9yL2FwcC9uZ3gtZWRpdG9yL2NvbW1vbi9uZ3gtZWRpdG9yLmRlZmF1bHRzLnRzIiwibmc6Ly9uZ3gtZWRpdG9yL2FwcC9uZ3gtZWRpdG9yL25neC1lZGl0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtZWRpdG9yL2FwcC9uZ3gtZWRpdG9yL25neC1ncmlwcGllL25neC1ncmlwcGllLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWVkaXRvci9hcHAvbmd4LWVkaXRvci9uZ3gtZWRpdG9yLW1lc3NhZ2Uvbmd4LWVkaXRvci1tZXNzYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWVkaXRvci9hcHAvbmd4LWVkaXRvci9uZ3gtZWRpdG9yLXRvb2xiYXIvbmd4LWVkaXRvci10b29sYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWVkaXRvci9hcHAvbmd4LWVkaXRvci9uZ3gtZWRpdG9yLm1vZHVsZS50cyIsIm5nOi8vbmd4LWVkaXRvci9hcHAvbmd4LWVkaXRvci92YWxpZGF0b3JzL21heGxlbmd0aC12YWxpZGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBlbmFibGUgb3IgZGlzYWJsZSB0b29sYmFyIGJhc2VkIG9uIGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBAcGFyYW0gdmFsdWUgdG9vbGJhciBpdGVtXG4gKiBAcGFyYW0gdG9vbGJhciB0b29sYmFyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW5FbmFibGVUb29sYmFyT3B0aW9ucyh2YWx1ZTogc3RyaW5nLCB0b29sYmFyOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKHRvb2xiYXJbJ2xlbmd0aCddID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm91bmQgPSB0b29sYmFyLmZpbHRlcihhcnJheSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZvdW5kLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogc2V0IGVkaXRvciBjb25maWd1cmF0aW9uXG4gKlxuICogQHBhcmFtIHZhbHVlIGNvbmZpZ3VyYXRpb24gdmlhIFtjb25maWddIHByb3BlcnR5XG4gKiBAcGFyYW0gbmd4RWRpdG9yQ29uZmlnIGRlZmF1bHQgZWRpdG9yIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSBpbnB1dCBkaXJlY3QgY29uZmlndXJhdGlvbiBpbnB1dHMgdmlhIGRpcmVjdGl2ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRvckNvbmZpZ3VyYXRpb24odmFsdWU6IGFueSwgbmd4RWRpdG9yQ29uZmlnOiBhbnksIGlucHV0OiBhbnkpOiBhbnkge1xuICBmb3IgKGNvbnN0IGkgaW4gbmd4RWRpdG9yQ29uZmlnKSB7XG4gICAgaWYgKGkpIHtcbiAgICAgIGlmIChpbnB1dFtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlW2ldID0gaW5wdXRbaV07XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhbHVlW2ldID0gbmd4RWRpdG9yQ29uZmlnW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiByZXR1cm4gdmVydGljYWwgaWYgdGhlIGVsZW1lbnQgaXMgdGhlIHJlc2l6ZXIgcHJvcGVydHkgaXMgc2V0IHRvIGJhc2ljXG4gKlxuICogQHBhcmFtIHJlc2l6ZXIgdHlwZSBvZiByZXNpemVyLCBlaXRoZXIgYmFzaWMgb3Igc3RhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhblJlc2l6ZShyZXNpemVyOiBzdHJpbmcpOiBhbnkge1xuICBpZiAocmVzaXplciA9PT0gJ2Jhc2ljJykge1xuICAgIHJldHVybiAndmVydGljYWwnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBzYXZlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCk6IGFueSB7XG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xuICAgICAgcmV0dXJuIHNlbC5nZXRSYW5nZUF0KDApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRTZWxlY3Rpb24gJiYgZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiByZXN0b3JlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgaW5cbiAqXG4gKiBAcGFyYW0gcmFuZ2Ugc2F2ZWQgc2VsZWN0aW9uIHdoZW4gdGhlIGVkaXRvciBpcyBmb2N1c3NlZCBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTZWxlY3Rpb24ocmFuZ2UpOiBib29sZWFuIHtcbiAgaWYgKHJhbmdlKSB7XG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldFNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi91dGlscy9uZ3gtZWRpdG9yLnV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1hbmRFeGVjdXRvclNlcnZpY2Uge1xuICAvKiogc2F2ZXMgdGhlIHNlbGVjdGlvbiBmcm9tIHRoZSBlZGl0b3Igd2hlbiBmb2N1c3NlZCBvdXQgKi9cbiAgc2F2ZWRTZWxlY3Rpb246IGFueSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIF9odHRwIEhUVFAgQ2xpZW50IGZvciBtYWtpbmcgaHR0cCByZXF1ZXN0c1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIGV4ZWN1dGVzIGNvbW1hbmQgZnJvbSB0aGUgdG9vbGJhclxuICAgKlxuICAgKiBAcGFyYW0gY29tbWFuZCBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBleGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYXZlZFNlbGVjdGlvbiAmJiBjb21tYW5kICE9PSAnZW5hYmxlT2JqZWN0UmVzaXppbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIG91dCBvZiBFZGl0b3InKTtcbiAgICB9XG5cbiAgICBpZiAoY29tbWFuZCA9PT0gJ2VuYWJsZU9iamVjdFJlc2l6aW5nJykge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2VuYWJsZU9iamVjdFJlc2l6aW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbW1hbmQgPT09ICdibG9ja3F1b3RlJykge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsICdibG9ja3F1b3RlJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbW1hbmQgPT09ICdyZW1vdmVCbG9ja3F1b3RlJykge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsICdkaXYnKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLCBmYWxzZSwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogaW5zZXJ0cyBpbWFnZSBpbiB0aGUgZWRpdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbWFnZVVSSSB1cmwgb2YgdGhlIGltYWdlIHRvIGJlIGluc2VydGVkXG4gICAqL1xuICBpbnNlcnRJbWFnZShpbWFnZVVSSTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2F2ZWRTZWxlY3Rpb24pIHtcbiAgICAgIGlmIChpbWFnZVVSSSkge1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IFV0aWxzLnJlc3RvcmVTZWxlY3Rpb24odGhpcy5zYXZlZFNlbGVjdGlvbik7XG4gICAgICAgIGlmIChyZXN0b3JlZCkge1xuICAgICAgICAgIGNvbnN0IGluc2VydGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmFsc2UsIGltYWdlVVJJKTtcbiAgICAgICAgICBpZiAoIWluc2VydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVVJMJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZ2Ugb3V0IG9mIHRoZSBlZGl0b3InKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAqIGluc2VydHMgaW1hZ2UgaW4gdGhlIGVkaXRvclxuICpcbiAqIEBwYXJhbSB2aWRlUGFyYW1zIHVybCBvZiB0aGUgaW1hZ2UgdG8gYmUgaW5zZXJ0ZWRcbiAqL1xuICBpbnNlcnRWaWRlbyh2aWRlUGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zYXZlZFNlbGVjdGlvbikge1xuICAgICAgaWYgKHZpZGVQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdG9yZWQgPSBVdGlscy5yZXN0b3JlU2VsZWN0aW9uKHRoaXMuc2F2ZWRTZWxlY3Rpb24pO1xuICAgICAgICBpZiAocmVzdG9yZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1lvdXR1YmVMaW5rKHZpZGVQYXJhbXMudmlkZW9VcmwpKSB7XG4gICAgICAgICAgICBjb25zdCB5b3V0dWJlVVJMID0gJzxpZnJhbWUgd2lkdGg9XCInICsgdmlkZVBhcmFtcy53aWR0aCArICdcIiBoZWlnaHQ9XCInICsgdmlkZVBhcmFtcy5oZWlnaHQgKyAnXCInXG4gICAgICAgICAgICAgICsgJ3NyYz1cIicgKyB2aWRlUGFyYW1zLnZpZGVvVXJsICsgJ1wiPjwvaWZyYW1lPic7XG4gICAgICAgICAgICB0aGlzLmluc2VydEh0bWwoeW91dHViZVVSTCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrVGFnU3VwcG9ydEluQnJvd3NlcigndmlkZW8nKSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkVVJMKHZpZGVQYXJhbXMudmlkZW9VcmwpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZGVvU3JjID0gJzx2aWRlbyB3aWR0aD1cIicgKyB2aWRlUGFyYW1zLndpZHRoICsgJ1wiIGhlaWdodD1cIicgKyB2aWRlUGFyYW1zLmhlaWdodCArICdcIidcbiAgICAgICAgICAgICAgICArICcgY29udHJvbHM9XCJ0cnVlXCI+PHNvdXJjZSBzcmM9XCInICsgdmlkZVBhcmFtcy52aWRlb1VybCArICdcIj48L3ZpZGVvPic7XG4gICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SHRtbCh2aWRlb1NyYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmlkZW8gVVJMJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5zZXJ0IHZpZGVvJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZ2Ugb3V0IG9mIHRoZSBlZGl0b3InKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY2hlY2tzIHRoZSBpbnB1dCB1cmwgaXMgYSB2YWxpZCB5b3V0dWJlIFVSTCBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHVybCBZb3V0dWUgVVJMXG4gICAqL1xuICBwcml2YXRlIGlzWW91dHViZUxpbmsodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB5dFJlZ0V4cCA9IC9eKGh0dHAocyk/OlxcL1xcLyk/KCh3KXszfS4pP3lvdXR1KGJlfC5iZSk/KFxcLmNvbSk/XFwvLisvO1xuICAgIHJldHVybiB5dFJlZ0V4cC50ZXN0KHVybCk7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgd2hldGhlciB0aGUgc3RyaW5nIGlzIGEgdmFsaWQgdXJsIG9yIG5vdFxuICAgKiBAcGFyYW0gdXJsIHVybFxuICAgKi9cbiAgcHJpdmF0ZSBpc1ZhbGlkVVJMKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsUmVnRXhwID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdyopPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlIVxcLVxcL10pKT8vO1xuICAgIHJldHVybiB1cmxSZWdFeHAudGVzdCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwbG9hZHMgaW1hZ2UgdG8gdGhlIHNlcnZlclxuICAgKlxuICAgKiBAcGFyYW0gZmlsZSBmaWxlIHRoYXQgaGFzIHRvIGJlIHVwbG9hZGVkXG4gICAqIEBwYXJhbSBlbmRQb2ludCBlbnBvaW50IHRvIHdoaWNoIHRoZSBpbWFnZSBoYXMgdG8gYmUgdXBsb2FkZWRcbiAgICovXG4gIHVwbG9hZEltYWdlKGZpbGU6IEZpbGUsIGVuZFBvaW50OiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICghZW5kUG9pbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2UgRW5kcG9pbnQgaXNuYHQgcHJvdmlkZWQgb3IgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgaWYgKGZpbGUpIHtcblxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG5cbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGVuZFBvaW50LCBmb3JtRGF0YSwge1xuICAgICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QocmVxKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSW1hZ2UnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogaW5zZXJ0cyBsaW5rIGluIHRoZSBlZGl0b3JcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBwYXJhbWV0ZXJzIHRoYXQgaG9sZHMgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgbGlua1xuICAgKi9cbiAgY3JlYXRlTGluayhwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNhdmVkU2VsZWN0aW9uKSB7XG4gICAgICAvKipcbiAgICAgICAqIGNoZWNrIHdoZXRoZXIgdGhlIHNhdmVkIHNlbGVjdGlvbiBjb250YWlucyBhIHJhbmdlIG9yIHBsYWluIHNlbGVjdGlvblxuICAgICAgICovXG4gICAgICBpZiAocGFyYW1zLnVybE5ld1RhYikge1xuICAgICAgICBjb25zdCBuZXdVcmwgPSAnPGEgaHJlZj1cIicgKyBwYXJhbXMudXJsTGluayArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgcGFyYW1zLnVybFRleHQgKyAnPC9hPic7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnR5cGUgIT09ICdSYW5nZScpIHtcbiAgICAgICAgICBjb25zdCByZXN0b3JlZCA9IFV0aWxzLnJlc3RvcmVTZWxlY3Rpb24odGhpcy5zYXZlZFNlbGVjdGlvbik7XG4gICAgICAgICAgaWYgKHJlc3RvcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEh0bWwobmV3VXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IG5ldyBsaW5rcyBjYW4gYmUgaW5zZXJ0ZWQuIFlvdSBjYW5ub3QgZWRpdCBVUkxgcycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IFV0aWxzLnJlc3RvcmVTZWxlY3Rpb24odGhpcy5zYXZlZFNlbGVjdGlvbik7XG4gICAgICAgIGlmIChyZXN0b3JlZCkge1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjcmVhdGVMaW5rJywgZmFsc2UsIHBhcmFtcy51cmxMaW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIG91dCBvZiB0aGUgZWRpdG9yJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGluc2VydCBjb2xvciBlaXRoZXIgZm9udCBvciBiYWNrZ3JvdW5kXG4gICAqXG4gICAqIEBwYXJhbSBjb2xvciBjb2xvciB0byBiZSBpbnNlcnRlZFxuICAgKiBAcGFyYW0gd2hlcmUgd2hlcmUgdGhlIGNvbG9yIGhhcyB0byBiZSBpbnNlcnRlZCBlaXRoZXIgdGV4dC9iYWNrZ3JvdW5kXG4gICAqL1xuICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2F2ZWRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHJlc3RvcmVkID0gVXRpbHMucmVzdG9yZVNlbGVjdGlvbih0aGlzLnNhdmVkU2VsZWN0aW9uKTtcbiAgICAgIGlmIChyZXN0b3JlZCAmJiB0aGlzLmNoZWNrU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgaWYgKHdoZXJlID09PSAndGV4dENvbG9yJykge1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgY29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdoaWxpdGVDb2xvcicsIGZhbHNlLCBjb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBvdXQgb2YgdGhlIGVkaXRvcicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZm9udCBzaXplIGZvciB0ZXh0XG4gICAqXG4gICAqIEBwYXJhbSBmb250U2l6ZSBmb250LXNpemUgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2F2ZWRTZWxlY3Rpb24gJiYgdGhpcy5jaGVja1NlbGVjdGlvbigpKSB7XG4gICAgICBjb25zdCBkZWxldGVkVmFsdWUgPSB0aGlzLmRlbGV0ZUFuZEdldEVsZW1lbnQoKTtcblxuICAgICAgaWYgKGRlbGV0ZWRWYWx1ZSkge1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IFV0aWxzLnJlc3RvcmVTZWxlY3Rpb24odGhpcy5zYXZlZFNlbGVjdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3RvcmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmljKGZvbnRTaXplKSkge1xuICAgICAgICAgICAgY29uc3QgZm9udFB4ID0gJzxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAnICsgZm9udFNpemUgKyAncHg7XCI+JyArIGRlbGV0ZWRWYWx1ZSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SHRtbChmb250UHgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb250UHggPSAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6ICcgKyBmb250U2l6ZSArICc7XCI+JyArIGRlbGV0ZWRWYWx1ZSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SHRtbChmb250UHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIG91dCBvZiB0aGUgZWRpdG9yJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNldCBmb250IG5hbWUvZmFtaWx5IGZvciB0ZXh0XG4gICAqXG4gICAqIEBwYXJhbSBmb250TmFtZSBmb250LWZhbWlseSB0byBiZSBzZXRcbiAgICovXG4gIHNldEZvbnROYW1lKGZvbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zYXZlZFNlbGVjdGlvbiAmJiB0aGlzLmNoZWNrU2VsZWN0aW9uKCkpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZWRWYWx1ZSA9IHRoaXMuZGVsZXRlQW5kR2V0RWxlbWVudCgpO1xuXG4gICAgICBpZiAoZGVsZXRlZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVkID0gVXRpbHMucmVzdG9yZVNlbGVjdGlvbih0aGlzLnNhdmVkU2VsZWN0aW9uKTtcblxuICAgICAgICBpZiAocmVzdG9yZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc051bWVyaWMoZm9udE5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gJzxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6ICcgKyBmb250TmFtZSArICdweDtcIj4nICsgZGVsZXRlZFZhbHVlICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRIdG1sKGZvbnRGYW1pbHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gJzxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6ICcgKyBmb250TmFtZSArICc7XCI+JyArIGRlbGV0ZWRWYWx1ZSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SHRtbChmb250RmFtaWx5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBvdXQgb2YgdGhlIGVkaXRvcicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBpbnNlcnQgSFRNTCAqL1xuICBwcml2YXRlIGluc2VydEh0bWwoaHRtbDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXNIVE1MSW5zZXJ0ZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCBodG1sKTtcblxuICAgIGlmICghaXNIVE1MSW5zZXJ0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBlcmZvcm0gdGhlIG9wZXJhdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIG51bWJlciBvciBzdHJpbmdcbiAgICogaWYgbnVtYmVyIHJldHVybiB0cnVlXG4gICAqIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAqL1xuICBwcml2YXRlIGlzTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9eLXswLDF9XFxkKyQvLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqIGRlbGV0ZSB0aGUgdGV4dCBhdCBzZWxlY3RlZCByYW5nZSBhbmQgcmV0dXJuIHRoZSB2YWx1ZSAqL1xuICBwcml2YXRlIGRlbGV0ZUFuZEdldEVsZW1lbnQoKTogYW55IHtcbiAgICBsZXQgc2xlY3RlZFRleHQ7XG5cbiAgICBpZiAodGhpcy5zYXZlZFNlbGVjdGlvbikge1xuICAgICAgc2xlY3RlZFRleHQgPSB0aGlzLnNhdmVkU2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLnNhdmVkU2VsZWN0aW9uLmRlbGV0ZUNvbnRlbnRzKCk7XG4gICAgICByZXR1cm4gc2xlY3RlZFRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNoZWNrIGFueSBzbGVjdGlvbiBpcyBtYWRlIG9yIG5vdCAqL1xuICBwcml2YXRlIGNoZWNrU2VsZWN0aW9uKCk6IGFueSB7XG4gICAgY29uc3Qgc2xlY3RlZFRleHQgPSB0aGlzLnNhdmVkU2VsZWN0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoc2xlY3RlZFRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFNlbGVjdGlvbiBNYWRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgdGFnIGlzIHN1cHBvcnRlZCBieSBicm93c2VyIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0gdGFnIEhUTUwgdGFnXG4gICAqL1xuICBwcml2YXRlIGNoZWNrVGFnU3VwcG9ydEluQnJvd3Nlcih0YWc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSBpbnN0YW5jZW9mIEhUTUxVbmtub3duRWxlbWVudCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbi8qKiB0aW1lIGluIHdoaWNoIHRoZSBtZXNzYWdlIGhhcyB0byBiZSBjbGVhcmVkICovXG5jb25zdCBEVVJBVElPTiA9IDcwMDA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIC8qKiB2YXJpYWJsZSB0byBob2xkIHRoZSB1c2VyIG1lc3NhZ2UgKi9cbiAgcHJpdmF0ZSBtZXNzYWdlOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqIHJldHVybnMgdGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgZWRpdG9yICovXG4gIGdldE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbmRzIG1lc3NhZ2UgdG8gdGhlIGVkaXRvclxuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZSBtZXNzYWdlIHRvIGJlIHNlbnRcbiAgICovXG4gIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZS5uZXh0KG1lc3NhZ2UpO1xuICAgIHRoaXMuY2xlYXJNZXNzYWdlSW4oRFVSQVRJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIGEgc2hvcnQgaW50ZXJ2YWwgdG8gY2xlYXIgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbWlsbGlzZWNvbmRzIHRpbWUgaW4gc2Vjb25kcyBpbiB3aGljaCB0aGUgbWVzc2FnZSBoYXMgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhck1lc3NhZ2VJbihtaWxsaXNlY29uZHM6IG51bWJlcik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlLm5leHQodW5kZWZpbmVkKTtcbiAgICB9LCBtaWxsaXNlY29uZHMpO1xuICB9XG59XG4iLCIvKipcbiAqIHRvb2xiYXIgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBuZ3hFZGl0b3JDb25maWcgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBzcGVsbGNoZWNrOiB0cnVlLFxuICBoZWlnaHQ6ICdhdXRvJyxcbiAgbWluSGVpZ2h0OiAnMCcsXG4gIHdpZHRoOiAnYXV0bycsXG4gIG1pbldpZHRoOiAnMCcsXG4gIHRyYW5zbGF0ZTogJ3llcycsXG4gIGVuYWJsZVRvb2xiYXI6IHRydWUsXG4gIHNob3dUb29sYmFyOiB0cnVlLFxuICBwbGFjZWhvbGRlcjogJ0VudGVyIHRleHQgaGVyZS4uLicsXG4gIGltYWdlRW5kUG9pbnQ6ICcnLFxuICB0b29sYmFyOiBbXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlVGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXSxcbiAgICBbJ2ZvbnROYW1lJywgJ2ZvbnRTaXplJywgJ2NvbG9yJ10sXG4gICAgWydqdXN0aWZ5TGVmdCcsICdqdXN0aWZ5Q2VudGVyJywgJ2p1c3RpZnlSaWdodCcsICdqdXN0aWZ5RnVsbCcsICdpbmRlbnQnLCAnb3V0ZGVudCddLFxuICAgIFsnY3V0JywgJ2NvcHknLCAnZGVsZXRlJywgJ3JlbW92ZUZvcm1hdCcsICd1bmRvJywgJ3JlZG8nXSxcbiAgICBbJ3BhcmFncmFwaCcsICdibG9ja3F1b3RlJywgJ3JlbW92ZUJsb2NrcXVvdGUnLCAnaG9yaXpvbnRhbExpbmUnLCAnb3JkZXJlZExpc3QnLCAndW5vcmRlcmVkTGlzdCddLFxuICAgIFsnbGluaycsICd1bmxpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXVxuICBdXG59O1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbW1hbmRFeGVjdXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy9jb21tYW5kLWV4ZWN1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBuZ3hFZGl0b3JDb25maWcgfSBmcm9tICcuL2NvbW1vbi9uZ3gtZWRpdG9yLmRlZmF1bHRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL25neC1lZGl0b3IudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmd4LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWVkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4RWRpdG9yQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcblxuZXhwb3J0IGNsYXNzIE5neEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogU3BlY2lmaWVzIHdlYXRoZXIgdGhlIHRleHRhcmVhIHRvIGJlIGVkaXRhYmxlIG9yIG5vdCAqL1xuICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbjtcbiAgLyoqIFRoZSBzcGVsbGNoZWNrIHByb3BlcnR5IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGhhdmUgaXRzIHNwZWxsaW5nIGFuZCBncmFtbWFyIGNoZWNrZWQgb3Igbm90LiAqL1xuICBASW5wdXQoKSBzcGVsbGNoZWNrOiBib29sZWFuO1xuICAvKiogUGxhY2Vob2xkZXIgZm9yIHRoZSB0ZXh0QXJlYSAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRyYW5zbGF0ZSBwcm9wZXJ0eSBzcGVjaWZpZXMgd2hldGhlciB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IHNob3VsZCBiZSB0cmFuc2xhdGVkIG9yIG5vdC5cbiAgICpcbiAgICogQ2hlY2sgaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS90YWdzL2F0dF9nbG9iYWxfdHJhbnNsYXRlLmFzcCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgYnJvd3NlciBzdXBwb3J0XG4gICAqL1xuICBASW5wdXQoKSB0cmFuc2xhdGU6IHN0cmluZztcbiAgLyoqIFNldHMgaGVpZ2h0IG9mIHRoZSBlZGl0b3IgKi9cbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XG4gIC8qKiBTZXRzIG1pbmltdW0gaGVpZ2h0IGZvciB0aGUgZWRpdG9yICovXG4gIEBJbnB1dCgpIG1pbkhlaWdodDogc3RyaW5nO1xuICAvKiogU2V0cyBXaWR0aCBvZiB0aGUgZWRpdG9yICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIC8qKiBTZXRzIG1pbmltdW0gd2lkdGggb2YgdGhlIGVkaXRvciAqL1xuICBASW5wdXQoKSBtaW5XaWR0aDogc3RyaW5nO1xuICAvKipcbiAgICogVG9vbGJhciBhY2NlcHRzIGFuIGFycmF5IHdoaWNoIHNwZWNpZmllcyB0aGUgb3B0aW9ucyB0byBiZSBlbmFibGVkIGZvciB0aGUgdG9vbGJhclxuICAgKlxuICAgKiBDaGVjayBuZ3hFZGl0b3JDb25maWcgZm9yIHRvb2xiYXIgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IHdpbGwgZW5hYmxlIGFsbCB0b29sYmFyXG4gICAqL1xuICBASW5wdXQoKSB0b29sYmFyOiBPYmplY3Q7XG4gIC8qKlxuICAgKiBUaGUgZWRpdG9yIGNhbiBiZSByZXNpemVkIHZlcnRpY2FsbHkuXG4gICAqXG4gICAqIGBiYXNpY2AgcmVzaXplciBlbmFibGVzIHRoZSBodG1sNSByZXN6aWVyLiBDaGVjayBoZXJlIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfcmVzaXplLmFzcFxuICAgKlxuICAgKiBgc3RhY2tgIHJlc2l6ZXIgZW5hYmxlIGEgcmVzaXplciB0aGF0IGxvb2tzIGxpa2UgYXMgaWYgaW4gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbVxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplciA9ICdzdGFjayc7XG4gIC8qKlxuICAgKiBUaGUgY29uZmlnIHByb3BlcnR5IGlzIGEgSlNPTiBvYmplY3RcbiAgICpcbiAgICogQWxsIGF2YWliYWxlIGlucHV0cyBpbnB1dHMgY2FuIGJlIHByb3ZpZGVkIGluIHRoZSBjb25maWd1cmF0aW9uIGFzIEpTT05cbiAgICogaW5wdXRzIHByb3ZpZGVkIGRpcmVjdGx5IGFyZSBjb25zaWRlcmVkIGFzIHRvcCBwcmlvcml0eVxuICAgKi9cbiAgQElucHV0KCkgY29uZmlnID0gbmd4RWRpdG9yQ29uZmlnO1xuICAvKiogV2VhdGhlciB0byBzaG93IG9yIGhpZGUgdG9vbGJhciAqL1xuICBASW5wdXQoKSBzaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgLyoqIFdlYXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHRvb2xiYXIgKi9cbiAgQElucHV0KCkgZW5hYmxlVG9vbGJhcjogYm9vbGVhbjtcbiAgLyoqIEVuZHBvaW50IGZvciB3aGljaCB0aGUgaW1hZ2UgdG8gYmUgdXBsb2FkZWQgKi9cbiAgQElucHV0KCkgaW1hZ2VFbmRQb2ludDogc3RyaW5nO1xuXG4gIC8qKiBlbWl0cyBgYmx1cmAgZXZlbnQgd2hlbiBmb2N1c2VkIG91dCBmcm9tIHRoZSB0ZXh0YXJlYSAqL1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgLyoqIGVtaXRzIGBmb2N1c2AgZXZlbnQgd2hlbiBmb2N1c2VkIGluIHRvIHRoZSB0ZXh0YXJlYSAqL1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbmd4VGV4dEFyZWEnKSB0ZXh0QXJlYTogYW55O1xuICBAVmlld0NoaWxkKCduZ3hXcmFwcGVyJykgbmd4V3JhcHBlcjogYW55O1xuXG4gIFV0aWxzOiBhbnkgPSBVdGlscztcblxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBfbWVzc2FnZVNlcnZpY2Ugc2VydmljZSB0byBzZW5kIG1lc3NhZ2UgdG8gdGhlIGVkaXRvciBtZXNzYWdlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gX2NvbW1hbmRFeGVjdXRvciBleGVjdXRlcyBjb21tYW5kIGZyb20gdGhlIHRvb2xiYXJcbiAgICogQHBhcmFtIF9yZW5kZXJlciBhY2Nlc3MgYW5kIG1hbmlwdWxhdGUgdGhlIGRvbSBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY29tbWFuZEV4ZWN1dG9yOiBDb21tYW5kRXhlY3V0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIC8qKlxuICAgKiBldmVudHNcbiAgICovXG4gIG9uVGV4dEFyZWFGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoJ2ZvY3VzJyk7XG4gIH1cblxuICAvKiogZm9jdXMgdGhlIHRleHQgYXJlYSB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgKi9cbiAgb25FZGl0b3JGb2N1cygpIHtcbiAgICB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCBmcm9tIHRoZSBjb250ZW50ZWRpdGFibGUgc2VjdGlvbiB3aGlsZSB0aGUgaW5wdXQgcHJvcGVydHkgY2hhbmdlc1xuICAgKiBAcGFyYW0gaHRtbCBodG1sIHN0cmluZyBmcm9tIGNvbnRlbnRlZGl0YWJsZVxuICAgKi9cbiAgb25Db250ZW50Q2hhbmdlKGlubmVySFRNTDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGlubmVySFRNTCk7XG4gICAgICB0aGlzLnRvZ2dsZVBsYWNlaG9sZGVyKGlubmVySFRNTCk7XG4gICAgfVxuICB9XG5cbiAgb25UZXh0QXJlYUJsdXIoKTogdm9pZCB7XG4gICAgLyoqIHNhdmUgc2VsZWN0aW9uIGlmIGZvY3Vzc2VkIG91dCAqL1xuICAgIHRoaXMuX2NvbW1hbmRFeGVjdXRvci5zYXZlZFNlbGVjdGlvbiA9IFV0aWxzLnNhdmVTZWxlY3Rpb24oKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vblRvdWNoZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICAgIHRoaXMuYmx1ci5lbWl0KCdibHVyJyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzaXppbmcgdGV4dCBhcmVhXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXRZIHZlcnRpY2FsIGhlaWdodCBvZiB0aGUgZWlkdGFibGUgcG9ydGlvbiBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICByZXNpemVUZXh0QXJlYShvZmZzZXRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5oZWlnaHQsIDEwKTtcbiAgICBuZXdIZWlnaHQgKz0gb2Zmc2V0WTtcbiAgICB0aGlzLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gICAgdGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIGVkaXRvciBhY3Rpb25zLCBpLmUuLCBleGVjdXRlcyBjb21tYW5kIGZyb20gdG9vbGJhclxuICAgKlxuICAgKiBAcGFyYW0gY29tbWFuZE5hbWUgbmFtZSBvZiB0aGUgY29tbWFuZCB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jb21tYW5kRXhlY3V0b3IuZXhlY3V0ZShjb21tYW5kTmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2UgaW4gY29udGVudGVkaXRhYmxlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZVBsYWNlaG9sZGVyKHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJzxicj4nKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoVmlldyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWRcbiAgICogd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICAgKiB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWZyZXNoIHZpZXcvSFRNTCBvZiB0aGUgZWRpdG9yXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBodG1sIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcbiAgICovXG4gIHJlZnJlc2hWaWV3KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHBsYWNlaG9sZGVyIGJhc2VkIG9uIGlucHV0IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgQSBIVE1MIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcbiAgICovXG4gIHRvZ2dsZVBsYWNlaG9sZGVyKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnPGJyPicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLm5neFdyYXBwZXIubmF0aXZlRWxlbWVudCwgJ3Nob3ctcGxhY2Vob2xkZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5uZ3hXcmFwcGVyLm5hdGl2ZUVsZW1lbnQsICdzaG93LXBsYWNlaG9sZGVyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYSBqc29uIGNvbnRhaW5pbmcgaW5wdXQgcGFyYW1zXG4gICAqL1xuICBnZXRDb2xsZWN0aXZlUGFyYW1zKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRhYmxlOiB0aGlzLmVkaXRhYmxlLFxuICAgICAgc3BlbGxjaGVjazogdGhpcy5zcGVsbGNoZWNrLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICB0cmFuc2xhdGU6IHRoaXMudHJhbnNsYXRlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1pbkhlaWdodDogdGhpcy5taW5IZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIG1pbldpZHRoOiB0aGlzLm1pbldpZHRoLFxuICAgICAgZW5hYmxlVG9vbGJhcjogdGhpcy5lbmFibGVUb29sYmFyLFxuICAgICAgc2hvd1Rvb2xiYXI6IHRoaXMuc2hvd1Rvb2xiYXIsXG4gICAgICBpbWFnZUVuZFBvaW50OiB0aGlzLmltYWdlRW5kUG9pbnQsXG4gICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqXG4gICAgICogc2V0IGNvbmZpZ3VhcnRpb25cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuVXRpbHMuZ2V0RWRpdG9yQ29uZmlndXJhdGlvbih0aGlzLmNvbmZpZywgbmd4RWRpdG9yQ29uZmlnLCB0aGlzLmdldENvbGxlY3RpdmVQYXJhbXMoKSk7XG5cbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0IHx8IHRoaXMudGV4dEFyZWEubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLmV4ZWN1dGVDb21tYW5kKCdlbmFibGVPYmplY3RSZXNpemluZycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWVkaXRvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmd4LWdyaXBwaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdyaXBwaWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3JpcHBpZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4R3JpcHBpZUNvbXBvbmVudCB7XG4gIC8qKiBoZWlnaHQgb2YgdGhlIGVkaXRvciAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIHByZXZpb3VzIHZhbHVlIGJlZm9yIHJlc2l6aW5nIHRoZSBlZGl0b3IgKi9cbiAgb2xkWSA9IDA7XG4gIC8qKiBzZXQgdG8gdHJ1ZSBvbiBtb3VzZWRvd24gZXZlbnQgKi9cbiAgZ3JhYmJlciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gX2VkaXRvckNvbXBvbmVudCBFZGl0b3IgY29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lZGl0b3JDb21wb25lbnQ6IE5neEVkaXRvckNvbXBvbmVudCkgeyB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBNb3VzZWV2ZW50XG4gICAqXG4gICAqIFVwZGF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBlZGl0b3Igd2hlbiB0aGUgZ3JhYmJlciBpcyBkcmFnZ2VkXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5ncmFiYmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZWRpdG9yQ29tcG9uZW50LnJlc2l6ZVRleHRBcmVhKGV2ZW50LmNsaWVudFkgLSB0aGlzLm9sZFkpO1xuICAgIHRoaXMub2xkWSA9IGV2ZW50LmNsaWVudFk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IE1vdXNlZXZlbnRcbiAgICpcbiAgICogc2V0IHRoZSBncmFiYmVyIHRvIGZhbHNlIG9uIG1vdXNlIHVwIGFjdGlvblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuZ3JhYmJlciA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQsIHJlc2l6ZXI/OiBGdW5jdGlvbikge1xuICAgIHRoaXMuZ3JhYmJlciA9IHRydWU7XG4gICAgdGhpcy5vbGRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmd4LWVkaXRvci1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1lZGl0b3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1lZGl0b3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yTWVzc2FnZUNvbXBvbmVudCB7XG4gIC8qKiBwcm9wZXJ0eSB0aGF0IGhvbGRzIHRoZSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgZWRpdG9yICovXG4gIG5neE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBfbWVzc2FnZVNlcnZpY2Ugc2VydmljZSB0byBzZW5kIG1lc3NhZ2UgdG8gdGhlIGVkaXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZSgpLnN1YnNjcmliZSgobWVzc2FnZTogc3RyaW5nKSA9PiB0aGlzLm5neE1lc3NhZ2UgPSBtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGVhcnMgZWRpdG9yIG1lc3NhZ2VcbiAgICovXG4gIGNsZWFyTWVzc2FnZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5neE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcbmltcG9ydCB7IENvbW1hbmRFeGVjdXRvclNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vc2VydmljZXMvY29tbWFuZC1leGVjdXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuLi9jb21tb24vdXRpbHMvbmd4LWVkaXRvci51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZ3gtZWRpdG9yLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWVkaXRvci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWVkaXRvci10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1BvcG92ZXJDb25maWddXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBob2xkcyB2YWx1ZXMgb2YgdGhlIGluc2VydCBsaW5rIGZvcm0gKi9cbiAgdXJsRm9ybTogRm9ybUdyb3VwO1xuICAvKiogaG9sZHMgdmFsdWVzIG9mIHRoZSBpbnNlcnQgaW1hZ2UgZm9ybSAqL1xuICBpbWFnZUZvcm06IEZvcm1Hcm91cDtcbiAgLyoqIGhvbGRzIHZhbHVlcyBvZiB0aGUgaW5zZXJ0IHZpZGVvIGZvcm0gKi9cbiAgdmlkZW9Gb3JtOiBGb3JtR3JvdXA7XG4gIC8qKiBzZXQgdG8gZmFsc2Ugd2hlbiBpbWFnZSBpcyBiZWluZyB1cGxvYWRlZCAqL1xuICB1cGxvYWRDb21wbGV0ZSA9IHRydWU7XG4gIC8qKiB1cGxvYWQgcGVyY2VudGFnZSAqL1xuICB1cGRsb2FkUGVyY2VudGFnZSA9IDA7XG4gIC8qKiBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBpbWFnZSBpcyBiZWluZyB1cGxvYWRlZCAqL1xuICBpc1VwbG9hZGluZyA9IGZhbHNlO1xuICAvKiogd2hpY2ggdGFiIHRvIGFjdGl2ZSBmb3IgY29sb3IgaW5zZXRpb24gKi9cbiAgc2VsZWN0ZWRDb2xvclRhYiA9ICd0ZXh0Q29sb3InO1xuICAvKiogZm9udCBmYW1pbHkgbmFtZSAqL1xuICBmb250TmFtZSA9ICcnO1xuICAvKiogZm9udCBzaXplICovXG4gIGZvbnRTaXplID0gJyc7XG4gIC8qKiBoZXggY29sb3IgY29kZSAqL1xuICBoZXhDb2xvciA9ICcnO1xuICAvKiogc2hvdy9oaWRlIGltYWdlIHVwbG9hZGVyICovXG4gIGlzSW1hZ2VVcGxvYWRlciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFZGl0b3IgY29uZmlndXJhdGlvblxuICAgKi9cbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ3VybFBvcG92ZXInKSB1cmxQb3BvdmVyO1xuICBAVmlld0NoaWxkKCdpbWFnZVBvcG92ZXInKSBpbWFnZVBvcG92ZXI7XG4gIEBWaWV3Q2hpbGQoJ3ZpZGVvUG9wb3ZlcicpIHZpZGVvUG9wb3ZlcjtcbiAgQFZpZXdDaGlsZCgnZm9udFNpemVQb3BvdmVyJykgZm9udFNpemVQb3BvdmVyO1xuICBAVmlld0NoaWxkKCdjb2xvclBvcG92ZXInKSBjb2xvclBvcG92ZXI7XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGEgdG9vbGJhciBidXR0b24gaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIGV4ZWN1dGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9wT3ZlckNvbmZpZzogUG9wb3ZlckNvbmZpZyxcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvbW1hbmRFeGVjdXRvclNlcnZpY2U6IENvbW1hbmRFeGVjdXRvclNlcnZpY2UpIHtcbiAgICB0aGlzLl9wb3BPdmVyQ29uZmlnLm91dHNpZGVDbGljayA9IHRydWU7XG4gICAgdGhpcy5fcG9wT3ZlckNvbmZpZy5wbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICB0aGlzLl9wb3BPdmVyQ29uZmlnLmNvbnRhaW5lciA9ICdib2R5JztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbmFibGUgb3IgZGlhYmxlIHRvb2xiYXIgYmFzZWQgb24gY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgbmFtZSBvZiB0aGUgdG9vbGJhciBidXR0b25zXG4gICAqL1xuICBjYW5FbmFibGVUb29sYmFyT3B0aW9ucyh2YWx1ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBVdGlscy5jYW5FbmFibGVUb29sYmFyT3B0aW9ucyh2YWx1ZSwgdGhpcy5jb25maWdbJ3Rvb2xiYXInXSk7XG4gIH1cblxuICAvKipcbiAgICogdHJpZ2dlcnMgY29tbWFuZCBmcm9tIHRoZSB0b29sYmFyIHRvIGJlIGV4ZWN1dGVkIGFuZCBlbWl0cyBhbiBldmVudFxuICAgKlxuICAgKiBAcGFyYW0gY29tbWFuZCBuYW1lIG9mIHRoZSBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICB0cmlnZ2VyQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWN1dGUuZW1pdChjb21tYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgVVJMIGluc2VydCBmb3JtXG4gICAqL1xuICBidWlsZFVybEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy51cmxGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdXJsTGluazogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgdXJsVGV4dDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgdXJsTmV3VGFiOiBbdHJ1ZV1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnNlcnRzIGxpbmsgaW4gdGhlIGVkaXRvclxuICAgKi9cbiAgaW5zZXJ0TGluaygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY29tbWFuZEV4ZWN1dG9yU2VydmljZS5jcmVhdGVMaW5rKHRoaXMudXJsRm9ybS52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKiByZXNldCBmb3JtIHRvIGRlZmF1bHQgKi9cbiAgICB0aGlzLmJ1aWxkVXJsRm9ybSgpO1xuICAgIC8qKiBjbG9zZSBpbnNldCBVUkwgcG9wIHVwICovXG4gICAgdGhpcy51cmxQb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaW5zZXJ0IGltYWdlIGZvcm1cbiAgICovXG4gIGJ1aWxkSW1hZ2VGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaW1hZ2VVcmw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpbnNlcnQgaW1hZ2UgZm9ybVxuICAgKi9cbiAgYnVpbGRWaWRlb0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy52aWRlb0Zvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2aWRlb1VybDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgaGVpZ2h0OiBbJyddLFxuICAgICAgd2lkdGg6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIGZpbGUgaXMgc2VsZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIGUgb25DaGFuZ2UgZXZlbnRcbiAgICovXG4gIG9uRmlsZUNoYW5nZShlKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fY29tbWFuZEV4ZWN1dG9yU2VydmljZS51cGxvYWRJbWFnZShmaWxlLCB0aGlzLmNvbmZpZy5pbWFnZUVuZFBvaW50KS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkbG9hZFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbW1hbmRFeGVjdXRvclNlcnZpY2UuaW5zZXJ0SW1hZ2UoZXZlbnQuYm9keS51cmwpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwbG9hZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRoaXMudXBsb2FkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIGluc2VydCBpbWFnZSBpbiB0aGUgZWRpdG9yICovXG4gIGluc2VydEltYWdlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jb21tYW5kRXhlY3V0b3JTZXJ2aWNlLmluc2VydEltYWdlKHRoaXMuaW1hZ2VGb3JtLnZhbHVlLmltYWdlVXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqIHJlc2V0IGZvcm0gdG8gZGVmYXVsdCAqL1xuICAgIHRoaXMuYnVpbGRJbWFnZUZvcm0oKTtcbiAgICAvKiogY2xvc2UgaW5zZXQgVVJMIHBvcCB1cCAqL1xuICAgIHRoaXMuaW1hZ2VQb3BvdmVyLmhpZGUoKTtcbiAgfVxuXG4gIC8qKiBpbnNlcnQgaW1hZ2UgaW4gdGhlIGVkaXRvciAqL1xuICBpbnNlcnRWaWRlbygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY29tbWFuZEV4ZWN1dG9yU2VydmljZS5pbnNlcnRWaWRlbyh0aGlzLnZpZGVvRm9ybS52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKiByZXNldCBmb3JtIHRvIGRlZmF1bHQgKi9cbiAgICB0aGlzLmJ1aWxkVmlkZW9Gb3JtKCk7XG4gICAgLyoqIGNsb3NlIGluc2V0IFVSTCBwb3AgdXAgKi9cbiAgICB0aGlzLnZpZGVvUG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICAvKiogaW5zZXIgdGV4dC9iYWNrZ3JvdW5kIGNvbG9yICovXG4gIGluc2VydENvbG9yKGNvbG9yOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY29tbWFuZEV4ZWN1dG9yU2VydmljZS5pbnNlcnRDb2xvcihjb2xvciwgd2hlcmUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9yUG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICAvKiogc2V0IGZvbnQgc2l6ZSAqL1xuICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2NvbW1hbmRFeGVjdXRvclNlcnZpY2Uuc2V0Rm9udFNpemUoZm9udFNpemUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvbnRTaXplUG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICAvKiogc2V0IGZvbnQgTmFtZS9mYW1pbHkgKi9cbiAgc2V0Rm9udE5hbWUoZm9udE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jb21tYW5kRXhlY3V0b3JTZXJ2aWNlLnNldEZvbnROYW1lKGZvbnROYW1lKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5mb250U2l6ZVBvcG92ZXIuaGlkZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5idWlsZFVybEZvcm0oKTtcbiAgICB0aGlzLmJ1aWxkSW1hZ2VGb3JtKCk7XG4gICAgdGhpcy5idWlsZFZpZGVvRm9ybSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcbmltcG9ydCB7IE5neEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3JpcHBpZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdyaXBwaWUvbmd4LWdyaXBwaWUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEVkaXRvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL25neC1lZGl0b3ItbWVzc2FnZS9uZ3gtZWRpdG9yLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEVkaXRvclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL25neC1lZGl0b3ItdG9vbGJhci9uZ3gtZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1hbmRFeGVjdXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy9jb21tYW5kLWV4ZWN1dG9yLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgUG9wb3Zlck1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hFZGl0b3JDb21wb25lbnQsIE5neEdyaXBwaWVDb21wb25lbnQsIE5neEVkaXRvck1lc3NhZ2VDb21wb25lbnQsIE5neEVkaXRvclRvb2xiYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd4RWRpdG9yQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ29tbWFuZEV4ZWN1dG9yU2VydmljZSwgTWVzc2FnZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbnRlcmZhY2UgSU1heExlbmd0aFZhbGlkYXRvck9wdGlvbnMge1xuICBleGNsdWRlTGluZUJyZWFrcz86IGJvb2xlYW47XG4gIGNvbmNhdFdoaXRlU3BhY2VzPzogYm9vbGVhbjtcbiAgZXhjbHVkZVdoaXRlU3BhY2VzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1heExlbmd0aFZhbGlkYXRvcihtYXhsZW5ndGg6IG51bWJlciwgb3B0aW9ucz86IElNYXhMZW5ndGhWYWxpZGF0b3JPcHRpb25zKSB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHBhcnNlZERvY3VtZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250cm9sLnZhbHVlLCAndGV4dC9odG1sJyk7XG4gICAgbGV0IGlubmVyVGV4dCA9IHBhcnNlZERvY3VtZW50LmJvZHkuaW5uZXJUZXh0IHx8ICcnO1xuXG4gICAgLy8gcmVwbGFjZSBhbGwgbGluZWJyZWFrc1xuICAgIGlmIChvcHRpb25zLmV4Y2x1ZGVMaW5lQnJlYWtzKSB7XG4gICAgICBpbm5lclRleHQgPSBpbm5lclRleHQucmVwbGFjZSgvKFxcclxcblxcdHxcXG58XFxyXFx0KS9nbSwgJycpO1xuICAgIH1cblxuICAgIC8vIGNvbmNhdCBtdWx0aXBsZSB3aGl0ZXNwYWNlcyBpbnRvIGEgc2luZ2xlIHdoaXRlc3BhY2VcbiAgICBpZiAob3B0aW9ucy5jb25jYXRXaGl0ZVNwYWNlcykge1xuICAgICAgaW5uZXJUZXh0ID0gaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHNcXHMrKS9nbSwgJyAnKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHdoaXRlc3BhY2VzXG4gICAgaWYgKG9wdGlvbnMuZXhjbHVkZVdoaXRlU3BhY2VzKSB7XG4gICAgICBpbm5lclRleHQgPSBpbm5lclRleHQucmVwbGFjZSgvKFxccykvZ20sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJUZXh0Lmxlbmd0aCA+IG1heGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmd4RWRpdG9yOiB7XG4gICAgICAgICAgYWxsb3dlZExlbmd0aDogbWF4bGVuZ3RoLFxuICAgICAgICAgIHRleHRMZW5ndGg6IGlubmVyVGV4dC5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiVXRpbHMucmVzdG9yZVNlbGVjdGlvbiIsIkh0dHBSZXF1ZXN0IiwiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiVXRpbHMuc2F2ZVNlbGVjdGlvbiIsIkNvbXBvbmVudCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIlJlbmRlcmVyMiIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiVXRpbHMuY2FuRW5hYmxlVG9vbGJhck9wdGlvbnMiLCJWYWxpZGF0b3JzIiwiSHR0cFJlc3BvbnNlIiwiUG9wb3ZlckNvbmZpZyIsIkZvcm1CdWlsZGVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJQb3BvdmVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLHFDQUF3QyxLQUFhLEVBQUUsT0FBWTtRQUNqRSxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTs7Z0JBQ0wsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUs7b0JBQ2hDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjs7Ozs7Ozs7O0FBU0Qsb0NBQXVDLEtBQVUsRUFBRSxlQUFvQixFQUFFLEtBQVU7UUFDakYsS0FBSyxJQUFNLENBQUMsSUFBSSxlQUFlLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7OztBQU9ELHVCQUEwQixPQUFlO1FBQ3ZDLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUN2QixPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7O0FBS0Q7UUFDRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7O1lBQ3ZCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7YUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN4RCxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7QUFPRCw4QkFBaUMsS0FBSztRQUNwQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7Z0JBQ3ZCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNLElBQUksUUFBUSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDMUZEOzs7OztRQWFFLGdDQUFvQixLQUFpQjtZQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZOzs7O2tDQU5mLFNBQVM7U0FNVzs7Ozs7Ozs7Ozs7O1FBTzFDLHdDQUFPOzs7Ozs7WUFBUCxVQUFRLE9BQWU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sS0FBSyxzQkFBc0IsRUFBRTtvQkFDOUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN4QztnQkFFRCxJQUFJLE9BQU8sS0FBSyxzQkFBc0IsRUFBRTtvQkFDdEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsSUFBSSxPQUFPLEtBQUssWUFBWSxFQUFFO29CQUM1QixRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQzFEO2dCQUVELElBQUksT0FBTyxLQUFLLGtCQUFrQixFQUFFO29CQUNsQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ25EO2dCQUVELFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM1Qzs7Ozs7Ozs7Ozs7O1FBT0QsNENBQVc7Ozs7OztZQUFYLFVBQVksUUFBZ0I7Z0JBQzFCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdkIsSUFBSSxRQUFRLEVBQUU7O3dCQUNaLElBQU0sUUFBUSxHQUFHQSxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzdELElBQUksUUFBUSxFQUFFOzs0QkFDWixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQ3RFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0NBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDaEM7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUM1QzthQUNGOzs7Ozs7Ozs7Ozs7UUFPRCw0Q0FBVzs7Ozs7O1lBQVgsVUFBWSxVQUFlO2dCQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3ZCLElBQUksVUFBVSxFQUFFOzt3QkFDZCxJQUFNLFFBQVEsR0FBR0EsZ0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUM3RCxJQUFJLFFBQVEsRUFBRTs0QkFDWixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztnQ0FDM0MsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHO3NDQUM1RixPQUFPLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0NBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7NkJBQzdCO2lDQUFNLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxFQUFFO2dDQUVqRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztvQ0FDeEMsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHOzBDQUN6RixnQ0FBZ0MsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztvQ0FDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQ0FDM0I7cUNBQU07b0NBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lDQUN0Qzs2QkFFRjtpQ0FBTTtnQ0FDTCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7NkJBQzNDO3lCQUNGO3FCQUNGO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQkFDNUM7YUFDRjs7Ozs7OztRQU9PLDhDQUFhOzs7Ozs7c0JBQUMsR0FBVzs7Z0JBQy9CLElBQU0sUUFBUSxHQUFHLHVEQUF1RCxDQUFDO2dCQUN6RSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7UUFPcEIsMkNBQVU7Ozs7O3NCQUFDLEdBQVc7O2dCQUM1QixJQUFNLFNBQVMsR0FBRyw2RUFBNkUsQ0FBQztnQkFDaEcsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7UUFTN0IsNENBQVc7Ozs7Ozs7WUFBWCxVQUFZLElBQVUsRUFBRSxRQUFnQjtnQkFDdEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7aUJBQzdEOztnQkFFRCxJQUFNLFFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUUxQyxJQUFJLElBQUksRUFBRTtvQkFFUixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7b0JBRTlCLElBQU0sR0FBRyxHQUFHLElBQUlDLGdCQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7d0JBQ3RELGNBQWMsRUFBRSxJQUFJO3FCQUNyQixDQUFDLENBQUM7b0JBRUgsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFaEM7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDbEM7YUFDRjs7Ozs7Ozs7Ozs7O1FBT0QsMkNBQVU7Ozs7OztZQUFWLFVBQVcsTUFBVztnQkFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFOzs7O29CQUl2QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7O3dCQUNwQixJQUFNLE1BQU0sR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFFN0YsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTs7NEJBQzVDLElBQU0sUUFBUSxHQUFHRCxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQzdELElBQUksUUFBUSxFQUFFO2dDQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3pCO3lCQUNGOzZCQUFNOzRCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQzt5QkFDMUU7cUJBQ0Y7eUJBQU07O3dCQUNMLElBQU0sUUFBUSxHQUFHQSxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzdELElBQUksUUFBUSxFQUFFOzRCQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQzNEO3FCQUNGO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQkFDNUM7YUFDRjs7Ozs7Ozs7Ozs7Ozs7UUFRRCw0Q0FBVzs7Ozs7OztZQUFYLFVBQVksS0FBYSxFQUFFLEtBQWE7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTs7b0JBQ3ZCLElBQU0sUUFBUSxHQUFHQSxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzdELElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTt3QkFDckMsSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFOzRCQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7eUJBQ2pEOzZCQUFNOzRCQUNMLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDbkQ7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUM1QzthQUNGOzs7Ozs7Ozs7Ozs7UUFPRCw0Q0FBVzs7Ozs7O1lBQVgsVUFBWSxRQUFnQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTs7b0JBQ2hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUVoRCxJQUFJLFlBQVksRUFBRTs7d0JBQ2hCLElBQU0sUUFBUSxHQUFHQSxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRTdELElBQUksUUFBUSxFQUFFOzRCQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0NBQzVCLElBQU0sTUFBTSxHQUFHLDBCQUEwQixHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQ0FDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDekI7aUNBQU07O2dDQUNMLElBQU0sTUFBTSxHQUFHLDBCQUEwQixHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQ0FDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDekI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUM1QzthQUNGOzs7Ozs7Ozs7Ozs7UUFPRCw0Q0FBVzs7Ozs7O1lBQVgsVUFBWSxRQUFnQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTs7b0JBQ2hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUVoRCxJQUFJLFlBQVksRUFBRTs7d0JBQ2hCLElBQU0sUUFBUSxHQUFHQSxnQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRTdELElBQUksUUFBUSxFQUFFOzRCQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0NBQzVCLElBQU0sVUFBVSxHQUFHLDRCQUE0QixHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQ0FDaEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs2QkFDN0I7aUNBQU07O2dDQUNMLElBQU0sVUFBVSxHQUFHLDRCQUE0QixHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQ0FDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs2QkFDN0I7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUM1QzthQUNGOzs7Ozs7UUFHTywyQ0FBVTs7Ozs7c0JBQUMsSUFBWTs7Z0JBQzdCLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFdkUsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2lCQUNwRDs7Ozs7Ozs7O1FBUUssMENBQVM7Ozs7Ozs7c0JBQUMsS0FBVTtnQkFDMUIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFJM0Isb0RBQW1COzs7Ozs7Z0JBQ3pCLElBQUksV0FBVyxDQUFDO2dCQUVoQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNyQyxPQUFPLFdBQVcsQ0FBQztpQkFDcEI7Z0JBRUQsT0FBTyxLQUFLLENBQUM7Ozs7OztRQUlQLCtDQUFjOzs7Ozs7Z0JBQ3BCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRW5ELElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDdEM7Z0JBRUQsT0FBTyxJQUFJLENBQUM7Ozs7Ozs7O1FBUU4seURBQXdCOzs7Ozs7c0JBQUMsR0FBVztnQkFDMUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksa0JBQWtCLENBQUMsQ0FBQzs7O29CQXJTdkVFLGVBQVU7Ozs7O3dCQUhGQyxlQUFVOzs7cUNBRG5COzs7Ozs7O0FDQUE7OztJQUtBLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQzs7UUFPcEI7Ozs7MkJBRm1DLElBQUlDLFlBQU8sRUFBRTtTQUUvQjs7Ozs7O1FBR2pCLG1DQUFVOzs7O1lBQVY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3BDOzs7Ozs7Ozs7Ozs7UUFPRCxvQ0FBVzs7Ozs7O1lBQVgsVUFBWSxPQUFlO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQjs7Ozs7OztRQU9PLHVDQUFjOzs7Ozs7c0JBQUMsWUFBb0I7O2dCQUN6QyxVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzlCLEVBQUUsWUFBWSxDQUFDLENBQUM7OztvQkE5QnBCRixlQUFVOzs7OzZCQVBYOzs7Ozs7Ozs7O0FDR0EsUUFBYSxlQUFlLEdBQUc7UUFDN0IsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxHQUFHO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsYUFBYSxFQUFFLEVBQUU7UUFDakIsT0FBTyxFQUFFO1lBQ1AsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztZQUM1RSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO1lBQ2pDLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFDcEYsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN6RCxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztZQUNqRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUNyQztLQUNGLENBQUM7Ozs7OztBQ3ZCRjs7Ozs7O1FBNEZFLDRCQUNVLGlCQUNBLGtCQUNBO1lBRkEsb0JBQWUsR0FBZixlQUFlO1lBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQjtZQUNoQixjQUFTLEdBQVQsU0FBUzs7Ozs7Ozs7MkJBcENBLE9BQU87Ozs7Ozs7MEJBT1IsZUFBZTs7Ozt3QkFTTSxJQUFJRyxpQkFBWSxFQUFVOzs7O3lCQUV6QixJQUFJQSxpQkFBWSxFQUFVO3lCQUtyRCxLQUFLO1NBYWlCOzs7Ozs7OztRQUtuQyw0Q0FBZTs7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCOzs7Ozs7UUFHRCwwQ0FBYTs7OztZQUFiO2dCQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JDOzs7Ozs7Ozs7O1FBTUQsNENBQWU7Ozs7O1lBQWYsVUFBZ0IsU0FBaUI7Z0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNuQzthQUNGOzs7O1FBRUQsMkNBQWM7OztZQUFkOztnQkFFRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHQyxhQUFtQixFQUFFLENBQUM7Z0JBRTdELElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNsQjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4Qjs7Ozs7Ozs7Ozs7O1FBT0QsMkNBQWM7Ozs7OztZQUFkLFVBQWUsT0FBZTs7Z0JBQzVCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxTQUFTLElBQUksT0FBTyxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN4RDs7Ozs7Ozs7Ozs7O1FBT0QsMkNBQWM7Ozs7OztZQUFkLFVBQWUsV0FBbUI7Z0JBQ2hDLElBQUk7b0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUM7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNqRDthQUNGOzs7Ozs7Ozs7Ozs7UUFPRCx1Q0FBVTs7Ozs7O1lBQVYsVUFBVyxLQUFVO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTlCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtvQkFDN0UsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDZDtnQkFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOzs7Ozs7Ozs7Ozs7OztRQVFELDZDQUFnQjs7Ozs7OztZQUFoQixVQUFpQixFQUFPO2dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUNwQjs7Ozs7Ozs7Ozs7Ozs7UUFRRCw4Q0FBaUI7Ozs7Ozs7WUFBakIsVUFBa0IsRUFBTztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7Ozs7Ozs7Ozs7OztRQU9ELHdDQUFXOzs7Ozs7WUFBWCxVQUFZLEtBQWE7O2dCQUN2QixJQUFNLGVBQWUsR0FBRyxLQUFLLEtBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQzthQUN2Rjs7Ozs7Ozs7Ozs7O1FBT0QsOENBQWlCOzs7Ozs7WUFBakIsVUFBa0IsS0FBVTtnQkFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7aUJBQy9FO2FBQ0Y7Ozs7Ozs7O1FBS0QsZ0RBQW1COzs7O1lBQW5CO2dCQUNFLE9BQU87b0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDdEIsQ0FBQzthQUNIOzs7O1FBRUQscUNBQVE7OztZQUFSOzs7O2dCQUlFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2dCQUUxRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO2dCQUV0RSxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDN0M7O29CQXRPRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLGloQ0FBMEM7d0JBRTFDLFNBQVMsRUFBRSxDQUFDO2dDQUNWLE9BQU8sRUFBRUMsdUJBQWlCO2dDQUMxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEdBQUEsQ0FBQztnQ0FDakQsS0FBSyxFQUFFLElBQUk7NkJBQ1osQ0FBQzs7cUJBQ0g7Ozs7O3dCQWRRLGNBQWM7d0JBRGQsc0JBQXNCO3dCQUpmQyxjQUFTOzs7OytCQXVCdEJDLFVBQUs7aUNBRUxBLFVBQUs7a0NBRUxBLFVBQUs7Z0NBTUxBLFVBQUs7NkJBRUxBLFVBQUs7Z0NBRUxBLFVBQUs7NEJBRUxBLFVBQUs7K0JBRUxBLFVBQUs7OEJBUUxBLFVBQUs7OEJBUUxBLFVBQUs7NkJBT0xBLFVBQUs7a0NBRUxBLFVBQUs7b0NBRUxBLFVBQUs7b0NBRUxBLFVBQUs7MkJBR0xDLFdBQU07NEJBRU5BLFdBQU07K0JBRU5DLGNBQVMsU0FBQyxhQUFhO2lDQUN2QkEsY0FBUyxTQUFDLFlBQVk7O2lDQWhGekI7Ozs7Ozs7QUNBQTs7Ozs7O1FBc0JFLDZCQUFvQixnQkFBb0M7WUFBcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjs7Ozt3QkFUakQsQ0FBQzs7OzsyQkFFRSxLQUFLO1NBTzhDOzs7Ozs7Ozs7Ozs7OztRQVFiLHlDQUFXOzs7Ozs7O1lBQTNELFVBQTRELEtBQWlCO2dCQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDakIsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDM0I7Ozs7Ozs7Ozs7Ozs7O1FBUTZDLHVDQUFTOzs7Ozs7O1lBQXZELFVBQXdELEtBQWlCO2dCQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7Ozs7O1FBRXNDLHNDQUFROzs7OztZQUEvQyxVQUFnRCxLQUFpQixFQUFFLE9BQWtCO2dCQUNuRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7O29CQWxERk4sY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLCt2QkFBMkM7O3FCQUU1Qzs7Ozs7d0JBTlEsa0JBQWtCOzs7O2tDQTZCeEJPLGlCQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBZTdDQSxpQkFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOytCQUkzQ0EsaUJBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tDQWpEdkM7Ozs7Ozs7QUNBQTs7OztRQWlCRSxtQ0FBb0IsZUFBK0I7WUFBbkQsaUJBRUM7WUFGbUIsb0JBQWUsR0FBZixlQUFlLENBQWdCOzs7OzhCQUx0QyxTQUFTO1lBTXBCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUEsQ0FBQyxDQUFDO1NBQzdGOzs7Ozs7OztRQUtELGdEQUFZOzs7O1lBQVo7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDN0I7O29CQXRCRlAsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLCtIQUFrRDs7cUJBRW5EOzs7Ozt3QkFOUSxjQUFjOzs7d0NBRnZCOzs7Ozs7O0FDQUE7UUFxREUsbUNBQW9CLGNBQTZCLEVBQ3ZDLGNBQ0EsaUJBQ0E7WUFIVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtZQUN2QyxpQkFBWSxHQUFaLFlBQVk7WUFDWixvQkFBZSxHQUFmLGVBQWU7WUFDZiw0QkFBdUIsR0FBdkIsdUJBQXVCOzs7O2tDQWpDaEIsSUFBSTs7OztxQ0FFRCxDQUFDOzs7OytCQUVQLEtBQUs7Ozs7b0NBRUEsV0FBVzs7Ozs0QkFFbkIsRUFBRTs7Ozs0QkFFRixFQUFFOzs7OzRCQUVGLEVBQUU7Ozs7bUNBRUssS0FBSzs7OzsyQkFjbUIsSUFBSUYsaUJBQVksRUFBVTtZQU1sRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN4Qzs7Ozs7Ozs7Ozs7O1FBT0QsMkRBQXVCOzs7Ozs7WUFBdkIsVUFBd0IsS0FBSztnQkFDM0IsT0FBT1UsdUJBQTZCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNyRTs7Ozs7Ozs7Ozs7O1FBT0Qsa0RBQWM7Ozs7OztZQUFkLFVBQWUsT0FBZTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7Ozs7Ozs7O1FBS0QsZ0RBQVk7Ozs7WUFBWjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQ0MsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUNBLGdCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O1FBS0QsOENBQVU7Ozs7WUFBVjtnQkFDRSxJQUFJO29CQUNGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDN0Q7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNqRDs7Z0JBR0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztnQkFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4Qjs7Ozs7Ozs7UUFLRCxrREFBYzs7OztZQUFkO2dCQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7b0JBQ3ZDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDQSxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QyxDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7UUFLRCxrREFBYzs7OztZQUFkO2dCQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7b0JBQ3ZDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDQSxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ1osS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozs7Ozs7UUFPRCxnREFBWTs7Ozs7O1lBQVosVUFBYSxDQUFDO2dCQUFkLGlCQThCQztnQkE3QkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUV4QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUM3QixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0IsSUFBSTt3QkFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7NEJBRXZGLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQ0FDZCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ3ZFOzRCQUVELElBQUksS0FBSyxZQUFZQyxpQkFBWSxFQUFFO2dDQUNqQyxJQUFJO29DQUNGLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQ0FDMUQ7Z0NBQUMsT0FBTyxLQUFLLEVBQUU7b0NBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lDQUNqRDtnQ0FDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQ0FDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7NkJBQzFCO3lCQUNGLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxPQUFPLEtBQUssRUFBRTt3QkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztxQkFDMUI7aUJBQ0Y7YUFDRjs7Ozs7O1FBR0QsK0NBQVc7Ozs7WUFBWDtnQkFDRSxJQUFJO29CQUNGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pFO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakQ7O2dCQUdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Z0JBRXRCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7Ozs7OztRQUdELCtDQUFXOzs7O1lBQVg7Z0JBQ0UsSUFBSTtvQkFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hFO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakQ7O2dCQUdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Z0JBRXRCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7Ozs7Ozs7O1FBR0QsK0NBQVc7Ozs7OztZQUFYLFVBQVksS0FBYSxFQUFFLEtBQWE7Z0JBQ3RDLElBQUk7b0JBQ0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3hEO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakQ7Z0JBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjs7Ozs7OztRQUdELCtDQUFXOzs7OztZQUFYLFVBQVksUUFBZ0I7Z0JBQzFCLElBQUk7b0JBQ0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNqRDtnQkFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzdCOzs7Ozs7O1FBR0QsK0NBQVc7Ozs7O1lBQVgsVUFBWSxRQUFnQjtnQkFDMUIsSUFBSTtvQkFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRDtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2pEO2dCQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0I7Ozs7UUFFRCw0Q0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2Qjs7b0JBN05GVixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsZ3hnQkFBa0Q7d0JBRWxELFNBQVMsRUFBRSxDQUFDVywwQkFBYSxDQUFDOztxQkFDM0I7Ozs7O3dCQVZRQSwwQkFBYTt3QkFGYkMsaUJBQVc7d0JBSVgsY0FBYzt3QkFEZCxzQkFBc0I7Ozs7NkJBc0M1QlIsVUFBSztpQ0FDTEUsY0FBUyxTQUFDLFlBQVk7bUNBQ3RCQSxjQUFTLFNBQUMsY0FBYzttQ0FDeEJBLGNBQVMsU0FBQyxjQUFjO3NDQUN4QkEsY0FBUyxTQUFDLGlCQUFpQjttQ0FDM0JBLGNBQVMsU0FBQyxjQUFjOzhCQUl4QkQsV0FBTTs7d0NBbkRUOzs7Ozs7O0FDQUE7Ozs7b0JBWUNRLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksRUFBRUMsaUJBQVcsRUFBRUMseUJBQW1CLEVBQUVDLDBCQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xGLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixDQUFDO3dCQUM3RyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDN0IsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDO3FCQUNwRDs7OEJBakJEOzs7Ozs7Ozs7Ozs7QUNRQSxnQ0FBbUMsU0FBaUIsRUFBRSxPQUFvQztRQUN4RixPQUFPLFVBQUMsT0FBd0I7O1lBQzlCLElBQU0sY0FBYyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7O1lBQ25GLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzs7WUFHcEQsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzdCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3pEOztZQUdELElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUM3QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDakQ7O1lBR0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzlCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM3QztZQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7Z0JBQ2hDLE9BQU87b0JBQ0wsU0FBUyxFQUFFO3dCQUNULGFBQWEsRUFBRSxTQUFTO3dCQUN4QixVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU07cUJBQzdCO2lCQUNGLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2IsQ0FBQztLQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==