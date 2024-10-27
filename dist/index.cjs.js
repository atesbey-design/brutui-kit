'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ai = require('react-icons/ai');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var variantStyles = {
    primary: styled.css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #FF00FF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #FF00FF;\n      background-color: #FF00FF;\n      color: #000;\n    }\n  "], ["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #FF00FF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #FF00FF;\n      background-color: #FF00FF;\n      color: #000;\n    }\n  "]))),
    secondary: styled.css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n    background-color: #fff;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #00FFFF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #00FFFF;\n    }\n  "], ["\n    background-color: #fff;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #00FFFF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #00FFFF;\n    }\n  "]))),
    destructive: styled.css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n    background-color: #FF0000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: shake 0.5s ease-in-out infinite;\n\n    @keyframes shake {\n      0%, 100% { transform: translate(0, 0); }\n      25% { transform: translate(-2px, 0); }\n      75% { transform: translate(2px, 0); }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n    }\n  "], ["\n    background-color: #FF0000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: shake 0.5s ease-in-out infinite;\n\n    @keyframes shake {\n      0%, 100% { transform: translate(0, 0); }\n      25% { transform: translate(-2px, 0); }\n      75% { transform: translate(2px, 0); }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n    }\n  "]))),
    outline: styled.css(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n    background-color: transparent;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      background-color: #000;\n      color: #fff;\n    }\n  "], ["\n    background-color: transparent;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      background-color: #000;\n      color: #fff;\n    }\n  "]))),
    ghost: styled.css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    background-color: rgba(255, 255, 255, 0.1);\n    color: #000;\n    border: 4px solid rgba(0, 0, 0, 0.2);\n    backdrop-filter: blur(8px);\n    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);\n      background-color: rgba(255, 255, 255, 0.2);\n    }\n  "], ["\n    background-color: rgba(255, 255, 255, 0.1);\n    color: #000;\n    border: 4px solid rgba(0, 0, 0, 0.2);\n    backdrop-filter: blur(8px);\n    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);\n      background-color: rgba(255, 255, 255, 0.2);\n    }\n  "]))),
    link: styled.css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n    background-color: transparent;\n    color: #000;\n    border: none;\n    text-decoration: underline;\n    text-decoration-thickness: 4px;\n    text-decoration-color: #000;\n    padding: 0;\n    font-weight: 900;\n    transition: all 0.2s;\n\n    &:hover {\n      text-decoration-thickness: 8px;\n      transform: translateY(-2px);\n    }\n  "], ["\n    background-color: transparent;\n    color: #000;\n    border: none;\n    text-decoration: underline;\n    text-decoration-thickness: 4px;\n    text-decoration-color: #000;\n    padding: 0;\n    font-weight: 900;\n    transition: all 0.2s;\n\n    &:hover {\n      text-decoration-thickness: 8px;\n      transform: translateY(-2px);\n    }\n  "]))),
    brutal: styled.css(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n    background-color: #fff;\n    color: #000;\n    border: 8px solid #000;\n    box-shadow: 12px 12px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.1s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(6px, 6px);\n      box-shadow: 6px 6px 0px #000;\n    }\n  "], ["\n    background-color: #fff;\n    color: #000;\n    border: 8px solid #000;\n    box-shadow: 12px 12px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.1s;\n    font-weight: 900;\n    text-transform: uppercase;\n\n    &:hover {\n      transform: translate(6px, 6px);\n      box-shadow: 6px 6px 0px #000;\n    }\n  "]))),
    neobrutal: styled.css(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n    background-color: #FF00FF;\n    color: #000;\n    border: 8px solid #000;\n    box-shadow: 12px 12px 0px #000, 24px 24px 0px #FF00FF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(6px, 6px);\n      box-shadow: 6px 6px 0px #000, 18px 18px 0px #FF00FF;\n    }\n  "], ["\n    background-color: #FF00FF;\n    color: #000;\n    border: 8px solid #000;\n    box-shadow: 12px 12px 0px #000, 24px 24px 0px #FF00FF;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(6px, 6px);\n      box-shadow: 6px 6px 0px #000, 18px 18px 0px #FF00FF;\n    }\n  "]))),
    pixelated: styled.css(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: none;\n    font-family: 'Press Start 2P', cursive;\n    font-weight: 900;\n    image-rendering: pixelated;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n\n    &:hover {\n      background-color: #fff;\n      color: #000;\n      transform: translate(2px, 2px);\n      box-shadow: 6px 6px 0px #000;\n    }\n  "], ["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: none;\n    font-family: 'Press Start 2P', cursive;\n    font-weight: 900;\n    image-rendering: pixelated;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n\n    &:hover {\n      background-color: #fff;\n      color: #000;\n      transform: translate(2px, 2px);\n      box-shadow: 6px 6px 0px #000;\n    }\n  "]))),
    glitch: styled.css(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #FF00FF;\n    box-shadow: 8px 8px 0px #00FFFF;\n    transform: translate(0, 0);\n    transition: all 0.1s;\n    font-weight: 900;\n    position: relative;\n\n    &:before, &:after {\n      content: attr(data-text);\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: inherit;\n    }\n\n    &:before {\n      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n      transform: translate(-4px, -4px);\n      background: #FF00FF;\n    }\n\n    &:after {\n      clip-path: polygon(0 45%, 100% 45%, 100% 100%, 0 100%);\n      transform: translate(4px, 4px);\n      background: #00FFFF;\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #00FFFF;\n    }\n  "], ["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #FF00FF;\n    box-shadow: 8px 8px 0px #00FFFF;\n    transform: translate(0, 0);\n    transition: all 0.1s;\n    font-weight: 900;\n    position: relative;\n\n    &:before, &:after {\n      content: attr(data-text);\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: inherit;\n    }\n\n    &:before {\n      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n      transform: translate(-4px, -4px);\n      background: #FF00FF;\n    }\n\n    &:after {\n      clip-path: polygon(0 45%, 100% 45%, 100% 100%, 0 100%);\n      transform: translate(4px, 4px);\n      background: #00FFFF;\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #00FFFF;\n    }\n  "]))),
    retro: styled.css(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #fff;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-family: 'VT323', monospace;\n    font-weight: 900;\n    text-transform: uppercase;\n    filter: blur(0.5px);\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      filter: blur(1px) brightness(150%);\n    }\n  "], ["\n    background-color: #000;\n    color: #fff;\n    border: 4px solid #fff;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-family: 'VT323', monospace;\n    font-weight: 900;\n    text-transform: uppercase;\n    filter: blur(0.5px);\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      filter: blur(1px) brightness(150%);\n    }\n  "]))),
    gradient: styled.css(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n    background: linear-gradient(45deg, #FF00FF, #00FFFF, #FFFF00);\n    background-size: 200% 200%;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: gradient 3s ease infinite;\n\n    @keyframes gradient {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      animation-duration: 1s;\n    }\n  "], ["\n    background: linear-gradient(45deg, #FF00FF, #00FFFF, #FFFF00);\n    background-size: 200% 200%;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: gradient 3s ease infinite;\n\n    @keyframes gradient {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      animation-duration: 1s;\n    }\n  "]))),
    warning: styled.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    background-color: #FF8800;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: pulse 2s infinite;\n\n    @keyframes pulse {\n      0% { transform: scale(1); }\n      50% { transform: scale(1.05); }\n      100% { transform: scale(1); }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      animation: none;\n    }\n  "], ["\n    background-color: #FF8800;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n    animation: pulse 2s infinite;\n\n    @keyframes pulse {\n      0% { transform: scale(1); }\n      50% { transform: scale(1.05); }\n      100% { transform: scale(1); }\n    }\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n      animation: none;\n    }\n  "]))),
    success: styled.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    background-color: #00FF00;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n    }\n  "], ["\n    background-color: #00FF00;\n    color: #000;\n    border: 4px solid #000;\n    box-shadow: 8px 8px 0px #000;\n    transform: translate(0, 0);\n    transition: all 0.2s;\n    font-weight: 900;\n\n    &:hover {\n      transform: translate(4px, 4px);\n      box-shadow: 4px 4px 0px #000;\n    }\n  "])))
};
var sizeStyles = {
    small: styled.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    height: 32px;\n    padding: 8px 16px;\n    font-size: 14px;\n  "], ["\n    height: 32px;\n    padding: 8px 16px;\n    font-size: 14px;\n  "]))),
    medium: styled.css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    height: 40px;\n    padding: 12px 24px;\n    font-size: 16px;\n  "], ["\n    height: 40px;\n    padding: 12px 24px;\n    font-size: 16px;\n  "]))),
    large: styled.css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    height: 48px;\n    padding: 16px 32px;\n    font-size: 20px;\n  "], ["\n    height: 48px;\n    padding: 16px 32px;\n    font-size: 20px;\n  "])))
};
var StyledButton = styled__default["default"].button(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n  ", "\n  border-radius: 0;\n  position: relative;\n  font-family: 'Space Mono', monospace;\n  letter-spacing: ", "px;\n  line-height: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: ", ";\n  font-size: ", "px;\n  text-transform: ", ";\n  ", "\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n    box-shadow: none;\n    filter: grayscale(100%);\n    animation: none;\n\n    &:hover {\n      transform: none !important;\n      box-shadow: none;\n      background-color: inherit;\n      color: inherit;\n    }\n  }\n"], ["\n  cursor: pointer;\n  ", "\n  ", "\n  border-radius: 0;\n  position: relative;\n  font-family: 'Space Mono', monospace;\n  letter-spacing: ", "px;\n  line-height: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: ", ";\n  font-size: ", "px;\n  text-transform: ", ";\n  ", "\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n    box-shadow: none;\n    filter: grayscale(100%);\n    animation: none;\n\n    &:hover {\n      transform: none !important;\n      box-shadow: none;\n      background-color: inherit;\n      color: inherit;\n    }\n  }\n"])), function (props) { return variantStyles[props.variant || 'primary']; }, function (props) {
    var size = props.size || 'medium';
    if (size === 'tiny' || size === 'xlarge' || size === 'custom') {
        return sizeStyles.medium;
    }
    return sizeStyles[size];
}, function (props) { return props.letterSpacing || 0.5; }, function (props) { return props.lineHeight || 1.5; }, function (props) { return props.fontWeight || 900; }, function (props) { return props.fontSize || 16; }, function (props) { return props.textTransform || 'none'; }, function (props) { return props.maxLines && styled.css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    -webkit-box-orient: vertical;\n  "], ["\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    -webkit-box-orient: vertical;\n  "])), props.maxLines); }, function (props) { return props.customDimensions && styled.css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "])), props.customDimensions.height && styled.css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["height: ", "px;"], ["height: ", "px;"])), props.customDimensions.height), props.customDimensions.padding && styled.css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n      padding: ", "px ", "px;\n    "], ["\n      padding: ", "px ", "px;\n    "])), props.customDimensions.padding.vertical, props.customDimensions.padding.horizontal)); });
var templateObject_1$5, templateObject_2$5, templateObject_3$5, templateObject_4$5, templateObject_5$4, templateObject_6$4, templateObject_7$3, templateObject_8$3, templateObject_9$3, templateObject_10$1, templateObject_11$1, templateObject_12$1, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, icon = _a.icon, tooltip = _a.tooltip, className = _a.className, _f = _a.fontWeight, fontWeight = _f === void 0 ? 400 : _f, _g = _a.fontSize, fontSize = _g === void 0 ? 16 : _g, _h = _a.letterSpacing, letterSpacing = _h === void 0 ? 0.5 : _h, _j = _a.textTransform, textTransform = _j === void 0 ? 'none' : _j, _k = _a.lineHeight, lineHeight = _k === void 0 ? 1.5 : _k, maxLines = _a.maxLines, customDimensions = _a.customDimensions;
    // Convert size prop to match StyledButton size prop type
    var getButtonSize = function (size) {
        switch (size) {
            case 'tiny':
                return 'small';
            case 'xlarge':
            case 'custom':
                return 'large';
            default:
                return size;
        }
    };
    return (React__default["default"].createElement(StyledButton, { label: label, onClick: onClick, disabled: disabled || loading, variant: variant, size: getButtonSize(size), title: tooltip, className: className, fontWeight: fontWeight, fontSize: fontSize, letterSpacing: letterSpacing, textTransform: textTransform, lineHeight: lineHeight, maxLines: maxLines, customDimensions: customDimensions }, loading ? (React__default["default"].createElement("span", { className: "spinner" })) : (React__default["default"].createElement(React__default["default"].Fragment, null,
        icon && React__default["default"].createElement("span", { className: "icon" }, icon),
        label))));
};

