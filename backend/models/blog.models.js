import { DataTypes } from 'sequelize';

import db from '../database/db.js';

const blogModel = db.define('blogs', {
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING}
})

export default blogModel