import Sequelize, { Model } from "sequelize";

import { createPasswordHash, checkPassword } from "../services/auth";

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

    this.addHook("beforeSave", async (user, options) => {
      console.log("Hook", user);
      if (user.password) {
        user.password_hash = await createPasswordHash(user.password);
      }
    });
  }

  static associate(models) {
    this.hasMany(models.Project);
    this.hasMany(models.Task);
  }

  checkPassword(password) {
    return checkPassword(this, password);
  }
}

export default User;