var colors = {
    primary: '#4B59CD',
    success: '#28a745',
    danger: '#dc3545',
    info: '#17a2b8',
    warning: '#ffc107',
    neutral: '#1D1D1C',
    white: '#FEFEFE',
};
var sizes = {
    small: '8px 12px',
    medium: '10px 16px',
    large: '12px 20px',
};
var inputBaseStyles = styled.css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  padding: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 1rem;\n  outline: none;\n  transition: box-shadow 0.2s ease-in-out;\n\n  ", "\n\n  ", "\n\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(75, 89, 205, 0.3);\n  }\n\n  &:hover {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  width: 100%;\n  max-width: ", ";\n  padding: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 1rem;\n  outline: none;\n  transition: box-shadow 0.2s ease-in-out;\n\n  ", "\n\n  ", "\n\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(75, 89, 205, 0.3);\n  }\n\n  &:hover {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size === 'small' ? '150px' : size === 'large' ? '350px' : '250px');
}, function (_a) {
    var size = _a.size;
    return (size ? sizes[size] : sizes.medium);
}, colors.neutral, colors.white, colors.neutral, function (_a) {
    var validationState = _a.validationState;
    return validationState && styled.css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), validationState === 'success' ? colors.success : colors.danger);
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && styled.css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n      background-color: #e0e0e0;\n      color: #9e9e9e;\n      cursor: not-allowed;\n    "], ["\n      background-color: #e0e0e0;\n      color: #9e9e9e;\n      cursor: not-allowed;\n    "])));
}, colors.primary);
var InputWrapper = styled__default["default"].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n"])));
var Label = styled__default["default"].label(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: ", ";\n  ", "\n"], ["\n  font-size: 1rem;\n  font-weight: bold;\n  color: ", ";\n  ", "\n"])), colors.neutral, function (_a) {
    var inlineLabel = _a.inlineLabel;
    return inlineLabel && styled.css(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    "], ["\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    "])));
});
var HelperText = styled__default["default"].span(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  color: ", ";\n"], ["\n  font-size: 0.875rem;\n  color: ", ";\n"])), function (_a) {
    var validationState = _a.validationState;
    return validationState === 'error' ? colors.danger : validationState === 'success' ? colors.success : colors.info;
});
var InputField = styled__default["default"].input(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), inputBaseStyles);
var IconWrapper = styled__default["default"].div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"])));
var LeadingText = styled__default["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"])), colors.neutral);
var TrailingText = styled__default["default"].span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"])), colors.neutral);
var InputContainer = styled__default["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n"])));
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$4, templateObject_5$3, templateObject_6$3, templateObject_7$2, templateObject_8$2, templateObject_9$2, templateObject_10, templateObject_11, templateObject_12;

