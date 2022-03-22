"use strict";
exports.__esModule = true;
exports.LifeNum = exports.passRightNum = exports.Menu = exports.MaxCheckpoint = void 0;
var MaxCheckpoint = 20;
exports.MaxCheckpoint = MaxCheckpoint;
var passRightNum = 3; // 通关限制
exports.passRightNum = passRightNum;
var Menu = [
    {
        chapterId: 1,
        checkpoint: 1,
        title: '欢迎新员工',
        story: "\u6B22\u8FCE\u65B0\u5458\u5DE5\u7684\u5230\u6765\uFF01\n    \u8FD9\u662F\u5F00\u59CB\u5DE5\u4F5C\u7684\u7B2C\u4E00\u5929\u3002\n    \u6211\u4EEC\u56E2\u961F\u8FD1\u671F\u7684\u4EFB\u52A1\u662F\u5F00\u53D1\u51FA\u4E00\u6B3E\u8F6F\u4EF6\u3002\n    \u8FD8\u4E0D\u4F1A\u7684\u8BDD\u4E5F\u6CA1\u6709\u5173\u7CFB\uFF0C\u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u6765\u3002\n    \u9996\u5148\u8981\u4E86\u89E3\u4EC0\u4E48\u662F\u8F6F\u4EF6\u3002\n    \u8F6F\u4EF6\u662F\u8BBE\u8BA1\u5F00\u53D1\u7684\uFF0C\u800C\u4E0D\u662F\u4F20\u7EDF\u610F\u4E49\u4E0A\u751F\u4EA7\u5236\u9020\u7684\u3002\n    \u5C06\u7CFB\u7EDF\u5316\u7684\u3001\u89C4\u8303\u7684\u3001\u53EF\u91CF\u5316\u7684\u65B9\u6CD5\u5E94\u7528\u4E8E\u8F6F\u4EF6\u7684\u5F00\u53D1\u3001\u8FD0\u884C\u548C\u7EF4\u62A4\uFF0C\u5373\u5C06\u5DE5\u7A0B\u5316\u7684\u65B9\u6CD5\u5E94\u7528\u4E8E\u8F6F\u4EF6\uFF0C\u8FD9\u5C31\u662F\u8F6F\u4EF6\u5DE5\u7A0B\u3002\n    \u5173\u4E8E\u66F4\u591A\u8BE6\u7EC6\u7684\u8D44\u6599\uFF0C\u4F60\u53EF\u4EE5\u5728\u4E0B\u9762\u7684\u63A2\u7D22\u4E2D\u83B7\u53D6\u3002\n    \u76F8\u4FE1\u4F60\u7684\u80FD\u529B\u54E6\u3002"
    },
    {
        chapterId: 1,
        checkpoint: 2,
        title: '了解软件工程的层次结构',
        story: "\u76F8\u4FE1\u4F60\u5BF9\u8F6F\u4EF6\u5DE5\u7A0B\u5DF2\u7ECF\u6709\u4E86\u57FA\u672C\u7684\u4E86\u89E3\u3002\n    \u63A5\u4E0B\u6765\u6211\u4EEC\u8FD8\u8981\u4E86\u89E3\u8F6F\u4EF6\u5DE5\u7A0B\u7684\u5C42\u7EA7\u7ED3\u6784\u3002\n    \u8F6F\u4EF6\u5DE5\u7A0B\u7684\u5C42\u6B21\u81EA\u5E95\u5411\u4E0A\u5305\u62EC4\u4E2A\u5C42\u6B21\uFF1A\u8D28\u91CF\u4FDD\u8BC1\u3001\u5F00\u53D1\u8FC7\u7A0B\u3001\u5F00\u53D1\u65B9\u6CD5\u548C\u5F00\u53D1\u5DE5\u5177\u3002\n    \u638C\u63E1\u4E86\u4EE5\u4E0A\u56DB\u4E2A\u5C42\u6B21\uFF0C\u624D\u80FD\u5B9E\u73B0\u9AD8\u8D28\u91CF\u7684\u8F6F\u4EF6\u5F00\u53D1\u3002"
    },
    {
        chapterId: 1,
        checkpoint: 3,
        title: '软件过程',
        story: "\u4F60\u8BF4\u4F60\u8FD8\u6CA1\u6709\u8FDB\u884C\u5F00\u53D1\u5DE5\u4F5C\uFF1F\n    \u4E0D\u8981\u7740\u6025\uFF0C\u5728\u8FDB\u884C\u5F00\u53D1\u4E4B\u524D\u8FD8\u6709\u5F88\u591A\u5DE5\u4F5C\u8981\u505A\u5462\u3002\n    \u4F60\u77E5\u9053\u4EC0\u4E48\u662F\u8F6F\u4EF6\u8FC7\u7A0B\u5417\uFF1F\n    \u8F6F\u4EF6\u8FC7\u7A0B\u662F\u662F\u5F00\u53D1\u8F6F\u4EF6\u4E2D\u6240\u5F00\u5C55\u7684\u4E00\u7CFB\u5217\u6D3B\u52A8\u3001\u884C\u4E3A\u548C\u4EFB\u52A1\u96C6\uFF0C\u4EE5\u53CA\u76F8\u5173\u7684\u5B8C\u6210\u89C4\u8303\u548C\u8981\u6C42\u3002\n    \u4E3A\u4E86\u63CF\u8FF0\u5177\u4F53\u7684\u8F6F\u4EF6\u8FC7\u7A0B\uFF0C\u91C7\u7528\u4E86\u8F6F\u4EF6\u8FC7\u7A0B\u6846\u67B6\u548C\u8F6F\u4EF6\u8FC7\u7A0B\u6A21\u578B\u3002\n    \u8F6F\u4EF6\u8FC7\u7A0B\u6846\u67B6\u5B9A\u4E49\u4E86\u4E94\u79CD\u6846\u67B6\u6D3B\u52A8\uFF1A\u6C9F\u901A\u3001\u7B56\u5212\u3001\u5EFA\u6A21\u3001\u6784\u5EFA\u548C\u90E8\u7F72\u3002\n    \u6211\u4EEC\u8FD8\u9700\u8981\u8BA8\u8BBA\u7684\u662F\u8F6F\u4EF6\u8FC7\u7A0B\u6D41\u3002\u4F60\u95EE\u8FC7\u7A0B\u6D41\u662F\u4EC0\u4E48\uFF1F\n    \u8FC7\u7A0B\u6D41\u63CF\u8FF0\u4E86\u5728\u6267\u884C\u987A\u5E8F\u548C\u6267\u884C\u65F6\u95F4\u4E0A\uFF0C\u5982\u4F55\u7EC4\u7EC7\u6846\u67B6\u4E2D\u7684\u6D3B\u52A8\u3001\u52A8\u4F5C\u548C\u4EFB\u52A1\u3002\n    \u73B0\u5728\u5C31\u52A8\u8D77\u6765\u5427\u3002"
    },
    {
        chapterId: 1,
        checkpoint: 4,
        title: '软件过程模型',
        story: "\u6211\u4EEC\u7684\u4EFB\u52A1\u5DF2\u7ECF\u8FDB\u884C\u5230\u9009\u62E9\u8F6F\u4EF6\u8FC7\u7A0B\u6A21\u578B\u7684\u65F6\u5019\u4E86\u3002\n    \u4F60\u8FD8\u8981\u638C\u63E1\u4E00\u4E9B\u60EF\u7528\u7684\u8FC7\u7A0B\u6A21\u578B\u548C\u5E94\u7528\u3002\n    \u4E00\u4E2A\u5408\u9002\u7684\u8FC7\u7A0B\u6A21\u578B\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u5DE5\u4F5C\u66F4\u52A0\u987A\u5229\u3002"
    },
    {
        chapterId: 2,
        checkpoint: 1,
        title: '需求工程',
        story: "\u4F60\u77E5\u9053\u6211\u4EEC\u56E2\u961F\u8981\u5F00\u53D1\u4EC0\u4E48\u6837\u7684\u8F6F\u4EF6\u5417\uFF1F\n    \u8FD9\u5C31\u9700\u8981\u4E00\u4E2A\u7406\u89E3\u9700\u6C42\u7684\u8FC7\u7A0B\u3002\n    \u9700\u6C42\u53EF\u662F\u8F6F\u4EF6\u5F00\u53D1\u7684\u4E00\u4E2A\u91CD\u8981\u9636\u6BB5\u3002\n    \u5B83\u51B3\u5B9A\u7740\u540E\u7EED\u7684\u4E00\u5207\u5F00\u53D1\u6D3B\u52A8\u3002\n    \u9700\u6C42\u9636\u6BB5\u7684\u9519\u8BEF\u4F1A\u5BFC\u81F4\u540E\u9762\u7684\u8FDE\u9501\u9519\u8BEF\uFF0C\u6700\u7EC8\u4F7F\u5F97\u6240\u5F00\u53D1\u7684\u8F6F\u4EF6\u4E0D\u6EE1\u8DB3\u5BA2\u6237\u9700\u6C42\u3002\n    \u7406\u89E3\u9700\u6C42\u53EF\u4E0D\u662F\u4E00\u4EF6\u5C0F\u4E8B\u54E6\u3002"
    },
    {
        chapterId: 2,
        checkpoint: 2,
        title: '需求建模',
        story: "\u7ED9\u51FA\u7684\u9700\u6C42\u6709\u5F88\u591A\u6587\u6863\u548C\u56FE\uFF1F\n    \u90A3\u662F\u5F53\u7136\u7684\u4E86\u3002\u56E0\u4E3A\u9700\u6C42\u5EFA\u6A21\u8FD9\u9879\u4EFB\u52A1\u5F88\u91CD\u8981\u554A\u3002\n    \u8981\u4FDD\u8BC1\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u5145\u5206\u7406\u89E3\u9700\u6C42\uFF0C\u56E0\u6B64\u9700\u8981\u6709\u591A\u79CD\u5EFA\u6A21\u65B9\u5F0F\u3002\n    \u5FEB\u53BB\u5B66\u4E60\u600E\u4E48\u770B\u61C2\u8FD9\u4E9B\u5EFA\u6A21\u5427\u3002"
    },
    {
        chapterId: 3,
        checkpoint: 1,
        title: '软件设计',
        story: "\u7EC8\u4E8E\u8FDB\u5165\u7CFB\u7EDF\u8BBE\u8BA1\u9636\u6BB5\u5566\u3002\n    \u6211\u4EEC\u5148\u8981\u8FDB\u884C\u7684\u662F\u8F6F\u4EF6\u8BBE\u8BA1\u3002\n    \u7528\u8F6F\u4EF6\u8BBE\u8BA1\u6765\u89E3\u51B3\u5982\u4F55\u505A\u51FA\u8F6F\u4EF6\u7684\u95EE\u9898\u3002\n    \u8F6F\u4EF6\u8BBE\u8BA1\u662F\u628A\u9700\u6C42\u8F6C\u5316\u4E3A\u8F6F\u4EF6\u7CFB\u7EDF\u7684\u91CD\u8981\u73AF\u8282\u3002\n    \u73B0\u5728\u5F00\u59CB\u5427\u3002"
    },
    {
        chapterId: 3,
        checkpoint: 2,
        title: '软件设计原则',
        story: "\u7B49\u7B49\u7B49\u7B49\uFF0C\u5FD8\u8BB0\u544A\u8BC9\u4F60\u4E86\u3002\n    \u8F6F\u4EF6\u8BBE\u8BA1\u4E5F\u662F\u8981\u9075\u5FAA\u4E00\u4E9B\u539F\u5219\u7684\u3002\n    \u8FD9\u4E9B\u539F\u5219\u5305\u62EC\u62BD\u8C61\u3001\u7CBE\u5316\u3001\u6A21\u5757\u5316\u3001\u4FE1\u606F\u9690\u85CF\u548C\u529F\u80FD\u72EC\u7ACB\u3002\n    \u53BB\u770B\u770B\u4E4B\u524D\u7684\u8F6F\u4EF6\u8BBE\u8BA1\u6709\u6CA1\u6709\u9075\u5FAA\u8FD9\u4E9B\u539F\u5219\u5427\u3002"
    },
    {
        chapterId: 3,
        checkpoint: 3,
        title: '系统设计',
        story: "\u5728\u7CFB\u7EDF\u5B9E\u73B0\u4E4B\u524D\u5462\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u8FDB\u884C\u7CFB\u7EDF\u8BBE\u8BA1\u3002\n    \u7CFB\u7EDF\u8BBE\u8BA1\u5305\u62EC\u4E86\u5BF9\u7CFB\u7EDF\u7684\u4F53\u7CFB\u7ED3\u6784\u8BBE\u8BA1\u3001\u6784\u4EF6\u7EA7\u8BBE\u8BA1\u548C\u7528\u6237\u754C\u9762\u8BBE\u8BA1\u3002\n    \u76F8\u4FE1\u8FD9\u5BF9\u4F60\u6765\u8BF4\u4E0D\u96BE\u5427\u3002"
    },
    {
        chapterId: 3,
        checkpoint: 4,
        title: '系统实现',
        story: "okk\u3002\n    \u7ECF\u8FC7\u7CFB\u7EDF\u8BBE\u8BA1\u9636\u6BB5\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86\u7CFB\u7EDF\u7684\u57FA\u672C\u96CF\u5F62\u548C\u8BBE\u8BA1\u7A3F\u5566\u3002\n    \u4E0B\u4E00\u6B65\u5C31\u662F\u4E00\u76F4\u671F\u5F85\u7684\u7CFB\u7EDF\u5B9E\u73B0\u73AF\u8282\u3002\n    gogogo!"
    },
    {
        chapterId: 4,
        checkpoint: 1,
        title: '软件测试',
        story: "\u5F00\u53D1\u4E4B\u540E\u8FD8\u6709\u8F6F\u4EF6\u6D4B\u8BD5\u73AF\u8282\u5462\uFF0C\u53EF\u522B\u5FD8\u8BB0\u4E86\u3002\n    \u8F6F\u4EF6\u6D4B\u8BD5\u4E5F\u5F88\u91CD\u8981\u554A\u3002"
    },
    {
        chapterId: 4,
        checkpoint: 2,
        title: '软件测试实践',
        story: "\u5728\u4E86\u89E3\u4E86\u4EC0\u4E48\u662F\u8F6F\u4EF6\u6D4B\u8BD5\uFF0C\u4EE5\u53CA\u8F6F\u4EF6\u6D4B\u8BD5\u8981\u5E72\u4EC0\u4E48\u4E4B\u540E\u3002\n    \u63A5\u4E0B\u6765\uFF0C\u5C31\u8981\u89E3\u51B3\u8F6F\u4EF6\u6D4B\u8BD5\u600E\u4E48\u505A\u7684\u95EE\u9898\u4E86\u3002\n    \u8981\u5B66\u4E60\u8F6F\u4EF6\u6D4B\u8BD5\u7684\u65B9\u6CD5\u6765\u5BF9\u6211\u4EEC\u7684\u8F6F\u4EF6\u8FDB\u884C\u6D4B\u8BD5\u54E6\u3002\n    \u6210\u529F\u5C31\u5728\u773C\u524D\u5566\u3002"
    },
    {
        chapterId: 4,
        checkpoint: 3,
        title: 'end',
        end: true,
        story: "\u606D\u559C\u4F60\uFF01\n    \u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u7B2C\u4E00\u4E2A\u9700\u6C42\uFF0C\u5F00\u53D1\u51FA\u4E86\u7B2C\u4E00\u4E2A\u8F6F\u4EF6\u3002\n    \u5728\u8FD9\u6BB5\u8FC7\u7A0B\u91CC\uFF0C\u76F8\u4FE1\u4F60\u4E5F\u5B8C\u6574\u4F53\u4F1A\u5230\u4E86\u8FD0\u7528\u8F6F\u4EF6\u5DE5\u7A0B\u7684\u77E5\u8BC6\u8FDB\u884C\u5F00\u53D1\u9700\u8981\u6709\u54EA\u4E9B\u77E5\u8BC6\u5427\u3002\n    \u5982\u679C\u8FD8\u60F3\u7EE7\u7EED\u5B66\u4E60\u7684\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u9009\u62E9\u66F4\u591A\u7684\u7EC3\u4E60\u6A21\u5F0F\u3002\n    \u8F6F\u4EF6\u5DE5\u7A0B\u5E08\u7684\u8DEF\u8FD8\u6709\u5F88\u957F\uFF0C\u7EE7\u7EED\u52A0\u6CB9\u5427~"
    },
];
exports.Menu = Menu;
var LifeNum = 3;
exports.LifeNum = LifeNum;