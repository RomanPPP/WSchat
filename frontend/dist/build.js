/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var ws = new WebSocket('ws://localhost:4000');
ws.addEventListener('message', function (_a) {
    var data = _a.data;
    console.log(data);
    ws.close();
});
ws.addEventListener('open', function () { ws.send(JSON.stringify({ data: null })); });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9idWlsZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMENBQTBDLHlCQUF5QixZQUFZLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93c2NoYXQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6NDAwMCcpO1xyXG53cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHdzLmNsb3NlKCk7XHJcbn0pO1xyXG53cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgZnVuY3Rpb24gKCkgeyB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogbnVsbCB9KSk7IH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=