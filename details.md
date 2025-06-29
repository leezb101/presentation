<!--
 * @Author: LeeZB
 * @Date: 2025-06-24 20:28:28
 * @LastEditors: Leezb101 leezb101@126.com
 * @LastEditTime: 2025-06-25 10:27:22
 * @copyright: Copyright © 2025 高新供水.
-->
# 配套方案

### 痛点应对
1. 流程简化，为适应大多数现场真实情况，采取验收与入库合并、出库与安装合并的流程简化方案，力求合规的同时保证高效施工作业，贴合实际需求
2. 操作简便，针对现场人员复杂的情况，采用语音识别转文字的录入方案，在现场层面减少专注于录入信息的时长和操作复杂度，并于数据库中将文本信息和语音源文件共同保存，在后续审查确认方面便于精准溯源
3. 关键信息自动化，充分利用手机自身的时间、地点信息，结合下拉勾选明确的预设选项/人物，将扫码动作与外围信息紧密结合，实现事件四要素的事件记录
4. 批量入库（需厂家配合支持），在材料抵达现场时，将二维码绑定的信息完善，实现单件材料归属交付号可追溯，交付号可反查具体交付材料清单

### 细节优化
1. 专材专用，管材安装核销过程中，扫码后系统会自动比对该标识是否已绑定当前项目，若非当前项目耗材，将无法核销，避免材料在多项目并行中出现混淆、丢失等问题
2. 调拨平衡，如存在A现场材料到场暂存，B现场急缺管材时，可将A现场材料调拨至B现场，全过程操作简便，但仍严格符合“出、验、入、销”标准化流程要求
3. 备用&截管，备用码由施工方在系统申请，并准备打印设备，立项后可自行从平台下载一定数量二维码并打印备用，截管等特殊情形可通过平台扫码复制主码信息，将备用码粘贴后完成入库使用
4. 冗余复用，项目已入库管材如未用尽，可高效执行退库操作，解绑二维码与项目关联，并调拨到其他项目中再次入库使用
5. 信息比对，本系统立项时可包含材料计划及总计划，结项时可录入竣工图信息，并可自动比对材料信息，辅助审查决策
