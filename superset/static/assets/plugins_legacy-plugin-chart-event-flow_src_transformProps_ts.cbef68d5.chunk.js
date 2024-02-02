"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([["plugins_legacy-plugin-chart-event-flow_src_transformProps_ts"],{

/***/ "./plugins/legacy-plugin-chart-event-flow/src/transformProps.ts":
/*!**********************************************************************!*\
  !*** ./plugins/legacy-plugin-chart-event-flow/src/transformProps.ts ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transformProps)\n/* harmony export */ });\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-ui/event-flow */ \"./node_modules/@data-ui/event-flow/build/index.js\");\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};\nfunction transformProps(chartProps) {\n  const { formData, queriesData, width, height } = chartProps;\n  const { allColumnsX, entity, minLeafNodeEventCount } = formData;\n  const { data } = queriesData[0];\n  const hasData = data && data.length > 0;\n  if (hasData) {\n    const userKey = entity;\n    const eventNameKey = allColumnsX;\n    // map from the Superset form fields to <EventFlow />'s expected data keys\n    const accessorFunctions = {\n      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__.ENTITY_ID]: (datum) => String(datum[userKey]),\n      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAME]: (datum) => datum[eventNameKey],\n      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__.TS]: (datum) =>\n      // eslint-disable-next-line no-underscore-dangle\n      datum.__timestamp || datum.__timestamp === 0 ?\n      // eslint-disable-next-line no-underscore-dangle\n      new Date(datum.__timestamp) :\n      null };\n\n    const cleanData = (0,_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__.cleanEvents)(data, accessorFunctions);\n    return {\n      data: cleanData,\n      height,\n      initialMinEventCount: minLeafNodeEventCount,\n      width };\n\n  }\n  return { data: null, height, width };\n};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(transformProps, \"transformProps\", \"/app/superset-frontend/plugins/legacy-plugin-chart-event-flow/src/transformProps.ts\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2xlZ2FjeS1wbHVnaW4tY2hhcnQtZXZlbnQtZmxvdy9zcmMvdHJhbnNmb3JtUHJvcHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW1CQTtBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJzZXQvLi9wbHVnaW5zL2xlZ2FjeS1wbHVnaW4tY2hhcnQtZXZlbnQtZmxvdy9zcmMvdHJhbnNmb3JtUHJvcHMudHM/NDQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDaGFydFByb3BzLCBUaW1lc2VyaWVzRGF0YVJlY29yZCB9IGZyb20gJ0BzdXBlcnNldC11aS9jb3JlJztcbmltcG9ydCB7IGNsZWFuRXZlbnRzLCBUUywgRVZFTlRfTkFNRSwgRU5USVRZX0lEIH0gZnJvbSAnQGRhdGEtdWkvZXZlbnQtZmxvdyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRGbG93Rm9ybURhdGEge1xuICBhbGxDb2x1bW5zWDogc3RyaW5nO1xuICBlbnRpdHk6IHN0cmluZztcbiAgbWluTGVhZk5vZGVFdmVudENvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRGbG93Q2hhcnRQcm9wcyBleHRlbmRzIENoYXJ0UHJvcHMge1xuICBmb3JtRGF0YTogRXZlbnRGbG93Rm9ybURhdGE7XG4gIHF1ZXJpZXNEYXRhOiB7XG4gICAgZGF0YTogVGltZXNlcmllc0RhdGFSZWNvcmRbXTtcbiAgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1Qcm9wcyhjaGFydFByb3BzOiBDaGFydFByb3BzKSB7XG4gIGNvbnN0IHsgZm9ybURhdGEsIHF1ZXJpZXNEYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPVxuICAgIGNoYXJ0UHJvcHMgYXMgRXZlbnRGbG93Q2hhcnRQcm9wcztcbiAgY29uc3QgeyBhbGxDb2x1bW5zWCwgZW50aXR5LCBtaW5MZWFmTm9kZUV2ZW50Q291bnQgfSA9IGZvcm1EYXRhO1xuICBjb25zdCB7IGRhdGEgfSA9IHF1ZXJpZXNEYXRhWzBdO1xuXG4gIGNvbnN0IGhhc0RhdGEgPSBkYXRhICYmIGRhdGEubGVuZ3RoID4gMDtcbiAgaWYgKGhhc0RhdGEpIHtcbiAgICBjb25zdCB1c2VyS2V5ID0gZW50aXR5O1xuICAgIGNvbnN0IGV2ZW50TmFtZUtleSA9IGFsbENvbHVtbnNYO1xuXG4gICAgLy8gbWFwIGZyb20gdGhlIFN1cGVyc2V0IGZvcm0gZmllbGRzIHRvIDxFdmVudEZsb3cgLz4ncyBleHBlY3RlZCBkYXRhIGtleXNcbiAgICBjb25zdCBhY2Nlc3NvckZ1bmN0aW9ucyA9IHtcbiAgICAgIFtFTlRJVFlfSURdOiAoZGF0dW06IFRpbWVzZXJpZXNEYXRhUmVjb3JkKSA9PiBTdHJpbmcoZGF0dW1bdXNlcktleV0pLFxuICAgICAgW0VWRU5UX05BTUVdOiAoZGF0dW06IFRpbWVzZXJpZXNEYXRhUmVjb3JkKSA9PlxuICAgICAgICBkYXR1bVtldmVudE5hbWVLZXldIGFzIHN0cmluZyxcbiAgICAgIFtUU106IChkYXR1bTogVGltZXNlcmllc0RhdGFSZWNvcmQpOiBEYXRlIHwgbnVsbCA9PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgZGF0dW0uX190aW1lc3RhbXAgfHwgZGF0dW0uX190aW1lc3RhbXAgPT09IDBcbiAgICAgICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgbmV3IERhdGUoZGF0dW0uX190aW1lc3RhbXApXG4gICAgICAgICAgOiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjbGVhbkRhdGEgPSBjbGVhbkV2ZW50cyhkYXRhLCBhY2Nlc3NvckZ1bmN0aW9ucyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogY2xlYW5EYXRhLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaW5pdGlhbE1pbkV2ZW50Q291bnQ6IG1pbkxlYWZOb2RlRXZlbnRDb3VudCxcbiAgICAgIHdpZHRoLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBkYXRhOiBudWxsLCBoZWlnaHQsIHdpZHRoIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugins/legacy-plugin-chart-event-flow/src/transformProps.ts\n");

/***/ })

}]);