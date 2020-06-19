const initTable = require('../config/db')
const Sequelize = require('sequelize')

const menu = initTable.define('db_menu', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  pid: {
    type: Sequelize.INTEGER(11),
  },
  menuName: {
    type: Sequelize.STRING(48),
    comment: '菜单名称'
  },
  menuId: Sequelize.INTEGER(11),
  parentMenuId: Sequelize.INTEGER(11),
  desc: {
    type: Sequelize.STRING(128),
    comment: '角色描述'
  },
  status: {
    type: Sequelize.INTEGER(4),
    defaultValue: 1,
    comment: '状态: 0：停用，1：启用(默认为1)'
  },
  create_user: Sequelize.INTEGER(11),
  create_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm')
    }
  },
  update_user: Sequelize.INTEGER(11),
  update_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm')
    }
  },
  delete_user: Sequelize.INTEGER(11),
  delete_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm')
    }
  },
  flag: {
    type: Sequelize.INTEGER(4),
    defaultValue: 1,
    comment: '状态: 0：删除，1：可用(默认为1)'
  },
}, {freezeTableName: true})

module.exports = menu