var Input = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, onChange = _a.onChange, disabled = _a.disabled, validationState = _a.validationState, helperText = _a.helperText, required = _a.required, icon = _a.icon, showPasswordToggle = _a.showPasswordToggle, autoFill = _a.autoFill, leadingText = _a.leadingText, trailingText = _a.trailingText, _d = _a.size, size = _d === void 0 ? 'medium' : _d, inlineLabel = _a.inlineLabel, className = _a.className;
    var _e = React.useState(value), inputValue = _e[0], setInputValue = _e[1];
    var _f = React.useState(type), inputType = _f[0], setInputType = _f[1];
    var handleInputChange = function (e) {
        var newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(e); // Pass the entire event object instead of just the string value
        }
    };
    var handleTogglePassword = function () {
        setInputType(function (prevType) { return (prevType === 'password' ? 'text' : 'password'); });
    };
    return (React__default["default"].createElement(InputWrapper, { className: className },
        label && React__default["default"].createElement(Label, { inlineLabel: inlineLabel },
            label,
            " ",
            required && '*'),
        React__default["default"].createElement(InputContainer, null,
            leadingText && React__default["default"].createElement(LeadingText, null, leadingText),
            React__default["default"].createElement(InputField, { type: inputType, placeholder: placeholder, value: inputValue, onChange: handleInputChange, disabled: disabled, validationState: validationState, autoComplete: autoFill ? 'on' : 'off', size: size }),
            icon && React__default["default"].createElement(IconWrapper, null, icon),
            showPasswordToggle && type === 'password' && (React__default["default"].createElement(IconWrapper, { onClick: handleTogglePassword }, inputType === 'password' ? React__default["default"].createElement(ai.AiFillEye, null) : React__default["default"].createElement(ai.AiFillEyeInvisible, null))),
            trailingText && React__default["default"].createElement(TrailingText, null, trailingText)),
        helperText && React__default["default"].createElement(HelperText, { validationState: validationState }, helperText)));
};

