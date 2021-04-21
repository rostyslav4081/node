module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            }
        },
        {
            tableName: 'car',
            timestamps: false
        }
    );

    return Car;
};