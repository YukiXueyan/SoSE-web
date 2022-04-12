const MaxCheckpoint = 20;
const passRightNum = 0; // 通关限制
// 故事情节
const Menu = [
  {
    chapterId: 1,
    checkpoint: 1,
    title: '欢迎新员工',
    open: true,
    story: `欢迎新员工的到来！
    这是开始工作的第一天。
    我们团队近期的任务是开发出一款软件。
    还不会的话也没有关系，我们一步一步来。
    首先要了解什么是软件。
    软件是设计开发的，而不是传统意义上生产制造的。
    将系统化的、规范的、可量化的方法应用于软件的开发、运行和维护，即将工程化的方法应用于软件，这就是软件工程。
    关于更多详细的资料，你可以在下面的探索中获取。
    相信你的能力哦。`,
  },
  {
    chapterId: 1,
    checkpoint: 2,
    title: '了解软件工程的层次结构',
    story: `相信你对软件工程已经有了基本的了解。
    接下来我们还要了解软件工程的层级结构。
    软件工程的层次自底向上包括4个层次：质量保证、开发过程、开发方法和开发工具。
    掌握了以上四个层次，才能实现高质量的软件开发。`,
  },
  {
    chapterId: 1,
    checkpoint: 3,
    title: '软件过程',
    story: `你说你还没有进行开发工作？
    不要着急，在进行开发之前还有很多工作要做呢。
    你知道什么是软件过程吗？
    软件过程是是开发软件中所开展的一系列活动、行为和任务集，以及相关的完成规范和要求。
    为了描述具体的软件过程，采用了软件过程框架和软件过程模型。
    软件过程框架定义了五种框架活动：沟通、策划、建模、构建和部署。
    我们还需要讨论的是软件过程流。你问过程流是什么？
    过程流描述了在执行顺序和执行时间上，如何组织框架中的活动、动作和任务。
    现在就动起来吧。`,
  },
  {
    chapterId: 1,
    checkpoint: 4,
    title: '软件过程模型',
    story: `我们的任务已经进行到选择软件过程模型的时候了。
    你还要掌握一些惯用的过程模型和应用。
    一个合适的过程模型可以让我们的工作更加顺利。`,
  },
  {
    chapterId: 2,
    checkpoint: 1,
    title: '需求工程',
    story: `你知道我们团队要开发什么样的软件吗？
    这就需要一个理解需求的过程。
    需求可是软件开发的一个重要阶段。
    它决定着后续的一切开发活动。
    需求阶段的错误会导致后面的连锁错误，最终使得所开发的软件不满足客户需求。
    理解需求可不是一件小事哦。`,
  },
  {
    chapterId: 2,
    checkpoint: 2,
    title: '需求建模',
    story: `给出的需求有很多文档和图？
    那是当然的了。因为需求建模这项任务很重要啊。
    要保证开发人员可以充分理解需求，因此需要有多种建模方式。
    快去学习怎么看懂这些建模吧。`,
  },
  {
    chapterId: 3,
    checkpoint: 1,
    title: '软件设计',
    story: `终于进入系统设计阶段啦。
    我们先要进行的是软件设计。
    用软件设计来解决如何做出软件的问题。
    软件设计是把需求转化为软件系统的重要环节。
    现在开始吧。`,
  },
  {
    chapterId: 3,
    checkpoint: 2,
    title: '软件设计原则',
    story: `等等等等，忘记告诉你了。
    软件设计也是要遵循一些原则的。
    这些原则包括抽象、精化、模块化、信息隐藏和功能独立。
    去看看之前的软件设计有没有遵循这些原则吧。`,
  },
  {
    chapterId: 3,
    checkpoint: 3,
    title: '系统设计',
    story: `在系统实现之前呢，我们还需要进行系统设计。
    系统设计包括了对系统的体系结构设计、构件级设计和用户界面设计。
    相信这对你来说不难吧。`,
  },
  {
    chapterId: 3,
    checkpoint: 4,
    title: '系统实现',
    story: `okk。
    经过系统设计阶段，我们已经有了系统的基本雏形和设计稿啦。
    下一步就是一直期待的系统实现环节。
    gogogo!`,
  },
  {
    chapterId: 4,
    checkpoint: 1,
    title: '软件测试',
    story: `开发之后还有软件测试环节呢，可别忘记了。
    软件测试也很重要啊。`,
  },
  {
    chapterId: 4,
    checkpoint: 2,
    title: '软件测试实践',
    story: `在了解了什么是软件测试，以及软件测试要干什么之后。
    接下来，就要解决软件测试怎么做的问题了。
    要学习软件测试的方法来对我们的软件进行测试哦。
    成功就在眼前啦。`,
  },
  {
    chapterId: 4,
    checkpoint: 3,
    title: 'end',
    end: true,
    story: `恭喜你！
    你已经完成了第一个需求，开发出了第一个软件。
    在这段过程里，相信你也完整体会到了运用软件工程的知识进行开发需要有哪些知识吧。
    如果还想继续学习的话，还可以选择更多的练习模式。
    软件工程师的路还有很长，继续加油吧~`,
  },
];

const LifeNum = 3; // 生命次数
const user =
  JSON.parse(localStorage.getItem('user') || '')[0] ||
  JSON.parse(localStorage.getItem('user') || '');
const modeId = localStorage.getItem('modeId') || '0';

const URL = 'http://localhost:3000';

const QuestionNum = 2; // 主线模式题目数量
const Question_point = 10; // 无尽模式-答对一题的分数
const Main_point = 100; // 主线模式：通关的分数
const unLockPoint = 50; // 错题解锁消耗分数

export {
  MaxCheckpoint,
  Menu,
  passRightNum,
  LifeNum,
  QuestionNum,
  user,
  modeId,
  URL,
  Question_point,
  Main_point,
  unLockPoint,
};
