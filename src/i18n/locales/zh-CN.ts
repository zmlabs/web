export default {
  caply: {
    appStoreUrl: "https://apps.apple.com/app/id6747667852",
    downloadOn: "前往 App Store 下载",
    faq: {
      title: "常见问题",
      items: [
        {
          id: "getting-started",
          question: "如何开始使用即幕？",
          answer:
            "只需在 App Store 下载即幕，然后选择想要转录的应用窗口，字幕就会自动开始生成。",
        },
        {
          id: "languages",
          question: "即幕支持哪些语言？",
          answer:
            "即幕支持 50 多种语言的本地识别、21+ 种语言的本地翻译，以及 39+ 种语言的 AI 翻译，涵盖英语、西班牙语、法语、德语、中文、日语等。",
        },
        {
          id: "privacy",
          question: "我的音频数据安全吗？",
          answer:
            "安全无虞！即幕的识别全部在本地完成。即便使用 AI 功能，音频也不会离开设备——仅安全传输转录文本，且绝不存储。",
        },
        {
          id: "pricing",
          question: "免费、基础和专业版有什么区别？",
          answer:
            "免费版包含系统语音识别与识别历史；基础版额外提供实时翻译与录音；专业版再升级 AI 翻译与智能摘要功能。",
        },
        {
          id: "accuracy",
          question: "转录准确率如何？",
          answer:
            "准确率受音质、语速与语言影响。在良好条件下，即幕通常可达到 90% 以上的准确率。",
        },
        {
          id: "troubleshooting",
          answer: "请确认已授予语音识别权限，并已正确选择需要转录的应用窗口。",
          question: "即幕无法捕获目标应用的音频怎么办？",
        },
      ],
    },
    features: {
      name: "功能",
      description: "只转录你想要的内容，即时翻译，智能总结。",
      title: "实时字幕 · AI 翻译 · 智能摘要",
      details: {
        aiTranslation: {
          description: "支持 39+ 语言的实时语音翻译，AI 驱动。",
          title: "即时 AI 翻译",
        },
        captionMode: {
          description: "仅显示字幕，专注无干扰。",
          title: "极简字幕模式",
        },
        customDisplay: {
          description: "深色模式、字体与自定义颜色，随心设定。",
          title: "个性化外观",
        },
        historyAndSummary: {
          description: "查看历史转录、获取 AI 摘要，并可按需保存录音。",
          title: "智能历史与摘要",
        },
        localRecognition: {
          description: "支持 50+ 语言，全部在 Mac 上完成，无需云端。",
          title: "纯本地识别，隐私守护",
        },
      },
    },
    introduction: {
      description: "即幕帮助你即时理解并记住每一句话。",
      title: "从实时到总结，一站式 AI 字幕工具",
    },
    pricing: {
      name: "价格",
      title: "所有方案皆无限转录",
      billingToggle: {
        monthly: "按月",
        yearly: "按年",
        yearlyDiscount: "立省",
      },
      description:
        "免费开启无限转录——需要更多功能时，再解锁 AI 翻译与智能摘要。",
      download: {
        subtitle: "App Store",
        title: "前往下载",
      },
      labels: {
        mostPopular: "最受欢迎",
        saveWithYearlyBilling: "按年订阅更省",
      },
      tiers: {
        basic: {
          name: "基础",
          category: "个人",
          description: "日常使用推荐",
          features: ["包含免费版全部功能", "实时字幕翻译", "实时录音"],
          period: {
            monthly: "/月",
            yearly: "/年",
          },
          price: {
            monthly: "¥8.00",
            yearly: "¥68.00",
          },
        },
        free: {
          name: "免费",
          category: "爱好",
          description: "满足大多数用户",
          features: [
            "系统语音识别",
            "Whisper 语音识别",
            "识别历史",
            "历史翻译",
          ],
          price: {
            monthly: "免费",
            yearly: "免费",
          },
        },
        pro: {
          name: "专业",
          category: "高阶用户",
          description: "为专业人士而生",
          popular: true,
          features: [
            "包含基础版全部功能",
            "AI 翻译",
            "AI 历史翻译",
            "AI 历史摘要",
          ],
          period: {
            monthly: "/月",
            yearly: "/年",
          },
          price: {
            monthly: "¥15.00",
            yearly: "¥148.00",
          },
        },
      },
    },
  },
  footer: {
    caply: {
      description: "AI 驱动的实时转录与翻译",
      feedback: "反馈",
      help: "帮助",
      privacy: "隐私政策",
      terms: "服务条款",
      title: "捕捉每一句话，理解每一瞬间",
    },
  },
  header: {
    caply: {
      faq: "常见问题",
      features: "功能",
      pricing: "价格",
    },
  },
  projects: {
    caply: "即幕",
  },
}
