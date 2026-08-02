const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Student',
  tableName: 'STUDENT',
  columns: {
    id: { primary: true, type: 'uuid', generated: 'uuid', nullable: false },
    name: { type: 'varchar', length: 50, nullable: false },
  },
  relations: {
    class: {
      target: 'Class',                    // 指向哪個 entity（用它的 name，這裡是大寫 Class）
      type: 'many-to-one',               // 站在 Student 的角度：多位學生 → 一個班級
      joinColumn: { name: 'class_id' },   // 資料庫實際的外來鍵欄位名
      nullable: false,
    },
  },
})