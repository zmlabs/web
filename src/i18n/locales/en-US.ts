export default {
  caply: {
    appStoreUrl: "https://apps.apple.com/app/id6747667852",
    downloadOn: "Download on the",
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          id: "getting-started",
          question: "How do I get started with Caply?",
          answer:
            "Simply download Caply from the App Store. The app will automatically start transcribing audio from your selected application window.",
        },
        {
          id: "languages",
          question: "What languages does Caply support?",
          answer:
            "Caply supports over 50 languages for on-device recognition, 21+ for local translation, and 39+ for AI-powered translation — including English, Spanish, French, German, Chinese, Japanese, and more.",
        },
        {
          id: "privacy",
          question: "Is my audio data private and secure?",
          answer:
            "Yes, Caply runs entirely on your Mac with on-device recognition. Even when you use AI features, your audio never leaves your device — only the transcribed text is sent securely for processing, and it's never stored.",
        },
        {
          id: "pricing",
          question: "What's the difference between Free, Basic, and Pro plans?",
          answer:
            "Free includes system speech recognition and caption history. Basic adds live translation and recording. Pro includes AI-powered translation, summaries.",
        },
        {
          id: "accuracy",
          question: "How accurate is the transcription?",
          answer:
            "Transcription accuracy depends on audio quality, speaking clarity, and language. Caply uses advanced speech recognition technology and typically achieves 90%+ accuracy in good conditions.",
        },
        {
          id: "troubleshooting",
          question: "Why isn't Caply capturing audio from my application?",
          answer:
            "Ensure you've granted speech recognition permissions and selected the correct application window.",
        },
      ],
    },
    features: {
      name: "Features",
      title: "Real-time Subtitles with AI Translation and Summaries",
      description:
        "Transcribes only what you choose. Translates instantly. Summarizes smartly.",
      details: {
        aiTranslation: {
          title: "Instant AI Translation",
          description:
            "Translate speech in real time. Over 39 languages, powered by AI.",
        },
        captionMode: {
          title: "Minimal Caption Mode",
          description:
            "A clean, focused view for subtitles only. Distraction-free by design.",
        },
        customDisplay: {
          title: "Custom Display & Appearance",
          description:
            "Style it your way — dark mode, fonts, and custom colors.",
        },
        historyAndSummary: {
          title: "Smart History & Summaries",
          description:
            "Access past transcripts, get AI summaries, and save recordings if you need them.",
        },
        localRecognition: {
          title: "Private, On-Device Recognition",
          description:
            "Supports 50+ languages. Runs entirely on your Mac — no cloud needed.",
        },
      },
    },
    introduction: {
      title: "The AI captioning tool from live to summary",
      description:
        "Caply helps you understand and remember every spoken word, instantly.",
    },
    pricing: {
      name: "Pricing",
      title: "Unlimited Transcription on All Plans",
      billingToggle: {
        monthly: "Monthly",
        yearly: "Yearly",
        yearlyDiscount: "Save",
      },
      description:
        "Start free with unlimited transcription — unlock AI translation and smart summaries when you need more.",
      download: {
        subtitle: "App Store",
        title: "Download on the",
      },
      labels: {
        mostPopular: "Most Popular",
        saveWithYearlyBilling: "Save with yearly billing",
      },
      tiers: {
        basic: {
          name: "Basic",
          category: "Individual",
          description: "Perfect for daily use",
          features: [
            "Everything in Free plan",
            "Live Caption Translation",
            "Live Recording",
          ],
          period: {
            monthly: "/month",
            yearly: "/year",
          },
          price: {
            monthly: "$0.99",
            yearly: "$9.99",
          },
        },
        free: {
          name: "Free",
          category: "Hobby",
          description: "More than enough for most users",
          features: [
            "System Speech Recognition",
            "Whisper Speech Recognition",
            "Caption History",
            "History Translation",
          ],
          price: {
            monthly: "Free",
            yearly: "Free",
          },
        },
        pro: {
          name: "Pro",
          category: "Power User",
          description: "For professionals and power users",
          popular: true,
          features: [
            "Everything in Basic plan",
            "AI-Powered Translation",
            "AI-Powered History Translation",
            "AI-Powered History Summary",
          ],
          period: {
            monthly: "/month",
            yearly: "/year",
          },
          price: {
            monthly: "$1.99",
            yearly: "$19.99",
          },
        },
      },
    },
  },
  footer: {
    caply: {
      description: "Real-time transcription and translation powered by AI",
      feedback: "Feedback",
      help: "Help",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      title: "Capture every word, understand every moment",
    },
  },
  header: {
    caply: {
      faq: "FAQ",
      features: "Features",
      pricing: "Pricing",
    },
  },
  projects: {
    caply: "Caply",
  },
}