var CheckboxContainer = styled__default["default"].label(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  gap: 8px;\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  gap: 8px;\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])));
var HiddenCheckbox = styled__default["default"].input.attrs({ type: 'checkbox' })(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n"], ["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n"])));
var StyledCheckbox = styled__default["default"].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border: 3px solid #000000;\n  background: ", ";\n  position: relative;\n  transition: all 0.2s ease;\n  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);\n\n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  width: 24px;\n  height: 24px;\n  border: 3px solid #000000;\n  background: ", ";\n  position: relative;\n  transition: all 0.2s ease;\n  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);\n\n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n\n  ", "\n"])), function (props) { return props.state === 'checked' ? '#FF00FF' : '#FFFFFF'; }, function (props) { return props.disabled ? 'none' : 'translate(-2px, -2px)'; }, function (props) { return props.disabled ? '4px 4px 0 rgba(0, 0, 0, 0.8)' : '6px 6px 0 #00FFFF'; }, function (props) { return props.disabled ? 'none' : 'translate(2px, 2px)'; }, function (props) { return props.disabled ? '4px 4px 0 rgba(0, 0, 0, 0.8)' : '2px 2px 0 #FFFF00'; }, function (props) { return props.state === 'checked' && "\n    &:after {\n      content: '';\n      position: absolute;\n      left: 6px;\n      top: 2px;\n      width: 6px;\n      height: 12px;\n      border: solid #FFFFFF;\n      border-width: 0 2px 2px 0;\n      transform: rotate(45deg);\n    }\n  "; }, function (props) { return props.state === 'indeterminate' && "\n    &:after {\n      content: '';\n      position: absolute;\n      left: 4px;\n      top: 8px;\n      width: 12px;\n      height: 2px;\n      background: #FF00FF;\n    }\n  "; });
var CheckboxLabel = styled__default["default"].span(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  font-family: 'Space Mono', monospace;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n\n  ", "\n"], ["\n  font-family: 'Space Mono', monospace;\n  font-size: 16px;\n  font-weight: 500;\n  color: #000000;\n\n  ", "\n"])), function (props) { return props.required && "\n    &:after {\n      content: '*';\n      color: #FF0000;\n      margin-left: 4px;\n    }\n  "; });
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3;

var Checkbox = function (_a) {
    var label = _a.label, _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.indeterminate, indeterminate = _c === void 0 ? false : _c, onChange = _a.onChange, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.required, required = _e === void 0 ? false : _e, className = _a.className;
    var getCheckboxState = React.useCallback(function () {
        if (indeterminate)
            return 'indeterminate';
        return checked ? 'checked' : 'unchecked';
    }, [checked, indeterminate]);
    var handleChange = function (event) {
        if (!disabled) {
            onChange(event.target.checked);
        }
    };
    return (React__default["default"].createElement(CheckboxContainer, { className: className, "aria-disabled": disabled },
        React__default["default"].createElement(HiddenCheckbox, { checked: checked, disabled: disabled, onChange: handleChange, required: required }),
        React__default["default"].createElement(StyledCheckbox, { state: getCheckboxState(), disabled: disabled }),
        React__default["default"].createElement(CheckboxLabel, { required: required }, label)));
};

var TableContainer = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  background: #ffffff;\n  font-family: system-ui, -apple-system, sans-serif;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n"], ["\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  background: #ffffff;\n  font-family: system-ui, -apple-system, sans-serif;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n"])));
var Table = styled__default["default"].table(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n"])));
var TableHeader = styled__default["default"].thead(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n"], ["\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n"])));
var TableHeaderCell = styled__default["default"].th(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  width: ", ";\n  \n  ", "\n"], ["\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  width: ", ";\n  \n  ", "\n"])), function (props) { return props.width || 'auto'; }, function (props) { return props.sortable && "\n    cursor: pointer;\n    user-select: none;\n    \n    &:hover {\n      background: #f1f5f9;\n    }\n    \n    &:after {\n      content: '".concat(props.sortDirection === 'asc' ? '↑' : props.sortDirection === 'desc' ? '↓' : '', "';\n      margin-left: 8px;\n      opacity: 0.5;\n    }\n  "); });
var TableBody = styled__default["default"].tbody(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  tr:nth-child(even) {\n    background: #f8fafc;\n  }\n"], ["\n  tr:nth-child(even) {\n    background: #f8fafc;\n  }\n"])));
var TableRow = styled__default["default"].tr(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  border-bottom: 1px solid #e2e8f0;\n  transition: background-color 0.2s;\n\n  ", "\n\n  ", "\n"], ["\n  border-bottom: 1px solid #e2e8f0;\n  transition: background-color 0.2s;\n\n  ", "\n\n  ", "\n"])), function (props) { return props.selectable && "\n    cursor: pointer;\n    \n    &:hover {\n      background: #f1f5f9;\n    }\n  "; }, function (props) { return props.selected && "\n    background: #e0f2fe !important;\n  "; });
var TableCell = styled__default["default"].td(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n"], ["\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #334155;\n"])));
styled__default["default"].div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 8px 0;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 8px 0;\n"])));
styled__default["default"].button(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  padding: 6px 12px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: 6px 12px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), function (props) { return props.active ? '#3b82f6' : '#e2e8f0'; }, function (props) { return props.active ? '#3b82f6' : '#ffffff'; }, function (props) { return props.active ? '#ffffff' : '#64748b'; }, function (props) { return props.active ? '#2563eb' : '#f8fafc'; });
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var DataTableRow = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, selectable = _a.selectable, onSelect = _a.onSelect, rowStyle = _a.rowStyle, rowClassName = _a.rowClassName, selected = _a.selected;
    return (React__default["default"].createElement(TableRow, { style: rowStyle, className: rowClassName, selectable: selectable, selected: selected },
        selectable && (React__default["default"].createElement(TableCell, null,
            React__default["default"].createElement(Checkbox, { label: "Select", onChange: function (checked) { return onSelect === null || onSelect === void 0 ? void 0 : onSelect(checked); }, checked: selected }))),
        columns.map(function (column) { return (React__default["default"].createElement(TableCell, { key: column.accessor, style: column.cellStyle, className: column.cellClassName }, column.cellRenderer
            ? column.cellRenderer(rowData[column.accessor])
            : rowData[column.accessor])); })));
};
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns, onRowSelect = _a.onRowSelect, _b = _a.selectable, selectable = _b === void 0 ? false : _b, _c = _a.rowsPerPage, rowsPerPage = _c === void 0 ? 10 : _c, className = _a.className, onSort = _a.onSort;
    var _d = React.useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = React.useState(''), sortColumn = _e[0], setSortColumn = _e[1];
    var _f = React.useState('asc'), sortDirection = _f[0], setSortDirection = _f[1];
    var _g = React.useState(1), currentPage = _g[0]; _g[1];
    var handleSort = function (column) {
        var newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortDirection(newDirection);
        onSort === null || onSort === void 0 ? void 0 : onSort(column, newDirection);
    };
    var handleRowSelect = function (row, selected) {
        var updatedSelection = selected
            ? __spreadArray(__spreadArray([], selectedRows, true), [row], false) : selectedRows.filter(function (r) { return r !== row; });
        setSelectedRows(updatedSelection);
        onRowSelect === null || onRowSelect === void 0 ? void 0 : onRowSelect(updatedSelection);
    };
    Math.ceil(data.length / rowsPerPage);
    var startIndex = (currentPage - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;
    var currentData = data.slice(startIndex, endIndex);
    return (React__default["default"].createElement(TableContainer, { className: className },
        React__default["default"].createElement(Table, null,
            React__default["default"].createElement(TableHeader, null,
                React__default["default"].createElement("tr", null,
                    selectable && (React__default["default"].createElement(TableHeaderCell, null,
                        React__default["default"].createElement(Checkbox, { label: "Select", onChange: function (checked) {
                                var newSelection = checked ? __spreadArray([], data, true) : [];
                                setSelectedRows(newSelection);
                                onRowSelect === null || onRowSelect === void 0 ? void 0 : onRowSelect(newSelection);
                            }, indeterminate: selectedRows.length > 0 && selectedRows.length < data.length, checked: selectedRows.length === data.length }))),
                    columns.map(function (column) { return (React__default["default"].createElement(TableHeaderCell, { key: column.accessor, sortable: column.sortable, sortDirection: sortColumn === column.accessor ? sortDirection : undefined, width: column.width, onClick: function () { return column.sortable && handleSort(column.accessor); } }, column.header)); }))),
            React__default["default"].createElement(TableBody, null, currentData.map(function (row, index) { return (React__default["default"].createElement(DataTableRow, { key: index, rowData: row, columns: columns, selectable: selectable, onSelect: function (selected) { return handleRowSelect(row, selected); }, selected: selectedRows.includes(row), rowStyle: undefined, rowClassName: undefined })); })))));
};

var DialogOverlay = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])), function (props) { return props.isOpen ? 'flex' : 'none'; });
var DialogContainer = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 3px solid #000000;\n  box-shadow: 8px 8px 0px #000000;\n  min-width: ", ";\n  min-height: ", ";\n  max-width: 90vw;\n  max-height: 90vh;\n  width: ", ";\n  position: relative;\n  cursor: ", ";\n  transform: ", ";\n\n  &:active {\n    box-shadow: 4px 4px 0px #000000;\n    transform: translate(4px, 4px) ", ";\n  }\n"], ["\n  background: #ffffff;\n  border: 3px solid #000000;\n  box-shadow: 8px 8px 0px #000000;\n  min-width: ", ";\n  min-height: ", ";\n  max-width: 90vw;\n  max-height: 90vh;\n  width: ", ";\n  position: relative;\n  cursor: ", ";\n  transform: ", ";\n\n  &:active {\n    box-shadow: 4px 4px 0px #000000;\n    transform: translate(4px, 4px) ", ";\n  }\n"])), function (props) { return props.minWidth ? "".concat(props.minWidth, "px") : '320px'; }, function (props) { return props.minHeight ? "".concat(props.minHeight, "px") : '200px'; }, function (props) {
    switch (props.size) {
        case 'small': return '400px';
        case 'large': return '800px';
        default: return '600px';
    }
}, function (props) { return props.draggable ? 'move' : 'default'; }, function (props) { return props.isCritical ? 'rotate(-1deg)' : 'none'; }, function (props) { return props.isCritical ? 'rotate(-1deg)' : ''; });
var DialogHeader = styled__default["default"].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  padding: 16px 24px;\n  border-bottom: 3px solid #000000;\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: 16px 24px;\n  border-bottom: 3px solid #000000;\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])), function (props) { return props.isCritical ? '#FF4444' : '#ffffff'; });
var DialogTitle = styled__default["default"].h2(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: 'NeoBrutQa', sans-serif;\n  color: #000000;\n"], ["\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: 'NeoBrutQa', sans-serif;\n  color: #000000;\n"])));
var DialogContent = styled__default["default"].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  padding: 24px;\n  overflow-y: auto;\n  max-height: calc(90vh - 180px);\n"], ["\n  padding: 24px;\n  overflow-y: auto;\n  max-height: calc(90vh - 180px);\n"])));
var DialogFooter = styled__default["default"].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  padding: 16px 24px;\n  border-top: 3px solid #000000;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: #ffffff;\n"], ["\n  padding: 16px 24px;\n  border-top: 3px solid #000000;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: #ffffff;\n"])));
var DialogButton = styled__default["default"].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 8px 16px;\n  border: 3px solid #000000;\n  background: ", ";\n  color: #000000;\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: 14px;\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px #000000;\n  transition: transform 0.1s, box-shadow 0.1s;\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"], ["\n  padding: 8px 16px;\n  border: 3px solid #000000;\n  background: ", ";\n  color: #000000;\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: 14px;\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px #000000;\n  transition: transform 0.1s, box-shadow 0.1s;\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"])), function (props) {
    switch (props.variant) {
        case 'primary': return '#4CAF50';
        case 'secondary': return '#2196F3';
        case 'tertiary': return '#FFC107';
    }
}, function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; });
var CloseButton = styled__default["default"].button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 32px;\n  height: 32px;\n  border: 3px solid #000000;\n  background: #FF4444;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 2px 2px 0px #000000;\n\n  &:active {\n    transform: translate(2px, 2px);\n    box-shadow: none;\n  }\n"], ["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 32px;\n  height: 32px;\n  border: 3px solid #000000;\n  background: #FF4444;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 2px 2px 0px #000000;\n\n  &:active {\n    transform: translate(2px, 2px);\n    box-shadow: none;\n  }\n"])));
var DialogImage = styled__default["default"].img(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  border: 3px solid #000000;\n"], ["\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  border: 3px solid #000000;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7, templateObject_8, templateObject_9;

var Dialog = function (_a) {
    var title = _a.title, content = _a.content, isOpen = _a.isOpen, onClose = _a.onClose, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, tertiaryAction = _a.tertiaryAction, _b = _a.size, size = _b === void 0 ? 'medium' : _b; _a.overlay; var className = _a.className, isCritical = _a.isCritical, image = _a.image, onOpen = _a.onOpen, _d = _a.closeOnOverlayClick, closeOnOverlayClick = _d === void 0 ? true : _d, customFooter = _a.customFooter, customHeader = _a.customHeader, _e = _a.draggable, draggable = _e === void 0 ? false : _e, _f = _a.minWidth, minWidth = _f === void 0 ? 300 : _f, _g = _a.minHeight, minHeight = _g === void 0 ? 200 : _g, style = _a.style, overlayStyle = _a.overlayStyle, headerStyle = _a.headerStyle, contentStyle = _a.contentStyle, footerStyle = _a.footerStyle;
    var _h = React.useState({ x: 0, y: 0 }), position = _h[0], setPosition = _h[1];
    var dialogRef = React.useRef(null);
    var isDragging = React.useRef(false);
    var dragOffset = React.useRef({ x: 0, y: 0 });
    React.useEffect(function () {
        if (isOpen && onOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);
    var handleMouseDown = function (e) {
        if (!draggable || !dialogRef.current)
            return;
        isDragging.current = true;
        var rect = dialogRef.current.getBoundingClientRect();
        dragOffset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };
    var handleMouseMove = function (e) {
        if (!isDragging.current)
            return;
        setPosition({
            x: e.clientX - dragOffset.current.x,
            y: e.clientY - dragOffset.current.y
        });
    };
    var handleMouseUp = function () {
        isDragging.current = false;
    };
    React.useEffect(function () {
        if (draggable) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            return function () {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [draggable]);
    var handleOverlayClick = function (e) {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };
    return (React__default["default"].createElement(DialogOverlay, { isOpen: isOpen, onClick: handleOverlayClick, style: overlayStyle },
        React__default["default"].createElement(DialogContainer, { ref: dialogRef, className: className, size: size, draggable: draggable, minWidth: minWidth, minHeight: minHeight, isCritical: isCritical, style: __assign(__assign({}, (draggable ? {
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: isDragging.current ? 'grabbing' : 'grab'
            } : {})), style) },
            React__default["default"].createElement("div", { onMouseDown: handleMouseDown }, customHeader || (React__default["default"].createElement(DialogHeader, { isCritical: isCritical, style: headerStyle },
                React__default["default"].createElement(DialogTitle, null, title),
                React__default["default"].createElement(CloseButton, { onClick: onClose }, "\u00D7")))),
            React__default["default"].createElement(DialogContent, { style: contentStyle },
                image && React__default["default"].createElement(DialogImage, { src: image, alt: "Dialog" }),
                content),
            (primaryAction || secondaryAction || tertiaryAction || customFooter) && (React__default["default"].createElement(DialogFooter, { style: footerStyle }, customFooter || (React__default["default"].createElement(React__default["default"].Fragment, null,
                tertiaryAction && (React__default["default"].createElement(DialogButton, { variant: "tertiary", onClick: tertiaryAction.onClick, disabled: tertiaryAction.disabled },
                    tertiaryAction.icon,
                    tertiaryAction.text)),
                secondaryAction && (React__default["default"].createElement(DialogButton, { variant: "secondary", onClick: secondaryAction.onClick, disabled: secondaryAction.disabled },
                    secondaryAction.icon,
                    secondaryAction.text)),
                primaryAction && (React__default["default"].createElement(DialogButton, { variant: "primary", onClick: primaryAction.onClick, disabled: primaryAction.disabled },
                    primaryAction.icon,
                    primaryAction.text)))))))));
};

var DropdownContainer = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var DropdownButton = styled__default["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", ";\n  border: 3px solid #000000;\n  background: ", ";\n  color: #000000;\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px #000000;\n  transition: transform 0.1s, box-shadow 0.1s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transform: ", ";\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"], ["\n  padding: ", ";\n  border: 3px solid #000000;\n  background: ", ";\n  color: #000000;\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px #000000;\n  transition: transform 0.1s, box-shadow 0.1s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transform: ", ";\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"])), function (props) {
    switch (props.size) {
        case 'small': return '6px 12px';
        case 'large': return '12px 24px';
        default: return '8px 16px';
    }
}, function (props) {
    switch (props.kind) {
        case 'neutral': return '#E0E0E0';
        case 'success': return '#4CAF50';
        case 'danger': return '#FF4444';
        default: return '#2196F3';
    }
}, function (props) { return props.size === 'large' ? '16px' : '14px'; }, function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; }, function (props) { return props.isActive ? 'translate(4px, 4px)' : 'none'; });
var DropdownContent = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  background: #ffffff;\n  border: 3px solid #000000;\n  box-shadow: 8px 8px 0px #000000;\n  display: ", ";\n  z-index: 1000;\n  max-height: ", ";\n  overflow-y: auto;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  background: #ffffff;\n  border: 3px solid #000000;\n  box-shadow: 8px 8px 0px #000000;\n  display: ", ";\n  z-index: 1000;\n  max-height: ", ";\n  overflow-y: auto;\n"])), function (props) { return props.isOpen ? 'block' : 'none'; }, function (props) { return props.maxHeight ? "".concat(props.maxHeight, "px") : '300px'; });
var DropdownItem = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 8px 16px;\n  cursor: ", ";\n  opacity: ", ";\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled) {\n    background-color: #F5F5F5;\n  }\n\n  &:active:not(:disabled) {\n    background-color: #E0E0E0;\n  }\n"], ["\n  padding: 8px 16px;\n  cursor: ", ";\n  opacity: ", ";\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled) {\n    background-color: #F5F5F5;\n  }\n\n  &:active:not(:disabled) {\n    background-color: #E0E0E0;\n  }\n"])), function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; });
var DropdownFooter = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px 16px;\n  border-top: 3px solid #000000;\n  background: #ffffff;\n"], ["\n  padding: 8px 16px;\n  border-top: 3px solid #000000;\n  background: #ffffff;\n"])));
styled__default["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Dropdown = function (_a) {
    var label = _a.label, items = _a.items, _b = _a.kind, kind = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e, onToggle = _a.onToggle, className = _a.className, buttonIcon = _a.buttonIcon, _f = _a.isActive, isActive = _f === void 0 ? false : _f, _g = _a.closeOnOutsideClick, closeOnOutsideClick = _g === void 0 ? true : _g, maxHeight = _a.maxHeight, customFooter = _a.customFooter, style = _a.style, buttonStyle = _a.buttonStyle, contentStyle = _a.contentStyle, footerStyle = _a.footerStyle;
    var dropdownRef = React.useRef(null);
    React.useEffect(function () {
        if (closeOnOutsideClick) {
            var handleClickOutside_1 = function (event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
                    onToggle();
                }
            };
            document.addEventListener('mousedown', handleClickOutside_1);
            return function () {
                document.removeEventListener('mousedown', handleClickOutside_1);
            };
        }
    }, [isOpen, onToggle, closeOnOutsideClick]);
    return (React__default["default"].createElement(DropdownContainer, { ref: dropdownRef, className: className, style: style },
        React__default["default"].createElement(DropdownButton, { onClick: function () { return !disabled && onToggle(); }, disabled: disabled, kind: kind, size: size, isActive: isActive, style: buttonStyle },
            buttonIcon,
            label),
        React__default["default"].createElement(DropdownContent, { isOpen: isOpen, maxHeight: maxHeight, style: contentStyle },
            items.map(function (item, index) { return (React__default["default"].createElement(DropdownItem, { key: index, onClick: function () { return !item.disabled && item.onSelect(); }, disabled: item.disabled, style: item.style },
                item.icon,
                item.text)); }),
            customFooter && (React__default["default"].createElement(DropdownFooter, { style: footerStyle }, customFooter)))));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Datatable = DataTable;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Input = Input;
//# sourceMappingURL=index.cjs.js.map
