# AscendAIInfra（昇腾 AI 全栈学习指南）

> 系统学习昇腾（Ascend）AI 算力全栈的独立维护开源项目

**在线浏览：[https://ernestw2019.github.io/AscendAIInfra/](https://ernestw2019.github.io/AscendAIInfra/)**

昇腾是国产 AI 算力的核心代表。本项目系统梳理从昇腾硬件架构、CANN 软件栈、Ascend C 算子开发，到 HCCL 集合通信与分布式训练、MindSpore 框架、MindIE/vLLM-Ascend 推理的完整技术栈，帮助工程师构建国产 AI 基础设施的知识体系。

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
</div>

---

## 🚀 为什么需要 AscendAIInfra

昇腾生态发展迅速，但系统化的中文学习资料相对分散。很多工程师在入门昇腾时面临相似的困境：

- 昇腾芯片的硬件架构（达芬奇 AI Core、HCCS 互联）缺乏由浅入深的讲解
- CANN 软件栈层次多（AscendCL、Ascend C、GE、算子工程），不知道从哪里开始
- Ascend C 算子开发范式与 CUDA/Kernel 差异明显，缺少对照式教程
- HCCL 集合通信、MindSpore 训练、MindIE/vLLM-Ascend 推理适配各成体系，难以串成一条主线

AscendAIInfra 正是为了解决这些问题而创建的——一个**开源、系统、面向实践**的昇腾知识库，帮助工程师从硬件到软件、从算子到推理构建完整的昇腾 AI Infra 知识体系。

> 本仓库为独立维护的昇腾专题站点，站点代码与写作框架基于 [AIInfraGuide](https://github.com/caomaolufei/AIInfraGuide)（MIT License）二次开发。

<br>

## 📖 内容体系

| 模块 | 章节 | 文章数 |
|------|------|--------|
| 模块五：昇腾 AI 芯片与算子开发 | 6 章 | 32 篇 |

### 章节清单

| 章节 | 标题 | 篇数 |
|------|------|------|
| 第 1 章 | 昇腾 AI 芯片与硬件架构 | 4 篇 |
| 第 2 章 | CANN 软件栈与 AscendCL | 7 篇 |
| 第 3 章 | Ascend C 算子开发 | 5 篇 |
| 第 4 章 | HCCL 集合通信与分布式训练 | 3 篇 |
| 第 5 章 | MindSpore 框架 | 3 篇 |
| 第 6 章 | 推理与 MindIE | 4 篇 |

**全部 32 篇文章清单：**

#### 第 1 章 · 昇腾 AI 芯片与硬件架构
- 1.1 昇腾芯片家族与演进路线
- 1.2 达芬奇架构与 AI Core 计算单元
- 1.3 昇腾存储层次与数据流
- 1.4 多卡互联 HCCS 与组网拓扑

#### 第 2 章 · CANN 软件栈与 AscendCL
- 2.1 CANN 全栈架构
- 2.2 AscendCL 编程模型
- 2.3 AscendCL 算子调用与 aclnn
- 2.4 torch_npu 与 PyTorch 迁移
- 2.5 环境部署：CANN 安装与昇腾容器化
- 2.6 npu-smi 设备管理与环境排障
- 2.7 CANN 图引擎：GE 与编译链路

#### 第 3 章 · Ascend C 算子开发
- 3.1 Ascend C 编程模型
- 3.2 矢量编程实战：Add 算子
- 3.3 数据搬运与内存管理
- 3.4 矩阵编程：GEMM 与 AICube
- 3.5 算子工程与性能分析

#### 第 4 章 · HCCL 集合通信与分布式训练
- 4.1 HCCL 通信原语与算法
- 4.2 多卡多机拓扑与 HCCL 配置
- 4.3 昇腾分布式训练实战

#### 第 5 章 · MindSpore 框架
- 5.1 MindSpore 架构与图模式
- 5.2 MindSpore 训练实战
- 5.3 PyTorch 生态迁移与第三方框架

#### 第 6 章 · 推理与 MindIE
- 6.1 昇腾推理软硬件栈与模型转换
- 6.2 MindIE 推理引擎与部署
- 6.3 vLLM-Ascend 适配
- 6.4 昇腾量化与 KVCache 优化

<br>

## ✍️ 内容准则

- 所有技术细节与代码均以**华为官方公开文档为准**（昇腾社区、CANN、MindSpore、MindIE、vLLM-Ascend），并附官方链接
- 写作风格先白话后术语，便于无实操经验的读者快速上手
- 涉及具体版本号的规格（如昇腾 950 系列参数），以官方发布为准，文中会明确标注

<br>

## 🧭 学习路线建议

昇腾与 CUDA 体系高度同构，建议结合 [AIInfraGuide 原站](https://caomaolufei.github.io/AIInfraGuide/) 的 CUDA、分布式训练、推理模块对照学习，迁移更快。

| 阶段 | 章节 | 目标 |
|------|------|------|
| 入门 | 第 1 章、第 2 章 | 看懂昇腾硬件与 CANN 软件栈，会用 AscendCL |
| 进阶 | 第 3 章 | 掌握 Ascend C 算子开发范式 |
| 实战 | 第 4 章、第 5 章 | 上手 HCCL 分布式训练与 MindSpore |
| 工程 | 第 6 章 | 掌握 MindIE / vLLM-Ascend 推理部署 |

<br>

## 🛠️ 技术栈

- [Astro](https://astro.build/) 4.x
- Tailwind CSS
- Pagefind（全站搜索）
- KaTeX（数学公式）
- Mermaid（图表渲染）
- GitHub Actions 自动部署到 GitHub Pages

<br>

## 💻 本地开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 预览
npm run preview
```

<br>

## 📝 贡献指南

欢迎通过 Issue 反馈内容错误，通过 PR 提交新文章或修改。新增文章时请参考 `docs/guides/模块五-昇腾AI芯片与算子开发/` 下的现有文章，保持 frontmatter schema 与写作风格一致。

<br>

## 📄 License

[MIT](LICENSE) © 2025-2026 ErnestW2019

站点代码基于 [AIInfraGuide](https://github.com/caomaolufei/AIInfraGuide)（MIT License）二次开发，对原作者 caomaolufei 及 AIInfraGuide 项目表示感谢。
