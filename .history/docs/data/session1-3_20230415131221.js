const lesson3 = JSON.parse(
    JSON.stringify({
        id: "OgoOMX2ipR3KNv28",
        learningLanguage: "en",
        fromLanguage: "vi",
        type: "LESSON",
        challenges: [
            {
                prompt: "nước",
                choices: [
                    {
                        image: "https://d2pur3iezf4d1j.cloudfront.net/images/645fa42dcea02c7e2970a1285e321562",
                        phrase: "milk",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/645fa42dcea02c7e2970a1285e321562",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/e6c3c757843138c8197b866a2ed814dd",
                        hint: "sữa",
                    },
                    {
                        image: "https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703",
                        phrase: "tea",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c",
                        hint: "trà",
                    },
                    {
                        image: "https://d2pur3iezf4d1j.cloudfront.net/images/7afea32bcf0e8c6f9d446ad4aad416be",
                        phrase: "water",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/7afea32bcf0e8c6f9d446ad4aad416be",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/478b633dfd3118616569c46fe39d4197",
                        hint: "nước",
                    },
                ],
                correctIndex: 2,
                type: "select",
                id: "cea3911a22694dd7acc5cc111d2be92b",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.77435404,
                    content_length: 5.0,
                    tagged_kc_ids: ["c52ab45d4e22ee7580041911159e3c0c"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.77435404,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 5,
                    },
                    highlight: ["water"],
                    hint: "nước",
                    phrase: "water",
                    solution_key: "c52ab45d4e22ee7580041911159e3c0c",
                    source_language: "en",
                    specific_type: "name_example",
                    language: "en",
                    lexeme_ids_to_update: ["c52ab45d4e22ee7580041911159e3c0c"],
                    type: "select",
                    lexemes_to_update: ["c52ab45d4e22ee7580041911159e3c0c"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: ["water"],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "name_example",
                    generatorId: "c52ab45d4e22ee7580041911159e3c0c",
                },
            },
            {
                prompt: "rice and water",
                correctSolutions: ["cơm và nước"],
                compactTranslations: [
                    "cơm và nước",
                    "[cơm/gạo] [và/với/cùng với/với cả] nước [uống/]",
                ],
                correctTokens: ["cơm", "và", "nước"],
                wrongTokens: ["ơn", "cảm", "hay", "biệt"],
                choices: [
                    {
                        text: "cơm",
                    },
                    {
                        text: "và",
                    },
                    {
                        text: "nước",
                    },
                    {
                        text: "ơn",
                    },
                    {
                        text: "cảm",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "biệt",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "cơm",
                            },
                            {
                                to: 6,
                                lenient: "cơm",
                            },
                            {
                                to: 6,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "và",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "nước",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "cùng",
                            },
                            {
                                to: 10,
                                lenient: "và",
                            },
                            {
                                to: 10,
                                lenient: "với",
                            },
                            {
                                to: 14,
                                lenient: "với",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "với",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: "nước",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "",
                            },
                            {
                                to: 16,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "cả",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "b314eb04f77f9a6f277a4f6546d51287",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "0d9244f805fd55af1281a1bcb1a2cba6",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "c52ab45d4e22ee7580041911159e3c0c",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "rice",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/5aa16d235dcbf79fc53ee2fc832dd90c",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "cơm",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "gạo",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "and",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/fdae143c2f3b99e28a1c85c18b62cd8c",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "và",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "với",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "còn",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "water",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/e80918e87d587339e38f6b92039a8b27",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "nước",
                                    },
                                ],
                            ],
                        },
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/194b066034a49c39508bf22227644a5d",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/861252b26a49194f2a98ee58e7c373f8",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/861252b26a49194f2a98ee58e7c373f8",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/81ca92172d70599306b16bcb87799195",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Violet_CORRECT_Cropped.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Violet_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Lily_IDLE_Cropped.json",
                },
                type: "translate",
                id: "df6654ec0b2c4556809034ff7bb03a9d",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 670,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.8674443,
                    content_length: 14.0,
                    tagged_kc_ids: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "0d9244f805fd55af1281a1bcb1a2cba6",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.8674443,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 14,
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    sentence: "rice and water",
                    solution_key: "6bae8fdd8c9d1faff66c5d4603a02053",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["cơm", "và", "nước"],
                    translation: "cơm và nước",
                    wrong_tokens: ["ơn", "cảm", "hay", "biệt"],
                    text: "rice and water",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "0d9244f805fd55af1281a1bcb1a2cba6",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "0d9244f805fd55af1281a1bcb1a2cba6",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "6bae8fdd8c9d1faff66c5d4603a02053",
                sentenceDiscussionId: "6bae8fdd8c9d1faff66c5d4603a02053",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "6bae8fdd8c9d1faff66c5d4603a02053",
                },
            },
            {
                prompt: "No.",
                correctSolutions: ["Không."],
                compactTranslations: [
                    "Không.",
                    "Không [phải/đâu/phải đâu/hề/] [nhé/nha/ạ/].",
                    "[Thôi/Khỏi/Đừng].",
                ],
                correctTokens: ["Không"],
                wrongTokens: ["hay", "phê", "Vui", "nóng"],
                choices: [
                    {
                        text: "Không",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "phê",
                    },
                    {
                        text: "Vui",
                    },
                    {
                        text: "nóng",
                    },
                ],
                correctIndices: [0],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "khỏi",
                                orig: "Khỏi.",
                            },
                            {
                                to: 8,
                                lenient: "thôi",
                                orig: "Thôi.",
                            },
                            {
                                to: 8,
                                lenient: "đừng",
                                orig: "Đừng.",
                            },
                            {
                                to: 8,
                                lenient: "không",
                                orig: "Không.",
                            },
                            {
                                to: 2,
                                lenient: "không",
                                orig: "Không",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "",
                            },
                            {
                                to: 5,
                                lenient: "hề",
                            },
                            {
                                to: 5,
                                lenient: "phải",
                            },
                            {
                                to: 6,
                                lenient: "phải",
                            },
                            {
                                to: 5,
                                lenient: "đâu",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "",
                                orig: ".",
                            },
                            {
                                to: 8,
                                lenient: "nha",
                                orig: "nha.",
                            },
                            {
                                to: 8,
                                lenient: "nhé",
                                orig: "nhé.",
                            },
                            {
                                to: 8,
                                lenient: "ạ",
                                orig: "ạ.",
                            },
                            {
                                to: 8,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 8,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 8,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ.",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "đâu",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "18204d89f24410e93d66889c7c7399d7",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "No",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/beaen/c6ccf83e7e51f2f5b661c7e92628b316",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "không",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "đừng",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ".",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/beaen/7bd015096d0ead1602c72f9651667d64",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/b24ffc3b19f1fc9ffbc108d1d3936dd8",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/b24ffc3b19f1fc9ffbc108d1d3936dd8",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/50af330449fbbaf257fc9868c4321586",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Bea_CORRECT_Cropped_V2.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Bea_INCORRECT_Cropped_V2.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Bea_IDLE_Cropped_V2.json",
                },
                type: "translate",
                id: "9570790ecc78459f92e68c7496fbbea4",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 869,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 1.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9679202,
                    content_length: 3.0,
                    tagged_kc_ids: ["18204d89f24410e93d66889c7c7399d7"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9679202,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 3,
                        num_correct_answer_tokens: 1,
                    },
                    highlight: ["No"],
                    sentence: "No.",
                    solution_key: "cbec711e18a82344c8b4a05d9bab5bf8",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Không"],
                    translation: "Không.",
                    wrong_tokens: ["hay", "phê", "Vui", "nóng"],
                    text: "No.",
                    specific_type: "tap",
                    lexeme_ids_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    type: "translate",
                    lexemes_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: ["No"],
                progressUpdates: [],
                sentenceId: "cbec711e18a82344c8b4a05d9bab5bf8",
                sentenceDiscussionId: "cbec711e18a82344c8b4a05d9bab5bf8",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "cbec711e18a82344c8b4a05d9bab5bf8",
                },
            },
            {
                prompt: "không",
                choices: ["no", "hot", "noodles"],
                correctIndex: 0,
                options: [
                    {
                        text: "no",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/47ebcf943e28ccc6f55ba45a47504dd5",
                    },
                    {
                        text: "hot",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/fd03b8555cf102bc752a090bf64a6f81",
                    },
                    {
                        text: "noodles",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/9ec72541bcba66253d84dcc6328e8b6d",
                    },
                ],
                type: "assist",
                id: "9d82fbfac3e047a6925d069c47ad9b44",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.964731,
                    content_length: 2.0,
                    tagged_kc_ids: ["18204d89f24410e93d66889c7c7399d7"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.964731,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 2,
                    },
                    highlight: [],
                    learning_language: "en",
                    other_options: ["hot", "noodles"],
                    solution_key: "18204d89f24410e93d66889c7c7399d7",
                    translation: "không",
                    ui_language: "vi",
                    word: "no",
                    language: "en",
                    specific_type: "assist",
                    lexeme_ids_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    type: "assist",
                    lexemes_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "assist",
                    generatorId: "18204d89f24410e93d66889c7c7399d7",
                },
            },
            {
                prompt: "Bye.",
                correctSolutions: ["Tạm biệt."],
                compactTranslations: [
                    "Tạm biệt.",
                    "[Xin/] [chào/chào tạm biệt/tạm biệt] [nhé/nha/ạ/].",
                ],
                correctTokens: ["Tạm", "biệt"],
                wrongTokens: ["trà", "nước", "cà", "cảm"],
                choices: [
                    {
                        text: "Tạm",
                    },
                    {
                        text: "biệt",
                    },
                    {
                        text: "trà",
                    },
                    {
                        text: "nước",
                    },
                    {
                        text: "cà",
                    },
                    {
                        text: "cảm",
                    },
                ],
                correctIndices: [0, 1],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "tạm",
                                orig: "Tạm",
                            },
                            {
                                to: 4,
                                lenient: "",
                            },
                            {
                                to: 11,
                                lenient: "xin",
                                orig: "Xin",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "biệt",
                                orig: "biệt.",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "chào",
                            },
                            {
                                to: 7,
                                lenient: "chào",
                            },
                            {
                                to: 9,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "",
                                orig: ".",
                            },
                            {
                                to: 13,
                                lenient: "nha",
                                orig: "nha.",
                            },
                            {
                                to: 13,
                                lenient: "nhé",
                                orig: "nhé.",
                            },
                            {
                                to: 13,
                                lenient: "ạ",
                                orig: "ạ.",
                            },
                            {
                                to: 13,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 13,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 13,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ.",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "biệt",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "chào",
                            },
                            {
                                to: 7,
                                lenient: "chào",
                            },
                            {
                                to: 9,
                                lenient: "tạm",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "87c450efea56f8f35f5ca4e48906a192",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Bye",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/b6e00e71b892b072e5d2f222f0cdd17c",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "tạm biệt",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "chào tạm biệt",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ".",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/ba89d0fff3db647c3264a8265a5e0e68",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/6d99bc8306bdaacc3c8acc911214c557",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Zari_CORRECT_Cropped_HappyDance.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Pink_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Zari_IDLE_Cropped.json",
                },
                type: "translate",
                id: "6378d6ff97b944bca4d57f92c43a2aca",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 918,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 2.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9203092,
                    content_length: 4.0,
                    tagged_kc_ids: ["87c450efea56f8f35f5ca4e48906a192"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9203092,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 4,
                        num_correct_answer_tokens: 2,
                    },
                    highlight: ["Bye"],
                    sentence: "Bye.",
                    solution_key: "89c68cdc0aa2a4187d7ce4417db7684e",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Tạm", "biệt"],
                    translation: "Tạm biệt.",
                    wrong_tokens: ["trà", "nước", "cà", "cảm"],
                    text: "Bye.",
                    specific_type: "tap",
                    lexeme_ids_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    type: "translate",
                    lexemes_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: ["Bye"],
                progressUpdates: [],
                sentenceId: "89c68cdc0aa2a4187d7ce4417db7684e",
                sentenceDiscussionId: "89c68cdc0aa2a4187d7ce4417db7684e",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "89c68cdc0aa2a4187d7ce4417db7684e",
                },
            },
            {
                prompt: "tạm biệt",
                choices: ["rice", "bye", "tea"],
                correctIndex: 1,
                options: [
                    {
                        text: "rice",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/6b1806f93076a1dcf561841d09c83e39",
                    },
                    {
                        text: "bye",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/8bf4fdfbcfeed64e02ab1ae081fa01c8",
                    },
                    {
                        text: "tea",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c",
                    },
                ],
                type: "assist",
                id: "c20e33da8516401ea24cb997c9cf4c52",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9582248,
                    content_length: 3.0,
                    tagged_kc_ids: ["87c450efea56f8f35f5ca4e48906a192"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9582248,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 3,
                    },
                    highlight: [],
                    learning_language: "en",
                    other_options: ["rice", "tea"],
                    solution_key: "87c450efea56f8f35f5ca4e48906a192",
                    translation: "tạm biệt",
                    ui_language: "vi",
                    word: "bye",
                    language: "en",
                    specific_type: "assist",
                    lexeme_ids_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    type: "assist",
                    lexemes_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "assist",
                    generatorId: "87c450efea56f8f35f5ca4e48906a192",
                },
            },
            {
                prompt: "Thank you!",
                correctSolutions: ["Cảm ơn!"],
                compactTranslations: [
                    "Cảm ơn!",
                    "[Xin/] [chân thành/] [cảm/cám] ơn [bạn/các bạn/cậu/các cậu/quý khách/] [nhé/nha/ạ/]!",
                ],
                correctTokens: ["Cảm", "ơn"],
                wrongTokens: ["cà", "hay", "cho", "Vui"],
                choices: [
                    {
                        text: "Cảm",
                    },
                    {
                        text: "ơn",
                    },
                    {
                        text: "cà",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "cho",
                    },
                    {
                        text: "Vui",
                    },
                ],
                correctIndices: [0, 1],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "cảm",
                                orig: "Cảm",
                            },
                            {
                                to: 4,
                                lenient: "",
                            },
                            {
                                to: 22,
                                lenient: "xin",
                                orig: "Xin",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 24,
                                lenient: "ơn",
                                orig: "ơn!",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "",
                            },
                            {
                                to: 18,
                                lenient: "chân",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "cám",
                            },
                            {
                                to: 6,
                                lenient: "cảm",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "ơn",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 11,
                                lenient: "bạn",
                            },
                            {
                                to: 12,
                                lenient: "các",
                            },
                            {
                                to: 14,
                                lenient: "các",
                            },
                            {
                                to: 11,
                                lenient: "cậu",
                            },
                            {
                                to: 16,
                                lenient: "quý",
                            },
                        ],
                        [
                            {
                                to: 24,
                                lenient: "",
                                orig: "!",
                            },
                            {
                                to: 24,
                                lenient: "nha",
                                orig: "nha!",
                            },
                            {
                                to: 24,
                                lenient: "nhé",
                                orig: "nhé!",
                            },
                            {
                                to: 24,
                                lenient: "ạ",
                                orig: "ạ!",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "bạn",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "khách",
                            },
                        ],
                        [
                            {
                                to: 19,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 20,
                                lenient: "thành",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "cám",
                            },
                            {
                                to: 6,
                                lenient: "cảm",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "",
                            },
                            {
                                to: 18,
                                lenient: "chân",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "cbec8d612a8909ad79bc92ef63853a54",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Thank",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/vikramen/8f518b84146b55b87c9ee9b4893ab04b",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "cảm ơn",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/vikramen/12e11c9778d9e72cdc8b9e7f81d81ad9",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "cậu",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "các bạn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "bạn",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "!",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/vikramen/23e77b229473ac454b919a286de4980c",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/61e19bb4a1ff1d94e58d58b33db58c36",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/61e19bb4a1ff1d94e58d58b33db58c36",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/52a5a774c4de18f4a4e8c91d91788347",
                    },
                    gender: "MALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Vikram_CORRECT_Cropped_Disco.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Dan_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Vikram_IDLE_Cropped.json",
                },
                type: "translate",
                id: "32b307558542454cb0e3988036a41d59",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 1184,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 2.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.92757684,
                    content_length: 10.0,
                    tagged_kc_ids: ["cbec8d612a8909ad79bc92ef63853a54"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.92757684,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 10,
                        num_correct_answer_tokens: 2,
                    },
                    highlight: [],
                    sentence: "Thank you!",
                    solution_key: "d40971d6c0e06dce1743335d977aa912",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cảm", "ơn"],
                    translation: "Cảm ơn!",
                    wrong_tokens: ["cà", "hay", "cho", "Vui"],
                    text: "Thank you!",
                    specific_type: "tap",
                    lexeme_ids_to_update: ["cbec8d612a8909ad79bc92ef63853a54"],
                    type: "translate",
                    lexemes_to_update: ["cbec8d612a8909ad79bc92ef63853a54"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "d40971d6c0e06dce1743335d977aa912",
                sentenceDiscussionId: "d40971d6c0e06dce1743335d977aa912",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "d40971d6c0e06dce1743335d977aa912",
                },
            },
            {
                prompt: "Thank you.",
                correctTokens: ["Thank", "you"],
                wrongTokens: ["tea", "bye", "yes", "no"],
                choices: [
                    {
                        text: "Thank",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/d93b313e3973992dc0bdc2e74d919fe4",
                    },
                    {
                        text: "you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/4e2a4e2a2db6c723faedddf5e07f919c",
                    },
                    {
                        text: "tea",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c",
                    },
                    {
                        text: "bye",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/e6a299c71a34cb1f2d91bf6c3dd636a2",
                    },
                    {
                        text: "yes",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/8eff9a0dc6c96cd19937a7c4c995c133",
                    },
                    {
                        text: "no",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/9fdbb4ede9f6e6fd7908138701eef163",
                    },
                ],
                correctIndices: [0, 1],
                solutionTranslation: "Cảm ơn.",
                tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/53cea45b16407c784db7ed3c8f9a8e98",
                slowTts:
                    "https://d1vq87e9lcf771.cloudfront.net/miranda/14460ea87de8d80abd1b4cbb1e665fc3",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "thank",
                                orig: "Thank",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "you",
                                orig: "you.",
                            },
                        ],
                        [],
                    ],
                    language: "en",
                    whitespaceDelimited: true,
                },
                type: "listenTap",
                id: "37711f5c358c4f28a83f44b7b7e4a608",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 206,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 2.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.8634464,
                    content_length: 10.0,
                    tagged_kc_ids: ["cbec8d612a8909ad79bc92ef63853a54"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.8634464,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 10,
                        num_correct_answer_tokens: 2,
                    },
                    highlight: [],
                    language: "en",
                    language_name: "English",
                    solution_key: "74d605847359ba772d0bd63badf586b8",
                    solution_translation: "Cảm ơn.",
                    source_language: "en",
                    text: "Thank you.",
                    tokens: ["Thank", "you"],
                    wrong_tokens: ["tea", "bye", "yes", "no"],
                    specific_type: "listen_tap",
                    lexeme_ids_to_update: ["cbec8d612a8909ad79bc92ef63853a54"],
                    type: "listen_tap",
                    lexemes_to_update: ["cbec8d612a8909ad79bc92ef63853a54"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "74d605847359ba772d0bd63badf586b8",
                sentenceDiscussionId: "74d605847359ba772d0bd63badf586b8",
                challengeGeneratorIdentifier: {
                    specificType: "listen_tap",
                    generatorId: "74d605847359ba772d0bd63badf586b8",
                },
            },
            {
                prompt: "No, thank you.",
                correctSolutions: ["Không, cảm ơn."],
                compactTranslations: [
                    "Không, cảm ơn.",
                    "Không [phải/đâu/phải đâu/hề/] [nhé/nha/ạ/], [xin/] [cảm ơn/cám ơn] [bạn/các bạn/cậu/các cậu/] [nhé/nha/ạ/].",
                    "[Thôi/Khỏi/Thôi khỏi], [xin/] [cảm ơn/cám ơn] [bạn/các bạn/cậu/các cậu/] [nhé/nha/ạ/].",
                ],
                correctTokens: ["Không", "cảm", "ơn"],
                wrongTokens: ["tạm", "cà phê", "cơm", "nước"],
                choices: [
                    {
                        text: "Không",
                    },
                    {
                        text: "cảm",
                    },
                    {
                        text: "ơn",
                    },
                    {
                        text: "tạm",
                    },
                    {
                        text: "cà phê",
                    },
                    {
                        text: "cơm",
                    },
                    {
                        text: "nước",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "không",
                                orig: "Không,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 2,
                                lenient: "khong",
                                orig: "Không,",
                                type: "accent",
                            },
                            {
                                to: 6,
                                lenient: "khỏi",
                                orig: "Khỏi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 6,
                                lenient: "khoi",
                                orig: "Khỏi,",
                                type: "accent",
                            },
                            {
                                to: 18,
                                lenient: "khỏi",
                                orig: "Khỏi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 18,
                                lenient: "khoi",
                                orig: "Khỏi,",
                                type: "accent",
                            },
                            {
                                to: 20,
                                lenient: "thôi",
                                orig: "Thôi",
                            },
                            {
                                to: 22,
                                lenient: "thôi",
                                orig: "Thôi",
                            },
                            {
                                to: 6,
                                lenient: "thôi",
                                orig: "Thôi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 6,
                                lenient: "thoi",
                                orig: "Thôi,",
                                type: "accent",
                            },
                            {
                                to: 18,
                                lenient: "thôi",
                                orig: "Thôi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 18,
                                lenient: "thoi",
                                orig: "Thôi,",
                                type: "accent",
                            },
                            {
                                to: 24,
                                lenient: "không",
                                orig: "Không",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "cảm",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "ơn",
                                orig: "ơn.",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "cám",
                            },
                            {
                                to: 8,
                                lenient: "cảm",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "ơn",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: "",
                            },
                            {
                                to: 13,
                                lenient: "bạn",
                            },
                            {
                                to: 14,
                                lenient: "các",
                            },
                            {
                                to: 16,
                                lenient: "các",
                            },
                            {
                                to: 13,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "",
                                orig: ".",
                            },
                            {
                                to: 30,
                                lenient: "nha",
                                orig: "nha.",
                            },
                            {
                                to: 30,
                                lenient: "nhé",
                                orig: "nhé.",
                            },
                            {
                                to: 30,
                                lenient: "ạ",
                                orig: "ạ.",
                            },
                            {
                                to: 30,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 30,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 30,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ.",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "bạn",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 19,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "xin",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "khỏi",
                                orig: "khỏi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 6,
                                lenient: "khoi",
                                orig: "khỏi,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 18,
                                lenient: "khỏi",
                                orig: "khỏi,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 18,
                                lenient: "khoi",
                                orig: "khỏi,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 25,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 26,
                                lenient: "",
                            },
                            {
                                to: 27,
                                lenient: "hề",
                            },
                            {
                                to: 27,
                                lenient: "phải",
                            },
                            {
                                to: 28,
                                lenient: "phải",
                            },
                            {
                                to: 27,
                                lenient: "đâu",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 19,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 6,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 18,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 6,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 6,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 18,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 18,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 6,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 6,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 6,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 6,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 6,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 18,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 18,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 18,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 18,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 18,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                        ],
                        [
                            {
                                to: 26,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: "đâu",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "18204d89f24410e93d66889c7c7399d7",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "cbec8d612a8909ad79bc92ef63853a54",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "No",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/80f32f5317fa92c267664a82ac1ae546",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "không",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "đừng",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ",",
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "thank",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/f226d6222293e3187995eb08f59f3160",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "cảm ơn",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/65a8b996e1117b8bf4f5822a964612d1",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "cậu",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "các bạn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "bạn",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ".",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/9b6277291873ca27ada13fbdaee2a1ac",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/6d99bc8306bdaacc3c8acc911214c557",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Zari_CORRECT_Cropped_Spin.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Pink_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Zari_IDLE_Cropped.json",
                },
                type: "translate",
                id: "7896589fdc634d8591a8c5fd80921479",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 3215,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.8639637,
                    content_length: 14.0,
                    tagged_kc_ids: [
                        "18204d89f24410e93d66889c7c7399d7",
                        "cbec8d612a8909ad79bc92ef63853a54",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.8639637,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 14,
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    sentence: "No, thank you.",
                    solution_key: "2b937771b3b32a022b89f78c9ecb153c",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Không", "cảm", "ơn"],
                    translation: "Không, cảm ơn.",
                    wrong_tokens: ["tạm", "cà phê", "cơm", "nước"],
                    text: "No, thank you.",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "18204d89f24410e93d66889c7c7399d7",
                        "cbec8d612a8909ad79bc92ef63853a54",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "18204d89f24410e93d66889c7c7399d7",
                        "cbec8d612a8909ad79bc92ef63853a54",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "2b937771b3b32a022b89f78c9ecb153c",
                sentenceDiscussionId: "2b937771b3b32a022b89f78c9ecb153c",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "2b937771b3b32a022b89f78c9ecb153c",
                },
            },
            {
                prompt: "Coffee or tea?",
                correctSolutions: ["Cà phê hay trà?"],
                compactTranslations: [
                    "Cà phê hay trà?",
                    "[Bạn uống/Cậu uống/Uống/Anh uống/Chị uống/Em uống/Cô uống/Chú uống/Bác uống/Ông uống/Bà uống/] [cà phê/cafe] [hay/hay là] [uống/] [nước/] [trà/chè] [xanh/] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/nào/]?",
                    "[Bạn uống/Cậu uống/Uống/Anh uống/Chị uống/Em uống/Cô uống/Chú uống/Bác uống/Ông uống/Bà uống/] [nước/] [trà/chè] [xanh/] [hay/hay là] [uống/] [cà phê/cafe] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/nào/]?",
                ],
                correctTokens: ["Cà", "phê", "hay", "trà"],
                wrongTokens: ["Vui", "tạm", "cho", "biệt"],
                choices: [
                    {
                        text: "Cà",
                    },
                    {
                        text: "phê",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "trà",
                    },
                    {
                        text: "Vui",
                    },
                    {
                        text: "tạm",
                    },
                    {
                        text: "cho",
                    },
                    {
                        text: "biệt",
                    },
                ],
                correctIndices: [0, 1, 2, 3],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "cà",
                                orig: "Cà",
                            },
                            {
                                to: 8,
                                lenient: "",
                            },
                            {
                                to: 42,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 42,
                                lenient: "bà",
                                orig: "Bà",
                            },
                            {
                                to: 42,
                                lenient: "bác",
                                orig: "Bác",
                            },
                            {
                                to: 42,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 42,
                                lenient: "chú",
                                orig: "Chú",
                            },
                            {
                                to: 42,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 42,
                                lenient: "cô",
                                orig: "Cô",
                            },
                            {
                                to: 42,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 42,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 44,
                                lenient: "uống",
                                orig: "Uống",
                            },
                            {
                                to: 42,
                                lenient: "ông",
                                orig: "Ông",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 46,
                                lenient: "trà",
                                orig: "trà?",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: "",
                            },
                            {
                                to: 26,
                                lenient: "nước",
                            },
                            {
                                to: 28,
                                lenient: "cafe",
                            },
                            {
                                to: 40,
                                lenient: "cà",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "chè",
                            },
                            {
                                to: 10,
                                lenient: "trà",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: "",
                            },
                            {
                                to: 25,
                                lenient: "xanh",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "hay",
                            },
                            {
                                to: 23,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: "",
                            },
                            {
                                to: 22,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "cafe",
                            },
                            {
                                to: 20,
                                lenient: "cà",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 46,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 46,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 46,
                                lenient: "nào",
                                orig: "nào?",
                            },
                            {
                                to: 18,
                                lenient: "thế",
                            },
                            {
                                to: 46,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 18,
                                lenient: "vậy",
                            },
                            {
                                to: 46,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                            {
                                to: 18,
                                lenient: "đây",
                            },
                            {
                                to: 46,
                                lenient: "đây",
                                orig: "đây?",
                            },
                            {
                                to: 46,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 19,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 46,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 24,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "chè",
                            },
                            {
                                to: 10,
                                lenient: "trà",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "hay",
                            },
                            {
                                to: 38,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 31,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 33,
                                lenient: "",
                            },
                            {
                                to: 36,
                                lenient: "nước",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "chè",
                            },
                            {
                                to: 34,
                                lenient: "trà",
                            },
                        ],
                        [
                            {
                                to: 35,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "",
                            },
                            {
                                to: 16,
                                lenient: "xanh",
                            },
                        ],
                        [
                            {
                                to: 33,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 39,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 41,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 28,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 43,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 44,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 45,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: "",
                            },
                            {
                                to: 26,
                                lenient: "nước",
                            },
                            {
                                to: 28,
                                lenient: "cafe",
                            },
                            {
                                to: 40,
                                lenient: "cà",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "f21a429c717dd93b9f5723f20d87ab8a",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "cda7ed0b91c053a1aa465f8657dbb331",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Coffee",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lucyen/498e2f709468431cc5f68fdd8e46c76b",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "cà phê",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lucyen/aea2893239286d85d11e0fc48860c637",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay là",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hoặc",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "tea",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lucyen/31674a2e37cf80e07c234b871bf59eb3",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "trà",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/lucyen/530e7f39575dea9da03c7a0aed4ea60a",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/122480f3b6c86522d5715c920764dc44",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/122480f3b6c86522d5715c920764dc44",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/ad178aebb8dfd890ab602527440e685c",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Gma_CORRECT_Cropped.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Gma_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Lucy_IDLE_Cropped.json",
                },
                type: "translate",
                id: "8cfb3e7e28cc4329b4799192ebfb2452",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 2629,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 4.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.83811826,
                    content_length: 14.0,
                    tagged_kc_ids: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "cda7ed0b91c053a1aa465f8657dbb331",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.83811826,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 14,
                        num_correct_answer_tokens: 4,
                    },
                    highlight: ["or"],
                    sentence: "Coffee or tea?",
                    solution_key: "d59cc4558707de82184026dbb76e4c04",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cà", "phê", "hay", "trà"],
                    translation: "Cà phê hay trà?",
                    wrong_tokens: ["Vui", "tạm", "cho", "biệt"],
                    text: "Coffee or tea?",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "cda7ed0b91c053a1aa465f8657dbb331",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "cda7ed0b91c053a1aa465f8657dbb331",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: ["or"],
                progressUpdates: [],
                sentenceId: "d59cc4558707de82184026dbb76e4c04",
                sentenceDiscussionId: "d59cc4558707de82184026dbb76e4c04",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "d59cc4558707de82184026dbb76e4c04",
                },
            },
            {
                pairs: [
                    {
                        learningToken: "tea",
                        fromToken: "trà",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c",
                    },
                    {
                        learningToken: "no",
                        fromToken: "không",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/9fdbb4ede9f6e6fd7908138701eef163",
                    },
                    {
                        learningToken: "noodles",
                        fromToken: "mì",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/9ec72541bcba66253d84dcc6328e8b6d",
                    },
                    {
                        learningToken: "rice",
                        fromToken: "cơm",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/6b1806f93076a1dcf561841d09c83e39",
                    },
                    {
                        learningToken: "hot",
                        fromToken: "nóng",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/1e98d4a348c99786b74fd6e5feb43148",
                    },
                ],
                type: "match",
                id: "1865a04c6f6f40f9adb8be897f958965",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9562206,
                    content_length: 2.0,
                    tagged_kc_ids: ["18204d89f24410e93d66889c7c7399d7"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9562206,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 2,
                    },
                    highlight: [],
                    learning_language: "en",
                    memory_style: false,
                    pairs: [
                        {
                            learning_word: "tea",
                            translation: "trà",
                        },
                        {
                            learning_word: "no",
                            translation: "không",
                        },
                        {
                            learning_word: "noodles",
                            translation: "mì",
                        },
                        {
                            learning_word: "rice",
                            translation: "cơm",
                        },
                        {
                            learning_word: "hot",
                            translation: "nóng",
                        },
                    ],
                    solution_key: "18204d89f24410e93d66889c7c7399d7",
                    ui_language: "vi",
                    language: "en",
                    specific_type: "match",
                    lexeme_ids_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    type: "match",
                    lexemes_to_update: ["18204d89f24410e93d66889c7c7399d7"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "match",
                    generatorId: "18204d89f24410e93d66889c7c7399d7",
                },
            },
            {
                prompt: "Thank you, bye.",
                correctSolutions: ["Cảm ơn, tạm biệt."],
                compactTranslations: [
                    "Cảm ơn, tạm biệt.",
                    "[Xin/] [cảm ơn/cám ơn] [bạn/cậu/các bạn/các cậu/] [nhé/nha/ạ/], [xin/] [chào/chào tạm biệt/tạm biệt].",
                    "[Xin/] [cảm ơn/cám ơn], [và/] [xin/] [chào/chào tạm biệt/tạm biệt] [bạn/cậu/các bạn/các cậu/] [nhé/nha/ạ/].",
                    "[Xin/] [cảm ơn/cám ơn] [bạn/cậu/các cậu/], [xin/] [chào/chào tạm biệt/tạm biệt] [nhé/nha/ạ/].",
                    "[Xin/] [cảm ơn/cám ơn] [bạn/cậu/các bạn/các cậu/] [nhé/nha/ạ/], [bai/bai bai] [nhé/].",
                ],
                correctTokens: ["Cảm", "ơn", "tạm", "biệt"],
                wrongTokens: ["nóng", "cơm", "trà", "cho"],
                choices: [
                    {
                        text: "Cảm",
                    },
                    {
                        text: "ơn",
                    },
                    {
                        text: "tạm",
                    },
                    {
                        text: "biệt",
                    },
                    {
                        text: "nóng",
                    },
                    {
                        text: "cơm",
                    },
                    {
                        text: "trà",
                    },
                    {
                        text: "cho",
                    },
                ],
                correctIndices: [0, 1, 2, 3],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "cảm",
                                orig: "Cảm",
                            },
                            {
                                to: 8,
                                lenient: "",
                            },
                            {
                                to: 63,
                                lenient: "xin",
                                orig: "Xin",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "ơn",
                                orig: "ơn,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 4,
                                lenient: "on",
                                orig: "ơn,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 65,
                                lenient: "biệt",
                                orig: "biệt.",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: "cám",
                            },
                            {
                                to: 27,
                                lenient: "cám",
                            },
                            {
                                to: 9,
                                lenient: "cảm",
                            },
                            {
                                to: 27,
                                lenient: "cảm",
                            },
                            {
                                to: 31,
                                lenient: "cám",
                            },
                            {
                                to: 31,
                                lenient: "cảm",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "ơn",
                                orig: "ơn,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 11,
                                lenient: "on",
                                orig: "ơn,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "",
                            },
                            {
                                to: 26,
                                lenient: "xin",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: "chào",
                            },
                            {
                                to: 22,
                                lenient: "chào",
                            },
                            {
                                to: 24,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "",
                            },
                            {
                                to: 17,
                                lenient: "bạn",
                            },
                            {
                                to: 18,
                                lenient: "các",
                            },
                            {
                                to: 20,
                                lenient: "các",
                            },
                            {
                                to: 17,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 65,
                                lenient: "",
                                orig: ".",
                            },
                            {
                                to: 65,
                                lenient: "nha",
                                orig: "nha.",
                            },
                            {
                                to: 65,
                                lenient: "nhé",
                                orig: "nhé.",
                            },
                            {
                                to: 65,
                                lenient: "ạ",
                                orig: "ạ.",
                            },
                            {
                                to: 65,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 65,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ.",
                            },
                            {
                                to: 65,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ.",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 19,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "bạn",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 24,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 25,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: "biệt",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 28,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: "ơn",
                                orig: "ơn,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 29,
                                lenient: "on",
                                orig: "ơn,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "và",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 33,
                                lenient: "ơn",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 35,
                                lenient: "",
                            },
                            {
                                to: 46,
                                lenient: "bạn",
                            },
                            {
                                to: 47,
                                lenient: "các",
                            },
                            {
                                to: 49,
                                lenient: "các",
                            },
                            {
                                to: 46,
                                lenient: "cậu",
                            },
                            {
                                to: 51,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 56,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 57,
                                lenient: "bạn",
                                orig: "bạn,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 57,
                                lenient: "ban",
                                orig: "bạn,",
                                type: "accent",
                            },
                            {
                                to: 58,
                                lenient: "bạn",
                                orig: "bạn,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 58,
                                lenient: "ban",
                                orig: "bạn,",
                                type: "accent",
                            },
                            {
                                to: 59,
                                lenient: "các",
                            },
                            {
                                to: 61,
                                lenient: "các",
                            },
                            {
                                to: 57,
                                lenient: "cậu",
                                orig: "cậu,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 57,
                                lenient: "cau",
                                orig: "cậu,",
                                type: "accent",
                            },
                            {
                                to: 58,
                                lenient: "cậu",
                                orig: "cậu,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 58,
                                lenient: "cau",
                                orig: "cậu,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 36,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 37,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 38,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 39,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 38,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 38,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 39,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 39,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 38,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 38,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 38,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 38,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 38,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 39,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 39,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 39,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 39,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 39,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 40,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 43,
                                lenient: "",
                                orig: ",",
                            },
                            {
                                to: 44,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 45,
                                lenient: "nha",
                                orig: "nha,",
                            },
                            {
                                to: 44,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 44,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 45,
                                lenient: "nhé",
                                orig: "nhé,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 45,
                                lenient: "nhe",
                                orig: "nhé,",
                                type: "accent",
                            },
                            {
                                to: 44,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 44,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 44,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 44,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 44,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 45,
                                lenient: "ạ",
                                orig: "ạ,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 45,
                                lenient: "a",
                                orig: "ạ,",
                                type: "accent",
                            },
                            {
                                to: 45,
                                lenient: "aw",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 45,
                                lenient: "aa",
                                type: "typo",
                                orig: "ạ,",
                            },
                            {
                                to: 45,
                                lenient: "as",
                                type: "typo",
                                orig: "ạ,",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "chào",
                            },
                            {
                                to: 65,
                                lenient: "chào",
                                orig: "chào.",
                            },
                            {
                                to: 6,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 38,
                                lenient: "xin",
                            },
                        ],
                        [
                            {
                                to: 36,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 41,
                                lenient: "bai",
                            },
                        ],
                        [
                            {
                                to: 42,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 65,
                                lenient: "",
                                orig: ".",
                            },
                            {
                                to: 65,
                                lenient: "nhé",
                                orig: "nhé.",
                            },
                        ],
                        [
                            {
                                to: 44,
                                lenient: "bai",
                            },
                        ],
                        [
                            {
                                to: 40,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 43,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 35,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 48,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 46,
                                lenient: "bạn",
                            },
                        ],
                        [
                            {
                                to: 50,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 46,
                                lenient: "cậu",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "chào",
                            },
                            {
                                to: 52,
                                lenient: "chào",
                            },
                            {
                                to: 54,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 53,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 54,
                                lenient: "tạm",
                            },
                        ],
                        [
                            {
                                to: 55,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "biệt",
                            },
                        ],
                        [
                            {
                                to: 57,
                                lenient: "xin",
                            },
                        ],
                        [
                            {
                                to: 51,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 56,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 60,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 57,
                                lenient: "cậu",
                                orig: "cậu,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 57,
                                lenient: "cau",
                                orig: "cậu,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 62,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 58,
                                lenient: "cậu",
                                orig: "cậu,",
                            },
                            {
                                weight: 1.0e-12,
                                to: 58,
                                lenient: "cau",
                                orig: "cậu,",
                                type: "accent",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: "cám",
                            },
                            {
                                to: 27,
                                lenient: "cám",
                            },
                            {
                                to: 9,
                                lenient: "cảm",
                            },
                            {
                                to: 27,
                                lenient: "cảm",
                            },
                            {
                                to: 31,
                                lenient: "cám",
                            },
                            {
                                to: 31,
                                lenient: "cảm",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "cbec8d612a8909ad79bc92ef63853a54",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "87c450efea56f8f35f5ca4e48906a192",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Thank",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/linen/222bc698304b1511e022ef10afd03a70",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "cảm ơn",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/linen/1123cef4097e92445f11b4b0af4d8edd",
                        hintTable: {
                            headers: ["thank", "you"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "cảm ơn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "cậu",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "các bạn",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "bạn",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ",",
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "bye",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/linen/429d12cd2ee418b0a6dd0ff10fe94a6f",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "tạm biệt",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "chào tạm biệt",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: ".",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/linen/7efc33381a89ad509c5627cdd5d20ae7",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/3f195e9533fc5e4f61a32eba3f03a8cf",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/3f195e9533fc5e4f61a32eba3f03a8cf",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/85c5ecb885f7073a3aebeb775946e329",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Kai_CORRECT_Cropped.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Kai_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Lin_IDLE_Cropped.json",
                },
                type: "translate",
                id: "5f421c12be214b3887bcfadef76ebbaa",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 5831,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 4.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.84670365,
                    content_length: 15.0,
                    tagged_kc_ids: [
                        "cbec8d612a8909ad79bc92ef63853a54",
                        "87c450efea56f8f35f5ca4e48906a192",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.84670365,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 15,
                        num_correct_answer_tokens: 4,
                    },
                    highlight: [],
                    sentence: "Thank you, bye.",
                    solution_key: "c12afa76d45d0641bf4e6374bf048442",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cảm", "ơn", "tạm", "biệt"],
                    translation: "Cảm ơn, tạm biệt.",
                    wrong_tokens: ["nóng", "cơm", "trà", "cho"],
                    text: "Thank you, bye.",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "cbec8d612a8909ad79bc92ef63853a54",
                        "87c450efea56f8f35f5ca4e48906a192",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "cbec8d612a8909ad79bc92ef63853a54",
                        "87c450efea56f8f35f5ca4e48906a192",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "c12afa76d45d0641bf4e6374bf048442",
                sentenceDiscussionId: "c12afa76d45d0641bf4e6374bf048442",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "c12afa76d45d0641bf4e6374bf048442",
                },
            },
            {
                pairs: [
                    {
                        learningToken: "hot",
                        fromToken: "nóng",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/fd03b8555cf102bc752a090bf64a6f81",
                    },
                    {
                        learningToken: "rice",
                        fromToken: "cơm",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/ec429870d5ba07d65a1f5fd0097c4954",
                    },
                    {
                        learningToken: "noodles",
                        fromToken: "mì",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/9ec72541bcba66253d84dcc6328e8b6d",
                    },
                    {
                        learningToken: "bye",
                        fromToken: "tạm biệt",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/8bf4fdfbcfeed64e02ab1ae081fa01c8",
                    },
                    {
                        learningToken: "tea",
                        fromToken: "trà",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c",
                    },
                ],
                type: "match",
                id: "c993795e8e2143d08bb837f1e970908f",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9486653,
                    content_length: 3.0,
                    tagged_kc_ids: ["87c450efea56f8f35f5ca4e48906a192"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9486653,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 3,
                    },
                    highlight: [],
                    learning_language: "en",
                    memory_style: false,
                    pairs: [
                        {
                            learning_word: "hot",
                            translation: "nóng",
                        },
                        {
                            learning_word: "rice",
                            translation: "cơm",
                        },
                        {
                            learning_word: "noodles",
                            translation: "mì",
                        },
                        {
                            learning_word: "bye",
                            translation: "tạm biệt",
                        },
                        {
                            learning_word: "tea",
                            translation: "trà",
                        },
                    ],
                    solution_key: "87c450efea56f8f35f5ca4e48906a192",
                    ui_language: "vi",
                    language: "en",
                    specific_type: "match",
                    lexeme_ids_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    type: "match",
                    lexemes_to_update: ["87c450efea56f8f35f5ca4e48906a192"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "match",
                    generatorId: "87c450efea56f8f35f5ca4e48906a192",
                },
            },
            {
                prompt: "Coffee or water?",
                correctSolutions: ["Cà phê hay là nước?"],
                compactTranslations: [
                    "Cà phê hay là nước?",
                    "[Cà phê/cafe] [hay/hay là/hoặc/hoặc là] nước [lọc/uống/] [chứ/nhỉ/thế/vậy/]?",
                    "Nước [lọc/uống/] [hay là/hay/hoặc/hoặc là] [cà phê/cafe] [chứ/nhỉ/thế/vậy/]?",
                ],
                correctTokens: ["Cà", "phê", "hay", "là", "nước"],
                wrongTokens: ["mì", "ơn", "nóng", "biệt"],
                choices: [
                    {
                        text: "Cà",
                    },
                    {
                        text: "phê",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "là",
                    },
                    {
                        text: "nước",
                    },
                    {
                        text: "mì",
                    },
                    {
                        text: "ơn",
                    },
                    {
                        text: "nóng",
                    },
                    {
                        text: "biệt",
                    },
                ],
                correctIndices: [0, 1, 2, 3, 4],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "nước",
                                orig: "Nước",
                            },
                            {
                                to: 14,
                                lenient: "cà",
                                orig: "Cà",
                            },
                            {
                                to: 16,
                                lenient: "cafe",
                            },
                            {
                                to: 24,
                                lenient: "cà",
                                orig: "Cà",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "",
                            },
                            {
                                to: 13,
                                lenient: "lọc",
                            },
                            {
                                to: 13,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "hay",
                            },
                            {
                                to: 11,
                                lenient: "hay",
                            },
                            {
                                to: 5,
                                lenient: "hoặc",
                            },
                            {
                                to: 11,
                                lenient: "hoặc",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: "cafe",
                            },
                            {
                                to: 9,
                                lenient: "cà",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 32,
                                lenient: "chứ",
                                orig: "chứ?",
                            },
                            {
                                to: 32,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 32,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 32,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 18,
                                lenient: "hay",
                            },
                            {
                                to: 22,
                                lenient: "hay",
                            },
                            {
                                to: 18,
                                lenient: "hoặc",
                            },
                            {
                                to: 22,
                                lenient: "hoặc",
                            },
                        ],
                        [
                            {
                                to: 19,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 20,
                                lenient: "nước",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "",
                            },
                            {
                                to: 7,
                                lenient: "lọc",
                            },
                            {
                                to: 7,
                                lenient: "uống",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 18,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 25,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 26,
                                lenient: "phê",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 28,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 31,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "nước",
                                orig: "nước?",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "f21a429c717dd93b9f5723f20d87ab8a",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "c52ab45d4e22ee7580041911159e3c0c",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Coffee",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/a4c54cfc8fc48b719a8e6178ac8828f8",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "cà phê",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/e93a91d1c806f2b6fc10827f09ad06b1",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay là",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hoặc",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "water",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/6d3e79ae98ecb09d49b2a13edc61270b",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "nước",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/3eca4f8a251df6f1e8a8f965d231da93",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/51d3bded9ecbd8bf6e9869041c437ba9",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/51d3bded9ecbd8bf6e9869041c437ba9",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/0f284113af41f7f7296263183701a13b",
                    },
                    gender: "MALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Falstaff_CORRECT_Cropped_Tango.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Bear_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Falstaff_IDLE_Cropped.json",
                },
                type: "translate",
                id: "7cd4e12a50ed4d168c6fc5972e059a58",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 1561,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 5.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.83703023,
                    content_length: 16.0,
                    tagged_kc_ids: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.83703023,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 16,
                        num_correct_answer_tokens: 5,
                    },
                    highlight: [],
                    sentence: "Coffee or water?",
                    solution_key: "0ca282eac7a10e3f51b88cd17c60de74",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cà", "phê", "hay", "là", "nước"],
                    translation: "Cà phê hay là nước?",
                    wrong_tokens: ["mì", "ơn", "nóng", "biệt"],
                    text: "Coffee or water?",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "f21a429c717dd93b9f5723f20d87ab8a",
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "0ca282eac7a10e3f51b88cd17c60de74",
                sentenceDiscussionId: "0ca282eac7a10e3f51b88cd17c60de74",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "0ca282eac7a10e3f51b88cd17c60de74",
                },
            },
            {
                prompt: "Rice or noodles?",
                correctSolutions: ["Cơm hay mì?"],
                compactTranslations: [
                    "Cơm hay mì?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn muốn ăn/Cậu muốn ăn/Anh muốn ăn/Chị muốn ăn/Em muốn ăn] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn ăn/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Cơm/Cơm trắng/Gạo] [hay/hay là] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn gọi/Cậu gọi/Anh gọi/Chị gọi/Em gọi/Bạn muốn gọi/Cậu muốn gọi/Anh muốn gọi/Chị muốn gọi/Em muốn gọi] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn gọi/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Mì/Mỳ/Bánh đa/Miến/Bún/Phở/Mì tôm/Mỳ tôm/Mì sợi/Mỳ sợi] [hay/hay là] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] cần [mì/mỳ] [hay/hay là] [cần/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] cần [cơm/cơm trắng/gạo] [hay/hay là] [cần/] [mì/mỳ] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn thích ăn/Cậu thích ăn/Anh thích ăn/Chị thích ăn/Em thích ăn] [cơm/cơm trắng/gạo] [hay/hay là] [thích ăn/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn gọi/Cậu gọi/Anh gọi/Chị gọi/Em gọi/Bạn muốn gọi/Cậu muốn gọi/Anh muốn gọi/Chị muốn gọi/Em muốn gọi] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn gọi/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn mua/Cậu mua/Anh mua/Chị mua/Em mua/Bạn muốn mua/Cậu muốn mua/Anh muốn mua/Chị muốn mua/Em muốn mua/Mua] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn mua/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] thích [mì/mỳ] [hay/hay là] [thích/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn muốn ăn/Cậu muốn ăn/Anh muốn ăn/Chị muốn ăn/Em muốn ăn] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn ăn/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn mua/Cậu mua/Anh mua/Chị mua/Em mua/Bạn muốn mua/Cậu muốn mua/Anh muốn mua/Chị muốn mua/Em muốn mua/Mua] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn mua/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] thích [cơm/cơm trắng/gạo] [hay/hay là] [thích/] [mì/mỳ] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                ],
                correctTokens: ["Cơm", "hay", "mì"],
                wrongTokens: ["biệt", "nước", "và", "lòng"],
                choices: [
                    {
                        text: "Cơm",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "mì",
                    },
                    {
                        text: "biệt",
                    },
                    {
                        text: "nước",
                    },
                    {
                        text: "và",
                    },
                    {
                        text: "lòng",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 46,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 2,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 46,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 2,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 46,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 2,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 46,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 2,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 46,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 4,
                                lenient: "mua",
                                orig: "Mua",
                            },
                            {
                                to: 48,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 76,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 48,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 76,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 48,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 76,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 48,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 76,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 48,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 76,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 78,
                                lenient: "bánh",
                                orig: "Bánh",
                            },
                            {
                                to: 80,
                                lenient: "bún",
                                orig: "Bún",
                            },
                            {
                                to: 80,
                                lenient: "miến",
                                orig: "Miến",
                            },
                            {
                                to: 80,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 84,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 86,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 80,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 84,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 86,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 80,
                                lenient: "phở",
                                orig: "Phở",
                            },
                            {
                                to: 88,
                                lenient: "",
                            },
                            {
                                to: 129,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 129,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 129,
                                lenient: "cháu",
                                orig: "Cháu",
                            },
                            {
                                to: 129,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 129,
                                lenient: "con",
                                orig: "Con",
                            },
                            {
                                to: 129,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 129,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 131,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 133,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 131,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 133,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 131,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 133,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 131,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 133,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 131,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 133,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 135,
                                lenient: "ăn",
                                orig: "Ăn",
                            },
                            {
                                to: 147,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 149,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 147,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 149,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 147,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 149,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 147,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 149,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 147,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 149,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 151,
                                lenient: "ăn",
                                orig: "Ăn",
                            },
                            {
                                to: 175,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                            {
                                to: 179,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                            {
                                to: 175,
                                lenient: "gạo",
                                orig: "Gạo",
                            },
                            {
                                to: 181,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "cơm",
                            },
                            {
                                to: 26,
                                lenient: "cơm",
                            },
                            {
                                to: 6,
                                lenient: "gạo",
                            },
                            {
                                to: 28,
                                lenient: "bánh",
                            },
                            {
                                to: 30,
                                lenient: "bún",
                            },
                            {
                                to: 30,
                                lenient: "miến",
                            },
                            {
                                to: 30,
                                lenient: "mì",
                            },
                            {
                                to: 42,
                                lenient: "mì",
                            },
                            {
                                to: 44,
                                lenient: "mì",
                            },
                            {
                                to: 30,
                                lenient: "mỳ",
                            },
                            {
                                to: 42,
                                lenient: "mỳ",
                            },
                            {
                                to: 44,
                                lenient: "mỳ",
                            },
                            {
                                to: 30,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "hay",
                            },
                            {
                                to: 24,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 22,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "bánh",
                            },
                            {
                                to: 13,
                                lenient: "bún",
                            },
                            {
                                to: 13,
                                lenient: "miến",
                            },
                            {
                                to: 13,
                                lenient: "mì",
                            },
                            {
                                to: 17,
                                lenient: "mì",
                            },
                            {
                                to: 19,
                                lenient: "mì",
                            },
                            {
                                to: 13,
                                lenient: "mỳ",
                            },
                            {
                                to: 17,
                                lenient: "mỳ",
                            },
                            {
                                to: 19,
                                lenient: "mỳ",
                            },
                            {
                                to: 13,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 185,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 185,
                                lenient: "nào",
                                orig: "nào?",
                            },
                            {
                                to: 15,
                                lenient: "thế",
                            },
                            {
                                to: 185,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 15,
                                lenient: "vậy",
                            },
                            {
                                to: 185,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                            {
                                to: 15,
                                lenient: "đây",
                            },
                            {
                                to: 185,
                                lenient: "đây",
                                orig: "đây?",
                            },
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 18,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 20,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 25,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 31,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "hay",
                            },
                            {
                                to: 40,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 33,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 38,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "cơm",
                            },
                            {
                                to: 35,
                                lenient: "cơm",
                            },
                            {
                                to: 13,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 36,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 39,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 41,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 43,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 45,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 47,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 49,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 50,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 51,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 52,
                                lenient: "cơm",
                            },
                            {
                                to: 60,
                                lenient: "cơm",
                            },
                            {
                                to: 52,
                                lenient: "gạo",
                            },
                            {
                                to: 62,
                                lenient: "bánh",
                            },
                            {
                                to: 64,
                                lenient: "bún",
                            },
                            {
                                to: 64,
                                lenient: "miến",
                            },
                            {
                                to: 64,
                                lenient: "mì",
                            },
                            {
                                to: 72,
                                lenient: "mì",
                            },
                            {
                                to: 74,
                                lenient: "mì",
                            },
                            {
                                to: 64,
                                lenient: "mỳ",
                            },
                            {
                                to: 72,
                                lenient: "mỳ",
                            },
                            {
                                to: 74,
                                lenient: "mỳ",
                            },
                            {
                                to: 64,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 53,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 54,
                                lenient: "hay",
                            },
                            {
                                to: 58,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 55,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 56,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 57,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 59,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 54,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 61,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 52,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 63,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 65,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 66,
                                lenient: "hay",
                            },
                            {
                                to: 70,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 67,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 68,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 69,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 71,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 66,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 73,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 75,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 77,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 48,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 79,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 81,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "hay",
                            },
                            {
                                to: 82,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 83,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 85,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 87,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 89,
                                lenient: "thích",
                            },
                            {
                                to: 113,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 90,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 91,
                                lenient: "cơm",
                            },
                            {
                                to: 101,
                                lenient: "cơm",
                            },
                            {
                                to: 91,
                                lenient: "gạo",
                            },
                            {
                                to: 103,
                                lenient: "mì",
                            },
                            {
                                to: 103,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 92,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 93,
                                lenient: "hay",
                            },
                            {
                                to: 99,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 94,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: "",
                            },
                            {
                                to: 98,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "mì",
                            },
                            {
                                to: 96,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 97,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 185,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 185,
                                lenient: "nào",
                                orig: "nào?",
                            },
                            {
                                to: 15,
                                lenient: "thế",
                            },
                            {
                                to: 185,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 15,
                                lenient: "vậy",
                            },
                            {
                                to: 185,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 100,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 93,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 102,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 91,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 104,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 105,
                                lenient: "hay",
                            },
                            {
                                to: 111,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 106,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: "",
                            },
                            {
                                to: 110,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "cơm",
                            },
                            {
                                to: 108,
                                lenient: "cơm",
                            },
                            {
                                to: 96,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 109,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 112,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 105,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 114,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 115,
                                lenient: "cơm",
                            },
                            {
                                to: 121,
                                lenient: "cơm",
                            },
                            {
                                to: 115,
                                lenient: "gạo",
                            },
                            {
                                to: 123,
                                lenient: "mì",
                            },
                            {
                                to: 123,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 116,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 117,
                                lenient: "hay",
                            },
                            {
                                to: 119,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 118,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: "",
                            },
                            {
                                to: 98,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 120,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 117,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 122,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 115,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 124,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 125,
                                lenient: "hay",
                            },
                            {
                                to: 127,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 126,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: "",
                            },
                            {
                                to: 110,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 128,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 125,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 130,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 89,
                                lenient: "thích",
                            },
                            {
                                to: 113,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 132,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 133,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 134,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 135,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 136,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 137,
                                lenient: "cơm",
                            },
                            {
                                to: 145,
                                lenient: "cơm",
                            },
                            {
                                to: 137,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 138,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 139,
                                lenient: "hay",
                            },
                            {
                                to: 143,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 140,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 141,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 142,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 144,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 139,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 146,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 137,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 148,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 149,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 150,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 151,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 152,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 153,
                                lenient: "cơm",
                            },
                            {
                                to: 159,
                                lenient: "cơm",
                            },
                            {
                                to: 153,
                                lenient: "gạo",
                            },
                            {
                                to: 161,
                                lenient: "bánh",
                            },
                            {
                                to: 163,
                                lenient: "bún",
                            },
                            {
                                to: 163,
                                lenient: "miến",
                            },
                            {
                                to: 163,
                                lenient: "mì",
                            },
                            {
                                to: 171,
                                lenient: "mì",
                            },
                            {
                                to: 173,
                                lenient: "mì",
                            },
                            {
                                to: 163,
                                lenient: "mỳ",
                            },
                            {
                                to: 171,
                                lenient: "mỳ",
                            },
                            {
                                to: 173,
                                lenient: "mỳ",
                            },
                            {
                                to: 163,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 154,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 155,
                                lenient: "hay",
                            },
                            {
                                to: 157,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 156,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 141,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 158,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 155,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 160,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 153,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 162,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 164,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 165,
                                lenient: "hay",
                            },
                            {
                                to: 169,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 166,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 167,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 168,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 170,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 165,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 172,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 174,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 176,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "hay",
                            },
                            {
                                to: 177,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 178,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 180,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 175,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 182,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 183,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 184,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "mì",
                                orig: "mì?",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "b314eb04f77f9a6f277a4f6546d51287",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "edbdf0f154d4b81ab2d2c0262690acad",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Rice",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/5aa16d235dcbf79fc53ee2fc832dd90c",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "cơm",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "gạo",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/481734fc4e11307e61c90c33860f0999",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay là",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hoặc",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "noodles",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/5d274c58b09c2736b7f1d61aaf542145",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "mì",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/lilyen/c3eea106e02862a7a61e5228c3a3cab7",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/861252b26a49194f2a98ee58e7c373f8",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/861252b26a49194f2a98ee58e7c373f8",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/81ca92172d70599306b16bcb87799195",
                    },
                    gender: "FEMALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Lily_CORRECT_Cropped_HairTuck.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Violet_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Lily_IDLE_Cropped.json",
                },
                type: "translate",
                id: "a0a6322ee6234e7786fe9c9b8567b1e6",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 11046,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.82368994,
                    content_length: 16.0,
                    tagged_kc_ids: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.82368994,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 16,
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    sentence: "Rice or noodles?",
                    solution_key: "7aa378eeba97f0601fca257272e949fb",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cơm", "hay", "mì"],
                    translation: "Cơm hay mì?",
                    wrong_tokens: ["biệt", "nước", "và", "lòng"],
                    text: "Rice or noodles?",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "7aa378eeba97f0601fca257272e949fb",
                sentenceDiscussionId: "7aa378eeba97f0601fca257272e949fb",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "7aa378eeba97f0601fca257272e949fb",
                },
            },
        ],
        adaptiveChallenges: [
            {
                prompt: "Cơm hay mì?",
                correctSolutions: ["Rice or noodles?"],
                compactTranslations: [
                    "Rice or noodles?",
                    "[Some/The/] noodles or [some/the/] rice?",
                    "[Some/The/] rice or [some/the/] noodles?",
                ],
                correctTokens: ["Rice", "or", "noodles"],
                wrongTokens: ["thank you", "hot", "iced", "yes"],
                choices: [
                    {
                        text: "Rice",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/ca9ea3cbca527888e57e3404d4949a12",
                    },
                    {
                        text: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/13040984229814499c446cd74a0cb5c9",
                    },
                    {
                        text: "noodles",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/428d9ce40eddcec0b8fecb28a2f90de5",
                    },
                    {
                        text: "thank you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/9ef096e9681c44bd8bcc8f17d799d083",
                    },
                    {
                        text: "hot",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/f338c7d44695f8867edc0cb713e825e8",
                    },
                    {
                        text: "iced",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/63d04bcfb587a94df4705203a6b27076",
                    },
                    {
                        text: "yes",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/zarien/05832eb0ac4abf3e2a2e4bc178ab20bf",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "vi",
                targetLanguage: "en",
                solutionTts:
                    "https://d1vq87e9lcf771.cloudfront.net/zarien/d6a43821b34f06b239ec58c8181c016d",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "rice",
                                orig: "Rice",
                            },
                            {
                                to: 2,
                                lenient: "rıce",
                                orig: "Rıce",
                            },
                            {
                                to: 2,
                                lenient: "ri̇ce",
                                orig: "Ri̇ce",
                            },
                            {
                                to: 2,
                                lenient: "rıce",
                            },
                            {
                                to: 2,
                                lenient: "ri̇ce",
                            },
                            {
                                to: 6,
                                lenient: "",
                            },
                            {
                                to: 19,
                                lenient: "some",
                                orig: "Some",
                            },
                            {
                                to: 19,
                                lenient: "the",
                                orig: "The",
                            },
                            {
                                to: 19,
                                lenient: "teh",
                                type: "typo",
                                orig: "The",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "or",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "noodles",
                                orig: "noodles?",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: "noodles",
                            },
                            {
                                to: 13,
                                lenient: "rice",
                            },
                            {
                                to: 13,
                                lenient: "rıce",
                            },
                            {
                                to: 13,
                                lenient: "ri̇ce",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: "or",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "",
                            },
                            {
                                to: 12,
                                lenient: "some",
                            },
                            {
                                to: 12,
                                lenient: "the",
                            },
                            {
                                to: 12,
                                lenient: "teh",
                                type: "typo",
                                orig: "the",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "rice",
                                orig: "rice?",
                            },
                            {
                                to: 21,
                                lenient: "rıce",
                            },
                            {
                                to: 21,
                                lenient: "rıce",
                                orig: "rıce?",
                            },
                            {
                                to: 21,
                                lenient: "ri̇ce",
                                orig: "ri̇ce?",
                            },
                            {
                                to: 21,
                                lenient: "ri̇ce",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 15,
                                lenient: "or",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: "",
                            },
                            {
                                to: 18,
                                lenient: "some",
                            },
                            {
                                to: 18,
                                lenient: "the",
                            },
                            {
                                to: 18,
                                lenient: "teh",
                                type: "typo",
                                orig: "the",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "noodles",
                                orig: "noodles?",
                            },
                        ],
                        [
                            {
                                to: 17,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 20,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: "noodles",
                            },
                            {
                                to: 13,
                                lenient: "rice",
                            },
                            {
                                to: 13,
                                lenient: "rıce",
                            },
                            {
                                to: 13,
                                lenient: "ri̇ce",
                            },
                        ],
                        [],
                    ],
                    language: "en",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "b314eb04f77f9a6f277a4f6546d51287",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "edbdf0f154d4b81ab2d2c0262690acad",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Cơm",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "(the) rice",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "rice",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "hay",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "or",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "is ... or",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "are ... or",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "mì",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "noodles",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/bian/6152cd90755e3c92098e344ec25c08a2",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/3f4adf80c0b6e9a0dc438f3ba8119703",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/6d99bc8306bdaacc3c8acc911214c557",
                    },
                    gender: "female",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Pink_CORRECT_Cropped.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Pink_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Zari_IDLE_Cropped.json",
                },
                type: "translate",
                id: "cf1a4556b9064866b2394100d5ec3875",
                challengeResponseTrackingProperties: {
                    best_solution: "Rice or noodles?",
                    level_session_index: 2,
                    grading_graph_size: 1527,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.7528763,
                    content_length: 16.0,
                    tagged_kc_ids: ["80148baf63314508961d9df0d6f5afcb"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.7528763,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 16,
                        best_solution: "Rice or noodles?",
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    indicator_type: {
                        name: "HARD_CHALLENGE",
                    },
                    sentence: "Cơm hay mì?",
                    solution_key: "96cb46ca28e15b649626d10de31fd734",
                    source_language: "vi",
                    target_language: "en",
                    tokens: ["Rice", "or", "noodles"],
                    translation: "Rice or noodles?",
                    wrong_tokens: ["thank you", "hot", "iced", "yes"],
                    text: "Cơm hay mì?",
                    specific_type: "reverse_tap",
                    lexeme_ids_to_update: ["80148baf63314508961d9df0d6f5afcb"],
                    type: "translate",
                    lexemes_to_update: ["80148baf63314508961d9df0d6f5afcb"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "96cb46ca28e15b649626d10de31fd734",
                sentenceDiscussionId: "96cb46ca28e15b649626d10de31fd734",
                challengeGeneratorIdentifier: {
                    specificType: "reverse_tap",
                    generatorId: "96cb46ca28e15b649626d10de31fd734",
                },
                indicatorType: "HARD_CHALLENGE",
            },
            {
                prompt: "Cà phê hay là nước?",
                correctSolutions: ["Coffee or water?"],
                compactTranslations: ["Coffee or water?", "Water or coffee?"],
                correctTokens: ["Coffee", "or", "water"],
                wrongTokens: ["iced", "hi", "thank you", "hot"],
                choices: [
                    {
                        text: "Coffee",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/a4c54cfc8fc48b719a8e6178ac8828f8",
                    },
                    {
                        text: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/e93a91d1c806f2b6fc10827f09ad06b1",
                    },
                    {
                        text: "water",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/6d3e79ae98ecb09d49b2a13edc61270b",
                    },
                    {
                        text: "iced",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/362a17e6d03da034fb872cdc8e6d5ea9",
                    },
                    {
                        text: "hi",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/1fe05377ce4ed8099668239e48e26c48",
                    },
                    {
                        text: "thank you",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/694835dfe3479ca7ebb51a1ecc526906",
                    },
                    {
                        text: "hot",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/falstaffen/aed4e17a03549c16055c6b8ddbff890f",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "vi",
                targetLanguage: "en",
                solutionTts:
                    "https://d1vq87e9lcf771.cloudfront.net/falstaffen/3eca4f8a251df6f1e8a8f965d231da93",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "water",
                                orig: "Water",
                            },
                            {
                                to: 6,
                                lenient: "coffee",
                                orig: "Coffee",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "or",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "coffee",
                                orig: "coffee?",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "or",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "water",
                                orig: "water?",
                            },
                        ],
                        [],
                    ],
                    language: "en",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "f21a429c717dd93b9f5723f20d87ab8a",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "c52ab45d4e22ee7580041911159e3c0c",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Cà",
                        hintTable: {
                            headers: ["cà", "phê"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "coffee",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "phê",
                        hintTable: {
                            headers: ["cà", "phê"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "coffee",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "hay",
                        hintTable: {
                            headers: ["hay", "là"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "or",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "or",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "is ... or",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "are ... or",
                                    },
                                    {
                                        colspan: 1,
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "là",
                        hintTable: {
                            headers: ["hay", "là"],
                            rows: [
                                [
                                    {
                                        colspan: 2,
                                        hint: "or",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "is",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "am",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                    },
                                    {
                                        colspan: 1,
                                        hint: "being",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "nước",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "water",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "country",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "countries",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/danh/fcd00ead021bf3aad23f42aa9300b21c",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/51d3bded9ecbd8bf6e9869041c437ba9",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/51d3bded9ecbd8bf6e9869041c437ba9",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/0f284113af41f7f7296263183701a13b",
                    },
                    gender: "male",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Falstaff_CORRECT_Cropped_Tango.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Bear_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Falstaff_IDLE_Cropped.json",
                },
                type: "translate",
                id: "b7c287203567470e827f62feff359c84",
                challengeResponseTrackingProperties: {
                    best_solution: "Coffee or water?",
                    level_session_index: 2,
                    grading_graph_size: 430,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.8126231,
                    content_length: 16.0,
                    tagged_kc_ids: [
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.8126231,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 16,
                        best_solution: "Coffee or water?",
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    indicator_type: {
                        name: "HARD_CHALLENGE",
                    },
                    sentence: "Cà phê hay là nước?",
                    solution_key: "904437e94adca84747ef87e3b9abdc5a",
                    source_language: "vi",
                    target_language: "en",
                    tokens: ["Coffee", "or", "water"],
                    translation: "Coffee or water?",
                    wrong_tokens: ["iced", "hi", "thank you", "hot"],
                    text: "Cà phê hay là nước?",
                    specific_type: "reverse_tap",
                    lexeme_ids_to_update: [
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "80148baf63314508961d9df0d6f5afcb",
                        "c52ab45d4e22ee7580041911159e3c0c",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "904437e94adca84747ef87e3b9abdc5a",
                sentenceDiscussionId: "904437e94adca84747ef87e3b9abdc5a",
                challengeGeneratorIdentifier: {
                    specificType: "reverse_tap",
                    generatorId: "904437e94adca84747ef87e3b9abdc5a",
                },
                indicatorType: "HARD_CHALLENGE",
            },
        ],
        easierAdaptiveChallenges: [
            {
                prompt: "nước",
                choices: ["milk", "water", "hot"],
                correctIndex: 1,
                options: [
                    {
                        text: "milk",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/d66a0d5b3c279d4f245a91f297d610d6",
                    },
                    {
                        text: "water",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/harrison/478b633dfd3118616569c46fe39d4197",
                    },
                    {
                        text: "hot",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/miranda/1e98d4a348c99786b74fd6e5feb43148",
                    },
                ],
                type: "assist",
                id: "e566d9fea19645b1a3ebbfa0780818ff",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    birdbrain_source: "birdbrain_v2",
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.9505966,
                    content_length: 5.0,
                    tagged_kc_ids: ["c52ab45d4e22ee7580041911159e3c0c"],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.9505966,
                        birdbrain_source: "birdbrain_v2",
                        content_length: 5,
                    },
                    highlight: [],
                    indicator_type: {
                        name: "EASY_CHALLENGE",
                    },
                    learning_language: "en",
                    other_options: ["milk", "hot"],
                    solution_key: "c52ab45d4e22ee7580041911159e3c0c",
                    translation: "nước",
                    ui_language: "vi",
                    word: "water",
                    language: "en",
                    specific_type: "assist",
                    lexeme_ids_to_update: ["c52ab45d4e22ee7580041911159e3c0c"],
                    type: "assist",
                    lexemes_to_update: ["c52ab45d4e22ee7580041911159e3c0c"],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                challengeGeneratorIdentifier: {
                    specificType: "assist",
                    generatorId: "c52ab45d4e22ee7580041911159e3c0c",
                },
                indicatorType: "EASY_CHALLENGE",
            },
            {
                prompt: "Rice or noodles?",
                correctSolutions: ["Cơm hay mì?"],
                compactTranslations: [
                    "Cơm hay mì?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn muốn ăn/Cậu muốn ăn/Anh muốn ăn/Chị muốn ăn/Em muốn ăn] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn ăn/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Cơm/Cơm trắng/Gạo] [hay/hay là] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn gọi/Cậu gọi/Anh gọi/Chị gọi/Em gọi/Bạn muốn gọi/Cậu muốn gọi/Anh muốn gọi/Chị muốn gọi/Em muốn gọi] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn gọi/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Mì/Mỳ/Bánh đa/Miến/Bún/Phở/Mì tôm/Mỳ tôm/Mì sợi/Mỳ sợi] [hay/hay là] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] cần [mì/mỳ] [hay/hay là] [cần/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] cần [cơm/cơm trắng/gạo] [hay/hay là] [cần/] [mì/mỳ] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn thích ăn/Cậu thích ăn/Anh thích ăn/Chị thích ăn/Em thích ăn] [cơm/cơm trắng/gạo] [hay/hay là] [thích ăn/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn gọi/Cậu gọi/Anh gọi/Chị gọi/Em gọi/Bạn muốn gọi/Cậu muốn gọi/Anh muốn gọi/Chị muốn gọi/Em muốn gọi] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn gọi/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn mua/Cậu mua/Anh mua/Chị mua/Em mua/Bạn muốn mua/Cậu muốn mua/Anh muốn mua/Chị muốn mua/Em muốn mua/Mua] [cơm/cơm trắng/gạo] [hay/hay là] [muốn/muốn mua/] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] thích [mì/mỳ] [hay/hay là] [thích/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                    "[Bạn ăn/Cậu ăn/Ăn/Anh ăn/Chị ăn/Em ăn/Bạn muốn ăn/Cậu muốn ăn/Anh muốn ăn/Chị muốn ăn/Em muốn ăn] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn ăn/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn mua/Cậu mua/Anh mua/Chị mua/Em mua/Bạn muốn mua/Cậu muốn mua/Anh muốn mua/Chị muốn mua/Em muốn mua/Mua] [mì/mỳ/bánh đa/miến/bún/phở/mì tôm/mỳ tôm/mì sợi/mỳ sợi] [hay/hay là] [muốn/muốn mua/] [cơm/cơm trắng/gạo] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/đây/đây ạ/]?",
                    "[Bạn/Cậu/Anh/Chị/Em/Con/Cháu/] thích [cơm/cơm trắng/gạo] [hay/hay là] [thích/] [mì/mỳ] [vậy/thế/nào/ạ/vậy ạ/thế ạ/nhỉ/]?",
                ],
                correctTokens: ["Cơm", "hay", "mì"],
                wrongTokens: ["và", "cà", "không", "nước"],
                choices: [
                    {
                        text: "Cơm",
                    },
                    {
                        text: "hay",
                    },
                    {
                        text: "mì",
                    },
                    {
                        text: "và",
                    },
                    {
                        text: "cà",
                    },
                    {
                        text: "không",
                    },
                    {
                        text: "nước",
                    },
                ],
                correctIndices: [0, 1, 2],
                sourceLanguage: "en",
                targetLanguage: "vi",
                grader: {
                    version: 0,
                    vertices: [
                        [
                            {
                                to: 1,
                                lenient: "",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 46,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 2,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 46,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 2,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 46,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 2,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 46,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 2,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 46,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 4,
                                lenient: "mua",
                                orig: "Mua",
                            },
                            {
                                to: 48,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 76,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 48,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 76,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 48,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 76,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 48,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 76,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 48,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 76,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 78,
                                lenient: "bánh",
                                orig: "Bánh",
                            },
                            {
                                to: 80,
                                lenient: "bún",
                                orig: "Bún",
                            },
                            {
                                to: 80,
                                lenient: "miến",
                                orig: "Miến",
                            },
                            {
                                to: 80,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 84,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 86,
                                lenient: "mì",
                                orig: "Mì",
                            },
                            {
                                to: 80,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 84,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 86,
                                lenient: "mỳ",
                                orig: "Mỳ",
                            },
                            {
                                to: 80,
                                lenient: "phở",
                                orig: "Phở",
                            },
                            {
                                to: 88,
                                lenient: "",
                            },
                            {
                                to: 129,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 129,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 129,
                                lenient: "cháu",
                                orig: "Cháu",
                            },
                            {
                                to: 129,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 129,
                                lenient: "con",
                                orig: "Con",
                            },
                            {
                                to: 129,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 129,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 131,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 133,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 131,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 133,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 131,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 133,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 131,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 133,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 131,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 133,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 135,
                                lenient: "ăn",
                                orig: "Ăn",
                            },
                            {
                                to: 147,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 149,
                                lenient: "anh",
                                orig: "Anh",
                            },
                            {
                                to: 147,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 149,
                                lenient: "bạn",
                                orig: "Bạn",
                            },
                            {
                                to: 147,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 149,
                                lenient: "chị",
                                orig: "Chị",
                            },
                            {
                                to: 147,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 149,
                                lenient: "cậu",
                                orig: "Cậu",
                            },
                            {
                                to: 147,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 149,
                                lenient: "em",
                                orig: "Em",
                            },
                            {
                                to: 151,
                                lenient: "ăn",
                                orig: "Ăn",
                            },
                            {
                                to: 175,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                            {
                                to: 179,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                            {
                                to: 175,
                                lenient: "gạo",
                                orig: "Gạo",
                            },
                            {
                                to: 181,
                                lenient: "cơm",
                                orig: "Cơm",
                            },
                        ],
                        [
                            {
                                to: 3,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 4,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 5,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "cơm",
                            },
                            {
                                to: 26,
                                lenient: "cơm",
                            },
                            {
                                to: 6,
                                lenient: "gạo",
                            },
                            {
                                to: 28,
                                lenient: "bánh",
                            },
                            {
                                to: 30,
                                lenient: "bún",
                            },
                            {
                                to: 30,
                                lenient: "miến",
                            },
                            {
                                to: 30,
                                lenient: "mì",
                            },
                            {
                                to: 42,
                                lenient: "mì",
                            },
                            {
                                to: 44,
                                lenient: "mì",
                            },
                            {
                                to: 30,
                                lenient: "mỳ",
                            },
                            {
                                to: 42,
                                lenient: "mỳ",
                            },
                            {
                                to: 44,
                                lenient: "mỳ",
                            },
                            {
                                to: 30,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 7,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "hay",
                            },
                            {
                                to: 24,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 9,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 22,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 11,
                                lenient: "bánh",
                            },
                            {
                                to: 13,
                                lenient: "bún",
                            },
                            {
                                to: 13,
                                lenient: "miến",
                            },
                            {
                                to: 13,
                                lenient: "mì",
                            },
                            {
                                to: 17,
                                lenient: "mì",
                            },
                            {
                                to: 19,
                                lenient: "mì",
                            },
                            {
                                to: 13,
                                lenient: "mỳ",
                            },
                            {
                                to: 17,
                                lenient: "mỳ",
                            },
                            {
                                to: 19,
                                lenient: "mỳ",
                            },
                            {
                                to: 13,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 12,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 14,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 185,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 185,
                                lenient: "nào",
                                orig: "nào?",
                            },
                            {
                                to: 15,
                                lenient: "thế",
                            },
                            {
                                to: 185,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 15,
                                lenient: "vậy",
                            },
                            {
                                to: 185,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                            {
                                to: 15,
                                lenient: "đây",
                            },
                            {
                                to: 185,
                                lenient: "đây",
                                orig: "đây?",
                            },
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 16,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 18,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 20,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 23,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 25,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 8,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 27,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 6,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 29,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 31,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "hay",
                            },
                            {
                                to: 40,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 33,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 38,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "cơm",
                            },
                            {
                                to: 35,
                                lenient: "cơm",
                            },
                            {
                                to: 13,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 36,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 13,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 39,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "mua",
                            },
                        ],
                        [
                            {
                                to: 41,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 32,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 43,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 45,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 30,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 47,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 2,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 49,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 50,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 51,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 52,
                                lenient: "cơm",
                            },
                            {
                                to: 60,
                                lenient: "cơm",
                            },
                            {
                                to: 52,
                                lenient: "gạo",
                            },
                            {
                                to: 62,
                                lenient: "bánh",
                            },
                            {
                                to: 64,
                                lenient: "bún",
                            },
                            {
                                to: 64,
                                lenient: "miến",
                            },
                            {
                                to: 64,
                                lenient: "mì",
                            },
                            {
                                to: 72,
                                lenient: "mì",
                            },
                            {
                                to: 74,
                                lenient: "mì",
                            },
                            {
                                to: 64,
                                lenient: "mỳ",
                            },
                            {
                                to: 72,
                                lenient: "mỳ",
                            },
                            {
                                to: 74,
                                lenient: "mỳ",
                            },
                            {
                                to: 64,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 53,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 54,
                                lenient: "hay",
                            },
                            {
                                to: 58,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 55,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 56,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 57,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 59,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 54,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 61,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 52,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 63,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 65,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 66,
                                lenient: "hay",
                            },
                            {
                                to: 70,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 67,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 68,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 69,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "gọi",
                            },
                        ],
                        [
                            {
                                to: 71,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 66,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 73,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 75,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 64,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 77,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 48,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 79,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 81,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "hay",
                            },
                            {
                                to: 82,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 83,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 85,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 87,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 80,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 89,
                                lenient: "thích",
                            },
                            {
                                to: 113,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 90,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 91,
                                lenient: "cơm",
                            },
                            {
                                to: 101,
                                lenient: "cơm",
                            },
                            {
                                to: 91,
                                lenient: "gạo",
                            },
                            {
                                to: 103,
                                lenient: "mì",
                            },
                            {
                                to: 103,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 92,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 93,
                                lenient: "hay",
                            },
                            {
                                to: 99,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 94,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: "",
                            },
                            {
                                to: 98,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "mì",
                            },
                            {
                                to: 96,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 97,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "",
                                orig: "?",
                            },
                            {
                                to: 185,
                                lenient: "nhỉ",
                                orig: "nhỉ?",
                            },
                            {
                                to: 185,
                                lenient: "nào",
                                orig: "nào?",
                            },
                            {
                                to: 15,
                                lenient: "thế",
                            },
                            {
                                to: 185,
                                lenient: "thế",
                                orig: "thế?",
                            },
                            {
                                to: 15,
                                lenient: "vậy",
                            },
                            {
                                to: 185,
                                lenient: "vậy",
                                orig: "vậy?",
                            },
                            {
                                to: 185,
                                lenient: "ạ",
                                orig: "ạ?",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 100,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 93,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 102,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 91,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 104,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 105,
                                lenient: "hay",
                            },
                            {
                                to: 111,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 106,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: "",
                            },
                            {
                                to: 110,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "cơm",
                            },
                            {
                                to: 108,
                                lenient: "cơm",
                            },
                            {
                                to: 96,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 109,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 96,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 112,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 105,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 114,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 115,
                                lenient: "cơm",
                            },
                            {
                                to: 121,
                                lenient: "cơm",
                            },
                            {
                                to: 115,
                                lenient: "gạo",
                            },
                            {
                                to: 123,
                                lenient: "mì",
                            },
                            {
                                to: 123,
                                lenient: "mỳ",
                            },
                        ],
                        [
                            {
                                to: 116,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 117,
                                lenient: "hay",
                            },
                            {
                                to: 119,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 118,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 95,
                                lenient: "",
                            },
                            {
                                to: 98,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 120,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 117,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 122,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 115,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 124,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 125,
                                lenient: "hay",
                            },
                            {
                                to: 127,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 126,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 107,
                                lenient: "",
                            },
                            {
                                to: 110,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 128,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 125,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 130,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 89,
                                lenient: "thích",
                            },
                            {
                                to: 113,
                                lenient: "cần",
                            },
                        ],
                        [
                            {
                                to: 132,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 133,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 134,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 135,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 136,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 137,
                                lenient: "cơm",
                            },
                            {
                                to: 145,
                                lenient: "cơm",
                            },
                            {
                                to: 137,
                                lenient: "gạo",
                            },
                        ],
                        [
                            {
                                to: 138,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 139,
                                lenient: "hay",
                            },
                            {
                                to: 143,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 140,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 141,
                                lenient: "thích",
                            },
                        ],
                        [
                            {
                                to: 142,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 144,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 139,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 146,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 137,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 148,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 149,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 150,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 151,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 152,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 153,
                                lenient: "cơm",
                            },
                            {
                                to: 159,
                                lenient: "cơm",
                            },
                            {
                                to: 153,
                                lenient: "gạo",
                            },
                            {
                                to: 161,
                                lenient: "bánh",
                            },
                            {
                                to: 163,
                                lenient: "bún",
                            },
                            {
                                to: 163,
                                lenient: "miến",
                            },
                            {
                                to: 163,
                                lenient: "mì",
                            },
                            {
                                to: 171,
                                lenient: "mì",
                            },
                            {
                                to: 173,
                                lenient: "mì",
                            },
                            {
                                to: 163,
                                lenient: "mỳ",
                            },
                            {
                                to: 171,
                                lenient: "mỳ",
                            },
                            {
                                to: 173,
                                lenient: "mỳ",
                            },
                            {
                                to: 163,
                                lenient: "phở",
                            },
                        ],
                        [
                            {
                                to: 154,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 155,
                                lenient: "hay",
                            },
                            {
                                to: 157,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 156,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 10,
                                lenient: "",
                            },
                            {
                                to: 21,
                                lenient: "muốn",
                            },
                            {
                                to: 141,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 158,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 155,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 160,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 153,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 162,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "đa",
                            },
                        ],
                        [
                            {
                                to: 164,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 165,
                                lenient: "hay",
                            },
                            {
                                to: 169,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 166,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 34,
                                lenient: "",
                            },
                            {
                                to: 37,
                                lenient: "muốn",
                            },
                            {
                                to: 167,
                                lenient: "muốn",
                            },
                        ],
                        [
                            {
                                to: 168,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 37,
                                lenient: "ăn",
                            },
                        ],
                        [
                            {
                                to: 170,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 165,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 172,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "sợi",
                            },
                        ],
                        [
                            {
                                to: 174,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 163,
                                lenient: "tôm",
                            },
                        ],
                        [
                            {
                                to: 176,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "hay",
                            },
                            {
                                to: 177,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 178,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 21,
                                lenient: "là",
                            },
                        ],
                        [
                            {
                                to: 180,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 175,
                                lenient: "trắng",
                            },
                        ],
                        [
                            {
                                to: 182,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 183,
                                lenient: "hay",
                            },
                        ],
                        [
                            {
                                to: 184,
                                lenient: " ",
                            },
                        ],
                        [
                            {
                                to: 185,
                                lenient: "mì",
                                orig: "mì?",
                            },
                        ],
                        [],
                    ],
                    language: "vi",
                    whitespaceDelimited: true,
                },
                taggedKcIds: [
                    {
                        legacyId: "b314eb04f77f9a6f277a4f6546d51287",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "80148baf63314508961d9df0d6f5afcb",
                        kcTypeStr: "lex",
                    },
                    {
                        legacyId: "edbdf0f154d4b81ab2d2c0262690acad",
                        kcTypeStr: "lex",
                    },
                ],
                tokens: [
                    {
                        value: "Rice",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/08a90e2588c74334d32b02f5f5e50dd3",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "cơm",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "gạo",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "or",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/694d36d50f9779e02e828bc24f3f376b",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hay là",
                                    },
                                ],
                                [
                                    {
                                        colspan: 1,
                                        hint: "hoặc",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: " ",
                    },
                    {
                        value: "noodles",
                        tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/0de7773e14711fa477ccfb4087d9184e",
                        hintTable: {
                            headers: [],
                            rows: [
                                [
                                    {
                                        colspan: 1,
                                        hint: "mì",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        value: "?",
                    },
                ],
                tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/38882832e51fc4171c00a8c657218bbf",
                character: {
                    url: "https://d2pur3iezf4d1j.cloudfront.net/images/b53f870ed38105349d4d83edf682d77f",
                    image: {
                        pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/b53f870ed38105349d4d83edf682d77f",
                        svg: "https://d2pur3iezf4d1j.cloudfront.net/images/096d0b1f6280b962cd7080a7736dd2bb",
                    },
                    gender: "MALE",
                    correctAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Eddy_CORRECT_Cropped_Cheer.json",
                    incorrectAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Coach_INCORRECT_Cropped.json",
                    idleAnimation:
                        "https://simg-ssl.duolingo.com/lottie/Eddy_IDLE_Cropped.json",
                },
                type: "translate",
                id: "1961de332e7d408dab6928abf369ff66",
                challengeResponseTrackingProperties: {
                    level_session_index: 2,
                    grading_graph_size: 11046,
                    num_tap_distractors: 4.0,
                    birdbrain_source: "birdbrain_v2",
                    num_correct_answer_tokens: 3.0,
                    generation_timestamp: 1679725490815,
                    is_v2: true,
                    birdbrain_probability: 0.82368994,
                    content_length: 16.0,
                    tagged_kc_ids: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                },
                metadata: {
                    challenge_construction_insights: {
                        birdbrain_probability: 0.82368994,
                        birdbrain_source: "birdbrain_v2",
                        num_tap_distractors: 4,
                        content_length: 16,
                        num_correct_answer_tokens: 3,
                    },
                    highlight: [],
                    indicator_type: {
                        name: "EASY_CHALLENGE",
                    },
                    sentence: "Rice or noodles?",
                    solution_key: "7aa378eeba97f0601fca257272e949fb",
                    source_language: "en",
                    target_language: "vi",
                    tokens: ["Cơm", "hay", "mì"],
                    translation: "Cơm hay mì?",
                    wrong_tokens: ["và", "cà", "không", "nước"],
                    text: "Rice or noodles?",
                    specific_type: "tap",
                    lexeme_ids_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                    type: "translate",
                    lexemes_to_update: [
                        "b314eb04f77f9a6f277a4f6546d51287",
                        "80148baf63314508961d9df0d6f5afcb",
                        "edbdf0f154d4b81ab2d2c0262690acad",
                    ],
                    generic_lexeme_map: {},
                    num_comments: 0,
                    learning_language: "en",
                    from_language: "vi",
                },
                newWords: [],
                progressUpdates: [],
                sentenceId: "7aa378eeba97f0601fca257272e949fb",
                sentenceDiscussionId: "7aa378eeba97f0601fca257272e949fb",
                challengeGeneratorIdentifier: {
                    specificType: "tap",
                    generatorId: "7aa378eeba97f0601fca257272e949fb",
                },
                indicatorType: "EASY_CHALLENGE",
            },
        ],
        mistakesReplacementChallenges: [],
        adaptiveInterleavedChallenges: {
            challenges: [
                {
                    prompt: "Thank you.",
                    correctSolutions: ["Cảm ơn."],
                    compactTranslations: [
                        "Cảm ơn.",
                        "[Xin/] [cảm ơn/cám ơn] [bạn/các bạn/cậu/các cậu/] [nhé/nha/ạ/].",
                    ],
                    correctTokens: ["Cảm", "ơn"],
                    wrongTokens: ["phê", "tạm", "biệt", "cho"],
                    choices: [
                        {
                            text: "Cảm",
                        },
                        {
                            text: "ơn",
                        },
                        {
                            text: "phê",
                        },
                        {
                            text: "tạm",
                        },
                        {
                            text: "biệt",
                        },
                        {
                            text: "cho",
                        },
                    ],
                    correctIndices: [0, 1],
                    sourceLanguage: "en",
                    targetLanguage: "vi",
                    grader: {
                        version: 0,
                        vertices: [
                            [
                                {
                                    to: 1,
                                    lenient: "",
                                },
                            ],
                            [
                                {
                                    to: 2,
                                    lenient: "cảm",
                                    orig: "Cảm",
                                },
                                {
                                    to: 4,
                                    lenient: "",
                                },
                                {
                                    to: 15,
                                    lenient: "xin",
                                    orig: "Xin",
                                },
                            ],
                            [
                                {
                                    to: 3,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 17,
                                    lenient: "ơn",
                                    orig: "ơn.",
                                },
                            ],
                            [
                                {
                                    to: 5,
                                    lenient: "cám",
                                },
                                {
                                    to: 5,
                                    lenient: "cảm",
                                },
                            ],
                            [
                                {
                                    to: 6,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 7,
                                    lenient: "ơn",
                                },
                            ],
                            [
                                {
                                    to: 8,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 9,
                                    lenient: "",
                                },
                                {
                                    to: 10,
                                    lenient: "bạn",
                                },
                                {
                                    to: 11,
                                    lenient: "các",
                                },
                                {
                                    to: 13,
                                    lenient: "các",
                                },
                                {
                                    to: 10,
                                    lenient: "cậu",
                                },
                            ],
                            [
                                {
                                    to: 17,
                                    lenient: "",
                                    orig: ".",
                                },
                                {
                                    to: 17,
                                    lenient: "nha",
                                    orig: "nha.",
                                },
                                {
                                    to: 17,
                                    lenient: "nhé",
                                    orig: "nhé.",
                                },
                                {
                                    to: 17,
                                    lenient: "ạ",
                                    orig: "ạ.",
                                },
                                {
                                    to: 17,
                                    lenient: "aw",
                                    type: "typo",
                                    orig: "ạ.",
                                },
                                {
                                    to: 17,
                                    lenient: "aa",
                                    type: "typo",
                                    orig: "ạ.",
                                },
                                {
                                    to: 17,
                                    lenient: "as",
                                    type: "typo",
                                    orig: "ạ.",
                                },
                            ],
                            [
                                {
                                    to: 9,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 12,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 10,
                                    lenient: "bạn",
                                },
                            ],
                            [
                                {
                                    to: 14,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 10,
                                    lenient: "cậu",
                                },
                            ],
                            [
                                {
                                    to: 16,
                                    lenient: " ",
                                },
                            ],
                            [
                                {
                                    to: 5,
                                    lenient: "cám",
                                },
                                {
                                    to: 5,
                                    lenient: "cảm",
                                },
                            ],
                            [],
                        ],
                        language: "vi",
                        whitespaceDelimited: true,
                    },
                    taggedKcIds: [
                        {
                            legacyId: "cbec8d612a8909ad79bc92ef63853a54",
                            kcTypeStr: "lex",
                        },
                    ],
                    tokens: [
                        {
                            value: "Thank",
                            tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/dce607f2a1fd64365084919d7a2ec26f",
                            hintTable: {
                                headers: ["thank", "you"],
                                rows: [
                                    [
                                        {
                                            colspan: 2,
                                            hint: "cảm ơn",
                                        },
                                    ],
                                    [
                                        {
                                            colspan: 1,
                                            hint: "cảm ơn",
                                        },
                                        {
                                            colspan: 1,
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            value: " ",
                        },
                        {
                            value: "you",
                            tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/2bfc7a9965006f29cc400305f1156554",
                            hintTable: {
                                headers: ["thank", "you"],
                                rows: [
                                    [
                                        {
                                            colspan: 2,
                                            hint: "cảm ơn",
                                        },
                                    ],
                                    [
                                        {
                                            colspan: 1,
                                        },
                                        {
                                            colspan: 1,
                                            hint: "cậu",
                                        },
                                    ],
                                    [
                                        {
                                            colspan: 1,
                                        },
                                        {
                                            colspan: 1,
                                            hint: "các bạn",
                                        },
                                    ],
                                    [
                                        {
                                            colspan: 1,
                                        },
                                        {
                                            colspan: 1,
                                            hint: "bạn",
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            value: ".",
                        },
                    ],
                    tts: "https://d1vq87e9lcf771.cloudfront.net/eddyen/299ec1d36bb8beabc61ca0aba63b2398",
                    character: {
                        url: "https://d2pur3iezf4d1j.cloudfront.net/images/b53f870ed38105349d4d83edf682d77f",
                        image: {
                            pdf: "https://d2pur3iezf4d1j.cloudfront.net/images/b53f870ed38105349d4d83edf682d77f",
                            svg: "https://d2pur3iezf4d1j.cloudfront.net/images/096d0b1f6280b962cd7080a7736dd2bb",
                        },
                        gender: "MALE",
                        correctAnimation:
                            "https://simg-ssl.duolingo.com/lottie/Eddy_CORRECT_Cropped_Flex.json",
                        incorrectAnimation:
                            "https://simg-ssl.duolingo.com/lottie/Coach_INCORRECT_Cropped.json",
                        idleAnimation:
                            "https://simg-ssl.duolingo.com/lottie/Eddy_IDLE_Cropped.json",
                    },
                    type: "translate",
                    id: "e60b7ca702524e17a60cbc4100cdb9c0",
                    challengeResponseTrackingProperties: {
                        level_session_index: 2,
                        grading_graph_size: 1069,
                        num_tap_distractors: 4.0,
                        num_correct_answer_tokens: 2.0,
                        generation_timestamp: 1679725490815,
                        is_v2: true,
                        tagged_kc_ids: ["cbec8d612a8909ad79bc92ef63853a54"],
                    },
                    metadata: {
                        challenge_construction_insights: {
                            num_tap_distractors: 4,
                            num_correct_answer_tokens: 2,
                        },
                        highlight: [],
                        sentence: "Thank you.",
                        solution_key: "74d605847359ba772d0bd63badf586b8",
                        source_language: "en",
                        target_language: "vi",
                        tokens: ["Cảm", "ơn"],
                        translation: "Cảm ơn.",
                        wrong_tokens: ["phê", "tạm", "biệt", "cho"],
                        text: "Thank you.",
                        specific_type: "tap",
                        lexeme_ids_to_update: [
                            "cbec8d612a8909ad79bc92ef63853a54",
                        ],
                        type: "translate",
                        lexemes_to_update: ["cbec8d612a8909ad79bc92ef63853a54"],
                        generic_lexeme_map: {},
                        num_comments: 0,
                        learning_language: "en",
                        from_language: "vi",
                    },
                    newWords: [],
                    progressUpdates: [],
                    sentenceId: "74d605847359ba772d0bd63badf586b8",
                    sentenceDiscussionId: "74d605847359ba772d0bd63badf586b8",
                    challengeGeneratorIdentifier: {
                        specificType: "tap",
                        generatorId: "74d605847359ba772d0bd63badf586b8",
                    },
                },
            ],
            harderComboConsecutives: 5,
            easierComboConsecutives: 1,
            harderChallengeReplacementIndices: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
            easierChallengeReplacementIndices: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
            speakOrListenReplacementIndices: [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                0,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ],
        },
        metadata: {
            id: "OgoOMX2ipR3KNv28",
            checkpoint_quiz_elements: [],
            type: "lesson",
            target_lexeme_ids: [
                "cbec8d612a8909ad79bc92ef63853a54",
                "87c450efea56f8f35f5ca4e48906a192",
                "80148baf63314508961d9df0d6f5afcb",
                "c52ab45d4e22ee7580041911159e3c0c",
                "18204d89f24410e93d66889c7c7399d7",
            ],
            teaches_lexeme_ids: [
                "c52ab45d4e22ee7580041911159e3c0c",
                "18204d89f24410e93d66889c7c7399d7",
                "87c450efea56f8f35f5ca4e48906a192",
                "cbec8d612a8909ad79bc92ef63853a54",
                "80148baf63314508961d9df0d6f5afcb",
            ],
            kc_strength_model_version: 2,
            pass_strength: 1.4527516651572956,
            min_strength_increment: 0.1,
            min_strength_decrement: 0.075,
            mixture_models: {
                "18204d89f24410e93d66889c7c7399d7": {},
                "80148baf63314508961d9df0d6f5afcb": {},
                "87c450efea56f8f35f5ca4e48906a192": {},
                c52ab45d4e22ee7580041911159e3c0c: {},
                cbec8d612a8909ad79bc92ef63853a54: {},
            },
            language: "en",
            from_language: "vi",
            ui_language: "vi",
            language_string: "English",
            tts_enabled: true,
            skill_id: "5270a313c05e576957c200a745fea658",
            skill_tree_id: "d0ad5fadbcebad14d0e7656356708486",
            skill_tree_level: 1,
            skill_name: "Cơ bản",
            skill_title: "Cơ bản",
            skill_index: 1,
            skill_color: "blue",
            beginner: true,
            lesson_number: 3,
            first_lesson: false,
            level_index: 0,
            level_session_index: 2,
            hints_url: "d2.duolingo.com/api/1/dictionary/hints",
            experiments: [
                "linfra_cds_built_summ_listen_tap_v1",
                "linfra_cds_built_summ_listen_complete_1",
                "linfra_cds_built_summ_listen_v1",
                "linfra_cds_built_summ_listen_speak_v1",
                "linfra_cds_built_summ_speak_v1",
            ],
            experiments_with_treatment_contexts: {
                linfra_cds_built_summ_listen_tap_v1: [
                    "postFilter",
                    "preFilter",
                ],
                linfra_cds_built_summ_listen_complete_1: ["preFilter"],
                linfra_cds_built_summ_listen_v1: ["preFilter"],
                linfra_cds_built_summ_listen_speak_v1: ["preFilter"],
                linfra_cds_built_summ_speak_v1: ["preFilter"],
            },
            is_restore: false,
            session_construction_insights: {
                challenge_pool_before_picking: [],
                rejected_challenges_info: [],
                num_challenges_after_default_quality_score_filtering: 36,
                picked_challenges_info: {
                    challenges: [],
                    parent_target_kcids: {},
                },
            },
            show_best_translation_in_grading_ribbon: true,
        },
        ttsAnnotations: {
            "https://d1vq87e9lcf771.cloudfront.net/vikramen/23e77b229473ac454b919a286de4980c":
                {
                    visemes:
                        "116\t192\t117\n101\t309\t148\n118\t457\t54\n118\t512\t62\n103\t574\t132\n104\t707\t273\n100\t991\t784",
                },
            "https://d1vq87e9lcf771.cloudfront.net/vikramen/12e11c9778d9e72cdc8b9e7f81d81ad9":
                {
                    visemes: "103\t128\t289\n104\t417\t335\n100\t763\t749",
                },
            "https://d1vq87e9lcf771.cloudfront.net/beaen/7bd015096d0ead1602c72f9651667d64":
                {
                    visemes: "105\t128\t179\n104\t307\t414\n100\t731\t708",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/d93b313e3973992dc0bdc2e74d919fe4":
                {
                    visemes:
                        "116\t0\t117\n101\t117\t218\n118\t335\t54\n118\t390\t265\n100\t666\t77",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/5d274c58b09c2736b7f1d61aaf542145":
                {
                    visemes:
                        "105\t96\t109\n104\t205\t195\n105\t400\t39\n102\t439\t70\n108\t510\t242\n113\t752\t257\n100\t1020\t731",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/08a90e2588c74334d32b02f5f5e50dd3":
                {
                    visemes:
                        "120\t96\t234\n103\t330\t195\n113\t525\t390\n100\t926\t729",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lucyen/530e7f39575dea9da03c7a0aed4ea60a":
                {
                    visemes:
                        "118\t128\t132\n104\t260\t179\n109\t440\t148\n105\t588\t289\n104\t878\t125\n120\t1003\t85\n105\t1088\t164\n105\t1253\t523\n100\t1786\t733",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/d6a43821b34f06b239ec58c8181c016d":
                {
                    visemes:
                        "120\t128\t54\n103\t182\t273\n113\t456\t78\n100\t534\t140\n105\t674\t132\n104\t807\t140\n105\t948\t23\n102\t971\t46\n108\t1018\t148\n113\t1167\t257\n100\t1434\t773",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/694d36d50f9779e02e828bc24f3f376b":
                {
                    visemes: "104\t96\t343\n120\t439\t281\n100\t731\t781",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/b6e00e71b892b072e5d2f222f0cdd17c":
                {
                    visemes: "107\t96\t101\n103\t197\t554\n100\t762\t725",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/194b066034a49c39508bf22227644a5d":
                {
                    visemes:
                        "120\t64\t23\n103\t87\t289\n113\t376\t242\n101\t618\t125\n105\t743\t101\n105\t845\t23\n110\t868\t39\n104\t907\t203\n105\t1110\t46\n100\t1157\t429\n100\t1597\t754",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/481734fc4e11307e61c90c33860f0999":
                {
                    visemes: "104\t128\t250\n120\t378\t375\n100\t763\t749",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/dce607f2a1fd64365084919d7a2ec26f":
                {
                    visemes:
                        "116\t128\t156\n101\t284\t187\n118\t471\t125\n118\t596\t218\n100\t825\t782",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/53cea45b16407c784db7ed3c8f9a8e98":
                {
                    visemes:
                        "116\t0\t101\n101\t101\t70\n118\t171\t101\n118\t273\t70\n103\t343\t164\n104\t507\t281\n100\t799\t88",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/13040984229814499c446cd74a0cb5c9":
                {
                    visemes: "104\t128\t281\n120\t409\t312\n100\t731\t708",
                },
            "https://d1vq87e9lcf771.cloudfront.net/linen/429d12cd2ee418b0a6dd0ff10fe94a6f":
                {
                    visemes: "107\t96\t125\n103\t221\t695\n100\t926\t729",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/80f32f5317fa92c267664a82ac1ae546":
                {
                    visemes: "105\t128\t210\n104\t338\t382\n100\t731\t732",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/4e2a4e2a2db6c723faedddf5e07f919c":
                {
                    visemes: "103\t0\t312\n104\t312\t281\n100\t603\t92",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/f226d6222293e3187995eb08f59f3160":
                {
                    visemes:
                        "116\t64\t31\n101\t95\t210\n118\t306\t140\n118\t446\t179\n100\t636\t755",
                },
            "https://d1vq87e9lcf771.cloudfront.net/linen/1123cef4097e92445f11b4b0af4d8edd":
                {
                    visemes: "103\t128\t359\n104\t487\t429\n100\t927\t704",
                },
            "https://d1vq87e9lcf771.cloudfront.net/linen/7efc33381a89ad509c5627cdd5d20ae7":
                {
                    visemes:
                        "116\t128\t23\n101\t151\t179\n118\t331\t164\n118\t495\t62\n103\t557\t250\n104\t807\t125\n107\t932\t164\n103\t1096\t648\n100\t1755\t740",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/299ec1d36bb8beabc61ca0aba63b2398":
                {
                    visemes:
                        "116\t128\t117\n101\t245\t117\n118\t362\t78\n118\t440\t62\n103\t503\t109\n104\t612\t273\n100\t895\t712",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/e93a91d1c806f2b6fc10827f09ad06b1":
                {
                    visemes: "104\t96\t289\n120\t385\t304\n100\t699\t332",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lucyen/31674a2e37cf80e07c234b871bf59eb3":
                {
                    visemes: "105\t128\t148\n105\t276\t507\n100\t794\t741",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/14460ea87de8d80abd1b4cbb1e665fc3":
                {
                    visemes:
                        "116\t64\t101\n101\t165\t250\n118\t415\t62\n118\t478\t195\n103\t673\t23\n104\t696\t1148\n100\t1855\t328",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/fdae143c2f3b99e28a1c85c18b62cd8c":
                {
                    visemes:
                        "101\t96\t343\n105\t439\t109\n105\t549\t203\n100\t762\t749",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/e80918e87d587339e38f6b92039a8b27":
                {
                    visemes:
                        "110\t96\t101\n104\t197\t210\n105\t408\t46\n100\t455\t460\n100\t926\t753",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/c3eea106e02862a7a61e5228c3a3cab7":
                {
                    visemes:
                        "120\t96\t23\n103\t119\t265\n113\t385\t226\n104\t611\t70\n120\t681\t78\n105\t760\t93\n104\t853\t179\n105\t1033\t39\n102\t1072\t78\n108\t1150\t195\n113\t1346\t242\n100\t1598\t729",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/694835dfe3479ca7ebb51a1ecc526906":
                {
                    visemes:
                        "116\t128\t195\n101\t323\t78\n118\t401\t85\n118\t487\t70\n103\t557\t93\n104\t651\t296\n100\t958\t217",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/6d3e79ae98ecb09d49b2a13edc61270b":
                {
                    visemes:
                        "110\t128\t195\n104\t323\t140\n105\t463\t31\n100\t495\t351\n100\t856\t319",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/f338c7d44695f8867edc0cb713e825e8":
                {
                    visemes:
                        "102\t128\t85\n112\t213\t203\n105\t417\t242\n100\t669\t746",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/362a17e6d03da034fb872cdc8e6d5ea9":
                {
                    visemes:
                        "103\t128\t250\n113\t378\t234\n105\t612\t171\n100\t794\t261",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/05832eb0ac4abf3e2a2e4bc178ab20bf":
                {
                    visemes:
                        "103\t128\t140\n101\t268\t226\n113\t495\t289\n100\t794\t789",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/9b6277291873ca27ada13fbdaee2a1ac":
                {
                    visemes:
                        "105\t96\t242\n104\t338\t281\n116\t619\t140\n101\t760\t70\n118\t830\t117\n118\t947\t70\n103\t1017\t171\n104\t1189\t234\n100\t1434\t773",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lucyen/aea2893239286d85d11e0fc48860c637":
                {
                    visemes: "104\t128\t343\n120\t471\t343\n100\t825\t710",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lilyen/5aa16d235dcbf79fc53ee2fc832dd90c":
                {
                    visemes:
                        "120\t96\t31\n103\t127\t343\n113\t471\t382\n100\t863\t720",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/aed4e17a03549c16055c6b8ddbff890f":
                {
                    visemes:
                        "102\t128\t156\n112\t284\t156\n105\t440\t312\n100\t763\t269",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/8eff9a0dc6c96cd19937a7c4c995c133":
                {
                    visemes:
                        "103\t0\t164\n101\t164\t156\n113\t320\t398\n100\t728\t87",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/63d04bcfb587a94df4705203a6b27076":
                {
                    visemes:
                        "103\t128\t351\n113\t479\t101\n105\t581\t234\n100\t825\t758",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/9ef096e9681c44bd8bcc8f17d799d083":
                {
                    visemes:
                        "116\t96\t31\n101\t127\t117\n118\t244\t124\n118\t369\t54\n103\t424\t203\n104\t627\t226\n100\t863\t768",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/65a8b996e1117b8bf4f5822a964612d1":
                {
                    visemes: "103\t128\t187\n104\t315\t343\n100\t669\t722",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/2bfc7a9965006f29cc400305f1156554":
                {
                    visemes: "103\t128\t218\n104\t346\t437\n100\t794\t741",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/0de7773e14711fa477ccfb4087d9184e":
                {
                    visemes:
                        "105\t96\t210\n104\t306\t156\n105\t463\t23\n102\t486\t31\n108\t517\t109\n113\t627\t320\n100\t957\t746",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/a4c54cfc8fc48b719a8e6178ac8828f8":
                {
                    visemes:
                        "118\t96\t156\n104\t252\t117\n109\t369\t109\n105\t478\t335\n100\t824\t279",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/e6a299c71a34cb1f2d91bf6c3dd636a2":
                {
                    visemes: "107\t32\t85\n103\t117\t476\n100\t604\t115",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/9fdbb4ede9f6e6fd7908138701eef163":
                {
                    visemes: "105\t0\t148\n104\t148\t414\n100\t572\t123",
                },
            "https://d1vq87e9lcf771.cloudfront.net/linen/222bc698304b1511e022ef10afd03a70":
                {
                    visemes:
                        "116\t128\t195\n101\t323\t257\n118\t581\t187\n118\t768\t210\n100\t989\t714",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/ca9ea3cbca527888e57e3404d4949a12":
                {
                    visemes:
                        "120\t128\t117\n103\t245\t226\n113\t471\t250\n100\t731\t828",
                },
            "https://d1vq87e9lcf771.cloudfront.net/miranda/5a642b17f3d75eebbfcdb07b26327b6c":
                {
                    visemes: "105\t0\t171\n105\t171\t390\n100\t572\t99",
                },
            "https://d1vq87e9lcf771.cloudfront.net/vikramen/8f518b84146b55b87c9ee9b4893ab04b":
                {
                    visemes:
                        "116\t128\t125\n101\t253\t187\n118\t440\t93\n118\t534\t156\n100\t700\t787",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/428d9ce40eddcec0b8fecb28a2f90de5":
                {
                    visemes:
                        "105\t128\t148\n104\t276\t132\n105\t409\t31\n102\t440\t70\n108\t510\t125\n113\t635\t250\n100\t895\t760",
                },
            "https://d1vq87e9lcf771.cloudfront.net/beaen/c6ccf83e7e51f2f5b661c7e92628b316":
                {
                    visemes: "105\t128\t179\n104\t307\t414\n100\t731\t708",
                },
            "https://d1vq87e9lcf771.cloudfront.net/lucyen/498e2f709468431cc5f68fdd8e46c76b":
                {
                    visemes:
                        "118\t128\t132\n104\t260\t179\n109\t440\t148\n105\t588\t359\n100\t958\t721",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/1fe05377ce4ed8099668239e48e26c48":
                {
                    visemes: "102\t128\t171\n103\t299\t515\n100\t825\t254",
                },
            "https://d1vq87e9lcf771.cloudfront.net/zarien/ba89d0fff3db647c3264a8265a5e0e68":
                {
                    visemes: "107\t96\t101\n103\t197\t554\n100\t762\t725",
                },
            "https://d1vq87e9lcf771.cloudfront.net/eddyen/38882832e51fc4171c00a8c657218bbf":
                {
                    visemes:
                        "120\t128\t187\n103\t315\t140\n113\t456\t257\n104\t713\t62\n120\t776\t46\n105\t823\t101\n104\t924\t140\n105\t1065\t23\n102\t1088\t46\n108\t1135\t109\n113\t1245\t312\n100\t1567\t736",
                },
            "https://d1vq87e9lcf771.cloudfront.net/falstaffen/3eca4f8a251df6f1e8a8f965d231da93":
                {
                    visemes:
                        "118\t96\t132\n104\t228\t132\n109\t361\t109\n105\t471\t265\n104\t736\t171\n120\t908\t93\n110\t1002\t148\n104\t1150\t156\n105\t1306\t39\n100\t1346\t335\n100\t1691\t276",
                },
        },
        trackingProperties: {
            percent_target_kc_coverage: 1.0,
            skill_x_coord: 1,
            skill_tree_id: "d0ad5fadbcebad14d0e7656356708486",
            num_adaptive_challenges_gt_tap: 1,
            data_version: "default",
            max_repeated_challenge_type_count: 9,
            tree_level: 1,
            lexemes_were_reordered: false,
            uses_birdbrain_sorting: true,
            type: "lesson",
            num_challenges_generated: 15,
            is_shorter_than_expected: false,
            num_challenges_gt_assist: 2,
            num_adaptive_challenges_gt_assist: 1,
            uses_birdbrain_picking: false,
            num_challenges_after_failure_rate_filter: 36,
            num_easier_adaptive_challenges_gt: 2,
            learning_language: "en",
            num_challenges_gt_tap: 9,
            num_challenges_with_challenge_stats: 13,
            max_repeated_challenge_type: "tap",
            generation_timestamp: 1679725490815,
            max_repeated_sentence_count: 1,
            max_repeated_challenge_count: 1,
            max_repeated_undirected_sentence_count: 1,
            num_low_quality_challenges: 0,
            sentences_count: 10,
            num_challenges_gt: 15,
            num_easier_adaptive_challenges_generated: 2,
            num_sensitive_content_filtered: 0,
            distinct_sentences_count: 10,
            num_adaptive_challenges_generated: 2,
            num_challenges_gt_listen_tap: 1,
            max_repeated_sentence: "c12afa76d45d0641bf4e6374bf048442",
            uses_birdbrain: true,
            read_from_cache: false,
            num_adaptive_challenges_gt: 2,
            from_language: "vi",
            percent_low_quality_challenges: 0.0,
            sum_content_length: 131,
            percent_kc_coverage: 1.0,
            max_consecutive_challenge_type_count: 2,
            expected_length: 15,
            offline: false,
            num_interleaved_adaptive_challenges_gt: 0,
            activity_uuid: "29798352-af81-4698-a6c1-279e4c095805",
            num_sensitivity_labels_of_user: 0,
            level_index: 0,
            avg_content_length: 8.733333333333333,
            level_session_index: 2,
            generation_app_version: "5.0",
            max_consecutive_challenge_type: "tap",
            max_repeated_undirected_sentence:
                "c12afa76d45d0641bf4e6374bf048442",
            skill_name: "Cơ bản",
            distinct_undirected_sentences_count: 10,
            skill_id: "5270a313c05e576957c200a745fea658",
            grading_graph_sizes_sum: 28129,
            num_challenges_gt_name_example: 1,
            lesson_number: 3,
            num_challenges_gt_match: 2,
        },
        beginner: true,
        skillId: "5270a313c05e576957c200a745fea658",
        sessionStartExperiments: [
            "linfra_cds_built_summ_listen_tap_v1",
            "linfra_cds_built_summ_listen_complete_1",
            "linfra_cds_built_summ_listen_v1",
            "linfra_cds_built_summ_listen_speak_v1",
            "linfra_cds_built_summ_speak_v1",
        ],
        lessonIndex: 2,
        levelIndex: 0,
        levelSessionIndex: 2,
        preSessionScreens: [],
        challengeTimeTakenCutoff: 60000,
        explanations: {},
        progressUpdates: [],
        isV2: true,
        showBestTranslationInGradingRibbon: true,
    })
);
