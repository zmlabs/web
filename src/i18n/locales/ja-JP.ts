export default {
  caply: {
    appStoreUrl: "https://apps.apple.com/app/id6747667852",
    downloadOn: "App Store でダウンロード",
    faq: {
      title: "よくある質問",
      items: [
        {
          id: "getting-started",
          question: "瞬幕はどうやって始めますか？",
          answer:
            "App Store から瞬幕をダウンロードし、字幕化したいアプリウインドウを選択するだけで、自動的に文字起こしが始まります。",
        },
        {
          id: "languages",
          question: "瞬幕はどの言語に対応していますか？",
          answer:
            "瞬幕は 50 以上の言語でオンデバイス音声認識、21 以上でローカル翻訳、39 以上で AI 翻訳に対応しています（英語・スペイン語・フランス語・ドイツ語・中国語・日本語など）。",
        },
        {
          id: "privacy",
          question: "音声データのプライバシーは守られますか？",
          answer:
            "ご安心ください。瞬幕の音声認識はすべて Mac 上で処理されます。AI 機能を使う場合でも音声は端末外へ送信されません。安全に送信されるのは転写されたテキストのみで、保存されることはありません。",
        },
        {
          id: "pricing",
          question: "無料版・ベーシック版・プロ版の違いは？",
          answer:
            "無料版: システム音声認識＋字幕履歴。ベーシック版: 上記にリアルタイム翻訳と録音を追加。プロ版: さらに AI 翻訳とスマート要約を利用可能。",
        },
        {
          id: "accuracy",
          question: "文字起こしの精度はどれくらいですか？",
          answer:
            "音質・話し方・言語により異なります。良好な環境では 90% 以上の精度を達成することが一般的です。",
        },
        {
          id: "troubleshooting",
          question: "瞬幕がアプリの音声を取得しません。どうすれば？",
          answer:
            "音声認識の権限が付与されているか、正しいアプリウインドウを選択しているかをご確認ください。",
        },
      ],
    },
    features: {
      name: "機能",
      description: "必要な音声だけを文字起こし。即時翻訳。賢く要約。",
      title: "リアルタイム字幕 · AI 翻訳 · スマート要約",
      details: {
        aiTranslation: {
          description: "39+ 言語のリアルタイム音声翻訳。AI 駆動。",
          title: "即時 AI 翻訳",
        },
        captionMode: {
          description: "字幕のみを表示し、集中できるクリーンビュー。",
          title: "ミニマル字幕モード",
        },
        customDisplay: {
          description: "ダークモード・フォント・カラーを自由に設定。",
          title: "表示カスタマイズ",
        },
        historyAndSummary: {
          title: "履歴 & スマート要約",
          description:
            "過去の転写を参照し、AI 要約を取得。必要に応じて録音を保存可能。",
        },
        localRecognition: {
          description: "50+ 言語対応。すべて Mac 上で処理、クラウド不要。",
          title: "完全ローカル認識で安心",
        },
      },
    },
    introduction: {
      description: "瞬幕が話された言葉をすぐ理解・記録できるようにします。",
      title: "リアルタイムから要約までワンストップの AI 字幕ツール",
    },
    pricing: {
      name: "料金",
      title: "すべてのプランで文字起こし無制限",
      billingToggle: {
        monthly: "月額",
        yearly: "年額",
        yearlyDiscount: "お得",
      },
      description:
        "無制限の文字起こしは無料でスタート。さらに必要なら AI 翻訳とスマート要約を解放しましょう。",
      download: {
        subtitle: "App Store",
        title: "ダウンロード",
      },
      labels: {
        mostPopular: "人気プラン",
        saveWithYearlyBilling: "年額でさらにお得",
      },
      tiers: {
        basic: {
          name: "ベーシック",
          category: "個人向け",
          description: "日常利用に最適",
          features: [
            "無料版のすべてを含む",
            "リアルタイム字幕翻訳",
            "リアルタイム録音",
          ],
          period: {
            monthly: "/月",
            yearly: "/年",
          },
          price: {
            monthly: "¥150.00",
            yearly: "¥1,500.00",
          },
        },
        free: {
          name: "無料",
          category: "ホビー",
          description: "多くのユーザーに十分",
          features: [
            "システム音声認識",
            "Whisper 音声認識",
            "字幕履歴",
            "履歴翻訳",
          ],
          price: {
            monthly: "無料",
            yearly: "無料",
          },
        },
        pro: {
          name: "プロ",
          category: "パワーユーザー",
          description: "プロフェッショナル向け",
          popular: true,
          features: [
            "ベーシック版のすべてを含む",
            "AI 翻訳",
            "AI 履歴翻訳",
            "AI 履歴要約",
          ],
          period: {
            monthly: "/月",
            yearly: "/年",
          },
          price: {
            monthly: "¥300.00",
            yearly: "¥3,000.00",
          },
        },
      },
    },
  },
  footer: {
    caply: {
      description: "AI 駆動のリアルタイム転写 & 翻訳",
      feedback: "フィードバック",
      help: "ヘルプ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      title: "すべての言葉を捉え、すべての瞬間を理解する",
    },
  },
  header: {
    caply: {
      faq: "よくある質問",
      features: "機能",
      pricing: "料金",
    },
  },
  projects: {
    caply: "瞬幕",
  },
}
