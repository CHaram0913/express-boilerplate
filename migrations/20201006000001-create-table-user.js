module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'user',
        comment: '유저 타입',
      },
      nickname: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        comment: '유저 별명',
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        comment: '유저 이메일',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '유저 이메일 계정 비밀번호',
      },
      last_login_ip_address: {
        type: Sequelize.STRING(30),
        allowNull: true,
        comment: '최근 로그인 IP 주소',
      },
      last_login_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: '최근 로그인 시간',
      },
      withdrawn_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: '회원 탈퇴 시간',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }, { charset: 'utf8', collate: 'utf8_general_ci' });

    return Promise.all([
      queryInterface.addIndex('user', ['type']),
      queryInterface.addIndex('user', ['nickname']),
      queryInterface.addIndex('user', ['email']),
      queryInterface.addIndex('user', ['withdrawn_at']),
      queryInterface.addIndex('user', ['created_at']),
    ]);
  },

  down: queryInterface => queryInterface.dropTable('user'),
};
