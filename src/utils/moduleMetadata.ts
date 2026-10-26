import type { CategorySlug } from './categories';

export interface ModuleResource {
  /** 资源类型标签，如「练习平台」 */
  type: string;
  /** 资源名称 */
  title: string;
  /** 外部链接 */
  href: string;
  /** 一句话说明 */
  description: string;
}

export interface ModuleMeta {
  /** 模块中文标题 */
  title: string;
  /** 简短描述 */
  description: string;
  /** 主题色（与 GuideSidebar 的 gradientMap 一致） */
  color: string;
  /** 学习建议 */
  tips: string[];
  /** 前置要求（简短描述） */
  prerequisites?: string;
  /** 延伸资源（站外链接） */
  resources?: ModuleResource[];
}

export const MODULE_METADATA: Partial<Record<CategorySlug, ModuleMeta>> = {
  ascend: {
    title: '昇腾 AI 芯片与算子开发',
    description:
      '从昇腾硬件架构与达芬奇 AI Core 出发，深入 CANN 软件栈、AscendCL 应用开发、Ascend C 算子开发、HCCL 集合通信与分布式训练，再到 MindSpore 框架与 MindIE/vLLM-Ascend 推理，系统掌握国产 AI 算力全栈技术。',
    color: '#EF4444',
    tips: [
      '昇腾与 CUDA 体系高度同构，建议对照本系列第 2 章的 CUDA 知识学习，迁移更快',
      '第1~2章以「看懂+会用」为主，第3章 Ascend C 是算子开发核心，建议配合官方样例动手实践',
      '昇腾生态文档以昇腾社区（hiascend.com）与 CANN 官方文档为准，版本迭代快，注意核对版本匹配',
      '无真实硬件的同学可先学习原理并浏览官方样例，有条件时通过昇腾开发者云（如 HiDevLab）申请在线 NPU 资源',
    ],
    prerequisites: '建议具备 GPU 硬件概论、集合通信基础等 AI Infra 前置知识；有 CUDA 编程经验对照学习更佳',
    resources: [
      {
        type: '官方社区',
        title: '昇腾社区',
        href: 'https://www.hiascend.com/',
        description: '昇腾官方开发者社区，提供文档、教程、硬件平台查询、CANN 下载与论坛支持',
      },
      {
        type: '官方文档',
        title: '昇腾文档中心',
        href: 'https://www.hiascend.com/document',
        description: 'CANN、AscendCL、Ascend C、MindIE 等全栈官方文档入口',
      },
      {
        type: '开源样例',
        title: 'Ascend Samples',
        href: 'https://github.com/Ascend/samples',
        description: '昇腾官方开源样例仓库，覆盖算子、推理、训练、C++/Python 全场景示例',
      },
      {
        type: '框架社区',
        title: '昇思 MindSpore',
        href: 'https://www.mindspore.cn/',
        description: '华为自研 AI 框架，与昇腾深度适配，提供大模型训练与推理套件',
      },
      {
        type: '推理生态',
        title: 'vLLM-Ascend',
        href: 'https://github.com/vllm-project/vllm-ascend',
        description: 'vLLM 官方社区维护的昇腾后端插件，让主流大模型推理无缝跑在昇腾 NPU 上',
      },
    ],
  },
};

/** category slug → URL 前缀映射 */
export const CATEGORY_URL_PREFIX: Partial<Record<CategorySlug, string>> = {
  ascend: '/ascend',
};
