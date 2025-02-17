import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { EyeOff, Eye, X, Settings, Info, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';

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

var baseButtonStyles = css(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 1.25rem;\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n  border: 4px solid #000000;\n  box-shadow: 4px 4px 0px #000000;\n  &:hover {\n    transform: translate(2px, 2px);\n    box-shadow: 2px 2px 0px #000000;\n  }\n"], ["\n  font-weight: bold;\n  font-size: 1.25rem;\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n  border: 4px solid #000000;\n  box-shadow: 4px 4px 0px #000000;\n  &:hover {\n    transform: translate(2px, 2px);\n    box-shadow: 2px 2px 0px #000000;\n  }\n"])));
var variantStyles$1 = {
    default: css(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n    ", "\n    background-color: #FFFFFF;\n    color: #000000;\n  "], ["\n    ", "\n    background-color: #FFFFFF;\n    color: #000000;\n  "])), baseButtonStyles),
    primary: css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n    ", "\n    background-color: #3B82F6;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #3B82F6;\n    color: #FFFFFF;\n  "])), baseButtonStyles),
    secondary: css(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n    ", "\n    background-color: #A855F7;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #A855F7;\n    color: #FFFFFF;\n  "])), baseButtonStyles),
    destructive: css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n    ", "\n    background-color: #EF4444;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #EF4444;\n    color: #FFFFFF;\n  "])), baseButtonStyles),
    outline: css(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n    ", "\n    background-color: transparent;\n    color: #000000;\n  "], ["\n    ", "\n    background-color: transparent;\n    color: #000000;\n  "])), baseButtonStyles),
    ghost: css(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n    ", "\n    background-color: transparent;\n    border-color: transparent;\n    box-shadow: none;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  "], ["\n    ", "\n    background-color: transparent;\n    border-color: transparent;\n    box-shadow: none;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  "])), baseButtonStyles),
    link: css(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n    ", "\n    background: none;\n    border: none;\n    box-shadow: none;\n    text-decoration: underline;\n    padding: 0;\n    color: #3B82F6;\n  "], ["\n    ", "\n    background: none;\n    border: none;\n    box-shadow: none;\n    text-decoration: underline;\n    padding: 0;\n    color: #3B82F6;\n  "])), baseButtonStyles),
    brutal: css(templateObject_9$4 || (templateObject_9$4 = __makeTemplateObject(["\n    ", "\n    background-color: #FFFFFF;\n    border-width: 4px;\n  "], ["\n    ", "\n    background-color: #FFFFFF;\n    border-width: 4px;\n  "])), baseButtonStyles),
    neobrutal: css(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n    ", "\n    background-color: #FFFFFF;\n    border-width: 6px;\n    box-shadow: 6px 6px 0px #000000;\n  "], ["\n    ", "\n    background-color: #FFFFFF;\n    border-width: 6px;\n    box-shadow: 6px 6px 0px #000000;\n  "])), baseButtonStyles),
    success: css(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n    ", "\n    background-color: #4ADE80;\n    color: #000000;\n  "], ["\n    ", "\n    background-color: #4ADE80;\n    color: #000000;\n  "])), baseButtonStyles),
    warning: css(templateObject_12$2 || (templateObject_12$2 = __makeTemplateObject(["\n    ", "\n    background-color: #FCD34D;\n    color: #000000;\n  "], ["\n    ", "\n    background-color: #FCD34D;\n    color: #000000;\n  "])), baseButtonStyles),
    error: css(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n    ", "\n    background-color: #EF4444;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #EF4444;\n    color: #FFFFFF;\n  "])), baseButtonStyles),
    info: css(templateObject_14$1 || (templateObject_14$1 = __makeTemplateObject(["\n    ", "\n    background-color: #3B82F6;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #3B82F6;\n    color: #FFFFFF;\n  "])), baseButtonStyles),
    custom: css(templateObject_15$1 || (templateObject_15$1 = __makeTemplateObject(["\n    ", "\n    background-color: #A855F7;\n    color: #FFFFFF;\n  "], ["\n    ", "\n    background-color: #A855F7;\n    color: #FFFFFF;\n  "])), baseButtonStyles)
};
var StyledButton = styled.button(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n  border-radius: 0;\n  position: relative;\n  font-family: 'Space Mono', monospace;\n  letter-spacing: ", "px;\n  line-height: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: ", ";\n  font-size: ", "px;\n  text-transform: ", ";\n  ", "\n  ", "\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n    box-shadow: none;\n    filter: grayscale(100%);\n    animation: none;\n\n    &:hover {\n      transform: none !important;\n      box-shadow: none;\n      background-color: inherit;\n      color: inherit;\n    }\n  }\n"], ["\n  cursor: pointer;\n  ", "\n  border-radius: 0;\n  position: relative;\n  font-family: 'Space Mono', monospace;\n  letter-spacing: ", "px;\n  line-height: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: ", ";\n  font-size: ", "px;\n  text-transform: ", ";\n  ", "\n  ", "\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n    box-shadow: none;\n    filter: grayscale(100%);\n    animation: none;\n\n    &:hover {\n      transform: none !important;\n      box-shadow: none;\n      background-color: inherit;\n      color: inherit;\n    }\n  }\n"])), function (props) {
    var variant = props.variant || 'primary';
    if (variant in variantStyles$1) {
        return variantStyles$1[variant];
    }
    return variantStyles$1.primary;
}, function (props) { return props.letterSpacing || 0.5; }, function (props) { return props.lineHeight || 1.5; }, function (props) { return props.fontWeight || 900; }, function (props) { return props.fontSize || 16; }, function (props) { return props.textTransform || 'none'; }, function (props) { return props.maxLines && css(templateObject_16$1 || (templateObject_16$1 = __makeTemplateObject(["\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    -webkit-box-orient: vertical;\n  "], ["\n    display: -webkit-box;\n    -webkit-line-clamp: ", ";\n    -webkit-box-orient: vertical;\n  "])), props.maxLines); }, function (props) { return props.customDimensions && css(templateObject_19$1 || (templateObject_19$1 = __makeTemplateObject(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "])), props.customDimensions.height && css(templateObject_17$1 || (templateObject_17$1 = __makeTemplateObject(["height: ", "px;"], ["height: ", "px;"])), props.customDimensions.height), props.customDimensions.padding && css(templateObject_18$1 || (templateObject_18$1 = __makeTemplateObject(["\n      padding: ", "px ", "px;\n    "], ["\n      padding: ", "px ", "px;\n    "])), props.customDimensions.padding.vertical, props.customDimensions.padding.horizontal)); }, function (props) { return props.style && Object.entries(props.style).map(function (_a) {
    var key = _a[0], value = _a[1];
    return css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["", ": ", ";"], ["", ": ", ";"])), key, value);
}); });
var templateObject_1$7, templateObject_2$7, templateObject_3$7, templateObject_4$7, templateObject_5$5, templateObject_6$5, templateObject_7$4, templateObject_8$4, templateObject_9$4, templateObject_10$2, templateObject_11$2, templateObject_12$2, templateObject_13$1, templateObject_14$1, templateObject_15$1, templateObject_16$1, templateObject_17$1, templateObject_18$1, templateObject_19$1, templateObject_20, templateObject_21;

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, icon = _a.icon, tooltip = _a.tooltip, className = _a.className, _f = _a.fontWeight, fontWeight = _f === void 0 ? 400 : _f, _g = _a.fontSize, fontSize = _g === void 0 ? 16 : _g, _h = _a.letterSpacing, letterSpacing = _h === void 0 ? 0.5 : _h, _j = _a.textTransform, textTransform = _j === void 0 ? 'none' : _j, _k = _a.lineHeight, lineHeight = _k === void 0 ? 1.5 : _k, maxLines = _a.maxLines, customDimensions = _a.customDimensions, style = _a.style;
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
    return (React.createElement(StyledButton, { label: label, onClick: onClick, disabled: disabled || loading, variant: variant, size: getButtonSize(size), title: tooltip, className: className, fontWeight: fontWeight, fontSize: fontSize, letterSpacing: letterSpacing, textTransform: textTransform, lineHeight: lineHeight, maxLines: maxLines, customDimensions: customDimensions, style: style }, loading ? (React.createElement("span", { className: "spinner" })) : (React.createElement(React.Fragment, null,
        icon && React.createElement("span", { className: "icon" }, icon),
        label))));
};

var colorPalette = {
    red: ['#FF0000', '#FF3333', '#FF6666', '#FF9999', '#FFCCCC'],
    blue: ['#0000FF', '#3333FF', '#6666FF', '#9999FF', '#CCCCFF'],
    yellow: ['#FFFF00', '#FFFF33', '#FFFF66', '#FFFF99', '#FFFFCC'],
    green: ['#00FF00', '#33FF33', '#66FF66', '#99FF99', '#CCFFCC'],
    purple: ['#8B00FF', '#9F33FF', '#B266FF', '#C699FF', '#DACCFF'],
    orange: ['#FFA500', '#FFB733', '#FFC966', '#FFDB99', '#FFEDCC'],
    pink: ['#FF69B4', '#FF87C3', '#FFA5D2', '#FFC3E1', '#FFE1F0'],
    teal: ['#00CED1', '#33D7D9', '#66E0E2', '#99E9EB', '#CCF4F5'],
    lime: ['#32CD32', '#5AD75A', '#82E082', '#ABEAAB', '#D4F5D4'],
    brown: ['#8B4513', '#A2673F', '#B9896B', '#D0AB97', '#E7CDC3'],
    gray: ['#808080', '#999999', '#B3B3B3', '#CCCCCC', '#E6E6E6'],
    black: ['#000000', '#333333', '#666666', '#999999', '#CCCCCC'],
};

var colors = {
    primary: colorPalette.blue[0],
    success: colorPalette.green[0],
    danger: colorPalette.red[0],
    info: colorPalette.blue[2],
    warning: colorPalette.yellow[0],
    neutral: colorPalette.black[0],
    white: colorPalette.gray[4],
};
var sizes = {
    small: '8px 12px',
    medium: '10px 16px',
    large: '12px 20px',
};
var inputBaseStyles = css(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  padding: ", ";\n  border: 4px solid #000000;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  color: ", ";\n  font-size: 1rem;\n  outline: none;\n  transition: box-shadow 0.2s ease-in-out;\n\n  &::placeholder {\n    color: #666666;\n    font-weight: bold;\n  }\n\n  ", "\n\n  ", "\n\n  &:focus {\n    box-shadow: 0 0 0 4px ", ";\n  }\n\n  &:hover {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  width: 100%;\n  max-width: ", ";\n  padding: ", ";\n  border: 4px solid #000000;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  color: ", ";\n  font-size: 1rem;\n  outline: none;\n  transition: box-shadow 0.2s ease-in-out;\n\n  &::placeholder {\n    color: #666666;\n    font-weight: bold;\n  }\n\n  ", "\n\n  ", "\n\n  &:focus {\n    box-shadow: 0 0 0 4px ", ";\n  }\n\n  &:hover {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size === 'small' ? '150px' : size === 'large' ? '350px' : '250px');
}, function (_a) {
    var size = _a.size;
    return (size ? sizes[size] : sizes.medium);
}, colors.neutral, function (_a) {
    var validationState = _a.validationState;
    return validationState && css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), validationState === 'success' ? colors.success : colors.danger);
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && css(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      cursor: not-allowed;\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      cursor: not-allowed;\n    "])), colorPalette.gray[3], colorPalette.gray[1]);
}, colorPalette.blue[4], colors.primary);
var InputWrapper = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n"])));
var Label = styled.label(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: ", ";\n  ", "\n"], ["\n  font-size: 1rem;\n  font-weight: bold;\n  color: ", ";\n  ", "\n"])), colors.neutral, function (_a) {
    var inlineLabel = _a.inlineLabel;
    return inlineLabel && css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    "], ["\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    "])));
});
var HelperText = styled.span(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  color: ", ";\n"], ["\n  font-size: 0.875rem;\n  color: ", ";\n"])), function (_a) {
    var validationState = _a.validationState;
    return validationState === 'error' ? colors.danger : validationState === 'success' ? colors.success : colors.info;
});
var InputField = styled.input(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), inputBaseStyles);
var IconWrapper = styled.div(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"])));
var LeadingText = styled.span(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"])), colors.neutral);
var TrailingText = styled.span(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  color: ", ";\n"])), colors.neutral);
var InputContainer = styled.div(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n"])));
var templateObject_1$6, templateObject_2$6, templateObject_3$6, templateObject_4$6, templateObject_5$4, templateObject_6$4, templateObject_7$3, templateObject_8$3, templateObject_9$3, templateObject_10$1, templateObject_11$1, templateObject_12$1;

var Input = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, onChange = _a.onChange, disabled = _a.disabled, validationState = _a.validationState, helperText = _a.helperText, required = _a.required, icon = _a.icon, autoFill = _a.autoFill, leadingText = _a.leadingText, trailingText = _a.trailingText, _d = _a.size, size = _d === void 0 ? 'medium' : _d, inlineLabel = _a.inlineLabel, className = _a.className;
    var _e = useState(value), inputValue = _e[0], setInputValue = _e[1];
    var _f = useState(false), showPassword = _f[0], setShowPassword = _f[1];
    var handleInputChange = function (e) {
        var newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(e);
        }
    };
    var togglePasswordVisibility = function () {
        setShowPassword(!showPassword);
    };
    return (React.createElement(InputWrapper, { className: className },
        label && React.createElement(Label, { inlineLabel: inlineLabel },
            label,
            " ",
            required && '*'),
        React.createElement(InputContainer, null,
            leadingText && React.createElement(LeadingText, null, leadingText),
            React.createElement(InputField, { type: type === 'password' ? (showPassword ? 'text' : 'password') : type, placeholder: placeholder, value: inputValue, onChange: handleInputChange, disabled: disabled, validationState: validationState, autoComplete: autoFill ? 'on' : 'off', size: size }),
            icon && React.createElement(IconWrapper, null, icon),
            type === 'password' && (React.createElement(IconWrapper, { onClick: togglePasswordVisibility, style: { cursor: 'pointer', color: '#000000' } }, showPassword ? React.createElement(EyeOff, { size: 20 }) : React.createElement(Eye, { size: 20 }))),
            trailingText && React.createElement(TrailingText, null, trailingText)),
        helperText && React.createElement(HelperText, { validationState: validationState }, helperText)));
};

var CheckboxContainer = styled.label(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  gap: 8px;\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  gap: 8px;\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])));
var HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n"], ["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n"])));
var StyledCheckbox = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border: 3px solid ", ";\n  background: ", ";\n  position: relative;\n  transition: all 0.2s ease;\n  box-shadow: 4px 4px 0 ", ";\n\n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  width: 24px;\n  height: 24px;\n  border: 3px solid ", ";\n  background: ", ";\n  position: relative;\n  transition: all 0.2s ease;\n  box-shadow: 4px 4px 0 ", ";\n\n  &:hover {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n\n  ", "\n"])), colorPalette.black[0], function (props) { return props.state === 'checked' ? colorPalette.black[0] : colorPalette.gray[4]; }, colorPalette.black[0], function (props) { return props.disabled ? 'none' : 'translate(-2px, -2px)'; }, function (props) { return props.disabled ? "4px 4px 0 ".concat(colorPalette.black[0]) : "6px 6px 0 ".concat(colorPalette.black[0]); }, function (props) { return props.disabled ? 'none' : 'translate(2px, 2px)'; }, function (props) { return props.disabled ? "4px 4px 0 ".concat(colorPalette.black[0]) : "2px 2px 0 ".concat(colorPalette.black[0]); }, function (props) { return props.state === 'checked' && "\n    &:after {\n      content: '';\n      position: absolute;\n      left: 6px;\n      top: 2px;\n      width: 6px;\n      height: 12px;\n      border: solid ".concat(colorPalette.gray[4], ";\n      border-width: 0 2px 2px 0;\n      transform: rotate(45deg);\n    }\n  "); }, function (props) { return props.state === 'indeterminate' && "\n    &:after {\n      content: '';\n      position: absolute;\n      left: 4px;\n      top: 8px;\n      width: 12px;\n      height: 2px;\n      background: ".concat(colorPalette.black[0], ";\n    }\n  "); });
var CheckboxLabel = styled.span(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  font-family: 'Space Mono', monospace;\n  font-size: 16px;\n  font-weight: 500;\n  color: ", ";\n\n  ", "\n"], ["\n  font-family: 'Space Mono', monospace;\n  font-size: 16px;\n  font-weight: 500;\n  color: ", ";\n\n  ", "\n"])), colorPalette.black[0], function (props) { return props.required && "\n    &:after {\n      content: '*';\n      color: ".concat(colorPalette.red[0], ";\n      margin-left: 4px;\n    }\n  "); });
var templateObject_1$5, templateObject_2$5, templateObject_3$5, templateObject_4$5;

var Checkbox = function (_a) {
    var label = _a.label, _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.indeterminate, indeterminate = _c === void 0 ? false : _c, onChange = _a.onChange, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.required, required = _e === void 0 ? false : _e, className = _a.className;
    var getCheckboxState = useCallback(function () {
        if (indeterminate)
            return 'indeterminate';
        return checked ? 'checked' : 'unchecked';
    }, [checked, indeterminate]);
    var handleChange = function (event) {
        if (!disabled) {
            onChange(event.target.checked);
        }
    };
    return (React.createElement(CheckboxContainer, { className: className, "aria-disabled": disabled },
        React.createElement(HiddenCheckbox, { checked: checked, disabled: disabled, onChange: handleChange, required: required }),
        React.createElement(StyledCheckbox, { state: getCheckboxState(), disabled: disabled }),
        React.createElement(CheckboxLabel, { required: required }, label)));
};

var TableContainer = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: 16px;\n  background: #ffffff;\n  font-family: system-ui, -apple-system, sans-serif;\n  box-shadow: 0 1px 3px ", ";\n"], ["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: 16px;\n  background: #ffffff;\n  font-family: system-ui, -apple-system, sans-serif;\n  box-shadow: 0 1px 3px ", ";\n"])), colorPalette.gray[3], colorPalette.black[4]);
var Table = styled.table(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n"])));
var TableHeader = styled.thead(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  background: ", ";\n  border-bottom: 1px solid ", ";\n"])), colorPalette.gray[4], colorPalette.gray[3]);
var TableHeaderCell = styled.th(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: ", ";\n  font-size: 14px;\n  width: ", ";\n  \n  ", "\n"], ["\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: ", ";\n  font-size: 14px;\n  width: ", ";\n  \n  ", "\n"])), colorPalette.gray[1], function (props) { return props.width || 'auto'; }, function (props) { return props.sortable && "\n    cursor: pointer;\n    user-select: none;\n    \n    &:hover {\n      background: ".concat(colorPalette.gray[3], ";\n    }\n    \n    &:after {\n      content: '").concat(props.sortDirection === 'asc' ? '↑' : props.sortDirection === 'desc' ? '↓' : '', "';\n      margin-left: 8px;\n      opacity: 0.5;\n    }\n  "); });
var TableBody = styled.tbody(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  tr:nth-child(even) {\n    background: ", ";\n  }\n"], ["\n  tr:nth-child(even) {\n    background: ", ";\n  }\n"])), colorPalette.gray[4]);
var TableRow = styled.tr(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  transition: background-color 0.2s;\n\n  ", "\n\n  ", "\n"], ["\n  border-bottom: 1px solid ", ";\n  transition: background-color 0.2s;\n\n  ", "\n\n  ", "\n"])), colorPalette.gray[3], function (props) { return props.selectable && "\n    cursor: pointer;\n    \n    &:hover {\n      background: ".concat(colorPalette.gray[3], ";\n    }\n  "); }, function (props) { return props.selected && "\n    background: ".concat(colorPalette.blue[4], " !important;\n  "); });
var TableCell = styled.td(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  padding: 12px 16px;\n  font-size: 14px;\n  color: ", ";\n"], ["\n  padding: 12px 16px;\n  font-size: 14px;\n  color: ", ";\n"])), colorPalette.black[1]);
styled.div(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 8px 0;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  padding: 8px 0;\n"])));
styled.button(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  padding: 6px 12px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: 6px 12px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), function (props) { return props.active ? colorPalette.blue[0] : colorPalette.gray[3]; }, function (props) { return props.active ? colorPalette.blue[0] : '#ffffff'; }, function (props) { return props.active ? '#ffffff' : colorPalette.gray[1]; }, function (props) { return props.active ? colorPalette.blue[1] : colorPalette.gray[4]; });
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$4, templateObject_5$3, templateObject_6$3, templateObject_7$2, templateObject_8$2, templateObject_9$2;

var DataTableRow = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, selectable = _a.selectable, onSelect = _a.onSelect, rowStyle = _a.rowStyle, rowClassName = _a.rowClassName, selected = _a.selected;
    return (React.createElement(TableRow, { style: rowStyle, className: rowClassName, selectable: selectable, selected: selected },
        selectable && (React.createElement(TableCell, null,
            React.createElement(Checkbox, { label: "Select", onChange: function (checked) { return onSelect === null || onSelect === void 0 ? void 0 : onSelect(checked); }, checked: selected }))),
        columns.map(function (column) { return (React.createElement(TableCell, { key: column.accessor, style: column.cellStyle, className: column.cellClassName }, column.cellRenderer
            ? column.cellRenderer(rowData[column.accessor])
            : rowData[column.accessor])); })));
};
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns, onRowSelect = _a.onRowSelect, _b = _a.selectable, selectable = _b === void 0 ? false : _b, _c = _a.rowsPerPage, rowsPerPage = _c === void 0 ? 10 : _c, className = _a.className, onSort = _a.onSort;
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(''), sortColumn = _e[0], setSortColumn = _e[1];
    var _f = useState('asc'), sortDirection = _f[0], setSortDirection = _f[1];
    var _g = useState(1), currentPage = _g[0]; _g[1];
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
    return (React.createElement(TableContainer, { className: className },
        React.createElement(Table, null,
            React.createElement(TableHeader, null,
                React.createElement("tr", null,
                    selectable && (React.createElement(TableHeaderCell, null,
                        React.createElement(Checkbox, { label: "Select", onChange: function (checked) {
                                var newSelection = checked ? __spreadArray([], data, true) : [];
                                setSelectedRows(newSelection);
                                onRowSelect === null || onRowSelect === void 0 ? void 0 : onRowSelect(newSelection);
                            }, indeterminate: selectedRows.length > 0 && selectedRows.length < data.length, checked: selectedRows.length === data.length }))),
                    columns.map(function (column) { return (React.createElement(TableHeaderCell, { key: column.accessor, sortable: column.sortable, sortDirection: sortColumn === column.accessor ? sortDirection : undefined, width: column.width, onClick: function () { return column.sortable && handleSort(column.accessor); } }, column.header)); }))),
            React.createElement(TableBody, null, currentData.map(function (row, index) { return (React.createElement(DataTableRow, { key: index, rowData: row, columns: columns, selectable: selectable, onSelect: function (selected) { return handleRowSelect(row, selected); }, selected: selectedRows.includes(row), rowStyle: undefined, rowClassName: undefined })); })))));
};

var DialogOverlay = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])), function (props) { return props.isOpen ? 'flex' : 'none'; });
var DialogContainer = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  background: ", ";\n  border: 3px solid ", ";\n  box-shadow: 8px 8px 0px ", ";\n  min-width: ", ";\n  min-height: ", ";\n  max-width: 90vw;\n  max-height: 90vh;\n  width: ", ";\n  position: relative;\n  cursor: ", ";\n  transform: ", ";\n\n  &:active {\n    box-shadow: 4px 4px 0px ", ";\n    transform: translate(4px, 4px) ", ";\n  }\n"], ["\n  background: ", ";\n  border: 3px solid ", ";\n  box-shadow: 8px 8px 0px ", ";\n  min-width: ", ";\n  min-height: ", ";\n  max-width: 90vw;\n  max-height: 90vh;\n  width: ", ";\n  position: relative;\n  cursor: ", ";\n  transform: ", ";\n\n  &:active {\n    box-shadow: 4px 4px 0px ", ";\n    transform: translate(4px, 4px) ", ";\n  }\n"])), colorPalette.gray[4], colorPalette.black[0], colorPalette.black[0], function (props) { return props.minWidth ? "".concat(props.minWidth, "px") : '320px'; }, function (props) { return props.minHeight ? "".concat(props.minHeight, "px") : '200px'; }, function (props) {
    switch (props.size) {
        case 'small': return '400px';
        case 'large': return '800px';
        default: return '600px';
    }
}, function (props) { return props.draggable ? 'move' : 'default'; }, function (props) { return props.isCritical ? 'rotate(-1deg)' : 'none'; }, colorPalette.black[0], function (props) { return props.isCritical ? 'rotate(-1deg)' : ''; });
var DialogHeader = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  padding: 16px 24px;\n  border-bottom: 3px solid ", ";\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: 16px 24px;\n  border-bottom: 3px solid ", ";\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])), colorPalette.black[0], function (props) { return props.isCritical ? colorPalette.red[0] : colorPalette.gray[4]; });
var DialogTitle = styled.h2(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: 'NeoBrutQa', sans-serif;\n  color: ", ";\n"], ["\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  font-family: 'NeoBrutQa', sans-serif;\n  color: ", ";\n"])), colorPalette.black[0]);
var DialogContent = styled.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  padding: 24px;\n  overflow-y: auto;\n  max-height: calc(90vh - 180px);\n"], ["\n  padding: 24px;\n  overflow-y: auto;\n  max-height: calc(90vh - 180px);\n"])));
var DialogFooter = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  padding: 16px 24px;\n  border-top: 3px solid ", ";\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: ", ";\n"], ["\n  padding: 16px 24px;\n  border-top: 3px solid ", ";\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: ", ";\n"])), colorPalette.black[0], colorPalette.gray[4]);
var DialogButton = styled.button(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  padding: 8px 16px;\n  border: 3px solid ", ";\n  background: ", ";\n  color: ", ";\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: 14px;\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px ", ";\n  transition: transform 0.1s, box-shadow 0.1s;\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"], ["\n  padding: 8px 16px;\n  border: 3px solid ", ";\n  background: ", ";\n  color: ", ";\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: 14px;\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px ", ";\n  transition: transform 0.1s, box-shadow 0.1s;\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"])), colorPalette.black[0], function (props) {
    switch (props.variant) {
        case 'primary': return colorPalette.green[0];
        case 'secondary': return colorPalette.blue[0];
        case 'tertiary': return colorPalette.yellow[0];
    }
}, colorPalette.black[0], function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; }, colorPalette.black[0]);
var CloseButton = styled.button(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 32px;\n  height: 32px;\n  border: 3px solid ", ";\n  background: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 2px 2px 0px ", ";\n\n  &:active {\n    transform: translate(2px, 2px);\n    box-shadow: none;\n  }\n"], ["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 32px;\n  height: 32px;\n  border: 3px solid ", ";\n  background: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: 2px 2px 0px ", ";\n\n  &:active {\n    transform: translate(2px, 2px);\n    box-shadow: none;\n  }\n"])), colorPalette.black[0], colorPalette.red[0], colorPalette.black[0]);
var DialogImage = styled.img(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  border: 3px solid ", ";\n"], ["\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  border: 3px solid ", ";\n"])), colorPalette.black[0]);
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3, templateObject_5$2, templateObject_6$2, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var Dialog = function (_a) {
    var title = _a.title, content = _a.content, isOpen = _a.isOpen, onClose = _a.onClose, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, tertiaryAction = _a.tertiaryAction, _b = _a.size, size = _b === void 0 ? 'medium' : _b; _a.overlay; var className = _a.className, isCritical = _a.isCritical, image = _a.image, onOpen = _a.onOpen, _d = _a.closeOnOverlayClick, closeOnOverlayClick = _d === void 0 ? true : _d, customFooter = _a.customFooter, customHeader = _a.customHeader, _e = _a.draggable, draggable = _e === void 0 ? false : _e, _f = _a.minWidth, minWidth = _f === void 0 ? 300 : _f, _g = _a.minHeight, minHeight = _g === void 0 ? 200 : _g, style = _a.style, overlayStyle = _a.overlayStyle, headerStyle = _a.headerStyle, contentStyle = _a.contentStyle, footerStyle = _a.footerStyle;
    var _h = useState({ x: 0, y: 0 }), position = _h[0], setPosition = _h[1];
    var dialogRef = useRef(null);
    var isDragging = useRef(false);
    var dragOffset = useRef({ x: 0, y: 0 });
    useEffect(function () {
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
    useEffect(function () {
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
    return (React.createElement(DialogOverlay, { isOpen: isOpen, onClick: handleOverlayClick, style: overlayStyle },
        React.createElement(DialogContainer, { ref: dialogRef, className: className, size: size, draggable: draggable, minWidth: minWidth, minHeight: minHeight, isCritical: isCritical, style: __assign(__assign({}, (draggable ? {
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: isDragging.current ? 'grabbing' : 'grab'
            } : {})), style) },
            React.createElement("div", { onMouseDown: handleMouseDown }, customHeader || (React.createElement(DialogHeader, { isCritical: isCritical, style: headerStyle },
                React.createElement(DialogTitle, null, title),
                React.createElement(CloseButton, { onClick: onClose }, "\u00D7")))),
            React.createElement(DialogContent, { style: contentStyle },
                image && React.createElement(DialogImage, { src: image, alt: "Dialog" }),
                content),
            (primaryAction || secondaryAction || tertiaryAction || customFooter) && (React.createElement(DialogFooter, { style: footerStyle }, customFooter || (React.createElement(React.Fragment, null,
                tertiaryAction && (React.createElement(DialogButton, { variant: "tertiary", onClick: tertiaryAction.onClick, disabled: tertiaryAction.disabled },
                    tertiaryAction.icon,
                    tertiaryAction.text)),
                secondaryAction && (React.createElement(DialogButton, { variant: "secondary", onClick: secondaryAction.onClick, disabled: secondaryAction.disabled },
                    secondaryAction.icon,
                    secondaryAction.text)),
                primaryAction && (React.createElement(DialogButton, { variant: "primary", onClick: primaryAction.onClick, disabled: primaryAction.disabled },
                    primaryAction.icon,
                    primaryAction.text)))))))));
};

var DropdownContainer = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var DropdownButton = styled.button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  padding: ", ";\n  border: 3px solid ", ";\n  background: ", ";\n  color: ", ";\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px ", ";\n  transition: transform 0.1s, box-shadow 0.1s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transform: ", ";\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"], ["\n  padding: ", ";\n  border: 3px solid ", ";\n  background: ", ";\n  color: ", ";\n  font-family: 'NeoBrutQa', sans-serif;\n  font-size: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  box-shadow: 4px 4px 0px ", ";\n  transition: transform 0.1s, box-shadow 0.1s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transform: ", ";\n\n  &:active:not(:disabled) {\n    transform: translate(4px, 4px);\n    box-shadow: none;\n  }\n\n  &:hover:not(:disabled) {\n    filter: brightness(110%);\n  }\n"])), function (props) {
    switch (props.size) {
        case 'small': return '6px 12px';
        case 'large': return '12px 24px';
        default: return '8px 16px';
    }
}, colorPalette.black[0], function (props) {
    switch (props.kind) {
        case 'neutral': return colorPalette.gray[3];
        case 'success': return colorPalette.green[0];
        case 'danger': return colorPalette.red[0];
        default: return colorPalette.blue[0];
    }
}, colorPalette.black[0], function (props) { return props.size === 'large' ? '16px' : '14px'; }, function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; }, colorPalette.black[0], function (props) { return props.isActive ? 'translate(4px, 4px)' : 'none'; });
var DropdownContent = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  background: ", ";\n  border: 3px solid ", ";\n  box-shadow: 8px 8px 0px ", ";\n  display: ", ";\n  z-index: 1000;\n  max-height: ", ";\n  overflow-y: auto;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  background: ", ";\n  border: 3px solid ", ";\n  box-shadow: 8px 8px 0px ", ";\n  display: ", ";\n  z-index: 1000;\n  max-height: ", ";\n  overflow-y: auto;\n"])), colorPalette.gray[4], colorPalette.black[0], colorPalette.black[0], function (props) { return props.isOpen ? 'block' : 'none'; }, function (props) { return props.maxHeight ? "".concat(props.maxHeight, "px") : '300px'; });
var DropdownItem = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 8px 16px;\n  cursor: ", ";\n  opacity: ", ";\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    background-color: ", ";\n  }\n"], ["\n  padding: 8px 16px;\n  cursor: ", ";\n  opacity: ", ";\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    background-color: ", ";\n  }\n"])), function (props) { return props.disabled ? 'not-allowed' : 'pointer'; }, function (props) { return props.disabled ? 0.5 : 1; }, colorPalette.gray[3], colorPalette.gray[2]);
var DropdownFooter = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  padding: 8px 16px;\n  border-top: 3px solid ", ";\n  background: ", ";\n"], ["\n  padding: 8px 16px;\n  border-top: 3px solid ", ";\n  background: ", ";\n"])), colorPalette.black[0], colorPalette.gray[4]);
styled.span(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$1, templateObject_6$1;

var Dropdown = function (_a) {
    var label = _a.label, items = _a.items, _b = _a.kind, kind = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e, onToggle = _a.onToggle, className = _a.className, buttonIcon = _a.buttonIcon, _f = _a.isActive, isActive = _f === void 0 ? false : _f, _g = _a.closeOnOutsideClick, closeOnOutsideClick = _g === void 0 ? true : _g, maxHeight = _a.maxHeight, customFooter = _a.customFooter, style = _a.style, buttonStyle = _a.buttonStyle, contentStyle = _a.contentStyle, footerStyle = _a.footerStyle;
    var dropdownRef = useRef(null);
    useEffect(function () {
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
    return (React.createElement(DropdownContainer, { ref: dropdownRef, className: className, style: style },
        React.createElement(DropdownButton, { onClick: function () { return !disabled && onToggle(); }, disabled: disabled, kind: kind, size: size, isActive: isActive, style: buttonStyle },
            buttonIcon,
            label),
        React.createElement(DropdownContent, { isOpen: isOpen, maxHeight: maxHeight, style: contentStyle },
            items.map(function (item, index) { return (React.createElement(DropdownItem, { key: index, onClick: function () { return !item.disabled && item.onSelect(); }, disabled: item.disabled, style: item.style },
                item.icon,
                item.text)); }),
            customFooter && (React.createElement(DropdownFooter, { style: footerStyle }, customFooter)))));
};

var variantStyles = {
    default: css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    background-color: white;\n    color: ", ";\n  "], ["\n    background-color: white;\n    color: ", ";\n  "])), colorPalette.black[0]),
    success: css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    background-color: ", ";\n color: ", ";\n    border-left: 10px solid ", ";\n  "], ["\n    background-color: ", ";\n color: ", ";\n    border-left: 10px solid ", ";\n  "])), colorPalette.green[2], colorPalette.black[0], colorPalette.green[0]),
    error: css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "], ["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "])), colorPalette.red[0], colorPalette.red[0]),
    warning: css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    border-left: 10px solid ", ";\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    border-left: 10px solid ", ";\n  "])), colorPalette.yellow[2], colorPalette.black[0], colorPalette.yellow[0]),
    info: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "], ["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "])), colorPalette.blue[0], colorPalette.blue[0]),
    custom: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "], ["\n    background-color: ", ";\n    color: white;\n    border-left: 10px solid ", ";\n  "])), colorPalette.purple[0], colorPalette.purple[0])
};
var NotificationWrapper = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: ", ";\n  max-width: 28rem;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 2px solid #000000;\n  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: ", ";\n  ", "\n  ", ";\n  ", "\n"], ["\n  width: ", ";\n  max-width: 28rem;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 2px solid #000000;\n  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: ", ";\n  ", "\n  ", ";\n  ", "\n"])), function (props) { return props.width || '100%'; }, function (props) { return props.alwaysOnTop ? 9999 : 1000; }, function (props) {
    switch (props.position) {
        case 'top-left':
            return 'top: 1rem; left: 1rem;';
        case 'top-right':
            return 'top: 1rem; right: 1rem;';
        case 'bottom-left':
            return 'bottom: 1rem; left: 1rem;';
        case 'bottom-right':
            return 'bottom: 1rem; right: 1rem;';
        case 'center':
            return 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
        default:
            return 'top: 1rem; right: 1rem;';
    }
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b;
    return variantStyles[variant];
}, function (props) {
    switch (props.animationType) {
        case 'fade':
            return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          animation: fade ", "s ease-in-out;\n          @keyframes fade {\n            0% { opacity: 0; }\n            100% { opacity: 1; }\n          }\n        "], ["\n          animation: fade ", "s ease-in-out;\n          @keyframes fade {\n            0% { opacity: 0; }\n            100% { opacity: 1; }\n          }\n        "])), props.duration);
        case 'slide':
            return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          animation: slide ", "s ease-in-out;\n          @keyframes slide {\n            0% { transform: translateY(-100%); }\n            100% { transform: translateY(0); }\n          }\n        "], ["\n          animation: slide ", "s ease-in-out;\n          @keyframes slide {\n            0% { transform: translateY(-100%); }\n            100% { transform: translateY(0); }\n          }\n        "])), props.duration);
        case 'zoom':
            return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n          animation: zoom ", "s ease-in-out;\n          @keyframes zoom {\n            0% { transform: scale(0); }\n            100% { transform: scale(1); }\n          }\n        "], ["\n          animation: zoom ", "s ease-in-out;\n          @keyframes zoom {\n            0% { transform: scale(0); }\n            100% { transform: scale(1); }\n          }\n        "])), props.duration);
        default:
            return '';
    }
});
var NotificationHeader = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-weight: 900;\n  font-size: 1.5rem;\n  gap: 0.5rem;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  position: relative;\n  padding-top: 1rem;\n  text-align: center;\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: 900;\n  font-size: 1.5rem;\n  gap: 0.5rem;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  position: relative;\n  padding-top: 1rem;\n  text-align: center;\n"])));
var NotificationCloseButton = styled.button(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1.25rem;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  position: absolute;\n  top: 0;\n  right: 0;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &:focus {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1.25rem;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  position: absolute;\n  top: 0;\n  right: 0;\n  \n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &:focus {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n"])));
var NotificationContent = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto 0;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 900;\n  padding: 0 1rem;\n\n  h3 {\n    font-size: 1.5rem;\n    font-weight: 900;\n  }\n\n  p {\n    font-size: 1.25rem;\n    line-height: 1.5;\n    font-weight: 700;\n    text-align: center;\n  }\n\n  span {\n    font-size: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: auto 0;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 900;\n  padding: 0 1rem;\n\n  h3 {\n    font-size: 1.5rem;\n    font-weight: 900;\n  }\n\n  p {\n    font-size: 1.25rem;\n    line-height: 1.5;\n    font-weight: 700;\n    text-align: center;\n  }\n\n  span {\n    font-size: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])));
var NotificationActions = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n"], ["\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n"])));
var NotificationButton = styled.button(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  padding: 0.5rem 1rem;\n  border: 2px solid #000000;\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  transition: all 0.2s ease;\n\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: 0.5rem 1rem;\n  border: 2px solid #000000;\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  transition: all 0.2s ease;\n\n  ", "\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])), function (props) {
    switch (props.variant) {
        case 'accept':
            return css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n          background-color: #4ADE80;\n          color: #000000;\n          &:hover {\n            background-color: #22C55E;\n          }\n        "], ["\n          background-color: #4ADE80;\n          color: #000000;\n          &:hover {\n            background-color: #22C55E;\n          }\n        "])));
        case 'reject':
            return css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n          background-color: #EF4444;\n          color: #FFFFFF;\n          &:hover {\n            background-color: #DC2626;\n          }\n        "], ["\n          background-color: #EF4444;\n          color: #FFFFFF;\n          &:hover {\n            background-color: #DC2626;\n          }\n        "])));
        default:
            return css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n          background-color: #E5E7EB;\n          color: #000000;\n          &:hover {\n            background-color: #D1D5DB;\n          }\n        "], ["\n          background-color: #E5E7EB;\n          color: #000000;\n          &:hover {\n            background-color: #D1D5DB;\n          }\n        "])));
    }
});
var CountdownBar = styled.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 4px;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background-color: currentColor;\n    animation: countdown ", "s linear forwards;\n  }\n\n  @keyframes countdown {\n    from {\n      width: 100%;\n    }\n    to {\n      width: 0%;\n    }\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 4px;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background-color: currentColor;\n    animation: countdown ", "s linear forwards;\n  }\n\n  @keyframes countdown {\n    from {\n      width: 100%;\n    }\n    to {\n      width: 0%;\n    }\n  }\n"])), function (props) { return props.duration; });
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;

var Notification = function (_a) {
    var title = _a.title, message = _a.message, _b = _a.variant, variant = _b === void 0 ? 'info' : _b, _c = _a.isTemporary, isTemporary = _c === void 0 ? true : _c, _d = _a.duration, duration = _d === void 0 ? 3 : _d, onDismiss = _a.onDismiss, onAction = _a.onAction, _e = _a.actions, actions = _e === void 0 ? [] : _e, _f = _a.position, position = _f === void 0 ? 'top-right' : _f, _g = _a.hasCountdown, hasCountdown = _g === void 0 ? false : _g, _h = _a.dismissibleBySwipe, dismissibleBySwipe = _h === void 0 ? false : _h, className = _a.className; _a.stackable; var accessibility = _a.accessibility, icon = _a.icon, _k = _a.alwaysOnTop, alwaysOnTop = _k === void 0 ? false : _k, _l = _a.animationType, animationType = _l === void 0 ? 'fade' : _l, _m = _a.delay, delay = _m === void 0 ? 0 : _m, width = _a.width;
    var notificationRef = useRef(null);
    var _o = useState(true), isVisible = _o[0], setIsVisible = _o[1];
    var handleClose = function () {
        setIsVisible(false);
        if (onDismiss) {
            onDismiss();
        }
    };
    var getVariantIcon = function () {
        switch (variant) {
            case 'error':
                return React.createElement(AlertCircle, { size: 24 });
            case 'success':
                return React.createElement(CheckCircle2, { size: 24 });
            case 'warning':
                return React.createElement(AlertTriangle, { size: 24 });
            case 'info':
                return React.createElement(Info, { size: 24 });
            case 'custom':
                return React.createElement(Settings, { size: 24 });
            default:
                return null;
        }
    };
    useEffect(function () {
        var timeoutId;
        if (isTemporary) {
            timeoutId = setTimeout(function () {
                handleClose();
            }, (duration + delay) * 1000);
        }
        return function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isTemporary, duration, delay]);
    useEffect(function () {
        if (dismissibleBySwipe && notificationRef.current) {
            var handleSwipe_1 = function (event) {
                var touch = event.changedTouches[0];
                if (touch.clientY < notificationRef.current.getBoundingClientRect().top) {
                    handleClose();
                }
            };
            var element_1 = notificationRef.current;
            element_1.addEventListener('touchend', handleSwipe_1);
            return function () {
                element_1.removeEventListener('touchend', handleSwipe_1);
            };
        }
    }, [dismissibleBySwipe]);
    if (!isVisible) {
        return null;
    }
    return (React.createElement(NotificationWrapper, { ref: notificationRef, variant: variant, position: position, alwaysOnTop: alwaysOnTop, animationType: animationType, className: className, width: width, duration: duration, title: title, message: message },
        React.createElement(NotificationHeader, null,
            icon ? React.createElement("span", null, icon) : React.createElement("span", null, getVariantIcon()),
            React.createElement("span", { style: {
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    width: '100%'
                } }, title),
            React.createElement(NotificationCloseButton, { onClick: handleClose, "aria-label": (accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLabel) || 'Close notification', "aria-live": (accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLive) || 'polite' },
                React.createElement(X, { size: 20 }))),
        React.createElement(NotificationContent, null, message),
        actions.length > 0 && (React.createElement(NotificationActions, null, actions.map(function (action, index) { return (React.createElement(NotificationButton, { key: index, onClick: function () { return onAction && onAction(action.action); }, disabled: action.disabled, variant: action.variant },
            action.icon && React.createElement("span", null, action.icon),
            action.label)); }))),
        hasCountdown && isTemporary && React.createElement(CountdownBar, { duration: duration })));
};

var PopoverVariants = {
    default: {
        bgColor: 'white',
        textColor: colorPalette.black[0],
        borderColor: colorPalette.black[0]
    },
    primary: {
        bgColor: colorPalette.blue[4],
        textColor: 'white',
        borderColor: colorPalette.black[0]
    },
    secondary: {
        bgColor: colorPalette.purple[0],
        textColor: 'white',
        borderColor: colorPalette.black[0]
    },
    success: {
        bgColor: colorPalette.green[0],
        textColor: colorPalette.black[0],
        borderColor: colorPalette.black[0]
    },
    warning: {
        bgColor: colorPalette.yellow[0],
        textColor: colorPalette.black[0],
        borderColor: colorPalette.black[0]
    },
    danger: {
        bgColor: colorPalette.red[0],
        textColor: 'white',
        borderColor: colorPalette.black[0]
    }
};
var PopoverWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var TriggerWrapper = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  transition: all 0.2s;\n  cursor: pointer;\n  background: white;\n  color: black;\n  font-size: 1rem;\n  border: none;\n"], ["\n  font-weight: bold;\n  transition: all 0.2s;\n  cursor: pointer;\n  background: white;\n  color: black;\n  font-size: 1rem;\n  border: none;\n"])));
var PopoverContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: ", ";\n  min-width: 200px;\n  max-width: 28rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: bold;\n  background: ", ";\n  color: ", ";\n  border: 4px solid ", ";\n  padding: 1rem;\n  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);\n\n  ", "\n\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 0.5rem;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: bold;\n    }\n  }\n\n  .content {\n    font-size: 1rem;\n    line-height: 1.5;\n  }\n"], ["\n  position: absolute;\n  z-index: ", ";\n  min-width: 200px;\n  max-width: 28rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: bold;\n  background: ", ";\n  color: ", ";\n  border: 4px solid ", ";\n  padding: 1rem;\n  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);\n\n  ", "\n\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 0.5rem;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: bold;\n    }\n  }\n\n  .content {\n    font-size: 1rem;\n    line-height: 1.5;\n  }\n"])), function (props) { return props.zIndex || 1000; }, function (props) { return props.variant ? PopoverVariants[props.variant].bgColor : 'white'; }, function (props) { return props.variant ? PopoverVariants[props.variant].textColor : 'black'; }, function (props) { return props.variant ? PopoverVariants[props.variant].borderColor : 'black'; }, function (props) {
    switch (props.position) {
        case 'top':
            return "\n          bottom: 100%;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
        case 'bottom':
            return "\n          top: 100%;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
        case 'left':
            return "\n          right: 100%;\n          top: 50%;\n          transform: translateY(-50%);\n        ";
        case 'right':
            return "\n          left: 100%;\n          top: 50%;\n          transform: translateY(-50%);\n        ";
        default:
            return "\n          top: 100%;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
    }
});
var PopoverCloseButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 2px solid currentColor;\n  border-radius: 4px;\n  color: inherit;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background: currentColor;\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px currentColor;\n  }\n"], ["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 2px solid currentColor;\n  border-radius: 4px;\n  color: inherit;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background: currentColor;\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px currentColor;\n  }\n"])), function (props) { return props.variant ? PopoverVariants[props.variant].bgColor : 'white'; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var Popover = function (_a) {
    var content = _a.content, controlledIsOpen = _a.isOpen, triggerElement = _a.triggerElement, _b = _a.position, position = _b === void 0 ? 'auto' : _b; _a.alignment; var onOpen = _a.onOpen, onClose = _a.onClose, _d = _a.closeOnOutsideClick, closeOnOutsideClick = _d === void 0 ? true : _d, className = _a.className; _a.autoAdjust; var accessibility = _a.accessibility; _a.hasArrow; _a.delay; var width = _a.width, height = _a.height, _h = _a.dismissibleByEscape, dismissibleByEscape = _h === void 0 ? true : _h, _j = _a.animationType, animationType = _j === void 0 ? 'fade' : _j; _a.sticky; var maxHeight = _a.maxHeight; _a.triggerInteraction; _a.offset; var zIndex = _a.zIndex; _a.isNested; var variant = _a.variant, bgColor = _a.bgColor, textColor = _a.textColor, borderColor = _a.borderColor;
    var _p = useState(false), internalIsOpen = _p[0], setInternalIsOpen = _p[1];
    var isOpen = controlledIsOpen !== null && controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
    var popoverRef = useRef(null);
    var triggerRef = useRef(null);
    var handleTriggerClick = function () {
        setInternalIsOpen(!isOpen);
    };
    var handleClose = function () {
        setInternalIsOpen(false);
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    useEffect(function () {
        if (isOpen) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
        else {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, [isOpen, onOpen, onClose]);
    useEffect(function () {
        if (dismissibleByEscape) {
            var handleEscapeKey_1 = function (event) {
                if (event.key === 'Escape' && isOpen) {
                    setInternalIsOpen(false);
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                }
            };
            document.addEventListener('keydown', handleEscapeKey_1);
            return function () {
                document.removeEventListener('keydown', handleEscapeKey_1);
            };
        }
    }, [dismissibleByEscape, isOpen, onClose]);
    useEffect(function () {
        if (closeOnOutsideClick && isOpen) {
            var handleClickOutside_1 = function (event) {
                if (popoverRef.current &&
                    !popoverRef.current.contains(event.target) &&
                    triggerRef.current &&
                    !triggerRef.current.contains(event.target)) {
                    setInternalIsOpen(false);
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                }
            };
            document.addEventListener('mousedown', handleClickOutside_1);
            return function () {
                document.removeEventListener('mousedown', handleClickOutside_1);
            };
        }
    }, [closeOnOutsideClick, isOpen, onClose]);
    return (React.createElement(PopoverWrapper, null,
        React.createElement(TriggerWrapper, { ref: triggerRef, onClick: handleTriggerClick }, triggerElement),
        isOpen && (React.createElement(PopoverContent, { ref: popoverRef, className: className, role: "dialog", "aria-label": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLabel, "aria-describedby": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaDescribedBy, "aria-live": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLive, position: position, width: width, height: height, maxHeight: maxHeight, zIndex: zIndex, animationType: animationType, variant: variant, bgColor: bgColor, textColor: textColor, borderColor: borderColor },
            React.createElement(PopoverCloseButton, { onClick: handleClose, "aria-label": "Close popover" },
                React.createElement(X, { size: 16 })),
            content))));
};

export { Button, Checkbox, DataTable as Datatable, Dialog, Dropdown, Input, Notification, Popover };
//# sourceMappingURL=index.esm.js.map
