import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        initials: {
          type: Sequelize.VIRTUAL,
          get() {
            const match = this.name.split(" ");

            return match.map((partName) => partName[0]).join("");
          },
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.ENUM("admin", "manager", "developer"),
        status: Sequelize.ENUM("active", "archived"),
      },
      {
        sequelize,
        name: {
          singular: "user",
          plural: "users",
        },
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Project);
    this.hasMany(models.Task);
  }
}

export default User;
