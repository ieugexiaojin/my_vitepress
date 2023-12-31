import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "医学前沿进展",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ADA 奖项', link: '/ADA 奖项/国家科学和卫生保健成就奖/Banting科学成就奖.md' },
      { text: '疾病进展', link: '/疾病进展/肥胖专题/药物治疗在糖尿病和肥胖治疗中的作用-一种新的治疗模式-将持续减肥作为2型糖尿病的治疗.md' },
      { text: '糖尿病管理', link: '/糖尿病管理/2型糖尿病高血糖管理/2022版ADA-EASD-2型糖尿病高血糖管理共识-草案-.md' },
      { text: '治疗进展', link: '/治疗进展/肠促激素专题/度拉糖肽治疗2型糖尿病-T2D-青少年患者-AWARD-PEDS随机-安慰剂对照试验的结果.md' },
      { text: '中国声音', link: '/中国声音/智能胰岛素贴片等/智能胰岛素贴片.md' },
    ],

    
    sidebar:{
        "/ADA 奖项/": [
          {
            "text": "ADA 奖项",
            "items": [
              {
                "text": "ADA专业委员会奖",
                "items": [
                  {
                    "text": "EdwinBierman奖",
                    "link": "ADA 奖项/ADA专业委员会奖/EdwinBierman奖"
                  },
                  {
                    "text": "NorbertFreinkel奖",
                    "link": "ADA 奖项/ADA专业委员会奖/NorbertFreinkel奖"
                  }
                ]
              },
              {
                "text": "国家科学和卫生保健成就奖",
                "items": [
                  {
                    "text": "Banting科学成就奖",
                    "link": "ADA 奖项/国家科学和卫生保健成就奖/Banting科学成就奖"
                  },
                  {
                    "text": "KellyWest流行病学杰出成就奖",
                    "link": "ADA 奖项/国家科学和卫生保健成就奖/KellyWest流行病学杰出成就奖"
                  },
                  {
                    "text": "杰出的科学成就奖",
                    "link": "ADA 奖项/国家科学和卫生保健成就奖/杰出的科学成就奖"
                  },
                  {
                    "text": "糖尿病杰出教育者奖",
                    "link": "ADA 奖项/国家科学和卫生保健成就奖/糖尿病杰出教育者奖"
                  }
                ]
              }
            ]
          }
        ],
        "/中国声音/": [
          {
            "text": "中国声音",
            "items": [
              {
                "text": "智能胰岛素贴片等",
                "items": [
                  {
                    "text": "20岁前新发2型糖尿病患者的心血管疾病-肾病和死亡发生率-香港全地区的8年随访监测",
                    "link": "中国声音/智能胰岛素贴片等/20岁前新发2型糖尿病患者的心血管疾病-肾病和死亡发生率-香港全地区的8年随访监测"
                  },
                  {
                    "text": "2型糖尿病代谢综合征的诊断中-腰围-身高比是比腰围更好的指标",
                    "link": "中国声音/智能胰岛素贴片等/2型糖尿病代谢综合征的诊断中-腰围-身高比是比腰围更好的指标"
                  },
                  {
                    "text": "HOMA2与2型糖尿病临床结局的相关性",
                    "link": "中国声音/智能胰岛素贴片等/HOMA2与2型糖尿病临床结局的相关性"
                  },
                  {
                    "text": "智能胰岛素贴片",
                    "link": "中国声音/智能胰岛素贴片等/智能胰岛素贴片"
                  },
                  {
                    "text": "血糖时间序列复杂性与2型糖尿病患者全因死亡率之间的相关性-一项前瞻性队列研究",
                    "link": "中国声音/智能胰岛素贴片等/血糖时间序列复杂性与2型糖尿病患者全因死亡率之间的相关性-一项前瞻性队列研究"
                  }
                ]
              }
            ]
          }
        ],
        "/治疗进展/": [
          {
            "text": "治疗进展",
            "items": [
              {
                "text": "其他治疗",
                "items": [
                  {
                    "text": "糖尿病患者和照顾者使用胰高血糖素鼻喷剂的经验研究",
                    "link": "治疗进展/其他治疗/糖尿病患者和照顾者使用胰高血糖素鼻喷剂的经验研究"
                  }
                ]
              },
              {
                "text": "肠促激素专题",
                "items": [
                  {
                    "text": "与选择性GLP-1受体激动剂相比-Tirzepatide对每单位体重减轻的胰岛素敏感性改善更大",
                    "link": "治疗进展/肠促激素专题/与选择性GLP-1受体激动剂相比-Tirzepatide对每单位体重减轻的胰岛素敏感性改善更大"
                  },
                  {
                    "text": "在2型糖尿病患者中-与司美格鲁肽相比-Tirzepatide改善了胰岛细胞功能-空腹胰高血糖素和HOMA2-B-和胰岛素敏感性-空腹胰岛素和HOMA2-IR-的标志物",
                    "link": "治疗进展/肠促激素专题/在2型糖尿病患者中-与司美格鲁肽相比-Tirzepatide改善了胰岛细胞功能-空腹胰高血糖素和HOMA2-B-和胰岛素敏感性-空腹胰岛素和HOMA2-IR-的标志物"
                  },
                  {
                    "text": "在心血管风险增加的2型糖尿病患者中-Tirzepatide与甘精胰岛素相比对HbA1c控制的持续性-SURPASS-4-",
                    "link": "治疗进展/肠促激素专题/在心血管风险增加的2型糖尿病患者中-Tirzepatide与甘精胰岛素相比对HbA1c控制的持续性-SURPASS-4-"
                  },
                  {
                    "text": "应用新型GIPGLP-1胰高血糖素三受体激动剂LY3437943-LY-12周可改善T2DM患者血糖及体重",
                    "link": "治疗进展/肠促激素专题/应用新型GIPGLP-1胰高血糖素三受体激动剂LY3437943-LY-12周可改善T2DM患者血糖及体重"
                  },
                  {
                    "text": "度拉糖肽治疗2型糖尿病-T2D-青少年患者-AWARD-PEDS随机-安慰剂对照试验的结果",
                    "link": "治疗进展/肠促激素专题/度拉糖肽治疗2型糖尿病-T2D-青少年患者-AWARD-PEDS随机-安慰剂对照试验的结果"
                  }
                ]
              },
              {
                "text": "胰岛素专题",
                "items": [
                  {
                    "text": "在主要为中国2型糖尿病-T2D-成人患者中-超快速赖脯胰岛素-URLi-相较于优泌乐-HL-改善餐后血糖-PPG-波动",
                    "link": "治疗进展/胰岛素专题/在主要为中国2型糖尿病-T2D-成人患者中-超快速赖脯胰岛素-URLi-相较于优泌乐-HL-改善餐后血糖-PPG-波动"
                  },
                  {
                    "text": "在胰岛素初治的2型糖尿病-T2D-患者中-每周一次基础胰岛素BIF的血糖控制与每日一次德谷胰岛素-DEG-相似",
                    "link": "治疗进展/胰岛素专题/在胰岛素初治的2型糖尿病-T2D-患者中-每周一次基础胰岛素BIF的血糖控制与每日一次德谷胰岛素-DEG-相似"
                  }
                ]
              }
            ]
          }
        ],
        "/疾病进展/": [
          {
            "text": "疾病进展",
            "items": [
              {
                "text": "1型糖尿病专题",
                "items": [
                  {
                    "text": "CGM指标-HbA1c和视网膜病变与长期1型糖尿病病程存在差异相关性",
                    "link": "疾病进展/1型糖尿病专题/CGM指标-HbA1c和视网膜病变与长期1型糖尿病病程存在差异相关性"
                  },
                  {
                    "text": "急性低血糖对1型糖尿病成人患者认知功能影响的系统综述和荟萃分析",
                    "link": "疾病进展/1型糖尿病专题/急性低血糖对1型糖尿病成人患者认知功能影响的系统综述和荟萃分析"
                  }
                ]
              },
              {
                "text": "NAFLD专题",
                "items": [
                  {
                    "text": "NAFLD的新兴疗法有哪些",
                    "link": "疾病进展/NAFLD专题/NAFLD的新兴疗法有哪些"
                  },
                  {
                    "text": "糖尿病-血脂学中的NASH及其诊断",
                    "link": "疾病进展/NAFLD专题/糖尿病-血脂学中的NASH及其诊断"
                  }
                ]
              },
              {
                "text": "糖尿病机制研究",
                "items": [
                  {
                    "text": "-正常-体重人群减肥后2型糖尿病的缓解-ReTUNE研究",
                    "link": "疾病进展/糖尿病机制研究/-正常-体重人群减肥后2型糖尿病的缓解-ReTUNE研究"
                  },
                  {
                    "text": "减少脂肪酸氧化可预防Intralipid诱导的人肝脏胰岛素抵抗",
                    "link": "疾病进展/糖尿病机制研究/减少脂肪酸氧化可预防Intralipid诱导的人肝脏胰岛素抵抗"
                  },
                  {
                    "text": "天然LDL上调人脂肪组织中NLRP3炎症小体-高apoB受试者2型糖尿病高风险的机制",
                    "link": "疾病进展/糖尿病机制研究/天然LDL上调人脂肪组织中NLRP3炎症小体-高apoB受试者2型糖尿病高风险的机制"
                  }
                ]
              },
              {
                "text": "肥胖专题",
                "items": [
                  {
                    "text": "SURMOUNT-1-GIP-GLP-1受体激动剂Tirzepatide在肥胖适应症的3期临床研究-",
                    "link": "疾病进展/肥胖专题/SURMOUNT-1-GIP-GLP-1受体激动剂Tirzepatide在肥胖适应症的3期临床研究-"
                  },
                  {
                    "text": "SURMOUNT-1-对当前肥胖治疗模式的启示",
                    "link": "疾病进展/肥胖专题/SURMOUNT-1-对当前肥胖治疗模式的启示"
                  },
                  {
                    "text": "药物治疗在糖尿病和肥胖治疗中的作用-一种新的治疗模式-将持续减肥作为2型糖尿病的治疗",
                    "link": "疾病进展/肥胖专题/药物治疗在糖尿病和肥胖治疗中的作用-一种新的治疗模式-将持续减肥作为2型糖尿病的治疗"
                  }
                ]
              }
            ]
          }
        ],
        "/糖尿病管理/": [
          {
            "text": "糖尿病管理",
            "items": [
              {
                "text": "2型糖尿病高血糖管理",
                "items": [
                  {
                    "text": "2022版ADA-EASD-2型糖尿病高血糖管理共识-草案-",
                    "link": "糖尿病管理/2型糖尿病高血糖管理/2022版ADA-EASD-2型糖尿病高血糖管理共识-草案-"
                  }
                ]
              },
              {
                "text": "低血糖管理",
                "items": [
                  {
                    "text": "低血糖-CGM指标和HbA1c--医生观点",
                    "link": "糖尿病管理/低血糖管理/低血糖-CGM指标和HbA1c--医生观点"
                  },
                  {
                    "text": "单一低血糖事件导致免疫应答延长",
                    "link": "糖尿病管理/低血糖管理/单一低血糖事件导致免疫应答延长"
                  }
                ]
              },
              {
                "text": "并发症管理",
                "items": [
                  {
                    "text": "糖尿病大血管病变",
                    "items": [
                      {
                        "text": "GLP1-RA-而非SGLT2i-应作为糖尿病患者缺血性卒中预防的首选抗糖尿病治疗",
                        "link": "糖尿病管理/并发症管理/糖尿病大血管病变/GLP1-RA-而非SGLT2i-应作为糖尿病患者缺血性卒中预防的首选抗糖尿病治疗"
                      },
                      {
                        "text": "REWIND中与度拉糖肽和心血管事件相关的蛋白质生物标志物",
                        "link": "糖尿病管理/并发症管理/糖尿病大血管病变/REWIND中与度拉糖肽和心血管事件相关的蛋白质生物标志物"
                      },
                      {
                        "text": "年轻成人糖尿病患者动脉僵硬度升高与心脏靶器官损伤的相关性-青少年糖尿病研究",
                        "link": "糖尿病管理/并发症管理/糖尿病大血管病变/年轻成人糖尿病患者动脉僵硬度升高与心脏靶器官损伤的相关性-青少年糖尿病研究"
                      }
                    ]
                  },
                  {
                    "text": "糖尿病肾病",
                    "items": [
                      {
                        "text": "CKD和T2D患者中按应用GLP-1RA情况分组观查Finerenone的作用",
                        "link": "糖尿病管理/并发症管理/糖尿病肾病/CKD和T2D患者中按应用GLP-1RA情况分组观查Finerenone的作用"
                      },
                      {
                        "text": "DKD试验中肾脏终点的选择-硬性肾脏结局或经过验证的替代指标-",
                        "link": "糖尿病管理/并发症管理/糖尿病肾病/DKD试验中肾脏终点的选择-硬性肾脏结局或经过验证的替代指标-"
                      },
                      {
                        "text": "共识-ADA和KDIGO关于糖尿病和CKD管理的新联合声明",
                        "link": "糖尿病管理/并发症管理/糖尿病肾病/共识-ADA和KDIGO关于糖尿病和CKD管理的新联合声明"
                      },
                      {
                        "text": "在SURPASS-4研究中-Tirzepatide与甘精胰岛素100U-mL对2糖尿病受试者肾脏结局的影响-ADA大会主席的荐选摘要-",
                        "link": "糖尿病管理/并发症管理/糖尿病肾病/在SURPASS-4研究中-Tirzepatide与甘精胰岛素100U-mL对2糖尿病受试者肾脏结局的影响-ADA大会主席的荐选摘要-"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "生活方式干预",
                "items": [
                  {
                    "text": "LookAHEAD研究中-中度至剧烈体力活动的时间与2型糖尿病血糖控制改善相关",
                    "link": "糖尿病管理/生活方式干预/LookAHEAD研究中-中度至剧烈体力活动的时间与2型糖尿病血糖控制改善相关"
                  }
                ]
              }
            ]
          }
        ]
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

